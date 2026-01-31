"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Home, Atom, Sparkles, Flame, Star, Zap, CircleDot, Table, Microscope, Globe, ChevronRight, Eclipse, Telescope, Eye, Radio, Waves, Sun, Clock, MapPin, Orbit, Cpu } from "lucide-react";
// import { ImageWithFallback } from "@/components/ImageWithFallback";

interface AstrophysicsPageProps {
  onBack: () => void;
  onGoToTable: () => void;
  onGoToAtomicScience: () => void;
  onGoToPhysicsRealWorld: () => void;
}

const cosmicEras = [
  {
    id: "big-bang",
    title: "The Big Bang",
    subtitle: "13.8 Billion Years Ago",
    timeRange: "0 to 380,000 years",
    icon: Zap,
    color: "from-yellow-500 to-orange-600",
    borderColor: "border-yellow-500",
    bgColor: "bg-yellow-500/10",
    image: "/bigBang.jpg",
    elements: ["Hydrogen (H)", "Helium (He)", "Trace Lithium (Li)"],
    description: `The universe began with the Big Bang—not an explosion in space, but an expansion of space itself from an infinitely hot, dense point called a singularity. In the first fraction of a second, the four fundamental forces (gravity, electromagnetism, strong and weak nuclear forces) separated from a unified force.`,
    physics: [
      {
        title: "Quark Epoch (10⁻¹² to 10⁻⁶ seconds)",
        content: "The universe was a superhot plasma of quarks, gluons, and other elementary particles. Temperatures exceeded 10 trillion Kelvin—too hot for protons or neutrons to form."
      },
      {
        title: "Hadron Epoch (10⁻⁶ to 1 second)",
        content: "As the universe cooled to about 10¹⁰ K, quarks combined to form hadrons (protons and neutrons). Matter and antimatter annihilated, leaving a slight excess of matter—about 1 particle per billion."
      },
      {
        title: "Big Bang Nucleosynthesis (3 to 20 minutes)",
        content: "At temperatures around 10⁹ K, protons and neutrons fused to create the first atomic nuclei. The ratio was roughly 75% hydrogen, 25% helium-4, with traces of deuterium, helium-3, and lithium-7. This process stopped after ~20 minutes as the universe cooled below fusion temperatures."
      },
      {
        title: "Recombination (380,000 years)",
        content: "The universe cooled to ~3,000 K, allowing electrons to bind with nuclei to form neutral atoms. Light could finally travel freely—this is the Cosmic Microwave Background (CMB) we detect today, redshifted to microwave frequencies."
      }
    ],
    keyEquation: "E = mc² governs mass-energy equivalence during particle creation",
    funFact: "The ratio of hydrogen to helium created in the Big Bang (3:1 by mass) matches observations perfectly, providing strong evidence for the Big Bang theory."
  },
  {
    id: "first-stars",
    title: "The First Stars",
    subtitle: "Population III Stars",
    timeRange: "100-400 million years after Big Bang",
    icon: Star,
    color: "from-blue-400 to-purple-600",
    borderColor: "border-blue-500",
    bgColor: "bg-blue-500/10",
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1200&q=80",
    elements: ["Carbon (C)", "Oxygen (O)", "Nitrogen (N)", "Neon (Ne)", "Magnesium (Mg)", "Silicon (Si)"],
    description: `The first stars, called Population III stars, formed from pristine hydrogen and helium gas. Without heavier elements (metals in astronomy), these stars were massive—100 to 1000 solar masses—and burned incredibly hot and bright, living only a few million years.`,
    physics: [
      {
        title: "Gravitational Collapse",
        content: "Dark matter halos provided gravitational wells where hydrogen gas accumulated. Without metals to radiate heat efficiently, gas clouds had to be much more massive to collapse, leading to supermassive first stars."
      },
      {
        title: "Hydrogen Fusion (pp-chain)",
        content: "In stellar cores at 15 million K, hydrogen fuses to helium via the proton-proton chain: 4¹H → ⁴He + 2e⁺ + 2νₑ + 26.7 MeV. This releases energy that supports the star against gravitational collapse."
      },
      {
        title: "CNO Cycle",
        content: "In more massive stars (>1.3 solar masses), the CNO cycle dominates: carbon, nitrogen, and oxygen act as catalysts to fuse hydrogen into helium. This cycle is highly temperature-sensitive (∝ T¹⁶), making massive stars much more luminous."
      },
      {
        title: "Helium Fusion (Triple-Alpha Process)",
        content: "When hydrogen is exhausted, the core contracts and heats to 100 million K. Three helium-4 nuclei fuse to form carbon-12: 3⁴He → ¹²C + γ. This process has a resonance that makes carbon production efficient—a cosmic coincidence essential for life."
      }
    ],
    keyEquation: "L ∝ M³·⁵ — Stellar luminosity scales with mass to the 3.5 power",
    funFact: "Fred Hoyle predicted the carbon-12 resonance state before it was discovered, arguing that without it, carbon-based life couldn't exist. This is sometimes called the 'anthropic coincidence.'"
  },
  {
    id: "stellar-nucleosynthesis",
    title: "Stellar Nucleosynthesis",
    subtitle: "Element Factories",
    timeRange: "Ongoing for 13+ billion years",
    icon: Flame,
    color: "from-orange-500 to-red-600",
    borderColor: "border-orange-500",
    bgColor: "bg-orange-500/10",
    image: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=1200&q=80",
    elements: ["Up to Iron (Fe)", "Nickel (Ni)", "Cobalt (Co)", "All elements up to atomic number 26"],
    description: `Stars are cosmic furnaces that forge elements through nuclear fusion. As stars evolve, they develop onion-like layers, each burning a different element. The process continues until iron—the most stable nucleus—is reached.`,
    physics: [
      {
        title: "Nuclear Binding Energy",
        content: "Iron-56 has the highest binding energy per nucleon (~8.8 MeV). Fusing elements lighter than iron releases energy; fusing heavier elements requires energy input. This is why stars cannot fuse beyond iron through normal processes."
      },
      {
        title: "Carbon Burning (600 million K)",
        content: "¹²C + ¹²C → ²⁰Ne + ⁴He or ²³Na + p or ²³Mg + n. Carbon fusion produces neon, sodium, and magnesium, lasting only ~1000 years in massive stars."
      },
      {
        title: "Oxygen Burning (1.5 billion K)",
        content: "¹⁶O + ¹⁶O → ²⁸Si + ⁴He or ³¹P + p or ³¹S + n. This stage lasts only months, producing silicon and sulfur."
      },
      {
        title: "Silicon Burning (3 billion K)",
        content: "Silicon doesn't fuse directly. Instead, photodisintegration breaks silicon into alpha particles, which build up to iron-group elements (Fe, Ni, Co). This final stage lasts only about one day!"
      },
      {
        title: "The Iron Peak",
        content: "Elements around iron (chromium to zinc) are the most stable. The abundance peak at iron in the universe reflects this nuclear stability—it's the end of the line for fusion energy release."
      }
    ],
    keyEquation: "ΔE = Δm·c² — Mass defect converts to energy in fusion",
    funFact: "A massive star burns hydrogen for millions of years, helium for hundreds of thousands, carbon for centuries, oxygen for months, and silicon for just one day before exploding."
  },
  {
    id: "supernovae",
    title: "Supernovae",
    subtitle: "Cosmic Explosions",
    timeRange: "Seconds to weeks",
    icon: Sparkles,
    color: "from-purple-500 to-pink-600",
    borderColor: "border-purple-500",
    bgColor: "bg-purple-500/10",
    image: "superNova.webp",
    elements: ["Elements heavier than Iron", "Gold (Au)", "Platinum (Pt)", "Uranium (U)", "All naturally occurring elements"],
    description: `When a massive star's iron core exceeds the Chandrasekhar limit (~1.4 solar masses), electron degeneracy pressure fails. The core collapses at 0.25c (quarter light speed), rebounds off the nuclear density core, and triggers a supernova—briefly outshining entire galaxies.`,
    physics: [
      {
        title: "Core Collapse",
        content: "In milliseconds, the iron core collapses from Earth-size to city-size (10-20 km). Electrons are forced into protons: p + e⁻ → n + νₑ. The resulting neutron star or black hole releases 10⁴⁶ joules—99% as neutrinos."
      },
      {
        title: "The r-Process (Rapid Neutron Capture)",
        content: "In the neutron-rich environment, atomic nuclei capture neutrons faster than they can beta-decay. This builds up to very heavy, unstable isotopes that later decay to stable heavy elements. The r-process creates about half of all elements heavier than iron."
      },
      {
        title: "The s-Process (Slow Neutron Capture)",
        content: "In AGB stars before supernova, slow neutron capture builds elements up to bismuth. Neutrons are captured slowly enough for beta decay to occur between captures, following the valley of stability."
      },
      {
        title: "Explosive Nucleosynthesis",
        content: "The supernova shockwave, heated to billions of degrees, triggers additional fusion reactions. Elements from silicon to the iron peak are produced in the expanding debris in just seconds."
      },
      {
        title: "Neutrino-Driven Winds",
        content: "Neutrinos streaming from the proto-neutron star heat material above it, driving winds rich in neutrons. This neutrino-driven wind may be a key site for r-process nucleosynthesis."
      }
    ],
    keyEquation: "M_Ch = 1.4 M_☉ — Chandrasekhar limit for white dwarf/core collapse",
    funFact: "The gold in your jewelry was forged in the death throes of massive stars or neutron star collisions billions of years ago. You're literally wearing stardust."
  },
  {
    id: "neutron-stars",
    title: "Neutron Star Mergers",
    subtitle: "Kilonova Events",
    timeRange: "Milliseconds to days",
    icon: CircleDot,
    color: "from-cyan-500 to-teal-600",
    borderColor: "border-cyan-500",
    bgColor: "bg-cyan-500/10",
    image: "/neutronMerge.png",
    elements: ["Heavy r-process elements", "Gold (Au)", "Platinum (Pt)", "Lanthanides", "Actinides"],
    description: `When two neutron stars spiral together and merge, they create a kilonova—an event 1000 times brighter than a nova. The merger ejects neutron-rich material that undergoes rapid nucleosynthesis, producing heavy elements like gold, platinum, and uranium.`,
    physics: [
      {
        title: "Gravitational Wave Inspiral",
        content: "Binary neutron stars lose energy through gravitational wave emission, spiraling closer over millions of years. In the final seconds, they emit detectable gravitational waves (like GW170817, detected in 2017)."
      },
      {
        title: "Tidal Disruption",
        content: "As neutron stars approach, tidal forces rip material from their surfaces. This neutron-rich ejecta (10⁻² to 10⁻¹ solar masses) expands at 0.1-0.3c, providing ideal conditions for r-process nucleosynthesis."
      },
      {
        title: "Kilonova Light Curve",
        content: "The radioactive decay of newly synthesized heavy elements powers the kilonova's light. Lanthanides make the emission red and long-lasting; lighter r-process elements produce blue, short-lived emission."
      },
      {
        title: "Confirmed r-Process Site",
        content: "GW170817's kilonova showed spectroscopic signatures of strontium and other r-process elements, confirming neutron star mergers as a major source of heavy elements in the universe."
      }
    ],
    keyEquation: "dE/dt = -(32/5)(G⁴/c⁵)(m₁m₂(m₁+m₂)/r⁵) — Gravitational wave energy loss",
    funFact: "A single neutron star merger can produce several Earth masses of gold and platinum. The 2017 event GW170817 created an estimated 10 Earth masses of gold!"
  },
  {
    id: "cosmic-rays",
    title: "Cosmic Ray Spallation",
    subtitle: "Interstellar Alchemy",
    timeRange: "Continuous process",
    icon: Atom,
    color: "from-green-500 to-emerald-600",
    borderColor: "border-green-500",
    bgColor: "bg-green-500/10",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
    elements: ["Lithium (Li)", "Beryllium (Be)", "Boron (B)"],
    description: `Lithium, beryllium, and boron are too fragile to survive stellar interiors—they're destroyed faster than created. Instead, these light elements form when high-energy cosmic rays (mostly protons) collide with heavier nuclei in interstellar space, shattering them into lighter fragments.`,
    physics: [
      {
        title: "Cosmic Ray Origins",
        content: "Cosmic rays are accelerated to near-light speeds by supernova remnant shockwaves through diffusive shock acceleration. They carry energies from MeV to beyond 10²⁰ eV."
      },
      {
        title: "Spallation Reactions",
        content: "When cosmic ray protons hit carbon, nitrogen, or oxygen nuclei in interstellar gas, they knock out nucleons: ¹²C + p → ⁷Li + ... or ¹⁶O + p → ¹¹B + ... These fragments include lithium, beryllium, and boron."
      },
      {
        title: "The Lithium Problem",
        content: "Big Bang nucleosynthesis predicts 3x more lithium-7 than observed in old stars. This 'cosmological lithium problem' remains unsolved—possibly due to stellar destruction, new physics, or measurement issues."
      },
      {
        title: "Abundance Ratios",
        content: "The ratios of Li:Be:B match spallation predictions well, confirming cosmic rays as the primary source. These elements are ~10⁹ times rarer than carbon and oxygen."
      }
    ],
    keyEquation: "σ ∝ A^(2/3) — Spallation cross-section scales with nuclear surface area",
    funFact: "Beryllium is so rare that all the beryllium on Earth could fit in a single large building. Yet it's essential for X-ray windows and aerospace materials."
  }
];

const elementOrigins = [
  { range: "H, He", source: "Big Bang", percentage: "98%", color: "bg-yellow-500" },
  { range: "Li, Be, B", source: "Cosmic Rays", percentage: "<0.01%", color: "bg-green-500" },
  { range: "C to Fe", source: "Stellar Fusion", percentage: "~2%", color: "bg-orange-500" },
  { range: "Fe to U", source: "Supernovae & Mergers", percentage: "<0.01%", color: "bg-purple-500" },
];

const solarSystemPlanets = [
  {
    name: "Mercury",
    type: "Terrestrial",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mercury_in_true_color.jpg/1200px-Mercury_in_true_color.jpg",
    color: "from-gray-400 to-gray-600",
    borderColor: "border-gray-500",
    bgColor: "bg-gray-500/10",
    diameter: "4,879 km",
    mass: "3.30 × 10²³ kg",
    gravity: "3.7 m/s²",
    distanceFromSun: "57.9 million km",
    orbitalPeriod: "88 Earth days",
    dayLength: "59 Earth days",
    moons: 0,
    surfaceTemp: "-180°C to 430°C",
    atmosphere: "Virtually none (trace O₂, Na, H₂, He, K)",
    composition: "Iron core (70%), silicate mantle",
    surfaceConditions: "Heavily cratered, extreme temperature swings between day and night. No atmosphere to retain heat or protect from impacts.",
    funFact: "Mercury's day-night cycle is longer than its year! One solar day (sunrise to sunrise) takes 176 Earth days.",
    chemicalBreakdown: [
      { element: "Iron (Fe)", percentage: "70%" },
      { element: "Silicon (Si)", percentage: "25%" },
      { element: "Other metals", percentage: "5%" },
    ]
  },
  {
    name: "Venus",
    type: "Terrestrial",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Venus_from_Mariner_10.jpg/1200px-Venus_from_Mariner_10.jpg",
    color: "from-yellow-500 to-orange-500",
    borderColor: "border-yellow-500",
    bgColor: "bg-yellow-500/10",
    diameter: "12,104 km",
    mass: "4.87 × 10²⁴ kg",
    gravity: "8.87 m/s²",
    distanceFromSun: "108.2 million km",
    orbitalPeriod: "225 Earth days",
    dayLength: "243 Earth days (retrograde)",
    moons: 0,
    surfaceTemp: "465°C (average)",
    atmosphere: "96.5% CO₂, 3.5% N₂, sulfuric acid clouds",
    composition: "Iron core, silicate rock mantle and crust",
    surfaceConditions: "Crushing atmospheric pressure (92× Earth), runaway greenhouse effect, sulfuric acid rain that evaporates before reaching the surface.",
    funFact: "Venus rotates backwards (retrograde) and so slowly that its day is longer than its year!",
    chemicalBreakdown: [
      { element: "Iron (Fe)", percentage: "32%" },
      { element: "Oxygen (O)", percentage: "30%" },
      { element: "Silicon (Si)", percentage: "15%" },
      { element: "Magnesium (Mg)", percentage: "14%" },
    ]
  },
  {
    name: "Earth",
    type: "Terrestrial",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/1200px-The_Blue_Marble_%28remastered%29.jpg",
    color: "from-blue-500 to-green-500",
    borderColor: "border-blue-500",
    bgColor: "bg-blue-500/10",
    diameter: "12,742 km",
    mass: "5.97 × 10²⁴ kg",
    gravity: "9.81 m/s²",
    distanceFromSun: "149.6 million km (1 AU)",
    orbitalPeriod: "365.25 days",
    dayLength: "24 hours",
    moons: 1,
    surfaceTemp: "-89°C to 57°C",
    atmosphere: "78% N₂, 21% O₂, 1% Ar, 0.04% CO₂",
    composition: "Iron-nickel core, silicate mantle, thin crust",
    surfaceConditions: "Liquid water oceans, active plate tectonics, protective magnetic field, life-supporting atmosphere.",
    funFact: "Earth is the only planet not named after a Greek or Roman god—its name comes from Germanic/Old English word 'ertha' meaning ground.",
    chemicalBreakdown: [
      { element: "Iron (Fe)", percentage: "32.1%" },
      { element: "Oxygen (O)", percentage: "30.1%" },
      { element: "Silicon (Si)", percentage: "15.1%" },
      { element: "Magnesium (Mg)", percentage: "13.9%" },
    ]
  },
  {
    name: "Mars",
    type: "Terrestrial",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Mars_-_August_30_2021_-_Flickr_-_Kevin_M._Gill.png/1200px-Mars_-_August_30_2021_-_Flickr_-_Kevin_M._Gill.png",
    color: "from-red-500 to-orange-600",
    borderColor: "border-red-500",
    bgColor: "bg-red-500/10",
    diameter: "6,779 km",
    mass: "6.42 × 10²³ kg",
    gravity: "3.71 m/s²",
    distanceFromSun: "227.9 million km",
    orbitalPeriod: "687 Earth days",
    dayLength: "24 hours 37 minutes",
    moons: 2,
    surfaceTemp: "-125°C to 20°C",
    atmosphere: "95% CO₂, 2.7% N₂, 1.6% Ar",
    composition: "Iron sulfide core, silicate mantle, basaltic crust",
    surfaceConditions: "Thin atmosphere, dust storms, polar ice caps (CO₂ and H₂O), largest volcano (Olympus Mons) and canyon (Valles Marineris) in solar system.",
    funFact: "Mars appears red because its surface is covered in iron oxide (rust). It has the largest volcano in the solar system—Olympus Mons is 3× taller than Everest!",
    chemicalBreakdown: [
      { element: "Iron (Fe)", percentage: "25%" },
      { element: "Silicon (Si)", percentage: "21%" },
      { element: "Oxygen (O)", percentage: "40%" },
      { element: "Sulfur (S)", percentage: "5%" },
    ]
  },
  {
    name: "Jupiter",
    type: "Gas Giant",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/1200px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg",
    color: "from-orange-400 to-amber-600",
    borderColor: "border-orange-500",
    bgColor: "bg-orange-500/10",
    diameter: "139,820 km",
    mass: "1.90 × 10²⁷ kg",
    gravity: "24.79 m/s²",
    distanceFromSun: "778.5 million km",
    orbitalPeriod: "11.86 Earth years",
    dayLength: "9 hours 56 minutes",
    moons: 95,
    surfaceTemp: "-145°C (cloud tops)",
    atmosphere: "90% H₂, 10% He, traces of CH₄, NH₃, H₂O",
    composition: "No solid surface—layers of gas/liquid hydrogen, metallic hydrogen core, possible rocky core",
    surfaceConditions: "Massive storms including the Great Red Spot (2× Earth's size), powerful radiation belts, strongest magnetic field of any planet.",
    funFact: "Jupiter's Great Red Spot is a storm that has been raging for at least 400 years! Jupiter also has more mass than all other planets combined.",
    chemicalBreakdown: [
      { element: "Hydrogen (H)", percentage: "90%" },
      { element: "Helium (He)", percentage: "10%" },
      { element: "Methane (CH₄)", percentage: "0.3%" },
      { element: "Ammonia (NH₃)", percentage: "0.026%" },
    ]
  },
  {
    name: "Saturn",
    type: "Gas Giant",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/1200px-Saturn_during_Equinox.jpg",
    color: "from-yellow-300 to-amber-500",
    borderColor: "border-yellow-400",
    bgColor: "bg-yellow-400/10",
    diameter: "116,460 km",
    mass: "5.68 × 10²⁶ kg",
    gravity: "10.44 m/s²",
    distanceFromSun: "1.43 billion km",
    orbitalPeriod: "29.5 Earth years",
    dayLength: "10 hours 42 minutes",
    moons: 146,
    surfaceTemp: "-178°C (cloud tops)",
    atmosphere: "96% H₂, 3% He, traces of CH₄, NH₃",
    composition: "Similar to Jupiter—hydrogen/helium atmosphere, metallic hydrogen layer, rocky core",
    surfaceConditions: "Famous ring system (ice and rock particles), hexagonal storm at north pole, lowest density of any planet (would float in water!).",
    funFact: "Saturn's density is so low (0.69 g/cm³) that it would float if you could find a bathtub big enough! Its rings are only 10-100 meters thick but span 282,000 km.",
    chemicalBreakdown: [
      { element: "Hydrogen (H)", percentage: "96%" },
      { element: "Helium (He)", percentage: "3%" },
      { element: "Methane (CH₄)", percentage: "0.4%" },
      { element: "Ammonia (NH₃)", percentage: "0.01%" },
    ]
  },
  {
    name: "Uranus",
    type: "Ice Giant",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/1200px-Uranus2.jpg",
    color: "from-cyan-400 to-teal-500",
    borderColor: "border-cyan-500",
    bgColor: "bg-cyan-500/10",
    diameter: "50,724 km",
    mass: "8.68 × 10²⁵ kg",
    gravity: "8.87 m/s²",
    distanceFromSun: "2.87 billion km",
    orbitalPeriod: "84 Earth years",
    dayLength: "17 hours 14 minutes",
    moons: 28,
    surfaceTemp: "-224°C",
    atmosphere: "83% H₂, 15% He, 2.3% CH₄",
    composition: "Water, methane, ammonia ices; small rocky core; hydrogen-helium atmosphere",
    surfaceConditions: "Rotates on its side (98° axial tilt), faint ring system, extreme seasons lasting 20+ years, coldest planetary atmosphere.",
    funFact: "Uranus rotates on its side—possibly due to a massive collision early in its history. This means its poles get more sunlight than its equator!",
    chemicalBreakdown: [
      { element: "Hydrogen (H)", percentage: "83%" },
      { element: "Helium (He)", percentage: "15%" },
      { element: "Methane (CH₄)", percentage: "2.3%" },
      { element: "Water ice", percentage: "~14%" },
    ]
  },
  {
    name: "Neptune",
    type: "Ice Giant",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg/1200px-Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg",
    color: "from-blue-500 to-indigo-600",
    borderColor: "border-blue-600",
    bgColor: "bg-blue-600/10",
    diameter: "49,528 km",
    mass: "1.02 × 10²⁶ kg",
    gravity: "11.15 m/s²",
    distanceFromSun: "4.5 billion km",
    orbitalPeriod: "165 Earth years",
    dayLength: "16 hours 6 minutes",
    moons: 16,
    surfaceTemp: "-214°C",
    atmosphere: "80% H₂, 19% He, 1.5% CH₄",
    composition: "Similar to Uranus—water, methane, ammonia ices; rocky core",
    surfaceConditions: "Fastest winds in solar system (2,100 km/h), dynamic storm systems, faint ring system, largest moon Triton orbits backwards.",
    funFact: "Neptune has the strongest winds of any planet—up to 2,100 km/h! It was the first planet found through mathematical prediction rather than observation.",
    chemicalBreakdown: [
      { element: "Hydrogen (H)", percentage: "80%" },
      { element: "Helium (He)", percentage: "19%" },
      { element: "Methane (CH₄)", percentage: "1.5%" },
      { element: "Water ice", percentage: "~17%" },
    ]
  },
];

const blackHoleTypes = [
  {
    type: "Stellar Black Holes",
    mass: "3 - 100 M☉",
    formation: "Core collapse of massive stars",
    size: "~30 km diameter",
    color: "from-gray-600 to-gray-900",
    description: "Formed when massive stars (>20 M☉) exhaust their nuclear fuel and collapse. The core compresses beyond the neutron star limit, creating a singularity.",
    examples: ["Cygnus X-1", "V404 Cygni", "GRS 1915+105"],
  },
  {
    type: "Intermediate Black Holes",
    mass: "100 - 100,000 M☉",
    formation: "Mergers or direct collapse",
    size: "~1,000 km diameter",
    color: "from-purple-600 to-purple-900",
    description: "The 'missing link' between stellar and supermassive black holes. May form from merging stellar black holes or the collapse of massive primordial gas clouds.",
    examples: ["HLX-1", "M82 X-1", "NGC 2276-3c"],
  },
  {
    type: "Supermassive Black Holes",
    mass: "10⁶ - 10¹⁰ M☉",
    formation: "Unknown - primordial or growth",
    size: "Sun to solar system scale",
    color: "from-orange-500 to-red-900",
    description: "Found at the center of virtually every galaxy. Sagittarius A* at the Milky Way's center has 4 million solar masses. How they grew so large so fast remains a mystery.",
    examples: ["Sagittarius A* (Milky Way)", "M87* (first imaged)", "TON 618 (66 billion M☉)"],
  },
  {
    type: "Primordial Black Holes",
    mass: "Any (theoretical)",
    formation: "Density fluctuations in early universe",
    size: "Subatomic to stellar",
    color: "from-cyan-500 to-blue-900",
    description: "Hypothetical black holes formed in the first second after the Big Bang from extreme density variations. Could range from microscopic to massive—may explain dark matter.",
    examples: ["Theoretical - none confirmed"],
  },
];

const blackHoleAnatomy = [
  {
    name: "Singularity",
    description: "The center point where all the mass is compressed to infinite density. Space and time break down here—our physics can't describe it.",
    icon: "⚫",
  },
  {
    name: "Event Horizon",
    description: "The 'point of no return'—the boundary beyond which nothing, not even light, can escape. For a stellar black hole, this is typically 10-30 km from the singularity.",
    icon: "🔴",
  },
  {
    name: "Photon Sphere",
    description: "A region where light can orbit the black hole. Located at 1.5× the Schwarzschild radius. Photons here are in unstable orbits.",
    icon: "💫",
  },
  {
    name: "Accretion Disk",
    description: "Superheated matter spiraling into the black hole at near-light speeds. Friction heats it to millions of degrees, emitting X-rays and visible light.",
    icon: "🌀",
  },
  {
    name: "Relativistic Jets",
    description: "Powerful beams of particles ejected perpendicular to the accretion disk at 99.9% light speed. Powered by magnetic fields and spin energy.",
    icon: "⚡",
  },
  {
    name: "Ergosphere",
    description: "A region outside the event horizon of rotating black holes where spacetime is dragged along. Objects here must rotate with the black hole.",
    icon: "🌊",
  },
];

const blackHolePhysics = [
  {
    title: "Schwarzschild Radius",
    equation: "Rs = 2GM/c²",
    description: "The radius of the event horizon for a non-rotating black hole. For the Sun, this would be ~3 km; for Earth, ~9 mm.",
    color: "from-red-500 to-orange-600",
  },
  {
    title: "Hawking Radiation",
    equation: "T = ℏc³/(8πGMkB)",
    description: "Black holes slowly evaporate by emitting particles. Smaller black holes are hotter and evaporate faster. A stellar black hole would take 10⁶⁷ years to evaporate.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Time Dilation",
    equation: "t' = t√(1 - Rs/r)",
    description: "Time slows dramatically near a black hole. At the event horizon, time stops completely relative to a distant observer. This is gravitational time dilation.",
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "Spaghettification",
    equation: "ΔF = 2GMm·Δr/r³",
    description: "The tidal force difference between your head and feet near a black hole would stretch you into a thin strand—'spaghettification.' For supermassive black holes, this happens inside the horizon.",
    color: "from-yellow-500 to-red-600",
  },
];

const famousBlackHoles = [
  {
    name: "Sagittarius A*",
    location: "Center of Milky Way",
    mass: "4 million M☉",
    distance: "26,000 light-years",
    image: "/sagitariusA.webp",
    fact: "First image released in 2022 by the Event Horizon Telescope. Stars orbit it at speeds up to 3% of light speed.",
  },
  {
    name: "M87*",
    location: "Center of M87 Galaxy",
    mass: "6.5 billion M☉",
    distance: "55 million light-years",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Black_hole_-_Messier_87_crop_max_res.jpg/1200px-Black_hole_-_Messier_87_crop_max_res.jpg",
    fact: "First black hole ever photographed (2019). Its event horizon is larger than our entire solar system. Has a relativistic jet 5,000 light-years long.",
  },
  {
    name: "TON 618",
    location: "Canes Venatici constellation",
    mass: "66 billion M☉",
    distance: "10.4 billion light-years",
    image: "/ton618.jpg",
    fact: "One of the most massive black holes known. Its event horizon could encompass our entire solar system 11 times over. Powers an extremely luminous quasar.",
  },
  {
    name: "Cygnus X-1",
    location: "Cygnus constellation",
    mass: "21 M☉",
    distance: "6,070 light-years",
    image: "/cyngusX.jpg",
    fact: "First widely accepted black hole candidate (1964). Subject of a famous bet between Stephen Hawking and Kip Thorne—Hawking conceded in 1990.",
  },
];

const spaceTelescopeComparison = {
  jwst: {
    name: "James Webb Space Telescope",
    shortName: "JWST",
    launchDate: "December 25, 2021",
    location: "L2 Lagrange Point (1.5 million km from Earth)",
    mirrorSize: "6.5 meters (21.3 ft)",
    wavelengths: "0.6 - 28.5 μm (Near to Mid-Infrared)",
    resolution: "0.1 arcseconds",
    operatingTemp: "-233°C (-387°F)",
    cost: "$10 billion",
    lifespan: "10-20 years (expected)",
    image: "/jamesWebb.avif",
    color: "from-amber-500 to-orange-600",
    primaryMissions: [
      "Observe the first galaxies formed after the Big Bang",
      "Study the atmospheres of exoplanets for biosignatures",
      "Peer through dust clouds to see star and planet formation",
      "Investigate the composition of objects in our solar system",
    ],
  },
  hubble: {
    name: "Hubble Space Telescope",
    shortName: "Hubble",
    launchDate: "April 24, 1990",
    location: "Low Earth Orbit (540 km altitude)",
    mirrorSize: "2.4 meters (7.9 ft)",
    wavelengths: "0.1 - 2.5 μm (UV to Near-Infrared)",
    resolution: "0.05 arcseconds",
    operatingTemp: "~15°C (59°F)",
    cost: "$4.7 billion (at launch)",
    lifespan: "34+ years (still operational)",
    image: "/hubbleSpace.jpg",
    color: "from-blue-500 to-purple-600",
    primaryMissions: [
      "Determined the age of the universe (~13.8 billion years)",
      "Discovered dark energy accelerating cosmic expansion",
      "Captured iconic deep field images of distant galaxies",
      "Observed atmospheric composition of exoplanets",
    ],
  },
};

const spaceTelescopeAdvantages = [
  {
    title: "No Atmospheric Distortion",
    description: "Earth's atmosphere causes stars to 'twinkle' and blurs images. Space telescopes capture crystal-clear, undistorted views of the cosmos.",
    icon: Eye,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Full Spectrum Access",
    description: "Our atmosphere blocks most UV, X-ray, and infrared light. Space telescopes can observe wavelengths invisible from Earth's surface.",
    icon: Waves,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "24/7 Observation",
    description: "No day/night cycle, weather, or light pollution. Space telescopes can observe continuously and point at any part of the sky.",
    icon: Star,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Extreme Sensitivity",
    description: "The cold vacuum of space allows infrared telescopes like JWST to detect incredibly faint heat signatures from distant objects.",
    icon: Radio,
    color: "from-green-500 to-emerald-500",
  },
];

const jameWebbDiscoveries = [
  {
    title: "Deepest Infrared Image Ever",
    date: "July 2022",
    description: "JWST's First Deep Field revealed thousands of galaxies in a patch of sky the size of a grain of sand held at arm's length, some dating back 13.1 billion years.",
    image: "/webDeep.jpg",
  },
  {
    title: "Exoplanet Atmospheres",
    date: "2022-2023",
    description: "First detection of CO₂ in an exoplanet atmosphere (WASP-39b), plus water, methane, and other molecules in multiple exoplanet atmospheres.",
    image: "/atmospheres.png",
  },
  {
    title: "Pillars of Creation (New View)",
    date: "October 2022",
    description: "Infrared view of the iconic Pillars of Creation reveals newborn stars hidden within the dusty columns, invisible to Hubble's optical cameras.",
    image: "/pillars.jpg",
  },
  {
    title: "Earliest Galaxies",
    date: "2022-2024",
    description: "Discovered galaxies from just 300-400 million years after the Big Bang—much earlier than expected, challenging theories of galaxy formation.",
    image: "/earlyGalaxies.jpg",
  },
];

const wavelengthSpectrum = [
  { name: "Gamma Rays", range: "< 0.01 nm", blocked: true, color: "bg-violet-900" },
  { name: "X-Rays", range: "0.01 - 10 nm", blocked: true, color: "bg-violet-700" },
  { name: "Ultraviolet", range: "10 - 400 nm", blocked: "Partial", color: "bg-violet-500", telescope: "Hubble" },
  { name: "Visible Light", range: "400 - 700 nm", blocked: false, color: "bg-gradient-to-r from-violet-500 via-green-500 to-red-500", telescope: "Hubble" },
  { name: "Near-Infrared", range: "0.7 - 5 μm", blocked: "Partial", color: "bg-red-600", telescope: "Both" },
  { name: "Mid-Infrared", range: "5 - 30 μm", blocked: true, color: "bg-red-800", telescope: "JWST" },
  { name: "Far-Infrared", range: "30 - 300 μm", blocked: true, color: "bg-red-900" },
  { name: "Radio Waves", range: "> 1 mm", blocked: false, color: "bg-orange-800" },
];

const eclipseTypes = [
  {
    type: "Total Solar Eclipse",
    description: "The Moon completely covers the Sun, revealing the corona. Day turns to night for minutes. The most spectacular astronomical event visible from Earth.",
    frequency: "Every 18 months (somewhere on Earth)",
    duration: "Up to 7.5 minutes of totality",
    visibility: "Narrow path (100-160 km wide)",
    color: "from-gray-900 to-black",
    icon: "🌑",
    safeToView: "Only during totality (without protection)",
  },
  {
    type: "Partial Solar Eclipse",
    description: "The Moon covers only part of the Sun. The Sun appears as a crescent. More common to observe since the viewing area is much larger.",
    frequency: "2-5 times per year",
    duration: "Up to 3 hours (partial phases)",
    visibility: "Wide area (thousands of km)",
    color: "from-orange-600 to-yellow-500",
    icon: "🌗",
    safeToView: "Never safe without protection",
  },
  {
    type: "Annular Eclipse",
    description: "The Moon is too far from Earth to fully cover the Sun, creating a 'ring of fire.' The Moon's apparent size is smaller than the Sun's.",
    frequency: "Every 1-2 years",
    duration: "Up to 12 minutes of annularity",
    visibility: "Narrow path (150-200 km wide)",
    color: "from-orange-500 to-red-600",
    icon: "💍",
    safeToView: "Never safe without protection",
  },
  {
    type: "Hybrid Eclipse",
    description: "Rare eclipse that shifts between annular and total along its path. Earth's curvature causes the Moon's apparent size to change.",
    frequency: "Few times per century",
    duration: "Varies along path",
    visibility: "Very narrow path",
    color: "from-purple-600 to-pink-600",
    icon: "✨",
    safeToView: "Only during totality portions",
  },
];

const eclipseScience = [
  {
    title: "The Cosmic Coincidence",
    content: "The Sun is 400× larger than the Moon, but also 400× farther away. This incredible coincidence means they appear almost exactly the same size in our sky—the only planet where this occurs. Perfect solar eclipses are unique to Earth.",
    icon: "🎯",
  },
  {
    title: "The Moon's Orbit",
    content: "The Moon's orbit is tilted 5° relative to Earth's orbit around the Sun. This is why we don't have eclipses every month—the Moon usually passes above or below the Sun's position. Eclipses only occur during 'eclipse seasons' when alignments are possible.",
    icon: "🌙",
  },
  {
    title: "Umbra vs Penumbra",
    content: "The Moon casts two shadows: the dark umbra (total shadow) and the lighter penumbra (partial shadow). Standing in the umbra means totality; in the penumbra means partial eclipse. The umbra is cone-shaped and can miss Earth entirely.",
    icon: "👥",
  },
  {
    title: "Saros Cycle",
    content: "Eclipses follow an 18-year, 11-day cycle called the Saros. After one Saros, the Sun, Moon, and Earth return to nearly the same relative positions, producing a similar eclipse. Ancient Babylonians discovered this pattern.",
    icon: "🔄",
  },
];

const eclipsePhenomena = [
  {
    name: "Diamond Ring",
    description: "Just before and after totality, the last/first ray of sunlight shines through a lunar valley, creating a brilliant 'diamond' effect.",
    timing: "Seconds before/after totality",
  },
  {
    name: "Baily's Beads",
    description: "Sunlight streaming through lunar mountains and valleys creates a string of bright beads around the Moon's edge.",
    timing: "10-15 seconds before/after totality",
  },
  {
    name: "Solar Corona",
    description: "The Sun's outer atmosphere, normally invisible, becomes visible as a pearly white halo. Its shape changes with the solar cycle.",
    timing: "During totality only",
  },
  {
    name: "Chromosphere",
    description: "A thin pink/red layer of the Sun's atmosphere, visible briefly as a colorful ring just as totality begins/ends.",
    timing: "Seconds during totality transition",
  },
  {
    name: "Shadow Bands",
    description: "Mysterious rippling shadows that race across the ground moments before/after totality, caused by atmospheric turbulence.",
    timing: "1-2 minutes before/after totality",
  },
  {
    name: "360° Sunset",
    description: "During totality, the horizon glows orange/pink in all directions—you're seeing the edge of the Moon's shadow.",
    timing: "During totality",
  },
];

const historicEclipses = [
  {
    year: "585 BCE",
    event: "Eclipse of Thales",
    description: "Predicted by Greek philosopher Thales, this eclipse stopped a battle between Lydians and Medes. One of the earliest successful eclipse predictions.",
    location: "Turkey",
  },
  {
    year: "1919",
    event: "Eddington's Expedition",
    description: "Arthur Eddington photographed stars near the Sun during totality, confirming Einstein's General Relativity by measuring light bending around the Sun.",
    location: "Príncipe & Brazil",
  },
  {
    year: "1868",
    event: "Discovery of Helium",
    description: "Pierre Janssen observed an unknown spectral line in the solar chromosphere during an eclipse. The element was named 'helium' after the Greek sun god Helios.",
    location: "India",
  },
  {
    year: "2017",
    event: "Great American Eclipse",
    description: "First total eclipse to cross the continental US coast-to-coast since 1918. Over 200 million people viewed it, the most-watched eclipse in history.",
    location: "USA (Oregon to South Carolina)",
  },
];

const galaxyTypes = [
  {
    type: "Spiral Galaxy",
    symbol: "🌀",
    description: "Disk-shaped with spiral arms winding outward from a central bulge. Active star formation in arms. Contains young blue stars and old red stars.",
    percentage: "~77% of observed",
    examples: ["Milky Way", "Andromeda (M31)", "Whirlpool (M51)", "Pinwheel (M101)"],
    color: "from-blue-500 to-purple-600",
    characteristics: ["Rotating disk structure", "Spiral arms with star formation", "Central bulge of older stars", "Dark matter halo"],
    image: "/spiral.jpg",
  },
  {
    type: "Elliptical Galaxy",
    symbol: "⚪",
    description: "Smooth, featureless ellipsoids ranging from nearly spherical to highly elongated. Little gas/dust, minimal star formation. Dominated by old, red stars.",
    percentage: "~10-15% of observed",
    examples: ["M87", "M49", "M59", "IC 1101 (largest known)"],
    color: "from-orange-500 to-red-600",
    characteristics: ["3D ellipsoidal shape", "Old stellar populations", "Little gas or dust", "Often found in galaxy clusters"],
    image: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=800&q=80",
  },
  {
    type: "Irregular Galaxy",
    symbol: "💫",
    description: "No distinct shape—chaotic appearance often from gravitational interactions or collisions. High rates of star formation, rich in gas and dust.",
    percentage: "~3% of observed",
    examples: ["Large Magellanic Cloud", "Small Magellanic Cloud", "NGC 1427A"],
    color: "from-cyan-500 to-teal-600",
    characteristics: ["No defined structure", "Active star formation", "Often distorted by gravity", "Rich in young stars"],
    image: "/irGalaxy.jpg",
  },
  {
    type: "Lenticular Galaxy",
    symbol: "🔘",
    description: "Intermediate between spiral and elliptical—disk shape but no spiral arms. Contains older stars, little gas. Often considered 'used up' spirals.",
    percentage: "~20% of observed",
    examples: ["NGC 2787", "Spindle Galaxy (NGC 5866)", "Sombrero Galaxy (M104)"],
    color: "from-yellow-500 to-orange-600",
    characteristics: ["Disk + bulge, no arms", "Older stellar populations", "Low star formation", "May have faint rings"],
    image: "/lenticular.webp",
  },
];

const spiralGalaxyFacts = [
  {
    title: "Density Wave Theory",
    content: "Spiral arms aren't fixed structures—they're density waves, like traffic jams in space. Stars slow down as they enter the arms, pile up, then exit. The arms are brighter because stars spend more time there.",
    icon: "🌊",
  },
  {
    title: "Star Formation Factories",
    content: "The compression of gas in spiral arms triggers star birth. The bright blue regions in arms are stellar nurseries—massive young stars that live fast and die young as supernovae.",
    icon: "⭐",
  },
  {
    title: "Galactic Habitable Zone",
    content: "Life may be most likely in spiral galaxies because the outer disk has enough heavy elements for rocky planets, but not so many supernovae or gamma-ray bursts to sterilize life.",
    icon: "🌍",
  },
  {
    title: "Dark Matter's Fingerprint",
    content: "Spiral galaxies rotate too fast for their visible mass—stars at the edges orbit as fast as those near the center. This 'flat rotation curve' was key evidence for dark matter.",
    icon: "👻",
  },
];

const galaxySizes = [
  { name: "Dwarf Galaxy", diameter: "< 10,000 ly", stars: "~10 million", example: "Sagittarius Dwarf", color: "bg-blue-500" },
  { name: "Small Galaxy", diameter: "10,000 - 50,000 ly", stars: "~10 billion", example: "Large Magellanic Cloud", color: "bg-green-500" },
  { name: "Medium Galaxy", diameter: "50,000 - 100,000 ly", stars: "~100 billion", example: "Milky Way", color: "bg-yellow-500" },
  { name: "Large Galaxy", diameter: "100,000 - 200,000 ly", stars: "~1 trillion", example: "Andromeda", color: "bg-orange-500" },
  { name: "Giant Galaxy", diameter: "> 300,000 ly", stars: "> 10 trillion", example: "IC 1101", color: "bg-red-500" },
];

const famousGalaxies = [
  {
    name: "Milky Way",
    type: "Barred Spiral",
    distance: "We live here!",
    diameter: "100,000 light-years",
    stars: "200-400 billion",
    fact: "Our home galaxy has a supermassive black hole (Sgr A*) at its center. We orbit it once every 230 million years.",
    image: "/milkyWay.jpg",
  },
  {
    name: "Andromeda (M31)",
    type: "Spiral",
    distance: "2.5 million ly",
    diameter: "220,000 light-years",
    stars: "~1 trillion",
    fact: "Our nearest large neighbor, approaching at 110 km/s. Will collide and merge with the Milky Way in ~4.5 billion years to form 'Milkomeda.'",
    image: "/andromeda.jpeg",
  },
  {
    name: "Sombrero Galaxy (M104)",
    type: "Lenticular/Spiral",
    distance: "31 million ly",
    diameter: "50,000 light-years",
    stars: "~100 billion",
    fact: "Its distinctive 'hat' shape comes from an unusually large central bulge and prominent dust lane seen edge-on.",
    image: "/sombreroGalaxy.jpeg",
  },
  {
    name: "Whirlpool Galaxy (M51)",
    type: "Grand-Design Spiral",
    distance: "23 million ly",
    diameter: "76,000 light-years",
    stars: "~100 billion",
    fact: "One of the most photographed galaxies. Its perfect spiral structure is being enhanced by gravitational interaction with a smaller companion.",
    image: "/whirlpoolGalaxy.jpg",
  },
];

const hubbleSequence = [
  { type: "E0", shape: "Spherical", description: "Perfectly round elliptical" },
  { type: "E3", shape: "Elliptical", description: "Moderately elongated" },
  { type: "E7", shape: "Highly Elliptical", description: "Maximum elongation" },
  { type: "S0", shape: "Lenticular", description: "Disk without arms" },
  { type: "Sa", shape: "Tight Spiral", description: "Large bulge, tight arms" },
  { type: "Sb", shape: "Medium Spiral", description: "Medium bulge and arms" },
  { type: "Sc", shape: "Loose Spiral", description: "Small bulge, open arms" },
  { type: "SBa", shape: "Barred Tight", description: "Barred with tight arms" },
  { type: "SBb", shape: "Barred Medium", description: "Barred with medium arms" },
  { type: "SBc", shape: "Barred Loose", description: "Barred with open arms" },
  { type: "Irr", shape: "Irregular", description: "No defined structure" },
];

export function AstrophysicsPage({ onBack, onGoToTable, onGoToAtomicScience, onGoToPhysicsRealWorld }: AstrophysicsPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
      {/* Header */}
      <header className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </motion.div>
            <div>
              <h1 className="text-2xl font-bold text-white">Cosmic Genesis</h1>
              <p className="text-sm text-slate-400">The Origin of Elements</p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onGoToTable}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg transition-colors text-sm"
            >
              <Table className="w-4 h-4" />
              <span className="hidden sm:inline">Periodic Table</span>
            </button>
            <button
              onClick={onGoToAtomicScience}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-colors text-sm"
            >
              <Microscope className="w-4 h-4" />
              <span className="hidden sm:inline">Atomic Science</span>
            </button>
            <button
              onClick={onGoToPhysicsRealWorld}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg transition-colors text-sm"
            >
              <Cpu className="w-4 h-4" />
              <span className="hidden sm:inline">Physics & Tech</span>
            </button>
            <button
              onClick={onBack}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors border border-slate-700 text-sm"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=1920&q=80"
            alt="Deep space"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950"></div>
        </div>

        <div className="relative container mx-auto px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Where Do Elements
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Come From?
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8">
              Every atom in your body was forged in cosmic furnaces—from the Big Bang to exploding stars.
              Discover the astrophysics behind the periodic table.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
              {elementOrigins.map((origin, index) => (
                <motion.div
                  key={origin.range}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4"
                >
                  <div className={`w-3 h-3 ${origin.color} rounded-full mx-auto mb-2`}></div>
                  <div className="text-white font-bold">{origin.range}</div>
                  <div className="text-slate-400 text-sm">{origin.source}</div>
                  <div className="text-purple-400 text-xs mt-1">{origin.percentage} of atoms</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Navigation */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-3">
          {cosmicEras.map((era) => (
            <a
              key={era.id}
              href={`#${era.id}`}
              className={`px-4 py-2 rounded-full ${era.bgColor} ${era.borderColor} border text-white text-sm hover:scale-105 transition-transform`}
            >
              {era.title}
            </a>
          ))}
          <a
            href="#solar-system"
            className="px-4 py-2 rounded-full bg-blue-500/10 border-blue-500 border text-white text-sm hover:scale-105 transition-transform flex items-center gap-2"
          >
            <Globe className="w-4 h-4" />
            Solar System
          </a>
          <a
            href="#black-holes"
            className="px-4 py-2 rounded-full bg-gray-800/50 border-gray-500 border text-white text-sm hover:scale-105 transition-transform flex items-center gap-2"
          >
            <Eclipse className="w-4 h-4" />
            Black Holes
          </a>
          <a
            href="#space-telescopes"
            className="px-4 py-2 rounded-full bg-amber-500/10 border-amber-500 border text-white text-sm hover:scale-105 transition-transform flex items-center gap-2"
          >
            <Telescope className="w-4 h-4" />
            Space Telescopes
          </a>
          <a
            href="#solar-eclipses"
            className="px-4 py-2 rounded-full bg-gray-900/50 border-yellow-500 border text-white text-sm hover:scale-105 transition-transform flex items-center gap-2"
          >
            <Sun className="w-4 h-4" />
            Solar Eclipses
          </a>
          <a
            href="#galaxies"
            className="px-4 py-2 rounded-full bg-gray-900/50 border-pink-500 border text-white text-sm hover:scale-105 transition-transform flex items-center gap-2"
          >
            <Orbit className="w-4 h-4" />
            Galaxies
          </a>
          <a
            href="#pulsars"
            className="px-4 py-2 rounded-full bg-gray-900/50 border-cyan-500 border text-white text-sm hover:scale-105 transition-transform flex items-center gap-2"
          >
            <Radio className="w-4 h-4" />
            Pulsars
          </a>
        </div>
      </section>

      {/* Cosmic Eras */}
      <main className="container mx-auto px-4 py-8 space-y-24">
        {cosmicEras.map((era, index) => (
          <motion.section
            key={era.id}
            id={era.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="scroll-mt-24"
          >
            {/* Era Header */}
            <div className={`relative rounded-3xl overflow-hidden ${era.bgColor} border ${era.borderColor}`}>
              <div className="absolute inset-0">
                <img
                  src={era.image}
                  alt={era.title}
                  className="w-full h-full object-cover opacity-20"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${era.color} opacity-20`}></div>
              </div>

              <div className="relative p-8 md:p-12">
                <div className="flex items-start gap-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${era.color} shadow-lg`}>
                    <era.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-slate-400 text-sm font-medium mb-1">{era.timeRange}</div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">{era.title}</h2>
                    <p className="text-xl text-slate-300">{era.subtitle}</p>
                  </div>
                </div>

                {/* Elements Created */}
                <div className="mt-8 flex flex-wrap gap-2">
                  <span className="text-slate-400 text-sm">Elements created:</span>
                  {era.elements.map((element) => (
                    <span
                      key={element}
                      className={`px-3 py-1 rounded-full ${era.bgColor} ${era.borderColor} border text-white text-sm`}
                    >
                      {element}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Era Content */}
            <div className="mt-8 grid lg:grid-cols-2 gap-8">
              {/* Description */}
              <div className="space-y-6">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
                  <h3 className="text-xl font-bold text-white mb-4">Overview</h3>
                  <p className="text-slate-300 leading-relaxed">{era.description}</p>
                </div>

                {/* Key Equation */}
                <div className={`${era.bgColor} ${era.borderColor} border rounded-2xl p-6`}>
                  <h3 className="text-lg font-bold text-white mb-2">Key Physics</h3>
                  <code className="text-lg text-white/90 font-mono">{era.keyEquation}</code>
                </div>

                {/* Fun Fact */}
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-purple-300 mb-2">💫 Did You Know?</h3>
                  <p className="text-slate-300">{era.funFact}</p>
                </div>
              </div>

              {/* Physics Details */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">The Physics Explained</h3>
                {era.physics.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-5 border border-slate-700"
                  >
                    <h4 className={`font-semibold mb-2 bg-gradient-to-r ${era.color} bg-clip-text text-transparent`}>
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.content}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        ))}

        {/* Solar System Section */}
        <section id="solar-system" className="scroll-mt-24 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                <Globe className="inline-block w-10 h-10 mr-3 text-blue-400" />
                Our Solar System
              </h2>
              <p className="text-slate-400 text-lg max-w-3xl mx-auto">
                Explore the eight planets of our cosmic neighborhood—from scorching Mercury to frigid Neptune.
                Each world is unique in composition, conditions, and chemistry.
              </p>
            </div>

            {/* Solar System Overview */}
            <div className="mb-12">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-slate-700 overflow-hidden">
                <h3 className="text-2xl font-bold text-white text-center mb-6">Scale of the Solar System</h3>

                {/* Animated Orbital View */}
                <div className="relative h-32 md:h-40 mb-8">
                  {/* Sun */}
                  <motion.div
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-500 to-orange-500 shadow-lg shadow-yellow-500/50"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Planets on orbital paths */}
                  <div className="absolute left-24 md:left-28 right-4 top-0 bottom-0 flex items-center">
                    {solarSystemPlanets.map((planet, index) => (
                      <motion.div
                        key={planet.name}
                        className="flex flex-col items-center"
                        style={{ flex: index < 4 ? 1 : 2 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <motion.div
                          className={`rounded-full bg-gradient-to-br ${planet.color} shadow-lg cursor-pointer`}
                          style={{
                            width: index < 4 ? (index === 2 ? 16 : 10 + index * 2) : (index === 4 ? 28 : index === 5 ? 24 : 18),
                            height: index < 4 ? (index === 2 ? 16 : 10 + index * 2) : (index === 4 ? 28 : index === 5 ? 24 : 18),
                          }}
                          whileHover={{ scale: 1.3 }}
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 2 + index * 0.3, repeat: Infinity }}
                          title={planet.name}
                        />
                        <span className="text-xs text-slate-400 mt-2 hidden md:block">{planet.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Planet Type Legend */}
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-gray-400 to-red-500"></div>
                    <span className="text-slate-400">Terrestrial (Rocky)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-orange-400 to-yellow-500"></div>
                    <span className="text-slate-400">Gas Giants</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600"></div>
                    <span className="text-slate-400">Ice Giants</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Individual Planet Cards */}
            <div className="space-y-16">
              {solarSystemPlanets.map((planet, index) => (
                <motion.div
                  key={planet.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="scroll-mt-24"
                  id={planet.name.toLowerCase()}
                >
                  {/* Planet Header */}
                  <div className={`relative rounded-3xl overflow-hidden ${planet.bgColor} border ${planet.borderColor}`}>
                    <div className="absolute inset-0">
                      <img
                        src={planet.image}
                        alt={planet.name}
                        className="w-full h-full object-cover opacity-30"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-r ${planet.color} opacity-20`}></div>
                    </div>

                    <div className="relative p-6 md:p-10">
                      <div className="flex flex-col md:flex-row items-start gap-6">
                        {/* Planet Image */}
                        <motion.div
                          className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0 mx-auto md:mx-0"
                          whileHover={{ scale: 1.05, rotate: 10 }}
                          animate={{ rotate: [0, 360] }}
                          transition={{ rotate: { duration: 20 + index * 5, repeat: Infinity, ease: "linear" } }}
                        >
                          <img
                            src={planet.image}
                            alt={planet.name}
                            className="w-full h-full rounded-full object-cover shadow-2xl"
                            style={{ boxShadow: `0 0 40px ${index < 4 ? 'rgba(255,100,50,0.3)' : 'rgba(100,150,255,0.3)'}` }}
                          />
                        </motion.div>

                        {/* Planet Info */}
                        <div className="flex-1 text-center md:text-left">
                          <div className="text-slate-400 text-sm font-medium mb-1">{planet.type} Planet</div>
                          <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">{planet.name}</h3>
                          <p className="text-slate-300 text-lg">{planet.distanceFromSun} from the Sun</p>

                          {/* Quick Stats */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
                            <div className="bg-slate-900/50 rounded-xl p-3">
                              <div className="text-slate-400 text-xs">Gravity</div>
                              <div className="text-white font-semibold">{planet.gravity}</div>
                            </div>
                            <div className="bg-slate-900/50 rounded-xl p-3">
                              <div className="text-slate-400 text-xs">Diameter</div>
                              <div className="text-white font-semibold">{planet.diameter}</div>
                            </div>
                            <div className="bg-slate-900/50 rounded-xl p-3">
                              <div className="text-slate-400 text-xs">Day Length</div>
                              <div className="text-white font-semibold text-sm">{planet.dayLength}</div>
                            </div>
                            <div className="bg-slate-900/50 rounded-xl p-3">
                              <div className="text-slate-400 text-xs">Moons</div>
                              <div className="text-white font-semibold">{planet.moons}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Planet Details */}
                  <div className="mt-6 grid lg:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="space-y-4">
                      {/* Surface Conditions */}
                      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-5 border border-slate-700">
                        <h4 className="text-lg font-bold text-white mb-3">🌡️ Surface Conditions</h4>
                        <p className="text-slate-300 text-sm leading-relaxed">{planet.surfaceConditions}</p>
                        <div className="mt-4 flex items-center gap-4">
                          <div>
                            <span className="text-slate-400 text-xs">Temperature</span>
                            <div className="text-white font-medium">{planet.surfaceTemp}</div>
                          </div>
                        </div>
                      </div>

                      {/* Atmosphere */}
                      <div className={`${planet.bgColor} ${planet.borderColor} border rounded-2xl p-5`}>
                        <h4 className="text-lg font-bold text-white mb-3">💨 Atmosphere</h4>
                        <p className="text-white/90 text-sm">{planet.atmosphere}</p>
                      </div>

                      {/* Fun Fact */}
                      <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-5">
                        <h4 className="text-lg font-bold text-purple-300 mb-2">🚀 Did You Know?</h4>
                        <p className="text-slate-300 text-sm">{planet.funFact}</p>
                      </div>
                    </div>

                    {/* Right Column - Chemical Composition */}
                    <div className="space-y-4">
                      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-5 border border-slate-700">
                        <h4 className="text-lg font-bold text-white mb-4">⚗️ Chemical Composition</h4>
                        <p className="text-slate-400 text-sm mb-4">{planet.composition}</p>

                        {/* Composition Bars */}
                        <div className="space-y-3">
                          {planet.chemicalBreakdown.map((chem, i) => (
                            <motion.div
                              key={chem.element}
                              initial={{ opacity: 0, width: 0 }}
                              whileInView={{ opacity: 1, width: "100%" }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <div className="flex justify-between text-sm mb-1">
                                <span className="text-slate-300">{chem.element}</span>
                                <span className="text-white font-medium">{chem.percentage}</span>
                              </div>
                              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                <motion.div
                                  className={`h-full bg-gradient-to-r ${planet.color} rounded-full`}
                                  initial={{ width: 0 }}
                                  whileInView={{ width: chem.percentage }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 1, delay: i * 0.1 }}
                                />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Orbital Info */}
                      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-5 border border-slate-700">
                        <h4 className="text-lg font-bold text-white mb-3">🌍 Orbital Data</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-slate-400">Orbital Period</span>
                            <div className="text-white font-medium">{planet.orbitalPeriod}</div>
                          </div>
                          <div>
                            <span className="text-slate-400">Mass</span>
                            <div className="text-white font-medium text-xs">{planet.mass}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Solar System Comparison */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 border border-blue-500/30 rounded-3xl p-6 md:p-8"
            >
              <h3 className="text-2xl font-bold text-white text-center mb-6">Planet Comparison</h3>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left text-slate-400 p-3">Planet</th>
                      <th className="text-left text-slate-400 p-3">Diameter</th>
                      <th className="text-left text-slate-400 p-3">Gravity</th>
                      <th className="text-left text-slate-400 p-3">Moons</th>
                      <th className="text-left text-slate-400 p-3">Day Length</th>
                    </tr>
                  </thead>
                  <tbody>
                    {solarSystemPlanets.map((planet, i) => (
                      <motion.tr
                        key={planet.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors"
                      >
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${planet.color}`}></div>
                            <span className="text-white font-medium">{planet.name}</span>
                          </div>
                        </td>
                        <td className="p-3 text-slate-300">{planet.diameter}</td>
                        <td className="p-3 text-slate-300">{planet.gravity}</td>
                        <td className="p-3 text-slate-300">{planet.moons}</td>
                        <td className="p-3 text-slate-300">{planet.dayLength}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Black Holes Section */}
        <section id="black-holes" className="scroll-mt-24 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Section Header */}
            <div className="text-center mb-12">
              <motion.div
                className="inline-block mb-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-800 via-gray-900 to-black border-4 border-orange-500/50 shadow-2xl shadow-orange-500/30 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-black border-2 border-orange-400/30"></div>
                </div>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Black Holes
              </h2>
              <p className="text-slate-400 text-lg max-w-3xl mx-auto">
                The most extreme objects in the universe—where gravity is so intense that nothing,
                not even light, can escape. They warp space, stop time, and lurk at the heart of every galaxy.
              </p>
            </div>

            {/* Animated Black Hole Visualization */}
            <div className="mb-16">
              <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-700 overflow-hidden">
                {/* Animated Background Stars */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(50)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        opacity: [0.2, 1, 0.2],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>

                {/* Central Black Hole Animation */}
                <div className="relative flex justify-center items-center h-64 md:h-80">
                  {/* Accretion Disk Outer */}
                  <motion.div
                    className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full"
                    style={{
                      background: "conic-gradient(from 0deg, transparent, #f97316, #dc2626, #f97316, transparent)",
                      filter: "blur(8px)",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Accretion Disk Inner */}
                  <motion.div
                    className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full"
                    style={{
                      background: "conic-gradient(from 180deg, transparent, #fbbf24, #f97316, #fbbf24, transparent)",
                      filter: "blur(4px)",
                    }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Photon Ring */}
                  <motion.div
                    className="absolute w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-orange-400/50"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Event Horizon */}
                  <div className="absolute w-28 h-28 md:w-36 md:h-36 rounded-full bg-black shadow-2xl shadow-black border-2 border-orange-500/20" />

                  {/* Singularity */}
                  <motion.div
                    className="absolute w-4 h-4 rounded-full bg-white/20"
                    animate={{ scale: [1, 0.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />

                  {/* Relativistic Jets */}
                  <motion.div
                    className="absolute h-full w-3 bg-gradient-to-t from-transparent via-cyan-400 to-transparent opacity-60"
                    style={{ filter: "blur(2px)" }}
                    animate={{ scaleY: [0.8, 1, 0.8], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                <p className="text-center text-slate-400 text-sm mt-6">
                  Interactive visualization of a rotating black hole with accretion disk and relativistic jets
                </p>
              </div>
            </div>

            {/* Black Hole Anatomy */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white text-center mb-8">Anatomy of a Black Hole</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {blackHoleAnatomy.map((part, index) => (
                  <motion.div
                    key={part.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-5 border border-slate-700 hover:border-orange-500/50 transition-all"
                  >
                    <div className="text-3xl mb-3">{part.icon}</div>
                    <h4 className="text-lg font-bold text-white mb-2">{part.name}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{part.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Types of Black Holes */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white text-center mb-8">Types of Black Holes</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {blackHoleTypes.map((bh, index) => (
                  <motion.div
                    key={bh.type}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`bg-gradient-to-br ${bh.color} rounded-2xl p-6 border border-slate-700 relative overflow-hidden`}
                  >
                    {/* Decorative black hole */}
                    <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-black/50 border-2 border-white/10"></div>

                    <div className="relative">
                      <h4 className="text-xl font-bold text-white mb-2">{bh.type}</h4>
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <span className="text-slate-300">Mass:</span>
                          <div className="text-white font-medium">{bh.mass}</div>
                        </div>
                        <div>
                          <span className="text-slate-300">Size:</span>
                          <div className="text-white font-medium">{bh.size}</div>
                        </div>
                      </div>
                      <p className="text-white/80 text-sm mb-4">{bh.description}</p>
                      <div>
                        <span className="text-slate-300 text-xs">Examples:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {bh.examples.map((ex) => (
                            <span key={ex} className="px-2 py-1 bg-black/30 rounded-full text-white text-xs">
                              {ex}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Physics of Black Holes */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white text-center mb-8">The Physics</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {blackHolePhysics.map((physics, index) => (
                  <motion.div
                    key={physics.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700"
                  >
                    <h4 className={`text-lg font-bold mb-3 bg-gradient-to-r ${physics.color} bg-clip-text text-transparent`}>
                      {physics.title}
                    </h4>
                    <div className="bg-slate-900/50 rounded-xl p-3 mb-4 font-mono text-center">
                      <span className="text-orange-400 text-lg">{physics.equation}</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{physics.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Famous Black Holes */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white text-center mb-8">Famous Black Holes</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {famousBlackHoles.map((bh, index) => (
                  <motion.div
                    key={bh.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-orange-500/50 transition-all"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={bh.image}
                        alt={bh.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <h4 className="text-xl font-bold text-white">{bh.name}</h4>
                        <p className="text-orange-400 text-sm">{bh.location}</p>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <span className="text-slate-400">Mass:</span>
                          <div className="text-white font-medium">{bh.mass}</div>
                        </div>
                        <div>
                          <span className="text-slate-400">Distance:</span>
                          <div className="text-white font-medium">{bh.distance}</div>
                        </div>
                      </div>
                      <p className="text-slate-300 text-sm">{bh.fact}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Supermassive Black Holes & Galaxies */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-orange-500/10 via-red-500/10 to-orange-500/10 border border-orange-500/30 rounded-3xl p-6 md:p-10"
            >
              <h3 className="text-2xl font-bold text-white text-center mb-6">
                🌌 Black Holes at Galaxy Centers
              </h3>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    Virtually every large galaxy harbors a <span className="text-orange-400 font-semibold">supermassive black hole</span> at
                    its center. These cosmic giants contain millions to billions of solar masses and profoundly influence their host galaxies.
                  </p>

                  <div className="bg-slate-800/50 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">The M-sigma Relation</h4>
                    <p className="text-slate-400 text-sm">
                      Black hole mass correlates tightly with the velocity dispersion of stars in the galactic bulge.
                      This suggests galaxies and their black holes co-evolve—neither can exist as we see them without the other.
                    </p>
                  </div>

                  <div className="bg-slate-800/50 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Active Galactic Nuclei (AGN)</h4>
                    <p className="text-slate-400 text-sm">
                      When supermassive black holes actively accrete matter, they outshine their entire galaxy as quasars,
                      Seyfert galaxies, or blazars. AGN feedback regulates star formation across the galaxy.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-slate-800/50 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Our Milky Way's Black Hole</h4>
                    <p className="text-slate-400 text-sm">
                      Sagittarius A* sits 26,000 light-years away with 4 million solar masses. It's currently quiet,
                      but stars orbit it at incredible speeds—S2 reaches 3% of light speed at closest approach.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl p-4">
                    <h4 className="text-purple-300 font-semibold mb-2">💫 Mind-Blowing Fact</h4>
                    <p className="text-slate-300 text-sm">
                      When galaxies merge, their supermassive black holes eventually spiral together and merge too—releasing
                      more energy in gravitational waves during the final seconds than all the stars in the observable universe
                      emit in light during that time.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="bg-slate-900/50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-orange-400">~100B</div>
                      <div className="text-slate-400 text-xs">Galaxies in universe</div>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-orange-400">~100B</div>
                      <div className="text-slate-400 text-xs">Supermassive BHs</div>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-orange-400">10¹⁰⁰</div>
                      <div className="text-slate-400 text-xs">Years to evaporate</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Space Telescopes Section */}
        <section id="space-telescopes" className="scroll-mt-24 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Section Header */}
            <div className="text-center mb-12">
              <motion.div
                className="inline-block mb-4 relative"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Animated telescope with light rays */}
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-2xl shadow-amber-500/30">
                    <Telescope className="w-10 h-10 text-white" />
                  </div>
                  {/* Light rays */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-8 bg-gradient-to-t from-amber-400 to-transparent rounded-full"
                      style={{
                        top: "-30px",
                        left: "50%",
                        transformOrigin: "bottom center",
                        transform: `translateX(-50%) rotate(${-30 + i * 12}deg)`,
                      }}
                      animate={{ opacity: [0.3, 0.8, 0.3], scaleY: [0.8, 1, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
                </div>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Space Telescopes
              </h2>
              <p className="text-slate-400 text-lg max-w-3xl mx-auto">
                Our windows to the universe—from Hubble's pioneering 34-year mission to JWST's revolutionary infrared vision.
                Space-based observatories reveal what Earth-bound telescopes cannot see.
              </p>
            </div>

            {/* Why Space Telescopes? */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white text-center mb-8">Why Launch Telescopes to Space?</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {spaceTelescopeAdvantages.map((advantage, index) => (
                  <motion.div
                    key={advantage.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-5 border border-slate-700 hover:border-amber-500/50 transition-all"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${advantage.color} flex items-center justify-center mb-4`}>
                      <advantage.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{advantage.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{advantage.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Electromagnetic Spectrum */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white text-center mb-4">The Electromagnetic Spectrum</h3>
              <p className="text-slate-400 text-center mb-8 max-w-2xl mx-auto">
                Earth's atmosphere blocks most wavelengths of light. Space telescopes can observe the full spectrum.
              </p>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 overflow-x-auto">
                <div className="flex gap-1 min-w-max">
                  {wavelengthSpectrum.map((band, index) => (
                    <motion.div
                      key={band.name}
                      initial={{ opacity: 0, scaleY: 0 }}
                      whileInView={{ opacity: 1, scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex flex-col items-center"
                    >
                      <div
                        className={`w-20 h-16 ${band.color} rounded-t-lg flex items-center justify-center relative`}
                      >
                        {band.blocked === true && !band.telescope && (
                          <div className="absolute inset-0 bg-black/60 rounded-t-lg flex items-center justify-center">
                            <span className="text-xs text-red-400">Blocked</span>
                          </div>
                        )}
                        {band.blocked === "Partial" && !band.telescope && (
                          <div className="absolute inset-0 bg-black/30 rounded-t-lg flex items-center justify-center">
                            <span className="text-xs text-yellow-400">Partial</span>
                          </div>
                        )}
                        {band.telescope && (
                          <div className={`absolute inset-0 ${band.blocked === true ? 'bg-black/60' : band.blocked === "Partial" ? 'bg-black/30' : ''} rounded-t-lg flex items-center justify-center`}>
                            <span className={`text-xs font-medium ${band.blocked === true ? 'text-amber-400' : band.blocked === "Partial" ? 'text-yellow-300' : 'text-white'}`}>{band.telescope}</span>
                          </div>
                        )}
                      </div>
                      <div className="bg-slate-900 p-2 rounded-b-lg w-20 text-center">
                        <div className="text-white text-xs font-medium">{band.name}</div>
                        <div className="text-slate-500 text-[10px]">{band.range}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="flex justify-center gap-6 mt-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-black/60 rounded"></div>
                    <span className="text-slate-400">Blocked by atmosphere</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-black/30 rounded"></div>
                    <span className="text-slate-400">Partially blocked</span>
                  </div>
                </div>
              </div>
            </div>

            {/* JWST vs Hubble Comparison */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white text-center mb-8">JWST vs Hubble: Side by Side</h3>
              <div className="grid lg:grid-cols-2 gap-6">
                {/* JWST Card */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-br ${spaceTelescopeComparison.jwst.color} rounded-3xl overflow-hidden border border-amber-500/30`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={spaceTelescopeComparison.jwst.image}
                      alt="JWST First Deep Field"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <h4 className="text-2xl font-bold text-white">{spaceTelescopeComparison.jwst.name}</h4>
                      <p className="text-amber-300 text-sm">Launched: {spaceTelescopeComparison.jwst.launchDate}</p>
                    </div>
                  </div>
                  <div className="p-6 bg-slate-900/80">
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-slate-400">Mirror Size</span>
                        <div className="text-white font-semibold">{spaceTelescopeComparison.jwst.mirrorSize}</div>
                      </div>
                      <div>
                        <span className="text-slate-400">Wavelengths</span>
                        <div className="text-amber-400 font-semibold text-xs">{spaceTelescopeComparison.jwst.wavelengths}</div>
                      </div>
                      <div>
                        <span className="text-slate-400">Location</span>
                        <div className="text-white font-semibold text-xs">{spaceTelescopeComparison.jwst.location}</div>
                      </div>
                      <div>
                        <span className="text-slate-400">Temperature</span>
                        <div className="text-white font-semibold">{spaceTelescopeComparison.jwst.operatingTemp}</div>
                      </div>
                    </div>
                    <div className="border-t border-slate-700 pt-4">
                      <h5 className="text-white font-semibold mb-2">Primary Missions:</h5>
                      <ul className="space-y-1">
                        {spaceTelescopeComparison.jwst.primaryMissions.map((mission, i) => (
                          <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                            <span className="text-amber-400">•</span>
                            {mission}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Hubble Card */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-br ${spaceTelescopeComparison.hubble.color} rounded-3xl overflow-hidden border border-blue-500/30`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={spaceTelescopeComparison.hubble.image}
                      alt="Hubble Deep Field"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <h4 className="text-2xl font-bold text-white">{spaceTelescopeComparison.hubble.name}</h4>
                      <p className="text-blue-300 text-sm">Launched: {spaceTelescopeComparison.hubble.launchDate}</p>
                    </div>
                  </div>
                  <div className="p-6 bg-slate-900/80">
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-slate-400">Mirror Size</span>
                        <div className="text-white font-semibold">{spaceTelescopeComparison.hubble.mirrorSize}</div>
                      </div>
                      <div>
                        <span className="text-slate-400">Wavelengths</span>
                        <div className="text-blue-400 font-semibold text-xs">{spaceTelescopeComparison.hubble.wavelengths}</div>
                      </div>
                      <div>
                        <span className="text-slate-400">Location</span>
                        <div className="text-white font-semibold text-xs">{spaceTelescopeComparison.hubble.location}</div>
                      </div>
                      <div>
                        <span className="text-slate-400">Temperature</span>
                        <div className="text-white font-semibold">{spaceTelescopeComparison.hubble.operatingTemp}</div>
                      </div>
                    </div>
                    <div className="border-t border-slate-700 pt-4">
                      <h5 className="text-white font-semibold mb-2">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {spaceTelescopeComparison.hubble.primaryMissions.map((mission, i) => (
                          <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                            <span className="text-blue-400">•</span>
                            {mission}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Key Differences */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700"
              >
                <h4 className="text-xl font-bold text-white mb-4 text-center">Key Differences</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-amber-400 mb-2">2.7×</div>
                    <div className="text-slate-400 text-sm">JWST mirror is larger, collecting 6× more light</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-amber-400 mb-2">-248°C</div>
                    <div className="text-slate-400 text-sm">Temperature difference (JWST must be ultra-cold for infrared)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-amber-400 mb-2">100×</div>
                    <div className="text-slate-400 text-sm">JWST is 100× more sensitive to faint objects</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* JWST Discoveries */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white text-center mb-8">🔭 Groundbreaking JWST Discoveries</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {jameWebbDiscoveries.map((discovery, index) => (
                  <motion.div
                    key={discovery.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-amber-500/50 transition-all"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <motion.img
                        src={discovery.image}
                        alt={discovery.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                      <div className="absolute top-3 right-3 px-2 py-1 bg-amber-500 rounded-full text-xs font-medium text-black">
                        {discovery.date}
                      </div>
                    </div>
                    <div className="p-5">
                      <h4 className="text-lg font-bold text-white mb-2">{discovery.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{discovery.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* JWST Sunshield Animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border border-amber-500/30 rounded-3xl p-6 md:p-10"
            >
              <h3 className="text-2xl font-bold text-white text-center mb-6">
                ☀️ JWST's Revolutionary Sunshield
              </h3>

              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Animated Sunshield Visualization */}
                <div className="relative h-64 flex items-center justify-center">
                  {/* Sunshield layers */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-sm bg-gradient-to-r from-amber-200/20 via-amber-100/30 to-amber-200/20 border border-amber-300/30"
                      style={{
                        width: `${200 - i * 20}px`,
                        height: `${120 - i * 12}px`,
                        transform: `perspective(500px) rotateX(${60 - i * 5}deg) translateZ(${i * 15}px)`,
                      }}
                      animate={{
                        rotateY: [0, 2, 0, -2, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                  {/* Mirror */}
                  <motion.div
                    className="absolute w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full"
                    style={{ transform: "translateY(-80px)" }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-full h-full rounded-full border-4 border-amber-300/50 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-amber-200/50"></div>
                    </div>
                  </motion.div>
                </div>

                <div className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    JWST's tennis court-sized sunshield is critical to its mission. Made of 5 layers of
                    <span className="text-amber-400 font-semibold"> kapton</span>, each thinner than a human hair,
                    it blocks the Sun's heat so the telescope can reach temperatures below -233°C.
                  </p>

                  <div className="bg-slate-800/50 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2">Why So Cold?</h4>
                    <p className="text-slate-400 text-sm">
                      Infrared light is heat radiation. To detect faint infrared signals from distant galaxies,
                      JWST itself must be colder than the objects it observes—otherwise its own heat would
                      blind its sensors.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-amber-400">85°C</div>
                      <div className="text-slate-400 text-xs">Sun-facing side</div>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-cyan-400">-233°C</div>
                      <div className="text-slate-400 text-xs">Mirror side</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl p-4">
                    <h4 className="text-purple-300 font-semibold mb-2">🌟 Amazing Fact</h4>
                    <p className="text-slate-300 text-sm">
                      JWST's deployment involved 344 single points of failure—any one could have ended the mission.
                      Every single one worked perfectly, making it the most complex space deployment in history.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Solar Eclipses Section */}
        <section id="solar-eclipses" className="scroll-mt-24 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Section Header with Animated Eclipse */}
            <div className="text-center mb-12">
              <div className="relative inline-block mb-6">
                {/* Animated Eclipse */}
                <div className="relative w-32 h-32">
                  {/* Sun */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-500 to-orange-500"
                    animate={{
                      boxShadow: [
                        "0 0 60px 20px rgba(251, 191, 36, 0.4)",
                        "0 0 80px 30px rgba(251, 191, 36, 0.6)",
                        "0 0 60px 20px rgba(251, 191, 36, 0.4)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  {/* Corona rays */}
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-20 bg-gradient-to-t from-yellow-400/80 to-transparent"
                      style={{
                        left: "50%",
                        top: "50%",
                        transformOrigin: "center bottom",
                        transform: `translateX(-50%) translateY(-100%) rotate(${i * 30}deg)`,
                      }}
                      animate={{ opacity: [0.3, 0.7, 0.3], scaleY: [0.8, 1, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                    />
                  ))}
                  {/* Moon passing */}
                  <motion.div
                    className="absolute w-28 h-28 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl"
                    style={{ top: "2px", left: "2px" }}
                    animate={{
                      x: [-80, 0, 80],
                      opacity: [0, 1, 0],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Solar Eclipses
              </h2>
              <p className="text-slate-400 text-lg max-w-3xl mx-auto">
                When the Moon passes between Earth and the Sun, casting its shadow upon our world—one of nature's
                most awe-inspiring celestial events.
              </p>
            </div>

            {/* The Cosmic Coincidence */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-yellow-500/10 border border-yellow-500/30 rounded-3xl p-6 md:p-10"
            >
              <h3 className="text-2xl font-bold text-white text-center mb-6">🎯 The Perfect Alignment</h3>
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Size Comparison Animation */}
                <div className="relative h-48 flex items-center justify-center">
                  <div className="flex items-center gap-8">
                    {/* Sun */}
                    <div className="text-center">
                      <motion.div
                        className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-300 to-orange-500 mx-auto mb-2"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <div className="text-yellow-400 font-bold">Sun</div>
                      <div className="text-slate-400 text-xs">1,392,700 km</div>
                      <div className="text-slate-500 text-xs">150 million km away</div>
                    </div>

                    <div className="text-4xl text-slate-500">=</div>

                    {/* Moon */}
                    <div className="text-center">
                      <motion.div
                        className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 mx-auto mb-2"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      />
                      <div className="text-gray-300 font-bold">Moon</div>
                      <div className="text-slate-400 text-xs">3,474 km</div>
                      <div className="text-slate-500 text-xs">384,400 km away</div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 w-full text-center">
                    <span className="text-yellow-400 font-semibold">Same apparent size in sky: ~0.5°</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">
                    The Sun is <span className="text-yellow-400 font-semibold">400 times larger</span> than the Moon,
                    but it's also <span className="text-yellow-400 font-semibold">400 times farther away</span>.
                    This cosmic coincidence means they appear almost exactly the same size in our sky!
                  </p>
                  <p className="text-slate-400 text-sm">
                    This perfect match is unique to Earth among all known planets. It won't last forever—the Moon
                    is slowly drifting away at 3.8 cm/year. In about 600 million years, total solar eclipses will
                    no longer be possible.
                  </p>
                  <div className="bg-slate-800/50 rounded-xl p-4">
                    <div className="text-purple-400 font-semibold mb-1">💫 Rare Window</div>
                    <p className="text-slate-400 text-sm">
                      We exist in a special time in Earth's history when total eclipses are possible.
                      Dinosaurs saw larger eclipses; far-future humans will only see annular ones.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Types of Eclipses */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white text-center mb-8">Types of Solar Eclipses</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {eclipseTypes.map((eclipse, index) => (
                  <motion.div
                    key={eclipse.type}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className={`bg-gradient-to-br ${eclipse.color} rounded-2xl p-6 border border-slate-700 relative overflow-hidden`}
                  >
                    <div className="absolute -right-4 -top-4 text-6xl opacity-20">{eclipse.icon}</div>
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">{eclipse.icon}</span>
                        <h4 className="text-xl font-bold text-white">{eclipse.type}</h4>
                      </div>
                      <p className="text-white/80 text-sm mb-4">{eclipse.description}</p>
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="bg-black/20 rounded-lg p-2">
                          <div className="text-slate-300">Frequency</div>
                          <div className="text-white font-medium">{eclipse.frequency}</div>
                        </div>
                        <div className="bg-black/20 rounded-lg p-2">
                          <div className="text-slate-300">Duration</div>
                          <div className="text-white font-medium">{eclipse.duration}</div>
                        </div>
                        <div className="bg-black/20 rounded-lg p-2">
                          <div className="text-slate-300">Visibility</div>
                          <div className="text-white font-medium">{eclipse.visibility}</div>
                        </div>
                        <div className="bg-black/20 rounded-lg p-2">
                          <div className="text-slate-300">Safe Viewing</div>
                          <div className="text-white font-medium text-[10px]">{eclipse.safeToView}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Eclipse Science */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white text-center mb-8">The Science Behind Eclipses</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {eclipseScience.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-5 border border-slate-700 hover:border-yellow-500/50 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">{item.icon}</span>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{item.content}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Eclipse Phenomena */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white text-center mb-4">✨ What You'll See During Totality</h3>
              <p className="text-slate-400 text-center mb-8 max-w-2xl mx-auto">
                A total solar eclipse offers unique phenomena visible nowhere else in astronomy.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {eclipsePhenomena.map((phenomenon, index) => (
                  <motion.div
                    key={phenomenon.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700 hover:border-yellow-500/30 transition-all"
                  >
                    <h4 className="text-yellow-400 font-bold mb-2">{phenomenon.name}</h4>
                    <p className="text-slate-400 text-sm mb-3">{phenomenon.description}</p>
                    <div className="flex items-center gap-2 text-xs">
                      <Clock className="w-3 h-3 text-slate-500" />
                      <span className="text-slate-500">{phenomenon.timing}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Historic Eclipses Timeline */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white text-center mb-8">📜 Eclipses That Changed History</h3>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-yellow-500 via-orange-500 to-red-500 hidden md:block"></div>

                <div className="space-y-8">
                  {historicEclipses.map((eclipse, index) => (
                    <motion.div
                      key={eclipse.year}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 }}
                      className={`flex flex-col md:flex-row items-center gap-6 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                        }`}
                    >
                      <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-5 border border-slate-700">
                          <div className="text-yellow-400 font-bold text-2xl mb-1">{eclipse.year}</div>
                          <h4 className="text-white font-semibold mb-2">{eclipse.event}</h4>
                          <p className="text-slate-400 text-sm mb-2">{eclipse.description}</p>
                          <div className="flex items-center gap-1 text-xs text-slate-500">
                            <MapPin className="w-3 h-3" />
                            {eclipse.location}
                          </div>
                        </div>
                      </div>

                      <div className="hidden md:flex w-12 h-12 rounded-full bg-slate-900 border-4 border-yellow-500 items-center justify-center z-10">
                        <Sun className="w-5 h-5 text-yellow-400" />
                      </div>

                      <div className="flex-1 hidden md:block"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Safety Warning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-red-500/20 via-orange-500/20 to-red-500/20 border border-red-500/50 rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">⚠️</div>
                <div>
                  <h4 className="text-xl font-bold text-red-400 mb-2">Eclipse Safety</h4>
                  <p className="text-slate-300 mb-3">
                    <strong>Never look directly at the Sun</strong> without certified eclipse glasses or solar filters—not even during a partial eclipse.
                    Regular sunglasses are NOT safe. Looking at the Sun for even a few seconds can cause permanent eye damage or blindness.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-slate-900/50 rounded-lg p-3">
                      <div className="text-green-400 font-semibold mb-1">✓ Safe Methods</div>
                      <ul className="text-slate-400 space-y-1">
                        <li>• ISO 12312-2 certified eclipse glasses</li>
                        <li>• Solar telescope filters</li>
                        <li>• Pinhole projectors</li>
                        <li>• Welder's glass (#14 shade)</li>
                      </ul>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-3">
                      <div className="text-red-400 font-semibold mb-1">✗ NOT Safe</div>
                      <ul className="text-slate-400 space-y-1">
                        <li>• Regular sunglasses</li>
                        <li>• Camera filters</li>
                        <li>• Smoked glass</li>
                        <li>• CDs or DVDs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Galaxies Section */}
        <section id="galaxies" className="scroll-mt-24 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Hero */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.8 }}
                className="inline-block mb-6"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mx-auto animate-pulse">
                  <Orbit className="w-12 h-12 text-white" />
                </div>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Galaxies
              </h2>
              <p className="text-slate-400 text-lg max-w-3xl mx-auto">
                Vast cosmic cities of stars, gas, dust, and dark matter—the building blocks of our universe.
                Each galaxy tells a story of billions of years of cosmic evolution.
              </p>
            </div>

            {/* Animated Galaxy Visualization */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative h-80 md:h-96 mb-16 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 border border-purple-500/20"
            >
              {/* Central Bulge */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-radial from-yellow-200 via-yellow-500/50 to-transparent blur-sm" />
              </motion.div>

              {/* Spiral Arms */}

              <motion.div

                animate={{ rotate: 360 }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                className="flex flex-col items-center justify-center absolute  w-full h-full"
                style={{ transform: `rotate(${360}deg)` }}
              >
                <Image src="/galaxy2.png" alt="Spiral Arms" width={300} height={300} />


              </motion.div>


              {/* Stars in galaxy */}
              {Array.from({ length: 100 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, delay: Math.random() * 2 }}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                />
              ))}

              {/* Label */}
              <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                <p className="text-white text-sm font-medium">Spiral Galaxy Animation</p>
                <p className="text-purple-300 text-xs">~200-400 billion stars like our Milky Way</p>
              </div>
            </motion.div>

            {/* Hubble Sequence / Tuning Fork */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white text-center mb-4">The Hubble Tuning Fork</h3>
              <p className="text-slate-400 text-center mb-8 max-w-2xl mx-auto">
                Edwin Hubble&apos;s classification scheme organizes galaxies by shape. Despite the &quot;fork&quot; appearance,
                this doesn&apos;t represent evolution—galaxies don&apos;t progress left to right.
              </p>
              <div className="overflow-x-auto pb-4">
                <div className="flex items-center justify-center min-w-max gap-2 px-4">
                  {hubbleSequence.map((item, index) => (
                    <motion.div
                      key={item.type}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className={`flex flex-col items-center p-3 rounded-xl bg-gradient-to-br ${index < 3 ? "from-red-500/20 to-orange-500/10" :
                        index === 3 ? "from-yellow-500/20 to-amber-500/10" :
                          index < 7 ? "from-blue-500/20 to-cyan-500/10" :
                            index < 10 ? "from-purple-500/20 to-pink-500/10" :
                              "from-green-500/20 to-teal-500/10"
                        } border border-slate-700 min-w-[100px]`}
                    >
                      <span className="text-2xl mb-1">
                        {index < 3 ? "⚪" : index === 3 ? "🔘" : index < 7 ? "🌀" : index < 10 ? "🌀" : "💫"}
                      </span>
                      <span className="text-white font-bold text-sm">{item.type}</span>
                      <span className="text-slate-400 text-xs text-center">{item.shape}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center mt-4 gap-8 text-xs text-slate-500">
                <span>← Elliptical</span>
                <span>Lenticular</span>
                <span>Spiral →</span>
                <span>Irregular</span>
              </div>
            </div>

            {/* Galaxy Types Grid */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white text-center mb-8">Galaxy Types</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {galaxyTypes.map((galaxy, index) => (
                  <motion.div
                    key={galaxy.type}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-slate-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-500 transition-all"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={galaxy.image}
                        alt={galaxy.type}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${galaxy.color} opacity-30`} />
                      <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-2xl mr-2">{galaxy.symbol}</span>
                        <span className="text-white font-bold">{galaxy.type}</span>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-slate-300 text-sm">{galaxy.percentage}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-slate-300 mb-4">{galaxy.description}</p>
                      <div className="mb-4">
                        <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">Characteristics</p>
                        <div className="flex flex-wrap gap-2">
                          {galaxy.characteristics.map((char) => (
                            <span key={char} className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-300">
                              {char}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">Examples</p>
                        <div className="flex flex-wrap gap-2">
                          {galaxy.examples.map((ex) => (
                            <span key={ex} className={`px-2 py-1 bg-gradient-to-r ${galaxy.color} bg-opacity-20 rounded text-xs text-white`}>
                              {ex}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Why Spiral Galaxies Matter */}
            <div className="mb-16">
              <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 rounded-2xl p-8 border border-purple-500/30">
                <h3 className="text-3xl font-bold text-white text-center mb-4">
                  🌀 Why Spiral Galaxies Are a Big Deal
                </h3>
                <p className="text-slate-300 text-center max-w-3xl mx-auto mb-10">
                  Spiral galaxies like our Milky Way hold special significance in astronomy—not just because
                  we live in one, but because they reveal fundamental truths about the universe.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {spiralGalaxyFacts.map((fact, index) => (
                    <motion.div
                      key={fact.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">{fact.icon}</span>
                        <h4 className="text-xl font-bold text-white">{fact.title}</h4>
                      </div>
                      <p className="text-slate-300 leading-relaxed">{fact.content}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Dark Matter Evidence */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mt-10 bg-slate-900/80 rounded-xl p-6 border border-purple-500/30"
                >
                  <h4 className="text-xl font-bold text-purple-300 mb-4 text-center">
                    🔬 The Rotation Curve Mystery
                  </h4>
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-1">
                      <p className="text-slate-300 mb-4">
                        When Vera Rubin measured how fast stars orbit in spiral galaxies, she found something
                        shocking: stars at the edges move just as fast as those near the center.
                      </p>
                      <p className="text-slate-300">
                        According to Kepler&apos;s laws, outer stars should orbit slower (like planets in our
                        solar system). The only explanation: galaxies are embedded in massive halos of
                        invisible <span className="text-purple-400 font-semibold">dark matter</span>—making
                        up ~85% of all matter in the universe.
                      </p>
                    </div>
                    <div className="w-full md:w-64 h-48 bg-slate-800 rounded-xl p-4">
                      <p className="text-slate-500 text-xs text-center mb-2">Rotation Curve</p>
                      <div className="relative h-32">
                        {/* Expected curve (dashed) */}
                        <svg className="absolute inset-0 w-full h-full">
                          <path
                            d="M 20 100 Q 80 30 240 80"
                            stroke="rgba(100,100,100,0.5)"
                            strokeWidth="2"
                            strokeDasharray="5,5"
                            fill="none"
                          />
                          <path
                            d="M 20 100 Q 60 40 240 35"
                            stroke="rgba(168,85,247,1)"
                            strokeWidth="3"
                            fill="none"
                          />
                        </svg>
                        <div className="absolute bottom-0 left-2 text-xs text-slate-500">Center</div>
                        <div className="absolute bottom-0 right-2 text-xs text-slate-500">Edge</div>
                        <div className="absolute top-0 right-2 text-xs text-purple-400">Observed</div>
                        <div className="absolute top-8 right-2 text-xs text-slate-500">Expected</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Galaxy Size Comparison */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white text-center mb-8">Galaxy Size Spectrum</h3>
              <div className="space-y-4">
                {galaxySizes.map((size, index) => (
                  <motion.div
                    key={size.name}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-32 text-right">
                      <span className="text-white font-medium">{size.name}</span>
                    </div>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(index + 1) * 18}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2, duration: 0.8 }}
                      className={`h-8 ${size.color} rounded-full flex items-center justify-end px-3`}
                    >
                      <span className="text-white text-xs font-medium whitespace-nowrap">{size.example}</span>
                    </motion.div>
                    <div className="text-slate-400 text-sm hidden md:block">
                      <span>{size.diameter}</span>
                      <span className="mx-2">•</span>
                      <span>{size.stars} stars</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <p className="text-slate-500 text-sm">
                  IC 1101 is so large that if placed at the Milky Way&apos;s center, it would engulf Andromeda 2.5 million light-years away.
                </p>
              </div>
            </div>

            {/* Famous Galaxies */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white text-center mb-8">Famous Galaxies</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {famousGalaxies.map((galaxy, index) => (
                  <motion.div
                    key={galaxy.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-700"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={galaxy.image}
                        alt={galaxy.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h4 className="text-2xl font-bold text-white">{galaxy.name}</h4>
                        <p className="text-purple-300">{galaxy.type}</p>
                      </div>
                    </div>
                    <div className="p-5 space-y-3">
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="bg-slate-800 rounded-lg p-2">
                          <p className="text-xs text-slate-500">Distance</p>
                          <p className="text-white text-sm font-medium">{galaxy.distance}</p>
                        </div>
                        <div className="bg-slate-800 rounded-lg p-2">
                          <p className="text-xs text-slate-500">Diameter</p>
                          <p className="text-white text-sm font-medium">{galaxy.diameter}</p>
                        </div>
                        <div className="bg-slate-800 rounded-lg p-2">
                          <p className="text-xs text-slate-500">Stars</p>
                          <p className="text-white text-sm font-medium">{galaxy.stars}</p>
                        </div>
                      </div>
                      <p className="text-slate-300 text-sm leading-relaxed">{galaxy.fact}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Andromeda Collision */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-2xl p-8 border border-indigo-500/30 mb-16"
            >
              <h3 className="text-2xl font-bold text-white text-center mb-4">
                🔮 The Coming Collision: Milkomeda
              </h3>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 space-y-4">
                  <p className="text-slate-300">
                    In approximately <span className="text-purple-400 font-bold">4.5 billion years</span>,
                    the Milky Way and Andromeda galaxies will collide and merge into a new giant elliptical
                    galaxy nicknamed &quot;Milkomeda&quot; or &quot;Milkdromeda.&quot;
                  </p>
                  <p className="text-slate-300">
                    Despite containing hundreds of billions of stars each, the space between stars is so
                    vast that <span className="text-indigo-400">direct stellar collisions will be extremely rare</span>.
                    Our solar system will likely survive, though it may be flung to a different orbit.
                  </p>
                  <p className="text-slate-300">
                    The collision has already begun—astronomers have detected a halo of hot gas around
                    Andromeda that&apos;s touching our own galaxy&apos;s halo.
                  </p>
                </div>
                <div className="w-full md:w-72">
                  {/* Collision Animation */}
                  <div className="relative h-48 bg-slate-900 rounded-xl overflow-hidden">
                    <motion.div
                      animate={{ x: [0, 40, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-1/2 left-1/4 transform -translate-y-1/2"
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-radial from-blue-400 to-blue-600 blur-sm" />
                      <p className="text-xs text-blue-300 text-center mt-1">Milky Way</p>
                    </motion.div>
                    <motion.div
                      animate={{ x: [0, -40, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-1/2 right-1/4 transform -translate-y-1/2"
                    >
                      <div className="w-20 h-20 rounded-full bg-gradient-radial from-purple-400 to-purple-600 blur-sm" />
                      <p className="text-xs text-purple-300 text-center mt-1">Andromeda</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Did You Know */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 rounded-2xl p-8 border border-pink-500/20"
            >
              <h3 className="text-2xl font-bold text-white text-center mb-6">
                🤯 Mind-Blowing Galaxy Facts
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { fact: "There are more stars in the observable universe than grains of sand on all Earth's beaches—about 10²⁴ stars across 2 trillion galaxies.", icon: "⭐" },
                  { fact: "The light from distant galaxies has traveled for billions of years to reach us—we see them as they were in the ancient past.", icon: "💫" },
                  { fact: "Galaxies are mostly empty space. If the Sun were a grain of sand, the nearest star would be 4 miles away.", icon: "🌌" },
                  { fact: "The supermassive black hole at our galaxy's center (Sgr A*) has a mass of 4 million Suns but would fit inside Mercury's orbit.", icon: "🕳️" },
                  { fact: "Our galaxy is moving through space at 1.3 million mph toward 'The Great Attractor'—a mysterious gravitational anomaly.", icon: "🎯" },
                  { fact: "A 'galactic year'—one orbit of the Sun around the Milky Way—takes 230 million Earth years. The Sun has orbited only 20 times since forming.", icon: "🔄" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-slate-900/50 rounded-xl p-4 border border-slate-700"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <p className="text-slate-300 text-sm mt-2">{item.fact}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </motion.div>
        </section>

        {/* Pulsars Section */}
        <section id="pulsars" className="scroll-mt-24 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Section Header */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.8 }}
                className="inline-block mb-6"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto shadow-lg shadow-cyan-500/50 relative">
                  <Radio className="w-12 h-12 text-white" />
                  {/* Animated pulsar beams */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    <div className="absolute top-0 left-1/2 w-1 h-8 bg-gradient-to-t from-cyan-400 to-transparent transform -translate-x-1/2 -translate-y-full" />
                    <div className="absolute bottom-0 left-1/2 w-1 h-8 bg-gradient-to-b from-cyan-400 to-transparent transform -translate-x-1/2 translate-y-full" />
                  </motion.div>
                </div>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Pulsars
              </h2>
              <p className="text-slate-400 text-lg max-w-3xl mx-auto">
                Cosmic lighthouses spinning at impossible speeds—the ultra-dense remnants of massive stars
                that beam radiation across the universe with clock-like precision.
              </p>
            </div>

            {/* What is a Pulsar? */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30"
              >
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-3xl">🌟</span>
                  What is a Pulsar?
                </h3>
                <p className="text-slate-300 mb-4">
                  A pulsar is a rapidly rotating <span className="text-cyan-400 font-semibold">neutron star</span>—the
                  collapsed core of a massive star that exploded as a supernova. These stellar corpses are incredibly
                  dense: a teaspoon of neutron star material weighs about <span className="text-cyan-400 font-semibold">6 billion tons</span>.
                </p>
                <p className="text-slate-300 mb-4">
                  Pulsars emit beams of electromagnetic radiation from their magnetic poles. As the star spins, these
                  beams sweep across space like lighthouse beams. When a beam crosses Earth, we detect a pulse—hence
                  the name &quot;pulsar.&quot;
                </p>
                <div className="bg-cyan-500/10 rounded-xl p-4 border border-cyan-500/20">
                  <p className="text-cyan-300 text-sm">
                    <span className="font-bold">Discovery:</span> First pulsar (CP 1919) discovered in 1967 by
                    Jocelyn Bell Burnell and Antony Hewish. The signal was so regular they initially nicknamed
                    it &quot;LGM-1&quot; (Little Green Men)!
                  </p>
                </div>
              </motion.div>

              {/* Animated Pulsar Visualization */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-80 bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-cyan-500/30 overflow-hidden"
              >
                {/* Starfield background */}
                {Array.from({ length: 50 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full opacity-50"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                  />
                ))}

                {/* Central neutron star */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
                    className="relative"
                  >
                    {/* Neutron star core */}
                    <div className="w-16 h-16 rounded-full bg-gradient-radial from-white via-cyan-300 to-cyan-600 shadow-lg shadow-cyan-500/50" />

                    {/* Magnetic field lines */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-cyan-500/30 rounded-full" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-cyan-500/20 rounded-full" />

                    {/* Radiation beams */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 w-2 origin-bottom"
                      style={{
                        height: "150px",
                        background: "linear-gradient(to top, rgba(34,211,238,0.8), transparent)",
                        transform: "translate(-50%, -100%) rotate(-15deg)",
                      }}
                    />
                    <motion.div
                      className="absolute top-1/2 left-1/2 w-2 origin-top"
                      style={{
                        height: "150px",
                        background: "linear-gradient(to bottom, rgba(34,211,238,0.8), transparent)",
                        transform: "translate(-50%, 0) rotate(-15deg)",
                      }}
                    />
                  </motion.div>
                </div>

                {/* Labels */}
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <p className="text-white text-sm font-medium">Pulsar Animation</p>
                  <p className="text-cyan-300 text-xs">Beams sweep as star rotates</p>
                </div>

                {/* Pulse indicator */}
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="absolute top-4 right-4 flex items-center gap-2"
                >
                  <div className="w-3 h-3 bg-cyan-400 rounded-full" />
                  <span className="text-cyan-400 text-sm font-mono">PULSE</span>
                </motion.div>
              </motion.div>
            </div>

            {/* Pulsar Properties */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white text-center mb-8">
                ⚡ Extreme Properties of Pulsars
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    property: "Size",
                    value: "~20 km",
                    detail: "Diameter—about the size of a city",
                    icon: "📏",
                    color: "from-blue-500 to-cyan-600",
                  },
                  {
                    property: "Mass",
                    value: "1.4-2 M☉",
                    detail: "1.4 to 2 times the Sun's mass",
                    icon: "⚖️",
                    color: "from-purple-500 to-pink-600",
                  },
                  {
                    property: "Density",
                    value: "10¹⁷ kg/m³",
                    detail: "A sugar cube = 1 billion tons",
                    icon: "🧱",
                    color: "from-orange-500 to-red-600",
                  },
                  {
                    property: "Spin Rate",
                    value: "Up to 716 Hz",
                    detail: "716 rotations per SECOND",
                    icon: "🌀",
                    color: "from-green-500 to-emerald-600",
                  },
                  {
                    property: "Magnetic Field",
                    value: "10⁸-10¹⁵ T",
                    detail: "Trillions of times Earth's field",
                    icon: "🧲",
                    color: "from-red-500 to-rose-600",
                  },
                  {
                    property: "Surface Gravity",
                    value: "10¹¹ m/s²",
                    detail: "100 billion times Earth's gravity",
                    icon: "⬇️",
                    color: "from-amber-500 to-yellow-600",
                  },
                  {
                    property: "Temperature",
                    value: "~10⁶ K",
                    detail: "Surface temperature of 1 million Kelvin",
                    icon: "🔥",
                    color: "from-pink-500 to-fuchsia-600",
                  },
                  {
                    property: "Precision",
                    value: "10⁻¹⁵ s",
                    detail: "More accurate than atomic clocks",
                    icon: "⏱️",
                    color: "from-cyan-500 to-teal-600",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.property}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`bg-gradient-to-br ${item.color} bg-opacity-20 rounded-xl p-4 border border-slate-700 hover:border-slate-500 transition-all text-center`}
                  >
                    <span className="text-3xl">{item.icon}</span>
                    <h4 className="text-white font-bold mt-2">{item.property}</h4>
                    <p className="text-2xl font-mono text-cyan-300 my-1">{item.value}</p>
                    <p className="text-slate-400 text-xs">{item.detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Types of Pulsars */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white text-center mb-8">
                🔭 Types of Pulsars
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    type: "Radio Pulsars",
                    description: "The most common type. Emit radio waves detected by radio telescopes. Periods range from milliseconds to seconds. Over 3,000 known.",
                    image: "/radioPulsars.jpg",
                    period: "1 ms - 10 s",
                    color: "border-blue-500",
                    features: ["Detected via radio telescopes", "Gradual spin-down over time", "Powered by rotation"],
                  },
                  {
                    type: "Millisecond Pulsars",
                    description: "Ultra-fast pulsars spinning hundreds of times per second. 'Recycled' by accreting matter from a companion star, which spins them up.",
                    image: "/milsecondPulsar.jpg",
                    period: "1-10 ms",
                    color: "border-green-500",
                    features: ["Spun up by companion stars", "Extremely stable timing", "Used for gravitational wave detection"],
                  },
                  {
                    type: "Magnetars",
                    description: "Neutron stars with magnetic fields 1000× stronger than typical pulsars. Emit X-rays and gamma rays. Can cause 'starquakes' on their surface.",
                    image: "/magnetars.avif",
                    period: "2-12 s",
                    color: "border-red-500",
                    features: ["Extreme magnetic fields (10¹⁵ T)", "X-ray and gamma-ray emission", "Occasional giant flares"],
                  },
                ].map((pulsar, index) => (
                  <motion.div
                    key={pulsar.type}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`bg-slate-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border-2 ${pulsar.color}`}
                  >
                    <div className="relative h-40">
                      <img
                        src={pulsar.image}
                        alt={pulsar.type}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <h4 className="text-xl font-bold text-white">{pulsar.type}</h4>
                        <span className="text-cyan-300 text-sm font-mono">Period: {pulsar.period}</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-slate-300 text-sm mb-3">{pulsar.description}</p>
                      <div className="space-y-1">
                        {pulsar.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-xs text-slate-400">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* How Pulsars Form */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 rounded-2xl p-8 border border-cyan-500/30 mb-16"
            >
              <h3 className="text-2xl font-bold text-white text-center mb-8">
                💫 How Pulsars Form: From Star to Cosmic Lighthouse
              </h3>

              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {[
                  { step: 1, title: "Massive Star", desc: "8-25× Sun's mass burns through fuel", icon: "⭐" },
                  { step: 2, title: "Core Collapse", desc: "Iron core collapses in milliseconds", icon: "💥" },
                  { step: 3, title: "Supernova", desc: "Outer layers explode outward", icon: "🌟" },
                  { step: 4, title: "Neutron Star", desc: "Core compresses to ~20 km", icon: "⚪" },
                  { step: 5, title: "Pulsar", desc: "Rapid spin + magnetic field = beams", icon: "📡" },
                ].map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="flex flex-col items-center text-center flex-1"
                  >
                    <div className="w-16 h-16 rounded-full bg-cyan-500/20 border-2 border-cyan-500 flex items-center justify-center mb-2">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <div className="text-cyan-400 font-bold text-sm">Step {item.step}</div>
                    <div className="text-white font-semibold">{item.title}</div>
                    <div className="text-slate-400 text-xs mt-1">{item.desc}</div>
                    {index < 4 && (
                      <div className="hidden md:block absolute transform translate-x-full">
                        <ChevronRight className="w-6 h-6 text-cyan-500" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Conservation explanation */}
              <div className="mt-8 bg-black/30 rounded-xl p-6">
                <h4 className="text-lg font-bold text-cyan-300 mb-3">🔬 The Physics: Conservation of Angular Momentum</h4>
                <p className="text-slate-300 mb-4">
                  When a massive star&apos;s core collapses from millions of kilometers to just ~20 km, angular momentum
                  must be conserved. Like an ice skater pulling in their arms to spin faster, the neutron star spins
                  up dramatically:
                </p>
                <div className="bg-slate-800/50 rounded-lg p-4 font-mono text-center">
                  <span className="text-cyan-300">L = I × ω</span>
                  <span className="text-slate-500 mx-4">(Angular momentum = Moment of inertia × Angular velocity)</span>
                </div>
                <p className="text-slate-400 text-sm mt-4">
                  As radius decreases by ~100,000×, rotational speed increases by ~10,000,000,000× to conserve L.
                  A star rotating once per month becomes a pulsar spinning multiple times per second!
                </p>
              </div>
            </motion.div>

            {/* Famous Pulsars */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white text-center mb-8">
                ⭐ Famous Pulsars
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    name: "Crab Pulsar",
                    designation: "PSR B0531+21",
                    distance: "6,500 light-years",
                    period: "33 ms",
                    discovery: "1968",
                    fact: "Located in the Crab Nebula, remnant of a supernova observed by Chinese astronomers in 1054 AD. One of the youngest known pulsars.",
                    image: "/crabPulsar.jpg",
                  },
                  {
                    name: "Vela Pulsar",
                    designation: "PSR B0833-45",
                    distance: "936 light-years",
                    period: "89 ms",
                    discovery: "1968",
                    fact: "One of the brightest radio pulsars. Its associated supernova remnant is ~11,000 years old. Exhibits occasional 'glitches' in spin rate.",
                    image: "/vela.jpg",
                  },
                  {
                    name: "PSR J1748-2446ad",
                    designation: "Fastest Known Pulsar",
                    distance: "18,000 light-years",
                    period: "1.4 ms (716 Hz)",
                    discovery: "2006",
                    fact: "Spins 716 times per SECOND—its equator moves at 24% the speed of light! A millisecond pulsar spun up by a companion star.",
                    image: "/PSRJ1748-2446ad.jpeg",
                  },
                  {
                    name: "Hulse-Taylor Binary",
                    designation: "PSR B1913+16",
                    distance: "21,000 light-years",
                    period: "59 ms",
                    discovery: "1974",
                    fact: "First binary pulsar discovered. Its orbital decay precisely matches Einstein's prediction for gravitational wave emission—Nobel Prize 1993!",
                    image: "/BinaryPulsar.png",
                  },
                ].map((pulsar, index) => (
                  <motion.div
                    key={pulsar.name}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all group"
                  >
                    <div className="relative h-48">
                      <img
                        src={pulsar.image}
                        alt={pulsar.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h4 className="text-xl font-bold text-white">{pulsar.name}</h4>
                        <p className="text-cyan-300 text-sm font-mono">{pulsar.designation}</p>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                        <div className="bg-slate-800 rounded-lg p-2">
                          <p className="text-xs text-slate-500">Distance</p>
                          <p className="text-white text-sm font-medium">{pulsar.distance}</p>
                        </div>
                        <div className="bg-slate-800 rounded-lg p-2">
                          <p className="text-xs text-slate-500">Period</p>
                          <p className="text-cyan-300 text-sm font-medium">{pulsar.period}</p>
                        </div>
                        <div className="bg-slate-800 rounded-lg p-2">
                          <p className="text-xs text-slate-500">Discovered</p>
                          <p className="text-white text-sm font-medium">{pulsar.discovery}</p>
                        </div>
                      </div>
                      <p className="text-slate-300 text-sm">{pulsar.fact}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Scientific Applications */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white text-center mb-8">
                🔬 Why Pulsars Matter: Scientific Applications
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Testing General Relativity",
                    description: "Binary pulsars provide the most precise tests of Einstein's theory. The Hulse-Taylor binary loses energy exactly as predicted by gravitational wave emission.",
                    icon: "🌀",
                    color: "from-purple-500 to-indigo-600",
                  },
                  {
                    title: "Gravitational Wave Detection",
                    description: "Pulsar Timing Arrays (PTAs) use millisecond pulsars as a galaxy-sized gravitational wave detector, sensitive to waves from supermassive black hole mergers.",
                    icon: "📡",
                    color: "from-cyan-500 to-blue-600",
                  },
                  {
                    title: "Interstellar Navigation",
                    description: "NASA's NICER mission uses X-ray pulsars for autonomous spacecraft navigation. Pulsars could serve as a 'GPS' for deep space exploration.",
                    icon: "🚀",
                    color: "from-green-500 to-emerald-600",
                  },
                  {
                    title: "Probing Extreme Physics",
                    description: "Neutron star interiors contain matter denser than atomic nuclei—states impossible to recreate in labs. Pulsars let us study this exotic matter.",
                    icon: "⚛️",
                    color: "from-orange-500 to-red-600",
                  },
                  {
                    title: "Interstellar Medium Mapping",
                    description: "Pulsar signals get dispersed traveling through space. Measuring this dispersion reveals electron density throughout the Milky Way.",
                    icon: "🗺️",
                    color: "from-pink-500 to-rose-600",
                  },
                  {
                    title: "Precision Timekeeping",
                    description: "Millisecond pulsars are among the most stable clocks in the universe. Some keep time more accurately than atomic clocks over decades.",
                    icon: "⏰",
                    color: "from-amber-500 to-yellow-600",
                  },
                ].map((app, index) => (
                  <motion.div
                    key={app.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                    className="bg-slate-900/60 backdrop-blur-sm rounded-xl p-5 border border-slate-700 hover:border-cyan-500/50 transition-all"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center mb-4`}>
                      <span className="text-2xl">{app.icon}</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{app.title}</h4>
                    <p className="text-slate-400 text-sm">{app.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Pulsar Signal Visualization */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/30 mb-16"
            >
              <h3 className="text-2xl font-bold text-white text-center mb-6">
                📊 What a Pulsar Signal Looks Like
              </h3>

              <div className="relative h-32 bg-black/30 rounded-xl overflow-hidden mb-6">
                {/* Animated pulse train */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scaleY: 0.1 }}
                      animate={{ scaleY: [0.1, 1, 0.1] }}
                      transition={{
                        duration: 0.3,
                        repeat: Infinity,
                        delay: i * 0.2,
                        repeatDelay: 2.1,
                      }}
                      className="w-4 h-full mx-1 bg-gradient-to-t from-cyan-500 to-cyan-300 rounded-t-full origin-bottom"
                    />
                  ))}
                </div>
                <div className="absolute bottom-2 left-4 text-slate-400 text-xs">Time →</div>
                <div className="absolute top-2 left-4 text-slate-400 text-xs">Intensity</div>
              </div>

              <p className="text-slate-300 text-center max-w-2xl mx-auto">
                Radio telescopes record these incredibly regular pulses. The precision is so remarkable that
                astronomers can detect tiny variations caused by orbiting planets, gravitational waves, or
                glitches in the neutron star&apos;s crust.
              </p>
            </motion.div>

            {/* Mind-Blowing Facts */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-cyan-500/10 via-teal-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20"
            >
              <h3 className="text-2xl font-bold text-white text-center mb-6">
                🤯 Mind-Blowing Pulsar Facts
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { fact: "A pulsar's magnetic field is so strong that if you were 1,000 km away, it would erase every credit card on Earth.", icon: "🧲" },
                  { fact: "The fastest pulsar's equator moves at 24% the speed of light—any faster and it would tear itself apart.", icon: "💫" },
                  { fact: "Pulsars slow down as they age, losing energy. The Crab Pulsar loses energy equal to 100,000 Suns—powering its nebula.", icon: "⚡" },
                  { fact: "Some pulsars emit the energy equivalent of the Sun in a beam narrower than 1 degree—cosmic lasers!", icon: "🔦" },
                  { fact: "The first pulsar signal was so regular it was jokingly called 'LGM-1' for 'Little Green Men'—possible alien signals!", icon: "👽" },
                  { fact: "In a pulsar's intense gravity, a marshmallow falling from 1 meter would hit with the energy of a nuclear bomb.", icon: "☢️" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-slate-900/50 rounded-xl p-4 border border-slate-700"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <p className="text-slate-300 text-sm mt-2">{item.fact}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </motion.div>
        </section>

        {/* Summary Section */}
        <section className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 border border-purple-500/30 rounded-3xl p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
              You Are Made of Stardust
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  13.8B
                </div>
                <div className="text-slate-400">Years of cosmic evolution</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  118
                </div>
                <div className="text-slate-400">Known elements</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                  ~40
                </div>
                <div className="text-slate-400">Trillion cells in your body</div>
              </div>
            </div>

            <p className="text-slate-300 text-center max-w-3xl mx-auto text-lg leading-relaxed">
              The calcium in your bones was forged in dying stars. The iron in your blood came from supernovae.
              The gold in jewelry formed in neutron star collisions. Every breath you take contains atoms
              that have traveled through billions of years of cosmic history. Understanding nucleosynthesis
              isn't just astrophysics—it's understanding our own origins.
            </p>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={onGoToTable}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full font-semibold inline-flex items-center gap-2 shadow-lg shadow-purple-500/30 transition-all"
              >
                <Atom className="w-5 h-5" />
                Explore the Elements
              </button>
            </div>
          </motion.div>
        </section>

        {/* Periodic Table Origin Map */}
        <section className="py-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Element Origins at a Glance
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded bg-yellow-500"></div>
                <div>
                  <div className="text-white font-medium">Big Bang</div>
                  <div className="text-slate-400 text-sm">H, He (+ trace Li)</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded bg-green-500"></div>
                <div>
                  <div className="text-white font-medium">Cosmic Rays</div>
                  <div className="text-slate-400 text-sm">Li, Be, B</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded bg-orange-500"></div>
                <div>
                  <div className="text-white font-medium">Stellar Fusion</div>
                  <div className="text-slate-400 text-sm">C through Fe</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded bg-purple-500"></div>
                <div>
                  <div className="text-white font-medium">Supernovae/Mergers</div>
                  <div className="text-slate-400 text-sm">Fe through U</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900/50 border-t border-slate-700 mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-slate-400 text-sm">
          <p>Cosmic Nucleosynthesis • Understanding the origin of matter</p>
        </div>
      </footer>
    </div>
  );
}
