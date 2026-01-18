"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Home, Sparkles, GraduationCap, Cpu } from "lucide-react";
import { CoverPage } from "@/components/CoverPage";
import { PeriodicTable } from "@/components/PeriodicTable";
import { ElementDetail } from "@/components/ElementDetail";
import { SearchBar } from "@/components/SearchBar";
import { AstrophysicsPage } from "@/components/AstrophysicsPage";
import { AtomicSciencePage } from "@/components/AtomicSciencePage";
import { PhysicsRealWorldPage } from "@/components/PhysicsRealWorldPage";
import { elements, Element } from "@/lib/data/elements";
import Image from "next/image";

type AppView = "cover" | "table" | "astrophysics" | "atomicScience" | "physicsRealWorld";

export function PeriodicTableApp() {
  const [currentView, setCurrentView] = useState<AppView>("cover");
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);
  const [elementImages, setElementImages] = useState<Record<number, string>>({});
  const [searchQuery, setSearchQuery] = useState("");

  // Preload element images for all elements
  useEffect(() => {
    const loadImages = async () => {
      // Comprehensive element images from Wikimedia Commons and other sources
      const images: Record<number, string> = {
        // Period 1
        1: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Hydrogen_discharge_tube.jpg/800px-Hydrogen_discharge_tube.jpg", // Hydrogen
        2: "https://images.unsplash.com/photo-1612896008575-32623e0acb79?w=800&q=80", // Helium balloons

        // Period 2
        3: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Lithium_paraffin.jpg/800px-Lithium_paraffin.jpg", // Lithium
        4: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Be-140g.jpg/800px-Be-140g.jpg", // Beryllium
        5: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Boron_R105.jpg/800px-Boron_R105.jpg", // Boron
        6: "https://images.unsplash.com/photo-1689881258887-bfc6b5437c42?w=800&q=80", // Carbon (diamond)
        7: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Nitrogen_ice_cream_preparation.jpg/800px-Nitrogen_ice_cream_preparation.jpg", // Nitrogen
        8: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Liquid_oxygen_in_a_beaker_4.jpg/800px-Liquid_oxygen_in_a_beaker_4.jpg", // Oxygen
        9: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Fluoro_gases.jpg/800px-Fluoro_gases.jpg", // Fluorine
        10: "https://images.unsplash.com/photo-1676408576346-65bcebe33513?w=800&q=80", // Neon lights

        // Period 3
        11: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Na_%28Sodium%29.jpg/800px-Na_%28Sodium%29.jpg", // Sodium
        12: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Magnesium_crystals.jpg/800px-Magnesium_crystals.jpg", // Magnesium
        13: "https://images.unsplash.com/photo-1617565085082-86acf3aa563d?w=800&q=80", // Aluminum
        14: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/SiliconCroda.jpg/800px-SiliconCroda.jpg", // Silicon
        15: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Phosphorus-red.jpg/800px-Phosphorus-red.jpg", // Phosphorus
        16: "https://images.unsplash.com/photo-1633982103503-efa9731ca567?w=800&q=80", // Sulfur
        17: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Chlorine_ampoule.jpg/800px-Chlorine_ampoule.jpg", // Chlorine
        18: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Argon_discharge_tube.jpg/800px-Argon_discharge_tube.jpg", // Argon

        // Period 4
        19: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Potassium.JPG/800px-Potassium.JPG", // Potassium
        20: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Calcium_unter_Argon_Schutzgasatmosph%C3%A4re.jpg/800px-Calcium_unter_Argon_Schutzgasatmosph%C3%A4re.jpg", // Calcium
        21: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Scandium_sublimed_dendritic_and_1cm3_cube.jpg/800px-Scandium_sublimed_dendritic_and_1cm3_cube.jpg", // Scandium
        22: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Titan-crystal_bar.JPG/800px-Titan-crystal_bar.JPG", // Titanium
        23: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Vanadium_etched.jpg/800px-Vanadium_etched.jpg", // Vanadium
        24: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Chromium_crystals_and_1cm3_cube.jpg/800px-Chromium_crystals_and_1cm3_cube.jpg", // Chromium
        25: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Mangan_1-crop.jpg/800px-Mangan_1-crop.jpg", // Manganese
        26: "https://images.unsplash.com/photo-1556684299-aa1d71bedb7c?w=800&q=80", // Iron
        27: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Kobalt_electrolite_and_1cm3_cube.jpg/800px-Kobalt_electrolite_and_1cm3_cube.jpg", // Cobalt
        28: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Nickel_chunk.jpg/800px-Nickel_chunk.jpg", // Nickel
        29: "https://images.unsplash.com/photo-1562690074-328e69c326ea?w=800&q=80", // Copper
        30: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Zinc_fragment_sublimed_and_1cm3_cube.jpg/800px-Zinc_fragment_sublimed_and_1cm3_cube.jpg", // Zinc
        31: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Gallium_crystals.jpg/800px-Gallium_crystals.jpg", // Gallium
        32: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Polycrystalline-germanium.jpg/800px-Polycrystalline-germanium.jpg", // Germanium
        33: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Arsen_1a.jpg/800px-Arsen_1a.jpg", // Arsenic
        34: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Selenium.jpg/800px-Selenium.jpg", // Selenium
        35: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Bromine_vial_in_acrylic_cube.jpg/800px-Bromine_vial_in_acrylic_cube.jpg", // Bromine
        36: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Krypton_discharge_tube.jpg/800px-Krypton_discharge_tube.jpg", // Krypton

        // Period 5
        37: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Rb5.JPG/800px-Rb5.JPG", // Rubidium
        38: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Strontium_destilled_crystals.jpg/800px-Strontium_destilled_crystals.jpg", // Strontium
        39: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Yttrium_sublimed_dendritic_and_1cm3_cube.jpg/800px-Yttrium_sublimed_dendritic_and_1cm3_cube.jpg", // Yttrium
        40: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Zirconium_crystal_bar_and_1cm3_cube.jpg/800px-Zirconium_crystal_bar_and_1cm3_cube.jpg", // Zirconium
        41: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Niobium_crystals_and_1cm3_cube.jpg/800px-Niobium_crystals_and_1cm3_cube.jpg", // Niobium
        42: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Molybdenum_crystaline_fragment_and_1cm3_cube.jpg/800px-Molybdenum_crystaline_fragment_and_1cm3_cube.jpg", // Molybdenum
        43: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Technetium-99m_in_vial.jpg/640px-Technetium-99m_in_vial.jpg", // Technetium
        44: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Ruthenium_a_half_bar.jpg/800px-Ruthenium_a_half_bar.jpg", // Ruthenium
        45: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Rhodium_powder_pressed_melted.jpg/800px-Rhodium_powder_pressed_melted.jpg", // Rhodium
        46: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Palladium.jpg/800px-Palladium.jpg", // Palladium
        47: "https://images.unsplash.com/photo-1740071747223-2aa69e145f35?w=800&q=80", // Silver
        48: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Cadmium-crystal_bar.jpg/800px-Cadmium-crystal_bar.jpg", // Cadmium
        49: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Indium.jpg/800px-Indium.jpg", // Indium
        50: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Tin-alpha-beta.jpg/800px-Tin-alpha-beta.jpg", // Tin
        51: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Antimony-4.jpg/800px-Antimony-4.jpg", // Antimony
        52: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Tellurium2.jpg/800px-Tellurium2.jpg", // Tellurium
        53: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Iod_kristall.jpg/800px-Iod_kristall.jpg", // Iodine
        54: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Xenon_discharge_tube.jpg/800px-Xenon_discharge_tube.jpg", // Xenon

        // Period 6
        55: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Cesium.jpg/800px-Cesium.jpg", // Cesium
        56: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg/800px-Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg", // Barium
        57: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Lanthanum-2.jpg/800px-Lanthanum-2.jpg", // Lanthanum
        58: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Cerium2.jpg/800px-Cerium2.jpg", // Cerium
        59: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Praseodymium.jpg/800px-Praseodymium.jpg", // Praseodymium
        60: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Neodymium2.jpg/800px-Neodymium2.jpg", // Neodymium
        61: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Pm-147_spectrum.jpg/800px-Pm-147_spectrum.jpg", // Promethium
        62: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Samarium-2.jpg/800px-Samarium-2.jpg", // Samarium
        63: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Europium.jpg/800px-Europium.jpg", // Europium
        64: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Gadolinium-4.jpg/800px-Gadolinium-4.jpg", // Gadolinium
        65: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Terbium-2.jpg/800px-Terbium-2.jpg", // Terbium
        66: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Dysprosium-2.jpg/800px-Dysprosium-2.jpg", // Dysprosium
        67: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Holmium2.jpg/800px-Holmium2.jpg", // Holmium
        68: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Erbium-crop.jpg/800px-Erbium-crop.jpg", // Erbium
        69: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Thulium_sublimed_dendritic_and_1cm3_cube.jpg/800px-Thulium_sublimed_dendritic_and_1cm3_cube.jpg", // Thulium
        70: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Ytterbium-3.jpg/800px-Ytterbium-3.jpg", // Ytterbium
        71: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Lutetium_sublimed_dendritic_and_1cm3_cube.jpg/800px-Lutetium_sublimed_dendritic_and_1cm3_cube.jpg", // Lutetium
        72: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Hafnium_bits.jpg/800px-Hafnium_bits.jpg", // Hafnium
        73: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Tantalum_single_crystal_and_1cm3_cube.jpg/800px-Tantalum_single_crystal_and_1cm3_cube.jpg", // Tantalum
        74: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Tungsten_rod_with_evaporated_crystals_and_1cm3_cube.jpg/800px-Tungsten_rod_with_evaporated_crystals_and_1cm3_cube.jpg", // Tungsten
        75: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Rhenium_single_crystal_bar_and_target.jpg/800px-Rhenium_single_crystal_bar_and_target.jpg", // Rhenium
        76: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Osmium_crystals.jpg/800px-Osmium_crystals.jpg", // Osmium
        77: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Iridium-2.jpg/800px-Iridium-2.jpg", // Iridium
        78: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Platinum_crystals.jpg/800px-Platinum_crystals.jpg", // Platinum
        79: "https://images.unsplash.com/photo-1759150467270-aa4496d4c61a?w=800&q=80", // Gold
        80: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Pouring_liquid_mercury_bionerd.jpg/800px-Pouring_liquid_mercury_bionerd.jpg", // Mercury
        81: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Thallium_pieces_in_ampoule.jpg/800px-Thallium_pieces_in_ampoule.jpg", // Thallium
        82: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Lead_electrolytic_and_1cm3_cube.jpg/800px-Lead_electrolytic_and_1cm3_cube.jpg", // Lead
        83: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Bismuth_crystals_and_1cm3_cube.jpg/800px-Bismuth_crystals_and_1cm3_cube.jpg", // Bismuth
        84: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Polonium_alpha_decay.svg/800px-Polonium_alpha_decay.svg.png", // Polonium
        85: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Astatine-211_decay_scheme.svg/800px-Astatine-211_decay_scheme.svg.png", // Astatine
        86: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Radon_gas_tube.jpg/800px-Radon_gas_tube.jpg", // Radon

        // Period 7
        87: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Francium-223_decay_chain.svg/800px-Francium-223_decay_chain.svg.png", // Francium
        88: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Radium226.jpg/800px-Radium226.jpg", // Radium
        89: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Actinium_sample_%2831481701837%29.png/800px-Actinium_sample_%2831481701837%29.png", // Actinium
        90: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Thorium_sample_0.1g.jpg/800px-Thorium_sample_0.1g.jpg", // Thorium
        91: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Protactinium.jpg/640px-Protactinium.jpg", // Protactinium
        92: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/HEUraniumC.jpg/800px-HEUraniumC.jpg", // Uranium
        93: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Np_sphere.jpg/800px-Np_sphere.jpg", // Neptunium
        94: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Pu_ring.jpg/800px-Pu_ring.jpg", // Plutonium
        95: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Americium_microscope.jpg/640px-Americium_microscope.jpg", // Americium
        96: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Cm-244_alpha_decay.svg/800px-Cm-244_alpha_decay.svg.png", // Curium
        97: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Berkelium_metal.jpg/640px-Berkelium_metal.jpg", // Berkelium
        98: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Cf-252_neutron_source.jpg/800px-Cf-252_neutron_source.jpg", // Californium
        99: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Es-254_gamma_ray_spectrum.svg/800px-Es-254_gamma_ray_spectrum.svg.png", // Einsteinium
        100: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Electron_shell_100_Fermium.svg/800px-Electron_shell_100_Fermium.svg.png", // Fermium
        101: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Electron_shell_101_Mendelevium.svg/800px-Electron_shell_101_Mendelevium.svg.png", // Mendelevium
        102: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Electron_shell_102_Nobelium.svg/800px-Electron_shell_102_Nobelium.svg.png", // Nobelium
        103: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Electron_shell_103_Lawrencium.svg/800px-Electron_shell_103_Lawrencium.svg.png", // Lawrencium
        104: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Electron_shell_104_Rutherfordium.svg/800px-Electron_shell_104_Rutherfordium.svg.png", // Rutherfordium
        105: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Electron_shell_105_Dubnium.svg/800px-Electron_shell_105_Dubnium.svg.png", // Dubnium
        106: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Electron_shell_106_Seaborgium.svg/800px-Electron_shell_106_Seaborgium.svg.png", // Seaborgium
        107: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Electron_shell_107_Bohrium.svg/800px-Electron_shell_107_Bohrium.svg.png", // Bohrium
        108: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Electron_shell_108_Hassium.svg/800px-Electron_shell_108_Hassium.svg.png", // Hassium
        109: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Electron_shell_109_Meitnerium.svg/800px-Electron_shell_109_Meitnerium.svg.png", // Meitnerium
        110: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Electron_shell_110_Darmstadtium.svg/800px-Electron_shell_110_Darmstadtium.svg.png", // Darmstadtium
        111: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Electron_shell_111_Roentgenium.svg/800px-Electron_shell_111_Roentgenium.svg.png", // Roentgenium
        112: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Electron_shell_112_Copernicium.svg/800px-Electron_shell_112_Copernicium.svg.png", // Copernicium
        113: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Electron_shell_113_Nihonium.svg/800px-Electron_shell_113_Nihonium.svg.png", // Nihonium
        114: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Electron_shell_114_Flerovium.svg/800px-Electron_shell_114_Flerovium.svg.png", // Flerovium
        115: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Electron_shell_115_Moscovium.svg/800px-Electron_shell_115_Moscovium.svg.png", // Moscovium
        116: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Electron_shell_116_Livermorium.svg/800px-Electron_shell_116_Livermorium.svg.png", // Livermorium
        117: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Electron_shell_117_Tennessine.svg/800px-Electron_shell_117_Tennessine.svg.png", // Tennessine
        118: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Electron_shell_118_Oganesson.svg/800px-Electron_shell_118_Oganesson.svg.png", // Oganesson
      };

      setElementImages(images);
    };

    if (currentView === "table") {
      loadImages();
    }
  }, [currentView]);

  const handleElementClick = (element: Element) => {
    setSelectedElement(element);
    setSearchQuery(""); // Clear search when selecting
  };

  const handleCloseDetail = () => {
    setSelectedElement(null);
  };

  const handleBackToHome = () => {
    setCurrentView("cover");
    setSelectedElement(null);
    setSearchQuery("");
  };

  const handleGoToTable = () => {
    setCurrentView("table");
    setSelectedElement(null);
    setSearchQuery("");
  };

  const handleGoToAstrophysics = () => {
    setCurrentView("astrophysics");
    setSelectedElement(null);
    setSearchQuery("");
  };

  const handleGoToAtomicScience = () => {
    setCurrentView("atomicScience");
    setSelectedElement(null);
    setSearchQuery("");
  };

  const handleGoToPhysicsRealWorld = () => {
    setCurrentView("physicsRealWorld");
    setSelectedElement(null);
    setSearchQuery("");
  };

  // Filter elements based on search
  const searchSuggestions = searchQuery
    ? elements.filter((el) => {
      const query = searchQuery.toLowerCase();
      return (
        el.name.toLowerCase().includes(query) ||
        el.symbol.toLowerCase().includes(query) ||
        el.atomicNumber.toString() === query
      );
    }).slice(0, 5)
    : [];

  if (currentView === "cover") {
    return (
      <CoverPage
        onEnter={handleGoToTable}
        onAstrophysics={handleGoToAstrophysics}
        onAtomicScience={handleGoToAtomicScience}
        onPhysicsRealWorld={handleGoToPhysicsRealWorld}
      />
    );
  }

  if (currentView === "astrophysics") {
    return (
      <AstrophysicsPage
        onBack={handleBackToHome}
        onGoToTable={handleGoToTable}
        onGoToAtomicScience={handleGoToAtomicScience}
        onGoToPhysicsRealWorld={handleGoToPhysicsRealWorld}
      />
    );
  }

  if (currentView === "atomicScience") {
    return (
      <AtomicSciencePage
        onBack={handleBackToHome}
        onGoToTable={handleGoToTable}
        onGoToAstrophysics={handleGoToAstrophysics}
        onGoToPhysicsRealWorld={handleGoToPhysicsRealWorld}
      />
    );
  }

  if (currentView === "physicsRealWorld") {
    return (
      <PhysicsRealWorldPage
        onBack={handleBackToHome}
        onGoToTable={handleGoToTable}
        onGoToAstrophysics={handleGoToAstrophysics}
        onGoToAtomicScience={handleGoToAtomicScience}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Image src="/space_pointer.png" alt="Periodic Table" width={40} height={40} />
              </div>
            </motion.div>
            <div>
              <h1 className="text-2xl font-bold text-white">Periodic Table Explorer</h1>
              <p className="text-sm text-slate-400">Interactive Chemistry Reference</p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleGoToAtomicScience}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg transition-colors text-sm"
            >
              <GraduationCap className="w-4 h-4" />
              <span className="hidden sm:inline">Atomic Science</span>
            </button>
            <button
              onClick={handleGoToAstrophysics}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors text-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span className="hidden sm:inline">Cosmic Origins</span>
            </button>
            <button
              onClick={handleGoToPhysicsRealWorld}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg transition-colors text-sm"
            >
              <Cpu className="w-4 h-4" />
              <span className="hidden sm:inline">Physics & Tech</span>
            </button>
            <button
              onClick={handleBackToHome}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors border border-slate-700 text-sm"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              Click on any element to explore
            </h2>
            <p className="text-slate-400">
              Discover properties, bonding types, and fascinating facts about each element
            </p>
          </div>

          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            onClear={() => setSearchQuery("")}
            suggestions={searchSuggestions}
            onSuggestionClick={handleElementClick}
          />

          <PeriodicTable
            elements={elements}
            onElementClick={handleElementClick}
            selectedElement={selectedElement}
          />
        </motion.div>
      </main>

      {/* Element Detail Modal */}
      <AnimatePresence>
        {selectedElement && (
          <ElementDetail
            element={selectedElement}
            onClose={handleCloseDetail}
            imageUrl={elementImages[selectedElement.atomicNumber]}
          />
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-slate-900/50 border-t border-slate-700 mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-slate-400 text-sm">
          <p>Interactive Periodic Table • Explore the building blocks of matter</p>
          <p>Launch Narrative Software © All rights reserved {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
