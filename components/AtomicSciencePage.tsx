"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
    Home,
    Atom,
    Table,
    History,
    Layers,
    Sparkles,
    Zap,
    Circle,
    Orbit,
    FlaskConical,
    RotateCcw,
    Cpu,
    Flame,
    Scale,
    ArrowRight,
} from "lucide-react";

interface AtomicSciencePageProps {
    onBack: () => void;
    onGoToTable: () => void;
    onGoToAstrophysics: () => void;
    onGoToPhysicsRealWorld: () => void;
}

const periodicTableHistory = [
    {
        year: "1789",
        scientist: "Antoine Lavoisier",
        contribution: "Published first modern list of 33 chemical elements",
        icon: FlaskConical,
        color: "from-amber-500 to-orange-600",
    },
    {
        year: "1829",
        scientist: "Johann Döbereiner",
        contribution: "Discovered 'triads' - groups of three elements with similar properties",
        icon: Layers,
        color: "from-green-500 to-emerald-600",
    },
    {
        year: "1862",
        scientist: "Alexandre-Émile Béguyer de Chancourtois",
        contribution: "First to arrange elements by atomic weight in a spiral (telluric helix)",
        icon: Orbit,
        color: "from-blue-500 to-cyan-600",
    },
    {
        year: "1869",
        scientist: "Dmitri Mendeleev",
        contribution: "Published the first widely recognized periodic table, predicting undiscovered elements",
        icon: Table,
        color: "from-purple-500 to-pink-600",
    },
    {
        year: "1913",
        scientist: "Henry Moseley",
        contribution: "Determined atomic number through X-ray spectroscopy, reorganizing the table",
        icon: Zap,
        color: "from-red-500 to-rose-600",
    },
    {
        year: "1945+",
        scientist: "Glenn Seaborg",
        contribution: "Added actinide series and synthesized transuranic elements",
        icon: Atom,
        color: "from-indigo-500 to-violet-600",
    },
];

const atomicStructure = [
    {
        id: "atomic-number",
        title: "Atomic Number (Z)",
        subtitle: "The Identity of an Element",
        icon: Circle,
        color: "from-blue-500 to-cyan-600",
        borderColor: "border-blue-500",
        bgColor: "bg-blue-500/10",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80",
        description: `The atomic number (Z) is the number of protons in an atom's nucleus. This single number defines what element an atom is. Hydrogen has 1 proton, helium has 2, lithium has 3, and so on up to oganesson with 118 protons.`,
        details: [
            {
                title: "Why Protons Define Elements",
                content:
                    "Protons carry positive charge and determine the element's chemical identity. An atom with 6 protons is always carbon, regardless of how many neutrons or electrons it has. Change the proton count, and you've changed the element entirely.",
            },
            {
                title: "Atomic Number vs. Mass Number",
                content:
                    "Atomic number (Z) counts only protons. Mass number (A) counts protons + neutrons. For example, carbon-12 has Z=6 and A=12, meaning 6 protons and 6 neutrons. Carbon-14 still has Z=6 but A=14 (6 protons, 8 neutrons).",
            },
            {
                title: "Periodic Table Organization",
                content:
                    "Elements are arranged by increasing atomic number from left to right, top to bottom. This organization reveals periodic patterns in chemical properties—elements in the same column (group) have similar behaviors.",
            },
        ],
        equation: "Z = number of protons = number of electrons (in neutral atom)",
        funFact:
            "Before Moseley's 1913 discovery, elements were ordered by atomic mass, which led to some elements being in the wrong positions. Moseley's atomic number concept fixed these errors.",
    },
    {
        id: "electron-shells",
        title: "Electron Configuration",
        subtitle: "The Architecture of Chemical Behavior",
        icon: Orbit,
        color: "from-purple-500 to-pink-600",
        borderColor: "border-purple-500",
        bgColor: "bg-purple-500/10",
        image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=1200&q=80",
        description: `Electrons occupy specific energy levels or "shells" around the nucleus. The arrangement of electrons determines how an element bonds with others and dictates its chemical properties.`,
        details: [
            {
                title: "Energy Levels (Shells)",
                content:
                    "Electrons fill shells in order of increasing energy: K (n=1, max 2e⁻), L (n=2, max 8e⁻), M (n=3, max 18e⁻), N (n=4, max 32e⁻). The formula 2n² gives the maximum electrons per shell.",
            },
            {
                title: "Subshells and Orbitals",
                content:
                    "Each shell contains subshells: s (2e⁻), p (6e⁻), d (10e⁻), f (14e⁻). These correspond to different orbital shapes—s is spherical, p is dumbbell-shaped, d and f are more complex multi-lobed shapes.",
            },
            {
                title: "Valence Electrons",
                content:
                    "The outermost electrons (valence electrons) determine chemical reactivity. Elements in the same group have the same number of valence electrons, explaining their similar chemical behavior.",
            },
            {
                title: "The Aufbau Principle",
                content:
                    "Electrons fill orbitals from lowest to highest energy: 1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p → 5s → 4d → 5p → 6s → 4f → 5d → 6p → 7s → 5f → 6d → 7p",
            },
        ],
        equation: "Shell capacity = 2n² (where n is the shell number)",
        funFact:
            "The periodic table's shape comes from electron configuration! The s-block (groups 1-2), p-block (groups 13-18), d-block (transition metals), and f-block (lanthanides/actinides) correspond to which subshell is being filled.",
    },
    {
        id: "periodic-trends",
        title: "Periodic Trends",
        subtitle: "Patterns That Predict Properties",
        icon: Layers,
        color: "from-green-500 to-emerald-600",
        borderColor: "border-green-500",
        bgColor: "bg-green-500/10",
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&q=80",
        description: `The periodic table reveals predictable trends in element properties. Understanding these trends allows chemists to predict how elements will behave without memorizing individual properties.`,
        details: [
            {
                title: "Atomic Radius",
                content:
                    "Increases down a group (more shells) and decreases across a period (more protons pull electrons closer). Francium is the largest atom; helium is the smallest.",
            },
            {
                title: "Ionization Energy",
                content:
                    "Energy needed to remove an electron. Increases across a period (stronger nuclear attraction) and decreases down a group (electrons farther from nucleus). Noble gases have the highest ionization energies.",
            },
            {
                title: "Electronegativity",
                content:
                    "Ability to attract electrons in a bond. Increases across a period and decreases down a group. Fluorine is most electronegative (3.98); francium is least (0.7).",
            },
            {
                title: "Metallic Character",
                content:
                    "Decreases across a period (left to right) and increases down a group. The diagonal line from B to At roughly separates metals from nonmetals, with metalloids along the boundary.",
            },
        ],
        equation: "Effective nuclear charge: Zeff = Z - S (shielding constant)",
        funFact:
            "Mendeleev's genius was recognizing these trends. He left gaps for undiscovered elements and predicted their properties with remarkable accuracy—eka-aluminum (gallium) and eka-silicon (germanium) were found with properties he predicted.",
    },
];

const standardModelParticles = {
    quarks: [
        { name: "Up", symbol: "u", charge: "+2/3", mass: "2.2 MeV/c²", generation: 1 },
        { name: "Down", symbol: "d", charge: "-1/3", mass: "4.7 MeV/c²", generation: 1 },
        { name: "Charm", symbol: "c", charge: "+2/3", mass: "1.28 GeV/c²", generation: 2 },
        { name: "Strange", symbol: "s", charge: "-1/3", mass: "96 MeV/c²", generation: 2 },
        { name: "Top", symbol: "t", charge: "+2/3", mass: "173 GeV/c²", generation: 3 },
        { name: "Bottom", symbol: "b", charge: "-1/3", mass: "4.18 GeV/c²", generation: 3 },
    ],
    leptons: [
        { name: "Electron", symbol: "e⁻", charge: "-1", mass: "0.511 MeV/c²", generation: 1 },
        { name: "Electron Neutrino", symbol: "νₑ", charge: "0", mass: "<2 eV/c²", generation: 1 },
        { name: "Muon", symbol: "μ⁻", charge: "-1", mass: "106 MeV/c²", generation: 2 },
        { name: "Muon Neutrino", symbol: "νμ", charge: "0", mass: "<0.19 MeV/c²", generation: 2 },
        { name: "Tau", symbol: "τ⁻", charge: "-1", mass: "1.78 GeV/c²", generation: 3 },
        { name: "Tau Neutrino", symbol: "ντ", charge: "0", mass: "<18 MeV/c²", generation: 3 },
    ],
    bosons: [
        { name: "Photon", symbol: "γ", charge: "0", mass: "0", force: "Electromagnetic" },
        { name: "W Boson", symbol: "W±", charge: "±1", mass: "80.4 GeV/c²", force: "Weak" },
        { name: "Z Boson", symbol: "Z⁰", charge: "0", mass: "91.2 GeV/c²", force: "Weak" },
        { name: "Gluon", symbol: "g", charge: "0", mass: "0", force: "Strong" },
        { name: "Higgs", symbol: "H", charge: "0", mass: "125 GeV/c²", force: "Mass" },
    ],
};

const fundamentalForces = [
    {
        name: "Strong Nuclear Force",
        description: "Binds quarks into protons/neutrons and holds nuclei together",
        carrier: "Gluons",
        range: "~10⁻¹⁵ m",
        strength: "1 (reference)",
        color: "bg-red-500",
    },
    {
        name: "Electromagnetic Force",
        description: "Acts between charged particles, governs chemistry and light",
        carrier: "Photons",
        range: "Infinite",
        strength: "~1/137",
        color: "bg-yellow-500",
    },
    {
        name: "Weak Nuclear Force",
        description: "Responsible for radioactive decay and neutrino interactions",
        carrier: "W and Z Bosons",
        range: "~10⁻¹⁸ m",
        strength: "~10⁻⁶",
        color: "bg-blue-500",
    },
    {
        name: "Gravity",
        description: "Attracts all mass/energy, shapes cosmic structure",
        carrier: "Graviton (theoretical)",
        range: "Infinite",
        strength: "~10⁻³⁹",
        color: "bg-purple-500",
    },
];

export function AtomicSciencePage({
    onBack,
    onGoToTable,
    onGoToAstrophysics,
    onGoToPhysicsRealWorld,
}: AtomicSciencePageProps) {
    const [historyAnimationKey, setHistoryAnimationKey] = useState(0);

    const replayHistoryAnimation = () => {
        setHistoryAnimationKey((prev) => prev + 1);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-950">
            {/* Header */}
            <header className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-40">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                                <Atom className="w-5 h-5 text-white" />
                            </div>
                        </motion.div>
                        <div>
                            <h1 className="text-2xl font-bold text-white">Atomic Science</h1>
                            <p className="text-sm text-slate-400">Understanding the Periodic Table</p>
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
                            onClick={onGoToAstrophysics}
                            className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors text-sm"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span className="hidden sm:inline">Cosmic Origins</span>
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
                        src="https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=1920&q=80"
                        alt="Atomic visualization"
                        className="w-full h-full object-cover opacity-20"
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
                            The Science Behind
                            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                                The Periodic Table
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8">
                            From ancient alchemists to quantum mechanics—discover how humanity organized the
                            building blocks of matter and uncovered the subatomic world.
                        </p>

                        {/* Quick Navigation */}
                        <div className="flex flex-wrap justify-center gap-3 mt-12">
                            <a
                                href="#history"
                                className="px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500 text-white text-sm hover:scale-105 transition-transform"
                            >
                                📜 History
                            </a>
                            <a
                                href="#atomic-structure"
                                className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500 text-white text-sm hover:scale-105 transition-transform"
                            >
                                ⚛️ Atomic Structure
                            </a>
                            <a
                                href="#standard-model"
                                className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500 text-white text-sm hover:scale-105 transition-transform"
                            >
                                🔬 Standard Model
                            </a>
                            <a
                                href="#forces"
                                className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500 text-white text-sm hover:scale-105 transition-transform"
                            >
                                ⚡ Fundamental Forces
                            </a>
                            <a
                                href="#energy-mass"
                                className="px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500 text-white text-sm hover:scale-105 transition-transform"
                            >
                                ⚖️ E=mc²
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <main className="container mx-auto px-4 py-8 space-y-24">
                {/* History Section */}
                <section id="history" className="scroll-mt-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                <History className="inline-block w-10 h-10 mr-3 text-amber-400" />
                                History of the Periodic Table
                            </h2>
                            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-4">
                                The periodic table wasn&apos;t discovered in a single moment—it evolved over
                                centuries as scientists recognized patterns in nature.
                            </p>
                            <button
                                onClick={replayHistoryAnimation}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/50 text-amber-300 rounded-full text-sm font-medium transition-all hover:scale-105"
                            >
                                <RotateCcw className="w-4 h-4" />
                                Replay Timeline Animation
                            </button>
                        </div>

                        {/* Timeline */}
                        <div className="relative" key={historyAnimationKey}>
                            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-500 via-purple-500 to-indigo-500 hidden md:block"></div>

                            <div className="space-y-12">
                                {periodicTableHistory.map((event, index) => (
                                    <motion.div
                                        key={event.year}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className={`flex flex-col md:flex-row items-center gap-6 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                            }`}
                                    >
                                        <div
                                            className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                                        >
                                            <div
                                                className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-colors`}
                                            >
                                                <div
                                                    className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:justify-end" : ""
                                                        }`}
                                                >
                                                    <div
                                                        className={`p-2 rounded-lg bg-gradient-to-br ${event.color}`}
                                                    >
                                                        <event.icon className="w-5 h-5 text-white" />
                                                    </div>
                                                    <span className="text-2xl font-bold text-white">{event.year}</span>
                                                </div>
                                                <h3
                                                    className={`text-xl font-semibold bg-gradient-to-r ${event.color} bg-clip-text text-transparent mb-2`}
                                                >
                                                    {event.scientist}
                                                </h3>
                                                <p className="text-slate-300">{event.contribution}</p>
                                            </div>
                                        </div>

                                        <div className="hidden md:flex w-12 h-12 rounded-full bg-slate-900 border-4 border-slate-700 items-center justify-center z-10">
                                            <div
                                                className={`w-4 h-4 rounded-full bg-gradient-to-br ${event.color}`}
                                            ></div>
                                        </div>

                                        <div className="flex-1 hidden md:block"></div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Mendeleev's Prediction */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-16 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 border border-purple-500/30 rounded-3xl p-8"
                        >
                            <h3 className="text-2xl font-bold text-white mb-4 text-center">
                                🔮 Mendeleev&apos;s Remarkable Predictions
                            </h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
                                    <h4 className="text-purple-400 font-semibold mb-2">Eka-Aluminum (Gallium)</h4>
                                    <p className="text-slate-400 text-sm">
                                        Predicted 1871 • Discovered 1875
                                        <br />
                                        Mendeleev predicted: density 5.9, melting point low
                                        <br />
                                        Actual: density 5.91, melts at 29.76°C
                                    </p>
                                </div>
                                <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
                                    <h4 className="text-purple-400 font-semibold mb-2">Eka-Silicon (Germanium)</h4>
                                    <p className="text-slate-400 text-sm">
                                        Predicted 1871 • Discovered 1886
                                        <br />
                                        Mendeleev predicted: atomic weight ~72, density 5.5
                                        <br />
                                        Actual: atomic weight 72.6, density 5.32
                                    </p>
                                </div>
                                <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
                                    <h4 className="text-purple-400 font-semibold mb-2">Eka-Boron (Scandium)</h4>
                                    <p className="text-slate-400 text-sm">
                                        Predicted 1871 • Discovered 1879
                                        <br />
                                        Mendeleev predicted: oxide formula Eb₂O₃
                                        <br />
                                        Actual: Sc₂O₃ exactly as predicted
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Atomic Structure Section */}
                <section id="atomic-structure" className="scroll-mt-24 space-y-16">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            <Atom className="inline-block w-10 h-10 mr-3 text-blue-400" />
                            Atomic Structure
                        </h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            Understanding how atoms are organized reveals why the periodic table works.
                        </p>
                    </div>

                    {atomicStructure.map((section, index) => (
                        <motion.div
                            key={section.id}
                            id={section.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="scroll-mt-24"
                        >
                            {/* Section Header */}
                            <div
                                className={`relative rounded-3xl overflow-hidden ${section.bgColor} border ${section.borderColor}`}
                            >
                                <div className="absolute inset-0">
                                    <img
                                        src={section.image}
                                        alt={section.title}
                                        className="w-full h-full object-cover opacity-20"
                                    />
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-r ${section.color} opacity-20`}
                                    ></div>
                                </div>

                                <div className="relative p-8 md:p-12">
                                    <div className="flex items-start gap-6">
                                        <div
                                            className={`p-4 rounded-2xl bg-gradient-to-br ${section.color} shadow-lg`}
                                        >
                                            <section.icon className="w-10 h-10 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                                                {section.title}
                                            </h2>
                                            <p className="text-xl text-slate-300">{section.subtitle}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section Content */}
                            <div className="mt-8 grid lg:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
                                        <h3 className="text-xl font-bold text-white mb-4">Overview</h3>
                                        <p className="text-slate-300 leading-relaxed">{section.description}</p>
                                    </div>

                                    <div
                                        className={`${section.bgColor} ${section.borderColor} border rounded-2xl p-6`}
                                    >
                                        <h3 className="text-lg font-bold text-white mb-2">Key Formula</h3>
                                        <code className="text-lg text-white/90 font-mono">{section.equation}</code>
                                    </div>

                                    <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl p-6">
                                        <h3 className="text-lg font-bold text-cyan-300 mb-2">💡 Did You Know?</h3>
                                        <p className="text-slate-300">{section.funFact}</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-white">Key Concepts</h3>
                                    {section.details.map((item, i) => (
                                        <motion.div
                                            key={item.title}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-5 border border-slate-700"
                                        >
                                            <h4
                                                className={`font-semibold mb-2 bg-gradient-to-r ${section.color} bg-clip-text text-transparent`}
                                            >
                                                {item.title}
                                            </h4>
                                            <p className="text-slate-400 text-sm leading-relaxed">{item.content}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </section>

                {/* Standard Model Section */}
                <section id="standard-model" className="scroll-mt-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                <Zap className="inline-block w-10 h-10 mr-3 text-purple-400" />
                                The Standard Model
                            </h2>
                            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
                                The Standard Model of particle physics describes all known fundamental particles
                                and three of the four fundamental forces. It&apos;s the most successful theory in
                                physics history.
                            </p>
                        </div>

                        {/* Standard Model Diagram */}
                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-6 md:p-10 border border-slate-700">
                            <div className="grid lg:grid-cols-3 gap-8">
                                {/* Quarks */}
                                <div>
                                    <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                                        <div className="w-4 h-4 rounded-full bg-red-500"></div>
                                        Quarks (6)
                                    </h3>
                                    <p className="text-slate-400 text-sm mb-4">
                                        Never found alone—always bound by gluons into hadrons (protons, neutrons)
                                    </p>
                                    <div className="space-y-2">
                                        {standardModelParticles.quarks.map((particle) => (
                                            <div
                                                key={particle.name}
                                                className="bg-slate-900/50 rounded-lg p-3 border border-red-500/30 hover:border-red-500/60 transition-colors"
                                            >
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <span className="text-white font-semibold">{particle.name}</span>
                                                        <span className="text-red-400 ml-2 font-mono">
                                                            ({particle.symbol})
                                                        </span>
                                                    </div>
                                                    <span className="text-xs text-slate-500">Gen {particle.generation}</span>
                                                </div>
                                                <div className="text-xs text-slate-400 mt-1">
                                                    Charge: {particle.charge} • Mass: {particle.mass}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Leptons */}
                                <div>
                                    <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                                        <div className="w-4 h-4 rounded-full bg-green-500"></div>
                                        Leptons (6)
                                    </h3>
                                    <p className="text-slate-400 text-sm mb-4">
                                        Don&apos;t feel the strong force—electrons, muons, taus, and their neutrinos
                                    </p>
                                    <div className="space-y-2">
                                        {standardModelParticles.leptons.map((particle) => (
                                            <div
                                                key={particle.name}
                                                className="bg-slate-900/50 rounded-lg p-3 border border-green-500/30 hover:border-green-500/60 transition-colors"
                                            >
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <span className="text-white font-semibold">{particle.name}</span>
                                                        <span className="text-green-400 ml-2 font-mono">
                                                            ({particle.symbol})
                                                        </span>
                                                    </div>
                                                    <span className="text-xs text-slate-500">Gen {particle.generation}</span>
                                                </div>
                                                <div className="text-xs text-slate-400 mt-1">
                                                    Charge: {particle.charge} • Mass: {particle.mass}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Bosons */}
                                <div>
                                    <h3 className="text-xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
                                        <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                                        Force Carriers (5)
                                    </h3>
                                    <p className="text-slate-400 text-sm mb-4">
                                        Mediate fundamental forces between matter particles
                                    </p>
                                    <div className="space-y-2">
                                        {standardModelParticles.bosons.map((particle) => (
                                            <div
                                                key={particle.name}
                                                className="bg-slate-900/50 rounded-lg p-3 border border-yellow-500/30 hover:border-yellow-500/60 transition-colors"
                                            >
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <span className="text-white font-semibold">{particle.name}</span>
                                                        <span className="text-yellow-400 ml-2 font-mono">
                                                            ({particle.symbol})
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="text-xs text-slate-400 mt-1">
                                                    {particle.force} • Mass: {particle.mass}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Atom Composition */}
                            <div className="mt-10 pt-8 border-t border-slate-700">
                                <h3 className="text-2xl font-bold text-white text-center mb-6">
                                    How Atoms Are Built
                                </h3>
                                <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                                    <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-4 w-full md:w-auto">
                                        <div className="text-3xl mb-2">⬆️⬆️⬇️</div>
                                        <div className="text-white font-semibold">Proton</div>
                                        <div className="text-slate-400 text-sm">2 up + 1 down quark</div>
                                        <div className="text-red-400 text-xs">Charge: +1</div>
                                    </div>
                                    <div className="text-4xl text-slate-500">+</div>
                                    <div className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-4 w-full md:w-auto">
                                        <div className="text-3xl mb-2">⬆️⬇️⬇️</div>
                                        <div className="text-white font-semibold">Neutron</div>
                                        <div className="text-slate-400 text-sm">1 up + 2 down quarks</div>
                                        <div className="text-blue-400 text-xs">Charge: 0</div>
                                    </div>
                                    <div className="text-4xl text-slate-500">+</div>
                                    <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-4 w-full md:w-auto">
                                        <div className="text-3xl mb-2">e⁻</div>
                                        <div className="text-white font-semibold">Electron</div>
                                        <div className="text-slate-400 text-sm">Fundamental lepton</div>
                                        <div className="text-green-400 text-xs">Charge: -1</div>
                                    </div>
                                    <div className="text-4xl text-slate-500">=</div>
                                    <div className="bg-purple-500/20 border border-purple-500/30 rounded-xl p-4 w-full md:w-auto">
                                        <div className="text-3xl mb-2">⚛️</div>
                                        <div className="text-white font-semibold">Atom</div>
                                        <div className="text-slate-400 text-sm">Building block of matter</div>
                                        <div className="text-purple-400 text-xs">Charge: 0 (neutral)</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Higgs Boson Callout */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="mt-8 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-yellow-500/10 border border-yellow-500/30 rounded-2xl p-6"
                        >
                            <h3 className="text-xl font-bold text-yellow-400 mb-3">
                                🏆 The Higgs Boson: &quot;The God Particle&quot;
                            </h3>
                            <p className="text-slate-300">
                                Discovered at CERN in 2012, the Higgs boson explains why particles have mass.
                                Particles interact with the Higgs field—the more they interact, the more massive
                                they are. Photons don&apos;t interact with it, so they&apos;re massless. The
                                discovery confirmed the last piece of the Standard Model and won the 2013 Nobel
                                Prize for Higgs and Englert.
                            </p>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Fundamental Forces Section */}
                <section id="forces" className="scroll-mt-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                ⚡ The Four Fundamental Forces
                            </h2>
                            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                                All interactions in the universe can be explained by just four fundamental forces.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {fundamentalForces.map((force, index) => (
                                <motion.div
                                    key={force.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-colors"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`w-4 h-4 rounded-full ${force.color} mt-1`}></div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-white mb-2">{force.name}</h3>
                                            <p className="text-slate-400 text-sm mb-4">{force.description}</p>
                                            <div className="grid grid-cols-3 gap-4 text-sm">
                                                <div>
                                                    <div className="text-slate-500">Carrier</div>
                                                    <div className="text-white font-medium">{force.carrier}</div>
                                                </div>
                                                <div>
                                                    <div className="text-slate-500">Range</div>
                                                    <div className="text-white font-medium">{force.range}</div>
                                                </div>
                                                <div>
                                                    <div className="text-slate-500">Relative Strength</div>
                                                    <div className="text-white font-medium">{force.strength}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-8 text-center text-slate-400 text-sm">
                            <p>
                                Note: Gravity is not included in the Standard Model. A quantum theory of gravity
                                remains one of physics&apos; biggest unsolved problems.
                            </p>
                        </div>
                    </motion.div>
                </section>

                {/* Energy-Mass Equivalence Section */}
                <section id="energy-mass" className="scroll-mt-24 py-16">
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
                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mx-auto shadow-lg shadow-amber-500/50">
                                    <Scale className="w-12 h-12 text-white" />
                                </div>
                            </motion.div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                Energy-Mass Equivalence
                            </h2>
                            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
                                Einstein&apos;s most famous equation reveals that energy and mass are two forms of the same thing—
                                a discovery that explains how the universe created matter from pure energy.
                            </p>
                        </div>

                        {/* E=mc² Hero */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative mb-16"
                        >
                            <div className="bg-gradient-to-br from-amber-900/40 via-orange-900/30 to-red-900/40 rounded-3xl p-8 md:p-12 border border-amber-500/30 overflow-hidden">
                                {/* Animated background particles */}
                                <div className="absolute inset-0 overflow-hidden">
                                    {Array.from({ length: 20 }).map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0 }}
                                            animate={{
                                                opacity: [0, 1, 0],
                                                x: [Math.random() * 100, Math.random() * 100 + 50],
                                                y: [Math.random() * 100, Math.random() * 100 - 50],
                                            }}
                                            transition={{
                                                duration: Math.random() * 3 + 2,
                                                repeat: Infinity,
                                                delay: Math.random() * 2,
                                            }}
                                            className="absolute w-2 h-2 bg-amber-400 rounded-full"
                                            style={{
                                                left: `${Math.random() * 100}%`,
                                                top: `${Math.random() * 100}%`,
                                            }}
                                        />
                                    ))}
                                </div>

                                <div className="relative z-10 text-center">
                                    <motion.div
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="mb-8"
                                    >
                                        <span className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-amber-300 via-orange-400 to-red-400 bg-clip-text text-transparent">
                                            E = mc²
                                        </span>
                                    </motion.div>

                                    <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                                        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-amber-500/20">
                                            <span className="text-4xl font-bold text-amber-400">E</span>
                                            <p className="text-white font-medium mt-2">Energy</p>
                                            <p className="text-slate-400 text-sm">Measured in Joules</p>
                                        </div>
                                        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-orange-500/20">
                                            <span className="text-4xl font-bold text-orange-400">m</span>
                                            <p className="text-white font-medium mt-2">Mass</p>
                                            <p className="text-slate-400 text-sm">Measured in kilograms</p>
                                        </div>
                                        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-red-500/20">
                                            <span className="text-4xl font-bold text-red-400">c²</span>
                                            <p className="text-white font-medium mt-2">Speed of Light²</p>
                                            <p className="text-slate-400 text-sm">~9 × 10¹⁶ m²/s²</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* The Early Universe Timeline */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-bold text-white text-center mb-8">
                                <Flame className="inline-block w-8 h-8 mr-2 text-orange-400" />
                                From Energy to Matter: The First Moments
                            </h3>

                            <div className="relative">
                                {/* Timeline line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-500 via-orange-500 to-yellow-500 hidden md:block" />

                                {[
                                    {
                                        time: "10⁻⁴³ seconds",
                                        title: "Planck Epoch",
                                        description: "The universe is infinitely hot and dense. All four fundamental forces are unified. Physics as we know it doesn't apply yet.",
                                        temp: "10³² K",
                                        color: "from-red-500 to-rose-600",
                                        image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80",
                                    },
                                    {
                                        time: "10⁻³⁶ seconds",
                                        title: "Grand Unification Epoch",
                                        description: "Gravity separates from the other forces. The strong force begins to separate. Inflation begins—the universe expands exponentially.",
                                        temp: "10²⁸ K",
                                        color: "from-orange-500 to-amber-600",
                                        image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=800&q=80",
                                    },
                                    {
                                        time: "10⁻¹² seconds",
                                        title: "Electroweak Epoch",
                                        description: "Electromagnetic and weak forces separate. The Higgs field 'turns on,' giving particles mass. Quarks and leptons exist as a hot plasma.",
                                        temp: "10¹⁵ K",
                                        color: "from-yellow-500 to-orange-600",
                                        image: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=800&q=80",
                                    },
                                    {
                                        time: "10⁻⁶ seconds",
                                        title: "Quark Epoch",
                                        description: "The universe is a quark-gluon plasma. Energy continuously converts to particle-antiparticle pairs and back. The cosmic tug-of-war begins.",
                                        temp: "10¹² K",
                                        color: "from-amber-500 to-yellow-600",
                                        image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=800&q=80",
                                    },
                                    {
                                        time: "1 second",
                                        title: "Hadron Epoch",
                                        description: "Quarks combine to form protons and neutrons. A tiny asymmetry means slightly more matter than antimatter—this leftover matter becomes everything we see.",
                                        temp: "10¹⁰ K",
                                        color: "from-green-500 to-emerald-600",
                                        image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80",
                                    },
                                    {
                                        time: "3 minutes",
                                        title: "Nucleosynthesis",
                                        description: "Protons and neutrons fuse into hydrogen, helium, and traces of lithium nuclei. The universe is still too hot for atoms—electrons roam free.",
                                        temp: "10⁹ K",
                                        color: "from-cyan-500 to-blue-600",
                                        image: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=800&q=80",
                                    },
                                    {
                                        time: "380,000 years",
                                        title: "Recombination",
                                        description: "The universe cools enough for electrons to bind with nuclei, forming neutral atoms. Light can finally travel freely—this is the cosmic microwave background we see today.",
                                        temp: "3,000 K",
                                        color: "from-blue-500 to-indigo-600",
                                        image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&q=80",
                                    },
                                ].map((epoch, index) => (
                                    <motion.div
                                        key={epoch.time}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className={`flex flex-col md:flex-row items-center gap-6 mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                            }`}
                                    >
                                        <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                                            <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700">
                                                <div className="relative h-40">
                                                    <img
                                                        src={epoch.image}
                                                        alt={epoch.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                    <div className={`absolute inset-0 bg-gradient-to-t ${epoch.color} opacity-50`} />
                                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900">
                                                        <div className="flex items-center gap-2 justify-between">
                                                            <span className="text-white font-bold">{epoch.time}</span>
                                                            <span className="text-xs bg-black/50 px-2 py-1 rounded text-orange-300">{epoch.temp}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="p-4">
                                                    <h4 className="text-xl font-bold text-white mb-2">{epoch.title}</h4>
                                                    <p className="text-slate-300 text-sm">{epoch.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 border-4 border-slate-900 z-10 hidden md:block shadow-lg shadow-amber-500/50" />
                                        <div className="flex-1 hidden md:block" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Matter-Antimatter Asymmetry */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-2xl p-8 border border-purple-500/30 mb-16"
                        >
                            <h3 className="text-2xl font-bold text-white text-center mb-6">
                                🔮 The Matter-Antimatter Mystery
                            </h3>

                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="flex-1">
                                    <p className="text-slate-300 mb-4">
                                        In the first moments, energy created equal amounts of matter and antimatter.
                                        When they met, they annihilated back into energy. So why does anything exist at all?
                                    </p>
                                    <p className="text-slate-300 mb-4">
                                        For every billion antimatter particles, there were a billion and <span className="text-purple-400 font-bold">one</span> matter
                                        particles. This tiny asymmetry—one part in a billion—is why you exist.
                                    </p>
                                    <div className="bg-black/30 rounded-xl p-4 text-center">
                                        <p className="text-slate-400 text-sm mb-2">The cosmic ratio:</p>
                                        <p className="text-2xl font-mono text-white">
                                            <span className="text-purple-400">1,000,000,001</span> matter vs <span className="text-pink-400">1,000,000,000</span> antimatter
                                        </p>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    {/* Animated particle collision */}
                                    <div className="relative h-64 bg-black/30 rounded-xl overflow-hidden">
                                        <motion.div
                                            animate={{ x: ["-100%", "100%"] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                            className="absolute top-1/2 left-0 w-8 h-8 bg-purple-500 rounded-full transform -translate-y-1/2 shadow-lg shadow-purple-500/50"
                                        />
                                        <motion.div
                                            animate={{ x: ["200%", "0%"] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                            className="absolute top-1/2 right-0 w-8 h-8 bg-pink-500 rounded-full transform -translate-y-1/2 shadow-lg shadow-pink-500/50"
                                        />
                                        <motion.div
                                            animate={{ scale: [0, 2, 0], opacity: [0, 1, 0] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                                            className="absolute top-1/2 left-1/2 w-16 h-16 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"
                                        />
                                        <div className="absolute bottom-4 left-0 right-0 text-center">
                                            <p className="text-slate-400 text-sm">Matter + Antimatter → Energy</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Energy Conversion Examples */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-bold text-white text-center mb-8">
                                ⚡ The Power of E=mc²
                            </h3>

                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    {
                                        title: "1 gram of matter",
                                        energy: "90 trillion Joules",
                                        equivalent: "Equal to 21 kilotons of TNT—the Hiroshima bomb",
                                        icon: "💥",
                                        color: "from-red-500 to-orange-600",
                                    },
                                    {
                                        title: "The Sun (per second)",
                                        energy: "4 million tons → energy",
                                        equivalent: "4 × 10²⁶ watts of power output",
                                        icon: "☀️",
                                        color: "from-yellow-500 to-amber-600",
                                    },
                                    {
                                        title: "Your body mass",
                                        energy: "~7 × 10¹⁸ Joules",
                                        equivalent: "Could power the entire world for 2 days",
                                        icon: "🧬",
                                        color: "from-green-500 to-emerald-600",
                                    },
                                ].map((example, index) => (
                                    <motion.div
                                        key={example.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.02, y: -5 }}
                                        className={`bg-gradient-to-br ${example.color} bg-opacity-20 rounded-xl p-6 border border-slate-700 hover:border-slate-500 transition-all`}
                                    >
                                        <span className="text-4xl">{example.icon}</span>
                                        <h4 className="text-lg font-bold text-white mt-3">{example.title}</h4>
                                        <p className="text-amber-300 font-medium mt-2">{example.energy}</p>
                                        <p className="text-slate-300 text-sm mt-2">{example.equivalent}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Key Insight */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-red-500/10 rounded-2xl p-8 border border-amber-500/30"
                        >
                            <div className="flex items-center justify-center gap-4 mb-6">
                                <Zap className="w-8 h-8 text-amber-400" />
                                <ArrowRight className="w-6 h-6 text-slate-400" />
                                <Atom className="w-8 h-8 text-cyan-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white text-center mb-4">
                                The Cosmic Recipe for Everything
                            </h3>
                            <p className="text-slate-300 text-center max-w-3xl mx-auto text-lg leading-relaxed">
                                You are made of atoms that were forged in stars, from elements created in the first
                                minutes of the universe, from particles that crystallized out of pure energy in the
                                first microseconds after the Big Bang. Energy became mass, mass became atoms, atoms
                                became stars, and stars became you. <span className="text-amber-400 font-semibold">E=mc²</span> isn&apos;t
                                just an equation—it&apos;s your origin story.
                            </p>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Summary Section */}
                <section className="py-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/30 rounded-3xl p-8 md:p-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
                            The Periodic Table: Nature&apos;s Fingerprint
                        </h2>

                        <div className="grid md:grid-cols-4 gap-6 mb-8">
                            <div className="text-center">
                                <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                    118
                                </div>
                                <div className="text-slate-400">Known Elements</div>
                            </div>
                            <div className="text-center">
                                <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                                    17
                                </div>
                                <div className="text-slate-400">Fundamental Particles</div>
                            </div>
                            <div className="text-center">
                                <div className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                                    4
                                </div>
                                <div className="text-slate-400">Fundamental Forces</div>
                            </div>
                            <div className="text-center">
                                <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    1
                                </div>
                                <div className="text-slate-400">Unified Theory (goal)</div>
                            </div>
                        </div>

                        <p className="text-slate-300 text-center max-w-3xl mx-auto text-lg leading-relaxed">
                            The periodic table represents humanity&apos;s greatest organizational achievement in
                            chemistry. From Mendeleev&apos;s inspired arrangement to modern quantum mechanics, we
                            now understand that the table&apos;s structure emerges from the quantum behavior of
                            electrons. Every pattern, every trend, every chemical reaction can be traced back to
                            the fundamental particles and forces described by the Standard Model.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mt-8">
                            <button
                                onClick={onGoToTable}
                                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-full font-semibold inline-flex items-center gap-2 shadow-lg shadow-cyan-500/30 transition-all"
                            >
                                <Table className="w-5 h-5" />
                                Explore the Periodic Table
                            </button>
                            <button
                                onClick={onGoToAstrophysics}
                                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full font-semibold inline-flex items-center gap-2 shadow-lg shadow-purple-500/30 transition-all"
                            >
                                <Sparkles className="w-5 h-5" />
                                Cosmic Origins
                            </button>
                        </div>
                    </motion.div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-slate-900/50 border-t border-slate-700 mt-12">
                <div className="container mx-auto px-4 py-6 text-center text-slate-400 text-sm">
                    <p>Atomic Science • Understanding the Building Blocks of Matter</p>
                </div>
            </footer>
        </div>
    );
}
