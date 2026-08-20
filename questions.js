// URATPG 2026 Official M.Sc. Chemistry Question Bank (100 Questions)
const rawQuestions = [
  // =========================================================================
  // SECTION I — INORGANIC CHEMISTRY (Questions 1 – 33)
  // =========================================================================
  {
    id: 1,
    section: "Inorganic Chemistry",
    sectionId: "I",
    question: "Which of the following species has the highest bond order?",
    options: ["O₂⁺", "O₂²⁻", "NO⁺", "N₂⁻"],
    correctIndex: 2, // NO⁺ (BO = 3.0)
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Calculate valence electrons and molecular orbital bond order <code>BO = (N_b - N_a) / 2</code>:<br>&nbsp;&nbsp;&nbsp;• NO⁺ (14 e⁻, isoelectronic with N₂): BO = (10 - 4)/2 = <strong>3.0</strong>.<br>&nbsp;&nbsp;&nbsp;• O₂⁺ (15 e⁻): BO = 2.5.<br>&nbsp;&nbsp;&nbsp;• N₂⁻ (15 e⁻): BO = 2.5.<br>&nbsp;&nbsp;&nbsp;• O₂²⁻ (18 e⁻): BO = 1.0.<br>2. Therefore, <strong>NO⁺</strong> has the highest bond order."
  },
  {
    id: 2,
    section: "Inorganic Chemistry",
    sectionId: "I",
    question: "The hybridization of iodine in IF₅ and its molecular geometry are respectively:",
    options: ["sp³d², Octahedral", "sp³d², Square pyramidal", "sp³d³, Pentagonal bipyramidal", "dsp³, Trigonal bipyramidal"],
    correctIndex: 1, // sp³d², Square pyramidal
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Iodine has 7 valence electrons. 5 form single I-F bonds, leaving 1 lone pair.<br>2. Steric number = 5 bond pairs + 1 lone pair = 6 ⇒ <strong>sp³d² hybridization</strong>.<br>3. Octahedral electron arrangement with 1 lone pair yields a <strong>Square Pyramidal</strong> molecular geometry."
  },
  {
    id: 3,
    section: "Inorganic Chemistry",
    sectionId: "I",
    question: "According to VSEPR theory, which among the following is a T-shaped molecule?",
    options: ["BF₃", "ClF₃", "NH₃", "PCl₃"],
    correctIndex: 1, // ClF₃
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. In ClF₃, Chlorine has 7 valence e⁻: 3 single Cl-F bonds and 2 lone pairs.<br>2. Steric number = 3 bp + 2 lp = 5 (Trigonal bipyramidal electron geometry).<br>3. Equatorial placement of 2 lone pairs gives a bent <strong>T-shaped</strong> molecular geometry."
  },
  {
    id: 4,
    section: "Inorganic Chemistry",
    sectionId: "I",
    question: "Which of the following oxides is purely amphoteric?",
    options: ["Na₂O", "SO₃", "Al₂O₃", "CaO"],
    correctIndex: 2, // Al₂O₃
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Na₂O and CaO are basic metallic oxides; SO₃ is an acidic non-metallic oxide.<br>2. <strong>Al₂O₃ (Aluminium Oxide)</strong> reacts readily with both strong acids (forming Al³⁺) and strong bases (forming aluminates), making it purely <strong>amphoteric</strong>."
  },
  {
    id: 5,
    section: "Inorganic Chemistry",
    sectionId: "I",
    question: "The correct increasing order of first ionization enthalpy for group 15 elements is:",
    options: ["Bi < Sb < As < P < N", "N < P < As < Sb < Bi", "Bi < As < P < Sb < N", "Sb < Bi < P < As < N"],
    correctIndex: 0, // Bi < Sb < As < P < N
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Down group 15, atomic radius increases and effective nuclear charge on outer electrons decreases.<br>2. Thus, first ionization enthalpy decreases down the group: <strong>Bi < Sb < As < P < N</strong>."
  },
  {
    id: 6,
    section: "Inorganic Chemistry",
    sectionId: "I",
    question: "The IUPAC name of the complex K₃[Cr(C₂O₄)₃] is:",
    options: ["Potassium trioxalatocobaltate(III)", "Potassium trioxalatochromate(III)", "Trioxalatochromate(III) potassium", "Potassium chromium(III) trioxalate"],
    correctIndex: 1, // Potassium trioxalatochromate(III)
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Cation named first: Potassium.<br>2. Anionic complex sphere: 3 oxalato ligands (trioxalato) + Chromium with '-ate' suffix (chromate).<br>3. Oxidation state of Cr: <code>3(+1) + x + 3(-2) = 0 ⇒ x = +3</code>.<br>4. IUPAC Name: <strong>Potassium trioxalatochromate(III)</strong>."
  },
  {
    id: 7,
    section: "Inorganic Chemistry",
    sectionId: "I",
    question: "The spin-only magnetic moment (μ_eff) of [Mn(H₂O)₆]²⁺ ion is:",
    options: ["1.73 BM", "3.87 BM", "4.90 BM", "5.92 BM"],
    correctIndex: 3, // 5.92 BM
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Mn²⁺ is d⁵. H₂O is a weak field ligand, forming a high-spin <code>t2g³ eg²</code> complex (n = 5 unpaired electrons).<br>2. <code>μ_eff = √(n(n+2)) = √(5 × 7) = √35 = <strong>5.92 BM</strong></code>."
  },
  {
    id: 8,
    section: "Inorganic Chemistry",
    sectionId: "I",
    question: "Which of the following octahedral complexes exhibits strong Jahn-Teller distortion?",
    options: ["High-spin d⁸", "Low-spin d⁶", "High-spin d⁴", "High-spin d³"],
    correctIndex: 2, // High-spin d⁴
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Jahn-Teller distortion is strong when eg orbitals are unsymmetrically occupied.<br>2. High-spin d⁴ has electron configuration <code>t2g³ eg¹</code>.<br>3. Single electron in degenerate eg subshell causes severe axial elongation (strong Jahn-Teller effect)."
  },
  {
    id: 9,
    section: "Inorganic Chemistry",
    sectionId: "I",
    question: "The number of geometrical isomers possible for the square planar complex [Pt(NH₃)(py)(Cl)(Br)] is:",
    options: ["2", "3", "4", "1"],
    correctIndex: 1, // 3
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. A square planar complex of type <code>[Mabcd]</code> with 4 different monodentate ligands forms exactly <strong>3 geometrical isomers</strong> (by fixing one ligand and interchanging the trans position among the remaining three)."
  },
  {
    id: 10,
    section: "Inorganic Chemistry",
    sectionId: "I",
    question: "Which of the following transitions is Laporte forbidden but spin allowed in centrosymmetric transition metal complexes?",
    options: ["u → g", "g → u", "d → d", "s → p"],
    correctIndex: 2, // d → d
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Laporte selection rule forbids transitions between states of the same parity (g → g or u → u).<br>2. d-orbitals are gerade (g), so <strong>d → d transitions (g → g) are Laporte forbidden</strong>, but can be spin-allowed if ΔS = 0."
  },
  {
    id: 11,
    section: "Inorganic Chemistry",
    sectionId: "I",
    question: "Wilkinson's catalyst contains which central metal atom?",
    options: ["Ru", "Rh", "Pd", "Pt"],
    correctIndex: 1, // Rh
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Wilkinson's catalyst is chloridotris(triphenylphosphine)rhodium(I), <code>[Rh(PPh₃)₃Cl]</code>.<br>2. The central transition metal atom is <strong>Rhodium (Rh)</strong>."
  },
  {
    id: 12,
    section: "Inorganic Chemistry",
    sectionId: "I",
    question: "The number of bridging carbonyl ligands in Fe₂(CO)₉ in its solid state is:",
    options: ["1", "2", "3", "4"],
    correctIndex: 2, // 3
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Fe₂(CO)₉ consists of two Fe(CO)₃ units linked by <strong>3 bridging μ₂-CO ligands</strong> and one Fe-Fe single bond (3 terminal CO per Fe)."
  },
  {
    id: 13,
    section: "Inorganic Chemistry",
    sectionId: "I",
    question: "The coordination number and oxidation state of cobalt in Vitamin B₁₂ are respectively:",
    options: ["6 and +3", "4 and +2", "5 and +1", "6 and +2"],
    correctIndex: 0, // 6 and +3
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. In Vitamin B₁₂ (cyanocobalamin), Cobalt is in <strong>+3 oxidation state</strong>.<br>2. It is octahedrally coordinated (4 nitrogen donors from corrin ring + 1 N from dimethylbenzimidazole + 1 CN⁻ group) giving a <strong>coordination number of 6</strong>."
  },
  {
    id: 14,
    section: "Inorganic Chemistry",
    sectionId: "I",
    question: "In chlorophyll, the central coordination metal ion present is:",
    options: ["Fe²⁺", "Mg²⁺", "Zn²⁺", "Cu²⁺"],
    correctIndex: 1, // Mg²⁺
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Chlorophyll is a porphyrin-derivative complex containing a central <strong>Magnesium (Mg²⁺)</strong> ion."
  },
  {
    id: 15,
    section: "Inorganic Chemistry",
    sectionId: "I",
    question: "Which of the following pairs of lanthanide ions is diamagnetic?",
    options: ["La³⁺ and Lu³⁺", "Ce³⁺ and Yb³⁺", "Eu²⁺ and Gd³⁺", "Sm³⁺ and Nd³⁺"],
    correctIndex: 0, // La³⁺ and Lu³⁺
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. La³⁺ has 4f⁰ configuration (empty f-shell, 0 unpaired e⁻).<br>2. Lu³⁺ has 4f¹⁴ configuration (completely filled f-shell, 0 unpaired e⁻).<br>3. Having zero unpaired electrons makes <strong>La³⁺ and Lu³⁺ diamagnetic</strong>."
  },
  {
    id: 16,
    section: "Inorganic Chemistry",
    sectionId: "I",
    question: "The only radioactive lanthanide element is:",
    options: ["Promethium (Pm)", "Technetium (Tc)", "Lutetium (Lu)", "Samarium (Sm)"],
    correctIndex: 0, // Promethium (Pm)
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Promethium (Pm, Z = 61)</strong> is the only naturally radioactive lanthanide element.<br>2. (Technetium is radioactive but belongs to transition metals, Z = 43)."
  },
  {
    id: 17,
    section: "Inorganic Chemistry",
    sectionId: "I",
    question: "What is the oxidation state of chromium in Marshall's acid-related peroxo derivative CrO₅?",
    options: ["+10", "+6", "+4", "+3"],
    correctIndex: 1, // +6
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. CrO₅ has a butterfly structure containing 1 oxo oxygen (-2) and 2 peroxide groups (-1 each for 4 oxygen atoms).<br>2. <code>x + 1(-2) + 4(-1) = 0 ⇒ x = <strong>+6</strong></code>."
  },
  {
    id: 18,
    section: "Inorganic Chemistry",
    sectionId: "I",
    question: "Which of the following is an ambidentate ligand?",
    options: ["en", "SCN⁻", "NH₃", "H₂O"],
    correctIndex: 1, // SCN⁻
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Ambidentate ligands possess two donor atoms but attach via only one atom at a time.<br>2. Thiocyanate (<strong>SCN⁻</strong>) can coordinate via S (thiocyanato) or N (isothiocyanato)."
  },
  {
    id: 19,
    section: "Inorganic Chemistry",
    sectionId: "I",
    question: "The 3-center 2-electron (3c-2e⁻) banana bonds in diborane (B₂H₆) shown below involve:<br><div class=\"svg-diagram-card\"><svg width=\"280\" height=\"140\" viewBox=\"0 0 280 140\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"80\" cy=\"70\" r=\"18\" fill=\"#0f4c81\"/><text x=\"80\" y=\"75\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"16\" fill=\"#ffffff\">B</text><circle cx=\"200\" cy=\"70\" r=\"18\" fill=\"#0f4c81\"/><text x=\"200\" y=\"75\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"16\" fill=\"#ffffff\">B</text><line x1=\"80\" y1=\"70\" x2=\"25\" y2=\"35\" stroke=\"#0f4c81\" stroke-width=\"3\"/><circle cx=\"25\" cy=\"35\" r=\"12\" fill=\"#e2e8f0\" stroke=\"#0f4c81\" stroke-width=\"2\"/><text x=\"25\" y=\"39\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"13\" fill=\"#0f172a\">H</text><line x1=\"80\" y1=\"70\" x2=\"25\" y2=\"105\" stroke=\"#0f4c81\" stroke-width=\"3\"/><circle cx=\"25\" cy=\"105\" r=\"12\" fill=\"#e2e8f0\" stroke=\"#0f4c81\" stroke-width=\"2\"/><text x=\"25\" y=\"109\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"13\" fill=\"#0f172a\">H</text><line x1=\"200\" y1=\"70\" x2=\"255\" y2=\"35\" stroke=\"#0f4c81\" stroke-width=\"3\"/><circle cx=\"255\" cy=\"35\" r=\"12\" fill=\"#e2e8f0\" stroke=\"#0f4c81\" stroke-width=\"2\"/><text x=\"255\" y=\"39\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"13\" fill=\"#0f172a\">H</text><line x1=\"200\" y1=\"70\" x2=\"255\" y2=\"105\" stroke=\"#0f4c81\" stroke-width=\"3\"/><circle cx=\"255\" cy=\"105\" r=\"12\" fill=\"#e2e8f0\" stroke=\"#0f4c81\" stroke-width=\"2\"/><text x=\"255\" y=\"109\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"13\" fill=\"#0f172a\">H</text><path d=\"M 80 70 Q 140 20 200 70\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"4\" stroke-dasharray=\"3,3\"/><circle cx=\"140\" cy=\"38\" r=\"13\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"140\" y=\"43\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"13\" fill=\"#1e40af\">H_b</text><path d=\"M 80 70 Q 140 120 200 70\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"4\" stroke-dasharray=\"3,3\"/><circle cx=\"140\" cy=\"102\" r=\"13\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"140\" y=\"107\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"13\" fill=\"#1e40af\">H_b</text></svg></div>",
    options: ["B−H_t bonds", "B−H_b−B bridge bonds", "Direct B−B bond", "Complete ionic interactions"],
    correctIndex: 1, // B−H_b−B bridge bonds
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Diborane contains 4 terminal B-H_t 2-center 2-electron bonds and 2 <strong>bridging B−H_b−B 3-center 2-electron (3c-2e⁻) banana bonds</strong>."
  },
  {
    id: 20,
    section: "Inorganic Chemistry",
    sectionId: "I",
    question: "Which of the following compounds is known as 'Inorganic Benzene'?",
    options: ["Borazole (B₃N₃H₆)", "Phosphazene (P₃N₃Cl₆)", "Boron carbide (B₄C)", "Silicones"],
    correctIndex: 0, // Borazole (B₃N₃H₆)
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Borazole / Borazine (B₃N₃H₆)</strong> is called 'Inorganic Benzene' due to its cyclic planar 6-membered ring structure with alternating B and N atoms and aromatic π-delocalization."
  },
  {
    id: 21,
    section: "Inorganic Chemistry",
    sectionId: "I",
    question: "Prussian blue precipitate is chemically identified as:",
    options: ["Fe₄[Fe(CN)₆]₃", "Fe₃[Fe(CN)₆]₂", "K₃[Fe(CN)₆]", "Fe(SCN)₃"],
    correctIndex: 0, // Fe₄[Fe(CN)₆]₃
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Prussian blue is iron(III) hexacyanoferrate(II), formula <strong>Fe₄[Fe(CN)₆]₃</strong> (or KFe[Fe(CN)₆])."
  },
  {
    id: 22,
    section: "Inorganic Chemistry",
    sectionId: "I",
    question: "The group reagent used for the precipitation of Group III basic radicals in qualitative inorganic analysis is:",
    options: ["Dilute HCl", "H₂S gas in presence of dilute HCl", "NH₄OH in presence of excess NH₄Cl", "H₂S gas in presence of NH₄OH"],
    correctIndex: 2, // NH₄OH in presence of excess NH₄Cl
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Group III cations (Fe³⁺, Al³⁺, Cr³⁺) precipitate as hydroxides.<br>2. Reagent: <strong>NH₄OH in presence of NH₄Cl</strong> (common ion effect suppresses [OH⁻] to precipitate only Group III hydroxides without precipitating Group IV/V)."
  },
  {
    id: 23,
    section: "Inorganic Chemistry",
    sectionId: "I",
    question: "Which of the following elements exhibits the highest oxidation state in the 3d transition series?",
    options: ["Cr", "Mn", "Fe", "V"],
    correctIndex: 1, // Mn
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Manganese (Mn, 3d⁵ 4s²) exhibits the highest oxidation state of <strong>+7</strong> (e.g. in KMnO₄/MnO₄⁻) in the 3d transition metal series."
  },
  {
    id: 24,
    section: "Inorganic Chemistry",
    sectionId: "I",
    question: "The equivalent weight of KMnO₄ in acidic medium is (where M = molecular weight):",
    options: ["M/5", "M/3", "M/1", "M/6"],
    correctIndex: 0, // M/5
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. In acidic medium: <code>MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O</code>.<br>2. Change in oxidation state (n-factor) = 7 - 2 = 5.<br>3. Equivalent weight = <strong>M / 5</strong>."
  },
  {
    id: 25,
    section: "Inorganic Chemistry",
    sectionId: "I",
    question: "Which of the following ions has zero Crystal Field Stabilization Energy (CFSE) in high-spin octahedral geometry?",
    options: ["Fe³⁺", "Cr³⁺", "Ni²⁺", "Co³⁺"],
    correctIndex: 0, // Fe³⁺
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Fe³⁺ is high-spin d⁵: <code>t2g³ eg²</code>.<br>2. <code>CFSE = [3 × (-0.4) + 2 × (+0.6)] Δo = -1.2 + 1.2 = <strong>0</strong></code>."
  },
  {
    id: 26,
    section: "Inorganic Chemistry",
    sectionId: "I",
    question: "The geometry of XeF₄ molecule is:",
    options: ["Tetrahedral", "Square planar", "See-saw", "Octahedral"],
    correctIndex: 1, // Square planar
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Central Xe has 8 valence e⁻: 4 single bonds + 2 lone pairs = Steric No. 6.<br>2. Octahedral electron pair geometry with 2 axial lone pairs gives a <strong>Square Planar</strong> molecular shape."
  },
  {
    id: 27,
    section: "Inorganic Chemistry",
    sectionId: "I",
    question: "Which of the following silicates contains (Si₂O₇)⁶⁻ discrete anions?",
    options: ["Orthosilicates", "Pyrosilicates", "Chain silicates", "Sheet silicates"],
    correctIndex: 1, // Pyrosilicates
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Pyrosilicates (Sorosilicates)</strong> contain discrete <code>(Si₂O₇)⁶⁻</code> anions formed by sharing 1 oxygen vertex between two SiO₄ tetrahedra."
  },
  {
    id: 28,
    section: "Inorganic Chemistry",
    sectionId: "I",
    question: "The conjugate base of HSO₄⁻ is:",
    options: ["H₂SO₄", "SO₄²⁻", "SO₃²⁻", "H₃O⁺"],
    correctIndex: 1, // SO₄²⁻
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Conjugate base is formed by removing H⁺ from acid.<br>2. <code>HSO₄⁻ → H⁺ + SO₄²⁻</code>.<br>3. Hence, <strong>SO₄²⁻</strong> is the conjugate base."
  },
  {
    id: 29,
    section: "Inorganic Chemistry",
    sectionId: "I",
    question: "The chemical formula of Nessler's reagent is:",
    options: ["K₂[HgI₄]", "K[PtCl₃(C₂H₄)]", "[Cu(NH₃)₄]SO₄", "Hg₂Cl₂"],
    correctIndex: 0, // K₂[HgI₄]
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Nessler's reagent (alkaline solution used to detect ammonia) is potassium tetraiodomercurate(II), <strong>K₂[HgI₄]</strong>."
  },
  {
    id: 30,
    section: "Inorganic Chemistry",
    sectionId: "I",
    question: "Zeise's salt is an organometallic compound represented by:",
    options: ["K[PtCl₃(η²-C₂H₄)]", "[Fe(η⁵-C₅H₅)₂]", "[Cr(η⁶-C₆H₆)₂]", "Ni(CO)₄"],
    correctIndex: 0, // K[PtCl₃(η²-C₂H₄)]
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Zeise's salt is potassium trichlorido(η²-ethylene)platinum(II), formula <strong>K[PtCl₃(η²-C₂H₄)]</strong>."
  },
  {
    id: 31,
    section: "Inorganic Chemistry",
    sectionId: "I",
    question: "The reason for the lanthanide contraction is:",
    options: ["Poor shielding of 4f electrons", "Strong shielding of 4f electrons", "Increase in nuclear radius", "High electropositivity"],
    correctIndex: 0, // Poor shielding of 4f electrons
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Diffuse 4f orbitals provide very <strong>poor shielding</strong> of nuclear charge.<br>2. Effective nuclear charge increases steadily across 4f series, pulling outer shells inward."
  },
  {
    id: 32,
    section: "Inorganic Chemistry",
    sectionId: "I",
    question: "Which of the following is a non-reducing sugar?",
    options: ["Maltose", "Lactose", "Sucrose", "Cellobiose"],
    correctIndex: 2, // Sucrose
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. In <strong>Sucrose</strong>, glycosidic linkage joins both anomeric C1 of glucose and C2 of fructose, leaving no free hemiacetal OH group."
  },
  {
    id: 33,
    section: "Inorganic Chemistry",
    sectionId: "I",
    question: "Which pair of alkali metal ions shows the greatest degree of hydration in aqueous solution?",
    options: ["Li⁺", "Cs⁺", "K⁺", "Rb⁺"],
    correctIndex: 0, // Li⁺
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Hydration energy is inversely proportional to ionic radius.<br>2. <strong>Li⁺</strong> has the smallest gaseous ionic radius, highest charge density, and thus exhibits the <strong>greatest degree of hydration</strong>."
  },

  // =========================================================================
  // SECTION II — ORGANIC CHEMISTRY (Questions 34 – 67)
  // =========================================================================
  {
    id: 34,
    section: "Organic Chemistry",
    sectionId: "II",
    question: "Which of the following carbocations is the most stable?",
    options: ["CH₃−CH₂⁺", "(CH₃)₂CH⁺", "(C₆H₅)₃C⁺", "CH₂=CH−CH₂⁺"],
    correctIndex: 2, // (C₆H₅)₃C⁺
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Triphenylmethyl (Trityl) carbocation, <strong>(C₆H₅)₃C⁺</strong>, is resonance stabilized by 9 equivalent aromatic canonical structures, making it exceptionally stable."
  },
  {
    id: 35,
    section: "Organic Chemistry",
    sectionId: "II",
    question: "Consider the following aromaticity problem:<br><div class=\"svg-diagram-card\"><svg width=\"200\" height=\"200\" viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"70,20 130,20 180,70 180,130 130,180 70,180 20,130 20,70\" fill=\"none\" stroke=\"#0f4c81\" stroke-width=\"3\"/><line x1=\"75\" y1=\"30\" x2=\"125\" y2=\"30\" stroke=\"#0f4c81\" stroke-width=\"3\"/><line x1=\"170\" y1=\"75\" x2=\"170\" y2=\"125\" stroke=\"#0f4c81\" stroke-width=\"3\"/><line x1=\"125\" y1=\"170\" x2=\"75\" y2=\"170\" stroke=\"#0f4c81\" stroke-width=\"3\"/><line x1=\"30\" y1=\"125\" x2=\"30\" y2=\"75\" stroke=\"#0f4c81\" stroke-width=\"3\"/><text x=\"100\" y=\"105\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"14\" fill=\"#0f4c81\">Cyclooctatetraene</text></svg></div>Cyclooctatetraene (C₈H₈) is non-aromatic primarily because:",
    options: [
      "It has 4n π electrons and adopts a tub-shaped non-planar geometry",
      "It has 4n+2 π electrons",
      "It is completely planar and anti-aromatic",
      "It decomposes spontaneously"
    ],
    correctIndex: 0, // It has 4n π electrons and adopts a tub-shaped non-planar geometry
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Cyclooctatetraene has 8 π-electrons (4n system).<br>2. To avoid antiaromatic instability, it buckles out of planarity into a <strong>non-planar tub conformation</strong>, rendering it non-aromatic."
  },
  {
    id: 36,
    section: "Organic Chemistry",
    sectionId: "II",
    question: "What is the major product formed when phenol is treated with CHCl₃ and aqueous NaOH followed by acid hydrolysis (Reimer-Tiemann reaction)?",
    options: ["Benzoic acid", "Salicylaldehyde", "Salicylic acid", "Benzophenone"],
    correctIndex: 1, // Salicylaldehyde
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Reimer-Tiemann reaction generates dichlorocarbene (:CCl₂).<br>2. Attack on phenoxide ion followed by hydrolysis introduces a -CHO group ortho to -OH, forming <strong>Salicylaldehyde (2-hydroxybenzaldehyde)</strong>."
  },
  {
    id: 37,
    section: "Organic Chemistry",
    sectionId: "II",
    question: "The reaction of benzaldehyde with acetic anhydride in the presence of sodium acetate to yield cinnamic acid is known as:",
    options: ["Knoevenagel condensation", "Reformatsky reaction", "Perkin reaction", "Cannizzaro reaction"],
    correctIndex: 2, // Perkin reaction
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Condensation of aromatic aldehydes with acid anhydrides having α-hydrogens in presence of sodium salt of corresponding acid to yield α,β-unsaturated acids is the <strong>Perkin Reaction</strong>."
  },
  {
    id: 38,
    section: "Organic Chemistry",
    sectionId: "II",
    question: "Identify the chiral descriptor (R/S) at C-2 and C-3 of the following Fischer projection of D-tartaric acid:<br><div class=\"svg-diagram-card\"><svg width=\"240\" height=\"220\" viewBox=\"0 0 240 220\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"120\" y1=\"35\" x2=\"120\" y2=\"185\" stroke=\"#0f4c81\" stroke-width=\"3\"/><line x1=\"60\" y1=\"85\" x2=\"180\" y2=\"85\" stroke=\"#0f4c81\" stroke-width=\"3\"/><line x1=\"60\" y1=\"135\" x2=\"180\" y2=\"135\" stroke=\"#0f4c81\" stroke-width=\"3\"/><circle cx=\"120\" cy=\"85\" r=\"5\" fill=\"#2563eb\"/><circle cx=\"120\" cy=\"135\" r=\"5\" fill=\"#2563eb\"/><text x=\"120\" y=\"25\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"16\" fill=\"#0f172a\">COOH</text><text x=\"45\" y=\"90\" text-anchor=\"end\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"16\" fill=\"#ef4444\">H</text><text x=\"195\" y=\"90\" text-anchor=\"start\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"16\" fill=\"#10b981\">OH</text><text x=\"220\" y=\"90\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#64748b\">(C-2)</text><text x=\"45\" y=\"140\" text-anchor=\"end\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"16\" fill=\"#10b981\">HO</text><text x=\"195\" y=\"140\" text-anchor=\"start\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"16\" fill=\"#ef4444\">H</text><text x=\"220\" y=\"140\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#64748b\">(C-3)</text><text x=\"120\" y=\"205\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"16\" fill=\"#0f172a\">COOH</text></svg></div>",
    options: ["(2R, 3R)", "(2R, 3S)", "(2S, 3R)", "(2S, 3S)"],
    correctIndex: 0, // (2R, 3R)
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. CIP Priorities at C-2: -OH (1) > -CH(OH)COOH (2) > -COOH (3) > -H (4).<br>2. Applying Fischer rules yields <strong>(2R, 3R)</strong> configuration for D-tartaric acid."
  },
  {
    id: 39,
    section: "Organic Chemistry",
    sectionId: "II",
    question: "Which among the following is an anti-aromatic species?",
    options: ["Cyclopropenyl cation", "Cyclopentadienyl anion", "Cyclobutadiene", "Tropylium cation"],
    correctIndex: 2, // Cyclobutadiene
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Antiaromatic species are cyclic, planar, fully conjugated systems with <code>4n π</code> electrons.<br>2. <strong>Cyclobutadiene</strong> (4 π e⁻, n=1) is planar and anti-aromatic."
  },
  {
    id: 40,
    section: "Organic Chemistry",
    sectionId: "II",
    question: "The synthesis of quinoline from aniline, glycerol, nitrobenzene, and concentrated sulfuric acid is termed:",
    options: ["Fischer indole synthesis", "Skraup synthesis", "Chichibabin reaction", "Bischler-Napieralski reaction"],
    correctIndex: 1, // Skraup synthesis
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Skraup Synthesis</strong> converts aniline, glycerol (dehydrated to acrolein in situ), and nitrobenzene (oxidant) into quinoline."
  },
  {
    id: 41,
    section: "Organic Chemistry",
    sectionId: "II",
    question: "The product P of the following rearrangement is:<br><div class=\"svg-diagram-card\"><svg width=\"440\" height=\"90\" viewBox=\"0 0 440 90\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"20\" width=\"140\" height=\"50\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"80\" y=\"50\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"16\" fill=\"#1e40af\">C₆H₅−NH−OH</text><line x1=\"160\" y1=\"45\" x2=\"280\" y2=\"45\" stroke=\"#0f4c81\" stroke-width=\"3\"/><path d=\"M 275 38 L 290 45 L 275 52 Z\" fill=\"#0f4c81\"/><text x=\"220\" y=\"32\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"13\" fill=\"#0f4c81\">dil. H₂SO₄ / H₂O</text><rect x=\"300\" y=\"20\" width=\"120\" height=\"50\" rx=\"8\" fill=\"#fef2f2\" stroke=\"#ef4444\" stroke-width=\"2\"/><text x=\"360\" y=\"50\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"18\" fill=\"#991b1b\">[ P ]</text></svg></div>",
    options: ["p-Aminophenol", "Aniline", "Nitrosobenzene", "Azobenzene"],
    correctIndex: 0, // p-Aminophenol
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Acid-catalyzed rearrangement of N-phenylhydroxylamine yields <strong>p-aminophenol</strong> (Bamberger rearrangement)."
  },
  {
    id: 42,
    section: "Organic Chemistry",
    sectionId: "II",
    question: "What is the relationship between the two structures shown below?<br><div class=\"svg-diagram-card\"><svg width=\"400\" height=\"220\" viewBox=\"0 0 400 220\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(0,0)\"><line x1=\"90\" y1=\"35\" x2=\"90\" y2=\"175\" stroke=\"#0f4c81\" stroke-width=\"3\"/><line x1=\"30\" y1=\"80\" x2=\"150\" y2=\"80\" stroke=\"#0f4c81\" stroke-width=\"3\"/><line x1=\"30\" y1=\"130\" x2=\"150\" y2=\"130\" stroke=\"#0f4c81\" stroke-width=\"3\"/><text x=\"90\" y=\"25\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"15\" fill=\"#0f172a\">CH₃</text><text x=\"20\" y=\"85\" text-anchor=\"end\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"15\" fill=\"#ef4444\">H</text><text x=\"160\" y=\"85\" text-anchor=\"start\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"15\" fill=\"#10b981\">OH</text><text x=\"20\" y=\"135\" text-anchor=\"end\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"15\" fill=\"#ef4444\">H</text><text x=\"160\" y=\"135\" text-anchor=\"start\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"15\" fill=\"#2563eb\">Cl</text><text x=\"90\" y=\"195\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"15\" fill=\"#0f172a\">CH₃</text><text x=\"90\" y=\"215\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"14\" fill=\"#0f4c81\">(I)</text></g><line x1=\"200\" y1=\"20\" x2=\"200\" y2=\"200\" stroke=\"#cbd5e1\" stroke-width=\"2\" stroke-dasharray=\"4\"/><g transform=\"translate(210,0)\"><line x1=\"90\" y1=\"35\" x2=\"90\" y2=\"175\" stroke=\"#0f4c81\" stroke-width=\"3\"/><line x1=\"30\" y1=\"80\" x2=\"150\" y2=\"80\" stroke=\"#0f4c81\" stroke-width=\"3\"/><line x1=\"30\" y1=\"130\" x2=\"150\" y2=\"130\" stroke=\"#0f4c81\" stroke-width=\"3\"/><text x=\"90\" y=\"25\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"15\" fill=\"#0f172a\">CH₃</text><text x=\"20\" y=\"85\" text-anchor=\"end\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"15\" fill=\"#10b981\">HO</text><text x=\"160\" y=\"85\" text-anchor=\"start\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"15\" fill=\"#ef4444\">H</text><text x=\"20\" y=\"135\" text-anchor=\"end\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"15\" fill=\"#ef4444\">H</text><text x=\"160\" y=\"135\" text-anchor=\"start\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"15\" fill=\"#2563eb\">Cl</text><text x=\"90\" y=\"195\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"15\" fill=\"#0f172a\">CH₃</text><text x=\"90\" y=\"215\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"14\" fill=\"#0f4c81\">(II)</text></g></svg></div>",
    options: ["Enantiomers", "Diastereomers", "Identical compounds", "Structural isomers"],
    correctIndex: 1, // Diastereomers
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Structure I has (2S, 3S) and Structure II has (2R, 3S).<br>2. Inverting 1 chiral center while keeping the other identical yields <strong>Diastereomers</strong>."
  },
  {
    id: 43,
    section: "Organic Chemistry",
    sectionId: "II",
    question: "In ¹H-NMR spectroscopy, ethyl bromide (CH₃CH₂Br) exhibits:",
    options: ["A singlet and a doublet", "A triplet and a quartet", "Two doublets", "A singlet and a triplet"],
    correctIndex: 1, // A triplet and a quartet
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. -CH₃ protons (3H) coupled to -CH₂- (2H) give a <strong>triplet</strong> (2+1=3).<br>2. -CH₂Br protons (2H) coupled to -CH₃ (3H) give a <strong>quartet</strong> (3+1=4)."
  },
  {
    id: 44,
    section: "Organic Chemistry",
    sectionId: "II",
    question: "The compound having the maximum absorption wavelength (λ_max) in UV-Vis spectroscopy is:",
    options: ["Ethylene", "1,3-Butadiene", "1,3,5-Hexatriene", "1,3,5,7-Octatetraene"],
    correctIndex: 3, // 1,3,5,7-Octatetraene
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Increasing length of conjugation decreases HOMO-LUMO energy gap.<br>2. <strong>1,3,5,7-Octatetraene</strong> has 4 conjugated double bonds (longest conjugation), producing the highest λ_max wavelength."
  },
  {
    id: 45,
    section: "Organic Chemistry",
    sectionId: "II",
    question: "Which of the following amino acids contains a phenolic group in its side chain?",
    options: ["Phenylalanine", "Tyrosine", "Tryptophan", "Histidine"],
    correctIndex: 1, // Tyrosine
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Tyrosine</strong> side chain is <code>-CH₂-C₆H₄-OH</code>, which contains a phenolic hydroxyl group."
  },
  {
    id: 46,
    section: "Organic Chemistry",
    sectionId: "II",
    question: "Glucose and Mannose differ in stereochemistry only at C-2. They are classified as:",
    options: ["Anomers", "Epimers", "Enantiomers", "Structural isomers"],
    correctIndex: 1, // Epimers
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Sugars differing in stereochemical configuration at a single chiral carbon are <strong>Epimers</strong>."
  },
  {
    id: 47,
    section: "Organic Chemistry",
    sectionId: "II",
    question: "Treatment of an aldehyde with an α-halo ester in the presence of zinc metal yields a β-hydroxy ester. This reaction is:",
    options: ["Reformatsky reaction", "Aldol condensation", "Dieckmann condensation", "Michael addition"],
    correctIndex: 0, // Reformatsky reaction
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Reaction of carbonyl compounds with α-halo esters using Zinc organozinc intermediates to prepare β-hydroxy esters is the <strong>Reformatsky Reaction</strong>."
  },
  {
    id: 48,
    section: "Organic Chemistry",
    sectionId: "II",
    question: "Pyridine undergoes electrophilic aromatic substitution predominantly at which position?",
    options: ["Position 2 (α)", "Position 3 (β)", "Position 4 (γ)", "Equally at all positions"],
    correctIndex: 1, // Position 3 (β)
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Electrophilic attack at C-3 (β-position) avoids placing positive charge on nitrogen in intermediate resonance forms, making <strong>Position 3 (β)</strong> preferred."
  },
  {
    id: 49,
    section: "Organic Chemistry",
    sectionId: "II",
    question: "Reduction of alkyl azides (R−N₃) with LiAlH₄ produces:",
    options: ["Primary amines", "Secondary amines", "Tertiary amines", "Nitroalkanes"],
    correctIndex: 0, // Primary amines
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. <code>R-N₃ + LiAlH₄ → R-NH₂ + N₂</code>.<br>2. Reduction yields pure <strong>primary amines</strong>."
  },
  {
    id: 50,
    section: "Organic Chemistry",
    sectionId: "II",
    question: "The monomer units of Nylon-6,6 are:",
    options: ["Caprolactam", "Hexamethylenediamine and Adipic acid", "Ethylene glycol and Phthalic acid", "Phenol and Formaldehyde"],
    correctIndex: 1, // Hexamethylenediamine and Adipic acid
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Nylon-6,6 is synthesized by condensation of <strong>Hexamethylenediamine and Adipic acid</strong>."
  },
  {
    id: 51,
    section: "Organic Chemistry",
    sectionId: "II",
    question: "What is the major product when benzaldehyde undergoes the Benzoin condensation in presence of aqueous ethanolic KCN?",
    options: ["C₆H₅CH(OH)COC₆H₅", "C₆H₅COCOC₆H₅", "C₆H₅CH₂OH", "C₆H₅COOH"],
    correctIndex: 0, // C₆H₅CH(OH)COC₆H₅
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Cyanide-catalyzed dimerization of 2 moles benzaldehyde yields <strong>Benzoin, C₆H₅CH(OH)COC₆H₅</strong> (α-hydroxy ketone)."
  },
  {
    id: 52,
    section: "Organic Chemistry",
    sectionId: "II",
    question: "Which among the following heterocyclic systems is most reactive towards electrophilic substitution?",
    options: ["Pyridine", "Benzene", "Pyrrole", "Nitrobenzene"],
    correctIndex: 2, // Pyrrole
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Pyrrole</strong> is a π-excessive aromatic ring (6 π e⁻ delocalized over 5 ring atoms), making it vastly more reactive towards electrophiles than benzene or pyridine."
  },
  {
    id: 53,
    section: "Organic Chemistry",
    sectionId: "II",
    question: "Which functional group gives an intense sharp absorption band near 1715 cm⁻¹ in IR spectroscopy?",
    options: ["Hydroxyl group (O−H)", "Carbonyl group (C=O)", "Alkyne (C≡C)", "Amine (N−H)"],
    correctIndex: 1, // Carbonyl group (C=O)
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Non-conjugated <strong>Carbonyl group (C=O)</strong> exhibits a very strong, sharp IR stretching band around 1715 cm⁻¹."
  },
  {
    id: 54,
    section: "Organic Chemistry",
    sectionId: "II",
    question: "Malachite green is an example of which dye class?",
    options: ["Azo dye", "Triphenylmethane dye", "Anthraquinone dye", "Phthalein dye"],
    correctIndex: 1, // Triphenylmethane dye
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Malachite green</strong> belongs to the <strong>triphenylmethane dye</strong> family."
  },
  {
    id: 55,
    section: "Organic Chemistry",
    sectionId: "II",
    question: "The nitrogenous base present in RNA but absent in DNA is:",
    options: ["Thymine", "Uracil", "Guanine", "Cytosine"],
    correctIndex: 1, // Uracil
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Uracil</strong> is present in RNA (replaces Thymine found in DNA)."
  },
  {
    id: 56,
    section: "Organic Chemistry",
    sectionId: "II",
    question: "Clemmensen reduction uses which reagent combination?",
    options: ["Zn-Hg / conc. HCl", "NH₂NH₂ / KOH", "Na / liq. NH₃", "LiAlH₄"],
    correctIndex: 0, // Zn-Hg / conc. HCl
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Clemmensen reduction</strong> converts aldehydes/ketones to hydrocarbons using <strong>Zinc amalgam (Zn-Hg) and concentrated HCl</strong>."
  },
  {
    id: 57,
    section: "Organic Chemistry",
    sectionId: "II",
    question: "Hofmann bromamide degradation of propanamide gives:",
    options: ["Propylamine", "Ethylamine", "Methylamine", "Butylamine"],
    correctIndex: 1, // Ethylamine
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. <code>CH₃CH₂CONH₂ + Br₂ + 4NaOH → CH₃CH₂NH₂ + Na₂CO₃ + 2NaBr + 2H₂O</code>.<br>2. Yields <strong>Ethylamine</strong> (one carbon less)."
  },
  {
    id: 58,
    section: "Organic Chemistry",
    sectionId: "II",
    question: "In an S_N2 substitution reaction on an optically active alkyl halide, the stereochemical outcome is:",
    options: ["100% Retention of configuration", "100% Inversion of configuration (Walden inversion)", "Racemization", "Partial epimerization"],
    correctIndex: 1, // 100% Inversion of configuration (Walden inversion)
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. SN2 backside attack results in complete <strong>100% Walden Inversion of configuration</strong>."
  },
  {
    id: 59,
    section: "Organic Chemistry",
    sectionId: "II",
    question: "Which of the following tests is used to distinguish primary, secondary, and tertiary amines using benzenesulfonyl chloride?",
    options: ["Lucas test", "Hinsberg test", "Victor Meyer test", "Tollens' test"],
    correctIndex: 1, // Hinsberg test
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Hinsberg test</strong> uses benzenesulfonyl chloride (C₆H₅SO₂Cl) to differentiate 1°, 2°, and 3° amines based on solubility of sulfonamide derivatives in alkali."
  },
  {
    id: 60,
    section: "Organic Chemistry",
    sectionId: "II",
    question: "The conversion of ketoximes to substituted amides in the presence of an acid catalyst is known as:",
    options: ["Curtius rearrangement", "Lossen rearrangement", "Beckmann rearrangement", "Schmidt reaction"],
    correctIndex: 2, // Beckmann rearrangement
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Acid-catalyzed rearrangement of ketoximes to N-substituted amides is the <strong>Beckmann Rearrangement</strong>."
  },
  {
    id: 61,
    section: "Organic Chemistry",
    sectionId: "II",
    question: "Which of the following substituents acts as a meta-directing and deactivating group in electrophilic aromatic substitution?",
    options: ["−OCH₃", "−NHCOCH₃", "−NO₂", "−CH₃"],
    correctIndex: 2, // −NO₂
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Nitro group (<strong>−NO₂</strong>) is strongly electron-withdrawing (-I, -M), deactivating the benzene ring and directing electrophiles to meta position."
  },
  {
    id: 62,
    section: "Organic Chemistry",
    sectionId: "II",
    question: "The structure of D-fructose in aqueous solution exists predominantly as a:",
    options: ["Pyranose ring", "Furanose ring", "Open-chain aldehyde", "Lactone ring"],
    correctIndex: 1, // Furanose ring
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. D-Fructose is a ketohexose that cyclizes predominantly into a 5-membered <strong>Furanose ring</strong> structure."
  },
  {
    id: 63,
    section: "Organic Chemistry",
    sectionId: "II",
    question: "Which of the following undergoes Diels-Alder reaction most rapidly with maleic anhydride?",
    options: ["(2E, 4E)-Hexadiene", "(2E, 4Z)-Hexadiene", "Cyclopentadiene", "1,4-Pentadiene"],
    correctIndex: 2, // Cyclopentadiene
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Cyclopentadiene</strong> is locked permanently in the reactive <strong>s-cis conformation</strong>, making it react instantly with dienophiles."
  },
  {
    id: 64,
    section: "Organic Chemistry",
    sectionId: "II",
    question: "Diazotization of aniline followed by warming with hypophosphorous acid (H₃PO₂) yields:",
    options: ["Phenol", "Benzene", "Chlorobenzene", "Benzoic acid"],
    correctIndex: 1, // Benzene
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. <code>C₆H₅N₂⁺Cl⁻ + H₃PO₂ + H₂O → C₆H₅H (Benzene) + N₂ + H₃PO₃ + HCl</code>.<br>2. H₃PO₂ acts as a reducing agent replacing diazonium group with hydrogen to form <strong>Benzene</strong>."
  },
  {
    id: 65,
    section: "Organic Chemistry",
    sectionId: "II",
    question: "The Newman projection shown below corresponds to which conformation of n-butane?<br><div class=\"svg-diagram-card\"><svg width=\"240\" height=\"210\" viewBox=\"0 0 240 210\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"120\" cy=\"110\" r=\"50\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"4\"/><line x1=\"120\" y1=\"110\" x2=\"175\" y2=\"78\" stroke=\"#2563eb\" stroke-width=\"3\"/><text x=\"185\" y=\"72\" text-anchor=\"start\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"16\" fill=\"#2563eb\">CH₃</text><line x1=\"120\" y1=\"110\" x2=\"65\" y2=\"78\" stroke=\"#2563eb\" stroke-width=\"3\"/><text x=\"50\" y=\"72\" text-anchor=\"end\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"16\" fill=\"#2563eb\">H</text><line x1=\"120\" y1=\"110\" x2=\"120\" y2=\"175\" stroke=\"#2563eb\" stroke-width=\"3\"/><text x=\"120\" y=\"195\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"16\" fill=\"#2563eb\">H</text><circle cx=\"120\" cy=\"110\" r=\"6\" fill=\"#ef4444\"/><line x1=\"120\" y1=\"110\" x2=\"120\" y2=\"40\" stroke=\"#ef4444\" stroke-width=\"3.5\"/><text x=\"120\" y=\"30\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"16\" fill=\"#ef4444\">CH₃</text><line x1=\"120\" y1=\"110\" x2=\"65\" y2=\"142\" stroke=\"#ef4444\" stroke-width=\"3.5\"/><text x=\"50\" y=\"152\" text-anchor=\"end\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"16\" fill=\"#ef4444\">H</text><line x1=\"120\" y1=\"110\" x2=\"175\" y2=\"142\" stroke=\"#ef4444\" stroke-width=\"3.5\"/><text x=\"190\" y=\"152\" text-anchor=\"start\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"16\" fill=\"#ef4444\">H</text><path d=\"M 120 70 A 40 40 0 0 1 148 83\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2\" stroke-dasharray=\"3\"/><text x=\"150\" y=\"60\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"12\" fill=\"#f59e0b\">60°</text></svg></div>",
    options: ["Anti-periplanar (staggered)", "Gauche (skew)", "Fully eclipsed", "Partially eclipsed"],
    correctIndex: 1, // Gauche (skew)
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. In n-butane, 60° dihedral angle between two -CH₃ groups defines the <strong>Gauche (skew) conformation</strong>."
  },
  {
    id: 66,
    section: "Organic Chemistry",
    sectionId: "II",
    question: "Which reagent selectively oxidizes primary alcohols to aldehydes without over-oxidation to carboxylic acids?",
    options: ["KMnO₄ / H⁺", "Pyridinium chlorochromate (PCC)", "K₂Cr₂O₇ / H₂SO₄", "CrO₃ / H₂SO₄"],
    correctIndex: 1, // Pyridinium chlorochromate (PCC)
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. <strong>PCC (Pyridinium chlorochromate)</strong> in anhydrous CH₂Cl₂ selectively oxidizes 1° alcohols to aldehydes without over-oxidation."
  },
  {
    id: 67,
    section: "Organic Chemistry",
    sectionId: "II",
    question: "Osazone formation involves the reaction of reducing sugars with excess of:",
    options: ["Hydroxylamine", "Phenylhydrazine", "Semicarbazide", "Hydrazine hydrate"],
    correctIndex: 1, // Phenylhydrazine
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Reducing sugars react with 3 equivalents of <strong>Phenylhydrazine</strong> (C₆H₅NHNH₂) to form crystalline osazone derivatives."
  },

  // =========================================================================
  // SECTION III — PHYSICAL & ANALYTICAL CHEMISTRY (Questions 68 – 100)
  // =========================================================================
  {
    id: 68,
    section: "Physical & Analytical Chemistry",
    sectionId: "III",
    question: "Bragg's law for X-ray diffraction from crystal planes is given by:",
    options: ["nλ = 2d sinθ", "nλ = d sinθ", "λ = 2d sinθ", "2nλ = d sinθ"],
    correctIndex: 0, // nλ = 2d sinθ
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Bragg's diffraction condition: <strong>nλ = 2d sinθ</strong>."
  },
  {
    id: 69,
    section: "Physical & Analytical Chemistry",
    sectionId: "III",
    question: "For a first-order chemical reaction, the half-life period (t_1/2) is:",
    options: ["Inversely proportional to initial concentration", "Independent of initial concentration", "Directly proportional to initial concentration", "Proportional to square of initial concentration"],
    correctIndex: 1, // Independent of initial concentration
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. 1st order half-life formula: <code>t½ = 0.693 / k</code>.<br>2. It is completely <strong>independent of initial concentration [A]₀</strong>."
  },
  {
    id: 70,
    section: "Physical & Analytical Chemistry",
    sectionId: "III",
    question: "What are the units of the rate constant for a second-order reaction?",
    options: ["s⁻¹", "L·mol⁻¹·s⁻¹", "mol·L⁻¹·s⁻¹", "L²·mol⁻²·s⁻¹"],
    correctIndex: 1, // L·mol⁻¹·s⁻¹
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Rate = k[A]² ⇒ <code>k = Rate / [A]² = (mol L⁻¹ s⁻¹) / (mol L⁻¹)² = <strong>L mol⁻¹ s⁻¹</strong></code>."
  },
  {
    id: 71,
    section: "Physical & Analytical Chemistry",
    sectionId: "III",
    question: "For an ideal gas undergoing reversible isothermal expansion, the entropy change (ΔS) is given by:",
    options: ["nR ln(V₂/V₁)", "nCv ln(T₂/T₁)", "Zero", "nCp ln(V₂/V₁)"],
    correctIndex: 0, // nR ln(V₂/V₁)
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. For isothermal expansion (ΔT = 0): <code>q_rev = nRT ln(V₂/V₁)</code>.<br>2. <code>ΔS = q_rev / T = <strong>nR ln(V₂/V₁)</strong></code>."
  },
  {
    id: 72,
    section: "Physical & Analytical Chemistry",
    sectionId: "III",
    question: "Gibbs phase rule for a non-reactive system is defined as:",
    options: ["F = C − P + 2", "F = C + P − 2", "P + F = C + 1", "F = C − P + 1"],
    correctIndex: 0, // F = C − P + 2
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Gibbs Phase Rule: <strong>F = C − P + 2</strong>."
  },
  {
    id: 73,
    section: "Physical & Analytical Chemistry",
    sectionId: "III",
    question: "The number of components (C) and degrees of freedom (F) at the triple point of pure water are respectively:",
    options: ["C = 1, F = 0", "C = 3, F = 0", "C = 1, F = 1", "C = 2, F = 1"],
    correctIndex: 0, // C = 1, F = 0
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Pure water system: C = 1 (H₂O).<br>2. At triple point, 3 phases coexist (Ice, Water, Vapor ⇒ P = 3).<br>3. <code>F = 1 - 3 + 2 = <strong>0 (Invariant)</strong></code>. Hence <strong>C = 1, F = 0</strong>."
  },
  {
    id: 74,
    section: "Physical & Analytical Chemistry",
    sectionId: "III",
    question: "In the Arrhenius equation k = A e^(-Ea/RT), a plot of ln k versus 1/T yields a straight line with slope equal to:",
    options: ["−Ea/R", "Ea/R", "−Ea/2.303R", "−RT/Ea"],
    correctIndex: 0, // −Ea/R
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. <code>ln k = ln A - (Ea / R) · (1/T)</code>.<br>2. Slope of ln k vs 1/T is <strong>−Ea/R</strong>."
  },
  {
    id: 75,
    section: "Physical & Analytical Chemistry",
    sectionId: "III",
    question: "Which of the following thermodynamic relations is correct?",
    options: ["(∂G / ∂T)_P = −S", "(∂G / ∂P)_T = −V", "(∂H / ∂T)_P = −S", "(∂A / ∂V)_T = S"],
    correctIndex: 0, // (∂G / ∂T)_P = −S
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. From fundamental equation <code>dG = V dP - S dT</code>.<br>2. At constant pressure (dP = 0): <strong>(∂G / ∂T)_P = −S</strong>."
  },
  {
    id: 76,
    section: "Physical & Analytical Chemistry",
    sectionId: "III",
    question: "The energy of a particle of mass m in a one-dimensional box of length L is given by:",
    options: ["E_n = n²h² / (8mL²)", "E_n = n²h² / (4mL²)", "E_n = nh / (8mL²)", "E_n = n²ℏ² / (8mL)"],
    correctIndex: 0, // E_n = n²h² / (8mL²)
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Quantum particle in 1D box energy formula: <strong>E_n = n²h² / (8mL²)</strong> (n = 1, 2, 3...)."
  },
  {
    id: 77,
    section: "Physical & Analytical Chemistry",
    sectionId: "III",
    question: "The selection rule for purely rotational Raman spectroscopy of a diatomic molecule is:",
    options: ["ΔJ = ±1", "ΔJ = 0, ±2", "ΔJ = ±2 only", "ΔJ = 0, ±1"],
    correctIndex: 1, // ΔJ = 0, ±2
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Pure rotational Raman selection rule is <strong>ΔJ = 0, ±2</strong>."
  },
  {
    id: 78,
    section: "Physical & Analytical Chemistry",
    sectionId: "III",
    question: "Which of the following homonuclear diatomic molecules is microwave inactive?",
    options: ["HCl", "CO", "N₂", "NO"],
    correctIndex: 2, // N₂
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Homonuclear <strong>N₂</strong> has zero dipole moment (μ = 0) and is microwave inactive."
  },
  {
    id: 79,
    section: "Physical & Analytical Chemistry",
    sectionId: "III",
    question: "The transition from lowest triplet excited state to singlet ground state with emission of radiation (T₁ → S₀ + hν) is called:",
    options: ["Fluorescence", "Phosphorescence", "Internal conversion", "Intersystem crossing"],
    correctIndex: 1, // Phosphorescence
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Radiative transition from triplet state T₁ to singlet ground state S₀ is <strong>Phosphorescence</strong>."
  },
  {
    id: 80,
    section: "Physical & Analytical Chemistry",
    sectionId: "III",
    question: "The radius ratio (r+/r-) for octahedral coordination in an ionic crystal (like NaCl) lies in the range:",
    options: ["0.225 − 0.414", "0.414 − 0.732", "0.732 − 1.000", "< 0.155"],
    correctIndex: 1, // 0.414 − 0.732
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Radius ratio for Octahedral coordination (CN = 6): <strong>0.414 − 0.732</strong>."
  },
  {
    id: 81,
    section: "Physical & Analytical Chemistry",
    sectionId: "III",
    question: "For a face-centered cubic (fcc) lattice, the effective number of constituent atoms per unit cell is:",
    options: ["1", "2", "4", "6"],
    correctIndex: 2, // 4
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. FCC unit cell: 8 corners × (1/8) + 6 faces × (1/2) = 1 + 3 = <strong>4 atoms</strong>."
  },
  {
    id: 82,
    section: "Physical & Analytical Chemistry",
    sectionId: "III",
    question: "The molar conductivity of an electrolyte at infinite dilution (Λ_m°) can be expressed as the sum of ionic conductivities according to:",
    options: ["Kohlrausch's law", "Debye-Hückel-Onsager theory", "Ostwald's dilution law", "Faraday's law"],
    correctIndex: 0, // Kohlrausch's law
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Kohlrausch's Law of Independent Migration of Ions</strong> states Λ_m° = ν₊ λ₊° + ν₋ λ₋°."
  },
  {
    id: 83,
    section: "Physical & Analytical Chemistry",
    sectionId: "III",
    question: "The Van 't Hoff factor (i) for a dilute aqueous solution of K₄[Fe(CN)₆] assuming 100% dissociation is:",
    options: ["4", "5", "3", "1"],
    correctIndex: 1, // 5
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. <code>K₄[Fe(CN)₆] → 4 K⁺ + [Fe(CN)₆]⁴⁻</code> (produces 5 ions).<br>2. Van 't Hoff factor <code>i = <strong>5</strong></code>."
  },
  {
    id: 84,
    section: "Physical & Analytical Chemistry",
    sectionId: "III",
    question: "A solution of 0.05 M concentration has an osmotic pressure of 1.23 atm at 300 K. The value of solution gas constant R is:",
    options: ["0.082 L·atm·K⁻¹·mol⁻¹", "8.314 J·K⁻¹·mol⁻¹", "1.987 cal·K⁻¹·mol⁻¹", "0.82 L·atm·K⁻¹·mol⁻¹"],
    correctIndex: 0, // 0.082 L·atm·K⁻¹·mol⁻¹
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. <code>R = π / (C T) = 1.23 / (0.05 × 300) = 1.23 / 15 = <strong>0.082 L atm K⁻¹ mol⁻¹</strong></code>."
  },
  {
    id: 85,
    section: "Physical & Analytical Chemistry",
    sectionId: "III",
    question: "If the standard reduction potentials are E°(Zn²⁺/Zn) = −0.76 V and E°(Cu²⁺/Cu) = +0.34 V, the standard EMF (E°_cell) of the Daniel cell is:",
    options: ["+1.10 V", "−1.10 V", "+0.42 V", "−0.42 V"],
    correctIndex: 0, // +1.10 V
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. <code>E°cell = E°cat - E°ano = +0.34 - (-0.76) = <strong>+1.10 V</strong></code>."
  },
  {
    id: 86,
    section: "Physical & Analytical Chemistry",
    sectionId: "III",
    question: "According to the Nernst equation, the electrode potential of a hydrogen electrode at 298 K and 1 atm H₂ depends on pH as:",
    options: ["E = −0.0591 pH", "E = +0.0591 pH", "E = −0.0295 pH", "E = 0.00 V"],
    correctIndex: 0, // E = −0.0591 pH
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. <code>E = E° - (0.0591/1) log(1/[H⁺]) = 0 - 0.0591 pH = <strong>−0.0591 pH</strong></code>."
  },
  {
    id: 87,
    section: "Physical & Analytical Chemistry",
    sectionId: "III",
    question: "The Gold Number of protective colloids is inversely proportional to their:",
    options: ["Coagulation value", "Protective power", "Molecular mass", "Zeta potential"],
    correctIndex: 1, // Protective power
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Lower Gold Number corresponds to higher protective efficiency. Hence, Gold Number is inversely proportional to <strong>Protective Power</strong>."
  },
  {
    id: 88,
    section: "Physical & Analytical Chemistry",
    sectionId: "III",
    question: "The Langmuir adsorption isotherm at very high gas pressure reduces to:",
    options: ["θ = K P", "θ = 1 (Zero order with respect to pressure)", "θ = K/P", "θ = P^(1/n)"],
    correctIndex: 1, // θ = 1 (Zero order with respect to pressure)
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Langmuir isotherm: <code>θ = KP / (1 + KP)</code>.<br>2. At high pressure, KP >> 1, so <code>θ ≈ KP / KP = <strong>1</strong></code> (saturation monolayer, zero order)."
  },
  {
    id: 89,
    section: "Physical & Analytical Chemistry",
    sectionId: "III",
    question: "The critical constants are related to van der Waals constants (a and b) such that the critical volume (V_c) is:",
    options: ["3b", "b/3", "8a / 27Rb", "a / 27b²"],
    correctIndex: 0, // 3b
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Critical volume of a van der Waals gas: <strong>V_c = 3b</strong>."
  },
  {
    id: 90,
    section: "Physical & Analytical Chemistry",
    sectionId: "III",
    question: "Which of the following is not a state function?",
    options: ["Enthalpy (H)", "Internal energy (U)", "Heat (q)", "Entropy (S)"],
    correctIndex: 2, // Heat (q)
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Heat (q)</strong> and Work (w) are path functions because their values depend on the path taken, not just initial/final states."
  },
  {
    id: 91,
    section: "Physical & Analytical Chemistry",
    sectionId: "III",
    question: "The Joule-Thomson coefficient (μ_JT) for an ideal gas is:",
    options: ["Positive", "Negative", "Zero", "Dependent on pressure"],
    correctIndex: 2, // Zero
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. For an ideal gas, internal pressure (∂U/∂V)_T = 0 and (∂H/∂P)_T = 0.<br>2. Therefore, Joule-Thomson coefficient <strong>μ_JT = 0</strong> at all temperatures."
  },
  {
    id: 92,
    section: "Physical & Analytical Chemistry",
    sectionId: "III",
    question: "For the dissociation of PCl₅(g) ⇌ PCl₃(g) + Cl₂(g), the relationship between K_p and K_c is:",
    options: ["K_p = K_c(RT)", "K_p = K_c(RT)⁻¹", "K_p = K_c", "K_p = K_c(RT)²"],
    correctIndex: 0, // K_p = K_c(RT)
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. <code>Δn_g = 2 - 1 = +1</code>.<br>2. <code>K_p = K_c (RT)^(Δn_g) = <strong>K_c (RT)</strong></code>."
  },
  {
    id: 93,
    section: "Physical & Analytical Chemistry",
    sectionId: "III",
    question: "The transport number of an ion (t_+) is defined as:",
    options: ["Current carried by cation / Total current", "Current carried by anion / Total current", "Absolute velocity of anion", "Molar conductivity of salt"],
    correctIndex: 0, // Current carried by cation / Total current
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Transport number of cation t₊ is the fraction of total current carried by that cation: <strong>t₊ = I₊ / I_total</strong>."
  },
  {
    id: 94,
    section: "Physical & Analytical Chemistry",
    sectionId: "III",
    question: "The SI unit of dynamic viscosity (η) is:",
    options: ["Poise", "Pa·s (N·s·m⁻²)", "Stokes", "Dyne·cm⁻²"],
    correctIndex: 1, // Pa·s (N·s·m⁻²)
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. SI unit of viscosity is <strong>Pascal-second (Pa·s)</strong> or N·s·m⁻² (or kg·m⁻¹·s⁻¹).<br>2. (Poise is CGS unit: 1 Pa·s = 10 Poise)."
  },
  {
    id: 95,
    section: "Physical & Analytical Chemistry",
    sectionId: "III",
    question: "A quantum mechanical operator Â is said to be Hermitian if it satisfies:",
    options: ["∫ ψ_i* Â ψ_j dτ = ∫ ψ_j (Â ψ_i)* dτ", "Â ψ = λ ψ", "ÂB̂ - B̂Â = 0", "∫ ψ* ψ dτ = 1"],
    correctIndex: 0, // ∫ ψ_i* Â ψ_j dτ = ∫ ψ_j (Â ψ_i)* dτ
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Definition of a Hermitian operator Â: <strong>∫ ψ_i* Â ψ_j dτ = ∫ ψ_j (Â ψ_i)* dτ</strong>."
  },
  {
    id: 96,
    section: "Physical & Analytical Chemistry",
    sectionId: "III",
    question: "In conductometric titrations of a strong acid (HCl) with a strong base (NaOH), the conductivity curve shows:",
    options: ["Continuous increase", "Initial sharp decrease to the equivalence point followed by a sharp increase", "Initial increase followed by decrease", "Remains constant throughout"],
    correctIndex: 1, // Initial sharp decrease to the equivalence point followed by a sharp increase
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Fast-moving H⁺ ions are replaced by slower Na⁺ ions before endpoint (sharp conductivity drop).<br>2. After equivalence point, addition of excess fast OH⁻ ions causes a sharp conductivity increase."
  },
  {
    id: 97,
    section: "Physical & Analytical Chemistry",
    sectionId: "III",
    question: "The elevation in boiling point (ΔT_b) for 0.1 molal aqueous urea solution (K_b = 0.512 K·kg·mol⁻¹) is:",
    options: ["0.0512°C", "0.512°C", "1.024°C", "0.0256°C"],
    correctIndex: 0, // 0.0512°C
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Urea is a non-electrolyte (i = 1).<br>2. <code>ΔT_b = i K_b m = 1 × 0.512 × 0.1 = <strong>0.0512°C</strong></code>."
  },
  {
    id: 98,
    section: "Physical & Analytical Chemistry",
    sectionId: "III",
    question: "The efficiency (η) of a reversible Carnot engine operating between T₁ (source) and T₂ (sink) is:",
    options: ["(T₁ − T₂) / T₁", "(T₂ − T₁) / T₂", "(T₁ + T₂) / T₁", "T₁ / (T₁ − T₂)"],
    correctIndex: 0, // (T₁ − T₂) / T₁
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Carnot efficiency formula: <code>η = (W / Q₁) = (Q₁ - Q₂) / Q₁ = <strong>(T₁ − T₂) / T₁</strong></code>."
  },
  {
    id: 99,
    section: "Physical & Analytical Chemistry",
    sectionId: "III",
    question: "The third law of thermodynamics states that:",
    options: ["Energy of universe is constant", "The entropy of a perfectly crystalline substance approaches zero at absolute zero temperature (0 K)", "Entropy of universe increases continuously", "Absolute enthalpy of an element is zero at 298 K"],
    correctIndex: 1, // The entropy of a perfectly crystalline substance approaches zero at absolute zero temperature (0 K)
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Third Law of Thermodynamics</strong>: The entropy of a pure, perfectly crystalline substance is exactly zero at absolute zero temperature (0 K)."
  },
  {
    id: 100,
    section: "Physical & Analytical Chemistry",
    sectionId: "III",
    question: "The molar absorption coefficient (ε) in the Beer-Lambert law (A = ε c l) has units of:",
    options: ["L·mol⁻¹·cm⁻¹", "mol·L⁻¹·cm⁻¹", "cm⁻¹", "Dimensionless"],
    correctIndex: 0, // L·mol⁻¹·cm⁻¹
    explanation: "<strong>Step-by-Step Explanation:</strong><br>1. Absorbance A is dimensionless.<br>2. <code>ε = A / (c · l) = 1 / ((mol L⁻¹) · cm) = <strong>L mol⁻¹ cm⁻¹</strong></code> (or M⁻¹ cm⁻¹)."
  }
];
