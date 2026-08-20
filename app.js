// URAT PG 2026 EXAM ENGINE & AUDIO CONTROLLER (MOBILE & DESKTOP ENHANCED)

let activeQuestions = [];
let currentIndex = 0;
let soundEnabled = true;
let timerSeconds = 120 * 60; // 120 minutes countdown
let timerInterval = null;

// User state tracking per question ID
let userState = {};

// Web Audio API Context
let audioCtx = null;

function initAudio() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

// --------------------------------------------------------------------------
// SOUND SYNTHESIZER ENGINE (Web Audio API)
// --------------------------------------------------------------------------
function playRightCelebrationSound() {
  if (!soundEnabled) return;
  initAudio();
  if (!audioCtx) return;

  const now = audioCtx.currentTime;
  
  // Happy Major Chime (C5 - E5 - G5 - C6)
  const notes = [523.25, 659.25, 783.99, 1046.50];
  notes.forEach((freq, idx) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, now + idx * 0.08);

    gain.gain.setValueAtTime(0, now + idx * 0.08);
    gain.gain.linearRampToValueAtTime(0.25, now + idx * 0.08 + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.5);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(now + idx * 0.08);
    osc.stop(now + idx * 0.08 + 0.55);
  });

  // Sparkle particle effect
  triggerCelebrationParticles();
}

function playWrongSadSound() {
  if (!soundEnabled) return;
  initAudio();
  if (!audioCtx) return;

  const now = audioCtx.currentTime;

  // Sad descending wobble (Db3 -> C3)
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(146.83, now); // D3
  osc.frequency.exponentialRampToValueAtTime(123.47, now + 0.45); // B2

  // Lowpass filter for smooth soft tone
  const filter = audioCtx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(600, now);

  gain.gain.setValueAtTime(0.25, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

  osc.connect(filter);
  filter.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start(now);
  osc.stop(now + 0.55);
}

// --------------------------------------------------------------------------
// SHUFFLE ALGORITHM (Fisher-Yates)
// --------------------------------------------------------------------------
function shuffleArray(arr) {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Prepare questions with shuffled options & updated correctIndex
function prepareQuestions() {
  const shuffledRaw = shuffleArray(rawQuestions);

  activeQuestions = shuffledRaw.map((q, idx) => {
    const originalOptions = q.options;
    const correctText = originalOptions[q.correctIndex];

    // Shuffle options for this question
    const shuffledOptions = shuffleArray(originalOptions);
    const newCorrectIndex = shuffledOptions.indexOf(correctText);

    return {
      displayId: idx + 1,
      id: q.id,
      section: q.section,
      sectionId: q.sectionId,
      question: q.question,
      options: shuffledOptions,
      correctIndex: newCorrectIndex,
      explanation: q.explanation
    };
  });

  // Initialize user state
  userState = {};
  activeQuestions.forEach(q => {
    userState[q.displayId] = {
      attempts: 0,
      selectedIndices: [],
      status: 'not-visited', // 'not-visited', 'answered', 'wrong', 'review'
      isCorrect: false,
      firstTryCorrect: false
    };
  });
}

// --------------------------------------------------------------------------
// TIMER & CLOCK
// --------------------------------------------------------------------------
function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (timerSeconds <= 0) {
      clearInterval(timerInterval);
      alert("Time is up! Auto-submitting test.");
      submitTest();
      return;
    }
    timerSeconds--;
    updateTimerDisplay();
  }, 1000);
}

function updateTimerDisplay() {
  const hours = Math.floor(timerSeconds / 3600);
  const mins = Math.floor((timerSeconds % 3600) / 60);
  const secs = timerSeconds % 60;
  
  const pad = (num) => String(num).padStart(2, '0');
  document.getElementById('timer-display').innerText = `${pad(hours)}:${pad(mins)}:${pad(secs)}`;
}

// --------------------------------------------------------------------------
// UI RENDERERS
// --------------------------------------------------------------------------
function renderQuestion(index) {
  currentIndex = index;
  const q = activeQuestions[currentIndex];
  const state = userState[q.displayId];

  // Header info
  document.getElementById('current-q-num').innerText = `Question ${q.displayId} of ${activeQuestions.length}`;
  const hasDiagram = q.question.includes('svg-diagram-card') || q.question.includes('chem-diagram-box');
  const diagramTag = hasDiagram ? ' <span class="diagram-badge">📷 Diagram</span>' : '';
  document.getElementById('current-section-tag').innerHTML = `${q.section} (Sec ${q.sectionId})${diagramTag}`;
  document.getElementById('question-text').innerHTML = q.question;

  // Render options
  const optionsList = document.getElementById('options-list');
  optionsList.innerHTML = '';

  const optionPrefixes = ['A', 'B', 'C', 'D'];

  q.options.forEach((optText, optIdx) => {
    const card = document.createElement('div');
    card.className = 'option-card';
    card.dataset.index = optIdx;

    const isSelected = state.selectedIndices.includes(optIdx);
    const isCorrectOpt = optIdx === q.correctIndex;
    const isFinished = state.isCorrect || state.attempts >= 2;

    if (isSelected) {
      card.classList.add('selected');
      if (isCorrectOpt) card.classList.add('correct');
      else card.classList.add('incorrect');
    }

    // Highlight correct answer if user exhausted 2 attempts and was wrong
    if (isFinished && isCorrectOpt) {
      card.classList.add('correct');
    }

    if (isFinished) {
      card.classList.add('disabled');
    }

    card.innerHTML = `
      <div class="option-prefix">${optionPrefixes[optIdx]}</div>
      <div class="option-text">${optText}</div>
    `;

    card.addEventListener('click', () => handleOptionClick(optIdx));
    optionsList.appendChild(card);
  });

  // Render attempt status banner
  renderAttemptBanner(state);

  // Render explanation box (shown on RIGHT answer OR after 2nd attempt)
  const expBox = document.getElementById('explanation-box');
  if (state.isCorrect || state.attempts >= 2) {
    expBox.classList.add('show');
    document.getElementById('explanation-content').innerHTML = q.explanation;
  } else {
    expBox.classList.remove('show');
  }

  // Highlight Section tab
  updateSectionTabs(q.section);

  // Re-render Palette Sidebar (both Desktop & Mobile Drawer)
  renderPalette();

  // Scroll smooth to top of question on mobile
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderAttemptBanner(state) {
  const banner = document.getElementById('attempt-status-banner');
  banner.className = 'attempt-status-banner';

  if (state.firstTryCorrect) {
    banner.classList.add('show', 'success');
    banner.innerHTML = `<span>🎉 <strong>Correct on 1st Attempt! (+1 Mark)</strong> Detailed solution is unlocked below.</span>`;
  } else if (state.attempts === 1 && !state.isCorrect) {
    banner.classList.add('show', 'warning');
    banner.innerHTML = `<span>⚠️ <strong>Incorrect 1st Attempt!</strong> You lost the 1 mark for this question. You have 1 remaining chance to retry and unlock the solution.</span>`;
  } else if (state.attempts >= 2 && state.isCorrect) {
    banner.classList.add('show', 'warning');
    banner.style.backgroundColor = '#eff6ff';
    banner.style.borderColor = '#93c5fd';
    banner.style.color = '#1e40af';
    banner.innerHTML = `<span>💡 <strong>Correct on 2nd Attempt!</strong> Solution unlocked. <em>(0 marks awarded because 1st attempt was incorrect)</em></span>`;
  } else if (state.attempts >= 2 && !state.isCorrect) {
    banner.classList.add('show', 'warning');
    banner.style.backgroundColor = '#fef2f2';
    banner.style.borderColor = '#fca5a5';
    banner.style.color = '#991b1b';
    banner.innerHTML = `<span>❌ <strong>Maximum attempts used (0 marks).</strong> The correct answer and step-by-step solution are shown below.</span>`;
  } else {
    banner.classList.remove('show');
  }
}

// --------------------------------------------------------------------------
// OPTION SELECTION & RETRY LOGIC
// --------------------------------------------------------------------------
function handleOptionClick(optIdx) {
  initAudio();

  const q = activeQuestions[currentIndex];
  const state = userState[q.displayId];

  // If question is already finished (correctly answered OR 2 wrong attempts)
  if (state.isCorrect || state.attempts >= 2) return;

  // Don't allow re-clicking an already clicked wrong option
  if (state.selectedIndices.includes(optIdx)) return;

  state.attempts++;
  state.selectedIndices.push(optIdx);

  const isCorrect = (optIdx === q.correctIndex);

  if (state.attempts === 1) {
    if (isCorrect) {
      state.isCorrect = true;
      state.firstTryCorrect = true; // Earns +1 Mark
      state.status = 'answered';
      playRightCelebrationSound();
    } else {
      state.isCorrect = false;
      state.firstTryCorrect = false; // Lost 1 Mark
      state.status = 'wrong';
      playWrongSadSound();
    }
  } else if (state.attempts === 2) {
    if (isCorrect) {
      state.isCorrect = true;
      state.firstTryCorrect = false; // 0 Marks awarded
      state.status = 'answered';
      playRightCelebrationSound();
    } else {
      state.isCorrect = false;
      state.firstTryCorrect = false;
      state.status = 'wrong';
      playWrongSadSound();
    }
  }

  // Refresh UI
  renderQuestion(currentIndex);
}

// --------------------------------------------------------------------------
// PALETTE RENDERER (DESKTOP & MOBILE DRAWER)
// --------------------------------------------------------------------------
function renderPalette() {
  const gridDesk = document.getElementById('palette-grid');
  const gridMob = document.getElementById('palette-grid-mob');

  if (gridDesk) gridDesk.innerHTML = '';
  if (gridMob) gridMob.innerHTML = '';

  let currentTabSection = document.querySelector('.tab-btn.active')?.dataset.section || 'All';

  activeQuestions.forEach((q, idx) => {
    if (currentTabSection !== 'All' && q.section !== currentTabSection) {
      return;
    }

    const state = userState[q.displayId];

    const createBtn = () => {
      const btn = document.createElement('button');
      btn.className = 'q-btn';
      btn.innerText = q.displayId;

      if (idx === currentIndex) btn.classList.add('current');
      if (state.status === 'answered') btn.classList.add('answered');
      else if (state.status === 'wrong') btn.classList.add('wrong');
      else if (state.status === 'review') btn.classList.add('review');

      btn.addEventListener('click', () => {
        renderQuestion(idx);
        closePaletteDrawer();
      });
      return btn;
    };

    if (gridDesk) gridDesk.appendChild(createBtn());
    if (gridMob) gridMob.appendChild(createBtn());
  });

  // Update overall counts
  let answeredCount = 0;
  let wrongCount = 0;
  let reviewCount = 0;
  let notVisitedCount = 0;

  Object.values(userState).forEach(st => {
    if (st.status === 'answered') answeredCount++;
    else if (st.status === 'wrong') wrongCount++;
    else if (st.status === 'review') reviewCount++;
    else notVisitedCount++;
  });

  // Desktop legends
  const setTxt = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.innerText = val;
  };

  setTxt('legend-answered-cnt', answeredCount);
  setTxt('legend-wrong-cnt', wrongCount);
  setTxt('legend-review-cnt', reviewCount);
  setTxt('legend-unvisited-cnt', notVisitedCount);

  // Mobile legends
  setTxt('legend-answered-mob', answeredCount);
  setTxt('legend-wrong-mob', wrongCount);
  setTxt('legend-review-mob', reviewCount);
  setTxt('legend-unvisited-mob', notVisitedCount);
}

// --------------------------------------------------------------------------
// SECTION NAVIGATION TABS
// --------------------------------------------------------------------------
function updateSectionTabs(activeSectionName) {
  document.querySelectorAll('.tab-btn').forEach(tab => {
    if (tab.dataset.section === activeSectionName) {
      tab.classList.add('active');
    } else if (tab.dataset.section !== 'All' && activeSectionName !== 'All') {
      tab.classList.remove('active');
    }
  });
}

function jumpToSection(sectionName) {
  if (sectionName === 'All') {
    renderQuestion(0);
    return;
  }
  const firstIdx = activeQuestions.findIndex(q => q.section === sectionName);
  if (firstIdx !== -1) {
    renderQuestion(firstIdx);
  }
}

// --------------------------------------------------------------------------
// PALETTE DRAWER (MOBILE)
// --------------------------------------------------------------------------
function openPaletteDrawer() {
  const drawer = document.getElementById('palette-drawer');
  if (drawer) drawer.classList.add('active');
}

function closePaletteDrawer() {
  const drawer = document.getElementById('palette-drawer');
  if (drawer) drawer.classList.remove('active');
}

// --------------------------------------------------------------------------
// BUTTON HANDLERS
// --------------------------------------------------------------------------
function setupEventListeners() {
  // Sound toggle
  document.getElementById('sound-toggle-btn').addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    const soundLabel = document.getElementById('sound-label');
    const soundIcon = document.getElementById('sound-icon');
    if (soundEnabled) {
      soundLabel.innerText = 'ON';
      soundIcon.innerText = '🔊';
    } else {
      soundLabel.innerText = 'OFF';
      soundIcon.innerText = '🔇';
    }
  });

  // Section Tab Buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const sec = btn.dataset.section;
      jumpToSection(sec);
    });
  });

  // Navigation handlers helper
  const nextQ = () => { if (currentIndex < activeQuestions.length - 1) renderQuestion(currentIndex + 1); };
  const prevQ = () => { if (currentIndex > 0) renderQuestion(currentIndex - 1); };
  const clearQ = () => {
    const q = activeQuestions[currentIndex];
    userState[q.displayId] = { attempts: 0, selectedIndices: [], status: 'not-visited', isCorrect: false };
    renderQuestion(currentIndex);
  };
  const reviewQ = () => {
    const q = activeQuestions[currentIndex];
    userState[q.displayId].status = 'review';
    nextQ();
  };

  // Desktop buttons
  document.getElementById('btn-prev-desk')?.addEventListener('click', prevQ);
  document.getElementById('btn-next-desk')?.addEventListener('click', nextQ);
  document.getElementById('btn-clear-desk')?.addEventListener('click', clearQ);
  document.getElementById('btn-review-desk')?.addEventListener('click', reviewQ);

  // Mobile bottom bar buttons
  document.getElementById('btn-prev-mob')?.addEventListener('click', prevQ);
  document.getElementById('btn-next-mob')?.addEventListener('click', nextQ);
  document.getElementById('btn-clear-mob')?.addEventListener('click', clearQ);
  document.getElementById('btn-review-mob')?.addEventListener('click', reviewQ);

  // Mobile Drawer Toggle
  document.getElementById('btn-palette-toggle')?.addEventListener('click', openPaletteDrawer);
  document.getElementById('btn-close-drawer')?.addEventListener('click', closePaletteDrawer);

  // Restart Button
  document.getElementById('btn-restart').addEventListener('click', () => {
    restartTest();
  });

  // Submit Buttons (Desktop & Mobile Drawer)
  document.getElementById('btn-submit-main')?.addEventListener('click', openSubmitModal);
  document.getElementById('btn-submit-mob')?.addEventListener('click', () => {
    closePaletteDrawer();
    openSubmitModal();
  });

  // Modal Buttons
  document.getElementById('btn-close-modal').addEventListener('click', closeSubmitModal);
  document.getElementById('btn-confirm-submit').addEventListener('click', submitTest);
  document.getElementById('btn-restart-from-modal').addEventListener('click', () => {
    closeSubmitModal();
    restartTest();
  });
}

function openSubmitModal() {
  let answered = 0;
  let wrong = 0;
  let review = 0;
  let unvisited = 0;

  Object.values(userState).forEach(st => {
    if (st.status === 'answered') answered++;
    else if (st.status === 'wrong') wrong++;
    else if (st.status === 'review') review++;
    else unvisited++;
  });

  document.getElementById('sum-answered').innerText = answered;
  document.getElementById('sum-wrong').innerText = wrong;
  document.getElementById('sum-review').innerText = review;
  document.getElementById('sum-unvisited').innerText = unvisited;

  document.getElementById('submit-modal').classList.add('active');
}

function closeSubmitModal() {
  document.getElementById('submit-modal').classList.remove('active');
}

function submitTest() {
  clearInterval(timerInterval);

  let totalScore = 0;
  let firstTryCorrectCount = 0;
  let secondTryCorrectCount = 0;
  let wrongCount = 0;

  let secStats = {
    "Inorganic Chemistry": { total: 33, correct: 0 },
    "Organic Chemistry": { total: 34, correct: 0 },
    "Physical & Analytical Chemistry": { total: 33, correct: 0 }
  };

  activeQuestions.forEach(q => {
    const st = userState[q.displayId];
    if (st.firstTryCorrect) {
      totalScore += 1;
      firstTryCorrectCount++;
      if (secStats[q.section]) secStats[q.section].correct++;
    } else if (st.isCorrect) {
      secondTryCorrectCount++;
    } else if (st.attempts > 0) {
      wrongCount++;
    }
  });

  // Render Score Modal
  document.getElementById('modal-title').innerText = "🏆 Result Scorecard";
  document.getElementById('modal-body-content').innerHTML = `
    <div class="score-summary-grid">
      <div class="score-card">
        <div class="score-card-val">${totalScore} / 100</div>
        <div class="score-card-lbl">Total Score</div>
      </div>
      <div class="score-card">
        <div class="score-card-val" style="color: var(--success-color);">${firstTryCorrectCount}</div>
        <div class="score-card-lbl">1st Try Correct (+1)</div>
      </div>
      <div class="score-card">
        <div class="score-card-val" style="color: #3b82f6;">${secondTryCorrectCount}</div>
        <div class="score-card-lbl">2nd Try Solved (0)</div>
      </div>
      <div class="score-card">
        <div class="score-card-val" style="color: var(--danger-color);">${wrongCount}</div>
        <div class="score-card-lbl">Unsolved / Wrong</div>
      </div>
    </div>

    <h4 style="margin-top: 10px; font-weight: 700; color: #0f4c81; font-size: 0.9rem;">Section Breakdown (1st Attempt Score)</h4>
    <table class="section-score-table">
      <thead>
        <tr>
          <th>Section</th>
          <th>Score</th>
          <th>Accuracy %</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Inorganic Chemistry (33)</td>
          <td>${secStats["Inorganic Chemistry"].correct} / 33</td>
          <td>${((secStats["Inorganic Chemistry"].correct / 33) * 100).toFixed(1)}%</td>
        </tr>
        <tr>
          <td>Organic Chemistry (34)</td>
          <td>${secStats["Organic Chemistry"].correct} / 34</td>
          <td>${((secStats["Organic Chemistry"].correct / 34) * 100).toFixed(1)}%</td>
        </tr>
        <tr>
          <td>Physical & Analytical Chemistry (33)</td>
          <td>${secStats["Physical & Analytical Chemistry"].correct} / 33</td>
          <td>${((secStats["Physical & Analytical Chemistry"].correct / 33) * 100).toFixed(1)}%</td>
        </tr>
      </tbody>
    </table>
  `;

  document.getElementById('btn-confirm-submit').style.display = 'none';
  document.getElementById('submit-modal').classList.add('active');
}

function restartTest() {
  timerSeconds = 120 * 60;
  prepareQuestions();
  renderQuestion(0);
  startTimer();
}

// --------------------------------------------------------------------------
// CELEBRATION SPARKLE PARTICLES
// --------------------------------------------------------------------------
function triggerCelebrationParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ['#10b981', '#38bdf8', '#fbbf24', '#f43f5e', '#a855f7'];

  for (let i = 0; i < 40; i++) {
    particles.push({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      vx: (Math.random() - 0.5) * 10,
      vy: (Math.random() - 0.5) * 10,
      radius: Math.random() * 4 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1,
      decay: Math.random() * 0.025 + 0.02
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let active = false;

    particles.forEach(p => {
      if (p.alpha > 0) {
        active = true;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.2; // gravity
        p.alpha -= p.decay;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fill();
      }
    });

    if (active) {
      requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  animate();
}

// --------------------------------------------------------------------------
// INIT APP
// --------------------------------------------------------------------------
window.addEventListener('DOMContentLoaded', () => {
  prepareQuestions();
  setupEventListeners();
  renderQuestion(0);
  startTimer();
});
