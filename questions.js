// URAT PG 2026 Chemistry Question Bank (100 Questions)
const rawQuestions = [
  // SECTION A — PHYSICAL CHEMISTRY (35 Questions)
  {
    id: 1,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "The highest value of bond order among the following is:",
    options: ["O₂", "O₂⁺", "O₂⁻", "O₂⁺²"],
    correctIndex: 3, // O₂⁺²
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Bond Order formula: <code>BO = (N_b - N_a) / 2</code>.<br>2. O₂ (16 e⁻): BO = 2.0.<br>3. O₂⁺ (15 e⁻): BO = 2.5.<br>4. O₂⁻ (17 e⁻): BO = 1.5.<br>5. O₂⁺² (14 e⁻, isoelectronic with N₂): BO = (10 - 4)/2 = <strong>3.0</strong> (Highest)."
  },
  {
    id: 2,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "Conjugate acid of OH⁻ ion is:",
    options: ["H₂O", "H₃O⁺", "O⁻²", "All of the above"],
    correctIndex: 0, // H₂O
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. According to the Brønsted-Lowry theory, a conjugate acid is formed when a base accepts a proton (H⁺).<br>2. <code>OH⁻ + H⁺ → H₂O</code>.<br>3. Therefore, <strong>H₂O</strong> is the conjugate acid of OH⁻."
  },
  {
    id: 3,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "Unit of rate constant for a zero-order reaction is:",
    options: ["Sec⁻¹", "Mol lit⁻¹ Sec⁻¹", "Mol lit⁻¹", "Mol⁻¹ Sec⁻¹"],
    correctIndex: 1, // Mol lit⁻¹ Sec⁻¹
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Rate law for zero-order: <code>Rate = k[A]⁰ = k</code>.<br>2. Unit of rate = concentration / time = <strong>mol L⁻¹ s⁻¹</strong> (or Mol lit⁻¹ Sec⁻¹)."
  },
  {
    id: 4,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "If temperature approaches infinity in the Arrhenius equation K = A · e^(−Ea/RT), then K will be equal to:",
    options: ["A", "Infinity", "1", "0"],
    correctIndex: 0, // A
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Arrhenius equation: <code>K = A · e^(-Ea/RT)</code>.<br>2. As T → ∞, <code>Ea / (RT) → 0</code>.<br>3. <code>e⁰ = 1</code>.<br>4. Therefore, <code>K = A · 1 = <strong>A</strong></code> (the pre-exponential frequency factor)."
  },
  {
    id: 5,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "Molar residual entropy of a molecule with three distinct orientations at absolute zero is approximately:",
    options: ["9.13 J K⁻¹ mol⁻¹", "5.76 J K⁻¹ mol⁻¹", "24.9 J K⁻¹ mol⁻¹", "3.96 J K⁻¹ mol⁻¹"],
    correctIndex: 0, // 9.13 J K⁻¹ mol⁻¹
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Boltzmann formula for residual entropy: <code>S = R ln(W)</code>.<br>2. Here, W = 3 orientations, R = 8.314 J K⁻¹ mol⁻¹.<br>3. <code>S = 8.314 × ln(3) = 8.314 × 1.0986 = <strong>9.13 J K⁻¹ mol⁻¹</strong></code>."
  },
  {
    id: 6,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "Which of the following molecules is NOT infrared (IR) active?",
    options: ["Acetylene", "Methane", "Nitrogen", "Carbon dioxide"],
    correctIndex: 2, // Nitrogen
    explanation: "<strong>Step-by-Step Explanation:</u><br>1. A vibration is IR active only if it results in a change in the dipole moment.<br>2. Homonuclear diatomic molecules like <strong>Nitrogen (N₂)</strong> have zero dipole moment during vibration.<br>3. Hence, N₂ is completely IR inactive."
  },
  {
    id: 7,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "For 2NH₃ → N₂ + 3H₂, with ΔH° = 92.22 kJ/mol and ΔS° = 198.75 J K⁻¹/mol, the reaction is spontaneous at:",
    options: ["Below 464 K", "Above 464 K", "All temperatures", "Not possible at any temp"],
    correctIndex: 1, // Above 464 K
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Spontaneity condition: <code>ΔG = ΔH - TΔS < 0 ⇒ T > ΔH / ΔS</code>.<br>2. <code>T > (92220 J/mol) / (198.75 J K⁻¹ mol⁻¹) = 464 K</code>.<br>3. Thus, reaction is spontaneous <strong>above 464 K</strong>."
  },
  {
    id: 8,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "At what temperature is the RMS velocity of Cl₂ equal to the RMS velocity of SO₂ at NTP (273 K)?",
    options: ["29°C", "49°C", "82°C", "58°C"],
    correctIndex: 0, // 29°C
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. RMS velocity formula: <code>v_rms = √(3RT/M)</code>.<br>2. Equating velocities: <code>T(Cl₂) / M(Cl₂) = T(SO₂) / M(SO₂)</code>.<br>3. M(Cl₂) = 71 g/mol, M(SO₂) = 64 g/mol, T(SO₂) = 273 K.<br>4. <code>T(Cl₂) = 273 × (71/64) = 302.8 K = 29.8°C ≈ <strong>29°C</strong></code>."
  },
  {
    id: 9,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "The correct relation for the critical temperature (Tc) of a van der Waals gas is:",
    options: ["a / (27b²)", "8a / (27Rb)", "3b / (8a)", "a / (Rb)"],
    correctIndex: 1, // 8a / (27Rb)
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Van der Waals critical parameters:<br>&nbsp;&nbsp;&nbsp;• Critical Temperature: <code>Tc = 8a / (27 R b)</code><br>&nbsp;&nbsp;&nbsp;• Critical Pressure: <code>Pc = a / (27 b²)</code><br>&nbsp;&nbsp;&nbsp;• Critical Volume: <code>Vc = 3b</code>."
  },
  {
    id: 10,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "Which of the following liquids possesses the highest viscosity?",
    options: ["Water", "Acetone", "Glycol", "Benzene"],
    correctIndex: 2, // Glycol
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Ethylene glycol (HO-CH₂-CH₂-OH) contains two hydroxyl groups capable of forming extensive intermolecular hydrogen bonding networks.<br>2. This creates high internal resistance to flow, giving it the <strong>highest viscosity</strong> among the options."
  },
  {
    id: 11,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "The minimum radius ratio (r⁺/r⁻) threshold for octahedral coordination in an NaCl crystal lattice is:",
    options: ["0.225", "0.414", "0.208", "0.614"],
    correctIndex: 1, // 0.414
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Radius Ratio Rules:<br>&nbsp;&nbsp;&nbsp;• Triangular (CN=3): 0.155 - 0.225<br>&nbsp;&nbsp;&nbsp;• Tetrahedral (CN=4): 0.225 - 0.414<br>&nbsp;&nbsp;&nbsp;• <strong>Octahedral (CN=6, NaCl): 0.414 - 0.732</strong><br>&nbsp;&nbsp;&nbsp;• Cubic (CN=8, CsCl): 0.732 - 1.000."
  },
  {
    id: 12,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "In X-ray 2nd order diffraction (n=2) from (100) plane of NaCl at θ = 29.3° with λ = 1.54 Å, interplanar distance (d) is:",
    options: ["2.10 Å", "2.80 Å", "1.17 Å", "3.17 Å"],
    correctIndex: 3, // 3.17 Å
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Bragg's Law: <code>nλ = 2d sinθ</code>.<br>2. Substitute values: <code>2 × 1.54 = 2 × d × sin(29.3°)</code>.<br>3. <code>3.08 = 2 × d × 0.4893 ⇒ d = 3.08 / 0.9786 = <strong>3.15 Å ≈ 3.17 Å</strong></code>."
  },
  {
    id: 13,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "Gold Numbers of lyophilic sols A, B, C, D are 0.04, 0.002, 25, and 10 respectively. The correct order of their protective power is:",
    options: ["A > B > C > D", "B > A > D > C", "D > C > B > A", "A > C > B > D"],
    correctIndex: 1, // B > A > D > C
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Protective power of a protective colloid is <strong>inversely proportional</strong> to its Gold Number.<br>2. Lower Gold Number = Greater protective efficiency.<br>3. Since Gold Numbers are <code>B (0.002) < A (0.04) < D (10) < C (25)</code>, the protective power order is <strong>B > A > D > C</strong>."
  },
  {
    id: 14,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "The half-life of a third-order reaction is proportional to:",
    options: ["1 / a²", "a²", "1 / a", "a"],
    correctIndex: 0, // 1 / a²
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. General formula for half-life of nth order reaction: <code>t½ ∝ 1 / a^(n-1)</code>.<br>2. For a 3rd order reaction (n = 3): <code>t½ ∝ 1 / a²</code>."
  },
  {
    id: 15,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "Entropy change (ΔS) for isothermal reversible expansion of 5 moles of an ideal gas from 10 L to 100 L is:",
    options: ["95.75 J K⁻¹", "75.00 J K⁻¹", "950.75 J K⁻¹", "None of these"],
    correctIndex: 0, // 95.75 J K⁻¹
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Entropy change for isothermal expansion: <code>ΔS = n R ln(V₂ / V₁)</code>.<br>2. <code>ΔS = 5 × 8.314 × 2.303 × log(100/10) = 5 × 8.314 × 2.303 × 1 = <strong>95.75 J K⁻¹</strong></code>."
  },
  {
    id: 16,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "Which thermodynamic relation is NOT correct for an ideal gas?",
    options: ["(∂G/∂T)_P = −S", "(∂A/∂T)_V = −S", "(∂H/∂S)_P = −T", "(∂U/∂V)_T = 0"],
    correctIndex: 2, // (∂H/∂S)_P = −T
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. From fundamental relation <code>dH = T dS + V dP</code>, at constant P (dP=0), <code>(∂H/∂S)_P = +T</code>.<br>2. Option (c) gives a negative sign (<code>−T</code>), which is mathematically incorrect."
  },
  {
    id: 17,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "At very low temperatures, the heat capacity of solids is calculated using which Debye relation?",
    options: ["Cp = a T³", "Cp = ½ a T²", "Cp = ⅓ a T", "Cp = ½ a T³"],
    correctIndex: 0, // Cp = a T³
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. According to Debye's T³ law, at temperatures near absolute zero (0 K), atomic heat capacities of crystalline solids are directly proportional to T³.<br>2. Hence, <code>Cp = a T³</code>."
  },
  {
    id: 18,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "The plot of 'log K vs 1/T' for an exothermic thermodynamic system will yield a:",
    options: ["Straight line with positive slope", "Straight line with negative slope", "Parabolic curve", "Horizontal line"],
    correctIndex: 0, // Straight line with positive slope
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Van 't Hoff equation: <code>d(ln K)/d(1/T) = -ΔH° / R</code>.<br>2. For an exothermic reaction, <code>ΔH° < 0</code>, so slope = <code>-ΔH° / R > 0</code> (positive slope)."
  },
  {
    id: 19,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "The correct formulation of Gibbs Phase Rule is:",
    options: ["P + F = C + 2", "F = P + C − 2", "P + C = F + 2", "P − F = C + 2"],
    correctIndex: 0, // P + F = C + 2
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Gibbs Phase Rule: <code>F = C - P + 2</code>.<br>2. Rearranging gives: <code>P + F = C + 2</code>."
  },
  {
    id: 20,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "In a Jablonski diagram, 'Phosphorescence' is represented by which state transition?",
    options: ["T₁ → S₀ + hν", "T₁ → S₀ + Δ", "S₁ → S₀ + hν", "S₁ → T₁ + Δ"],
    correctIndex: 0, // T₁ → S₀ + hν
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Fluorescence: <code>S₁ → S₀ + hν</code> (spin-allowed singlet to singlet).<br>2. <strong>Phosphorescence</strong>: <code>T₁ → S₀ + hν</code> (spin-forbidden radiative transition from triplet state to ground singlet state)."
  },
  {
    id: 21,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "For a 1st order reaction A → products, the plot of ln([A]t/[A]₀) vs Time yields:",
    options: ["Straight line with positive slope through origin", "Straight line with negative slope (−k) passing through origin", "Exponential curve", "Parabolic curve"],
    correctIndex: 1, // Straight line with negative slope (−k) passing through origin
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Integrated 1st order rate equation: <code>ln([A]t / [A]₀) = -k t</code>.<br>2. Plotting <code>y = ln([A]t/[A]₀)</code> versus <code>x = t</code> gives a straight line passing through the origin with slope <strong>-k</strong>."
  },
  {
    id: 22,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "For a bimolecular reaction with a non-linear activated complex having N atoms, the vibrational degrees of freedom of the activated complex equal:",
    options: ["3N − 5", "3N − 8", "3N − 6", "3N − 7"],
    correctIndex: 3, // 3N − 7
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. A non-linear molecule with N atoms has <code>3N - 6</code> vibrational modes.<br>2. In an activated complex, 1 vibrational mode along the reaction coordinate converts into motion over the barrier.<br>3. Remaining vibrational modes = <code>(3N - 6) - 1 = <strong>3N - 7</strong></code>."
  },
  {
    id: 23,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "In three solutions of LiNO₃, NaNO₃, and KNO₃ of identical concentration, the correct order of transport numbers of cations is:",
    options: ["Li⁺ > Na⁺ > K⁺", "K⁺ > Na⁺ > Li⁺", "Na⁺ > Li⁺ > K⁺", "Na⁺ > K⁺ > Li⁺"],
    correctIndex: 1, // K⁺ > Na⁺ > Li⁺
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Smaller unhydrated ions (Li⁺) have highest charge density and attract the largest hydration shell: <code>Hydrated radius: Li⁺(aq) > Na⁺(aq) > K⁺(aq)</code>.<br>2. Heavily hydrated Li⁺ moves slowest, so transport number order is: <strong>K⁺ > Na⁺ > Li⁺</strong>."
  },
  {
    id: 24,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "The electrode potential of which electrode is completely independent of pH?",
    options: ["Hydrogen electrode", "Quinhydrone electrode", "Calomel electrode", "Glass electrode"],
    correctIndex: 2, // Calomel electrode
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Calomel electrode <code>Hg | Hg₂Cl₂ | Cl⁻</code> potential depends solely on chloride ion concentration [Cl⁻].<br>2. It does not involve H⁺ ions in its cell reaction, making it <strong>pH independent</strong>."
  },
  {
    id: 25,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "Given limiting molar conductivities Λ°(NaCl) = 12.7, Λ°(NaI) = 10.8, Λ°(RbI) = 9.1 mS·m²/mol, limiting molar conductivity of RbCl is:",
    options: ["32.6 mS·m²/mol", "7.2 mS·m²/mol", "11.0 mS·m²/mol", "14.4 mS·m²/mol"],
    correctIndex: 2, // 11.0 mS·m²/mol
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. By Kohlrausch's Law: <code>Λ°(RbCl) = Λ°(RbI) + Λ°(NaCl) - Λ°(NaI)</code>.<br>2. <code>Λ°(RbCl) = 9.1 + 12.7 - 10.8 = 21.8 - 10.8 = <strong>11.0 mS·m²/mol</strong></code>."
  },
  {
    id: 26,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "The osmotic pressure of a 0.1 M glucose solution is 2.46 atm (R = 0.0821 L atm/mol K). The room temperature is:",
    options: ["300°C", "273 K", "25°C", "300 K"],
    correctIndex: 3, // 300 K
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Osmotic pressure equation: <code>π = C R T ⇒ T = π / (C R)</code>.<br>2. <code>T = 2.46 / (0.1 × 0.0821) = 2.46 / 0.00821 = <strong>300 K</strong></code>."
  },
  {
    id: 27,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "Selection rule for purely rotational Raman spectrum of linear molecules is:",
    options: ["ΔJ = 0", "ΔJ = ±1 only", "ΔJ = 0, ±2", "ΔJ = 0, ±1"],
    correctIndex: 2, // ΔJ = 0, ±2
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. In rotational Raman spectroscopy, the polarizability ellipsoid returns to equivalent orientation every 180° rotation.<br>2. Hence, the selection rule is <strong>ΔJ = 0, ±2</strong> (where ΔJ = 0 is Rayleigh scattering and ΔJ = ±2 are Stokes/Anti-Stokes lines)."
  },
  {
    id: 28,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "A 0.2 molal aqueous NaCl solution freezes at −0.68°C (Kf = 1.86 K kg/mol). The degree of dissociation of NaCl is:",
    options: ["75%", "65%", "83%", "92%"],
    correctIndex: 2, // 83%
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Theoretical ΔTf = 1.86 × 0.2 = 0.372°C.<br>2. Observed ΔTf = 0.68°C ⇒ van 't Hoff factor <code>i = 0.68 / 0.372 = 1.828</code>.<br>3. For NaCl (n=2): <code>i = 1 + α ⇒ α = 1.828 - 1 = 0.828 ≈ <strong>83%</strong></code>."
  },
  {
    id: 29,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "If Kc for N₂ + 3H₂ ⇌ 2NH₃ is 16, then Kc for NH₃ ⇌ ½ N₂ + 3/2 H₂ is:",
    options: ["0.4", "8", "4", "0.25"],
    correctIndex: 3, // 0.25
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Reversing the equation inverts Kc: <code>Kc(rev) = 1 / 16</code>.<br>2. Halving coefficients takes the square root: <code>Kc' = √(1 / 16) = 1 / 4 = <strong>0.25</strong></code>."
  },
  {
    id: 30,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "Boiling point of an aqueous NaCl solution that freezes at −0.93°C (Kf = 1.86 K kg/mol, Kb = 0.512 K kg/mol) is:",
    options: ["99.25°C", "100.93°C", "100.256°C", "102.25°C"],
    correctIndex: 2, // 100.256°C
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. <code>ΔTf = i Kf m ⇒ i m = 0.93 / 1.86 = 0.50 mol/kg</code>.<br>2. <code>ΔTb = (i m) × Kb = 0.50 × 0.512 = 0.256°C</code>.<br>3. Boiling Point = <code>100°C + 0.256°C = <strong>100.256°C</strong></code>."
  },
  {
    id: 31,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "If ψ = e^(−x²/2) is an eigenfunction for operator Â = (1/x)(d/dx), the corresponding eigenvalue is:",
    options: ["+1", "−1", "1/2", "+2"],
    correctIndex: 1, // −1
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Operate Â on ψ: <code>d/dx (e^(-x²/2)) = -x · e^(-x²/2)</code>.<br>2. <code>(1/x) · (-x · e^(-x²/2)) = -1 · e^(-x²/2) = -1 · ψ</code>.<br>3. Eigenvalue = <strong>−1</strong>."
  },
  {
    id: 32,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "Given E°(Cr³⁺/Cr) = −0.72 V and E°(Fe²⁺/Fe) = −0.42 V, the potential of cell Cr | Cr³⁺(0.1M) ‖ Fe²⁺(0.01M) | Fe is:",
    options: ["−0.339 V", "−0.26 V", "+0.26 V", "+0.339 V"],
    correctIndex: 2, // +0.26 V
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. <code>E°cell = E°cat - E°ano = -0.42 - (-0.72) = +0.30 V</code>.<br>2. Cell reaction: <code>2 Cr + 3 Fe²⁺ → 2 Cr³⁺ + 3 Fe</code> (n = 6).<br>3. <code>E = E° - (0.0591/6) log([Cr³⁺]² / [Fe²⁺]³) = 0.30 - (0.0591/6) log(10⁻² / 10⁻⁶) = 0.30 - 0.0394 = <strong>+0.26 V</strong></code>."
  },
  {
    id: 33,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "Which colligative property is most accurately used to determine the molar mass of polymers and macromolecules?",
    options: ["Relative lowering of vapor pressure", "Elevation in boiling point", "Depression in freezing point", "Osmotic pressure"],
    correctIndex: 3, // Osmotic pressure
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. High molar mass polymers produce extremely low molar concentrations.<br>2. Osmotic pressure (<code>π = CRT</code>) yields large, easily measurable liquid height changes at room temperature, unlike imperceptible freezing point drops."
  },
  {
    id: 34,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "In the nuclear reaction ²⁷₁₃Al + x → ²⁸₁₃Al + y, the particles x and y are:",
    options: ["¹₀n, ¹₁H", "¹₀n, α", "¹₀n, γ", "α, ¹₀n"],
    correctIndex: 2, // ¹₀n, γ
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Conservation of mass number: 27 + 1 = 28.<br>2. Conservation of atomic number: 13 + 0 = 13.<br>3. Hence incident particle x is a neutron (<strong>¹₀n</strong>) and y is a gamma ray photon (<strong>γ</strong>)."
  },
  {
    id: 35,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "The equivalent weight of K₂Cr₂O₇ in an acidic medium is:",
    options: ["M/3", "M/2", "M/6", "M/5"],
    correctIndex: 2, // M/6
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Half-reaction in acidic medium: <code>Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O</code>.<br>2. Total electron transfer n-factor = 6.<br>3. Equivalent Weight = <strong>M / 6</strong>."
  },

  // SECTION B — INORGANIC CHEMISTRY (35 Questions)
  {
    id: 36,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "An example of the hardest carbide known is:",
    options: ["Calcium Carbide", "Aluminium Carbide", "Magnesium Carbide", "Silicon Carbide"],
    correctIndex: 3, // Silicon Carbide
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Silicon Carbide (SiC), known commercially as carborundum, has a 3D covalent network structure resembling diamond.<br>2. It exhibits exceptional hardness (Mohs scale 9–9.5)."
  },
  {
    id: 37,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Which atom can expand its octet to hold more than eight electrons when forming covalent bonds?",
    options: ["Hydrogen", "Nitrogen", "Fluorine", "Chlorine"],
    correctIndex: 3, // Chlorine
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Chlorine is a Period 3 element with vacant 3d orbitals in its valence shell.<br>2. It can expand its octet beyond 8 electrons to form hypervalent compounds like PCl₅, ClF₃, and ClF₅."
  },
  {
    id: 38,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "The correct order of increasing atomic radius is:",
    options: ["S < O < Se < C", "O < S < Se < C", "O < C < S < Se", "C < O < S < Se"],
    correctIndex: 2, // O < C < S < Se
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Across period 2: O (73 pm) < C (77 pm).<br>2. Down group 16: S (102 pm) < Se (120 pm).<br>3. Atomic radius increases as shell number increases: <strong>O < C < S < Se</strong>."
  },
  {
    id: 39,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "The correct order of electron affinity among halogen and chalcogen elements is:",
    options: ["Cl > F > S > O", "F > O > S > Cl", "F > Cl > S > O", "Cl > S > O > F"],
    correctIndex: 0, // Cl > F > S > O
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Chlorine (-349 kJ/mol) has higher electron affinity than Fluorine (-328 kJ/mol) due to small inter-electronic repulsions in Cl's larger 3p orbital.<br>2. Similarly S (-200 kJ/mol) > O (-141 kJ/mol).<br>3. Overall order: <strong>Cl > F > S > O</strong>."
  },
  {
    id: 40,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Which set of species consists exclusively of non-planar geometries?",
    options: ["CO₃⁻², SO₃⁻², BO₃⁻³", "AsO₃⁻³, ClO₃⁻, SO₃⁻²", "NO₃⁻, CO₃⁻², BO₃⁻³", "SO₃⁻², NO₃⁻, BO₃⁻³"],
    correctIndex: 1, // AsO₃⁻³, ClO₃⁻, SO₃⁻²
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. CO₃²⁻, NO₃⁻, BO₃³⁻ are sp² hybridized with 0 lone pairs (trigonal planar).<br>2. AsO₃³⁻, ClO₃⁻, and SO₃²⁻ are sp³ hybridized with 1 lone pair, giving a <strong>trigonal pyramidal (non-planar)</strong> shape."
  },
  {
    id: 41,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Which of the following is a classic ambidentate ligand?",
    options: ["CN⁻", "CO", "CH₃NH₂", "NH₃"],
    correctIndex: 0, // CN⁻
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Ambidentate ligands possess two potential donor atoms but attach through only one at a time.<br>2. Cyanide (<strong>CN⁻</strong>) can coordinate via Carbon (cyanido) or Nitrogen (isocyanido)."
  },
  {
    id: 42,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Iron (Fe) possesses the lowest oxidation state in:",
    options: ["K₄[Fe(CN)₆]", "K₃[Fe(CN)₆]", "Fe(CO)₅", "[Fe(CH₃)₆]Cl₃"],
    correctIndex: 2, // Fe(CO)₅
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. K₄[Fe(CN)₆] → Fe(+2).<br>2. K₃[Fe(CN)₆] → Fe(+3).<br>3. In metal carbonyls like <strong>Fe(CO)₅</strong>, CO is a neutral ligand, giving Fe an oxidation state of <strong>0</strong>."
  },
  {
    id: 43,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "The hybridization of Xe in XeF₄ is:",
    options: ["sp³", "dsp²", "sp³d²", "d²sp³"],
    correctIndex: 2, // sp³d²
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Xe valence electrons = 8. 4 form bonds with F, leaving 4 electrons (2 lone pairs).<br>2. Steric number = 4 sigma bonds + 2 lone pairs = 6.<br>3. Steric number 6 corresponds to <strong>sp³d²</strong> hybridization (square planar shape)."
  },
  {
    id: 44,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "The strongest oxidizing agent among Chromium oxides is:",
    options: ["CrO", "Cr₂O₃", "CrO₂", "CrO₃"],
    correctIndex: 3, // CrO₃
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Oxidation states of Cr: CrO (+2), Cr₂O₃ (+3), CrO₂ (+4), CrO₃ (+6).<br>2. Higher oxidation states increase electronegativity and electron-withdrawing nature.<br>3. <strong>CrO₃</strong> in +6 oxidation state is strongly acidic and the most powerful oxidizing agent."
  },
  {
    id: 45,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Wilkinson's Catalyst is chemically represented by:",
    options: ["TiCl₄–AlR₃", "[Rh(PPh₃)₃Cl]", "[Fe(CH₃)₆]Cl₃", "Ni(CO)₄"],
    correctIndex: 1, // [Rh(PPh₃)₃Cl]
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Wilkinson's catalyst is chloridotris(triphenylphosphine)rhodium(I), <code>[Rh(PPh₃)₃Cl]</code>.<br>2. (Note: TiCl₄-AlR₃ is Ziegler-Natta catalyst)."
  },
  {
    id: 46,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Which of the following molecules has the highest dipole moment?",
    options: ["BF₃", "NH₃", "NF₃", "B₂H₆"],
    correctIndex: 1, // NH₃
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. BF₃ and B₂H₆ are symmetrical (dipole moment = 0).<br>2. In NH₃, N-H bond dipoles reinforce the lone pair dipole (μ = 1.47 D).<br>3. In NF₃, N-F bond dipoles oppose the lone pair dipole (μ = 0.23 D).<br>4. Highest dipole moment = <strong>NH₃</strong>."
  },
  {
    id: 47,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "The hybridization of Boron in Diborane (B₂H₆) is:",
    options: ["sp", "sp²", "sp³", "sp³d"],
    correctIndex: 2, // sp³
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Each Boron atom in B₂H₆ forms 4 bonds (2 terminal 2c-2e B-H bonds + 2 3c-2e banana B-H-B bridge bonds).<br>2. Steric number = 4, requiring <strong>sp³</strong> hybridization."
  },
  {
    id: 48,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "An aqueous solution of copper sulphate (CuSO₄) will be:",
    options: ["Neutral", "Buffer", "Acidic", "Basic"],
    correctIndex: 2, // Acidic
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. CuSO₄ is a salt of strong acid (H₂SO₄) and weak base (Cu(OH)₂).<br>2. Cationic hydrolysis occurs: <code>Cu²⁺ + 2H₂O ⇌ Cu(OH)₂ + 2H⁺</code>.<br>3. Excess H⁺ ions make the solution <strong>acidic</strong> (pH < 7)."
  },
  {
    id: 49,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Which of the following is NOT an ore of aluminium?",
    options: ["Cryolite", "Corundum", "Carnellite", "Bauxite"],
    correctIndex: 2, // Carnellite
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Cryolite (Na₃AlF₆), Corundum (Al₂O₃), and Bauxite (Al₂O₃·2H₂O) are aluminium ores.<br>2. <strong>Carnallite</strong> (KCl·MgCl₂·6H₂O) is a potassium and magnesium ore."
  },
  {
    id: 50,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Which metal ion is structurally essential for the hexameric storage and secretion of insulin from pancreatic beta cells?",
    options: ["Fe⁺³", "Ca⁺²", "Zn⁺²", "Co⁺²"],
    correctIndex: 2, // Zn⁺²
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Insulin is stored in pancreatic secretory granules as a hexamer coordinated around two <strong>Zinc (Zn²⁺)</strong> ions.<br>2. Zn²⁺ plays a key bio-inorganic role in insulin crystallization, stability, and secretion."
  },
  {
    id: 51,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Peroxomonosulfuric acid is commonly called Caro's acid. Its chemical formula is:",
    options: ["H₂SO₃", "H₂SO₅", "H₂S₂O₃", "C₆H₅SO₃H"],
    correctIndex: 1, // H₂SO₅
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Caro's acid is <strong>H₂SO₅</strong> (peroxomonosulfuric acid, containing one -O-O- peroxide bond).<br>2. (Note: H₂S₂O₈ is Marshall's acid)."
  },
  {
    id: 52,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Wij's reagent, used in analytical chemistry to measure unsaturation in fats, is:",
    options: ["I₂", "ICl", "Cl₂O", "ICl₆"],
    correctIndex: 1, // ICl
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Wij's reagent is a solution of <strong>Iodine monochloride (ICl)</strong> in glacial acetic acid.<br>2. It reacts with double bonds to determine the Iodine Value of oils."
  },
  {
    id: 53,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "The oxidation state of Chromium in CrO₅ (butterfly structure) is:",
    options: ["+10", "+5", "+6", "−4"],
    correctIndex: 2, // +6
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. CrO₅ contains 1 oxo oxygen (-2) and 2 peroxide linkages (-1 each for 4 oxygen atoms).<br>2. <code>x + 1(-2) + 4(-1) = 0 ⇒ x - 6 = 0 ⇒ x = <strong>+6</strong></code>."
  },
  {
    id: 54,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "According to Laporte's selection rule for electronic transitions, which transition is parity-permitted?",
    options: ["1s → 2s", "2s → 3p", "3d → 3d", "2s → 3d"],
    correctIndex: 1, // 2s → 3p
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Laporte rule: Centrosymmetric transitions are allowed only with a change in parity (g ↔ u), requiring <code>Δl = ±1</code>.<br>2. For 2s (l=0) → 3p (l=1), <code>Δl = +1</code>, making it <strong>Laporte permitted</strong>."
  },
  {
    id: 55,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "The compound historically referred to as 'Butter of Tin' is:",
    options: ["SnCl₄·5H₂O", "SnCl₂·4H₂O", "SnCl₂·6H₂O", "SnCl₄·2H₂O"],
    correctIndex: 0, // SnCl₄·5H₂O
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Stannic chloride pentahydrate, <code>SnCl₄·5H₂O</code>, is commercially known as <strong>Butter of Tin</strong>."
  },
  {
    id: 56,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Which of the following cobalt coordination complexes shows optical activity?",
    options: ["trans-[Co(NH₃)₄Cl₂]⁺", "[Cr(H₂O)₆]⁺³", "cis-[Co(NH₃)₂(en)₂]⁺³", "trans-[Co(NH₃)₂(en)₂]⁺³"],
    correctIndex: 2, // cis-[Co(NH₃)₂(en)₂]⁺³
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Trans isomers possess a plane of symmetry / center of inversion and are achiral.<br>2. <strong>cis-[Co(NH₃)₂(en)₂]³⁺</strong> lacks any plane or center of symmetry, forming non-superimposable mirror images (optically active)."
  },
  {
    id: 57,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Wilkinson's catalyst is primarily used in industrial organic synthesis for:",
    options: ["Polymerisation of alkenes", "Selective reduction/hydrogenation of alkenes", "Halogenation of alkenes", "Hydrogenation of vegetable oils"],
    correctIndex: 1, // Selective reduction/hydrogenation of alkenes
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. [Rh(PPh₃)₃Cl] is a homogeneous catalyst used for the <strong>selective hydrogenation/reduction of alkenes</strong> under mild conditions."
  },
  {
    id: 58,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "The Jahn-Teller distortion is NOT observed in high-spin octahedral complexes of:",
    options: ["d⁴", "d⁹", "d⁸", "d⁷"],
    correctIndex: 2, // d⁸
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Jahn-Teller distortion occurs when degenerate orbitals (t2g or eg) are unsymmetrically occupied.<br>2. High-spin d⁸ has electron configuration <code>t2g⁶ eg²</code>.<br>3. Both t2g and eg subshells are symmetrically filled, so <strong>no Jahn-Teller distortion</strong> occurs."
  },
  {
    id: 59,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Which set contains exclusively essential bio-elements required for human physiological function?",
    options: ["Fe, Mo, Cu, Zn", "Fe, Co, Cu, Ru", "Fe, Ru, Zn, Mg", "Cu, Mn, Zn, Ag"],
    correctIndex: 0, // Fe, Mo, Cu, Zn
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Iron (Fe), Molybdenum (Mo), Copper (Cu), and Zinc (Zn) are vital essential trace elements.<br>2. Ruthenium (Ru) and Silver (Ag) are non-essential/toxic heavy metals."
  },
  {
    id: 60,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Artificial rain is produced by seeding clouds with micro-crystals of:",
    options: ["NaCl, KCl", "AgNO₃, Dry ice", "AgI, Dry ice", "CuSO₄, NaCl"],
    correctIndex: 2, // AgI, Dry ice
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Silver Iodide (<strong>AgI</strong>) has a crystal structure nearly identical to ice.<br>2. Seeding clouds with AgI and solid CO₂ (<strong>Dry ice</strong>) induces rapid nucleation of water droplets."
  },
  {
    id: 61,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Ferric ion (Fe⁺³) produces a characteristic blood-red coloration with KCNS due to the formation of:",
    options: ["[Cu(SCN)₄]⁻²", "[Al(SCN)₆]⁻³", "[Fe(SCN)(H₂O)₅]⁺²", "[Zn(SCN)₄]⁻²"],
    correctIndex: 2, // [Fe(SCN)(H₂O)₅]⁺²
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Fe³⁺ reacts with thiocyanate ions (SCN⁻) to form the soluble <strong>blood-red complex [Fe(SCN)(H₂O)₅]²⁺</strong>."
  },
  {
    id: 62,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Which of the following polymer materials is classified as an Inorganic Polymer?",
    options: ["Teflon", "Natural Rubber", "Silicone Rubber", "Glyptal"],
    correctIndex: 2, // Silicone Rubber
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Silicone rubber contains a repeating inorganic <code>-Si-O-Si-</code> backbone without carbon atoms in the main chain."
  },
  {
    id: 63,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "The highest difference in first ionization energy occurs between which pair of adjacent elements?",
    options: ["Xe and Cs", "Kr and Rb", "Ar and K", "Ne and Na"],
    correctIndex: 3, // Ne and Na
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Ne (Period 2 noble gas) has exceptionally high IE₁ (2080 kJ/mol).<br>2. Na (Period 3 alkali metal) has very low IE₁ (496 kJ/mol).<br>3. The difference (<code>2080 - 496 = 1584 kJ/mol</code>) is the <strong>largest</strong> across all noble gas/alkali metal transitions."
  },
  {
    id: 64,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "The correct IUPAC name of K₃[Al(C₂O₄)₃] is:",
    options: ["Potassium aluminium oxalate", "Potassium aluminium(III) trioxalato", "Potassium trioxalatoaluminate(III)", "Potassium trioxalato aluminium"],
    correctIndex: 2, // Potassium trioxalatoaluminate(III)
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Cation: Potassium.<br>2. Anionic sphere: 3 oxalato ligands (trioxalato) + Aluminium with '-ate' suffix (aluminate).<br>3. Oxidation state of Al: <code>3(+1) + x + 3(-2) = 0 ⇒ x = +3</code>.<br>4. IUPAC Name: <strong>Potassium trioxalatoaluminate(III)</strong>."
  },
  {
    id: 65,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "The bond order of superoxide anion (O₂⁻) according to Molecular Orbital Theory is:",
    options: ["1", "1.5", "2", "2.5"],
    correctIndex: 1, // 1.5
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. O₂⁻ has 17 valence electrons.<br>2. Bonding electrons (N_b) = 10, Antibonding electrons (N_a) = 7.<br>3. <code>Bond Order = (10 - 7) / 2 = <strong>1.5</strong></code>."
  },
  {
    id: 66,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Which of the following diatomic species is paramagnetic according to Molecular Orbital Theory?",
    options: ["N₂", "O₂", "F₂", "CO"],
    correctIndex: 1, // O₂
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. O₂ (16 e⁻) places 2 unpaired electrons in degenerate antibonding orbitals <code>π*2px¹ π*2py¹</code>.<br>2. Unpaired electrons render O₂ <strong>paramagnetic</strong>."
  },
  {
    id: 67,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Lanthanide contraction across the 4f series is primarily caused by:",
    options: ["Poor shielding effect of 4f electrons", "Strong shielding of 4f electrons", "Increase in atomic number only", "d-orbital expansion"],
    correctIndex: 0, // Poor shielding effect of 4f electrons
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. 4f electrons have diffuse spatial shapes and provide very poor shielding against increasing nuclear charge.<br>2. Effective nuclear charge pulls outer shells inward, contracting ionic radii."
  },
  {
    id: 68,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "According to Pearson's HSAB theory, Ag⁺ is categorized as a:",
    options: ["Hard acid", "Soft acid", "Borderline acid", "Hard base"],
    correctIndex: 1, // Soft acid
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Soft acids possess large ionic size, low positive charge density, and easily polarizable valence shells.<br>2. Ag⁺ fits all criteria, classifying it as a <strong>Soft Acid</strong>."
  },
  {
    id: 69,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "The central metal ion present in chlorophyll pigment is:",
    options: ["Fe²⁺", "Mg²⁺", "Zn²⁺", "Co²⁺"],
    correctIndex: 1, // Mg²⁺
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Chlorophyll contains a central <strong>Magnesium (Mg²⁺)</strong> ion coordinated inside a modified chlorin porphyrin ring."
  },
  {
    id: 70,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "In qualitative salt analysis, the group reagent for precipitating Group II cations as sulfides in acidic medium is:",
    options: ["NH₄OH + NH₄Cl", "H₂S in presence of dil. HCl", "(NH₄)₂CO₃", "NaOH"],
    correctIndex: 1, // H₂S in presence of dil. HCl
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Dilute HCl suppresses H₂S dissociation via common ion effect.<br>2. This maintains low [S²⁻] concentration, selectively precipitating only Group II cations with low Ksp."
  },

  // SECTION C — ORGANIC CHEMISTRY (30 Questions)
  {
    id: 71,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "The acid-catalyzed conversion of N-phenylhydroxylamine (p-NHOH-phenol intermediate) to p-aminophenol is called:",
    options: ["Bamberger rearrangement", "Barbier reaction", "Heck reaction", "Wallach rearrangement"],
    correctIndex: 0, // Bamberger rearrangement
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Acid-catalyzed rearrangement of phenylhydroxylamines to 4-aminophenols is the <strong>Bamberger rearrangement</strong>."
  },
  {
    id: 72,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Number of sp²-sp² carbon-carbon sigma (σ) bonds present in 1,3-butadiene (CH₂=CH-CH=CH₂) is:",
    options: ["1", "3", "4", "5"],
    correctIndex: 1, // 3
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. In 1,3-butadiene, all 4 carbon atoms are sp² hybridized.<br>2. C1=C2 (1 σ), C2-C3 (1 σ), and C3=C4 (1 σ).<br>3. All 3 C-C single/double sigma bonds are formed by <strong>sp²-sp² overlap</strong>."
  },
  {
    id: 73,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "In acid-catalyzed Benzidine rearrangement of hydrazobenzene (Ar-NH-NH-Ar → H⁺), the main product is:",
    options: ["4,4'-Diaminobiphenyl (Benzidine)", "Aniline", "Azobenzene", "Chlorobenzene"],
    correctIndex: 0, // 4,4'-Diaminobiphenyl (Benzidine)
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Hydrazobenzene undergoes acid-catalyzed intramolecular rearrangement to yield <strong>4,4'-diaminobiphenyl (Benzidine)</strong>."
  },
  {
    id: 74,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Which of the following amino acids possesses a basic side-chain nature?",
    options: ["Tyrosine", "Asparagine", "Leucine", "Arginine"],
    correctIndex: 3, // Arginine
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Arginine</strong> contains a guanidino side chain that readily accepts protons (pKa ≈ 12.5), making it strongly basic."
  },
  {
    id: 75,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Thymine molecule is chemically named as:",
    options: ["5-Methyluracil", "2-Oxy-4-aminopyrimidine", "2,4-Dioxopyrimidine", "5-Hydroxymethyluracil"],
    correctIndex: 0, // 5-Methyluracil
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Thymine, the pyrimidine base found in DNA, is chemically <strong>5-Methyluracil</strong>."
  },
  {
    id: 76,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Replacing one of two diastereotopic hydrogens (Ha or Hb) in a molecule with deuterium generates:",
    options: ["Enantiomers", "Diastereomers", "Constitutional Isomers", "Homomers"],
    correctIndex: 1, // Diastereomers
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Substitution of diastereotopic hydrogens yields <strong>diastereomers</strong> (stereoisomers that are not mirror images)."
  },
  {
    id: 77,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Which of the following cyclic conjugated species does NOT follow Hückel's rule of aromaticity?",
    options: ["Cyclooctatetraene (8 π e⁻)", "Benzene (6 π e⁻)", "Cyclopropenyl cation (2 π e⁻)", "Cyclopentadienyl anion (6 π e⁻)"],
    correctIndex: 0, // Cyclooctatetraene
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Hückel's Rule requires <code>(4n + 2) π</code> electrons.<br>2. Cyclooctatetraene has 8 π electrons (4n system) and adopts a non-planar tub conformation (non-aromatic)."
  },
  {
    id: 78,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Newman projections of Meso-2,3-butanediol are characterized by having:",
    options: ["Internal plane of symmetry / center of inversion", "Chiral optical rotation", "No stereocenters", "Racemic equilibrium"],
    correctIndex: 0, // Internal plane of symmetry / center of inversion
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Meso-2,3-butanediol contains two chiral carbons but possesses an <strong>internal plane of symmetry</strong> (or inversion center), rendering it optically inactive."
  },
  {
    id: 79,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Reaction of diethyl carbonate (C₂H₅O-CO-OC₂H₅) with excess Grignard reagent (CH₃MgBr) followed by H₃O⁺ gives:",
    options: ["CH₃-CO-OC₂H₅", "CH₃-CO-CH₃", "CH₃-C(CH₃)(OH)-CH₃ (tert-butanol)", "CH₃-CH₂-CH₃"],
    correctIndex: 2, // CH₃-C(CH₃)(OH)-CH₃ (tert-butanol)
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. 1st mole CH₃MgBr converts carbonate to ethyl acetate.<br>2. 2nd mole CH₃MgBr converts ester to acetone.<br>3. 3rd mole CH₃MgBr adds to acetone to form <strong>tert-butyl alcohol, (CH₃)₃C-OH</strong>."
  },
  {
    id: 80,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Which of the following species is NOT aromatic?",
    options: ["Cycloheptatrienyl cation", "Cyclopentadienyl anion", "Cyclooctatetraenyl dication", "Cyclopentadienyl cation"],
    correctIndex: 3, // Cyclopentadienyl cation
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Cyclopentadienyl cation has 4 π electrons (4n system), making it <strong>antiaromatic / non-aromatic</strong>."
  },
  {
    id: 81,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Acetophenone can be prepared by which of the following synthetic routes?",
    options: ["C₆H₆ + CH₃COCl / AlCl₃", "(C₆H₅COO)₂Ca + (CH₃COO)₂Ca, Δ", "C₆H₅CN + (i) CH₃MgI (ii) H₃O⁺", "All of the above"],
    correctIndex: 3, // All of the above
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Friedel-Crafts acylation of benzene gives acetophenone.<br>2. Dry distillation of calcium benzoate + calcium acetate yields acetophenone.<br>3. Grignard attack on benzonitrile yields acetophenone.<br>4. Therefore, <strong>All of the above</strong> work."
  },
  {
    id: 82,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Nitration of alkylbenzene (R-C₆H₅) gives the highest ortho/para product ratio when R is:",
    options: ["R = CH₃", "R = C₂H₅", "R = C(CH₃)₃", "R = CH(CH₃)₂"],
    correctIndex: 0, // R = CH₃
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Increasing steric bulk of R (CH₃ < C₂H₅ < CH(CH₃)₂ < C(CH₃)₃) blocks ortho attack.<br>2. Smallest group (<strong>R = CH₃</strong>) causes least steric hindrance, maximizing ortho/para ratio."
  },
  {
    id: 83,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "The rate of SN2 substitution reaction will be virtually negligible for:",
    options: ["1-Bromobutane", "2-Bromobutane", "Neopentyl bromide", "Ethyl bromide"],
    correctIndex: 2, // Neopentyl bromide
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Neopentyl bromide, (CH₃)₃C-CH₂Br, has extreme steric crowding at the β-carbon.<br>2. This completely blocks nucleophilic backside attack, making SN2 rate <strong>negligible</strong>."
  },
  {
    id: 84,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "1,3-Dibromopropane heated with Zinc dust in ether yields:",
    options: ["Propene", "Propane", "Cyclopropane", "3-Bromopropene"],
    correctIndex: 2, // Cyclopropane
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Intramolecular Wurtz-type dehalogenation occurs: <code>Br-CH₂-CH₂-CH₂-Br + Zn → Cyclopropane + ZnBr₂</code>."
  },
  {
    id: 85,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Which carbocation readily undergoes 1,2-methyl shift rearrangement to form a more stable tertiary carbocation?",
    options: ["Neopentyl carbocation", "Tropylium cation", "Allyl cation", "Tert-butyl cation"],
    correctIndex: 0, // Neopentyl carbocation
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Primary neopentyl carbocation <code>(CH₃)₃C-CH₂⁺</code> undergoes rapid 1,2-methyl shift to yield highly stable 3° carbocation <code>(CH₃)₂C⁺-CH₂CH₃</code>."
  },
  {
    id: 86,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "The constituent monomers used in the synthesis of Nylon-6,6 are:",
    options: ["Adipic acid and Hexamethylenediamine", "Styrene and Butadiene", "Ethylene glycol and Terephthalic acid", "Caprolactam"],
    correctIndex: 0, // Adipic acid and Hexamethylenediamine
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Nylon-6,6 is a polyamide formed by condensation polymerization of <strong>Adipic acid</strong> [HOOC(CH₂)₄COOH] and <strong>Hexamethylenediamine</strong> [H₂N(CH₂)₆NH₂]."
  },
  {
    id: 87,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Which pyrimidine base is present exclusively in RNA and absent in DNA?",
    options: ["Adenine", "Uracil", "Guanine", "Cytosine"],
    correctIndex: 1, // Uracil
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Uracil</strong> is present in RNA instead of Thymine (which is found in DNA)."
  },
  {
    id: 88,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Vitamin K is essential in the human body for:",
    options: ["Nervous system health", "Digestive enzyme activation", "Blood clotting (coagulation)", "Immune system enhancement"],
    correctIndex: 2, // Blood clotting (coagulation)
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Vitamin K is required as a cofactor for the synthesis of prothrombin and factors II, VII, IX, and X essential for <strong>blood clotting</strong>."
  },
  {
    id: 89,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "The central transition metal present in Vitamin B₁₂ (cyanocobalamin) is:",
    options: ["Iron", "Cobalt", "Manganese", "Magnesium"],
    correctIndex: 1, // Cobalt
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Vitamin B₁₂ contains a central <strong>Cobalt (Co)</strong> ion held within a corrin ring macrocycle."
  },
  {
    id: 90,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "The calculated λmax value for a homoannular conjugated diene with two alkyl ring residues according to Woodward-Fieser rules is:",
    options: ["273 nm", "303 nm", "234 nm", "283 nm"],
    correctIndex: 0, // 273 nm
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Base value for homoannular diene = 253 nm.<br>2. 4 ring residues/substituents = 4 × 5 nm = +20 nm.<br>3. Total <code>λmax = 253 + 20 = <strong>273 nm</strong></code>."
  },
  {
    id: 91,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Which of the following disaccharides is classified as a non-reducing sugar?",
    options: ["Maltose", "Lactose", "Ribose", "Sucrose"],
    correctIndex: 3, // Sucrose
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. In <strong>Sucrose</strong>, glycosidic linkage involves both anomeric carbons (C1 of glucose and C2 of fructose).<br>2. No free hemiacetal/hemiketal group is present, making it a non-reducing sugar."
  },
  {
    id: 92,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Which set of nitrogenous bases is present in both DNA and RNA?",
    options: ["Adenine, Uracil, Thymine", "Adenine, Guanine, Cytosine", "Adenine, Guanine, Uracil", "Adenine, Guanine, Thymine"],
    correctIndex: 1, // Adenine, Guanine, Cytosine
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Adenine, Guanine, and Cytosine</strong> are shared in both DNA and RNA.<br>2. Thymine is unique to DNA, Uracil to RNA."
  },
  {
    id: 93,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "D-Glucose and D-Mannose are stereoisomers related as:",
    options: ["Optical isomers", "Anomers", "Epimers", "Chain isomers"],
    correctIndex: 2, // Epimers
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. D-Glucose and D-Mannose differ in configuration exclusively at the C-2 chiral carbon.<br>2. Stereoisomers differing at a single chiral center are called <strong>Epimers</strong>."
  },
  {
    id: 94,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Which functional group acts as a strong ortho/para director and ring activator in electrophilic aromatic substitution?",
    options: ["−CN", "−NO₂", "−SO₃H", "−NH₂"],
    correctIndex: 3, // −NH₂
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Amino group (<strong>−NH₂</strong>) donates its lone pair into the benzene ring via resonance (+M effect).<br>2. This activates ortho and para positions toward electrophilic attack."
  },
  {
    id: 95,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Reduction of aldehydes or ketones with Sodium metal in Ethanol (Na / C₂H₅OH) to yield primary or secondary alcohols is known as:",
    options: ["Rosenmund reduction", "Clemmensen reduction", "Bouveault-Blanc reduction", "Birch reduction"],
    correctIndex: 2, // Bouveault-Blanc reduction
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Reduction of esters, aldehydes, or ketones using Na in ethanol is the <strong>Bouveault-Blanc reduction</strong>."
  },
  {
    id: 96,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Reaction of aldehydes containing α-hydrogens in dilute alkali to form β-hydroxy carbonyl compounds is called:",
    options: ["Benzoin condensation", "Perkin's condensation", "Aldol condensation", "Reformatsky condensation"],
    correctIndex: 2, // Aldol condensation
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Self-condensation of aldehydes/ketones having α-hydrogens in base is the <strong>Aldol condensation</strong>."
  },
  {
    id: 97,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "The ¹H-NMR spectrum of 1,1,2-tribromoethane (Br₂CH-CH₂Br) consists of:",
    options: ["Two doublets", "One doublet and one triplet", "Two triplets", "Only one singlet"],
    correctIndex: 1, // One doublet and one triplet
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. -CH₂Br protons (2H) are split by adjacent -CH- proton into a <strong>doublet</strong> (1+1=2).<br>2. -CHBr₂ proton (1H) is split by adjacent -CH₂- protons into a <strong>triplet</strong> (2+1=3)."
  },
  {
    id: 98,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Skraup reaction using aniline, glycerol, nitrobenzene, and H₂SO₄ is used to synthesize:",
    options: ["Benzene", "Phenanthrene", "Quinoline", "Indole"],
    correctIndex: 2, // Quinoline
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Skraup synthesis is the classical method for synthesizing <strong>Quinoline</strong> from aniline and glycerol."
  },
  {
    id: 99,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Which of the following functional groups functions as an Auxochrome in organic dyes?",
    options: ["−NO₂", "−CN", "−NO", "−OR"],
    correctIndex: 3, // −OR
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Chromophores (-NO₂, -CN, -NO) contain double bonds that absorb light.<br>2. Auxochromes (<strong>−OR</strong>, -OH, -NH₂) contain lone pairs that shift and deepen color absorption when attached to chromophores."
  },
  {
    id: 100,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Which of the following polymer systems is classified as a Biodegradable Polymer?",
    options: ["Nylon-6,6", "Nylon-6", "Nylon-2-nylon-6", "Teflon"],
    correctIndex: 2, // Nylon-2-nylon-6
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Nylon-2-nylon-6</strong> (an alternating polyamide of glycine and amino caproic acid) is a bio-degradable synthetic polymer."
  }
];
