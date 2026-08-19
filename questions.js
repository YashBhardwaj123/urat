// URAT PG 2026 Chemistry Question Bank (100 Questions)
const rawQuestions = [
  // SECTION A — PHYSICAL CHEMISTRY (35)
  {
    id: 1,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "For a reaction with rate law r = k[A]²[B], if [A] is doubled and [B] is halved, the rate changes by a factor of:",
    options: ["1", "2", "4", "8"],
    correctIndex: 1, // "2"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Initial rate: r₁ = k[A]²[B].<br>2. When [A] is doubled (2[A]) and [B] is halved (0.5[B]), substitute these into the rate law:<br>&nbsp;&nbsp;&nbsp;r₂ = k(2[A])²(0.5[B]) = k × (4[A]²) × (0.5[B]) = 2 × k[A]²[B] = 2 × r₁.<br>3. Therefore, the rate increases by a factor of <strong>2</strong>."
  },
  {
    id: 2,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "The half-life of a first-order reaction is independent of:",
    options: ["Rate constant", "Initial concentration", "Temperature", "Activation energy"],
    correctIndex: 1, // "Initial concentration"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. For a 1st order reaction, half-life formula is: <code>t½ = 0.693 / k</code>.<br>2. Notice that the starting concentration [A]₀ is nowhere in this equation.<br>3. This means no matter how much material you start with (10g or 100g), it always takes the exact same time for half of it to react."
  },
  {
    id: 3,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "Van't Hoff factor (i) for K₄[Fe(CN)₆], assuming complete dissociation, is:",
    options: ["2", "3", "4", "5"],
    correctIndex: 3, // "5"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. K₄[Fe(CN)₆] dissociates in water as: <code>K₄[Fe(CN)₆] → 4 K⁺ + [Fe(CN)₆]⁴⁻</code>.<br>2. Total number of ions produced per formula unit = 4 potassium ions + 1 complex ion = <strong>5 ions</strong>.<br>3. Hence, Van't Hoff factor i = 5."
  },
  {
    id: 4,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "For an ideal gas, which is a state function?",
    options: ["Heat", "Work", "Internal energy", "Both heat and work"],
    correctIndex: 2, // "Internal energy"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. A <strong>state function</strong> depends only on the initial and final states of the system, not the path taken.<br>2. Internal energy (U or E) depends strictly on state (temperature and volume/pressure).<br>3. Heat (q) and Work (w) are <em>path functions</em> because their values change depending on how the process is conducted."
  },
  {
    id: 5,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "The entropy change for an adiabatic reversible process is:",
    options: ["Positive", "Negative", "Zero", "Infinite"],
    correctIndex: 2, // "Zero"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Entropy change formula is: <code>dS = dq_rev / T</code>.<br>2. In an adiabatic process, no heat is exchanged with surroundings, so <code>dq = 0</code>.<br>3. Therefore, <code>dS = 0 / T = 0</code>. That is why reversible adiabatic processes are called <strong>isentropic</strong>."
  },
  {
    id: 6,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "According to the phase rule, for a system at the triple point of water, degrees of freedom (F) equals:",
    options: ["0", "1", "2", "3"],
    correctIndex: 0, // "0"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Gibbs Phase Rule is: <code>F = C - P + 2</code>.<br>2. For water system: Components (C) = 1 (H₂O).<br>3. At triple point: Ice, liquid water, and water vapor coexist, so Phases (P) = 3.<br>4. <code>F = 1 - 3 + 2 = 0</code> (invariant). You cannot change temperature or pressure without losing a phase!"
  },
  {
    id: 7,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "Which colligative property is used to determine molar mass of macromolecules/polymers most accurately?",
    options: ["Relative lowering of vapor pressure", "Elevation in boiling point", "Depression in freezing point", "Osmotic pressure"],
    correctIndex: 3, // "Osmotic pressure"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Polymers have huge molar masses, so even a high mass concentration gives an extremely low molar concentration.<br>2. Freezing point depression or boiling point elevation would give tiny, undetectable temperature changes.<br>3. Osmotic pressure (<code>π = CRT</code>) produces large, easily measurable pressure heights even at room temperature for dilute macromolecular solutions."
  },
  {
    id: 8,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "The Arrhenius equation relates rate constant to:",
    options: ["Concentration and time", "Temperature and activation energy", "Pressure and volume", "pH and concentration"],
    correctIndex: 1, // "Temperature and activation energy"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Arrhenius equation: <code>k = A × e^(-Ea / RT)</code>.<br>2. It directly shows how the rate constant (<code>k</code>) varies exponentially with Activation Energy (<code>Ea</code>) and Absolute Temperature (<code>T</code>)."
  },
  {
    id: 9,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "For a zero-order reaction, a plot of [A] vs t is:",
    options: ["Curved, increasing", "Straight line with negative slope", "Straight line with positive slope", "Exponential decay"],
    correctIndex: 1, // "Straight line with negative slope"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Zero-order integrated rate law: <code>[A] = [A]₀ - kt</code>.<br>2. Comparing with line equation <code>y = mx + c</code>:<br>&nbsp;&nbsp;&nbsp;y = [A], x = t, slope (m) = -k, intercept (c) = [A]₀.<br>3. Plotting concentration vs time gives a straight line sloping downwards (negative slope)."
  },
  {
    id: 10,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "The standard reduction potential of SHE (Standard Hydrogen Electrode) is:",
    options: ["+1 V", "−1 V", "0 V", "0.76 V"],
    correctIndex: 2, // "0 V"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Standard Hydrogen Electrode (SHE) is accepted by convention worldwide as the primary reference electrode.<br>2. Its standard reduction potential (E°) is assigned to be exactly <strong>0.00 V</strong> at all temperatures."
  },
  {
    id: 11,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "Nernst equation at 298 K is commonly written using which value for 2.303RT/F?",
    options: ["0.0257 V", "0.0592 V", "0.5920 V", "5.92 V"],
    correctIndex: 1, // "0.0592 V"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Substitute constants at 298 K:<br>&nbsp;&nbsp;&nbsp;R = 8.314 J/mol·K, T = 298 K, F = 96485 C/mol.<br>2. Calculate: <code>(2.303 × 8.314 × 298) / 96485 = 0.05916 V ≈ 0.0592 V</code>.<br>3. Hence Nernst formula becomes: <code>E = E° - (0.0592/n) log Q</code>."
  },
  {
    id: 12,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "Kohlrausch's law of independent migration of ions is used to calculate:",
    options: ["Degree of dissociation", "Molar conductivity of weak electrolytes at infinite dilution", "Transport number", "Cell EMF"],
    correctIndex: 1, // "Molar conductivity of weak electrolytes at infinite dilution"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Weak electrolytes do not dissociate completely, so their limiting molar conductivity (Λ°m) cannot be found directly by extrapolation.<br>2. Kohlrausch's law allows us to calculate Λ°m by summing the individual limiting ionic conductivities of constituent cations and anions."
  },
  {
    id: 13,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "The order of a reaction is determined by:",
    options: ["Stoichiometry of the balanced equation", "Experimentally, from the rate law", "Molecularity", "Number of moles of reactants"],
    correctIndex: 1, // "Experimentally, from the rate law"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Order of a reaction is the sum of powers of concentrations in the rate law.<br>2. It cannot be deduced theoretically just by looking at a balanced stoichiometric equation.<br>3. It must always be determined <strong>experimentally</strong>."
  },
  {
    id: 14,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "In a catalyzed reaction, the catalyst:",
    options: ["Increases ΔH of reaction", "Decreases activation energy of both forward and backward reactions", "Shifts equilibrium position", "Increases equilibrium constant"],
    correctIndex: 1, // "Decreases activation energy of both forward and backward reactions"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. A catalyst offers a new mechanism with lower activation energy (Ea).<br>2. It lowers Ea by equal amounts for both forward and reverse reactions.<br>3. It does not alter ΔH, ΔG, or the equilibrium constant K."
  },
  {
    id: 15,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "Which of the following has the highest boiling point elevation constant application relevance — i.e., is a colligative property?",
    options: ["Refractive index", "Osmotic pressure", "Viscosity", "Surface tension"],
    correctIndex: 1, // "Osmotic pressure"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Colligative properties depend only on the total number of solute particles in solution.<br>2. Osmotic pressure, relative lowering of vapor pressure, boiling point elevation, and freezing point depression are the 4 fundamental colligative properties."
  },
  {
    id: 16,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "For the Langmuir adsorption isotherm, at high pressure, the extent of adsorption becomes:",
    options: ["Directly proportional to P", "Independent of P", "Inversely proportional to P", "Proportional to P²"],
    correctIndex: 1, // "Independent of P"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Langmuir equation: <code>x/m = aP / (1 + bP)</code>.<br>2. At very high pressure, <code>bP >> 1</code>, so <code>1 + bP ≈ bP</code>.<br>3. Thus <code>x/m ≈ aP / bP = a/b = constant</code> (independent of pressure P)."
  },
  {
    id: 17,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "The de Broglie wavelength of a particle is inversely proportional to its:",
    options: ["Mass", "Momentum", "Energy", "Charge"],
    correctIndex: 1, // "Momentum"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. De Broglie equation: <code>λ = h / p</code> (where h is Planck's constant and p is momentum).<br>2. Therefore, wavelength (λ) is inversely proportional to momentum (p)."
  },
  {
    id: 18,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "Heisenberg's uncertainty principle states that it is impossible to simultaneously determine precisely:",
    options: ["Mass and volume", "Position and momentum", "Charge and mass", "Energy and mass"],
    correctIndex: 1, // "Position and momentum"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Heisenberg's Uncertainty Principle: <code>Δx × Δp ≥ h / (4π)</code>.<br>2. It specifies that position (x) and momentum (p) of a microscopic particle cannot be measured simultaneously with absolute precision."
  },
  {
    id: 19,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "The quantum number that determines the shape of an orbital is:",
    options: ["Principal (n)", "Azimuthal (l)", "Magnetic (m)", "Spin (s)"],
    correctIndex: 1, // "Azimuthal (l)"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Principal (n): Size and main energy level.<br>2. <strong>Azimuthal (l)</strong>: Shape of orbital (s=spherical, p=dumbbell, d=cloverleaf).<br>3. Magnetic (m): Spatial orientation.<br>4. Spin (s): Electron spin direction."
  },
  {
    id: 20,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "For d-orbitals, the azimuthal quantum number (l) is:",
    options: ["0", "1", "2", "3"],
    correctIndex: 2, // "2"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Values of l for subshells:<br>&nbsp;&nbsp;&nbsp;s-subshell: l = 0<br>&nbsp;&nbsp;&nbsp;p-subshell: l = 1<br>&nbsp;&nbsp;&nbsp;<strong>d-subshell: l = 2</strong><br>&nbsp;&nbsp;&nbsp;f-subshell: l = 3."
  },
  {
    id: 21,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "According to Hund's rule, electrons occupy degenerate orbitals:",
    options: ["In pairs first", "Singly, with parallel spins, before pairing", "Randomly", "Only in the lowest orbital"],
    correctIndex: 1, // "Singly, with parallel spins, before pairing"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Orbitals of equal energy (degenerate orbitals) are filled singly first.<br>2. All singly occupied orbitals maintain parallel spins to minimize electron repulsion before pairing starts."
  },
  {
    id: 22,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "The rate of a diffusion-controlled reaction according to Graham's law is inversely proportional to:",
    options: ["Molar mass", "Square root of molar mass", "Square of molar mass", "Density"],
    correctIndex: 1, // "Square root of molar mass"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Graham's Law of Diffusion: <code>Rate ∝ 1 / √(Molar Mass)</code>.<br>2. Hence, rate of diffusion is inversely proportional to the square root of molar mass."
  },
  {
    id: 23,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "Which law states that the solubility of a gas in a liquid is directly proportional to the pressure of the gas?",
    options: ["Raoult's law", "Henry's law", "Dalton's law", "Charles's law"],
    correctIndex: 1, // "Henry's law"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Henry's Law</strong>: <code>p = K_H × x</code> (where p is partial pressure and x is solubility/mole fraction).<br>2. Higher pressure forces more gas molecules to dissolve in liquid (e.g. carbonated soft drinks)."
  },
  {
    id: 24,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "A colloid in which both dispersed phase and dispersion medium are liquids is called:",
    options: ["Sol", "Gel", "Emulsion", "Aerosol"],
    correctIndex: 2, // "Emulsion"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Liquid in Liquid = <strong>Emulsion</strong> (e.g., Milk, butter).<br>2. Solid in Liquid = Sol.<br>3. Liquid in Solid = Gel.<br>4. Liquid/Solid in Gas = Aerosol."
  },
  {
    id: 25,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "The Tyndall effect is exhibited by:",
    options: ["True solutions", "Colloidal solutions", "Suspensions only", "Gases only"],
    correctIndex: 1, // "Colloidal solutions"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Tyndall effect is the scattering of a light beam as it passes through a colloid.<br>2. Colloidal particle size (1–1000 nm) is suitable to scatter visible light. True solution particles (<1 nm) are too small to scatter light."
  },
  {
    id: 26,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "Gold number is a measure of:",
    options: ["Protective power of a colloid", "Charge of a colloid", "Size of colloidal particles", "Coagulation value of an electrolyte"],
    correctIndex: 0, // "Protective power of a colloid"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Gold number is the minimum mg of lyophilic colloid needed to prevent coagulation of 10 mL gold sol by 1 mL of 10% NaCl.<br>2. <strong>Smaller gold number = Stronger protective power</strong> of the protective colloid."
  },
  {
    id: 27,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "According to the Hardy-Schulze rule, the coagulating power of an ion increases with:",
    options: ["Decreasing charge", "Increasing charge on the ion", "Ion's atomic mass", "Ion's radius only"],
    correctIndex: 1, // "Increasing charge on the ion"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Hardy-Schulze Rule: The greater the valency/charge of the opposing ion, the greater its power to cause coagulation.<br>2. For example, for negative sol: Coagulating power is <code>Al³⁺ > Mg²⁺ > Na⁺</code>."
  },
  {
    id: 28,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "For a first-order reaction, k = 2.303/t × log([A]₀/[A]). The unit of k is:",
    options: ["mol L⁻¹ s⁻¹", "s⁻¹", "L mol⁻¹ s⁻¹", "mol² L⁻² s⁻¹"],
    correctIndex: 1, // "s⁻¹"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. In <code>log([A]₀/[A])</code>, concentration units cancel out.<br>2. Thus unit of <code>k = 1 / time = s⁻¹</code> (or min⁻¹, hour⁻¹)."
  },
  {
    id: 29,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "The Gibbs free energy change (ΔG) at equilibrium is:",
    options: ["Maximum", "Minimum", "Zero", "Negative infinity"],
    correctIndex: 2, // "Zero"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. At chemical equilibrium, forward reaction rate equals reverse reaction rate.<br>2. There is no net free energy change, so <strong>ΔG = 0</strong>."
  },
  {
    id: 30,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "Which relation correctly connects ΔG° and equilibrium constant K?",
    options: ["ΔG° = RT ln K", "ΔG° = −RT ln K", "ΔG° = RT/ln K", "ΔG° = −RT/K"],
    correctIndex: 1, // "ΔG° = −RT ln K"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Thermodynamic relation: <code>ΔG° = -RT ln K</code>.<br>2. In base 10 log: <code>ΔG° = -2.303 RT log K</code>."
  },
  {
    id: 31,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "In a galvanic cell, oxidation occurs at the:",
    options: ["Cathode", "Anode", "Salt bridge", "Both electrodes"],
    correctIndex: 1, // "Anode"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Easy mnemonic: <strong>AN OX</strong> (Anode = Oxidation) and <strong>RED CAT</strong> (Reduction = Cathode).<br>2. In both electrochemical and electrolytic cells, oxidation always takes place at the anode."
  },
  {
    id: 32,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "The molecularity of a reaction can never be:",
    options: ["1", "2", "3", "Zero or fractional"],
    correctIndex: 3, // "Zero or fractional"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Molecularity is the actual number of reactant molecules colliding simultaneously in an elementary step.<br>2. You cannot collide 0 molecules or half a molecule, so molecularity is strictly a positive integer (1, 2, or 3)."
  },
  {
    id: 33,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "Which of the following is an example of a third-law entropy reference state?",
    options: ["Perfect crystal at 0 K has zero entropy", "Ideal gas at STP", "Liquid at boiling point", "Amorphous solid at 0 K"],
    correctIndex: 0, // "Perfect crystal at 0 K has zero entropy"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Third Law of Thermodynamics: The entropy of a perfectly crystalline pure substance approaches zero as absolute zero temperature (0 K) is reached."
  },
  {
    id: 34,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "In Freundlich adsorption isotherm x/m = kP^(1/n), the value of n is usually:",
    options: ["Less than 1", "Between 1 and 10 (or equal to 1)", "Always negative", "Always zero"],
    correctIndex: 1, // "Between 1 and 10 (or equal to 1)"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Freundlich isotherm exponent <code>1/n</code> ranges from 0 to 1.<br>2. Taking inverse, <code>n</code> must be greater than or equal to 1 (typically between 1 and 10)."
  },
  {
    id: 35,
    section: "Physical Chemistry",
    sectionId: "A",
    question: "Photoelectric effect supports which nature of light?",
    options: ["Wave nature only", "Particle (quantum) nature", "Neither", "Only refractive nature"],
    correctIndex: 1, // "Particle (quantum) nature"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Photoelectric effect (explained by Einstein) shows that light transfers energy in discrete packets/quanta called photons.<br>2. This directly proves the <strong>particle nature of light</strong>."
  },

  // SECTION B — INORGANIC CHEMISTRY (35)
  {
    id: 36,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "According to Werner's theory, the secondary valency of a metal ion corresponds to:",
    options: ["Oxidation state", "Coordination number", "Charge on the complex", "Number of ligands' donor atoms only for monodentates ignoring polydentates"],
    correctIndex: 1, // "Coordination number"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Primary valency = Oxidation state (ionizable, satisfied by anions).<br>2. <strong>Secondary valency = Coordination number</strong> (non-ionizable, satisfied by neutral or negative ligands, decides geometry)."
  },
  {
    id: 37,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "The IUPAC name of [Co(NH₃)₅Cl]Cl₂ is:",
    options: ["Pentaamminechloridocobalt(III) chloride", "Pentaamminecobalt(III) chloride", "Chloridopentaamminecobaltate(III) chloride", "Pentaamminechloridocobaltate(II) chloride"],
    correctIndex: 0, // "Pentaamminechloridocobalt(III) chloride"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Cationic sphere ligands: 5 NH₃ (pentaammine) + 1 Cl⁻ (chlorido).<br>2. Cobalt oxidation state: <code>x + 5(0) + 1(-1) + 2(-1) = 0 ⇒ x = +3</code>.<br>3. Anion outside sphere: chloride.<br>4. Full IUPAC name: <strong>Pentaamminechloridocobalt(III) chloride</strong>."
  },
  {
    id: 38,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "According to Crystal Field Theory, in an octahedral field, d-orbitals split into:",
    options: ["t2g (higher) and eg (lower)", "t2g (lower) and eg (higher)", "All degenerate", "Only eg orbitals"],
    correctIndex: 1, // "t2g (lower) and eg (higher)"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. In octahedral complex, ligands approach along axes (x, y, z).<br>2. Axial orbitals (dx²-y², dz² = eg) experience more repulsion, rising in energy.<br>3. Inter-axial orbitals (dxy, dyz, dxz = t2g) experience less repulsion, dropping in energy."
  },
  {
    id: 39,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "The crystal field stabilization energy (CFSE) for a low-spin d⁶ octahedral complex is:",
    options: ["−0.4Δo", "−2.4Δo", "−1.2Δo", "0"],
    correctIndex: 1, // "−2.4Δo"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Low-spin d⁶ has electron configuration: <code>t2g⁶ eg⁰</code>.<br>2. Energy contribution per t2g electron = -0.4 Δo.<br>3. Total CFSE = 6 × (-0.4 Δo) = <strong>-2.4 Δo</strong>."
  },
  {
    id: 40,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Which of the following ligands is a strong field ligand causing pairing (high in spectrochemical series)?",
    options: ["I⁻", "F⁻", "CN⁻", "H₂O"],
    correctIndex: 2, // "CN⁻"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Spectrochemical series: <code>I⁻ < F⁻ < H₂O < NH₃ < en < CN⁻ ≈ CO</code>.<br>2. CN⁻ (Cyanide) is a strong field ligand causing large crystal field splitting (Δo) and electron pairing."
  },
  {
    id: 41,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "EDTA is an example of a:",
    options: ["Monodentate ligand", "Bidentate ligand", "Hexadentate ligand", "Ambidentate ligand"],
    correctIndex: 2, // "Hexadentate ligand"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. EDTA⁴⁻ (Ethylenediaminetetraacetate) has 6 donor atoms: 2 Nitrogen atoms and 4 carboxylate Oxygen atoms.<br>2. Thus it coordinates via 6 sites, making it a <strong>hexadentate ligand</strong>."
  },
  {
    id: 42,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "NO₂⁻ is an example of which type of ligand?",
    options: ["Bidentate", "Ambidentate", "Polydentate", "Chelating only"],
    correctIndex: 1, // "Ambidentate"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Ambidentate ligands have two different potential donor atoms but attach using only one at a time.<br>2. NO₂⁻ can attach via Nitrogen (-NO₂, nitro) or via Oxygen (-ONO, nitrito)."
  },
  {
    id: 43,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "The type of isomerism shown by [Co(NH₃)₅Br]SO₄ and [Co(NH₃)₅SO₄]Br is:",
    options: ["Geometrical isomerism", "Linkage isomerism", "Ionization isomerism", "Optical isomerism"],
    correctIndex: 2, // "Ionization isomerism"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Ionization isomers exchange counter-ion with a ligand inside the coordination sphere.<br>2. [Co(NH₃)₅Br]SO₄ releases SO₄²⁻ ions in aqueous solution.<br>3. [Co(NH₃)₅SO₄]Br releases Br⁻ ions in aqueous solution."
  },
  {
    id: 44,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "According to VSEPR theory, the shape of SF₆ is:",
    options: ["Tetrahedral", "Square pyramidal", "Octahedral", "Trigonal bipyramidal"],
    correctIndex: 2, // "Octahedral"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Sulfur has 6 valence electrons, forming 6 single bonds with Fluorine (0 lone pairs).<br>2. Steric number = 6 bond pairs + 0 lone pairs = 6.<br>3. Molecular shape = <strong>Octahedral</strong>."
  },
  {
    id: 45,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "The hybridization of the central atom in XeF₄ is:",
    options: ["sp³", "sp³d", "sp³d²", "sp²"],
    correctIndex: 2, // "sp³d²"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Xe valence electrons = 8. 4 form Xe-F single bonds, leaving 4 electrons (2 lone pairs).<br>2. Steric number = 4 bond pairs + 2 lone pairs = 6.<br>3. Hybridization for steric number 6 is <strong>sp³d²</strong> (Square planar geometry)."
  },
  {
    id: 46,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Which of the following is diamagnetic?",
    options: ["[Ni(CO)₄]", "[NiCl₄]²⁻", "[Ni(H₂O)₆]²⁺", "[NiCl₄]⁴⁻"],
    correctIndex: 0, // "[Ni(CO)₄]"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. In [Ni(CO)₄], Ni is in 0 oxidation state (3d⁸ 4s²).<br>2. CO is a strong field ligand that forces 4s² electrons into 3d, giving a completely filled 3d¹⁰ state.<br>3. Zero unpaired electrons = <strong>Diamagnetic</strong>."
  },
  {
    id: 47,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "According to HSAB theory, Ag⁺ is classified as a:",
    options: ["Hard acid", "Soft acid", "Borderline acid", "Hard base"],
    correctIndex: 1, // "Soft acid"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. HSAB Principle: Soft acids have large ionic radius, low positive charge density, and easily polarizable electron cloud.<br>2. Ag⁺ fits this description perfectly, making it a classic <strong>Soft Acid</strong>."
  },
  {
    id: 48,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "The bond order of O₂⁻ (superoxide) according to MOT is:",
    options: ["1", "1.5", "2", "2.5"],
    correctIndex: 1, // "1.5"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. O₂⁻ has 17 electrons.<br>2. Bonding electrons (N_b) = 10, Anti-bonding electrons (N_a) = 7.<br>3. Bond Order = <code>(N_b - N_a) / 2 = (10 - 7) / 2 = 1.5</code>."
  },
  {
    id: 49,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Which of the following molecules is paramagnetic according to MOT?",
    options: ["N₂", "O₂", "F₂", "CO"],
    correctIndex: 1, // "O₂"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. O₂ has 16 electrons. Molecular orbital configuration places 2 electrons singly into degenerate antibonding orbitals <code>π*2px¹ π*2py¹</code>.<br>2. Presence of 2 unpaired electrons makes O₂ <strong>paramagnetic</strong>."
  },
  {
    id: 50,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Lanthanide contraction is caused primarily by:",
    options: ["Poor shielding of 4f electrons", "Strong shielding of 4f electrons", "Increase in atomic number only", "d-orbital expansion"],
    correctIndex: 0, // "Poor shielding of 4f electrons"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. 4f electrons have diffuse shapes and provide very poor shielding against nuclear charge.<br>2. As nuclear charge increases across the series, effective nuclear charge increases significantly, pulling outer shells closer."
  },
  {
    id: 51,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Which of the following is NOT a consequence of lanthanide contraction?",
    options: ["Similarity in radii of Zr and Hf", "Decrease in basicity from La to Lu", "Increase in ionic radius down the lanthanide series", "Difficulty in separating lanthanides"],
    correctIndex: 2, // "Increase in ionic radius down the lanthanide series"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Lanthanide contraction causes a steady <strong>decrease</strong> (not increase) in atomic and ionic radii from La to Lu.<br>2. Therefore, statement (c) is false and is the correct choice."
  },
  {
    id: 52,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "The oxidation state of Fe in K₄[Fe(CN)₆] is:",
    options: ["+2", "+3", "+4", "+6"],
    correctIndex: 0, // "+2"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Formula: K₄[Fe(CN)₆].<br>2. <code>4(+1) + x + 6(-1) = 0 ⇒ 4 + x - 6 = 0 ⇒ x = +2</code>.<br>3. Fe is in the +2 oxidation state."
  },
  {
    id: 53,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Which of the following is used as an anti-knocking agent (organometallic)?",
    options: ["Tetraethyl lead", "Ferrocene", "Grignard reagent", "TiCl₄"],
    correctIndex: 0, // "Tetraethyl lead"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Tetraethyl lead, Pb(C₂H₅)₄, is an organometallic compound historically added to petrol/gasoline to improve octane rating and reduce engine knocking."
  },
  {
    id: 54,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Ferrocene, [Fe(C₅H₅)₂], is an example of a:",
    options: ["π-bonded sandwich compound", "σ-bonded organometallic", "Ionic complex", "Werner-type complex"],
    correctIndex: 0, // "π-bonded sandwich compound"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Ferrocene consists of an Fe²⁺ ion sandwiched symmetrically between two aromatic cyclopentadienyl (C₅H₅⁻) rings bound through π electrons."
  },
  {
    id: 55,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "18-electron rule is primarily applicable to:",
    options: ["Main group compounds", "Organometallic transition metal complexes", "Lanthanide complexes", "Ionic solids"],
    correctIndex: 1, // "Organometallic transition metal complexes"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. The 18-electron rule applies to transition metal organometallic complexes.<br>2. It states that stable complexes fill their valence shell (nd + (n+1)s + (n+1)p) with 18 valence electrons."
  },
  {
    id: 56,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Which element shows anomalous behavior in Group 1 due to small size and high polarizing power?",
    options: ["Na", "K", "Li", "Cs"],
    correctIndex: 2, // "Li"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Lithium (Li) is the smallest element in Group 1.<br>2. Due to its tiny size and high charge density (polarizing power), it shows significant covalent character and anomalous behavior."
  },
  {
    id: 57,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Diagonal relationship exists between Li and:",
    options: ["Na", "Mg", "Be", "Al"],
    correctIndex: 1, // "Mg"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Lithium (Group 1, Period 2) and Magnesium (Group 2, Period 3) lie diagonally adjacent in the periodic table.<br>2. They share similar ionic sizes and electronegativities, leading to similar chemical properties."
  },
  {
    id: 58,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Which of the following is the strongest oxidizing agent among halogens?",
    options: ["F₂", "Cl₂", "Br₂", "I₂"],
    correctIndex: 0, // "F₂"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Fluorine (F₂) has the highest standard reduction potential (+2.87 V).<br>2. Its low bond dissociation energy and very high hydration energy of F⁻ make F₂ the strongest oxidizing halogen."
  },
  {
    id: 59,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Inert pair effect is most prominent in which group?",
    options: ["Group 13 (Tl)", "Group 1", "Group 2", "Group 17"],
    correctIndex: 0, // "Group 13 (Tl)"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Inert pair effect is the reluctance of inner s-electrons to bond in heavy p-block elements.<br>2. In Group 13, Thallium (Tl) prefers the +1 oxidation state over +3 due to this effect."
  },
  {
    id: 60,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Which oxide of nitrogen is used as an anesthetic (\"laughing gas\")?",
    options: ["NO", "N₂O", "NO₂", "N₂O₅"],
    correctIndex: 1, // "N₂O"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Nitrous Oxide (N₂O), commonly called laughing gas, is used as an inhalation anesthetic and analgesic in dental and minor medical surgeries."
  },
  {
    id: 61,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "The geometry of XeOF₄ is:",
    options: ["Square pyramidal", "Octahedral", "Trigonal bipyramidal", "Tetrahedral"],
    correctIndex: 0, // "Square pyramidal"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Xe has 8 valence electrons: 1 Xe=O double bond (2e), 4 Xe-F single bonds (4e), leaving 1 lone pair.<br>2. Steric number = 5 bond groups + 1 lone pair = 6 (octahedral electron pair geometry).<br>3. Molecular shape = <strong>Square pyramidal</strong>."
  },
  {
    id: 62,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Which of the following is the correct order of stability of oxidation states for Group 14 (inert pair effect)?",
    options: ["C²⁺ most stable", "Pb²⁺ most stable, Pb⁴⁺ less stable", "Sn⁴⁺ unstable relative to Sn²⁺ always", "Both Sn and Pb prefer +4 equally"],
    correctIndex: 1, // "Pb²⁺ most stable, Pb⁴⁺ less stable"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. In Group 14, down the group the +2 state becomes increasingly stable due to inert pair effect.<br>2. For Lead (Pb), Pb²⁺ is much more stable than Pb⁴⁺."
  },
  {
    id: 63,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Bioinorganic chemistry: the central metal ion in hemoglobin is:",
    options: ["Cu", "Fe", "Zn", "Mg"],
    correctIndex: 1, // "Fe"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Hemoglobin contains Iron (Fe²⁺) bound inside a porphyrin ring.<br>2. It binds molecular oxygen reversibly to transport O₂ in blood."
  },
  {
    id: 64,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "The central metal ion in chlorophyll is:",
    options: ["Fe", "Mg", "Zn", "Co"],
    correctIndex: 1, // "Mg"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Chlorophyll, the light-harvesting green pigment in plants, contains a Magnesium (Mg²⁺) ion at the center of a modified porphyrin ring."
  },
  {
    id: 65,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Vitamin B12 (cobalamin) contains which central metal ion?",
    options: ["Fe", "Co", "Cu", "Ni"],
    correctIndex: 1, // "Co"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Vitamin B12 (cobalamin) contains a central Cobalt (Co) ion coordinated in a corrin ring framework."
  },
  {
    id: 66,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Which qualitative analysis group reagent is used to precipitate Group II cations (as sulfides) in acidic medium?",
    options: ["NH₄OH + NH₄Cl", "H₂S in presence of dil. HCl", "(NH₄)₂CO₃", "NaOH"],
    correctIndex: 1, // "H₂S in presence of dil. HCl"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Acidic medium (dilute HCl) suppresses H₂S dissociation via common ion effect.<br>2. This keeps sulfide ion [S²⁻] low enough to precipitate only Group II sulfides (which have very low Ksp)."
  },
  {
    id: 67,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Brown ring test is used to detect the presence of:",
    options: ["Sulfate ion", "Nitrate ion", "Chloride ion", "Carbonate ion"],
    correctIndex: 1, // "Nitrate ion"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Brown ring test detects Nitrate (NO₃⁻) ions.<br>2. FeSO₄ reduces NO₃⁻ to NO, forming a brown complex ring of <code>[Fe(H₂O)₅(NO)]SO₄</code> at the liquid interface."
  },
  {
    id: 68,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "Which of the following is amphoteric?",
    options: ["Al₂O₃", "Na₂O", "MgO", "SO₃"],
    correctIndex: 0, // "Al₂O₃"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Aluminium oxide (Al₂O₃) reacts with both acids (forming Al³⁺ salts) and bases (forming aluminates).<br>2. Reacting with both acid and base makes it <strong>amphoteric</strong>."
  },
  {
    id: 69,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "In the spectrochemical series, which of these ligands causes the smallest crystal field splitting (weakest field)?",
    options: ["CN⁻", "NH₃", "I⁻", "en (ethylenediamine)"],
    correctIndex: 2, // "I⁻"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Spectrochemical series places halide ions (I⁻ < Br⁻ < Cl⁻ < F⁻) at the bottom.<br>2. Iodide (I⁻) is the weakest field ligand among the choices, producing the smallest crystal field splitting Δo."
  },
  {
    id: 70,
    section: "Inorganic Chemistry",
    sectionId: "B",
    question: "The Jahn-Teller distortion is most commonly observed in which configuration?",
    options: ["d³", "d⁵ high spin", "d⁹", "d¹⁰"],
    correctIndex: 2, // "d⁹"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Jahn-Teller distortion occurs when degenerate orbitals are unevenly occupied.<br>2. In d⁹ configuration (t2g⁶ eg³), eg level is unsymmetrically filled, producing strong axial elongation or compression."
  },

  // SECTION C — ORGANIC CHEMISTRY (30)
  {
    id: 71,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "SN1 reactions proceed via which type of intermediate?",
    options: ["Carbanion", "Carbocation", "Free radical", "Carbene"],
    correctIndex: 1, // "Carbocation"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. SN1 is a two-step unimolecular substitution.<br>2. Step 1 (slow): Leaving group departs to yield a planar <strong>carbocation intermediate</strong>."
  },
  {
    id: 72,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Which of the following favors SN2 over SN1?",
    options: ["Tertiary substrate", "Polar protic solvent", "Strong nucleophile with primary substrate", "Weak nucleophile"],
    correctIndex: 2, // "Strong nucleophile with primary substrate"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. SN2 is a single-step bimolecular back-side attack.<br>2. Unhindered primary substrate + strong nucleophile overwhelmingly favors SN2 mechanism."
  },
  {
    id: 73,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Markovnikov's rule applies to addition of HX to:",
    options: ["Symmetrical alkenes", "Unsymmetrical alkenes", "Alkynes only", "Aromatic rings"],
    correctIndex: 1, // "Unsymmetrical alkenes"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Markovnikov's rule predicts addition of HX across double bonds of <strong>unsymmetrical alkenes</strong>.<br>2. H⁺ attaches to the carbon carrying more hydrogens to form the more stable carbocation."
  },
  {
    id: 74,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Anti-Markovnikov addition of HBr to alkenes occurs in the presence of:",
    options: ["Peroxides", "H₂SO₄", "HgSO₄", "Light alone without peroxide"],
    correctIndex: 0, // "Peroxides"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. In the presence of organic peroxides (ROOR), addition of HBr proceeds via a free radical pathway (Kharasch effect).<br>2. Br atom adds to the less substituted double bond carbon."
  },
  {
    id: 75,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "The Cannizzaro reaction is given by:",
    options: ["Aldehydes with α-hydrogen", "Aldehydes without α-hydrogen", "Ketones with α-hydrogen", "Carboxylic acids"],
    correctIndex: 1, // "Aldehydes without α-hydrogen"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Cannizzaro reaction is a disproportionation reaction of <strong>aldehydes without α-hydrogens</strong> (e.g. HCHO, C₆H₅CHO) in concentrated alkali.<br>2. One molecule is oxidized to carboxylic acid salt, another reduced to primary alcohol."
  },
  {
    id: 76,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "In the Aldol condensation, the nucleophile is generated by:",
    options: ["Deprotonation of α-hydrogen", "Protonation of carbonyl oxygen", "Deprotonation of carbonyl carbon", "Halogenation"],
    correctIndex: 0, // "Deprotonation of α-hydrogen"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. A base abstracts an acidic <strong>α-hydrogen</strong> from an aldehyde or ketone.<br>2. This forms a nucleophilic enolate anion that attacks another carbonyl group."
  },
  {
    id: 77,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "The Hofmann bromamide degradation converts an amide to:",
    options: ["A nitrile", "An amine with one carbon less", "A carboxylic acid", "An ester"],
    correctIndex: 1, // "An amine with one carbon less"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Reaction: <code>R-CONH₂ + Br₂ + 4 NaOH → R-NH₂ + Na₂CO₃ + 2 NaBr + 2 H₂O</code>.<br>2. The carbonyl carbon is lost as carbonate, giving a <strong>primary amine with 1 fewer carbon</strong>."
  },
  {
    id: 78,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Beckmann rearrangement converts a ketoxime into:",
    options: ["A nitrile", "An amide", "A carboxylic acid", "An amine"],
    correctIndex: 1, // "An amide"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Treatment of an oxime (derived from a ketone) with acidic catalyst causes migration of an alkyl group to nitrogen.<br>2. This converts the ketoxime into a substituted <strong>amide</strong>."
  },
  {
    id: 79,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Friedel-Crafts acylation requires which catalyst?",
    options: ["NaOH", "Anhydrous AlCl₃", "H₂SO₄", "Pd/C"],
    correctIndex: 1, // "Anhydrous AlCl₃"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Anhydrous AlCl₃ is a strong Lewis acid catalyst.<br>2. It abstracts chloride from acyl chloride (RCOCl) to generate the reactive electrophilic acylium ion (RCO⁺)."
  },
  {
    id: 80,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Which group is a strong ortho/para director and activator in electrophilic aromatic substitution?",
    options: ["-NO₂", "-OH", "-COOH", "-SO₃H"],
    correctIndex: 1, // "-OH"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Hydroxyl group (-OH) donates lone pair electrons into the aromatic ring via resonance (+M effect).<br>2. This activates the ring and directs incoming electrophiles to <strong>ortho and para positions</strong>."
  },
  {
    id: 81,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Which of the following is a meta-director in EAS?",
    options: ["-NH₂", "-CH₃", "-NO₂", "-OCH₃"],
    correctIndex: 2, // "-NO₂"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Nitro group (-NO₂) is strongly electron-withdrawing (-I and -M effects).<br>2. It deactivates ortho/para positions more than meta, directing incoming attack to the <strong>meta position</strong>."
  },
  {
    id: 82,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Grignard reagent (RMgX) reacts with CO₂ followed by hydrolysis to give:",
    options: ["An alcohol", "A carboxylic acid", "An ester", "An aldehyde"],
    correctIndex: 1, // "A carboxylic acid"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. RMgX adds nucleophilically across C=O bond of CO₂ to form <code>R-COOMgX</code>.<br>2. Acid hydrolysis yields a <strong>carboxylic acid (R-COOH)</strong>."
  },
  {
    id: 83,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Reaction of Grignard reagent with formaldehyde gives:",
    options: ["Primary alcohol", "Secondary alcohol", "Tertiary alcohol", "Carboxylic acid"],
    correctIndex: 0, // "Primary alcohol"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. RMgX + Formaldehyde (HCHO) → Primary alcohol (R-CH₂OH).<br>2. (Note: Other aldehydes give secondary alcohols; ketones give tertiary alcohols)."
  },
  {
    id: 84,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Which reagent is used to distinguish aldehydes from ketones (Tollens' test)?",
    options: ["Fehling's solution", "Ammoniacal silver nitrate (Tollens' reagent)", "2,4-DNP", "Schiff's reagent gives with both"],
    correctIndex: 1, // "Ammoniacal silver nitrate (Tollens' reagent)"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Tollens' reagent is ammoniacal silver nitrate solution [Ag(NH₃)₂]⁺.<br>2. Aldehydes reduce Ag⁺ to silver metal forming a silver mirror; ketones do not react."
  },
  {
    id: 85,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Which of the following gives a positive iodoform test?",
    options: ["Ethanol", "Methanol", "2-Propanol (isopropanol)", "1-Propanol"],
    correctIndex: 2, // "2-Propanol (isopropanol)"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Iodoform test requires a <code>CH₃-CH(OH)-</code> or <code>CH₃-C=O</code> group.<br>2. 2-propanol, (CH₃)₂CH-OH, contains the secondary methyl carbinol group and forms yellow iodoform (CHI₃) precipitate with I₂/NaOH."
  },
  {
    id: 86,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "The Hell-Volhard-Zelinsky reaction is used for α-halogenation of:",
    options: ["Alkenes", "Carboxylic acids", "Alcohols", "Amines"],
    correctIndex: 1, // "Carboxylic acids"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Hell-Volhard-Zelinsky (HVZ) reaction substitutes hydrogen at the α-position of carboxylic acids with Br or Cl in presence of red phosphorus."
  },
  {
    id: 87,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Sandmeyer reaction converts a diazonium salt into:",
    options: ["An aryl halide (using Cu salts)", "An amine", "A phenol", "A nitro compound"],
    correctIndex: 0, // "An aryl halide (using Cu salts)"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Sandmeyer reaction replaces diazonium group (-N₂⁺ Cl⁻) with Cl, Br, or CN using cuprous salts (CuCl, CuBr, CuCN)."
  },
  {
    id: 88,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Gabriel phthalimide synthesis is used to prepare:",
    options: ["Secondary amines", "Pure primary amines", "Tertiary amines", "Quaternary ammonium salts"],
    correctIndex: 1, // "Pure primary amines"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Potassium phthalimide reacts with primary alkyl halides followed by hydrolysis to yield unmixed, pure primary aliphatic amines without 2°/3° amine contamination."
  },
  {
    id: 89,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Which reaction converts an alkyl halide + AgNO₂ into a nitroalkane?",
    options: ["SN1 with retention", "SN2 with silver nitrite (via O-attack minimal)", "E2 elimination", "Wurtz reaction"],
    correctIndex: 1, // "SN2 with silver nitrite (via O-attack minimal)"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. AgNO₂ has covalent Ag-O bond.<br>2. The lone pair on Nitrogen attacks the alkyl carbon via SN2 to yield nitroalkane (R-NO₂) as the main product."
  },
  {
    id: 90,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "In E1 vs E2 elimination, Zaitsev's rule predicts:",
    options: ["Least substituted alkene as major product", "Most substituted (more stable) alkene as major product", "Only terminal alkene forms", "Racemic mixture always"],
    correctIndex: 1, // "Most substituted (more stable) alkene as major product"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Zaitsev's rule states that in elimination reactions, the major product is the alkene having the greatest number of alkyl substituents attached to the double bond."
  },
  {
    id: 91,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Which of the following is an example of a pericyclic reaction?",
    options: ["SN2 substitution", "Diels-Alder reaction", "Friedel-Crafts alkylation", "Cannizzaro reaction"],
    correctIndex: 1, // "Diels-Alder reaction"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Diels-Alder reaction is a [4+2] cycloaddition reaction.<br>2. It proceeds in a single step through a cyclic transition state, making it a pericyclic reaction."
  },
  {
    id: 92,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "In the Diels-Alder reaction, the diene must be in which conformation to react?",
    options: ["s-trans", "s-cis", "Either, no preference", "Anti-periplanar"],
    correctIndex: 1, // "s-cis"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. For simultaneous overlap of terminal double bonds with the dienophile, the diene must adopt the <strong>s-cis</strong> (single-bond cis) conformation."
  },
  {
    id: 93,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "R and S configuration is assigned based on:",
    options: ["Optical rotation direction", "CIP (Cahn-Ingold-Prelog) priority rules", "Boiling point", "Melting point"],
    correctIndex: 1, // "CIP (Cahn-Ingold-Prelog) priority rules"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Absolute stereochemical configurations (R/S) are assigned to chiral centers using Cahn-Ingold-Prelog (CIP) priority rules based on atomic numbers of attached atoms."
  },
  {
    id: 94,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Two compounds that are non-superimposable mirror images are called:",
    options: ["Diastereomers", "Enantiomers", "Conformers", "Structural isomers"],
    correctIndex: 1, // "Enantiomers"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Enantiomers are stereoisomers that are non-superimposable mirror images.<br>2. They possess equal and opposite specific optical rotations."
  },
  {
    id: 95,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "A meso compound is characterized by:",
    options: ["Chirality with net optical activity", "An internal plane of symmetry despite having stereocenters, making it optically inactive", "No stereocenters at all", "Always a racemic mixture"],
    correctIndex: 1, // "An internal plane of symmetry despite having stereocenters, making it optically inactive"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. A meso compound has two or more chiral centers but possesses an internal plane of symmetry.<br>2. Optical activity of one half cancels the other, rendering it <strong>optically inactive</strong>."
  },
  {
    id: 96,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Which amino acid is NOT chiral (achiral)?",
    options: ["Alanine", "Glycine", "Serine", "Valine"],
    correctIndex: 1, // "Glycine"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Glycine structure is <code>H₂N-CH₂-COOH</code>.<br>2. Its alpha carbon is bonded to 2 Hydrogens, so it lacks 4 different groups.<br>3. Hence Glycine is the only <strong>achiral</strong> standard amino acid."
  },
  {
    id: 97,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "The peptide bond is formed between which functional groups?",
    options: ["-OH and -OH", "-COOH and -NH₂ (with loss of water)", "-CHO and -NH₂", "-COOH and -COOH"],
    correctIndex: 1, // "-COOH and -NH₂ (with loss of water)"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Peptide bond (<code>-CO-NH-</code>) is an amide bond.<br>2. It forms by condensation between the carboxyl (-COOH) group of one amino acid and amino (-NH₂) group of another with loss of H₂O."
  },
  {
    id: 98,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Glucose and fructose are examples of:",
    options: ["Disaccharides", "Monosaccharides (structural isomers of each other)", "Polysaccharides", "Amino acids"],
    correctIndex: 1, // "Monosaccharides (structural isomers of each other)"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Both glucose and fructose are single-sugar units (monosaccharides) with formula C₆H₁₂O₆.<br>2. Glucose is an aldohexose and fructose is a ketohexose (functional isomers)."
  },
  {
    id: 99,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "Which test distinguishes aldopentoses/reducing sugars based on Cu²⁺ reduction?",
    options: ["Molisch's test", "Fehling's test", "Biuret test", "Ninhydrin test"],
    correctIndex: 1, // "Fehling's test"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Fehling's solution contains Cu²⁺ ions.<br>2. Reducing sugars reduce blue Cu²⁺ to red Cu₂O precipitate upon heating."
  },
  {
    id: 100,
    section: "Organic Chemistry",
    sectionId: "C",
    question: "The Ninhydrin test is used to detect the presence of:",
    options: ["Carbohydrates", "Amino acids/proteins", "Lipids", "Nucleic acids"],
    correctIndex: 1, // "Amino acids/proteins"
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Ninhydrin reacts with free alpha-amino groups present in amino acids and proteins.<br>2. It produces a characteristic deep purple-blue color (Ruhemann's purple)."
  }
];
