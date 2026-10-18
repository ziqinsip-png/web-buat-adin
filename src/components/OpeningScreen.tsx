import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, HeartHandshake } from 'lucide-react';
import { siteContent } from '../config/siteConfig';

interface OpeningScreenProps {
  isOpen: boolean;
  onOpen: () => void;
}

export const OpeningScreen: React.FC<OpeningScreenProps> = ({ isOpen, onOpen }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -40, transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] } }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0507] px-6 text-center overflow-hidden"
    >
      {/* Ambient background light leaks */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#521320]/25 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#7a2232]/20 blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none" />

      {/* Decorative subtle frame border */}
      <div className="absolute inset-6 md:inset-10 border border-[#f7ede2]/10 pointer-events-none rounded-2xl" />

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-xl mx-auto flex flex-col items-center z-10"
      >
        {/* Intimate quiet header */}
        <div className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#d48b97] font-sans-clean mb-8">
          <span className="w-6 h-[1px] bg-[#d48b97]/40" />
          <span>Sebuah Catatan Pribadi</span>
          <span className="w-6 h-[1px] bg-[#d48b97]/40" />
        </div>

        {/* Expressive Editorial Headline */}
        <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-light text-[#faf5ee] leading-[1.3] mb-6 tracking-wide">
          &ldquo;{siteContent.opening.message}&rdquo;
        </h1>

        <p className="font-sans-clean text-sm sm:text-base text-[#f7ede2]/70 max-w-md mx-auto mb-12 font-light leading-relaxed">
          {siteContent.opening.subtext}
        </p>

        {/* Elegant Action Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={onOpen}
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#401018] hover:bg-[#571622] text-[#faf5ee] text-sm tracking-wide font-medium shadow-xl shadow-[#401018]/40 border border-[#d48b97]/30 transition-all duration-300 cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-[#e8d5b5] group-hover:rotate-12 transition-transform duration-300" />
          <span>{siteContent.opening.buttonText}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#e8d5b5]/60 group-hover:bg-[#e8d5b5]" />
        </motion.button>

        <p className="mt-8 text-xs text-[#f7ede2]/40 tracking-wider font-light">
          Nyalakan audio untuk pengalaman yang lebih hangat
        </p>
      </motion.div>
    </motion.div>
  );
};
