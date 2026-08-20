// URATPG Inorganic Chemistry (2006-2008) Official Question Bank (99 Questions)
const rawQuestions = [
  {
    "id": 1,
    "section": "2006 (Inorganic Chemistry)",
    "sectionId": "I",
    "question": "The low solubility of BaSO\u2084 in water is due to :",
    "options": [
      "Low dissociation energy",
      "Ionic bond",
      "High value of lattice energy",
      "High value of hydration energy"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. BaSO\u2084 contains a large Ba\u00b2\u207a cation and a large SO\u2084\u00b2\u207b anion.<br>2. Due to the matching large sizes of both ions, the lattice energy of BaSO\u2084 is exceptionally high.<br>3. Since Lattice Energy > Hydration Energy, BaSO\u2084 is practically insoluble in water."
  },
  {
    "id": 2,
    "section": "2006 (Inorganic Chemistry)",
    "sectionId": "I",
    "question": "Which of the following complexes has found to have square planar geometry and is diamagnetic also :",
    "options": [
      "[Ni(CO)\u2084]",
      "[NiCl\u2084]\u00b2\u207b",
      "[Ni(H\u2082O)\u2086]Cl\u2082",
      "[Ni(CN)\u2084]\u00b2\u207b"
    ],
    "correctIndex": 3,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. In [Ni(CN)\u2084]\u00b2\u207b, Nickel is in the +2 oxidation state (3d\u2078 configuration).<br>2. Cyanide (CN\u207b) is a strong field ligand that forces pairing of all 8 d-electrons into 4 d-orbitals.<br>3. This leaves one empty 3d orbital, resulting in dsp\u00b2 hybridization (Square Planar geometry) and zero unpaired electrons (Diamagnetic)."
  },
  {
    "id": 3,
    "section": "2006 (Inorganic Chemistry)",
    "sectionId": "I",
    "question": "Which one out of the following is a correct statement in case of lanthanides :",
    "options": [
      "The magnetic moment curve of trivalent ions is double humped",
      "Ceric sulphate can not be used in redox reactions",
      "Promethium (61) and its compounds normally simultaneously occur in nature.",
      "Few lanthanides show +3 and +1 oxidation states in addition to their normal +2 and +4 oxidation states."
    ],
    "correctIndex": 0,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. A plot of theoretical/experimental magnetic moments vs atomic number for trivalent lanthanide ions (Ln\u00b3\u207a) shows two distinct maxima (double humped curve).<br>2. The first peak occurs near Nd\u00b3\u207a / Pm\u00b3\u207a and the second peak near Dy\u00b3\u207a / Ho\u00b3\u207a due to spin-orbit coupling."
  },
  {
    "id": 4,
    "section": "2006 (Inorganic Chemistry)",
    "sectionId": "I",
    "question": "Which one is the correct statement :",
    "options": [
      "Carbonyls are formed by the inner-transition metals only",
      "Vanadium carbonyl does not follow the effective atomic number rule.",
      "Elements of copper and zinc group from carbonyl compounds",
      "In metal carbonyls the metal carbon bond distance is not shorter than the calculated M-C bond distance."
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. V(CO)\u2086 has 23 (from V) + 12 (from 6 CO ligands) = 35 total valence electrons.<br>2. The nearest noble gas Krypton has 36 electrons, so V(CO)\u2086 is 1 electron short and does NOT obey the Effective Atomic Number (EAN / 18-electron) rule."
  },
  {
    "id": 5,
    "section": "2006 (Inorganic Chemistry)",
    "sectionId": "I",
    "question": "Four ice cubes are pressed over each other to form one cube which force is responsible for holding them together :",
    "options": [
      "Lattice energy",
      "Van der Waal\u2019s force",
      "Hydrogen bond formation",
      "Dipole-dipole attraction"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. When pressure is applied to ice cubes, the melting point decreases and a thin film of water forms at the contact surfaces.<br>2. Upon releasing the pressure, the water refreezes and holds the cubes together via extensive <strong>Hydrogen bonding</strong>."
  },
  {
    "id": 6,
    "section": "2006 (Inorganic Chemistry)",
    "sectionId": "I",
    "question": "Carbon atoms in C\u2082(CN)\u2084 are :",
    "options": [
      "sp-hybridised",
      "sp\u00b2-hybridised",
      "sp-and sp\u00b2-hybridised",
      "sp, sp\u00b2-and sp\u00b3-hybridised"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Structure of TCNE is (NC)\u2082C=C(CN)\u2082.<br>2. The central double-bonded carbons (=C=) are <strong>sp\u00b2 hybridised</strong>.<br>3. The cyano group carbons (-C\u2261N) are <strong>sp hybridised</strong>."
  },
  {
    "id": 7,
    "section": "2006 (Inorganic Chemistry)",
    "sectionId": "I",
    "question": "According to Fajan\u2019s rule polarisation is more when :",
    "options": [
      "Small cation and large anion",
      "Small cation and small anion",
      "Large cation and large anion",
      "Large cation and small anion"
    ],
    "correctIndex": 0,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. High polarizing power requires a high charge density, achieved by a <strong>small cation</strong>.<br>2. High polarisability requires an easily deformable electron cloud, achieved by a <strong>large anion</strong>."
  },
  {
    "id": 8,
    "section": "2006 (Inorganic Chemistry)",
    "sectionId": "I",
    "question": "When sodium and chlorine react, energy is :",
    "options": [
      "released and ionic bond is formed",
      "Released and non-polar bond is formed",
      "Absorbed and covalent bond is formed",
      "Absorbed and ionic bond is formed"
    ],
    "correctIndex": 0,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Reaction of Na (metal) and Cl\u2082 (non-metal) is highly exothermic: 2Na + Cl\u2082 \u2192 2NaCl (\u0394H < 0).<br>2. Complete electron transfer forms Na\u207a and Cl\u207b ions joined by a strong <strong>ionic bond</strong>."
  },
  {
    "id": 9,
    "section": "2006 (Inorganic Chemistry)",
    "sectionId": "I",
    "question": "The bond order of CO molecule on the basis of molecular orbital theory is :",
    "options": [
      "Zero",
      "2",
      "3",
      "1"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. CO has 14 total electrons (isoelectronic with N\u2082).<br>2. MO configuration gives 10 bonding electrons and 4 antibonding electrons.<br>3. Bond Order = (10 - 4)/2 = <strong>3</strong>."
  },
  {
    "id": 10,
    "section": "2006 (Inorganic Chemistry)",
    "sectionId": "I",
    "question": "The normality of 0.3 M phosphorus acid (H\u2083PO\u2083) is :",
    "options": [
      "0.1",
      "0.9",
      "0.3",
      "0.6"
    ],
    "correctIndex": 3,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. H\u2083PO\u2083 (Phosphorus acid) is a dibasic acid with 2 replaceable -OH protons (n = 2).<br>2. Normality = Molarity \u00d7 n-factor = 0.3 M \u00d7 2 = <strong>0.6 N</strong>."
  },
  {
    "id": 11,
    "section": "2006 (Inorganic Chemistry)",
    "sectionId": "I",
    "question": "Which of the following is not a magic number :",
    "options": [
      "184",
      "126",
      "114",
      "82"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Standard nuclear magic numbers for extra stability are 2, 8, 20, 28, 50, 82, 126, and 184.<br>2. <strong>114</strong> is not a standard magic number."
  },
  {
    "id": 12,
    "section": "2006 (Inorganic Chemistry)",
    "sectionId": "I",
    "question": "The chemical processes in the production of steel from haematite ore involve :",
    "options": [
      "Reduction",
      "Oxidation",
      "Reduction followed by oxidation",
      "Oxidation followed by reduction"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Haematite (Fe\u2082O\u2083) is reduced in a blast furnace to form pig iron (Reduction).<br>2. Pig iron is then refined by oxidizing excess carbon and impurities to yield steel (Oxidation)."
  },
  {
    "id": 13,
    "section": "2006 (Inorganic Chemistry)",
    "sectionId": "I",
    "question": "On heating ammonium dichromate, the gas evolved is :",
    "options": [
      "Oxygen",
      "Ammonia",
      "Nitrous-oxide",
      "Nitrogen"
    ],
    "correctIndex": 3,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Thermal decomposition: (NH\u2084)\u2082Cr\u2082O\u2087 \u2192 N\u2082 \u2191 + Cr\u2082O\u2083 + 4H\u2082O.<br>2. The gas evolved is <strong>Nitrogen (N\u2082)</strong>."
  },
  {
    "id": 14,
    "section": "2006 (Inorganic Chemistry)",
    "sectionId": "I",
    "question": "Which metal-catalyst is used to produce oxygen from bleaching powder :",
    "options": [
      "Pt",
      "Pd",
      "Ni",
      "Co"
    ],
    "correctIndex": 3,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Cobalt catalyst (Co\u00b2\u207a / Cobalt oxide) accelerates the catalytic decomposition of bleaching powder (CaOCl\u2082):<br><code>2CaOCl\u2082 \u2192 2CaCl\u2082 + O\u2082 \u2191</code>"
  },
  {
    "id": 15,
    "section": "2006 (Inorganic Chemistry)",
    "sectionId": "I",
    "question": "The number of P-O-P bonds in cyclic metaphosphoric acid may be :",
    "options": [
      "Zero",
      "Two",
      "Three",
      "Four"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Cyclic trimetaphosphoric acid, (HPO\u2083)\u2083, forms a 6-membered ring of alternating P and O atoms.<br>2. The structure contains exactly <strong>3 P-O-P linkages</strong>."
  },
  {
    "id": 16,
    "section": "2006 (Inorganic Chemistry)",
    "sectionId": "I",
    "question": "One mole of calcium phosphide on reaction with excess water gives :",
    "options": [
      "One mole of phosphine",
      "Two moles of phosphoric acid",
      "Two moles of phosphine",
      "One mole of phosphorous penta oxide"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Hydrolysis reaction: Ca\u2083P\u2082 + 6H\u2082O \u2192 3Ca(OH)\u2082 + 2PH\u2083 \u2191.<br>2. One mole of Ca\u2083P\u2082 yields <strong>2 moles of phosphine (PH\u2083)</strong>."
  },
  {
    "id": 17,
    "section": "2006 (Inorganic Chemistry)",
    "sectionId": "I",
    "question": "In which compound \u03c0-bond results by the overlap between filled sp-hybrid orbital on C-atom of CO molecule and vacant dsp\u00b3-hybrid orbital of the metal atom :",
    "options": [
      "Cr(CO)\u2086",
      "Fe(CO)\u2085",
      "Ni(CO)\u2084",
      "V(CO)\u2086"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Fe(CO)\u2085 has Trigonal Bipyramidal geometry with <strong>dsp\u00b3 hybridization</strong> at the central Fe atom."
  },
  {
    "id": 18,
    "section": "2006 (Inorganic Chemistry)",
    "sectionId": "I",
    "question": "The number of neutrons accompanying the formation of \u00b9\u00b3\u2079\u2085\u2084Xe and \u2079\u2074\u2083\u2088Sr from the absorption of a slow neutron by \u00b2\u00b3\u2075\u2089\u2082U followed by nuclear fission is :",
    "options": [
      "Zero",
      "2",
      "1",
      "3"
    ],
    "correctIndex": 3,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Nuclear fission equation: \u00b2\u00b3\u2075\u2089\u2082U + \u00b9\u2080n \u2192 \u00b9\u00b3\u2079\u2085\u2084Xe + \u2079\u2074\u2083\u2088Sr + x(\u00b9\u2080n).<br>2. Mass numbers: 235 + 1 = 139 + 94 + x \u21d2 236 = 233 + x \u21d2 x = <strong>3 neutrons</strong>."
  },
  {
    "id": 19,
    "section": "2006 (Inorganic Chemistry)",
    "sectionId": "I",
    "question": "In terms of cost effective, efficient easy to maintain and user friendly fuel which one of the following is the best option :",
    "options": [
      "LPG",
      "CNG",
      "Pentane",
      "diesel"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>CNG (Compressed Natural Gas)</strong> is clean-burning, highly cost-effective, and safe compared to liquid petroleum fuels."
  },
  {
    "id": 20,
    "section": "2006 (Inorganic Chemistry)",
    "sectionId": "I",
    "question": "The number of S \u2013 S bond in sulphur trioxide trimer (S\u2083O\u2089) is :",
    "options": [
      "Zero",
      "Two",
      "One",
      "Three"
    ],
    "correctIndex": 0,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. \u03b3-SO\u2083 (S\u2083O\u2089 trimer) forms a cyclic ring of alternating S and O atoms (-S-O-S-).<br>2. It contains <strong>zero (0) S-S bonds</strong>."
  },
  {
    "id": 21,
    "section": "2006 (Inorganic Chemistry)",
    "sectionId": "I",
    "question": "The geometry of Ni(CO)\u2084 and Ni(PPh\u2083)\u2082Cl\u2082 are :",
    "options": [
      "Both square planar",
      "Tetrahedral and square planar, respectively",
      "Both tetrahedral",
      "Square planar and tetrahedral, respectively"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Ni(CO)\u2084 is Ni\u2070 (3d\u00b9\u2070) with sp\u00b3 <strong>tetrahedral</strong> geometry.<br>2. Ni(PPh\u2083)\u2082Cl\u2082 is a high-spin Ni\u00b2\u207a (3d\u2078) complex that adopts <strong>tetrahedral</strong> geometry due to bulky triphenylphosphine ligands."
  },
  {
    "id": 22,
    "section": "2006 (Inorganic Chemistry)",
    "sectionId": "I",
    "question": "At ordinary temperature and pressure, among halogens the chlorine is a gas, bromine is a liquid and iodine is a solid. This is because :",
    "options": [
      "The specific heat is in the order Cl\u2082 > Br\u2082 > I\u2082",
      "Intermolecular force among molecules of chlorine are the weakest and those in iodine are the strongest",
      "The order of density is I\u2082 > Br\u2082 > Cl\u2082",
      "The order of stability is Cl\u2082 > Br\u2082 > I\u2082"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Down group 17, molecular size and electron cloud polarisability increase from Cl\u2082 to I\u2082.<br>2. This increases Van der Waals dispersion forces, making Cl\u2082 a gas, Br\u2082 a liquid, and I\u2082 a solid."
  },
  {
    "id": 23,
    "section": "2006 (Inorganic Chemistry)",
    "sectionId": "I",
    "question": "Formation of \u03c0-bond :",
    "options": [
      "Increases bond length",
      "Decreases bond length",
      "Distorts the geometry of molecules",
      "Makes homoatomic molecules more reactive"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Formation of a \u03c0-bond adds extra electron density between bonding nuclei, pulling them closer together and <strong>decreasing bond length</strong>."
  },
  {
    "id": 24,
    "section": "2006 (Inorganic Chemistry)",
    "sectionId": "I",
    "question": "The structure of IF\u2085 can be best demonstrated as :",
    "options": [
      "Pentagonal planar",
      "Trigonal bipyramidal",
      "Square pyramidal",
      "None of these"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Iodine in IF\u2085 has 5 bond pairs and 1 lone pair (Steric number 6, sp\u00b3d\u00b2 hybridization).<br>2. According to VSEPR theory, it adopts a <strong>Square Pyramidal</strong> geometry."
  },
  {
    "id": 25,
    "section": "2006 (Inorganic Chemistry)",
    "sectionId": "I",
    "question": "When an element of very low ionisation potential is allowed to react with an element of very high electron affinity resulting high lattice energy, we observe :",
    "options": [
      "A weak ionic bond",
      "A strong ionic bond",
      "A polar covalent",
      "A strong metallic bond"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Low ionization energy facilitates cation formation; high electron affinity facilitates anion formation.<br>2. High lattice energy stabilizes the resulting crystal lattice, producing a <strong>strong ionic bond</strong>."
  },
  {
    "id": 26,
    "section": "2006 (Inorganic Chemistry)",
    "sectionId": "I",
    "question": "The following compounds have been arranged in order of their increasing thermal stabilities. Identify the correct order :<br><code>K\u2082CO\u2083 (I) &nbsp; MgCO\u2083 (II) &nbsp; CaCO\u2083 (III) &nbsp; BeCO\u2083 (IV)</code>",
    "options": [
      "I < II < III < IV",
      "IV < II < III < I",
      "IV < II < I < III",
      "II < IV < III < I"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Thermal stability of carbonates increases down Group 2 (BeCO\u2083 < MgCO\u2083 < CaCO\u2083) as polarizing power decreases.<br>2. Alkali metal carbonate K\u2082CO\u2083 is far more thermally stable than alkaline earth carbonates.<br>3. Correct order: <strong>BeCO\u2083 (IV) < MgCO\u2083 (II) < CaCO\u2083 (III) < K\u2082CO\u2083 (I)</strong>."
  },
  {
    "id": 27,
    "section": "2006 (Inorganic Chemistry)",
    "sectionId": "I",
    "question": "Acetic acid exists as dimer in benzene due to :",
    "options": [
      "Condensation reaction",
      "Presence of Hydrogen atom at \u03b1-carbon",
      "Presence of carboxyl group",
      "Hydrogen bonding"
    ],
    "correctIndex": 3,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. In non-polar solvent benzene, two molecules of CH\u2083COOH associate via two intermolecular <strong>hydrogen bonds</strong> to form a cyclic dimer."
  },
  {
    "id": 28,
    "section": "2006 (Inorganic Chemistry)",
    "sectionId": "I",
    "question": "The shape of ClO\u2083\u207b according to VSEPR model is :",
    "options": [
      "Planar triangle",
      "Pyramidal",
      "Tetrahedral",
      "Square planar"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. In ClO\u2083\u207b, Chlorine has 3 bond pairs and 1 lone pair (Steric number 4, sp\u00b3 hybridization).<br>2. Molecular geometry is <strong>Trigonal Pyramidal</strong>."
  },
  {
    "id": 29,
    "section": "2006 (Inorganic Chemistry)",
    "sectionId": "I",
    "question": "Which is paramagnetic :",
    "options": [
      "Cl\u2082O",
      "Cl\u2082O\u2087",
      "Cl\u2082O\u2086",
      "ClO\u2082"
    ],
    "correctIndex": 3,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. ClO\u2082 contains an odd number of valence electrons (7 + 6 + 6 = 19 e\u207b).<br>2. The presence of an unpaired electron makes <strong>ClO\u2082 paramagnetic</strong>."
  },
  {
    "id": 30,
    "section": "2006 (Inorganic Chemistry)",
    "sectionId": "I",
    "question": "Tetrahedral nature of bonding in carbon was first shown by :",
    "options": [
      "Kekule",
      "Van\u2019t Hoff and Le Bel",
      "Lewis",
      "Pasteur"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. In 1874, <strong>Van\u2019t Hoff and Le Bel</strong> independently proposed that carbon\u2019s four valencies are directed tetrahedrally in 3D space."
  },
  {
    "id": 31,
    "section": "2006 (Inorganic Chemistry)",
    "sectionId": "I",
    "question": "Transition metals generally form stronger metallic bond because of their :",
    "options": [
      "Involvement of (n-1) d electrons in bonding",
      "Small size",
      "Diamagnetism",
      "Large size"
    ],
    "correctIndex": 0,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Transition elements involve both outer ns electrons and inner <strong>(n-1)d electrons in metallic bonding</strong>, making their metallic lattices exceptionally strong."
  },
  {
    "id": 32,
    "section": "2006 (Inorganic Chemistry)",
    "sectionId": "I",
    "question": "The orbitals of same energy level providing the most efficient overlapping are :",
    "options": [
      "sp\u00b3-sp\u00b3",
      "sp-sp",
      "sp\u00b2-sp\u00b2",
      "All the above"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>sp-sp hybrid orbitals</strong> have 50% s-character, making them shorter, more concentrated, and producing maximum orbital overlap."
  },
  {
    "id": 33,
    "section": "2006 (Inorganic Chemistry)",
    "sectionId": "I",
    "question": "B\u2082H\u2086 an electron deficient species is known as :",
    "options": [
      "Lewis acid",
      "Hydrophilic",
      "Nucleophiles",
      "Lewis base"
    ],
    "correctIndex": 0,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Diborane (B\u2082H\u2086) lacks complete octets around Boron atoms, acting as an electron-pair acceptor or <strong>Lewis acid</strong>."
  },
  {
    "id": 34,
    "section": "2007 (Inorganic Chemistry)",
    "sectionId": "II",
    "question": "Radioactive decay of uranium belongs to the decay series :",
    "options": [
      "4n series",
      "4n + 3 series",
      "4n + 2 series",
      "4n + 1 series"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Natural \u00b2\u00b3\u2078U decay series has mass numbers satisfying A = 4n + 2 (since 238 = 4\u00d759 + 2).<br>2. Hence it is designated as the <strong>4n + 2 decay series</strong>."
  },
  {
    "id": 35,
    "section": "2007 (Inorganic Chemistry)",
    "sectionId": "II",
    "question": "The source of stellar energy is based on :",
    "options": [
      "Fission reaction",
      "Decomposition of O atoms in the environment",
      "Fusion reactions occurring in chromospheres",
      "Formation of active hydrogen"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Stellar energy (stars/sun) is powered by thermonuclear <strong>fusion reactions</strong> of hydrogen nuclei into helium."
  },
  {
    "id": 36,
    "section": "2007 (Inorganic Chemistry)",
    "sectionId": "II",
    "question": "Due to lanthanide contraction the atomic sized of Zr, Nb. Mo become :",
    "options": [
      "Bigger than those of Hf, Ta and W respectively",
      "Less than those Hf, Ta and W respectively",
      "Almost equal to those of Hf, Ta and W respectively",
      "Change according to the following general trend: Ti < Zr < Hf; V < Nb < Ta; Cr < Mo < W"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Lanthanide contraction neutralizes the expected size increase down 4d to 5d transition metals.<br>2. As a result, pairs like Zr & Hf, Nb & Ta, Mo & W have <strong>almost equal atomic radii</strong>."
  },
  {
    "id": 37,
    "section": "2007 (Inorganic Chemistry)",
    "sectionId": "II",
    "question": "Which of the following cerium compounds is used as an oxidant in the volumetric titrations ?",
    "options": [
      "Cerium (II) sulphate",
      "Cerium (III) sulphate",
      "Cerium (IV) sulphate",
      "Cerium (O) sulphate"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Cerium (IV) sulphate</strong>, Ce(SO\u2084)\u2082, is a strong, stable primary standard oxidizing agent in cerimetric redox titrations."
  },
  {
    "id": 38,
    "section": "2007 (Inorganic Chemistry)",
    "sectionId": "II",
    "question": "In microcosmic bead test of the coloured metallic salts :",
    "options": [
      "Glassy sodium metaphosphate is formed",
      "A mixed sodium metaphosphate and metal oxide forming transparent coloured bead",
      "Coloured metal phosphate is formed",
      "There is no reaction of microcosmic salt with the coloured metal salts"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Microcosmic salt decomposes on heating to yield glassy NaPO\u2083 (sodium metaphosphate).<br>2. NaPO\u2083 combines with metal oxide to form transparent <strong>coloured orthophosphate beads</strong> (e.g. NaCoPO\u2084)."
  },
  {
    "id": 39,
    "section": "2007 (Inorganic Chemistry)",
    "sectionId": "II",
    "question": "Inorganic rubbers contain the following groups :<br><div class=\"svg-diagram-card\"><svg width=\"360\" height=\"130\" viewBox=\"0 0 360 130\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(10,10)\"><rect x=\"0\" y=\"0\" width=\"100\" height=\"95\" rx=\"6\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><text x=\"12\" y=\"52\" font-family=\"monospace\" font-size=\"24\" fill=\"#0f4c81\">[</text><text x=\"78\" y=\"52\" font-family=\"monospace\" font-size=\"24\" fill=\"#0f4c81\">]</text><text x=\"86\" y=\"62\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#0f4c81\">n</text><text x=\"40\" y=\"48\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"bold\" fill=\"#0f172a\">P = N</text><line x1=\"47\" y1=\"32\" x2=\"47\" y2=\"18\" stroke=\"#0f172a\" stroke-width=\"1.8\"/><text x=\"47\" y=\"14\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#2563eb\">Cl</text><line x1=\"47\" y1=\"54\" x2=\"47\" y2=\"68\" stroke=\"#0f172a\" stroke-width=\"1.8\"/><text x=\"47\" y=\"80\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#2563eb\">Cl</text><text x=\"50\" y=\"110\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"11\" fill=\"#0f4c81\">(a)</text></g><g transform=\"translate(125,10)\"><rect x=\"0\" y=\"0\" width=\"100\" height=\"95\" rx=\"6\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><text x=\"18\" y=\"48\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"bold\" fill=\"#ef4444\">O</text><line x1=\"28\" y1=\"45\" x2=\"40\" y2=\"45\" stroke=\"#0f172a\" stroke-width=\"1.8\"/><polygon points=\"28,45 34,42 34,48\" fill=\"#0f172a\"/><text x=\"46\" y=\"48\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"bold\" fill=\"#0f172a\">P</text><line x1=\"58\" y1=\"38\" x2=\"76\" y2=\"24\" stroke=\"#0f172a\" stroke-width=\"1.8\"/><text x=\"82\" y=\"22\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#10b981\">O</text><line x1=\"58\" y1=\"45\" x2=\"76\" y2=\"45\" stroke=\"#0f172a\" stroke-width=\"1.8\"/><text x=\"82\" y=\"48\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#10b981\">O</text><line x1=\"58\" y1=\"52\" x2=\"76\" y2=\"66\" stroke=\"#0f172a\" stroke-width=\"1.8\"/><text x=\"82\" y=\"74\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#10b981\">O</text><text x=\"50\" y=\"110\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"11\" fill=\"#0f4c81\">(b)</text></g><g transform=\"translate(240,10)\"><rect x=\"0\" y=\"0\" width=\"100\" height=\"95\" rx=\"6\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><text x=\"18\" y=\"48\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"bold\" fill=\"#ef4444\">O</text><line x1=\"28\" y1=\"45\" x2=\"40\" y2=\"45\" stroke=\"#0f172a\" stroke-width=\"1.8\"/><polygon points=\"28,45 34,42 34,48\" fill=\"#0f172a\"/><text x=\"46\" y=\"48\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"bold\" fill=\"#0f172a\">P</text><line x1=\"50\" y1=\"34\" x2=\"50\" y2=\"20\" stroke=\"#0f172a\" stroke-width=\"1.8\"/><text x=\"50\" y=\"15\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#0f172a\">H</text><line x1=\"50\" y1=\"54\" x2=\"50\" y2=\"68\" stroke=\"#0f172a\" stroke-width=\"1.8\"/><text x=\"50\" y=\"80\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#0f172a\">H</text><line x1=\"58\" y1=\"45\" x2=\"76\" y2=\"45\" stroke=\"#0f172a\" stroke-width=\"1.8\"/><text x=\"82\" y=\"48\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#10b981\">O</text><text x=\"50\" y=\"110\" text-anchor=\"middle\" font-family=\"sans-serif\" font-weight=\"bold\" font-size=\"11\" fill=\"#0f4c81\">(c)</text></g></svg></div>",
    "options": [
      "Structure (a)",
      "Structure (b)",
      "Structure (c)",
      "None of the above"
    ],
    "correctIndex": 0,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Inorganic rubber is polyphosphazene (phosphonitrilic chloride polymer).<br>2. It consists of the repeating structural unit <code>[-P(Cl)\u2082=N-]\u2099</code> shown in diagram (a)."
  },
  {
    "id": 40,
    "section": "2007 (Inorganic Chemistry)",
    "sectionId": "II",
    "question": "Anhydrous CuCl\u2082 has :",
    "options": [
      "Polymeric (CuCl\u2082)\u2099 structure",
      "Ionic Cu\u00b2\u207a(Cl\u207b)\u2082 structure",
      "Simple covalent structure",
      "None of the above"
    ],
    "correctIndex": 0,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Anhydrous Copper(II) chloride adopts a <strong>polymeric (CuCl\u2082)\u2099 chain structure</strong> with edge-sharing square planar CuCl\u2084 units."
  },
  {
    "id": 41,
    "section": "2007 (Inorganic Chemistry)",
    "sectionId": "II",
    "question": "When cations and anions combine together forming a solid crystalline compound :",
    "options": [
      "Energy is absorbed",
      "Energy is released",
      "It is neither absorbed nor released",
      "Nothing happen according to the above changes"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Formation of a crystal lattice from gaseous ions releases <strong>Lattice Energy</strong> (exothermic process, \u0394H < 0)."
  },
  {
    "id": 42,
    "section": "2007 (Inorganic Chemistry)",
    "sectionId": "II",
    "question": "When a bond is formed between cation and anion :",
    "options": [
      "Cation will be deformed by anion to a greater degree",
      "Anion will be deformed by cation to greater degree",
      "There will be no deformation of cation as well as anion",
      "The deformation of cation and anion will be of equal magnitude"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. According to Fajan\u2019s rule, high charge density of small cation polarizes and <strong>deforms the electron cloud of the larger anion</strong> to a greater extent."
  },
  {
    "id": 43,
    "section": "2007 (Inorganic Chemistry)",
    "sectionId": "II",
    "question": "In Frenkel Defect of ionic lattice :",
    "options": [
      "Cation is absent from the lattice",
      "Cation is displaced from the lattice position and occupies interstitial position",
      "Cationic charge is doubled",
      "There is a small difference in sizes of cation and anion"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. In Frenkel defect, a smaller cation leaves its regular lattice site and occupies a nearby <strong>interstitial position</strong>."
  },
  {
    "id": 44,
    "section": "2007 (Inorganic Chemistry)",
    "sectionId": "II",
    "question": "The equilibrium is established when PCl\u2085 is heated. What will be types of hybridisation of the ions formed ?<br><code>2PCl\u2085 &nbsp; \u21cc &nbsp; [PCl\u2084]\u207a + [PCl\u2086]\u207b</code>",
    "options": [
      "dsp\u00b2",
      "sp\u00b3d",
      "sp\u00b3 and sp\u00b3d\u00b2 respectively",
      "dsp\u00b2 and sp\u00b3d\u00b2 respectively"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. In solid/melt state, PCl\u2085 auto-ionizes into cationic [PCl\u2084]\u207a and anionic [PCl\u2086]\u207b.<br>2. [PCl\u2084]\u207a has 4 bond pairs \u21d2 <strong>sp\u00b3 hybridization</strong> (Tetrahedral).<br>3. [PCl\u2086]\u207b has 6 bond pairs \u21d2 <strong>sp\u00b3d\u00b2 hybridization</strong> (Octahedral)."
  },
  {
    "id": 45,
    "section": "2007 (Inorganic Chemistry)",
    "sectionId": "II",
    "question": "In diborane molecule :",
    "options": [
      "All the hydrogen atoms in plane with boron atoms",
      "There is a 3-centre bond",
      "Only two hydrogen atoms can be replaced by CH\u2083 groups",
      "Diborane has properties like that of ethane"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. B\u2082H\u2086 features two 3-centre 2-electron (3c-2e) B-H-B <strong>banana bonds</strong> bridging the two B atoms."
  },
  {
    "id": 46,
    "section": "2007 (Inorganic Chemistry)",
    "sectionId": "II",
    "question": "Inorganic benzene is :",
    "options": [
      "BH\u2083 \u2013 NH\u2083",
      "B\u2083N\u2083H\u2086",
      "BF\u2083.NH\u2083",
      "BH\u2083"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Borazine (<strong>B\u2083N\u2083H\u2086</strong>) is known as inorganic benzene due to its cyclic structure and electron counting identical to C\u2086H\u2086."
  },
  {
    "id": 47,
    "section": "2007 (Inorganic Chemistry)",
    "sectionId": "II",
    "question": "In Cr(CO)\u2086 the oxidation number of chromium is :",
    "options": [
      "3+",
      "2+",
      "6+",
      "0"
    ],
    "correctIndex": 3,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Carbonyl (CO) is a neutral ligand.<br>2. Oxidation state of Chromium in Cr(CO)\u2086 is <strong>0</strong>."
  },
  {
    "id": 48,
    "section": "2007 (Inorganic Chemistry)",
    "sectionId": "II",
    "question": "Interhalogen compounds are formed because :",
    "options": [
      "The halogen atoms forming interhalogen compounds are of the same electronegativity",
      "Halogen atoms are of the same electropositive nature",
      "One of the halogen atoms is more electropositive than the other halogen atom",
      "Halogen atoms are joined by van der Waal forces"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Interhalogen compounds form because one halogen is more electropositive (less electronegative) than the other, allowing polar covalent bonding."
  },
  {
    "id": 49,
    "section": "2007 (Inorganic Chemistry)",
    "sectionId": "II",
    "question": "The metals have small number of valency electrons, but the metal atoms are joined forming metal lattice on account of the following reasons :",
    "options": [
      "Delocalisation of electron forming metal bonds",
      "The covalent bonds are by sharing of electron",
      "The ionic bond is formed by transfer of electron",
      "Bonds are not formed at all"
    ],
    "correctIndex": 0,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Metallic bonding is characterized by a lattice of metal cations held together by a <strong>sea of delocalised valence electrons</strong>."
  },
  {
    "id": 50,
    "section": "2007 (Inorganic Chemistry)",
    "sectionId": "II",
    "question": "In band theory of metals, the conduction of electricity is on account of the following :",
    "options": [
      "Overlapping of valency and conduction bands",
      "Crossing the forbidden band between valency and conduction band",
      "Movement of electrons within conduction band",
      "Transfer of electrons from valency band to conduction band"
    ],
    "correctIndex": 0,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Electrical conductivity in metals occurs because the valence band and conduction band <strong>overlap</strong> with zero energy band gap."
  },
  {
    "id": 51,
    "section": "2007 (Inorganic Chemistry)",
    "sectionId": "II",
    "question": "Crystal field theory of complexes indicate :",
    "options": [
      "Pure electrostatic bond",
      "Pure covalent bond",
      "Mixture of electrovalent and covalent bonds",
      "Van der Waal attraction"
    ],
    "correctIndex": 0,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Crystal Field Theory (CFT) treats interaction between metal ion and ligands as <strong>purely electrostatic</strong>."
  },
  {
    "id": 52,
    "section": "2007 (Inorganic Chemistry)",
    "sectionId": "II",
    "question": "The magnetic properties of complex compounds depend on :",
    "options": [
      "Nature of bonds in the complex ion",
      "Presence of electrons in t\u2082g and eg orbitals",
      "Effective atomic number of metal ion",
      "Colour of the complex ion in solution"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Magnetic moment depends on the number of unpaired electrons in the split <strong>t\u2082g and eg orbital sets</strong>."
  },
  {
    "id": 53,
    "section": "2007 (Inorganic Chemistry)",
    "sectionId": "II",
    "question": "Effective atomic number (EAN) depends on :",
    "options": [
      "Atomic number of metal ion",
      "Total number of electrons present in the complex ion",
      "Ionization potential and electron affinity of the metal",
      "None of the above"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. EAN represents the <strong>total number of electrons</strong> surrounding the central metal nucleus in a coordination complex."
  },
  {
    "id": 54,
    "section": "2007 (Inorganic Chemistry)",
    "sectionId": "II",
    "question": "Magnetic studies of the complex ion [Fe(H\u2082O)\u2086]\u00b3\u207a give the value of BM \u2248 5.92. The probable number of unpaired electrons in d-orbitals will be :",
    "options": [
      "1",
      "2",
      "4",
      "5"
    ],
    "correctIndex": 3,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Spin-only formula: \u03bc = \u221a(n(n+2)) BM.<br>2. For n = 5 unpaired electrons, \u03bc = \u221a(5 \u00d7 7) = \u221a35 \u2248 <strong>5.92 BM</strong>."
  },
  {
    "id": 55,
    "section": "2007 (Inorganic Chemistry)",
    "sectionId": "II",
    "question": "The correct IUPAC name for the complex compound [Co(NH\u2083)\u2084Cl(-O-N=O)]Cl is :",
    "options": [
      "Chloronitrotetramine cobalt (III) chloride",
      "Chloronitrotetramine cobalt (II) chloride",
      "Dichloronitritotetramine cobalt (III)",
      "Chloronitritotetramine cobalt (III) chloride"
    ],
    "correctIndex": 3,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Cationic complex: 4 ammine + 1 chloro + 1 nitrito-O attached to Cobalt(III).<br>2. IUPAC Name: <strong>Chloronitritotetramine cobalt (III) chloride</strong>."
  },
  {
    "id": 56,
    "section": "2007 (Inorganic Chemistry)",
    "sectionId": "II",
    "question": "Which of the following statements about radioactivity is wrong ?",
    "options": [
      "It is not affected by temperature and pressure",
      "In this outermost electrons are affected",
      "It is exothermic process",
      "The radioactivity of an element is not affected by any other element compounded with it"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Radioactivity is a nuclear phenomenon involving instability of the atomic nucleus, <strong>not valence/outermost electrons</strong>."
  },
  {
    "id": 57,
    "section": "2007 (Inorganic Chemistry)",
    "sectionId": "II",
    "question": "High spin complexes are also named as :",
    "options": [
      "Spin-free complexes",
      "Spin-paired complexes",
      "Diamagnetic complex ion",
      "Cannot comment"
    ],
    "correctIndex": 0,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. High-spin complexes maintain maximum unpaired electron spins and are called <strong>spin-free complexes</strong>."
  },
  {
    "id": 58,
    "section": "2007 (Inorganic Chemistry)",
    "sectionId": "II",
    "question": "Degeneracy of d-orbital of metal ion is lost on complexation and splitting of d-orbitals results. What will be the splitting sequence of d-orbitals in square planar complexes ?",
    "options": [
      "t\u2082g > eg orbitals",
      "eg < t\u2082g orbitals",
      "dx\u00b2 \u2013 y\u00b2 > dxy > dz\u00b2 > dxz = dyz",
      "None of the above"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Splitting pattern in square planar (D4h): <strong>dx\u00b2 \u2013 y\u00b2 > dxy > dz\u00b2 > dxz = dyz</strong>."
  },
  {
    "id": 59,
    "section": "2007 (Inorganic Chemistry)",
    "sectionId": "II",
    "question": "The particle (X) in the following nuclear reaction \u00b9\u2074\u2087N + X \u2192 \u00b9\u2074\u2086C + \u00b9\u2081H is :",
    "options": [
      "\u00b9\u2080n",
      "\u00b2\u2081H",
      "\u2070\u208a\u2081e",
      "\u2070\u208b\u2081e"
    ],
    "correctIndex": 0,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Mass balance: 14 + A = 14 + 1 \u21d2 A = 1.<br>2. Charge balance: 7 + Z = 6 + 1 \u21d2 Z = 0.<br>3. Particle X is a neutron <strong>(\u00b9\u2080n)</strong>."
  },
  {
    "id": 60,
    "section": "2007 (Inorganic Chemistry)",
    "sectionId": "II",
    "question": "Grignard reagent is prepared by adding magnesium wires to alkyl halide dissolved in dry ether. The role of ether in this reaction is :",
    "options": [
      "To combine with alkyl magnesium halide",
      "To act as a catalyst",
      "To act as a solvent",
      "To prevent reversible reaction"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Anhydrous diethyl ether acts as a <strong>solvent</strong> that solvates and stabilizes the RMgX organometallic complex."
  },
  {
    "id": 61,
    "section": "2007 (Inorganic Chemistry)",
    "sectionId": "II",
    "question": "Which of the following compounds is an organometallic compound ?",
    "options": [
      "Metal cyanide",
      "Metal thiocyanate",
      "Metal carbonyl",
      "Metal carbonate"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Metal carbonyls</strong> contain direct covalent Metal-Carbon bonds, classifying them as organometallic compounds."
  },
  {
    "id": 62,
    "section": "2007 (Inorganic Chemistry)",
    "sectionId": "II",
    "question": "Ionic organometalic compound is :",
    "options": [
      "Cr(CO)\u2086",
      "NaC\u2085H\u2085",
      "Al\u2082(CH\u2083)\u2086",
      "Fe(C\u2085H\u2085)\u2082"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>NaC\u2085H\u2085 (Sodium cyclopentadienide)</strong> consists of Na\u207a cations and C\u2085H\u2085\u207b aromatic anions joined by ionic bonding."
  },
  {
    "id": 63,
    "section": "2007 (Inorganic Chemistry)",
    "sectionId": "II",
    "question": "Silicons contain the following bond :",
    "options": [
      "Si\u2013Si bond",
      "Si=Si bond",
      "Si\u2013O\u2013Si bond",
      "None of the above"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Silicones (polysiloxanes) possess repeating <strong>Si\u2013O\u2013Si linkages</strong> in their polymeric backbone."
  },
  {
    "id": 64,
    "section": "2007 (Inorganic Chemistry)",
    "sectionId": "II",
    "question": "In \u03b2-ray emission the electrons are emitted from :",
    "options": [
      "Nucleus",
      "Valency shell of atom",
      "Electron from antepenultimate shell",
      "None of the above"
    ],
    "correctIndex": 0,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Beta particles (\u03b2\u207b) are high-energy electrons produced in the <strong>atomic nucleus</strong> by neutron decay (n \u2192 p + e\u207b + \u03bd\u0304)."
  },
  {
    "id": 65,
    "section": "2007 (Inorganic Chemistry)",
    "sectionId": "II",
    "question": "Isotope used for dating archeological findings is :",
    "options": [
      "\u00b3\u2081H",
      "\u00b9\u2078\u2088O",
      "\u00b2\u00b3\u2075\u2089\u2082U",
      "\u00b9\u2074\u2086C"
    ],
    "correctIndex": 3,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Carbon-14 (\u00b9\u2074\u2086C)</strong> radiocarbon decay is used to date organic archaeological artifacts."
  },
  {
    "id": 66,
    "section": "2007 (Inorganic Chemistry)",
    "sectionId": "II",
    "question": "Unstable nuclide is that whose n/p ratio is :",
    "options": [
      "n/p = 1",
      "n/p = 2",
      "n/p > 1",
      "n/p < 1"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Stable light nuclei have n/p = 1. High <strong>n/p > 1</strong> ratio causes nuclear instability leading to beta particle emission."
  },
  {
    "id": 67,
    "section": "2008 (Inorganic Chemistry)",
    "sectionId": "III",
    "question": "The interhalogen compound which cannot be prepared by the direct combination of halogen under appropriate conditions is :",
    "options": [
      "ClF",
      "ClF\u2083",
      "IF\u2087",
      "IF\u2083"
    ],
    "correctIndex": 3,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>IF\u2083 (Iodine trifluoride)</strong> is thermally unstable and disproportionates readily, so it cannot be synthesized cleanly by direct elemental combination."
  },
  {
    "id": 68,
    "section": "2008 (Inorganic Chemistry)",
    "sectionId": "III",
    "question": "Which of the following in glacial acetic acid is used for the determination of iodine number ?",
    "options": [
      "ICl\u2083",
      "IBr",
      "ICl",
      "IF\u2083"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Wijs\u2019 solution used in iodine number determination consists of <strong>ICl (Iodine monochloride)</strong> in glacial acetic acid."
  },
  {
    "id": 69,
    "section": "2008 (Inorganic Chemistry)",
    "sectionId": "III",
    "question": "Nuclear particles responsible for holding the nucleons are :",
    "options": [
      "Electrons",
      "Neutrons",
      "Mesons",
      "Positrons"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. According to Yukawa\u2019s meson theory, strong nuclear forces holding nucleons together are mediated by continuous exchange of <strong>\u03c0-mesons</strong>."
  },
  {
    "id": 70,
    "section": "2008 (Inorganic Chemistry)",
    "sectionId": "III",
    "question": "The hydrogen atom which contains one proton and two neutrons has a special name :",
    "options": [
      "Protium",
      "Tritium",
      "Deuterium",
      "Positron"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Tritium (\u00b3\u2081H)</strong> contains 1 proton and 2 neutrons in its nucleus."
  },
  {
    "id": 71,
    "section": "2008 (Inorganic Chemistry)",
    "sectionId": "III",
    "question": "In chromium atom (z = 24) in its ground state, the total number of orbitals populated by one or more electrons is :",
    "options": [
      "14",
      "15",
      "16",
      "20"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Cr configuration: 1s\u00b2 2s\u00b2 2p\u2076 3s\u00b2 3p\u2076 3d\u2075 4s\u00b9.<br>2. Occupied orbitals: 1(1s) + 1(2s) + 3(2p) + 1(3s) + 3(3p) + 5(3d) + 1(4s) = <strong>15 orbitals</strong>."
  },
  {
    "id": 72,
    "section": "2008 (Inorganic Chemistry)",
    "sectionId": "III",
    "question": "In photoelectric cells which one of the following is widely used ?",
    "options": [
      "Platinum",
      "Gold",
      "Lead",
      "Cesium"
    ],
    "correctIndex": 3,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Cesium (Cs)</strong> has the lowest ionization potential and lowest work function, making it ideal for photoelectric cathodes."
  },
  {
    "id": 73,
    "section": "2008 (Inorganic Chemistry)",
    "sectionId": "III",
    "question": "Which one of the following statements is not correct ?",
    "options": [
      "Both carbon and silicon show similar chemical properties",
      "Both carbon and silicon have the same four valence electrons in their atoms",
      "Both carbon and silicon form double and triple bonds",
      "Both carbon and silicon have similar configuration being p-block elements"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Silicon\u2019s 3p orbitals are too diffuse to form stable <strong>p\u03c0-p\u03c0 double or triple bonds</strong> unlike Carbon."
  },
  {
    "id": 74,
    "section": "2008 (Inorganic Chemistry)",
    "sectionId": "III",
    "question": "Which one of the following statement is true ?",
    "options": [
      "Many of the transition elements and their compounds show diamagnetic behaviour",
      "While all transition element show diamagnetic behaviour, their compounds show paramagnetic behaviour",
      "The paramagnetic characteristics of transition metal ion decrease as the number of unpaired electrons increases",
      "The paramagnetic characteristics of transition metal ions increases as the number of unpaired electrons increases"
    ],
    "correctIndex": 3,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Magnetic moment \u03bc = \u221a(n(n+2)) BM. Paramagnetic character <strong>increases as the number of unpaired electrons increases</strong>."
  },
  {
    "id": 75,
    "section": "2008 (Inorganic Chemistry)",
    "sectionId": "III",
    "question": "Which among the following compounds is the strongest acid ?",
    "options": [
      "HClO\u2082",
      "HClO\u2084",
      "HClO\u2083",
      "HOCl"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Perchloric acid (HClO\u2084)</strong> is the strongest acid because Cl is in its highest oxidation state (+7), stabilizing ClO\u2084\u207b conjugate base."
  },
  {
    "id": 76,
    "section": "2008 (Inorganic Chemistry)",
    "sectionId": "III",
    "question": "\u00b9\u2078F is found to undergo 90% radioactive decay in 366 minutes. As a quick estimate, the half-life approximately is :",
    "options": [
      "92 min.",
      "110 min.",
      "122 min",
      "183 min."
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. 90% decay = 10% remaining \u21d2 (1/2)^(366/t\u00bd) = 0.10.<br>2. 366 / t\u00bd \u2248 3.32 \u21d2 t\u00bd = 366 / 3.32 \u2248 <strong>110 minutes</strong>."
  },
  {
    "id": 77,
    "section": "2008 (Inorganic Chemistry)",
    "sectionId": "III",
    "question": "The dipole moment of BF\u2083, H\u2082S and H\u2082O can be arranged as :",
    "options": [
      "BF\u2083 > H\u2082S > H\u2082O",
      "BF\u2083 < H\u2082S < H\u2082O",
      "BF\u2083 < H\u2082O < H\u2082S",
      "H\u2082O < BF\u2083 < H\u2082S"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. BF\u2083 is non-polar (\u03bc = 0 D) due to symmetric planar geometry.<br>2. H\u2082O has higher electronegativity difference (\u03bc \u2248 1.85 D) than H\u2082S (\u03bc \u2248 0.95 D).<br>3. Order: <strong>BF\u2083 < H\u2082S < H\u2082O</strong>."
  },
  {
    "id": 78,
    "section": "2008 (Inorganic Chemistry)",
    "sectionId": "III",
    "question": "Which of the following species has tetrahedral shape :",
    "options": [
      "HgCl\u2082",
      "CO\u2083\u00b2\u207b",
      "NH\u2084\u207a",
      "[Ni(CN)\u2084]\u00b2\u207a"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Ammonium ion (NH\u2084\u207a)</strong> has 4 bond pairs and 0 lone pairs on N (sp\u00b3 hybridization), adopting a regular tetrahedral geometry."
  },
  {
    "id": 79,
    "section": "2008 (Inorganic Chemistry)",
    "sectionId": "III",
    "question": "\u03c0-bond is formed by the overlap of :",
    "options": [
      "s-s orbitals",
      "s-p orbitals",
      "s-d orbitals",
      "p-p orbitals"
    ],
    "correctIndex": 3,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Pi (\u03c0) bonds are formed by lateral/sideways overlapping of parallel <strong>p-p orbitals</strong>."
  },
  {
    "id": 80,
    "section": "2008 (Inorganic Chemistry)",
    "sectionId": "III",
    "question": "0.1 M aqueous solution of which of the following salts would have the highest pH ?",
    "options": [
      "NaClO",
      "NaClO\u2082",
      "NaClO\u2083",
      "NaClO\u2084"
    ],
    "correctIndex": 0,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. HOCl is the weakest acid among oxoacids of chlorine.<br>2. Its conjugate base ClO\u207b undergoes maximum hydrolysis, yielding highest OH\u207b concentration and <strong>highest pH</strong>."
  },
  {
    "id": 81,
    "section": "2008 (Inorganic Chemistry)",
    "sectionId": "III",
    "question": "An ion has a charge of -1. It has eighteen electrons and twenty neutrons. Its mass number is :",
    "options": [
      "17",
      "37",
      "16",
      "38"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Charge -1 and 18 e\u207b \u21d2 Protons (Z) = 17.<br>2. Mass number A = Protons + Neutrons = 17 + 20 = <strong>37</strong>."
  },
  {
    "id": 82,
    "section": "2008 (Inorganic Chemistry)",
    "sectionId": "III",
    "question": "The number of electrons in [\u2074\u2070\u2081\u2089K]\u207b\u00b9 is :",
    "options": [
      "19",
      "18",
      "20",
      "40"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Potassium (Z = 19) neutral atom has 19 electrons.<br>2. K\u207b\u00b9 anion has gained 1 electron \u21d2 19 + 1 = <strong>20 electrons</strong>."
  },
  {
    "id": 83,
    "section": "2008 (Inorganic Chemistry)",
    "sectionId": "III",
    "question": "The oxidation number of Ni in [Ni(CO)\u2084] is :",
    "options": [
      "4",
      "3",
      "8",
      "Zero"
    ],
    "correctIndex": 3,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. CO is a neutral ligand.<br>2. Oxidation state of Nickel in [Ni(CO)\u2084] is <strong>Zero</strong>."
  },
  {
    "id": 84,
    "section": "2008 (Inorganic Chemistry)",
    "sectionId": "III",
    "question": "Which of the following is not a magic number ?",
    "options": [
      "18",
      "28",
      "50",
      "82"
    ],
    "correctIndex": 0,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Standard nuclear magic numbers are 2, 8, 20, 28, 50, 82, 126.<br>2. <strong>18</strong> is not a magic number."
  },
  {
    "id": 85,
    "section": "2008 (Inorganic Chemistry)",
    "sectionId": "III",
    "question": "Which of the following complexes has found to have square planar geometry ?",
    "options": [
      "[Ni(CO)\u2084]",
      "[Ni(CN)\u2084]\u00b2\u207b",
      "[NiCl\u2084]\u00b2\u207b",
      "[(Ph\u2083P)\u2082. NiCl\u2082]"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>[Ni(CN)\u2084]\u00b2\u207b</strong> is a low-spin d\u2078 complex with dsp\u00b2 square planar geometry."
  },
  {
    "id": 86,
    "section": "2008 (Inorganic Chemistry)",
    "sectionId": "III",
    "question": "Which of the following compounds has found use in cancer chemotherapy ?",
    "options": [
      "Cis-[PtCl\u2082(NH\u2083)\u2082]",
      "Cis-[Co(NH\u2083)\u2084Cl\u2082]\u207a",
      "[Pt(NH\u2083)\u2086]Cl\u2084",
      "[(C\u2082H\u2084)PtCl\u2083]\u207b"
    ],
    "correctIndex": 0,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Cisplatin, Cis-[PtCl\u2082(NH\u2083)\u2082]</strong>, is a major chemotherapeutic drug used to treat various cancers."
  },
  {
    "id": 87,
    "section": "2008 (Inorganic Chemistry)",
    "sectionId": "III",
    "question": "Which of the following is used as antiknock in gasoline ?",
    "options": [
      "(CH\u2083)\u2084 Sn",
      "(CH\u2083CH\u2082)\u2084Pb",
      "(CH\u2083CH\u2082)\u2082 Zn",
      "[(CH\u2083)\u2083Al]\u2082"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Tetraethyllead, (CH\u2083CH\u2082)\u2084Pb</strong>, was widely used as an antiknocking additive in gasoline."
  },
  {
    "id": 88,
    "section": "2008 (Inorganic Chemistry)",
    "sectionId": "III",
    "question": "Which metal is present in chlorophyll ?",
    "options": [
      "Ca",
      "Ba",
      "Mg",
      "Sr"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Magnesium (Mg\u00b2\u207a)</strong> is the central metal atom bound inside chlorophyll's porphyrin ring."
  },
  {
    "id": 89,
    "section": "2008 (Inorganic Chemistry)",
    "sectionId": "III",
    "question": "Which of the ions with the following configuration has zero CFSE in both strong and weak ligand field ?",
    "options": [
      "d\u00b9",
      "d\u2076",
      "d\u2078",
      "d\u00b9\u2070"
    ],
    "correctIndex": 3,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>d\u00b9\u2070 configuration</strong> (t\u2082g\u2076 eg\u2074) has CFSE = [-0.4(6) + 0.6(4)] \u0394o = 0 in both strong and weak octahedral fields."
  },
  {
    "id": 90,
    "section": "2008 (Inorganic Chemistry)",
    "sectionId": "III",
    "question": "Which of the following is diamagnetic in nature ?",
    "options": [
      "Co\u00b3\u207a, O\u2095 complex with strong field ligands",
      "Co\u00b3\u207a, O\u2095 complex with weak field ligands",
      "Co\u00b2\u207a in tetrahedral field",
      "Co\u00b2\u207a in square planar complex"
    ],
    "correctIndex": 0,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Co\u00b3\u207a is d\u2076. Strong field ligands cause complete pairing into t\u2082g\u2076 eg\u2070 configuration, rendering it <strong>Diamagnetic</strong>."
  },
  {
    "id": 91,
    "section": "2008 (Inorganic Chemistry)",
    "sectionId": "III",
    "question": "Predict the I-I-I bond angle LnI\u2083\u207b ion :",
    "options": [
      "120\u00b0",
      "109\u00b028\u2019",
      "104\u00b027\u2019",
      "180\u00b0"
    ],
    "correctIndex": 3,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Triiodide ion (I\u2083\u207b) has sp\u00b3d hybridization with 3 equatorial lone pairs and 2 axial bond pairs.<br>2. Molecular shape is linear with a <strong>180\u00b0 bond angle</strong>."
  },
  {
    "id": 92,
    "section": "2008 (Inorganic Chemistry)",
    "sectionId": "III",
    "question": "Which electronic configuration will show Jahn-Teller distortion ?",
    "options": [
      "d\u00b3 (strog or weak ligand field)",
      "d\u2074 (Weak ligand field)",
      "d\u2075 (Weak ligand field)",
      "d\u2076 (strog ligand field )s"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. High-spin d\u2074 (t\u2082g\u00b3 eg\u00b9) has an asymmetrical eg electron occupation, experiencing strong <strong>Jahn-Teller distortion</strong>."
  },
  {
    "id": 93,
    "section": "2008 (Inorganic Chemistry)",
    "sectionId": "III",
    "question": "The magnitude of \u0394\u2080 is minimum in :",
    "options": [
      "[Cr(CN)\u2086]\u00b3\u207b",
      "[Cr(NH\u2083)\u2086]\u00b3\u207a",
      "[CrCl\u2086]\u00b3\u207b",
      "[Cr(H\u2082O)\u2086]\u00b3\u207a"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. According to the spectrochemical series, Cl\u207b is the weakest ligand, yielding the <strong>minimum crystal field splitting \u0394\u2080</strong>."
  },
  {
    "id": 94,
    "section": "2008 (Inorganic Chemistry)",
    "sectionId": "III",
    "question": "The spin only magnetic moment of Ni\u00b2\u207a ion under strong ligand field will be :",
    "options": [
      "1.73 BM",
      "2.83 BM",
      "3.87 BM",
      "0.00 BM"
    ],
    "correctIndex": 3,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Ni\u00b2\u207a (d\u2078) under strong field adopts dsp\u00b2 square planar geometry with 0 unpaired electrons, yielding <strong>0.00 BM</strong>."
  },
  {
    "id": 95,
    "section": "2008 (Inorganic Chemistry)",
    "sectionId": "III",
    "question": "The overall stability constant will be maximum of :",
    "options": [
      "Co(en)\u2082",
      "Co(tren)",
      "Co(dien)\u2082",
      "Co(NH\u2083)\u2084"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Diethylenetriamine (dien) is a tridentate ligand.<br>2. <strong>Co(dien)\u2082</strong> forms 4 five-membered chelate rings, maximizing chelate stability effect."
  },
  {
    "id": 96,
    "section": "2008 (Inorganic Chemistry)",
    "sectionId": "III",
    "question": "In Fe (CO)\u2085 the Fe \u2190CO, \u03c0 bond results by the overlap between filled sp hybrid orbital on C-atom of CO molecule and vacant :",
    "options": [
      "d\u00b2sp\u00b3",
      "dsp\u00b3",
      "sp\u00b3",
      "dsp\u00b2"
    ],
    "correctIndex": 1,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Fe(CO)\u2085 has trigonal bipyramidal geometry with <strong>dsp\u00b3 hybridization</strong>."
  },
  {
    "id": 97,
    "section": "2008 (Inorganic Chemistry)",
    "sectionId": "III",
    "question": "Which of the following can form electron deficient compounds ?",
    "options": [
      "Mg",
      "Ca",
      "Ba",
      "Sr"
    ],
    "correctIndex": 0,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Magnesium (Mg)</strong> forms polymeric, covalent electron-deficient hydrides and organometallic compounds."
  },
  {
    "id": 98,
    "section": "2008 (Inorganic Chemistry)",
    "sectionId": "III",
    "question": "Diborane is heated at 250\u2070C in a tube under 120 mm pressure, what are the products ?",
    "options": [
      "5B\u2082H\u2086 \u2192 2B\u2085H\u2081\u2081 + 4H\u2082",
      "2B\u2082H\u2086 \u2192 B\u2084H\u2081\u2080 + H\u2082",
      "5B\u2082H\u2086 \u2192 B\u2081\u2080H\u2081\u2084 + 8H\u2082",
      "5B\u2082H\u2086 \u2192 B\u2085H\u2089 + B\u2085H\u2081\u2081 + 5H\u2082"
    ],
    "correctIndex": 0,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Pyrolysis of diborane at 250\u00b0C under 120 mm pressure yields pentaborane-11:<br><code>5B\u2082H\u2086 \u2192 2B\u2085H\u2081\u2081 + 4H\u2082</code>."
  },
  {
    "id": 99,
    "section": "2008 (Inorganic Chemistry)",
    "sectionId": "III",
    "question": "The complexes in which the substitutuion of ligands takes place on less than one minute are called :",
    "options": [
      "Inert complexes",
      "Mixed complexes",
      "Labile complexes",
      "None of the above"
    ],
    "correctIndex": 2,
    "explanation": "<strong>Step-by-Step Explanation:</strong><br>1. Complexes where ligand substitution occurs in less than 1 minute are defined as kinetically <strong>Labile complexes</strong>."
  }
];
