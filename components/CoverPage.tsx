"use client";

import { motion } from "motion/react";
import { Atom, FlaskConical, BookOpen, ArrowRight, Sparkles, GraduationCap, Cpu } from "lucide-react";

interface CoverPageProps {
  onEnter: () => void;
  onAstrophysics: () => void;
  onAtomicScience: () => void;
  onPhysicsRealWorld: () => void;
}

export function CoverPage({ onEnter, onAstrophysics, onAtomicScience, onPhysicsRealWorld }: CoverPageProps) {
  return (
    <div className="min-h-screen bg-[url('/background.png')] mb-8 scale-110 bg-cover bg-center bg-no-repeat flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full text-center"
      >
        {/* Animated atoms */}
        <div className="relative h-48 mb-8 mt-14">
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Atom className="w-32 h-32 outline-purple-500 outline-8 outline-offset-2 rounded-full" />
          </motion.div>
          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <FlaskConical className="w-24 h-24 text-[#73be1d]" />
          </motion.div>
        </div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-6xl md:text-7xl font-bold text-[#73be1d] mb-4"
        >
          Periodic Table
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-xl text-amber-400 mb-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 0vh]"
        >
          Explore the building blocks of matter
        </motion.p>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <Atom className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Interactive Elements</h3>
            <p className="text-blue-200 text-sm">
              Click on any element to discover its properties
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <BookOpen className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Scientific Data</h3>
            <p className="text-blue-200 text-sm">
              Detailed information about bonds and properties
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <FlaskConical className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Visual Learning</h3>
            <p className="text-blue-200 text-sm">
              Images and facts to enhance understanding
            </p>
          </div>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onEnter}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2 shadow-lg shadow-blue-500/50 transition-all"
          >
            <Atom className="w-5 h-5" />
            Explore the Table
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onAstrophysics}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2 shadow-lg shadow-purple-500/50 transition-all"
          >
            <Sparkles className="w-5 h-5" />
            Cosmic Origins
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onAtomicScience}
            className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2 shadow-lg shadow-cyan-500/50 transition-all"
          >
            <GraduationCap className="w-5 h-5" />
            Atomic Science
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onPhysicsRealWorld}
            className="bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2 shadow-lg shadow-violet-500/50 transition-all"
          >
            <Cpu className="w-5 h-5" />
            Physics & Tech
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl"></div>
      </motion.div>
    </div>
  );
}
