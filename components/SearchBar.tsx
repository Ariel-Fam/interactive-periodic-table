"use client";

import { Search, X } from "lucide-react";
import { Element } from "@/lib/data/elements";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  suggestions: Element[];
  onSuggestionClick: (element: Element) => void;
}

export function SearchBar({ value, onChange, onClear, suggestions, onSuggestionClick }: SearchBarProps) {
  const showSuggestions = value.length > 0 && suggestions.length > 0;

  return (
    <div className="relative max-w-md mx-auto mb-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search by name, symbol, or atomic number..."
          className="w-full pl-10 pr-10 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {value && (
          <button
            onClick={onClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-slate-700 rounded transition-colors"
          >
            <X className="w-4 h-4 text-slate-400" />
          </button>
        )}
      </div>

      {/* Suggestions dropdown */}
      {showSuggestions && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-slate-700 rounded-lg shadow-xl max-h-64 overflow-y-auto z-50">
          {suggestions.map((element) => (
            <button
              key={element.atomicNumber}
              onClick={() => onSuggestionClick(element)}
              className="w-full px-4 py-3 hover:bg-slate-700 transition-colors flex items-center gap-3 border-b border-slate-700 last:border-b-0"
            >
              <div className="w-12 h-12 flex flex-col items-center justify-center bg-slate-900 rounded border border-slate-600">
                <span className="text-xs text-slate-400">{element.atomicNumber}</span>
                <span className="text-lg font-bold text-white">{element.symbol}</span>
              </div>
              <div className="text-left flex-1">
                <div className="text-white font-semibold">{element.name}</div>
                <div className="text-sm text-slate-400 capitalize">{element.category.replace("-", " ")}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
