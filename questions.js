// URAT PG 2026 M.Sc. Chemistry High-Yield Exam Question Bank (100 Questions)
const rawQuestions = [
  // =========================================================================
  // SECTION A — PHYSICAL CHEMISTRY (35 QUESTIONS: IDs 1 to 35)
  // =========================================================================
  {
    id: 1,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "For a particle of mass <i>m</i> confined in a 1D box of length <i>L</i>, what is the probability of finding the particle in the region 0 ≤ x ≤ L/4 in the first excited state (n = 2)?",
    options: ["0.25", "0.50", "0.75", "0.125"],
    correctIndex: 0, // 0.25
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. The normalized wavefunction for n = 2 is <code>ψ₂(x) = √(2/L) sin(2πx/L)</code>.<br>2. Probability P = ∫₀^(L/4) (2/L) sin²(2πx/L) dx.<br>3. Substituting u = 2πx/L, du = (2π/L)dx, limits change from 0 to π/2.<br>4. P = (1/π) ∫₀^(π/2) sin²(u) du = (1/π) [π/4] = <strong>0.25 (or 25%)</strong>."
  },
  {
    id: 2,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "Evaluate the commutator bracket [x³, p_x], where x is the position operator and p_x = −iℏ (d/dx):",
    options: ["3iℏ x²", "−3iℏ x²", "iℏ x³", "3ℏ² x"],
    correctIndex: 0, // 3iℏ x²
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Using the quantum commutator identity <code>[A^n, B] = n A^(n-1) [A, B]</code>.<br>2. We know fundamental commutator <code>[x, p_x] = iℏ</code>.<br>3. Therefore, <code>[x³, p_x] = 3 x² [x, p_x] = <strong>3iℏ x²</strong></code>."
  },
  {
    id: 3,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "According to Russell-Saunders (L-S) coupling scheme, what is the ground state term symbol for the Cr³⁺ ion (d³ configuration)?",
    options: ["⁴F₃/₂", "⁴F₉/₂", "⁴P₃/₂", "²D₅/₂"],
    correctIndex: 0, // ⁴F₃/₂
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. For d³: electrons occupy m_l = +2, +1, 0 singly with parallel spins.<br>2. Total Spin S = 1/2 + 1/2 + 1/2 = 3/2 ⇒ Spin Multiplicity <code>2S + 1 = 4</code>.<br>3. Total Orbital Angular Momentum L = 2 + 1 + 0 = 3 ⇒ Term = <strong>F</strong>.<br>4. Shell is less than half-filled, so J = |L - S| = |3 - 3/2| = 3/2.<br>5. Ground state term symbol = <strong>⁴F₃/₂</strong>."
  },
  {
    id: 4,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "Which of the following Maxwell's thermodynamic relations is CORRECT?",
    options: [
      "(∂T/∂V)_S = −(∂P/∂S)_V",
      "(∂T/∂V)_S = (∂P/∂S)_V",
      "(∂S/∂V)_T = −(∂P/∂T)_V",
      "(∂T/∂P)_S = −(∂V/∂S)_P"
    ],
    correctIndex: 0, // (∂T/∂V)_S = −(∂P/∂S)_V
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. From internal energy equation <code>dU = T dS - P dV</code>.<br>2. Since dU is an exact differential: <code>(∂T/∂V)_S = −(∂P/∂S)_V</code>.<br>3. Thus, option (A) is the correct Maxwell relation."
  },
  {
    id: 5,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "The Gibbs-Duhem equation at constant temperature and pressure for a multi-component system is expressed as:",
    options: ["∑ n_i dμ_i = 0", "∑ μ_i dn_i = 0", "∑ V_i dp_i = 0", "∑ S_i dT_i = 0"],
    correctIndex: 0, // ∑ n_i dμ_i = 0
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Total Gibbs free energy G = ∑ n_i μ_i.<br>2. Differentiating: dG = ∑ n_i dμ_i + ∑ μ_i dn_i.<br>3. At constant T and P, dG = ∑ μ_i dn_i.<br>4. Subtracting yields the <strong>Gibbs-Duhem equation: ∑ n_i dμ_i = 0</strong>."
  },
  {
    id: 6,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "According to Transition State Theory (Eyring equation), the rate constant k_r is related to enthalpy of activation (ΔH‡) and entropy of activation (ΔS‡) by:",
    options: [
      "k_r = (k_B T / h) e^(ΔS‡/R) e^(−ΔH‡/RT)",
      "k_r = (h / k_B T) e^(ΔS‡/R) e^(−ΔH‡/RT)",
      "k_r = (k_B T / h) e^(−ΔS‡/R) e^(ΔH‡/RT)",
      "k_r = (k_B / h T) e^(ΔS‡/R) e^(−ΔH‡/RT)"
    ],
    correctIndex: 0, // k_r = (k_B T / h) e^(ΔS‡/R) e^(−ΔH‡/RT)
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Eyring equation: <code>k_r = (k_B T / h) K‡ = (k_B T / h) e^(−ΔG‡/RT)</code>.<br>2. Substituting <code>ΔG‡ = ΔH‡ - TΔS‡</code> gives <strong>k_r = (k_B T / h) e^(ΔS‡/R) e^(−ΔH‡/RT)</strong>."
  },
  {
    id: 7,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "In the Lindemann-Hinshelwood mechanism for unimolecular gas reactions, the apparent order of the reaction at EXTREMELY LOW pressures is:",
    options: ["First order", "Second order", "Zero order", "Half order"],
    correctIndex: 1, // Second order
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Lindemann rate law: <code>r = (k₂ k₁ [A]²) / (k₋₁ [A] + k₂)</code>.<br>2. At very low pressure, bimolecular activation step dominates: <code>k₋₁ [A] << k₂</code>.<br>3. Rate reduces to <code>r = k₁ [A]²</code>, which is <strong>second order</strong>.<br>4. (At high pressure it becomes 1st order)."
  },
  {
    id: 8,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "In Michaelis-Menten enzyme kinetics, a double reciprocal Lineweaver-Burk plot of (1/v) vs (1/[S]) yields a straight line where the Y-intercept and X-intercept equal:",
    options: [
      "Y-intercept = 1/Vmax, X-intercept = −1/Km",
      "Y-intercept = 1/Km, X-intercept = −1/Vmax",
      "Y-intercept = Vmax, X-intercept = Km",
      "Y-intercept = Km/Vmax, X-intercept = 1/Km"
    ],
    correctIndex: 0, // Y-intercept = 1/Vmax, X-intercept = −1/Km
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Lineweaver-Burk equation: <code>1/v = (Km / Vmax) · (1/[S]) + (1/Vmax)</code>.<br>2. Comparing with y = mx + c:<br>&nbsp;&nbsp;&nbsp;• Y-intercept (1/[S] = 0) = <strong>1/Vmax</strong>.<br>&nbsp;&nbsp;&nbsp;• X-intercept (1/v = 0) = <strong>−1/Km</strong>."
  },
  {
    id: 9,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "The fluorescence quenching kinetics governed by the Stern-Volmer equation is represented by:",
    options: [
      "I₀ / I = 1 + K_SV [Q]",
      "I / I₀ = 1 + K_SV [Q]",
      "I₀ / I = K_SV [Q]",
      "I₀ − I = K_SV [Q]"
    ],
    correctIndex: 0, // I₀ / I = 1 + K_SV [Q]
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Stern-Volmer relationship relates fluorescence intensity in absence (I₀) and presence (I) of quencher [Q]:<br>2. <code>I₀ / I = 1 + k_q τ₀ [Q] = <strong>1 + K_SV [Q]</strong></code>, where K_SV is the Stern-Volmer quenching constant."
  },
  {
    id: 10,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "According to the Debye-Hückel limiting law, the mean ionic activity coefficient (γ±) of a 1:2 electrolyte (such as CaCl₂) in aqueous solution at 298 K varies with ionic strength (I) as:",
    options: ["log γ± = −1.018 √I", "log γ± = −0.509 √I", "log γ± = −2.036 √I", "log γ± = −0.254 √I"],
    correctIndex: 0, // log γ± = −1.018 √I
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Debye-Hückel limiting law: <code>log γ± = -A |z₊ z₋| √I</code>.<br>2. At 298 K in water, A = 0.509.<br>3. For 1:2 electrolyte (Ca²⁺, 2Cl⁻): <code>|z₊ z₋| = |+2 × -1| = 2</code>.<br>4. <code>log γ± = -0.509 × 2 × √I = <strong>−1.018 √I</strong></code>."
  },
  {
    id: 11,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "For an FCC crystal lattice, systematic absences in Powder X-ray Diffraction (XRD) dictate that reflections (hkl) are ALLOWED only when h, k, l are:",
    options: [
      "All even or all odd",
      "h + k + l is even",
      "h + k + l is odd",
      "h, k, l are all even only"
    ],
    correctIndex: 0, // All even or all odd
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Structure factor for FCC lattice: F_hkl ≠ 0 only when h, k, l have the same parity.<br>2. Therefore, reflections are observed only when <strong>h, k, l are unmixed (all even or all odd)</strong>.<br>3. (Note: For BCC, h + k + l must be even)."
  },
  {
    id: 12,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "The rigid rotor model for a diatomic molecule yields rotational energy levels E_J = B J(J+1). What is the frequency separation between adjacent lines in its rotational (microwave) spectrum?",
    options: ["2B", "B", "4B", "3B"],
    correctIndex: 0, // 2B
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Selection rule for pure rotational transitions: ΔJ = +1.<br>2. Transition frequency <code>ν_bar = E_(J+1) - E_J = B(J+1)(J+2) - BJ(J+1) = 2B(J+1)</code>.<br>3. For J = 0→1 (2B), J = 1→2 (4B), J = 2→3 (6B).<br>4. Separation between consecutive lines = 4B - 2B = <strong>2B</strong>."
  },
  {
    id: 13,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "In an anharmonic oscillator described by the Morse potential, the vibrational energy levels are given by E_v = (v + ½)ω_e − (v + ½)² ω_e x_e. The dissociation energy (D_e) from the minimum of the potential curve is:",
    options: [
      "D_e = ω_e / (4 x_e)",
      "D_e = ω_e / (2 x_e)",
      "D_e = ω_e x_e / 4",
      "D_e = 2 ω_e / x_e"
    ],
    correctIndex: 0, // D_e = ω_e / (4 x_e)
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. At maximum vibrational quantum number v_max, dE_v/dv = 0.<br>2. <code>ω_e - 2(v_max + 1/2) ω_e x_e = 0 ⇒ (v_max + 1/2) = 1 / (2 x_e)</code>.<br>3. Substituting back into E_v gives <strong>D_e = ω_e / (4 x_e)</strong>."
  },
  {
    id: 14,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "In ¹H-NMR spectroscopy, what is the expected splitting pattern and relative intensity ratio for the methyl protons of an isopropyl group, −CH(CH₃)₂?",
    options: [
      "Doublet (1 : 1)",
      "Triplet (1 : 2 : 1)",
      "Septet (1 : 6 : 15 : 20 : 15 : 6 : 1)",
      "Doublet (1 : 2 : 1)"
    ],
    correctIndex: 0, // Doublet (1 : 1)
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. The 6 methyl protons (-CH₃)₂ are adjacent to 1 methine proton (-CH-).<br>2. According to n + 1 rule: <code>n = 1 ⇒ 1 + 1 = 2 (Doublet)</code>.<br>3. Relative intensity ratio from Pascal's triangle for a doublet is <strong>1 : 1</strong>.<br>4. (The single methine proton splits into a septet 1:6:15:20:15:6:1)."
  },
  {
    id: 15,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "The ESR (Electron Spin Resonance) spectrum of the radical anion of benzene, [C₆H₆]•⁻, consists of how many hyperfine lines?",
    options: ["7 lines", "6 lines", "12 lines", "1 line"],
    correctIndex: 0, // 7 lines
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. In [C₆H₆]•⁻, the unpaired electron is delocalized equally over 6 equivalent protons (I = 1/2).<br>2. Number of ESR hyperfine lines = <code>2nI + 1 = 2(6)(1/2) + 1 = <strong>7 lines</strong></code>."
  },
  {
    id: 16,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "What is the Point Group symmetry of the sulfur hexafluoride (SF₆) molecule?",
    options: ["O_h", "D_4h", "T_d", "D_3h"],
    correctIndex: 0, // O_h
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. SF₆ has a regular octahedral geometry.<br>2. Symmetry elements: E, 3C₄, 4C₃, 6C₂, i, 3σ_h, 6σ_d, 3S₄, 4S₆.<br>3. This set of symmetry operations defines the <strong>O_h (Octahedral) Point Group</strong>."
  },
  {
    id: 17,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "The Polydispersity Index (PDI) of a polymer sample is defined as the ratio of Weight-Average Molar Mass (M_w) to Number-Average Molar Mass (M_n). For a PERFECTLY MONODISPERSE polymer, PDI equals:",
    options: ["1.0", "> 1.0", "< 1.0", "0.0"],
    correctIndex: 0, // 1.0
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. <code>PDI = M_w / M_n</code>.<br>2. For monodisperse polymers (all chains have identical length), M_w = M_n.<br>3. Therefore, <code>PDI = <strong>1.0</strong></code>.<br>4. (For polydisperse synthetic polymers, PDI > 1.0)."
  },
  {
    id: 18,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "The kinetic primary isotope effect (k_H / k_D) for C−H versus C−D bond cleavage is primarily caused by:",
    options: [
      "Zero-point energy difference of C−H vs C−D bonds",
      "Mass difference altering activation enthalpy ΔH‡ only",
      "Electronic charge distribution difference",
      "Tunneling effect exclusively"
    ],
    correctIndex: 0, // Zero-point energy difference of C−H vs C−D bonds
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Zero-point energy <code>E₀ = ½ h ν</code> depends on reduced mass μ.<br>2. Deuterium has twice the mass of protium, lowering the vibrational frequency and zero-point energy of C−D.<br>3. C−D requires higher activation energy to break, leading to <code>k_H / k_D ≈ 6.5–7.0</code> at 298 K."
  },
  {
    id: 19,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "The BET (Brunauer-Emmett-Teller) adsorption isotherm equation for gas adsorption on solids is applicable to:",
    options: [
      "Multilayer physical adsorption",
      "Monolayer chemical adsorption only",
      "Liquid-liquid interface adsorption",
      "Chemisorption at high pressure"
    ],
    correctIndex: 0, // Multilayer physical adsorption
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Langmuir isotherm assumes monolayer adsorption.<br>2. <strong>BET isotherm</strong> extends Langmuir theory to account for <strong>multilayer physisorption</strong> on porous/non-porous solid surfaces."
  },
  {
    id: 20,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "According to the van 't Hoff reaction isochore, a plot of ln(K_p) versus (1/T) yields a straight line with a slope equal to:",
    options: ["−ΔH° / R", "ΔH° / R", "−ΔG° / R", "ΔS° / R"],
    correctIndex: 0, // −ΔH° / R
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Integrated van 't Hoff equation: <code>ln K_p = (−ΔH° / R) · (1/T) + (ΔS° / R)</code>.<br>2. Comparing with y = mx + c, the slope is <strong>−ΔH° / R</strong>."
  },
  {
    id: 21,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "The canonical partition function Q for a system of N non-interacting indistinguishable particles is related to single-particle partition function q by:",
    options: ["Q = q^N / N!", "Q = q^N", "Q = N! q^N", "Q = q / N!"],
    correctIndex: 0, // Q = q^N / N!
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. For indistinguishable particles (gases), correcting for N! identical microstates yields <code>Q = q^N / N!</code>.<br>2. (For distinguishable particles in crystals, Q = q^N)."
  },
  {
    id: 22,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "Which of the following molecules exhibits a Pure Rotational (Microwave) Spectrum?",
    options: ["HCl", "N₂", "O₂", "CO₂"],
    correctIndex: 0, // HCl
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. A molecule is microwave active ONLY if it possesses a permanent electric dipole moment.<br>2. Homonuclear N₂, O₂ and linear symmetric CO₂ have zero permanent dipole moment.<br>3. <strong>HCl</strong> is polar (μ ≠ 0) and thus microwave active."
  },
  {
    id: 23,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "In a binary condensed system at constant atmospheric pressure, the reduced Phase Rule equation is:",
    options: ["F' = C − P + 1", "F' = C − P + 2", "F' = C − P", "F' = P − C + 1"],
    correctIndex: 0, // F' = C − P + 1
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Standard Phase Rule: F = C - P + 2.<br>2. At fixed pressure (vapor phase ignored for condensed systems), 1 degree of freedom (pressure) is fixed.<br>3. Reduced Phase Rule: <code>F' = C - P + 1</code>."
  },
  {
    id: 24,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "The zero-point energy of a 1D simple harmonic oscillator of fundamental frequency ν is:",
    options: ["½ hν", "hν", "frac{3}{2} hν", "0"],
    correctIndex: 0, // ½ hν
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Quantum harmonic oscillator energy: <code>E_v = (v + ½) hν</code>.<br>2. Ground state (v = 0): <code>E₀ = <strong>½ hν</strong></code>."
  },
  {
    id: 25,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "The overpotential (η) in an electrochemical cell at high current density is related to current density (j) by the Tafel equation:",
    options: ["η = a + b log j", "η = a − b j", "η = a log(1 + j)", "η = a e^(b j)"],
    correctIndex: 0, // η = a + b log j
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. At high overpotentials (|η| > 118 mV), the Butler-Volmer equation simplifies to the <strong>Tafel equation: η = a + b log j</strong>, where b is the Tafel slope."
  },
  {
    id: 26,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "What is the Point Group symmetry of the Allene molecule (CH₂=C=CH₂) in its ground state geometry?",
    options: ["D_2d", "D_2h", "C_2v", "D_4d"],
    correctIndex: 0, // D_2d
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Allene has perpendicular terminal =CH₂ planes.<br>2. Symmetry elements: 3 mutually perpendicular C₂ axes (one along C=C=C axis, two bisecting H-C-H angles), 2 dihedral planes σ_d, and S₄ improper rotation axis.<br>3. Point Group = <strong>D_2d</strong>."
  },
  {
    id: 27,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "For benzoic acid associating into dimers in benzene, C₆H₅COOH ⇌ ½ (C₆H₅COOH)₂, if α is the degree of association, the van 't Hoff factor (i) is:",
    options: ["i = 1 − α/2", "i = 1 + α", "i = 1 − α", "i = 1 + α/2"],
    correctIndex: 0, // i = 1 − α/2
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. For dimerization (n = 2): <code>i = 1 + (1/n - 1)α</code>.<br>2. Substituting n = 2: <code>i = 1 + (1/2 - 1)α = <strong>1 − α/2</strong></code>."
  },
  {
    id: 28,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "In a Raman spectrum, the intensity ratio of Anti-Stokes lines to Stokes lines increases with:",
    options: ["Increasing Temperature", "Decreasing Temperature", "Increasing Pressure", "Independent of Temperature"],
    correctIndex: 0, // Increasing Temperature
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Anti-Stokes lines originate from excited vibrational states (v = 1).<br>2. Population of v = 1 relative to v = 0 is governed by Boltzmann factor <code>e^(−hν/k_B T)</code>.<br>3. As <strong>Temperature increases</strong>, v = 1 population increases, raising Anti-Stokes line intensity."
  },
  {
    id: 29,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "Which equation defines the Smoluchowski relation for electrophoretic mobility (u) and Zeta Potential (ζ)?",
    options: ["u = ε ζ / η", "u = η ζ / ε", "u = ε η / ζ", "u = 4π ε ζ / η"],
    correctIndex: 0, // u = ε ζ / η
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Smoluchowski equation for electrophoretic mobility of colloidal particles: <code>u = ε ζ / η</code>, where ε is permittivity and η is viscosity of the medium."
  },
  {
    id: 30,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "The chemical potential (μ_i) of a component i in an ideal gas mixture at temperature T and partial pressure p_i is:",
    options: [
      "μ_i = μ_i° + RT ln(p_i / p°)",
      "μ_i = μ_i° − RT ln(p_i / p°)",
      "μ_i = μ_i° + RT (p_i / p°)",
      "μ_i = RT ln(p_i)"
    ],
    correctIndex: 0, // μ_i = μ_i° + RT ln(p_i / p°)
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Integrating dμ_i = V_m dp_i = (RT/p) dp for an ideal gas yields <strong>μ_i = μ_i° + RT ln(p_i / p°)</strong>."
  },
  {
    id: 31,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "In an EMF measurement of a concentration cell with transference, [Zn | ZnSO₄(a₁) ┊ ZnSO₄(a₂) | Zn], the EMF is given by:",
    options: [
      "E = 2 t_− (RT/2F) ln(a₂ / a₁)",
      "E = t_− (RT/F) ln(a₂ / a₁)",
      "E = 2 t₊ (RT/2F) ln(a₂ / a₁)",
      "E = (RT/2F) ln(a₂ / a₁)"
    ],
    correctIndex: 0, // E = 2 t_− (RT/2F) ln(a₂ / a₁)
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. For a concentration cell reversible to cations with transference of anions (t_−):<br>2. <code>E = (t_− / z_+) (v / v_+) RT/F ln(a₂/a₁) = <strong>2 t_− (RT/2F) ln(a₂/a₁)</strong></code>."
  },
  {
    id: 32,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "What is the Hermitian operator property regarding eigenvalues?",
    options: [
      "All eigenvalues of a Hermitian operator are real numbers",
      "Eigenvalues are purely imaginary",
      "Eigenvalues are complex conjugate pairs",
      "Eigenvalues are always positive integers"
    ],
    correctIndex: 0, // All eigenvalues of a Hermitian operator are real numbers
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. A fundamental postulate of quantum mechanics states that physical observables correspond to Hermitian operators.<br>2. A key mathematical theorem proves that <strong>all eigenvalues of a Hermitian operator are strictly real</strong>."
  },
  {
    id: 33,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "What is the slope of a plot of 1/C versus time t for a second-order reaction A → products?",
    options: ["+k", "−k", "+2k", "−k/2"],
    correctIndex: 0, // +k
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Integrated 2nd order rate law: <code>1/[A]_t = k t + 1/[A]₀</code>.<br>2. Comparing with y = mx + c, the slope m is <strong>+k</strong>."
  },
  {
    id: 34,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "In a non-ideal solution exhibiting POSITIVE deviation from Raoult's Law (e.g. ethanol + acetone):",
    options: [
      "ΔH_mix > 0 and ΔV_mix > 0",
      "ΔH_mix < 0 and ΔV_mix < 0",
      "ΔH_mix = 0 and ΔV_mix = 0",
      "ΔH_mix < 0 and ΔV_mix > 0"
    ],
    correctIndex: 0, // ΔH_mix > 0 and ΔV_mix > 0
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Positive deviation occurs when A-B intermolecular forces are weaker than A-A and B-B forces.<br>2. Breaking strong homeo-interactions absorbs heat (<code>ΔH_mix > 0</code>, endothermic) and increases volume (<code>ΔV_mix > 0</code>)."
  },
  {
    id: 35,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "What is the degree of freedom at the Eutectic Point in a two-component solid-liquid phase equilibrium at constant pressure?",
    options: ["0 (Invariant)", "1 (Univariant)", "2 (Bivariant)", "3"],
    correctIndex: 0, // 0 (Invariant)
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. At eutectic point, 3 phases coexist: Solid A, Solid B, and Liquid solution (P = 3).<br>2. Reduced Phase Rule: <code>F' = C - P + 1 = 2 - 3 + 1 = <strong>0 (Invariant)</strong></code>.<br>3. Temperature and composition are fixed."
  },

  // =========================================================================
  // SECTION B — INORGANIC CHEMISTRY (35 QUESTIONS: IDs 36 to 70)
  // =========================================================================
  {
    id: 36,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Calculate the Crystal Field Stabilization Energy (CFSE) for a high-spin d⁶ octahedral complex ion (e.g., [Fe(H₂O)₆]²⁺):",
    options: ["−0.4 Δo", "−2.4 Δo", "−1.2 Δo", "−0.6 Δo"],
    correctIndex: 0, // −0.4 Δo
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. High-spin d⁶ in octahedral field has configuration: <code>t2g⁴ eg²</code>.<br>2. <code>CFSE = [4 × (-0.4) + 2 × (+0.6)] Δo = [-1.6 + 1.2] Δo = <strong>−0.4 Δo</strong></code>."
  },
  {
    id: 37,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "According to the Trans-Effect series in square planar Pt(II) complexes, which ligand has the STRONGEST trans-directing ability?",
    options: ["CN⁻", "NH₃", "Cl⁻", "H₂O"],
    correctIndex: 0, // CN⁻
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Trans-effect order: <code>CN⁻ ≈ CO ≈ C₂H₄ > PR₃ > NO₂⁻ > I⁻ > Br⁻ > Cl⁻ > NH₃ > H₂O</code>.<br>2. <strong>CN⁻</strong> is a strong π-acceptor ligand with the highest trans-directing capability."
  },
  {
    id: 38,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "In the electron-transfer reaction [Co(NH₃)₅Cl]²⁺ + [Cr(H₂O)₆]²⁺ + 5H⁺ → [Co(H₂O)₆]²⁺ + [Cr(H₂O)₅Cl]²⁺ + 5NH₄⁺, the reaction proceeds via:",
    options: [
      "Inner-sphere mechanism with Cl⁻ acting as a bridging ligand",
      "Outer-sphere mechanism without ligand transfer",
      "Two-electron oxidative addition",
      "Free radical substitution mechanism"
    ],
    correctIndex: 0, // Inner-sphere mechanism with Cl⁻ acting as a bridging ligand
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Co(III) complex is inert, Cr(II) complex is labile.<br>2. Chloride forms a <code>Co(III)-Cl-Cr(II)</code> binuclear bridge.<br>3. Electron transfers through the bridge, converting Cr(II) to inert Cr(III)-Cl and Co(III) to labile Co(II), which loses NH₃.<br>4. Classic <strong>Taube Inner-Sphere Mechanism</strong>."
  },
  {
    id: 39,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "According to Wade's Rules, what is the cluster structure type of the borane anion B₅H₈⁻?",
    options: ["Nido", "Closo", "Arachno", "Hypho"],
    correctIndex: 0, // Nido
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Formula B₅H₈⁻ is equivalent to <code>B_n H_(n+4)</code> with n = 5 (since B₅H₅⁴⁻ ⇒ B₅H₉ is B₅H₅⁴⁻ ⇒ Nido).<br>2. Cluster electron pairs = (5×2 + 8 + 1)/2 = 19/2 = 9.5? No:<br>&nbsp;&nbsp;&nbsp;• 5 B-H units = 5×2 = 10 e⁻.<br>&nbsp;&nbsp;&nbsp;• 3 extra H = 3 e⁻.<br>&nbsp;&nbsp;&nbsp;• Charge = 1 e⁻.<br>&nbsp;&nbsp;&nbsp;• Total skeletal e⁻ = 14 e⁻ = 7 pairs = n + 2 pairs.<br>3. <code>n + 2</code> skeletal pairs corresponds to a <strong>Nido</strong> cluster."
  },
  {
    id: 40,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "In metal carbonyl complexes, back-bonding (M d_π → CO π*) causes which change in the CO stretching frequency (ν_CO)?",
    options: [
      "Decreases ν_CO (shift to lower wavenumber)",
      "Increases ν_CO (shift to higher wavenumber)",
      "No effect on ν_CO",
      "Completely eliminates the ν_CO IR band"
    ],
    correctIndex: 0, // Decreases ν_CO (shift to lower wavenumber)
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. M → CO π-backdonation fills antibonding π* orbitals of CO.<br>2. This weakens C≡O bond strength (reduces C-O bond order).<br>3. Force constant k decreases, so <strong>ν_CO shifts to lower wavenumber</strong>."
  },
  {
    id: 41,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Arrange the following metal carbonyls in order of INCREASING C−O IR stretching frequency (ν_CO): [Fe(CO)₄]²⁻, [Mn(CO)₆]⁺, [Cr(CO)₆], [V(CO)₆]⁻",
    options: [
      "[Fe(CO)₄]²⁻ < [V(CO)₆]⁻ < [Cr(CO)₆] < [Mn(CO)₆]⁺",
      "[Mn(CO)₆]⁺ < [Cr(CO)₆] < [V(CO)₆]⁻ < [Fe(CO)₄]²⁻",
      "[Cr(CO)₆] < [V(CO)₆]⁻ < [Fe(CO)₄]²⁻ < [Mn(CO)₆]⁺",
      "[Fe(CO)₄]²⁻ < [Cr(CO)₆] < [V(CO)₆]⁻ < [Mn(CO)₆]⁺"
    ],
    correctIndex: 0, // [Fe(CO)₄]²⁻ < [V(CO)₆]⁻ < [Cr(CO)₆] < [Mn(CO)₆]⁺
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Higher negative charge on metal increases M → CO π-backdonation, weakening C-O bond and lowering ν_CO.<br>2. Fe(-2) has highest backdonation (lowest ν_CO), Mn(+1) has lowest backdonation (highest ν_CO).<br>3. Order: <strong>[Fe(CO)₄]²⁻ < [V(CO)₆]⁻ < [Cr(CO)₆] < [Mn(CO)₆]⁺</strong>."
  },
  {
    id: 42,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "What is the total number of Metal-Metal (M−M) single bonds present in the dinuclear carbonyl Mn₂(CO)₁₀ (satisfying 18-electron rule)?",
    options: ["1", "2", "3", "0"],
    correctIndex: 0, // 1
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Total valence electrons = 2(Mn) + 10(CO) = 2(7) + 10(2) = 14 + 20 = 34.<br>2. Total target electrons for 2 metals = 2 × 18 = 36.<br>3. Number of M-M bonds = <code>(36 - 34) / 2 = <strong>1</strong></code> (one Mn-Mn single bond)."
  },
  {
    id: 43,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "In the bioinorganic mechanism of Carbonic Anhydrase, the central Zn²⁺ ion is coordinated to three histidine residues and a water/OH⁻ molecule. What is the role of Zn²⁺?",
    options: [
      "Lowers pKa of bound H₂O to generate a nucleophilic OH⁻ at pH 7",
      "Acts as a one-electron redox agent",
      "Binds molecular oxygen directly",
      "Oxidizes CO₂ to CO₃²⁻ directly"
    ],
    correctIndex: 0, // Lowers pKa of bound H₂O to generate a nucleophilic OH⁻ at pH 7
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Zn²⁺ is a strong Lewis acid.<br>2. Coordination to Zn²⁺ lowers the pKa of bound H₂O from 14 to ~7.<br>3. This generates a powerful nucleophilic Zn-OH⁻ complex at physiological pH that rapidly attacks CO₂."
  },
  {
    id: 44,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "What is the active structural feature of the anticancer drug Cisplatin, cis-[Pt(NH₃)₂Cl₂], when it interacts with cell DNA?",
    options: [
      "Loss of Cl⁻ ions followed by intra-strand crosslinking to N7 of adjacent Guanine bases",
      "Loss of NH₃ ligands followed by intercalation between base pairs",
      "Redox reduction of Pt(II) to Pt(0) inside nucleus",
      "Alkylation of phosphate backbone"
    ],
    correctIndex: 0, // Loss of Cl⁻ ions followed by intra-strand crosslinking to N7 of adjacent Guanine bases
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. In cytoplasm (low Cl⁻), Cisplatin hydrolyzes losing 2 Cl⁻ ligands.<br>2. The resulting aquated Pt(II) species binds to N7 of two adjacent Guanine residues in DNA.<br>3. This creates a severe 1,2-intrastrand crosslink that bends DNA, blocking replication."
  },
  {
    id: 45,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Borazine (B₃N₃H₆), often termed 'Inorganic Benzene', undergoes addition reactions far more readily than Benzene because:",
    options: [
      "B−N bonds are polar due to electronegativity difference between B and N",
      "Borazine lacks π-electrons completely",
      "Borazine is non-planar",
      "Borazine is antiaromatic"
    ],
    correctIndex: 0, // B−N bonds are polar due to electronegativity difference between B and N
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Nitrogen is more electronegative than Boron, making B-N π-bonds polar (Bδ+ − Nδ-).<br>2. Partial positive charge on Boron invites electrophilic/nucleophilic attack, making Borazine far more reactive towards additions than non-polar benzene."
  },
  {
    id: 46,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Which silicate structure type contains discrete [Si₂O₇]⁶⁻ ions formed by sharing one oxygen atom between two tetrahedra?",
    options: ["Pyrosilicates (Sorosilicates)", "Orthosilicates (Nesosilicates)", "Chain Silicates (Inosilicates)", "Sheet Silicates (Phyllosilicates)"],
    correctIndex: 0, // Pyrosilicates (Sorosilicates)
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Orthosilicates = [SiO₄]⁴⁻ (0 shared O).<br>2. <strong>Pyrosilicates (Sorosilicates) = [Si₂O₇]⁶⁻</strong> (1 shared corner O).<br>3. Cyclic/Chain silicates = 2 shared O.<br>4. Sheet silicates = 3 shared O."
  },
  {
    id: 47,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "According to VSEPR theory, what are the molecular geometries of XeF₂ and XeF₄ respectively?",
    options: [
      "Linear and Square Planar",
      "V-shaped and Tetrahedral",
      "Linear and Tetrahedral",
      "Trigonal bipyramidal and Octahedral"
    ],
    correctIndex: 0, // Linear and Square Planar
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. XeF₂: Steric No. = 2 bp + 3 lp = 5 (Trigonal bipyramidal e⁻ geometry, 3 lp in equatorial position ⇒ <strong>Linear shape</strong>).<br>2. XeF₄: Steric No. = 4 bp + 2 lp = 6 (Octahedral e⁻ geometry, 2 lp in axial position ⇒ <strong>Square Planar shape</strong>)."
  },
  {
    id: 48,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "The Nephelauxetic effect in transition metal complexes measures:",
    options: [
      "Expansion of d-electron cloud due to metal-ligand covalent bonding",
      "Crystal field splitting energy Δo strictly",
      "Jahn-Teller elongation magnitude",
      "Spin-orbit coupling constant"
    ],
    correctIndex: 0, // Expansion of d-electron cloud due to metal-ligand covalent bonding
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Nephelauxetic means 'cloud expanding'.<br>2. Overlap of metal and ligand orbitals delocalizes d-electrons onto ligands, reducing inter-electronic repulsion parameter B (Racah parameter).<br>3. Nephelauxetic ratio <code>β = B_complex / B_free_ion < 1</code> measures <strong>covalency</strong>."
  },
  {
    id: 49,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "The spin-only magnetic moment of [Mn(H₂O)₆]²⁺ (high-spin d⁵) is:",
    options: ["5.92 B.M.", "4.90 B.M.", "3.87 B.M.", "1.73 B.M."],
    correctIndex: 0, // 5.92 B.M.
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. High-spin d⁵ has 5 unpaired electrons (n = 5).<br>2. <code>μ_spin = √(n(n+2)) = √(5 × 7) = √35 = <strong>5.92 B.M.</strong></code>."
  },
  {
    id: 50,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "In the catalytic cycle of Ziegler-Natta polymerization of ethylene using TiCl₄/AlEt₃, the crucial step for chain growth is:",
    options: [
      "Migratory insertion of ethylene into Ti−Alkyl σ-bond",
      "Oxidative addition of ethylene to Ti(IV)",
      "Reductive elimination of polyethylene",
      "β-hydride elimination"
    ],
    correctIndex: 0, // Migratory insertion of ethylene into Ti−Alkyl σ-bond
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Ethylene coordinates to a vacant site on the titanium complex.<br>2. The coordinated ethylene undergoes <strong>migratory insertion into the Ti−carbon σ-bond</strong>, extending the polymer chain by 2 carbons."
  },
  {
    id: 51,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Hemocyanin, the oxygen carrier pigment in mollusks and arthropods, contains which active site metal complex?",
    options: [
      "Dinuclear Copper center: Cu(I) in deoxy form, Cu(II) bound to peroxide in oxy form",
      "Iron-porphyrin complex identical to hemoglobin",
      "Mononuclear Zinc complex",
      "Dinuclear Cobalt-peroxide complex"
    ],
    correctIndex: 0, // Dinuclear Copper center: Cu(I) in deoxy form, Cu(II) bound to peroxide in oxy form
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Deoxyhemocyanin contains colorless <code>Cu(I)-Cu(I)</code>.<br>2. Oxygenation oxidizes Cu(I) to <code>Cu(II)-Cu(II)</code> and reduces O₂ to bridging peroxide (O₂²⁻).<br>3. Intense blue color of oxyhemocyanin arises from O₂²⁻ → Cu(II) charge transfer."
  },
  {
    id: 52,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "What is the ground state Russell-Saunders term for a Lanthanide ion with 4f⁷ configuration (e.g. Gd³⁺)?",
    options: ["⁸S₇/₂", "⁷F₀", "⁶H₁₅/₂", "²F₅/₂"],
    correctIndex: 0, // ⁸S₇/₂
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. 4f⁷ has 7 electrons occupying m_l = +3, +2, +1, 0, -1, -2, -3 singly.<br>2. Total L = 0 ⇒ Term = <strong>S</strong>.<br>3. Total S = 7 × 1/2 = 7/2 ⇒ Multiplicity = 2(7/2) + 1 = 8.<br>4. J = L + S = 0 + 7/2 = 7/2.<br>5. Ground term symbol = <strong>⁸S₇/₂</strong>."
  },
  {
    id: 53,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Which indicator is commonly used in complexometric EDTA titrations of Ca²⁺ and Mg²⁺ at pH 10?",
    options: ["Eriochrome Black T (EBT)", "Phenolphthalein", "Methyl Orange", "Potassium Chromate"],
    correctIndex: 0, // Eriochrome Black T (EBT)
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. <strong>Eriochrome Black T (EBT)</strong> is a metallochromic indicator.<br>2. It forms a wine-red complex with metal ions at pH 10, which turns clear blue when EDTA displaces EBT at the end-point."
  },
  {
    id: 54,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "The electronic spectra of Lanthanide(III) complexes exhibit extremely sharp, line-like absorption bands because:",
    options: [
      "4f orbitals are deeply buried and shielded by 5s and 5p subshells from crystal field environment",
      "f-f transitions are Laporte allowed",
      "Lanthanides do not form covalent bonds",
      "Spin-orbit coupling is zero"
    ],
    correctIndex: 0, // 4f orbitals are deeply buried and shielded by 5s and 5p subshells from crystal field environment
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. 4f electrons are inner electrons shielded from surrounding ligands by outer 5s² 5p⁶ shells.<br>2. Metal-ligand vibrations hardly affect 4f energy levels, resulting in <strong>atomic-like, sharp line absorption spectra</strong>."
  },
  {
    id: 55,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "In the Wacker Process for converting ethylene to acetaldehyde, the primary catalyst component and co-catalyst are:",
    options: ["PdCl₂ (catalyst) and CuCl₂ (co-catalyst)", "RhCl(PPh₃)₃ and H₂", "TiCl₄ and AlEt₃", "Fe(CO)₅ and NaOH"],
    correctIndex: 0, // PdCl₂ (catalyst) and CuCl₂ (co-catalyst)
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Wacker process oxidizes ethylene to acetaldehyde using <strong>PdCl₂</strong> as catalyst.<br>2. <strong>CuCl₂</strong> acts as co-catalyst to re-oxidize reduced Pd(0) back to Pd(II) in situ using O₂."
  },
  {
    id: 56,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Which of the following compounds is ISOLOBAL to the CH₃ (methyl) radical?",
    options: ["Mn(CO)₅", "Fe(CO)₄", "Cr(CO)₅", "CpFe(CO)₂⁻"],
    correctIndex: 0, // Mn(CO)₅
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Methyl radical CH₃ has 7 valence electrons (1 electron short of octet).<br>2. <code>Mn(CO)₅</code> has 7(Mn) + 10(CO) = 17 electrons (1 electron short of 18-electron rule).<br>3. According to Hoffmann's Isolobal Analogy, <strong>CH₃ ⟷ Mn(CO)₅</strong>."
  },
  {
    id: 57,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "What type of isomerism is displayed by the pair of coordination complexes [Co(NH₃)₅(NO₂)]Cl₂ (yellow) and [Co(NH₃)₅(ONO)]Cl₂ (red)?",
    options: ["Linkage Isomerism", "Ionization Isomerism", "Coordination Isomerism", "Hydrate Isomerism"],
    correctIndex: 0, // Linkage Isomerism
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. NO₂⁻ is an ambidentate ligand.<br>2. In nitro isomer, N coordinates to Co. In nitrito isomer, O coordinates to Co.<br>3. This is classic <strong>Linkage Isomerism</strong>."
  },
  {
    id: 58,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Dissolving alkali metals (e.g. Na or K) in liquid ammonia produces a deep blue, paramagnetic solution. This color and conductivity arise from:",
    options: ["Solvated (ammoniated) electrons, e⁻(NH₃)", "Formation of Na⁻ amide ions", "Dimerization to Na₂ molecules", "Protonation of ammonia"],
    correctIndex: 0, // Solvated (ammoniated) electrons, e⁻(NH₃)
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Alkali metal ionizes in liquid NH₃: <code>M → M⁺(NH₃)_x + e⁻(NH₃)_y</code>.<br>2. The <strong>solvated electrons</strong> absorb in the near-IR region, imparting an intense deep blue color and high electrical conductivity."
  },
  {
    id: 59,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "The Orgel diagram for a d⁹ octahedral complex (such as [Cu(H₂O)₆]²⁺) exhibits how many d-d transition absorption bands?",
    options: ["1 band (due to ²E_g → ²T_2g transition)", "3 bands", "2 bands", "0 bands"],
    correctIndex: 0, // 1 band (due to ²E_g → ²T_2g transition)
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Ground free ion term for d⁹ is ²D.<br>2. In octahedral field, ²D splits into ²E_g and ²T_2g states.<br>3. Only <strong>1 spin-allowed d-d transition band (²E_g → ²T_2g)</strong> is predicted by Orgel diagram."
  },
  {
    id: 60,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "According to HSAB principle, which complex is expected to have the HIGHEST thermodynamic stability constant?",
    options: ["[AgI₂]⁻", "[AgF₂]⁻", "[LiI₂]⁻", "[HgF₄]²⁻"],
    correctIndex: 0, // [AgI₂]⁻
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. HSAB Principle: Soft acids prefer soft bases; hard acids prefer hard bases.<br>2. Ag⁺ is a classic <strong>Soft Acid</strong> and I⁻ is a classic <strong>Soft Base</strong>.<br>3. Soft-Soft interaction makes <strong>[AgI₂]⁻</strong> extremely stable."
  },
  {
    id: 61,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Tetrasulfur tetranitride (S₄N₄) has a cradle-like structure containing which type of transannular interaction?",
    options: ["Weak S···S transannular bonding interactions", "N···N double bonds", "S=S triple bonds", "Planar aromatic conjugated ring"],
    correctIndex: 0, // Weak S···S transannular bonding interactions
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. S₄N₄ has a 8-membered cage/cradle structure.<br>2. The 4 sulfur atoms form two transannular <strong>S···S weak bonding interactions</strong> (distance ~2.58 Å), holding the cradle together."
  },
  {
    id: 62,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "In Myoglobin, the binding of O₂ to the Fe(II) center causes the Iron atom to shift:",
    options: [
      "Into the plane of the porphyrin ring (high-spin to low-spin transition)",
      "Out of the plane of the porphyrin ring",
      "From Fe(II) to Fe(IV)",
      "To form a dimeric bridged dimer"
    ],
    correctIndex: 0, // Into the plane of the porphyrin ring (high-spin to low-spin transition)
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Deoxymyoglobin has high-spin Fe(II) (r = 0.78 Å), which is too large to fit inside porphyrin cavity (0.55 Å out of plane).<br>2. Oxygenation converts Fe(II) to low-spin (r = 0.61 Å), pulling the Fe atom <strong>into the plane of the porphyrin ring</strong>."
  },
  {
    id: 63,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Which of the following organometallic complexes is diamagnetic and obeys the 18-electron rule?",
    options: ["Fe(η⁵-C₅H₅)₂ (Ferrocene)", "Co(η⁵-C₅H₅)₂ (Cobaltocene)", "Ni(η⁵-C₅H₅)₂ (Nickelocene)", "Cr(η⁵-C₅H₅)₂"],
    correctIndex: 0, // Fe(η⁵-C₅H₅)₂ (Ferrocene)
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Ferrocene: Fe(II) has 6 d-electrons; 2 cyclopentadienyl rings (Cp⁻) donate 6 e⁻ each.<br>2. Total valence e⁻ = 6 + 2(6) = <strong>18 electrons</strong>.<br>3. Fully filled shell = <strong>Diamagnetic</strong>."
  },
  {
    id: 64,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Which radioisotope decay law describes Radioactive Equilibrium when the parent half-life is MUCH GREATER than the daughter half-life (t1/2(P) >> t1/2(D))?",
    options: ["Secular Equilibrium (A_P = A_D)", "Transient Equilibrium", "No Equilibrium", "Dynamic Equilibrium"],
    correctIndex: 0, // Secular Equilibrium (A_P = A_D)
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. When parent half-life is immensely long (e.g. ²³⁸U → ²²⁶Ra), parent activity remains constant.<br>2. Daughter activity reaches equality with parent: <code>N_P λ_P = N_D λ_D (A_P = A_D)</code>.<br>3. This state is called <strong>Secular Equilibrium</strong>."
  },
  {
    id: 65,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "What is the geometry and central atom hybridization of iodine in the interhalogen ion IF₄⁻?",
    options: ["Square Planar (sp³d²)", "Tetrahedral (sp³)", "See-saw (sp³d)", "Trigonal bipyramidal (sp³d)"],
    correctIndex: 0, // Square Planar (sp³d²)
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Central I has 7 valence e⁻ + 1 (charge) = 8 e⁻.<br>2. 4 single I-F bonds + 2 lone pairs = Steric No. 6.<br>3. Hybridization = <strong>sp³d²</strong> with 2 axial lone pairs ⇒ <strong>Square Planar shape</strong>."
  },
  {
    id: 66,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Rubredoxin is an iron-sulfur protein involved in electron transfer. What is the active site structure of Rubredoxin?",
    options: [
      "One Fe atom tetrahedrally coordinated to 4 Cysteine sulfur atoms",
      "Two Fe atoms bridged by 2 inorganic S²⁻ sulfide ions",
      "Four Fe and 4 S²⁻ forming a cubane structure",
      "One Fe atom in an octahedral porphyrin ring"
    ],
    correctIndex: 0, // One Fe atom tetrahedrally coordinated to 4 Cysteine sulfur atoms
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. <strong>Rubredoxin</strong> contains a single Fe center [1Fe-0S] bound tetrahedrally to 4 Cysteine cysteine-thiolate ligands without inorganic sulfide ions."
  },
  {
    id: 67,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "The trans-effect of ligands in square planar substitution reactions operates through which two mechanism components?",
    options: [
      "σ-polarization (ground state effect) and π-backbonding (transition state effect)",
      "Steric hindrance and hydrogen bonding",
      "Chelate effect and entropy change",
      "Solvent dielectric constant and ionic strength"
    ],
    correctIndex: 0, // σ-polarization (ground state effect) and π-backbonding (transition state effect)
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Ground-state effect: Strong σ-donor trans ligand polarizes metal, weakening Pt-L trans bond.<br>2. Transition-state effect: Strong π-acceptor trans ligand stabilizes trigonal bipyramidal intermediate by accepting d-electron density."
  },
  {
    id: 68,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "What is the magnetic behavior of an Antiferromagnetic material above its Néel Temperature (T_N)?",
    options: ["Paramagnetic", "Ferromagnetic", "Diamagnetic", "Superconducting"],
    correctIndex: 0, // Paramagnetic
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Below T_N, antiparallel spin alignment causes low susceptibility.<br>2. Above the Néel Temperature (T_N), thermal energy overrides spin coupling.<br>3. The material transitions to normal <strong>Paramagnetic behavior</strong>."
  },
  {
    id: 69,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "The reaction of XeF₆ with excess water yields which explosive solid noble gas compound?",
    options: ["XeO₃", "XeO₄", "XeOF₄", "XeO₂F₂"],
    correctIndex: 0, // XeO₃
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Complete hydrolysis: <code>XeF₆ + 3H₂O → XeO₃ + 6HF</code>.<br>2. <strong>Xenon trioxide (XeO₃)</strong> is a white, highly explosive crystalline solid."
  },
  {
    id: 70,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "The spin-only magnetic moment for a high-spin d⁴ octahedral complex (e.g. [Cr(H₂O)₆]²⁺) is:",
    options: ["4.90 B.M.", "3.87 B.M.", "5.92 B.M.", "2.83 B.M."],
    correctIndex: 0, // 4.90 B.M.
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. High-spin d⁴ has configuration <code>t2g³ eg¹</code> (n = 4 unpaired electrons).<br>2. <code>μ = √(4 × 6) = √24 = <strong>4.90 B.M.</strong></code>."
  },

  // =========================================================================
  // SECTION C — ORGANIC CHEMISTRY (30 QUESTIONS: IDs 71 to 100)
  // =========================================================================
  {
    id: 71,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "In the ¹H-NMR spectrum of citric acid or 2-bromopropane, two protons attached to the SAME carbon atom that yield DIFFERENT chemical shifts in a chiral environment are called:",
    options: ["Diastereotopic protons", "Enantiotopic protons", "Homotopic protons", "Equivalent protons"],
    correctIndex: 0, // Diastereotopic protons
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Replacing one of the protons with a test group (D) creates a pair of diastereomers.<br>2. Protons in such an environment are <strong>diastereotopic</strong> and give distinct anisochronous NMR signals."
  },
  {
    id: 72,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "The most stable conformation of trans-1,4-dimethylcyclohexane is:",
    options: [
      "Diequatorial chair conformation (1e, 4e)",
      "Diaxial chair conformation (1a, 4a)",
      "Boat conformation",
      "Twist-boat conformation"
    ],
    correctIndex: 0, // Diequatorial chair conformation (1e, 4e)
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. In trans-1,4-dimethylcyclohexane, substituents can be (1e, 4e) or (1a, 4a).<br>2. The <strong>diequatorial (1e, 4e) conformation</strong> avoids 1,3-diaxial steric repulsions, making it most stable."
  },
  {
    id: 73,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Which of the following compounds exhibits Axial Chirality (Atropisomerism) due to restricted rotation about a C−C single bond?",
    options: ["2,2'-dibromo-6,6'-dinitrobiphenyl", "Trans-2-butene", "Lactic acid", "1-bromobutane"],
    correctIndex: 0, // 2,2'-dibromo-6,6'-dinitrobiphenyl
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Ortho-tetrasubstituted biphenyls (like 2,2'-dibromo-6,6'-dinitrobiphenyl) experience extreme steric hindrance preventing rotation.<br>2. The rings become perpendicular and lack a plane of symmetry, exhibiting <strong>atropisomerism (axial chirality)</strong>."
  },
  {
    id: 74,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "The alkaline hydrolysis of (2R,3S)-2-bromobutane proceeding with RETENTION of configuration at the stereocenter occurs due to:",
    options: [
      "Neighboring Group Participation (Anchimeric Assistance) resulting in double SN2 inversion",
      "Standard SN1 carbocation mechanism",
      "Pure SN2 inversion",
      "Free radical substitution"
    ],
    correctIndex: 0, // Neighboring Group Participation (Anchimeric Assistance) resulting in double SN2 inversion
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. An adjacent carboxylate or heteroatom group attacks from backside (1st SN2 inversion) forming a cyclic intermediate.<br>2. Incoming OH⁻ attacks intermediate from backside (2nd SN2 inversion).<br>3. Two sequential inversions result in net <strong>Retention of configuration</strong>."
  },
  {
    id: 75,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Addition of a SINGLET carbene (:CH₂) to a cis-alkene (e.g. cis-2-butene) yields:",
    options: [
      "Stereospecifically cis-1,2-dimethylcyclopropane only",
      "A mixture of cis and trans cyclopropanes",
      "Trans-1,2-dimethylcyclopropane only",
      "An open-chain alkane"
    ],
    correctIndex: 0, // Stereospecifically cis-1,2-dimethylcyclopropane only
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Singlet carbene addition is a concerted 1-step pericyclic process.<br>2. Spin conservation requires both C-C bonds to form simultaneously.<br>3. Addition is <strong>100% stereospecific</strong> (cis-alkene → cis-cyclopropane)."
  },
  {
    id: 76,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "The reaction of chlorobenzene with KNH₂ in liquid NH₃ yields aniline via a Benzyne intermediate. What is the product distribution when 1-C14-labeled chlorobenzene is used?",
    options: [
      "50% 1-C14-aniline and 50% 2-C14-aniline",
      "100% 1-C14-aniline",
      "100% 3-C14-aniline",
      "100% 4-C14-aniline"
    ],
    correctIndex: 0, // 50% 1-C14-aniline and 50% 2-C14-aniline
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Elimination of HCl generates a symmetrical Benzyne triple bond between C1 and C2.<br>2. NH₂⁻ nucleophile attacks C1 and C2 with equal probability.<br>3. This gives a <strong>1:1 (50:50) mixture of 1-C14 and 2-C14 aniline</strong>."
  },
  {
    id: 77,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "In the Pinacol-Pinacolone rearrangement of unsymmetrical 1,2-diols, the migrating group preference (migratory aptitude) follows the order:",
    options: [
      "p-anisyl > p-tolyl > phenyl > p-chlorophenyl > alkyl",
      "alkyl > phenyl > p-anisyl",
      "methyl > ethyl > phenyl",
      "p-chlorophenyl > phenyl > p-anisyl"
    ],
    correctIndex: 0, // p-anisyl > p-tolyl > phenyl > p-chlorophenyl > alkyl
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Group migration occurs via a phenonium-like transition state.<br>2. Electron-donating groups stabilize positive charge in transition state.<br>3. Migratory aptitude: <strong>p-anisyl (-OCH₃) > p-tolyl (-CH₃) > phenyl > p-chlorophenyl > alkyl</strong>."
  },
  {
    id: 78,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "The Baeyer-Villiger oxidation converts ketones into esters using peracids (e.g. mCPBA). The migratory aptitude of groups attached to the carbonyl carbon is:",
    options: [
      "Tertiary alkyl > Secondary alkyl ≈ Cyclohexyl > Benzyl > Phenyl > Primary alkyl > Methyl",
      "Methyl > Primary alkyl > Secondary alkyl > Tertiary alkyl",
      "Methyl > Phenyl > Tertiary alkyl",
      "Phenyl > Tertiary alkyl > Methyl"
    ],
    correctIndex: 0, // Tertiary alkyl > Secondary alkyl ≈ Cyclohexyl > Benzyl > Phenyl > Primary alkyl > Methyl
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Migration to electron-deficient oxygen occurs with retention of configuration.<br>2. Groups capable of stabilizing positive charge migrate fastest.<br>3. Order: <strong>3° alkyl > 2° alkyl ≈ cyclohexyl > benzyl > phenyl > 1° alkyl > methyl</strong>."
  },
  {
    id: 79,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "In the Beckmann rearrangement of ketoximes to N-substituted amides using H₂SO₄ or PCl₅, which group migrates to the nitrogen atom?",
    options: [
      "The group ANTI (trans) to the oxime −OH group",
      "The group SYN (cis) to the oxime −OH group",
      "Always the smaller alkyl group",
      "Always the aryl group regardless of stereochemistry"
    ],
    correctIndex: 0, // The group ANTI (trans) to the oxime −OH group
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Beckmann rearrangement is strictly anti-stereospecific.<br>2. As the protonated OH₂⁺ leaving group departs from nitrogen, the group <strong>anti to the OH group</strong> migrates simultaneously."
  },
  {
    id: 80,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "The Favorskii rearrangement of α-haloketones with alkoxide base proceeds through which key reactive intermediate?",
    options: ["Cyclopropanone intermediate", "Oxiride intermediate", "Carbene intermediate", "Nitrene intermediate"],
    correctIndex: 0, // Cyclopropanone intermediate
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Base abstracts α'-hydrogen forming an enolate.<br>2. Intramolecular nucleophilic attack displaces halide to yield a <strong>cyclopropanone intermediate</strong>.<br>3. Alkoxide attacks cyclopropanone carbonyl, opening ring to form rearranged ester."
  },
  {
    id: 81,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "The Claisen Rearrangement of allyl phenyl ether to o-allylphenol is classified as a:",
    options: [
      "[3,3]-sigmatropic rearrangement",
      "[1,3]-sigmatropic rearrangement",
      "[1,5]-sigmatropic rearrangement",
      "[2,3]-sigmatropic rearrangement"
    ],
    correctIndex: 0, // [3,3]-sigmatropic rearrangement
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Allyl phenyl ether undergoes a concerted thermal pericyclic reaction.<br>2. Numbering atoms from the broken σ-bond gives a 6-membered cyclic transition state.<br>3. It is a classic <strong>[3,3]-sigmatropic rearrangement</strong>."
  },
  {
    id: 82,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "According to Woodward-Hoffmann rules, the THERMAL electrocyclic ring closure of a 4n π-electron system (e.g. 1,3-butadiene → cyclobutene) proceeds via:",
    options: [
      "Conrotatory motion",
      "Disrotatory motion",
      "Suprafacial migration",
      "Antarafacial migration"
    ],
    correctIndex: 0, // Conrotatory motion
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Woodward-Hoffmann Rules for Electrocyclic Reactions:<br>&nbsp;&nbsp;&nbsp;• 4n system (Thermal): <strong>Conrotatory</strong>.<br>&nbsp;&nbsp;&nbsp;• 4n system (Photochemical): Disrotatory.<br>&nbsp;&nbsp;&nbsp;• (4n+2) system (Thermal): Disrotatory."
  },
  {
    id: 83,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "In the Diels-Alder reaction of cyclopentadiene with maleic anhydride, the ENDO product predominates over the EXO product due to:",
    options: [
      "Secondary orbital interactions between carbonyl π-orbitals and diene C2-C3 π-orbitals",
      "Steric hindrance favoring endo geometry",
      "Thermodynamic stability of endo isomer",
      "Hydrogen bonding in transition state"
    ],
    correctIndex: 0, // Secondary orbital interactions between carbonyl π-orbitals and diene C2-C3 π-orbitals
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Endo transition state allows favorable <strong>secondary orbital overlap</strong> between the carbonyl π-system of dienophile and diene back-orbitals.<br>2. This lowers activation energy, making endo the kinetically preferred major product (Alder Endo Rule)."
  },
  {
    id: 84,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Norrish Type II photochemical cleavage of ketones requires which structural feature?",
    options: [
      "Presence of a γ-hydrogen atom capable of 6-membered cyclic hydrogen abstraction",
      "Presence of an α-cleavage carbonyl group",
      "A conjugated aromatic ring only",
      "A tertiary amine"
    ],
    correctIndex: 0, // Presence of a γ-hydrogen atom capable of 6-membered cyclic hydrogen abstraction
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Photo-excited ketone (n→π*) abstracts a <strong>γ-hydrogen atom</strong> via a 6-membered transition state.<br>2. The resulting 1,4-biradical cleaves into an alkene and an enol/ketone (Norrish Type II)."
  },
  {
    id: 85,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "In the Fischer Indole Synthesis, phenylhydrazone of a ketone reacts in acidic medium to form indole via which key pericyclic step?",
    options: [
      "[3,3]-sigmatropic rearrangement of ene-hydrazine intermediate",
      "Diels-Alder [4+2] cycloaddition",
      "Electrocyclic 4π ring closure",
      "[1,5]-hydride shift"
    ],
    correctIndex: 0, // [3,3]-sigmatropic rearrangement of ene-hydrazine intermediate
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Phenylhydrazone tautomerizes to ene-hydrazine.<br>2. Ene-hydrazine undergoes acid-catalyzed <strong>[3,3]-sigmatropic rearrangement</strong> breaking N-N bond.<br>3. Re-aromatization and loss of NH₃ yields the indole ring."
  },
  {
    id: 86,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Electrophilic aromatic substitution in Pyridine occurs preferentially at which position and why?",
    options: [
      "C-3 (β-position), because the carbocation intermediate avoids positive charge on electronegative Nitrogen",
      "C-2 (α-position), due to highest electron density",
      "C-4 (γ-position), due to resonance stabilization",
      "Equal attack at C-2, C-3, and C-4"
    ],
    correctIndex: 0, // C-3 (β-position), because the carbocation intermediate avoids positive charge on electronegative Nitrogen
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Attack at C-2 or C-4 generates a resonance structure with positive charge directly on electronegative nitrogen (unstable).<br>2. Attack at <strong>C-3 (β-position)</strong> avoids placing positive charge on nitrogen, making C-3 the preferred position."
  },
  {
    id: 87,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "In Pyrrole, Furan, and Thiophene, electrophilic aromatic substitution occurs preferentially at which position?",
    options: ["C-2 (α-position)", "C-3 (β-position)", "C-4 position", "Nitrogen atom"],
    correctIndex: 0, // C-2 (α-position)
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Electrophilic attack at <strong>C-2 (α-position)</strong> yields 3 resonance stabilized carbocation structures.<br>2. Attack at C-3 yields only 2 resonance structures.<br>3. Hence, C-2 is much more reactive."
  },
  {
    id: 88,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "In IR spectroscopy, what is the characteristic carbonyl (C=O) stretching frequency range for an Esters versus a Conjugated Ketone?",
    options: [
      "Ester: 1735–1750 cm⁻¹; Conjugated Ketone: 1670–1690 cm⁻¹",
      "Ester: 1650 cm⁻¹; Conjugated Ketone: 1750 cm⁻¹",
      "Ester: 1800 cm⁻¹; Conjugated Ketone: 1735 cm⁻¹",
      "Both absorb at 1715 cm⁻¹"
    ],
    correctIndex: 0, // Ester: 1735–1750 cm⁻¹; Conjugated Ketone: 1670–1690 cm⁻¹
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Ester -O- donates electron density (-I effect dominant) increasing C=O force constant (<strong>1735–1750 cm⁻¹</strong>).<br>2. Conjugation delocalizes C=O π-electrons, single-bond character increases, lowering frequency to <strong>1670–1690 cm⁻¹</strong>."
  },
  {
    id: 89,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "In Mass Spectrometry, carbonyl compounds possessing a γ-hydrogen undergo fragmentation via a 6-membered cyclic transition state to eliminate an alkene. This process is called:",
    options: [
      "McLafferty Rearrangement",
      "Retro-Diels-Alder fragmentation",
      "Alpha-cleavage",
      "Stevens rearrangement"
    ],
    correctIndex: 0, // McLafferty Rearrangement
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. <strong>McLafferty Rearrangement</strong> involves intramolecular γ-hydrogen transfer to carbonyl oxygen via a 6-membered ring.<br>2. Cleavage of β-C−γ-C bond yields a radical cation enol and a neutral alkene molecule."
  },
  {
    id: 90,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Which reducing agent selectively reduces an Ester to an Aldehyde at −78°C without further reduction to alcohol?",
    options: [
      "DIBAL-H (Diisobutylaluminium hydride)",
      "LiAlH₄ (Lithium aluminium hydride)",
      "NaBH₄ (Sodium borohydride)",
      "H₂ / Pd-C"
    ],
    correctIndex: 0, // DIBAL-H (Diisobutylaluminium hydride)
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. <strong>DIBAL-H</strong> at low temperature (−78°C) adds 1 equivalent of hydride to esters forming a stable tetrahedral hemiacetal intermediate.<br>2. Hydrolysis upon workup yields the <strong>aldehyde</strong> selectively."
  },
  {
    id: 91,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "The reaction of an aldehyde or ketone with a secondary amine (e.g. pyrrolidine) yields an Enamine. What is the main use of Enamines in organic synthesis (Stork Enamine Synthesis)?",
    options: [
      "Acts as a mild nucleophile for α-alkylation and acylation of carbonyl compounds avoiding poly-alkylation",
      "Oxidizes aldehydes to carboxylic acids",
      "Reduces ketones to alkanes",
      "Converts amines to amides"
    ],
    correctIndex: 0, // Acts as a mild nucleophile for α-alkylation and acylation of carbonyl compounds avoiding poly-alkylation
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Enamines are neutral nucleophiles.<br>2. In <strong>Stork Enamine Synthesis</strong>, enamines undergo mono-alkylation/acylation with alkyl halides or acyl chlorides smoothly without poly-alkylation or side aldol reactions."
  },
  {
    id: 92,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Sharpless Asymmetric Epoxidation uses which chiral reagent system to convert allylic alcohols enantioselectively into chiral epoxides?",
    options: [
      "Ti(OiPr)₄ + (+)- or (−)-Diethyl tartrate (DET) + t-BuOOH",
      "OsO₄ + NMO + Quinine",
      "mCPBA + Chiral Crown Ether",
      "BH₃ + Chiral Oxazaborolidine (CBS)"
    ],
    correctIndex: 0, // Ti(OiPr)₄ + (+)- or (−)-Diethyl tartrate (DET) + t-BuOOH
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. <strong>Sharpless Asymmetric Epoxidation</strong> employs Titanium tetraisopropoxide <code>Ti(OiPr)₄</code>, chiral diethyl tartrate <code>DET</code>, and tert-butyl hydroperoxide <code>t-BuOOH</code>.<br>2. High enantiomeric excess (>90% ee) is achieved."
  },
  {
    id: 93,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Edman Degradation is used for N-terminal amino acid sequencing of peptides. What is the reagent used in Edman degradation?",
    options: [
      "Phenyl isothiocyanate (PITC)",
      "2,4-Dinitrofluorobenzene (DNFB / Sanger's reagent)",
      "Dansyl chloride",
      "Ninhydrin"
    ],
    correctIndex: 0, // Phenyl isothiocyanate (PITC)
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. <strong>Phenyl isothiocyanate (PITC)</strong> reacts with free N-terminal amino group.<br>2. Acid cleavage yields a PTH-amino acid (Phenylthiohydantoin) derivative which is identified, leaving the rest of peptide intact."
  },
  {
    id: 94,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Which protect group is selectively cleaved using Tetrabutylammonium fluoride (TBAF)?",
    options: [
      "Silyl ethers (e.g. TBDMS / TMS ethers)",
      "Benzyl (Bn) ethers",
      "Boc (tert-butyloxycarbonyl) protecting group",
      "Fmoc protecting group"
    ],
    correctIndex: 0, // Silyl ethers (e.g. TBDMS / TMS ethers)
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Fluoride ion (F⁻) forms an exceptionally strong Si−F bond (~565 kJ/mol).<br>2. <strong>TBAF</strong> provides F⁻ to selectively cleave <strong>silyl ether protecting groups</strong> (TBDMS, TMS) under mild neutral conditions."
  },
  {
    id: 95,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "What is the product formed when cyclohexanone reacts with LDA (Lithium Diisopropylamide) at −78°C in THF, followed by addition of methyl iodide?",
    options: [
      "2-methylcyclohexanone (Kinetic Enolate Product)",
      "2,6-dimethylcyclohexanone",
      "1-methylcyclohexanol",
      "2-cyclohexenyl methyl ether"
    ],
    correctIndex: 0, // 2-methylcyclohexanone (Kinetic Enolate Product)
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. LDA is a bulky, non-nucleophilic strong base.<br>2. At −78°C, LDA rapidly abstracts the less hindered α-proton to form the <strong>Kinetic Enolate</strong>.<br>3. Alkylation with CH₃I yields <strong>2-methylcyclohexanone</strong>."
  },
  {
    id: 96,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "In ¹³C-NMR spectroscopy, what information does a DEPT-135 (Distortionless Enhancement by Polarization Transfer) spectrum provide?",
    options: [
      "CH₃ and CH carbons appear as POSITIVE peaks; CH₂ carbons appear as NEGATIVE (inverted) peaks; Quaternary carbons disappear",
      "Quaternary carbons appear positive",
      "All carbons appear positive",
      "Only CH₂ carbons appear"
    ],
    correctIndex: 0, // CH₃ and CH carbons appear as POSITIVE peaks; CH₂ carbons appear as NEGATIVE (inverted) peaks; Quaternary carbons disappear
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. In DEPT-135 NMR:<br>&nbsp;&nbsp;&nbsp;• <strong>CH₃ and CH</strong> = Positive (upright) signals.<br>&nbsp;&nbsp;&nbsp;• <strong>CH₂</strong> = Negative (inverted) signals.<br>&nbsp;&nbsp;&nbsp;• Quaternary C = Absent."
  },
  {
    id: 97,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "The reaction of Benzaldehyde with Acetophenone in presence of dilute NaOH to form Benzylideneacetophenone (Chalcone) is an example of:",
    options: [
      "Claisen-Schmidt Condensation",
      "Cannizzaro Reaction",
      "Perkin Reaction",
      "Benzoin Condensation"
    ],
    correctIndex: 0, // Claisen-Schmidt Condensation
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Cross-aldol condensation between an aromatic aldehyde lacking α-hydrogens (Benzaldehyde) and an aliphatic ketone/aryl ketone (Acetophenone) in base is the <strong>Claisen-Schmidt Condensation</strong>."
  },
  {
    id: 98,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "According to Cram's Rule / Felkin-Anh model for nucleophilic addition to chiral α-asymmetric carbonyl compounds, the nucleophile attacks from which direction?",
    options: [
      "Perpendicular to carbonyl group, anti to the Large (L) substituent (Burgi-Dunitz angle ~107°)",
      "Directly in line with the Large group",
      "Parallel to C=O bond",
      "From steric side of Medium group"
    ],
    correctIndex: 0, // Perpendicular to carbonyl group, anti to the Large (L) substituent (Burgi-Dunitz angle ~107°)
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Felkin-Anh model places Large (L) group perpendicular to C=O.<br>2. Nucleophile approaches along the Burgi-Dunitz angle (~107°) anti to the Large group, minimizing torsional strain."
  },
  {
    id: 99,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "The reaction of an alkene with Ozone (O₃) followed by dimethyl sulfide (Me₂S) reduction (Reductive Ozonolysis) converts cyclohexene into:",
    options: [
      "Hexanedial (Adipaldehyde)",
      "Hexanedioic acid (Adipic acid)",
      "1,2-cyclohexanediol",
      "Cyclohexanone"
    ],
    correctIndex: 0, // Hexanedial (Adipaldehyde)
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. Ozonolysis cleaves C=C double bond.<br>2. Reductive workup with Me₂S (or Zn/H₂O) reduces molozonide/ozonide without oxidizing aldehydes to carboxylic acids.<br>3. Cyclohexene ring opens to give <strong>Hexanedial, OCH(CH₂)₄CHO</strong>."
  },
  {
    id: 100,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "The Mitsunobu Reaction converts an alcohol into an ester, ether, or azide with INVERSION of configuration. What reagents are used in the Mitsunobu reaction?",
    options: [
      "PPh₃ (Triphenylphosphine) + DEAD (Diethyl azodicarboxylate) + Nucleophile (RCOOH / HN₃)",
      "SOCl₂ + Pyridine",
      "PCC + CH₂Cl₂",
      "TsCl + Pyridine"
    ],
    correctIndex: 0, // PPh₃ (Triphenylphosphine) + DEAD (Diethyl azodicarboxylate) + Nucleophile (RCOOH / HN₃)
    explanation: "<strong>Step-by-Step Solution:</strong><br>1. <strong>Mitsunobu Reaction</strong> uses <code>PPh₃</code> and <code>DEAD</code> (or DIAD).<br>2. Phosphonium intermediate activates the alcohol OH into an excellent leaving group.<br>3. Acidic nucleophile (RCOOH, ArOH, HN₃) attacks via SN2 with complete <strong>inversion of stereochemical configuration</strong>."
  }
];
