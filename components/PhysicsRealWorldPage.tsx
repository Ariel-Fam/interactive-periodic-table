"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Home, Table, Sparkles, GraduationCap, Cpu, Wifi, Satellite, Clock, Radio, Zap, Atom, Eye, Shield, Activity, ChevronDown, ChevronUp } from "lucide-react";

interface PhysicsRealWorldPageProps {
  onBack: () => void;
  onGoToTable: () => void;
  onGoToAstrophysics: () => void;
  onGoToAtomicScience: () => void;
}

const techCategories = [
  {
    id: "fiber-optics",
    title: "Fiber Optics",
    icon: Wifi,
    color: "from-cyan-500 to-blue-600",
    borderColor: "border-cyan-500",
    bgColor: "bg-cyan-500/10",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    description: "How light carries the internet around the world",
    physics: "Total Internal Reflection",
    equation: "n₁ sin θ₁ = n₂ sin θ₂ (Snell's Law)",
    howItWorks: [
      "Light enters a glass fiber at an angle greater than the critical angle",
      "The fiber's core has a higher refractive index than its cladding",
      "Light bounces off the boundary repeatedly—total internal reflection",
      "Signals can travel thousands of kilometers with minimal loss",
      "Different wavelengths (colors) can carry separate data streams simultaneously",
    ],
    realWorldImpact: "A single fiber optic cable can carry 100+ terabits per second—enough for millions of HD video calls simultaneously. The entire global internet backbone relies on this 19th-century physics discovery.",
    funFacts: [
      "Light in fiber travels at about 200,000 km/s (⅔ the speed in vacuum)",
      "Undersea cables span 1.2 million km—enough to circle Earth 30 times",
      "A single strand is thinner than a human hair",
    ],
  },
  {
    id: "atomic-clocks",
    title: "Atomic Clocks & GPS",
    icon: Clock,
    color: "from-amber-500 to-orange-600",
    borderColor: "border-amber-500",
    bgColor: "bg-amber-500/10",
    image: "/atomicClocks.webp",
    description: "The most precise timekeepers powering navigation",
    physics: "Quantum Energy Transitions",
    equation: "ΔE = hν (Planck-Einstein relation)",
    howItWorks: [
      "Cesium-133 atoms are exposed to microwave radiation",
      "At exactly 9,192,631,770 Hz, electrons jump between energy levels",
      "This frequency defines the SI second with incredible precision",
      "GPS satellites carry atomic clocks synced to nanosecond accuracy",
      "Your position is calculated from timing differences between satellite signals",
    ],
    realWorldImpact: "Without atomic clock corrections for Einstein's relativity (both special and general), GPS would drift by ~10 km per day. Your phone's navigation proves Einstein right every second!",
    funFacts: [
      "GPS clocks run 38 microseconds faster per day due to weaker gravity in orbit",
      "Modern optical clocks lose only 1 second every 15 billion years",
      "GPS accuracy: 4.9 meters (civilian), <1 meter (military)",
    ],
  },
  {
    id: "satellites",
    title: "Satellites & Orbital Mechanics",
    icon: Satellite,
    color: "from-purple-500 to-pink-600",
    borderColor: "border-purple-500",
    bgColor: "bg-purple-500/10",
    image: "/satellites.jpg",
    description: "Perpetual free-fall enabling global communication",
    physics: "Gravitational Orbital Mechanics",
    equation: "v = √(GM/r) (Orbital velocity)",
    howItWorks: [
      "Satellites are constantly falling toward Earth—but moving sideways fast enough to miss",
      "At 35,786 km altitude, orbital period matches Earth's rotation (geostationary)",
      "Lower orbits (LEO ~400 km) require less energy but cover less area",
      "Solar panels convert sunlight to electricity for onboard systems",
      "Reaction wheels and thrusters maintain precise orientation",
    ],
    realWorldImpact: "Over 7,000 active satellites enable weather forecasting, TV broadcasting, internet connectivity, military surveillance, and scientific research. Starlink alone has 5,000+ satellites.",
    funFacts: [
      "ISS orbits at 7.66 km/s—circling Earth every 90 minutes",
      "Geostationary satellites appear motionless from Earth's surface",
      "Space debris travels at ~28,000 km/h—a paint fleck can damage spacecraft",
    ],
  },
  {
    id: "quantum-computing",
    title: "Quantum Computing",
    icon: Cpu,
    color: "from-violet-500 to-indigo-600",
    borderColor: "border-violet-500",
    bgColor: "bg-violet-500/10",
    image: "/quantum.png",
    description: "Harnessing quantum weirdness for exponential power",
    physics: "Superposition & Entanglement",
    equation: "|ψ⟩ = α|0⟩ + β|1⟩ (Qubit state)",
    howItWorks: [
      "Classical bits are 0 OR 1; qubits can be both simultaneously (superposition)",
      "Entangled qubits share quantum states—measuring one instantly affects the other",
      "Quantum gates manipulate qubit states through interference",
      "Algorithms exploit parallelism to solve specific problems exponentially faster",
      "Decoherence destroys quantum states—systems must be cooled near absolute zero",
    ],
    realWorldImpact: "Google's 53-qubit Sycamore performed a calculation in 200 seconds that would take classical supercomputers 10,000 years. Quantum computers will revolutionize drug discovery, cryptography, and optimization.",
    funFacts: [
      "Quantum computers operate at 15 millikelvin—colder than outer space",
      "IBM's quantum computer has 1,121 qubits (as of 2023)",
      "Shor's algorithm could break RSA encryption—driving post-quantum cryptography research",
    ],
  },
  {
    id: "mri",
    title: "MRI & Medical Imaging",
    icon: Activity,
    color: "from-emerald-500 to-teal-600",
    borderColor: "border-emerald-500",
    bgColor: "bg-emerald-500/10",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
    description: "Nuclear spins creating detailed body images",
    physics: "Nuclear Magnetic Resonance",
    equation: "ω = γB₀ (Larmor frequency)",
    howItWorks: [
      "Hydrogen nuclei (protons) in your body act like tiny magnets",
      "A powerful magnetic field (1.5-7 Tesla) aligns these protons",
      "Radio pulses knock protons out of alignment—they emit signals as they return",
      "Different tissues have different relaxation times, creating contrast",
      "Gradient coils provide spatial information for 3D reconstruction",
    ],
    realWorldImpact: "MRI scans reveal soft tissue details invisible to X-rays—detecting tumors, brain activity, spinal injuries, and joint problems without harmful radiation. Over 40 million MRI scans performed annually.",
    funFacts: [
      "MRI magnets are 60,000× stronger than Earth's magnetic field",
      "The magnet is always on—even when the machine isn't scanning",
      "fMRI detects blood flow changes to map brain activity in real-time",
    ],
  },
  {
    id: "lasers",
    title: "Lasers",
    icon: Zap,
    color: "from-red-500 to-rose-600",
    borderColor: "border-red-500",
    bgColor: "bg-red-500/10",
    image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?w=800&q=80",
    description: "Stimulated emission creating coherent light",
    physics: "Stimulated Emission of Radiation",
    equation: "A₂₁/B₂₁ = 8πhν³/c³ (Einstein coefficients)",
    howItWorks: [
      "Atoms are 'pumped' to excited energy states using electricity or light",
      "When a photon passes an excited atom, it stimulates emission of an identical photon",
      "Mirrors bounce light back and forth, amplifying this process",
      "One mirror is partially transparent—letting the laser beam escape",
      "Result: coherent, monochromatic, highly directional light",
    ],
    realWorldImpact: "Lasers are everywhere—barcode scanners, Blu-ray players, eye surgery (LASIK), fiber optic communications, industrial cutting/welding, laser pointers, and even fusion research (National Ignition Facility).",
    funFacts: [
      "The most powerful laser delivers 500 trillion watts (for billionths of a second)",
      "Laser cooling can slow atoms to near absolute zero",
      "LIGO detects gravitational waves using laser interferometry",
    ],
  },
  {
    id: "semiconductors",
    title: "Semiconductors & Transistors",
    icon: Cpu,
    color: "from-slate-500 to-zinc-600",
    borderColor: "border-slate-500",
    bgColor: "bg-slate-500/10",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    description: "Quantum mechanics enabling modern electronics",
    physics: "Band Gap & Electron Doping",
    equation: "I = I₀(e^(qV/kT) - 1) (Diode equation)",
    howItWorks: [
      "Silicon has a band gap—electrons need energy to conduct",
      "Doping with phosphorus (n-type) adds free electrons",
      "Doping with boron (p-type) creates 'holes' that act as positive charges",
      "P-N junctions control electron flow—the basis of diodes and transistors",
      "Transistors act as switches, enabling digital logic (0s and 1s)",
    ],
    realWorldImpact: "A modern CPU contains ~50 billion transistors, each just 3-5 nanometers wide. Moore's Law drove 50+ years of exponential computing growth, transforming every aspect of modern life.",
    funFacts: [
      "The first transistor (1947) was the size of your palm",
      "Modern transistors are 10,000× thinner than a human hair",
      "TSMC produces chips with features just 20 atoms wide",
    ],
  },
  {
    id: "solar-cells",
    title: "Solar Cells",
    icon: Zap,
    color: "from-yellow-500 to-amber-600",
    borderColor: "border-yellow-500",
    bgColor: "bg-yellow-500/10",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    description: "Converting photons directly into electricity",
    physics: "Photoelectric Effect",
    equation: "E = hf - φ (Photoelectric equation)",
    howItWorks: [
      "Photons with enough energy knock electrons free from silicon atoms",
      "The p-n junction creates an electric field separating electrons and holes",
      "Freed electrons flow through an external circuit—generating current",
      "Multiple cells are wired together to increase voltage and power",
      "Anti-reflective coatings maximize light absorption",
    ],
    realWorldImpact: "Solar power is now the cheapest electricity source in history. Global solar capacity exceeded 1 terawatt in 2022—equivalent to 1,000 nuclear reactors. Prices dropped 99% since 1976.",
    funFacts: [
      "Einstein won his Nobel Prize for explaining the photoelectric effect",
      "Perovskite solar cells may achieve 40%+ efficiency",
      "The Sun delivers 173,000 terawatts to Earth—10,000× human energy use",
    ],
  },
  {
    id: "radar",
    title: "Radar & Sonar",
    icon: Radio,
    color: "from-green-500 to-emerald-600",
    borderColor: "border-green-500",
    bgColor: "bg-green-500/10",
    image: "/radar.jpg",
    description: "Waves bouncing back to reveal hidden objects",
    physics: "Wave Reflection & Doppler Effect",
    equation: "Δf/f = 2v/c (Doppler shift)",
    howItWorks: [
      "A transmitter sends out pulses of radio waves (radar) or sound (sonar)",
      "Waves reflect off objects and return to the receiver",
      "Time delay reveals distance; frequency shift reveals velocity (Doppler)",
      "Phased arrays steer beams electronically without moving parts",
      "Signal processing filters noise and creates detailed images",
    ],
    realWorldImpact: "Radar enables air traffic control, weather forecasting, autonomous vehicles, and military defense. Sonar maps the ocean floor, guides submarines, and helps ships avoid collisions.",
    funFacts: [
      "Bats and dolphins naturally use sonar (echolocation)",
      "Doppler radar detects tornado rotation before touchdowns",
      "Stealth aircraft have radar cross-sections smaller than a bird",
    ],
  },
  {
    id: "touchscreens",
    title: "Touchscreens",
    icon: Eye,
    color: "from-pink-500 to-fuchsia-600",
    borderColor: "border-pink-500",
    bgColor: "bg-pink-500/10",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    description: "Your finger completing electrical circuits",
    physics: "Capacitance & Electromagnetic Fields",
    equation: "C = εA/d (Capacitor equation)",
    howItWorks: [
      "A glass layer is coated with transparent conductor (ITO)",
      "This creates a grid of tiny capacitors storing electric charge",
      "Your finger is conductive—it changes the local electric field when touching",
      "The system detects which capacitors changed and calculates touch position",
      "Multi-touch tracks multiple points by analyzing the capacitance pattern",
    ],
    realWorldImpact: "Capacitive touchscreens revolutionized smartphones, tablets, and laptops. The iPhone's multi-touch interface in 2007 redefined human-computer interaction.",
    funFacts: [
      "Touchscreens don't work with regular gloves—your finger must be conductive",
      "ITO (Indium Tin Oxide) is transparent yet electrically conductive",
      "Force Touch measures how hard you press using strain gauges",
    ],
  },
  {
    id: "nuclear-power",
    title: "Nuclear Power",
    icon: Atom,
    color: "from-lime-500 to-green-600",
    borderColor: "border-lime-500",
    bgColor: "bg-lime-500/10",
    image: "/nuclearPower.jpg",
    description: "E=mc² unleashed for clean energy",
    physics: "Nuclear Fission Chain Reaction",
    equation: "E = mc² (Mass-energy equivalence)",
    howItWorks: [
      "Uranium-235 nuclei are hit by neutrons, causing them to split (fission)",
      "Fission releases energy AND more neutrons—triggering a chain reaction",
      "Control rods absorb neutrons to regulate the reaction rate",
      "Heat generates steam, spinning turbines connected to generators",
      "A single uranium pellet contains as much energy as 17,000 cubic feet of natural gas",
    ],
    realWorldImpact: "Nuclear provides ~10% of global electricity with zero carbon emissions during operation. France gets 70% of electricity from nuclear. Advanced reactors promise even safer, waste-reducing designs.",
    funFacts: [
      "1 kg of uranium = 20,000 tons of coal in energy content",
      "Nuclear reactors also produce medical isotopes for cancer treatment",
      "The Sun is a nuclear fusion reactor—not fission",
    ],
  },
  {
    id: "superconductors",
    title: "Superconductors",
    icon: Shield,
    color: "from-blue-500 to-cyan-600",
    borderColor: "border-blue-500",
    bgColor: "bg-blue-500/10",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&q=80",
    description: "Zero resistance enabling impossible technology",
    physics: "Cooper Pairs & BCS Theory",
    equation: "Tc ∝ ℏωD exp(-1/N₀V) (BCS critical temp)",
    howItWorks: [
      "Below critical temperature, electrons form 'Cooper pairs'",
      "Cooper pairs move through the lattice without scattering—zero resistance",
      "Superconductors expel magnetic fields (Meissner effect)—enabling levitation",
      "Type II superconductors allow partial magnetic penetration, enabling stronger magnets",
      "Room-temperature superconductors remain the 'holy grail' of materials science",
    ],
    realWorldImpact: "MRI machines, particle accelerators (LHC), maglev trains, and quantum computers all rely on superconductors. Fusion reactors will need massive superconducting magnets to confine plasma.",
    funFacts: [
      "The LHC uses 1,232 superconducting magnets cooled to 1.9 K",
      "Japan's maglev train levitates using superconducting coils, reaching 603 km/h",
      "Room-temperature superconductors were (falsely) claimed in 2023",
    ],
  },
];

const quantumComputingDeep = {
  title: "Quantum Computing Deep Dive",
  sections: [
    {
      name: "Superposition",
      description: "Unlike classical bits (0 or 1), qubits exist in multiple states simultaneously. A qubit can be 30% |0⟩ and 70% |1⟩ until measured.",
      visual: "🎲",
    },
    {
      name: "Entanglement",
      description: "Two entangled qubits share a quantum state—measuring one instantly determines the other, regardless of distance. Einstein called this 'spooky action at a distance.'",
      visual: "🔗",
    },
    {
      name: "Interference",
      description: "Quantum algorithms manipulate probability amplitudes so wrong answers cancel out (destructive interference) and right answers reinforce (constructive interference).",
      visual: "🌊",
    },
    {
      name: "Decoherence",
      description: "Environmental noise destroys quantum states. Quantum computers must be isolated and cooled to near absolute zero to maintain coherence.",
      visual: "❄️",
    },
  ],
  applications: [
    {
      name: "Cryptography",
      description: "Shor's algorithm can factor large numbers exponentially faster, breaking RSA encryption. Post-quantum cryptography is being developed in response.",
      icon: "🔐",
    },
    {
      name: "Drug Discovery",
      description: "Simulating molecular interactions is exponentially hard for classical computers. Quantum computers could revolutionize pharmaceutical research.",
      icon: "💊",
    },
    {
      name: "Optimization",
      description: "From supply chain logistics to financial portfolios, quantum algorithms excel at finding optimal solutions among vast possibilities.",
      icon: "📊",
    },
    {
      name: "Machine Learning",
      description: "Quantum neural networks may provide exponential speedups for certain AI tasks, though practical advantages remain to be proven.",
      icon: "🤖",
    },
  ],
};

const physicsLawsInTech = [
  {
    law: "Maxwell's Equations",
    description: "Unified electricity, magnetism, and light",
    applications: ["Radio", "WiFi", "Microwaves", "Fiber optics"],
    color: "from-blue-400 to-blue-600",
  },
  {
    law: "Quantum Mechanics",
    description: "Behavior of particles at atomic scales",
    applications: ["Transistors", "Lasers", "MRI", "Quantum computers"],
    color: "from-purple-400 to-purple-600",
  },
  {
    law: "Relativity",
    description: "Space-time and mass-energy equivalence",
    applications: ["GPS corrections", "Nuclear power", "Particle accelerators"],
    color: "from-amber-400 to-amber-600",
  },
  {
    law: "Thermodynamics",
    description: "Heat, energy, and entropy",
    applications: ["Engines", "Refrigeration", "Power plants", "Heat pumps"],
    color: "from-red-400 to-red-600",
  },
  {
    law: "Electromagnetism",
    description: "Interaction of electric and magnetic fields",
    applications: ["Motors", "Generators", "Transformers", "Speakers"],
    color: "from-cyan-400 to-cyan-600",
  },
  {
    law: "Wave Mechanics",
    description: "Behavior of waves in various media",
    applications: ["Ultrasound", "Radar", "Sonar", "Noise cancellation"],
    color: "from-green-400 to-green-600",
  },
];

export function PhysicsRealWorldPage({ onBack, onGoToTable, onGoToAstrophysics, onGoToAtomicScience }: PhysicsRealWorldPageProps) {
  const [expandedTech, setExpandedTech] = useState<string | null>("fiber-optics");
  const [selectedQuantumSection, setSelectedQuantumSection] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-violet-950 to-slate-950">
      {/* Header */}
      <header className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-white" />
              </div>
            </motion.div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-white">Physics & Technology</h1>
              <p className="text-xs sm:text-sm text-slate-400">How Physics Powers the Modern World</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onGoToTable}
              className="flex items-center gap-2 px-3 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg transition-colors text-sm"
            >
              <Table className="w-4 h-4" />
              <span className="hidden sm:inline">Periodic Table</span>
            </button>
            <button
              onClick={onGoToAstrophysics}
              className="flex items-center gap-2 px-3 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors text-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span className="hidden sm:inline">Cosmic Origins</span>
            </button>
            <button
              onClick={onGoToAtomicScience}
              className="flex items-center gap-2 px-3 py-2 bg-teal-600 hover:bg-teal-500 text-white rounded-lg transition-colors text-sm"
            >
              <GraduationCap className="w-4 h-4" />
              <span className="hidden sm:inline">Atomic Science</span>
            </button>
            <button
              onClick={onBack}
              className="flex items-center gap-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors border border-slate-700 text-sm"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20" >
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-transparent to-purple-500/10" />

        {/* Animated circuit lines */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear",
              }}
              className="absolute h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent"
              style={{
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 30 + 20}%`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mx-auto shadow-lg shadow-violet-500/50">
                <Cpu className="w-12 h-12 text-white" />
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Physics & the{" "}
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Real World
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Every piece of technology you use—from smartphones to satellites—is powered by
              fundamental physics. Discover the science behind the modern world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Physics Laws Overview */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-white mb-4">The Physics That Powers Everything</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A handful of fundamental laws explain the behavior of the entire universe—and enable
            all modern technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {physicsLawsInTech.map((law, index) => (
            <motion.div
              key={law.law}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-5 border border-slate-700"
            >
              <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${law.color} mb-4`} />
              <h3 className="text-lg font-bold text-white mb-2">{law.law}</h3>
              <p className="text-slate-400 text-sm mb-3">{law.description}</p>
              <div className="flex flex-wrap gap-2">
                {law.applications.map((app) => (
                  <span key={app} className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-300">
                    {app}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-3">
          {techCategories.map((tech) => (
            <a
              key={tech.id}
              href={`#${tech.id}`}
              className={`px-4 py-2 rounded-full ${tech.bgColor} ${tech.borderColor} border text-white text-sm hover:scale-105 transition-transform flex items-center gap-2`}
            >
              <tech.icon className="w-4 h-4" />
              {tech.title}
            </a>
          ))}
        </div>
      </section>

      {/* Main Content - Technology Deep Dives */}
      <main className="container mx-auto px-4 py-8 space-y-16">
        {techCategories.map((tech, index) => (
          <section key={tech.id} id={tech.id} className="scroll-mt-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div
                className={`bg-slate-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border ${tech.borderColor}/30`}
              >
                {/* Header */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={tech.image}
                    alt={tech.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${tech.color} opacity-60`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center`}>
                        <tech.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-white">{tech.title}</h2>
                        <p className="text-slate-300">{tech.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  {/* Physics Principle */}
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <div className={`inline-block px-3 py-1 rounded-full ${tech.bgColor} ${tech.borderColor} border text-sm text-white mb-3`}>
                        {tech.physics}
                      </div>
                      <div className="bg-slate-800/50 rounded-xl p-4 font-mono text-center mb-4">
                        <span className="text-xl text-violet-300">{tech.equation}</span>
                      </div>
                    </div>
                  </div>

                  {/* How It Works - Expandable */}
                  <div>
                    <button
                      onClick={() => setExpandedTech(expandedTech === tech.id ? null : tech.id)}
                      className="flex items-center justify-between w-full text-left p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800 transition-colors"
                    >
                      <span className="text-lg font-semibold text-white">How It Works</span>
                      {expandedTech === tech.id ? (
                        <ChevronUp className="w-5 h-5 text-slate-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400" />
                      )}
                    </button>

                    <AnimatePresence>
                      {expandedTech === tech.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 space-y-3">
                            {tech.howItWorks.map((step, stepIndex) => (
                              <motion.div
                                key={stepIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: stepIndex * 0.1 }}
                                className="flex items-start gap-3"
                              >
                                <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${tech.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                  <span className="text-xs text-white font-bold">{stepIndex + 1}</span>
                                </div>
                                <p className="text-slate-300">{step}</p>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Real World Impact */}
                  <div className={`bg-gradient-to-r ${tech.color} bg-opacity-10 rounded-xl p-5 border ${tech.borderColor}/20`}>
                    <h3 className="text-lg font-semibold text-white mb-2">🌍 Real-World Impact</h3>
                    <p className="text-slate-300">{tech.realWorldImpact}</p>
                  </div>

                  {/* Fun Facts */}
                  <div className="grid md:grid-cols-3 gap-3">
                    {tech.funFacts.map((fact, factIndex) => (
                      <motion.div
                        key={factIndex}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: factIndex * 0.1 }}
                        className="bg-slate-800/50 rounded-lg p-4 border border-slate-700"
                      >
                        <span className="text-2xl">💡</span>
                        <p className="text-slate-300 text-sm mt-2">{fact}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        ))}

        {/* Quantum Computing Deep Dive */}
        <section id="quantum-deep-dive" className="scroll-mt-24 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <div className="inline-block p-4 rounded-full bg-gradient-to-br from-violet-500/20 to-indigo-500/20 border border-violet-500/30 mb-4">
                <Cpu className="w-10 h-10 text-violet-400" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">
                {quantumComputingDeep.title}
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Understanding the quantum principles that make this revolutionary technology possible.
              </p>
            </div>

            {/* Quantum Principles */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {quantumComputingDeep.sections.map((section, index) => (
                <motion.div
                  key={section.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedQuantumSection(index)}
                  className={`p-6 rounded-xl cursor-pointer transition-all ${selectedQuantumSection === index
                    ? "bg-gradient-to-br from-violet-600 to-indigo-600 border-violet-400"
                    : "bg-slate-900/80 border-slate-700 hover:border-violet-500"
                    } border`}
                >
                  <span className="text-4xl mb-3 block">{section.visual}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{section.name}</h3>
                  <p className={`text-sm ${selectedQuantumSection === index ? "text-violet-100" : "text-slate-400"}`}>
                    {section.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Quantum Applications */}
            <div className="bg-slate-900/60 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white text-center mb-8">
                Quantum Computing Applications
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {quantumComputingDeep.applications.map((app, index) => (
                  <motion.div
                    key={app.name}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 p-4 bg-slate-800/50 rounded-xl"
                  >
                    <span className="text-4xl">{app.icon}</span>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{app.name}</h4>
                      <p className="text-slate-400 text-sm">{app.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quantum vs Classical Comparison */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12 bg-gradient-to-r from-violet-900/40 to-indigo-900/40 rounded-2xl p-8 border border-violet-500/30"
            >
              <h3 className="text-2xl font-bold text-white text-center mb-6">
                Quantum vs Classical Computing
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="py-3 px-4 text-slate-400">Aspect</th>
                      <th className="py-3 px-4 text-blue-400">Classical</th>
                      <th className="py-3 px-4 text-violet-400">Quantum</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">Basic Unit</td>
                      <td className="py-3 px-4">Bit (0 or 1)</td>
                      <td className="py-3 px-4">Qubit (0 and 1 simultaneously)</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">Processing</td>
                      <td className="py-3 px-4">Sequential or parallel</td>
                      <td className="py-3 px-4">Massive parallelism via superposition</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">Operating Temp</td>
                      <td className="py-3 px-4">Room temperature</td>
                      <td className="py-3 px-4">~15 millikelvin (-273.135°C)</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">Error Rate</td>
                      <td className="py-3 px-4">~1 in 10¹⁷ operations</td>
                      <td className="py-3 px-4">~1 in 1,000 operations</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Best For</td>
                      <td className="py-3 px-4">Most everyday tasks</td>
                      <td className="py-3 px-4">Specific quantum-advantage problems</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Timeline of Physics in Tech */}
        <section className="py-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-4">
              From Discovery to Your Pocket
            </h2>
            <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
              The journey from fundamental physics breakthroughs to everyday technology.
            </p>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-violet-500 via-purple-500 to-pink-500 hidden md:block" />

              {[
                { year: "1687", event: "Newton's Laws", impact: "Foundation of mechanics—enables satellites, rockets, vehicles", icon: "🍎" },
                { year: "1865", event: "Maxwell's Equations", impact: "Unified electromagnetism—enables radio, WiFi, fiber optics", icon: "⚡" },
                { year: "1905", event: "Special Relativity", impact: "E=mc²—enables nuclear power, GPS corrections", icon: "💫" },
                { year: "1925", event: "Quantum Mechanics", impact: "Wave-particle duality—enables transistors, lasers, LEDs", icon: "🔮" },
                { year: "1947", event: "First Transistor", impact: "Birth of modern electronics—enables computers, phones", icon: "🔌" },
                { year: "1960", event: "First Laser", impact: "Coherent light—enables fiber optics, surgery, manufacturing", icon: "🔴" },
                { year: "2019", event: "Quantum Supremacy", impact: "Quantum advantage demonstrated—beginning of quantum era", icon: "🖥️" },
              ].map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-6 mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-5 border border-slate-700">
                      <span className="text-3xl mb-2 block">{milestone.icon}</span>
                      <span className="text-violet-400 font-bold">{milestone.year}</span>
                      <h3 className="text-xl font-bold text-white">{milestone.event}</h3>
                      <p className="text-slate-400 text-sm mt-2">{milestone.impact}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-violet-500 border-4 border-slate-900 z-10 hidden md:block" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-violet-900/40 to-purple-900/40 rounded-2xl p-8 md:p-12 border border-violet-500/30 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Physics is Everywhere
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              From the atoms in your body to the light from distant stars, from the phone in your
              pocket to the satellites overhead—physics explains it all. Keep exploring!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onGoToTable}
                className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full font-semibold flex items-center gap-2"
              >
                <Table className="w-5 h-5" />
                Explore the Elements
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onGoToAtomicScience}
                className="px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white rounded-full font-semibold flex items-center gap-2"
              >
                <Atom className="w-5 h-5" />
                Atomic Science
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onGoToAstrophysics}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-full font-semibold flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Cosmic Origins
              </motion.button>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900/50 border-t border-slate-700 mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-slate-400 text-sm">
          <p>Physics & Technology • Understanding the science behind modern innovation</p>
          <p className="mt-1">Launch Narrative Software © All rights reserved {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
