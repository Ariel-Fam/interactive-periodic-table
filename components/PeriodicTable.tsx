"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Element, getCategoryColor } from "@/lib/data/elements";

interface PeriodicTableProps {
  elements: Element[];
  onElementClick: (element: Element) => void;
  selectedElement: Element | null;
}

interface HoverInfo {
  element: Element;
  x: number;
  y: number;
}

export function PeriodicTable({ elements, onElementClick, selectedElement }: PeriodicTableProps) {
  const [hoveredElement, setHoveredElement] = useState<HoverInfo | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (element: Element, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();

    if (containerRect) {
      // Position the popup near the hovered element
      let x = rect.left - containerRect.left + rect.width / 2;
      let y = rect.top - containerRect.top;

      // Adjust if too close to edges
      const popupWidth = 200;
      const popupHeight = 180;

      if (x + popupWidth / 2 > containerRect.width) {
        x = containerRect.width - popupWidth / 2 - 20;
      }
      if (x - popupWidth / 2 < 0) {
        x = popupWidth / 2 + 20;
      }
      if (y - popupHeight < 0) {
        y = rect.bottom - containerRect.top + 10;
      }

      setHoveredElement({ element, x, y });
    }
  };

  const handleMouseLeave = () => {
    setHoveredElement(null);
  };

  // Create a grid layout for the periodic table
  const renderElementCell = (element: Element) => {
    const isSelected = selectedElement?.atomicNumber === element.atomicNumber;
    const isHovered = hoveredElement?.element.atomicNumber === element.atomicNumber;
    const hasHover = hoveredElement !== null;
    const colorClass = getCategoryColor(element.category);

    return (
      <motion.button
        key={element.atomicNumber}
        onMouseEnter={(e) => handleMouseEnter(element, e)}
        onMouseLeave={handleMouseLeave}
        whileTap={{ scale: 0.95 }}
        onClick={() => onElementClick(element)}
        className={`${colorClass} ${isSelected ? "ring-2 ring-white" : ""} ${hasHover && !isHovered ? "opacity-40 blur-[1px]" : ""
          } ${isHovered ? "ring-2 ring-white shadow-xl z-20" : ""} relative rounded-lg p-2 border transition-all duration-200 cursor-pointer h-20 flex flex-col items-center justify-center hover:shadow-lg`}
        style={{
          gridColumn: element.gridColumn || "auto",
          gridRow: element.gridRow || "auto",
        }}
      >
        <span className="text-xs opacity-70">{element.atomicNumber}</span>
        <span className="text-2xl font-bold">{element.symbol}</span>
        <span className="text-xs opacity-80 truncate max-w-full">{element.name}</span>
      </motion.button>
    );
  };

  // Sort elements by atomic number for display
  const allElements = [...elements].sort((a, b) => a.atomicNumber - b.atomicNumber);

  // Get border color class for the zoomed popup
  const getZoomBorderColor = (category: string) => {
    const colors: Record<string, string> = {
      "alkali-metal": "border-red-500 shadow-red-500/50",
      "alkaline-earth-metal": "border-orange-500 shadow-orange-500/50",
      "transition-metal": "border-purple-500 shadow-purple-500/50",
      "post-transition-metal": "border-blue-500 shadow-blue-500/50",
      "metalloid": "border-yellow-500 shadow-yellow-500/50",
      "nonmetal": "border-green-500 shadow-green-500/50",
      "halogen": "border-teal-500 shadow-teal-500/50",
      "noble-gas": "border-cyan-500 shadow-cyan-500/50",
      "lanthanide": "border-pink-500 shadow-pink-500/50",
      "actinide": "border-rose-500 shadow-rose-500/50",
    };
    return colors[category] || "border-slate-500 shadow-slate-500/50";
  };

  return (
    <div className="w-full overflow-x-auto pb-8">
      <div className="min-w-[1200px] relative" ref={containerRef}>
        {/* Legend */}
        <div className="mb-6 flex flex-wrap gap-3 justify-center">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-red-500/20 border border-red-500"></div>
            <span className="text-sm text-white">Alkali Metal</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-orange-500/20 border border-orange-500"></div>
            <span className="text-sm text-white">Alkaline Earth</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-purple-500/20 border border-purple-500"></div>
            <span className="text-sm text-white">Transition Metal</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-blue-500/20 border border-blue-500"></div>
            <span className="text-sm text-white">Post-transition</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-yellow-500/20 border border-yellow-500"></div>
            <span className="text-sm text-white">Metalloid</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-green-500/20 border border-green-500"></div>
            <span className="text-sm text-white">Nonmetal</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-teal-500/20 border border-teal-500"></div>
            <span className="text-sm text-white">Halogen</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-cyan-500/20 border border-cyan-500"></div>
            <span className="text-sm text-white">Noble Gas</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-pink-500/20 border border-pink-500"></div>
            <span className="text-sm text-white">Lanthanide</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-rose-500/20 border border-rose-500"></div>
            <span className="text-sm text-white">Actinide</span>
          </div>
        </div>

        <p className="text-sm text-slate-400 text-center mb-4">Scroll horizontally on mobile devices, and small screen ratios. Hover over an element to see details.</p>
        <p className="text-sm text-slate-400 text-center mb-4">Click over an element to see details on mobile devices.</p>

        {/* Periodic Table Grid */}
        <div className="grid gap-1" style={{ gridTemplateColumns: "repeat(18, minmax(0, 1fr))", gridTemplateRows: "repeat(10, minmax(0, 1fr))" }}>
          {allElements.map((element) => renderElementCell(element))}
        </div>

        {/* Zoomed Element Popup */}
        <AnimatePresence>
          {hoveredElement && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className={`absolute pointer-events-none z-50 ${getCategoryColor(hoveredElement.element.category)} ${getZoomBorderColor(hoveredElement.element.category)} rounded-xl border-2 shadow-2xl backdrop-blur-sm`}
              style={{
                left: hoveredElement.x,
                top: hoveredElement.y - 190,
                transform: "translateX(-50%)",
                width: "200px",
              }}
            >
              {/* Large Element Card */}
              <div className="p-4 flex flex-col items-center">
                {/* Top row: Atomic Number and Mass */}
                <div className="w-full flex justify-between items-start mb-1">
                  <span className="text-lg font-bold text-white">{hoveredElement.element.atomicNumber}</span>
                  <span className="text-sm text-white/80">{hoveredElement.element.atomicMass?.toFixed(2)}</span>
                </div>

                {/* Symbol - Large */}
                <span className="text-6xl font-bold text-white my-2">{hoveredElement.element.symbol}</span>

                {/* Name */}
                <span className="text-lg font-medium text-white mb-2">{hoveredElement.element.name}</span>

                {/* Category */}
                <span className="text-xs text-white/70 capitalize px-2 py-1 bg-black/20 rounded-full">
                  {hoveredElement.element.category.replace(/-/g, " ")}
                </span>

                {/* Additional Info */}
                <div className="mt-3 w-full grid grid-cols-2 gap-2 text-xs">
                  {hoveredElement.element.electronegativity && (
                    <div className="text-center bg-black/20 rounded px-2 py-1 overflow-hidden">
                      <span className="text-white/60 block text-[10px]">Electroneg.</span>
                      <span className="text-white font-medium">{hoveredElement.element.electronegativity}</span>
                    </div>
                  )}
                  {hoveredElement.element.physicalState && (
                    <div className="text-center bg-black/20 rounded px-2 py-1">
                      <span className="text-white/60 block text-[10px]">State</span>
                      <span className="text-white font-medium capitalize">{hoveredElement.element.physicalState}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Arrow pointing down */}
              <div
                className={`absolute left-1/2 -bottom-2 w-4 h-4 transform -translate-x-1/2 rotate-45 ${getCategoryColor(hoveredElement.element.category)} border-r-2 border-b-2 ${getZoomBorderColor(hoveredElement.element.category).split(" ")[0]}`}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
