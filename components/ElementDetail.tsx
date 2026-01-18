"use client";

import { motion } from "motion/react";
import { X, Atom, Thermometer, Link2, FlaskConical, Lightbulb } from "lucide-react";
import { Element, getCategoryColor } from "@/lib/data/elements";
import { ImageWithFallback } from "@/components/ImageWithFallback";

interface ElementDetailProps {
  element: Element;
  onClose: () => void;
  imageUrl?: string;
}

export function ElementDetail({ element, onClose, imageUrl }: ElementDetailProps) {
  const colorClass = getCategoryColor(element.category);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-slate-900 border border-slate-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
      >
        {/* Header */}
        <div className={`${colorClass} p-6 border-b border-slate-700 relative`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className={`${colorClass} w-32 h-32 rounded-xl flex flex-col items-center justify-center border-2`}>
                <span className="text-sm opacity-70 text-white">{element.atomicNumber}</span>
                <span className="text-5xl font-bold text-white">{element.symbol}</span>
                <span className="text-xs opacity-80 text-white">{element.atomicMass?.toFixed(3) ?? "—"}</span>
              </div>
            </div>
            
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-white mb-2">{element.name}</h2>
              <p className="text-xl text-white/80 capitalize mb-2">{element.category.replace("-", " ")}</p>
              <div className="flex gap-4 text-sm text-white/70">
                {element.group && <span>Group {element.group}</span>}
                <span>Period {element.period}</span>
                {element.physicalState && <span className="capitalize">{element.physicalState}</span>}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Image */}
          {imageUrl && (
            <div className="rounded-xl overflow-hidden bg-slate-800">
              <ImageWithFallback
                src={imageUrl}
                alt={`${element.name} sample`}
                className="w-full h-64 object-cover"
              />
            </div>
          )}

          {/* Properties Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Physical Properties */}
            <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
              <div className="flex items-center gap-2 mb-3">
                <Thermometer className="w-5 h-5 text-blue-400" />
                <h3 className="font-semibold text-white">Physical Properties</h3>
              </div>
              <div className="space-y-2 text-sm">
                {element.meltingPoint && (
                  <div className="flex justify-between">
                    <span className="text-slate-400">Melting Point:</span>
                    <span className="text-white">{element.meltingPoint.toFixed(2)} K</span>
                  </div>
                )}
                {element.boilingPoint && (
                  <div className="flex justify-between">
                    <span className="text-slate-400">Boiling Point:</span>
                    <span className="text-white">{element.boilingPoint.toFixed(2)} K</span>
                  </div>
                )}
                {element.density && (
                  <div className="flex justify-between">
                    <span className="text-slate-400">Density:</span>
                    <span className="text-white">{element.density} g/cm³</span>
                  </div>
                )}
                {element.color && (
                  <div className="flex justify-between">
                    <span className="text-slate-400">Color:</span>
                    <span className="text-white">{element.color}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Atomic Properties */}
            <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
              <div className="flex items-center gap-2 mb-3">
                <Atom className="w-5 h-5 text-purple-400" />
                <h3 className="font-semibold text-white">Atomic Properties</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Atomic Mass:</span>
                  <span className="text-white">{element.atomicMass ?? "—"} u</span>
                </div>
                {element.electronegativity && (
                  <div className="flex justify-between">
                    <span className="text-slate-400">Electronegativity:</span>
                    <span className="text-white">{element.electronegativity}</span>
                  </div>
                )}
                {element.oxidationStates && (
                  <div className="flex justify-between">
                    <span className="text-slate-400">Oxidation States:</span>
                    <span className="text-white">{element.oxidationStates}</span>
                  </div>
                )}
                {element.electronConfiguration && (
                  <div>
                    <span className="text-slate-400">Electron Config:</span>
                    <div className="text-white mt-1 font-mono text-xs">{element.electronConfiguration}</div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bonding Types */}
          {element.bondingTypes && element.bondingTypes.length > 0 && (
            <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
              <div className="flex items-center gap-2 mb-3">
                <Link2 className="w-5 h-5 text-green-400" />
                <h3 className="font-semibold text-white">Bonding Types</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {element.bondingTypes.map((bond, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-green-500/20 border border-green-500 rounded-full text-sm text-green-300"
                  >
                    {bond}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Uses */}
          {element.uses && element.uses.length > 0 && (
            <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
              <div className="flex items-center gap-2 mb-3">
                <FlaskConical className="w-5 h-5 text-cyan-400" />
                <h3 className="font-semibold text-white">Common Uses</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {element.uses.map((use, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-cyan-500/20 border border-cyan-500 rounded-full text-sm text-cyan-300"
                  >
                    {use}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Interesting Facts */}
          {element.facts && element.facts.length > 0 && (
            <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-5 h-5 text-yellow-400" />
                <h3 className="font-semibold text-white">Interesting Facts</h3>
              </div>
              <ul className="space-y-2">
                {element.facts.map((fact, index) => (
                  <li key={index} className="flex gap-2 text-sm text-slate-300">
                    <span className="text-yellow-400 flex-shrink-0">•</span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
