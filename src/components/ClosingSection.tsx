import React from 'react';
import { motion } from 'motion/react';
import { ArrowUp, Sparkles } from 'lucide-react';
import { siteContent } from '../config/siteConfig';

interface ClosingSectionProps {
  onScrollToTop: () => void;
}

export const ClosingSection: React.FC<ClosingSectionProps> = ({ onScrollToTop }) => {
  const { closing } = siteContent;

  return (
    <footer className="relative py-28 sm:py-36 px-6 text-center overflow-hidden border-t border-[#d48b97]/10">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-[#401018]/25 via-transparent to-transparent blur-[120px] pointer-events-none" />

      <div className="relative max-w-2xl mx-auto z-10 flex flex-col items-center">
        {/* Elegant Animated Closing Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative mb-8"
        >
          <div className="w-12 h-12 rounded-full bg-[#401018]/40 border border-[#d48b97]/30 flex items-center justify-center text-[#e8d5b5]">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          {/* Subtle concentric rings */}
          <div className="absolute inset-0 rounded-full border border-[#d48b97]/20 scale-125 animate-ping opacity-25" />
        </motion.div>

        {/* Emotionally Meaningful Message */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[#faf5ee] font-light leading-relaxed mb-6"
        >
          &ldquo;{closing.quote}&rdquo;
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-sans-clean text-xs sm:text-sm text-[#f7ede2]/60 font-light max-w-md mx-auto mb-12 leading-relaxed"
        >
          {closing.note}
        </motion.p>

        {/* Return to Top Button */}
        <motion.button
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.97 }}
          onClick={onScrollToTop}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1b0d13] hover:bg-[#2b121c] border border-[#d48b97]/25 text-[#f7ede2]/90 hover:text-[#faf5ee] text-xs font-sans-clean tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-lg shadow-black/40"
        >
          <ArrowUp className="w-3.5 h-3.5 text-[#d48b97]" />
          <span>{closing.buttonText}</span>
        </motion.button>
      </div>
    </footer>
  );
};
