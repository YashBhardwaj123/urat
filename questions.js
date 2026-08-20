// URATPG 2024 Official M.Sc. Chemistry Question Bank (100 Questions)
const rawQuestions = [
  {
    "id": 1,
    "section": "Inorganic Chemistry",
    "sectionId": "I",
    "question": "H₃O⁺ molecule shape is similar to -",
    "options": [
      "ClF₃",
      "BCl₃",
      "NH₃",
      "NO₃⁻"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. In H₃O⁺, Oxygen has 6 valence e⁻ - 1 (positive charge) = 5 e⁻.<br>2. 3 bond pairs + 1 lone pair = Steric No. 4 (sp³ hybridization).<br>3. Ammonia (NH₃) also has 3 bond pairs + 1 lone pair.<br>4. Both exhibit a <strong>Trigonal Pyramidal</strong> molecular shape."
  },
  {
    "id": 2,
    "section": "Inorganic Chemistry",
    "sectionId": "I",
    "question": "sp² hybridization is present in central atom of -",
    "options": [
      "BeF₃⁻",
      "NF₃",
      "OF₂",
      "H₃O⁺"
    ],
    "correctIndex": 0,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. In BeF₃⁻, Beryllium has 2 valence e⁻ + 1 = 3 e⁻.<br>2. Forms 3 single Be-F bonds with 0 lone pairs.<br>3. Steric Number = 3 ⇒ <strong>sp² hybridization</strong> (Trigonal planar)."
  },
  {
    "id": 3,
    "section": "Inorganic Chemistry",
    "sectionId": "I",
    "question": "Which pair of metal ions is not isoelectronic?",
    "options": [
      "Cr²⁺, Fe²⁺",
      "Fe²⁺, Co³⁺",
      "Mn²⁺, Fe³⁺",
      "None of the above"
    ],
    "correctIndex": 0,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Cr²⁺ (Z=24 - 2 = 22 e⁻) vs Fe²⁺ (Z=26 - 2 = 24 e⁻) ⇒ Different number of electrons.<br>2. Hence, <strong>Cr²⁺ and Fe²⁺ are NOT isoelectronic</strong>."
  },
  {
    "id": 4,
    "section": "Inorganic Chemistry",
    "sectionId": "I",
    "question": "In PCl₅ molecule Cl − P − Cl angles are -",
    "options": [
      "120° and 90°",
      "120° and 60°",
      "90° and 60°",
      "120° and 72°"
    ],
    "correctIndex": 0,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. PCl₅ has Trigonal Bipyramidal geometry (sp³d hybridization).<br>2. Equatorial Cl-P-Cl bond angles = <strong>120°</strong>.<br>3. Axial-Equatorial Cl-P-Cl bond angles = <strong>90°</strong>."
  },
  {
    "id": 5,
    "section": "Inorganic Chemistry",
    "sectionId": "I",
    "question": "Geometry and number of geometrical isomers of [Pt(NH₃)(H₂O)Br Cl] molecule will be -",
    "options": [
      "Square planar and 2",
      "Pyramidal and 2",
      "Square planar and 3",
      "Square planar and 4"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Pt(II) complexes with 4 monodentate ligands adopt a <strong>Square Planar</strong> geometry.<br>2. Complexes of type [Mabcd] with 4 different ligands form <strong>3 geometrical isomers</strong>."
  },
  {
    "id": 6,
    "section": "Inorganic Chemistry",
    "sectionId": "I",
    "question": "The transition metal showing highest oxidation state among following is -",
    "options": [
      "Pd",
      "Os",
      "Mn",
      "Cr"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Osmium (Os) exhibits an oxidation state of <strong>+8</strong> in OsO₄.<br>2. Manganese reaches +7 (KMnO₄), Chromium reaches +6 (CrO₃)."
  },
  {
    "id": 7,
    "section": "Inorganic Chemistry",
    "sectionId": "I",
    "question": "Among the following increasing order of magnetic moment is -",
    "options": [
      "V⁺⁴, Cr⁺³, Fe⁺², Ti⁺²",
      "Fe⁺², Cr⁺³, V⁺⁴, Ti⁺²",
      "Ti⁺², Cr⁺³, V⁺⁴, Fe⁺²",
      "V⁺⁴, Ti⁺², Cr⁺³, Fe⁺²"
    ],
    "correctIndex": 3,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. V⁺⁴ (3d¹, n=1, μ = 1.73 BM)<br>2. Ti⁺² (3d², n=2, μ = 2.83 BM)<br>3. Cr⁺³ (3d³, n=3, μ = 3.87 BM)<br>4. Fe⁺² (3d⁶ high-spin, n=4, μ = 4.90 BM)<br>5. Correct order: <strong>V⁺⁴ < Ti⁺² < Cr⁺³ < Fe⁺²</strong>."
  },
  {
    "id": 8,
    "section": "Inorganic Chemistry",
    "sectionId": "I",
    "question": "On dissolving Barium in liquid ammonia -",
    "options": [
      "solution turns blue",
      "solution remains colourless",
      "solution becomes good conductor",
      "A and C both are correct"
    ],
    "correctIndex": 3,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Barium dissolves in liquid ammonia to form solvated metal cations and ammoniated electrons: <code>Ba + (x+2y)NH₃ → [Ba(NH₃)_x]²⁺ + 2[e(NH₃)_y]⁻</code>.<br>2. Ammoniated electrons absorb in IR/visible region giving a <strong>deep blue color</strong> and extremely high <strong>electrical conductivity</strong>."
  },
  {
    "id": 9,
    "section": "Inorganic Chemistry",
    "sectionId": "I",
    "question": "Chemical name of washing soda is -",
    "options": [
      "Sodium hydroxide",
      "Sodium chloride",
      "Sodium hydrogen carbonate",
      "Sodium carbonate"
    ],
    "correctIndex": 3,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Washing soda is hydrated <strong>Sodium carbonate</strong> (Na₂CO₃·10H₂O)."
  },
  {
    "id": 10,
    "section": "Inorganic Chemistry",
    "sectionId": "I",
    "question": "Hybridization of S in SO₂ is -",
    "options": [
      "sp",
      "sp²",
      "sp³",
      "dsp²"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. S in SO₂ forms 2 sigma bonds + 1 lone pair.<br>2. Steric Number = 3 ⇒ <strong>sp² hybridization</strong> (Bent V-shape)."
  },
  {
    "id": 11,
    "section": "Inorganic Chemistry",
    "sectionId": "I",
    "question": "Which elements will have lowest ionization potential in a period?",
    "options": [
      "Halogens",
      "Alkali metals",
      "Inert gases",
      "d-block elements"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Alkali metals (Group 1) have the largest atomic radii in their respective periods and readily lose 1 valence electron, possessing the <strong>lowest ionization potential</strong>."
  },
  {
    "id": 12,
    "section": "Inorganic Chemistry",
    "sectionId": "I",
    "question": "IUPAC name of Na₃[Fe(C₂O₄)₃] is -",
    "options": [
      "Sodium trioxalatoferrate (III)",
      "Sodium tris (oxalato) iron (III)",
      "Sodium trioxalatoiron (III)",
      "Sodium tris (oxalato) ferrate (III)"
    ],
    "correctIndex": 0,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Cation: Sodium.<br>2. Complex anion: 3 oxalato ligands (trioxalato) + Ferrate(III).<br>3. Official IUPAC Name: <strong>Sodium trioxalatoferrate (III)</strong>."
  },
  {
    "id": 13,
    "section": "Inorganic Chemistry",
    "sectionId": "I",
    "question": "Which complex ion has smallest crystal field splitting (Δ_o)?",
    "options": [
      "[Co(NH₃)₆]²⁺",
      "[Co(NH₃)₆]³⁺",
      "[Rh(NH₃)₆]³⁺",
      "[Ir(NH₃)₆]³⁺"
    ],
    "correctIndex": 0,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Lower oxidation state (+2 vs +3) and 3d metal vs 4d/5d metals produce significantly smaller crystal field splitting Δ_o.<br>2. Hence, <strong>[Co(NH₃)₆]²⁺</strong> (+2 oxidation state) has the smallest Δ_o."
  },
  {
    "id": 14,
    "section": "Inorganic Chemistry",
    "sectionId": "I",
    "question": "Formula of Plaster of Paris is -",
    "options": [
      "CaSO₄",
      "CaSO₄ · H₂O",
      "CaSO₄ · ½ H₂O",
      "CaSO₄ · 2H₂O"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Plaster of Paris is Calcium sulfate hemihydrate: <strong>CaSO₄ · ½ H₂O</strong>."
  },
  {
    "id": 15,
    "section": "Inorganic Chemistry",
    "sectionId": "I",
    "question": "Which pair has same bond order?",
    "options": [
      "O₂⁺, NO⁺",
      "N₂, O₂",
      "O₂²⁻, B₂",
      "NO, CO"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. O₂²⁻ (18 e⁻): BO = (10 - 8)/2 = <strong>1.0</strong>.<br>2. B₂ (10 e⁻): BO = (6 - 4)/2 = <strong>1.0</strong>.<br>3. Both species have an identical bond order of 1.0."
  },
  {
    "id": 16,
    "section": "Inorganic Chemistry",
    "sectionId": "I",
    "question": "With increase in temperature, viscosity of polysiloxanes (silicones) -",
    "options": [
      "increases",
      "does not change",
      "decreases",
      "first increase then becomes constant"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Like most liquids, thermal motion overcomes intermolecular forces, causing viscosity of polysiloxanes to <strong>decrease</strong> with increasing temperature (though much less drastically than organic oils)."
  },
  {
    "id": 17,
    "section": "Inorganic Chemistry",
    "sectionId": "I",
    "question": "In a nuclear reactor, the heavy water D₂O is used as -",
    "options": [
      "Fuel",
      "Accelerator",
      "Moderator",
      "Arrestor"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Heavy water (D₂O) slows down fast neutrons to thermal energies to sustain nuclear fission, serving as a <strong>Moderator</strong>."
  },
  {
    "id": 18,
    "section": "Inorganic Chemistry",
    "sectionId": "I",
    "question": "Central metal present in Vitamin B₁₂ is -",
    "options": [
      "Co",
      "Fe",
      "Mg",
      "Zn"
    ],
    "correctIndex": 0,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Vitamin B₁₂ (cyanocobalamin) contains central metal ion <strong>Cobalt (Co³⁺)</strong>."
  },
  {
    "id": 19,
    "section": "Inorganic Chemistry",
    "sectionId": "I",
    "question": "Oxidation state of iron in methemoglobin is -",
    "options": [
      "Four",
      "Three",
      "Two",
      "Zero"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Methemoglobin is an oxidized form of hemoglobin where heme iron is oxidized from Fe²⁺ (ferrous) to <strong>Fe³⁺ (ferric / +3)</strong> state."
  },
  {
    "id": 20,
    "section": "Inorganic Chemistry",
    "sectionId": "I",
    "question": "Nitrogen fixation is conversion of atmospheric N₂ into -",
    "options": [
      "NH₃",
      "NO₃⁻",
      "Urea",
      "NO₂"
    ],
    "correctIndex": 0,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Biological nitrogen fixation by nitrogenase enzymes converts atmospheric inert N₂ gas into <strong>Ammonia (NH₃)</strong>."
  },
  {
    "id": 21,
    "section": "Inorganic Chemistry",
    "sectionId": "I",
    "question": "According to Crystal Field Theory Ni²⁺ can have two unpaired electrons in -",
    "options": [
      "Octahedral geometry only",
      "Square planar geometry only",
      "Both Tetrahedral geometry and Octahedral geometry",
      "Both square planar and tetrahedral geometry"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Ni²⁺ is d⁸.<br>2. Octahedral: t2g⁶ eg² (2 unpaired e⁻).<br>3. Tetrahedral: e⁴ t2⁴ (2 unpaired e⁻).<br>4. Square planar: d8 low-spin (0 unpaired e⁻).<br>5. Therefore, Ni²⁺ has 2 unpaired e⁻ in <strong>both Tetrahedral and Octahedral geometries</strong>."
  },
  {
    "id": 22,
    "section": "Inorganic Chemistry",
    "sectionId": "I",
    "question": "Which of the following is paramagnetic?",
    "options": [
      "[Cr(CO)₆]",
      "[Ni(CO)₄]",
      "[NiCl₄]²⁻",
      "[PtCl₄]²⁻"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. [NiCl₄]²⁻ contains Ni²⁺ (d⁸) in a tetrahedral field with weak Cl⁻ ligands (e⁴ t2⁴, n = 2 unpaired e⁻ ⇒ <strong>Paramagnetic</strong>)."
  },
  {
    "id": 23,
    "section": "Inorganic Chemistry",
    "sectionId": "I",
    "question": "What is the hybridization of iron in ferrocyanide ion [Fe(CN)₆]⁴⁻?",
    "options": [
      "dsp²",
      "sp²",
      "sp³d",
      "d²sp³"
    ],
    "correctIndex": 3,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. In [Fe(CN)₆]⁴⁻, Fe²⁺ is 3d⁶.<br>2. Strong field CN⁻ forces pairing of 3d electrons, leaving 2 empty 3d, 1 4s, and 3 4p orbitals ⇒ <strong>d²sp³ inner orbital octahedral hybridization</strong>."
  },
  {
    "id": 24,
    "section": "Inorganic Chemistry",
    "sectionId": "I",
    "question": "Oxidation state of Cr in [Cr(NH₃)₄Cl₂]⁺ is -",
    "options": [
      "0",
      "+1",
      "+2",
      "+3"
    ],
    "correctIndex": 3,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. <code>x + 4(0) + 2(-1) = +1 ⇒ x = <strong>+3</strong></code>."
  },
  {
    "id": 25,
    "section": "Inorganic Chemistry",
    "sectionId": "I",
    "question": "Molecular formula of Oleum is -",
    "options": [
      "H₂S₂O₈",
      "H₂S₂O₇",
      "H₂SO₅",
      "H₂SO₃"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Oleum (fuming sulfuric acid / pyrosulfuric acid) is <strong>H₂S₂O₇</strong>."
  },
  {
    "id": 26,
    "section": "Inorganic Chemistry",
    "sectionId": "I",
    "question": "Which among the following oxides is basic?",
    "options": [
      "CO₂",
      "SO₂",
      "N₂O",
      "Na₂O"
    ],
    "correctIndex": 3,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Na₂O (Sodium oxide)</strong> reacts with water to form strong base NaOH, making it basic."
  },
  {
    "id": 27,
    "section": "Inorganic Chemistry",
    "sectionId": "I",
    "question": "Correct order of acidic strength is -",
    "options": [
      "HOCl < HClO < HClO₂ < HClO₃",
      "HClO₃ < HClO₂ < HClO < HOCl",
      "HOCl < HClO₂ < HClO₃ < HClO₄",
      "HOCl < HClO₂ < HClO₃ < HOCl"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Acidic strength of oxoacids increases with increasing oxidation state and number of electronegative terminal oxygen atoms on Chlorine: <strong>HOCl (+1) < HClO₂ (+3) < HClO₃ (+5) < HClO₄ (+7)</strong>."
  },
  {
    "id": 28,
    "section": "Inorganic Chemistry",
    "sectionId": "I",
    "question": "Which pair of Lanthanide ions are colourless?",
    "options": [
      "Lu³⁺ and La³⁺",
      "Ce³⁺ and Ce⁺⁴",
      "Lu²⁺ and Ln²⁺",
      "Pr⁺⁴ and Ce⁺⁴"
    ],
    "correctIndex": 0,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. La³⁺ (4f⁰, empty f-shell) and Lu³⁺ (4f¹⁴, completely filled f-shell) have zero f-f electronic transitions and are <strong>colourless</strong>."
  },
  {
    "id": 29,
    "section": "Inorganic Chemistry",
    "sectionId": "I",
    "question": "Among the following which Lanthanide ion is diamagnetic?",
    "options": [
      "Ce²⁺",
      "Yb²⁺",
      "Eu²⁺",
      "Sm²⁺"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Yb²⁺ has electron configuration [Xe] 4f¹⁴ (completely filled f-subshell, zero unpaired e⁻ ⇒ <strong>Diamagnetic</strong>)."
  },
  {
    "id": 30,
    "section": "Inorganic Chemistry",
    "sectionId": "I",
    "question": "Percentage of silver present in alloy German silver is -",
    "options": [
      "50%",
      "5%",
      "1%",
      "0%"
    ],
    "correctIndex": 3,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. German silver is a copper alloy containing Cu (50-60%), Zn (20-30%), and Ni (10-30%). It contains <strong>0% Silver</strong>."
  },
  {
    "id": 31,
    "section": "Inorganic Chemistry",
    "sectionId": "I",
    "question": "Radioactive element among following is -",
    "options": [
      "Pr",
      "Tm",
      "Pm",
      "Gd"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Promethium (<strong>Pm, Z=61</strong>) is the only radioactive element in the lanthanide series."
  },
  {
    "id": 32,
    "section": "Inorganic Chemistry",
    "sectionId": "I",
    "question": "General electronic configuration of actinide series is -",
    "options": [
      "[Xe] 4f⁰⁻¹⁴ 5d⁰⁻¹ 6s²",
      "[Xe] 4f⁰⁻¹⁴ 5d⁰⁻¹⁰ 6s²",
      "[Rn] 5f⁰⁻¹⁴ 6d⁰⁻¹⁰ 7s²",
      "[Rn] 5f⁰⁻¹⁴ 6d⁰⁻¹ 7s²"
    ],
    "correctIndex": 3,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. The general ground state electron configuration of actinides is <strong>[Rn] 5f⁰⁻¹⁴ 6d⁰⁻¹ 7s²</strong>."
  },
  {
    "id": 33,
    "section": "Inorganic Chemistry",
    "sectionId": "I",
    "question": "Group reagent for analysis of basic radicals of group IV is -",
    "options": [
      "HCl + H₂S",
      "NH₄OH + H₂S",
      "NH₄Cl + NH₄OH + H₂S",
      "NH₄OH + NH₄Cl"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Group IV cations (Co²⁺, Ni²⁺, Mn²⁺, Zn²⁺) precipitate as sulfides in alkaline medium using <strong>H₂S gas in presence of NH₄Cl and NH₄OH</strong>."
  },
  {
    "id": 34,
    "section": "Organic Chemistry",
    "sectionId": "II",
    "question": "Which compound among the following is aromatic?<br><div class=\"svg-diagram-card\"><svg width=\"360\" height=\"120\" viewBox=\"0 0 360 120\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(10,10)\"><polygon points=\"40,20 70,70 10,70\" fill=\"none\" stroke=\"#0f4c81\" stroke-width=\"2.5\"/><line x1=\"22\" y1=\"62\" x2=\"58\" y2=\"62\" stroke=\"#0f4c81\" stroke-width=\"2.5\"/><circle cx=\"40\" cy=\"20\" r=\"8\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"1.5\"/><text x=\"40\" y=\"24\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"12\" fill=\"#2563eb\">+</text><text x=\"40\" y=\"95\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"12\" fill=\"#0f4c81\">(A)</text></g><g transform=\"translate(100,10)\"><polygon points=\"10,45 35,20 65,20 90,45 65,70 35,70\" fill=\"none\" stroke=\"#0f4c81\" stroke-width=\"2.5\"/><line x1=\"35\" y1=\"20\" x2=\"65\" y2=\"70\" stroke=\"#0f4c81\" stroke-width=\"2\"/><line x1=\"20\" y1=\"45\" x2=\"40\" y2=\"62\" stroke=\"#0f4c81\" stroke-width=\"2\"/><line x1=\"80\" y1=\"45\" x2=\"60\" y2=\"28\" stroke=\"#0f4c81\" stroke-width=\"2\"/><text x=\"50\" y=\"95\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"12\" fill=\"#0f4c81\">(B)</text></g><g transform=\"translate(200,10)\"><polygon points=\"30,20 60,70 0,70\" fill=\"none\" stroke=\"#0f4c81\" stroke-width=\"2.5\"/><line x1=\"12\" y1=\"62\" x2=\"48\" y2=\"62\" stroke=\"#0f4c81\" stroke-width=\"2.5\"/><text x=\"30\" y=\"15\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"12\" fill=\"#0f172a\">N-H</text><text x=\"30\" y=\"95\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"12\" fill=\"#0f4c81\">(C)</text></g><g transform=\"translate(280,10)\"><polygon points=\"40,15 70,38 60,70 20,70 10,38\" fill=\"none\" stroke=\"#0f4c81\" stroke-width=\"2.5\"/><line x1=\"28\" y1=\"62\" x2=\"52\" y2=\"62\" stroke=\"#0f4c81\" stroke-width=\"2\"/><line x1=\"65\" y1=\"42\" x2=\"42\" y2=\"22\" stroke=\"#0f4c81\" stroke-width=\"2\"/><circle cx=\"40\" cy=\"45\" r=\"8\" fill=\"#fef2f2\" stroke=\"#ef4444\" stroke-width=\"1.5\"/><text x=\"40\" y=\"49\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"14\" fill=\"#ef4444\">−</text><text x=\"40\" y=\"95\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"12\" fill=\"#0f4c81\">(D)</text></g></svg></div>",
    "options": [
      "(A)",
      "(B)",
      "(C)",
      "(D)"
    ],
    "correctIndex": 0,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Structure (A) is Cyclopropenyl cation.<br>2. It is cyclic, planar, fully conjugated, and contains 2 π electrons (4n+2 with n=0).<br>3. According to Huckel's rule, <strong>Cyclopropenyl cation (A) is Aromatic</strong>."
  },
  {
    "id": 35,
    "section": "Organic Chemistry",
    "sectionId": "II",
    "question": "Out of the following which one does not give alcohol on reduction with NaBH₄?",
    "options": [
      "CH₃CHO",
      "H₃C−CO−CH₃",
      "H₃C−CO−OCH₃",
      "H₃C−CO−CH₂CH₃"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. NaBH₄ selectively reduces aldehydes and ketones to 1° and 2° alcohols.<br>2. Esters like methyl acetate (<strong>H₃C−CO−OCH₃</strong>) are unreactive towards NaBH₄ under standard conditions."
  },
  {
    "id": 36,
    "section": "Organic Chemistry",
    "sectionId": "II",
    "question": "Intermediate formed in following reaction is -<br><div class=\"svg-diagram-card\"><svg width=\"340\" height=\"90\" viewBox=\"0 0 340 90\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10\" y=\"20\" width=\"130\" height=\"50\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"75\" y=\"50\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"14\" fill=\"#1e40af\">R−COOAg</text><line x1=\"150\" y1=\"45\" x2=\"220\" y2=\"45\" stroke=\"#0f4c81\" stroke-width=\"3\"/><path d=\"M 215 38 L 230 45 L 215 52 Z\" fill=\"#0f4c81\"/><text x=\"185\" y=\"32\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"13\" fill=\"#0f4c81\">Br₂ / Δ</text><rect x=\"240\" y=\"20\" width=\"90\" height=\"50\" rx=\"8\" fill=\"#f0fdf4\" stroke=\"#10b981\" stroke-width=\"2\"/><text x=\"285\" y=\"50\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"14\" fill=\"#166534\">R−Br</text></svg></div>",
    "options": [
      "Carbene",
      "Carbocation",
      "Free radical",
      "Carbanion"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. The Hunsdiecker reaction of silver carboxylate with bromine undergoes homolytic cleavage of the acyl hypobromite O-Br bond.<br>2. The key reaction intermediate is a <strong>Free radical</strong> (alkyl radical R·)."
  },
  {
    "id": 37,
    "section": "Organic Chemistry",
    "sectionId": "II",
    "question": "Which compound will show largest λ_max value in UV-Vis spectroscopy?",
    "options": [
      "Cyclohex-2-enone",
      "Cyclohex-2,5-dienone",
      "Cyclohex-2,4-dienone",
      "1,4-Benzoquinone"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. According to Woodward-Fieser rules, <strong>Cyclohex-2,4-dienone</strong> has homoannular conjugated diene system extended by carbonyl group, producing the maximum red shift (highest λ_max)."
  },
  {
    "id": 38,
    "section": "Organic Chemistry",
    "sectionId": "II",
    "question": "Increase in intensity of absorption due to introduction of an Auxochrome in a system is called -",
    "options": [
      "Hypsochromic shift",
      "Bathochromic shift",
      "Hypochromic shift",
      "Hyperchromic shift"
    ],
    "correctIndex": 3,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. An increase in molar absorptivity (ε_max / absorption intensity) is termed a <strong>Hyperchromic shift</strong>."
  },
  {
    "id": 39,
    "section": "Organic Chemistry",
    "sectionId": "II",
    "question": "Most stable carbocation is -<br><div class=\"svg-diagram-card\"><svg width=\"360\" height=\"120\" viewBox=\"0 0 360 120\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(10,10)\"><polygon points=\"40,20 70,40 70,70 40,90 10,70 10,40\" fill=\"none\" stroke=\"#0f4c81\" stroke-width=\"2\"/><line x1=\"70\" y1=\"55\" x2=\"100\" y2=\"55\" stroke=\"#0f4c81\" stroke-width=\"2\"/><line x1=\"100\" y1=\"55\" x2=\"120\" y2=\"35\" stroke=\"#0f4c81\" stroke-width=\"2\"/><text x=\"125\" y=\"35\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"12\" fill=\"#2563eb\">⁺CH₂</text><text x=\"50\" y=\"110\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#0f4c81\">(A)</text></g><g transform=\"translate(180,10)\"><polygon points=\"40,20 70,40 70,70 40,90 10,70 10,40\" fill=\"none\" stroke=\"#0f4c81\" stroke-width=\"2\"/><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"90\" stroke=\"#0f4c81\" stroke-width=\"1.5\"/><line x1=\"70\" y1=\"55\" x2=\"100\" y2=\"55\" stroke=\"#0f4c81\" stroke-width=\"2\"/><text x=\"105\" y=\"58\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"12\" fill=\"#2563eb\">⁺CH−CH=CH₂</text><text x=\"60\" y=\"110\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#0f4c81\">(C)</text></g></svg></div>",
    "options": [
      "Ph−CH=CH−CH₂⁺",
      "Ph−CH₂−CH₂−CH₂⁺",
      "Ph−CH⁺−CH=CH₂",
      "Cyclohexyl−CH=CH−CH₂⁺"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Ph−CH⁺−CH=CH₂</strong> is simultaneously stabilized by resonance with both the aromatic benzene ring (benzylic) AND the allylic double bond, making it exceptionally stable."
  },
  {
    "id": 40,
    "section": "Organic Chemistry",
    "sectionId": "II",
    "question": "Which of the following is a nucleophile?",
    "options": [
      "BF₃",
      "H₃O⁺",
      "AlCl₃",
      "CN⁻"
    ],
    "correctIndex": 3,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Cyanide ion (<strong>CN⁻</strong>) carries an unshared lone pair and negative charge, acting as an electron-pair donor (nucleophile)."
  },
  {
    "id": 41,
    "section": "Organic Chemistry",
    "sectionId": "II",
    "question": "IUPAC name of CH₃−CH(CH₃)−CO−CH₂−CH₂OH is -<br><div class=\"svg-diagram-card\"><svg width=\"240\" height=\"90\" viewBox=\"0 0 240 90\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M 20 60 L 50 30 L 80 60 L 110 30 L 140 60 L 170 30 L 200 60\" fill=\"none\" stroke=\"#0f4c81\" stroke-width=\"3\"/><line x1=\"80\" y1=\"60\" x2=\"80\" y2=\"85\" stroke=\"#0f4c81\" stroke-width=\"2.5\"/><line x1=\"110\" y1=\"30\" x2=\"110\" y2=\"5\" stroke=\"#ef4444\" stroke-width=\"2.5\"/><line x1=\"114\" y1=\"30\" x2=\"114\" y2=\"5\" stroke=\"#ef4444\" stroke-width=\"2.5\"/><text x=\"110\" y=\"0\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"12\" fill=\"#ef4444\">O</text><text x=\"205\" y=\"65\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"14\" fill=\"#10b981\">OH</text></svg></div>",
    "options": [
      "2−methyl−3−oxopentanol",
      "1−hydroxy−4−methylpentan−3−one",
      "2−methyl−5−hydroxypentan−3−one",
      "4−methyl−pentan−3−one−1−ol"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Principal functional group is Ketone (C=O at C-3), chain numbered from OH side: C1(OH) - C2 - C3(=O) - C4(CH₃) - C5.<br>2. IUPAC Name: <strong>1-hydroxy-4-methylpentan-3-one</strong>."
  },
  {
    "id": 42,
    "section": "Organic Chemistry",
    "sectionId": "II",
    "question": "Number of optical isomers of a compound having 3 unsymmetrical chiral centers is -",
    "options": [
      "6",
      "4",
      "8",
      "9"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. For a molecule with n unsymmetrical chiral centers, total optical isomers = <code>2ⁿ = 2³ = <strong>8</strong></code>."
  },
  {
    "id": 43,
    "section": "Organic Chemistry",
    "sectionId": "II",
    "question": "The compound which exhibits optical isomerism is -",
    "options": [
      "CH₃CH(OH)CH₃",
      "(CH₃)₂CHCH₂CH₃",
      "(CH₃)₂CH(OH)CH₃",
      "CH₃CH(OH)CH₂CH₃"
    ],
    "correctIndex": 3,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Butan-2-ol (<strong>CH₃CH(OH)CH₂CH₃</strong>) possesses a chiral carbon atom (*CH) bonded to 4 different groups (-H, -OH, -CH₃, -CH₂CH₃)."
  },
  {
    "id": 44,
    "section": "Organic Chemistry",
    "sectionId": "II",
    "question": "Which reagent can help in differentiation of 1-butyne and 2-butyne?",
    "options": [
      "O₂",
      "Br₂",
      "NaNH₂",
      "HCl"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. 1-Butyne has an acidic terminal alkynyl hydrogen (CH₃CH₂C≡C-H) and reacts with <strong>NaNH₂</strong> to release H₂ gas, whereas 2-butyne has no terminal H."
  },
  {
    "id": 45,
    "section": "Organic Chemistry",
    "sectionId": "II",
    "question": "Product formed from oxidation of acetylene with alkaline KMnO₄ -",
    "options": [
      "Acetic acid",
      "Oxalic acid",
      "Ethylene glycol",
      "Ethanol"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Oxidation of acetylene (HC≡CH) with cold alkaline KMnO₄ yields <strong>Oxalic acid (HOOC-COOH)</strong>."
  },
  {
    "id": 46,
    "section": "Organic Chemistry",
    "sectionId": "II",
    "question": "Which set of substituents is all m-directing groups?",
    "options": [
      "−COCH₃, −CH₃, −NO₂",
      "−Cl, −NH₂, −CH₃",
      "−CHO, −CN, −SO₃H",
      "−CN, −OH, −NH₂"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Formyl (-CHO), Cyano (-CN), and Sulfonic acid (-SO₃H) are all electron-withdrawing groups that direct electrophiles to the <strong>meta position</strong>."
  },
  {
    "id": 47,
    "section": "Organic Chemistry",
    "sectionId": "II",
    "question": "Identify the product in following reaction: C₆H₆ + CH₃CH=CH₂ --(H⁺)-->",
    "options": [
      "Phenylpropane",
      "Propylbenzene",
      "2-phenylpropane (Cumene)",
      "1-phenylprop-2-ene"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Friedel-Crafts alkylation of benzene with propene forms isopropyl carbocation intermediate, yielding <strong>2-phenylpropane (Cumene)</strong>."
  },
  {
    "id": 48,
    "section": "Organic Chemistry",
    "sectionId": "II",
    "question": "A drug that brings down the temperature in high fever is -",
    "options": [
      "Antibiotic",
      "Pyretic",
      "Antipyretic",
      "Analgesic"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Antipyretic</strong> medications (e.g. Paracetamol) lower body temperature during high fever."
  },
  {
    "id": 49,
    "section": "Organic Chemistry",
    "sectionId": "II",
    "question": "Which one of the following is a basic dye?",
    "options": [
      "Congo red",
      "Alizarin",
      "Indigo",
      "Aniline yellow"
    ],
    "correctIndex": 3,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Aniline yellow</strong> (4-phenylazoaniline) contains basic amino (-NH₂) groups, making it a basic dye."
  },
  {
    "id": 50,
    "section": "Organic Chemistry",
    "sectionId": "II",
    "question": "The catalyst used in anionic polymerization is -",
    "options": [
      "Lewis acid",
      "Grignard reagent",
      "Benzoyl peroxide",
      "Sodamide"
    ],
    "correctIndex": 3,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Strong bases like <strong>Sodamide (NaNH₂)</strong> initiate anionic polymerization by generating carbanion chain ends."
  },
  {
    "id": 51,
    "section": "Organic Chemistry",
    "sectionId": "II",
    "question": "Which of the following is purine base found in RNA?",
    "options": [
      "Guanine",
      "Uracil",
      "Thymine",
      "Cytosine"
    ],
    "correctIndex": 0,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Guanine</strong> is a bicyclic purine nitrogenous base present in both DNA and RNA."
  },
  {
    "id": 52,
    "section": "Organic Chemistry",
    "sectionId": "II",
    "question": "Protein synthesis happens by process -",
    "options": [
      "Formation of mRNA from DNA template",
      "Direct formation of amino acid from DNA template",
      "Formation of amino acids from mRNA",
      "Duplication of DNA"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Translation synthesizes polypeptide chains of <strong>amino acids from mRNA template</strong> sequence."
  },
  {
    "id": 53,
    "section": "Organic Chemistry",
    "sectionId": "II",
    "question": "Which pair of carbohydrates is Epimers?",
    "options": [
      "Fructose and Glucose",
      "Glucose and Galactose",
      "Glucose and Ribose",
      "Mannose and Glucose"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. D-Glucose and D-Galactose differ in configuration only at C-4, making them <strong>C-4 Epimers</strong>."
  },
  {
    "id": 54,
    "section": "Organic Chemistry",
    "sectionId": "II",
    "question": "The product of following reaction is: 2 C₆H₅CH₂COOEt --(NaOEt / EtOH)-->",
    "options": [
      "C₆H₅-CH₂-C(=O)-OCH(Ph)-COOEt",
      "C₆H₅-CH₂-C(=O)-CH₂-C-C₆H₅",
      "C₆H₅CH₂C(=O)-CH(C₆H₅)-COOEt",
      "C₆H₅-CH₂-C(=O)-CH(C₆H₅)-OEt"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Claisen condensation of ethyl phenylacetate yields β-keto ester <strong>C₆H₅CH₂CO-CH(C₆H₅)COOEt</strong>."
  },
  {
    "id": 55,
    "section": "Organic Chemistry",
    "sectionId": "II",
    "question": "Reaction of pyrrole with Br₂ in ethanol gives -",
    "options": [
      "2, 3, 4, 5 – tetrabromopyrrole",
      "2, 3 – dibromopyrrole",
      "2, 5 – dibromopyrrole",
      "3, 4 – dibromopyrrole"
    ],
    "correctIndex": 0,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Highly reactive pyrrole ring undergoes halogenation at all 4 carbon positions to form <strong>2,3,4,5-tetrabromopyrrole</strong>."
  },
  {
    "id": 56,
    "section": "Organic Chemistry",
    "sectionId": "II",
    "question": "Synthesis of Indole by reaction of phenylhydrazine and a carbonyl compound is known as -",
    "options": [
      "Bartoli Indole synthesis",
      "Bischler Indole synthesis",
      "Reissert Indole synthesis",
      "Fischer Indole synthesis"
    ],
    "correctIndex": 3,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Acid-catalyzed condensation of phenylhydrazones of aldehydes/ketones into indoles is the <strong>Fischer Indole Synthesis</strong>."
  },
  {
    "id": 57,
    "section": "Organic Chemistry",
    "sectionId": "II",
    "question": "Which out of the following compounds shows cis-trans isomerism?",
    "options": [
      "CH₃−CH=CH₂",
      "ClCH=C(CH₃)₂",
      "Cl−CH=CH−Cl",
      "ClHC=C=CH₂"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. 1,2-Dichloroethene (<strong>Cl-CH=CH-Cl</strong>) has different groups on both sp² carbons, forming geometric cis and trans isomers."
  },
  {
    "id": 58,
    "section": "Organic Chemistry",
    "sectionId": "II",
    "question": "Products of the following reaction are: C₆H₅CHO + HCHO --(NaOH, H₂O / Δ)-->",
    "options": [
      "HCOONa + C₆H₅COONa",
      "CH₃OH + C₆H₅CH₂OH",
      "HCOONa + C₆H₅CH₂OH",
      "CH₃OH + C₆H₅COONa"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Crossed Cannizzaro reaction: Formaldehyde is oxidized to <strong>HCOONa</strong>, and benzaldehyde is reduced to <strong>C₆H₅CH₂OH (Benzyl alcohol)</strong>."
  },
  {
    "id": 59,
    "section": "Organic Chemistry",
    "sectionId": "II",
    "question": "Sodium benzoate on heating with soda lime (NaOH+CaO) gives -",
    "options": [
      "Calcium benzoate",
      "Benzene",
      "Benzoic acid",
      "None of the above"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Soda lime decarboxylation: <code>C₆H₅COONa + NaOH --(CaO/Δ)--> C₆H₆ (Benzene) + Na₂CO₃</code>."
  },
  {
    "id": 60,
    "section": "Organic Chemistry",
    "sectionId": "II",
    "question": "Hoffmann degradation reaction is shown by -",
    "options": [
      "Ar CH₂ NH₂",
      "Ar CO NH₂",
      "Ar CH₂ NO₂",
      "Ar NH₂"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Hofmann bromamide degradation degrades 1° acid amides (<strong>Ar CONH₂</strong>) into primary amines."
  },
  {
    "id": 61,
    "section": "Organic Chemistry",
    "sectionId": "II",
    "question": "pKb value of aromatic amine (e.g. Aniline) is -",
    "options": [
      "Less than 1",
      "1 to 3.0",
      "3.0 to 4.2",
      "4.2 and above"
    ],
    "correctIndex": 3,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Nitrogen lone pair delocalization into benzene ring reduces basicity of aromatic amines (Aniline pKb = 9.38 ⇒ <strong>4.2 and above</strong>)."
  },
  {
    "id": 62,
    "section": "Organic Chemistry",
    "sectionId": "II",
    "question": "Identify the compound A in given reaction: A --(HNO₂)--> B --(Al₂O₃ / Δ)--> CH₂=CH₂",
    "options": [
      "C₂H₅OH",
      "C₂H₅Cl",
      "C₂H₅NH₂",
      "C₂H₅COOH"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Ethylamine (<strong>C₂H₅NH₂</strong>) + HNO₂ → Ethanol (C₂H₅OH).<br>2. Ethanol --(Al₂O₃/Δ)--> Ethene (CH₂=CH₂)."
  },
  {
    "id": 63,
    "section": "Organic Chemistry",
    "sectionId": "II",
    "question": "IUPAC name of CH₂=CH−CN is -",
    "options": [
      "Vinyl cyanide",
      "Cyanoethane",
      "Ethenenitrile",
      "Prop-2-enenitrile"
    ],
    "correctIndex": 3,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. 3-carbon chain containing nitrile C-1 and C=C double bond: <strong>Prop-2-enenitrile</strong> (or Propenenitrile)."
  },
  {
    "id": 64,
    "section": "Organic Chemistry",
    "sectionId": "II",
    "question": "Most reactive substrate among following for nucleophilic substitution reaction -",
    "options": [
      "CH₂=CH−Cl",
      "C₆H₅Cl",
      "ClCH₂−CH=CH₂",
      "CH₃−CH=CH−Cl"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Allyl chloride (<strong>ClCH₂-CH=CH₂</strong>) undergoes rapid SN1 and SN2 substitutions due to allylic resonance stabilization."
  },
  {
    "id": 65,
    "section": "Organic Chemistry",
    "sectionId": "II",
    "question": "What is formed on heating chloroform with silver powder?",
    "options": [
      "C₂H₄",
      "C₂H₂",
      "CH₄",
      "C₂H₆"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. <code>2 CHCl₃ + 6 Ag --(Δ)--> CH≡CH (Acetylene / C₂H₂) + 6 AgCl</code>."
  },
  {
    "id": 66,
    "section": "Organic Chemistry",
    "sectionId": "II",
    "question": "Which reaction can yield methanol and formic acid from formaldehyde?",
    "options": [
      "Cannizzaro",
      "Clemmensen",
      "Hoffmann",
      "Wolf-Kishner"
    ],
    "correctIndex": 0,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Disproportionation of formaldehyde (HCHO) in alkaline medium gives <strong>Methanol and Formate ion (Cannizzaro reaction)</strong>."
  },
  {
    "id": 67,
    "section": "Organic Chemistry",
    "sectionId": "II",
    "question": "Malachite green dye is obtained by condensation of -",
    "options": [
      "Benzaldehyde and N-methylaniline",
      "Formaldehyde and N-methylaniline",
      "Benzaldehyde and N,N-dimethylaniline",
      "Formaldehyde and N,N-dimethylaniline"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Condensation of 1 mole Benzaldehyde with 2 moles N,N-dimethylaniline yields <strong>Malachite green dye</strong>."
  },
  {
    "id": 68,
    "section": "Physical & Analytical Chemistry",
    "sectionId": "III",
    "question": "Which of the following is an exothermic process?",
    "options": [
      "Na → Na⁺ + e",
      "O + e → O⁻",
      "O⁻ + e → O⁻²",
      "Cl⁻ → Cl + e"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. First electron affinity of Oxygen (<strong>O + e⁻ → O⁻</strong>) releases energy (ΔH < 0, exothermic)."
  },
  {
    "id": 69,
    "section": "Physical & Analytical Chemistry",
    "sectionId": "III",
    "question": "Which gas will have highest rate of diffusion among following?",
    "options": [
      "O₂",
      "NH₃",
      "N₂",
      "CO₂"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Graham's law: <code>Rate ∝ 1 / √(Molar Mass)</code>.<br>2. <strong>NH₃</strong> has the lowest molar mass (17 g/mol), giving it the highest rate of diffusion."
  },
  {
    "id": 70,
    "section": "Physical & Analytical Chemistry",
    "sectionId": "III",
    "question": "Which of the following is correct gas equation?",
    "options": [
      "(V₁T₂)/P₁ = (V₂T₁)/P₂",
      "(P₁V₁)/(P₂V₂) = T₁/T₂",
      "(P₁V₁)/T₁ = (P₂V₂)/T₂",
      "(V₁V₂)/(T₁T₂) = P₁P₂"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Combined gas law: <strong>(P₁V₁)/T₁ = (P₂V₂)/T₂</strong>."
  },
  {
    "id": 71,
    "section": "Physical & Analytical Chemistry",
    "sectionId": "III",
    "question": "In a first order reaction a reactant is reduced to ⅓ in 50 sec, after 150 sec. The amount will reduce to -",
    "options": [
      "1/9",
      "1/27",
      "1/81",
      "No change"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. 150 sec = 3 equal intervals of 50 sec.<br>2. Amount remaining = <code>(⅓)³ = <strong>1/27</strong></code>."
  },
  {
    "id": 72,
    "section": "Physical & Analytical Chemistry",
    "sectionId": "III",
    "question": "At equilibrium, number of phases present in following reaction are: CaCO₃(s) ⇌ CaO(s) + CO₂(g)",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. System contains 2 distinct solid phases (CaCO₃, CaO) and 1 gas phase (CO₂) ⇒ <strong>3 phases</strong>."
  },
  {
    "id": 73,
    "section": "Physical & Analytical Chemistry",
    "sectionId": "III",
    "question": "Presence of three unpaired electrons in nitrogen atom is explained by -",
    "options": [
      "Aufbau principle",
      "Pauli's exclusion principle",
      "Hund's rule",
      "Heisenberg uncertainty principle"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Hund's rule of maximum multiplicity</strong> states that degenerate orbitals are singly occupied with parallel spins before pairing."
  },
  {
    "id": 74,
    "section": "Physical & Analytical Chemistry",
    "sectionId": "III",
    "question": "Energy of a particle in one dimensional box is represented by -",
    "options": [
      "E = n²h² / (8ma²)",
      "E = n²h² / (4ma²)",
      "E = n²h / (8ma²)",
      "E = nh² / (8ma²)"
    ],
    "correctIndex": 0,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Energy formula for 1D particle in box: <strong>E = n²h² / (8ma²)</strong>."
  },
  {
    "id": 75,
    "section": "Physical & Analytical Chemistry",
    "sectionId": "III",
    "question": "Active mass of 2g hydrogen gas kept in 2 litre volume flask is -",
    "options": [
      "1 mole / litre",
      "0.5 mole / litre",
      "2 mole / litre",
      "4 mole / litre"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Moles of H₂ = 2 g / (2 g/mol) = 1 mol.<br>2. Concentration = 1 mol / 2 L = <strong>0.5 mol/L</strong>."
  },
  {
    "id": 76,
    "section": "Physical & Analytical Chemistry",
    "sectionId": "III",
    "question": "On increasing the temperature, which equilibrium will shift in forward direction?",
    "options": [
      "CO(g) + H₂O(g) ⇌ CO₂(g) + H₂(g)",
      "4HCl(g) + O₂(g) ⇌ 2H₂O(g) + 2Cl₂(g)",
      "H₂O(g) ⇌ H₂(g) + ½ O₂(g)",
      "2SO₂(g) + O₂(g) ⇌ 2SO₃(g)"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Decomposition of H₂O is endothermic (ΔH > 0).<br>2. Le Chatelier's principle: Increasing temperature shifts <strong>endothermic reactions in the forward direction</strong>."
  },
  {
    "id": 77,
    "section": "Physical & Analytical Chemistry",
    "sectionId": "III",
    "question": "Relation between boiling point (T_b) and critical temperature (T_c) of a liquid is -",
    "options": [
      "T_b = ⅔ T_c",
      "T_b = 3/2 T_c",
      "T_b = ⅓ T_c",
      "T_b = 5/2 T_c"
    ],
    "correctIndex": 0,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. According to Guldberg's rule, normal boiling point in Kelvin is approximately <strong>T_b ≈ ⅔ T_c</strong>."
  },
  {
    "id": 78,
    "section": "Physical & Analytical Chemistry",
    "sectionId": "III",
    "question": "Emission of light during chemical reaction is called -",
    "options": [
      "Phosphorescence",
      "Fluorescence",
      "Chemiluminescence",
      "Photosensitization"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Emission of light as a result of a chemical reaction is <strong>Chemiluminescence</strong>."
  },
  {
    "id": 79,
    "section": "Physical & Analytical Chemistry",
    "sectionId": "III",
    "question": "Which one is not an electrochemical cell?",
    "options": [
      "Voltaic cell",
      "Fuel cell",
      "Photovoltaic cell",
      "Electrolytic cell"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Photovoltaic cell</strong> converts solar light energy directly into electricity via semiconductor p-n junctions, not chemical redox reactions."
  },
  {
    "id": 80,
    "section": "Physical & Analytical Chemistry",
    "sectionId": "III",
    "question": "Commonly used electrolyte in a dry cell is -",
    "options": [
      "Potassium hydroxide",
      "Ammonium chloride",
      "Manganese dioxide",
      "Sodium chloride"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Leclanché dry cell uses moist paste of <strong>Ammonium chloride (NH₄Cl)</strong> and ZnCl₂ as electrolyte."
  },
  {
    "id": 81,
    "section": "Physical & Analytical Chemistry",
    "sectionId": "III",
    "question": "Heating of gas in a closed cylinder is -",
    "options": [
      "Isobaric process",
      "Adiabatic process",
      "Isothermal process",
      "Isochoric process"
    ],
    "correctIndex": 3,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Rigid closed cylinder maintains constant volume (ΔV = 0 ⇒ <strong>Isochoric process</strong>)."
  },
  {
    "id": 82,
    "section": "Physical & Analytical Chemistry",
    "sectionId": "III",
    "question": "Entropy of an isolated system continuously ........ and becomes ........ at the state of equilibrium.",
    "options": [
      "decreases, minimum",
      "increases, maximum",
      "increases, minimum",
      "decreases, maximum"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Second Law of Thermodynamics: Entropy of isolated system <strong>increases</strong> during spontaneous process and reaches a <strong>maximum</strong> at equilibrium."
  },
  {
    "id": 83,
    "section": "Physical & Analytical Chemistry",
    "sectionId": "III",
    "question": "Among the following maximum bond energy is in -",
    "options": [
      "HCl",
      "HBr",
      "HF",
      "HI"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Small ionic radii and strong orbital overlap give <strong>HF</strong> the highest bond dissociation energy (~567 kJ/mol)."
  },
  {
    "id": 84,
    "section": "Physical & Analytical Chemistry",
    "sectionId": "III",
    "question": "In fcc crystal structure of diamond each carbon is attached to four other carbon atoms. Number of carbon atoms per unit cell is -",
    "options": [
      "4",
      "8",
      "6",
      "12"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Diamond cubic lattice: 4 (fcc lattice) + 4 (tetrahedral voids occupied) = <strong>8 carbon atoms per unit cell</strong>."
  },
  {
    "id": 85,
    "section": "Physical & Analytical Chemistry",
    "sectionId": "III",
    "question": "Amount of NaOH required to prepare 200ml of 0.2N NaOH solution -",
    "options": [
      "0.8g",
      "1.6g",
      "0.4g",
      "4g"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. <code>Mass = N × Equivalent Weight × V(L) = 0.2 × 40 × 0.2 = <strong>1.6 g</strong></code>."
  },
  {
    "id": 86,
    "section": "Physical & Analytical Chemistry",
    "sectionId": "III",
    "question": "Number of signals observed in ¹H-NMR spectrum of CH₃CH₂CO₂CH₃ is -",
    "options": [
      "2",
      "8",
      "4",
      "3"
    ],
    "correctIndex": 3,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. 3 distinct proton environments: -CH₃ (triplet), -CH₂- (quartet), and -OCH₃ (singlet) ⇒ <strong>3 signals</strong>."
  },
  {
    "id": 87,
    "section": "Physical & Analytical Chemistry",
    "sectionId": "III",
    "question": "Number of electrons that can fill the sub-shell with n=3 and l=1 -",
    "options": [
      "2",
      "16",
      "6",
      "10"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. l = 1 defines a p-subshell.<br>2. Maximum capacity = <code>2(2l+1) = 2(3) = <strong>6 electrons</strong></code>."
  },
  {
    "id": 88,
    "section": "Physical & Analytical Chemistry",
    "sectionId": "III",
    "question": "Schiff bases on reduction with sodium borohydride gives -",
    "options": [
      "tert. amine",
      "aniline",
      "primary amine",
      "sec. amine"
    ],
    "correctIndex": 3,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Reduction of imines / Schiff bases (R-CH=N-R') yields <strong>secondary amines (sec. amine)</strong>."
  },
  {
    "id": 89,
    "section": "Physical & Analytical Chemistry",
    "sectionId": "III",
    "question": "Wave number of the IR radiation of wavelength 2.5 μm is -",
    "options": [
      "3600 cm⁻¹",
      "400 cm⁻¹",
      "100 cm⁻¹",
      "4000 cm⁻¹"
    ],
    "correctIndex": 3,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. <code>Wave number ν̄ = 1 / λ = 1 / (2.5 × 10⁻⁴ cm) = <strong>4000 cm⁻¹</strong></code>."
  },
  {
    "id": 90,
    "section": "Physical & Analytical Chemistry",
    "sectionId": "III",
    "question": "Galvanization is the process of coating iron or steel with -",
    "options": [
      "Cu",
      "Zn",
      "Ni",
      "Cr"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Galvanization applies a protective layer of <strong>Zinc (Zn)</strong> to prevent iron corrosion."
  },
  {
    "id": 91,
    "section": "Physical & Analytical Chemistry",
    "sectionId": "III",
    "question": "S.I. unit of surface tension is -",
    "options": [
      "Dyne-meter",
      "Dyne/meter",
      "Newton-meter",
      "Newton/meter"
    ],
    "correctIndex": 3,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. SI unit of surface tension γ is <strong>Newton/meter (N/m)</strong>."
  },
  {
    "id": 92,
    "section": "Physical & Analytical Chemistry",
    "sectionId": "III",
    "question": "Which of the following electronic transitions absorbs at highest wavelength in UV-Vis spectroscopy?",
    "options": [
      "σ → σ*",
      "π → π*",
      "n → σ*",
      "n → π*"
    ],
    "correctIndex": 3,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Energy gap order: σ→σ* > n→σ* > π→π* > n→π*.<br>2. <strong>n → π* transition</strong> requires the lowest energy, corresponding to the <strong>highest absorption wavelength λ</strong>."
  },
  {
    "id": 93,
    "section": "Physical & Analytical Chemistry",
    "sectionId": "III",
    "question": "Prussian blue color obtained in Lassaigne's test of nitrogen is due to -",
    "options": [
      "Na₃[Fe(CN)₆]₃",
      "Fe₄[Fe(CN)₆]₃",
      "Fe(CN)₃",
      "Fe(OH)₂"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Ferric ferrocyanide complex <strong>Fe₄[Fe(CN)₆]₃</strong> produces the characteristic Prussian blue precipitate."
  },
  {
    "id": 94,
    "section": "Physical & Analytical Chemistry",
    "sectionId": "III",
    "question": "Size of colloidal particles is in range -",
    "options": [
      "10⁻³ to 10⁻⁹m",
      "10⁻⁹ to 10⁻¹²m",
      "10⁻⁶ to 10⁻⁹m",
      "10⁻¹² to 10⁻¹⁵m"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Colloidal particle diameters range between 1 nm and 1000 nm (<strong>10⁻⁹ m to 10⁻⁶ m</strong>)."
  },
  {
    "id": 95,
    "section": "Physical & Analytical Chemistry",
    "sectionId": "III",
    "question": "Following is applicable for Tetragonal crystal system -",
    "options": [
      "α=β=γ=90°; a≠b≠c",
      "α=β=90°≠γ; a=b=c",
      "α=β=γ=90°; a=b≠c",
      "α=β=γ≠90°; a=b=c"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Tetragonal unit cell parameters: <strong>a = b ≠ c and α = β = γ = 90°</strong>."
  },
  {
    "id": 96,
    "section": "Physical & Analytical Chemistry",
    "sectionId": "III",
    "question": "The Van't Hoff factor (i) for dilute solution of K₃[Fe(CN)₆] assuming complete ionization is -",
    "options": [
      "10",
      "5",
      "6",
      "4"
    ],
    "correctIndex": 3,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. <code>K₃[Fe(CN)₆] → 3 K⁺ + [Fe(CN)₆]³⁻</code> (yields 4 ions ⇒ <strong>i = 4</strong>)."
  },
  {
    "id": 97,
    "section": "Physical & Analytical Chemistry",
    "sectionId": "III",
    "question": "Bragg's equation is -",
    "options": [
      "nλ = d sinθ",
      "nλ = 2d sinθ",
      "nλ = 2d cosθ",
      "n/λ = 2d sinθ"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Bragg's Law condition: <strong>nλ = 2d sinθ</strong>."
  },
  {
    "id": 98,
    "section": "Physical & Analytical Chemistry",
    "sectionId": "III",
    "question": "Which of the following groups has highest priority according to C-I-P rules?",
    "options": [
      "−CH₃",
      "−CH₂OH",
      "−CHO",
      "−CH₂OCH₃"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. -CHO carbon is double-bonded to Oxygen (O,O,H).<br>2. -CH₂OCH₃ carbon is single-bonded to Oxygen (O,H,H).<br>3. Comparing first point of difference: (O,O,H) > (O,H,H) ⇒ <strong>−CHO has highest C-I-P priority</strong>."
  },
  {
    "id": 99,
    "section": "Physical & Analytical Chemistry",
    "sectionId": "III",
    "question": "Correct assignment of chirality in following compound is -<br><div class=\"svg-diagram-card\"><svg width=\"220\" height=\"200\" viewBox=\"0 0 220 200\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"110\" y1=\"30\" x2=\"110\" y2=\"170\" stroke=\"#0f4c81\" stroke-width=\"3\"/><line x1=\"50\" y1=\"75\" x2=\"170\" y2=\"75\" stroke=\"#0f4c81\" stroke-width=\"3\"/><line x1=\"50\" y1=\"125\" x2=\"170\" y2=\"125\" stroke=\"#0f4c81\" stroke-width=\"3\"/><text x=\"110\" y=\"20\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"15\" fill=\"#0f172a\">CHO</text><text x=\"35\" y=\"80\" text-anchor=\"end\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"15\" fill=\"#ef4444\">H</text><text x=\"185\" y=\"80\" text-anchor=\"start\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"15\" fill=\"#10b981\">OH</text><text x=\"35\" y=\"130\" text-anchor=\"end\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"15\" fill=\"#10b981\">HO</text><text x=\"185\" y=\"130\" text-anchor=\"start\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"15\" fill=\"#ef4444\">H</text><text x=\"110\" y=\"190\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"15\" fill=\"#0f172a\">CH₂OH</text></svg></div>",
    "options": [
      "2R, 3R",
      "2S, 3R",
      "2R, 3S",
      "2S, 3S"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. At C-2: Priorities -OH(1) > C3(2) > -CHO(3) > -H(4). Clockwise trace with horizontal -H ⇒ <strong>2S</strong>.<br>2. At C-3: Priorities -OH(1) > C2(2) > -CH₂OH(3) > -H(4). Counter-clockwise trace with horizontal -H ⇒ <strong>3R</strong>.<br>3. Correct configuration: <strong>2S, 3R</strong>."
  },
  {
    "id": 100,
    "section": "Physical & Analytical Chemistry",
    "sectionId": "III",
    "question": "For reaction 2NO(g) + Cl₂(g) ⇌ 2NOCl(g) the relation between K_p and K_c is -",
    "options": [
      "K_p = K_c / RT",
      "K_p = K_c",
      "K_p = K_c(RT)",
      "K_p = K_c / RT²"
    ],
    "correctIndex": 0,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. <code>Δn_g = 2 - (2 + 1) = -1</code>.<br>2. <code>K_p = K_c (RT)^(Δn_g) = <strong>K_c / RT</strong></code>."
  }
];
