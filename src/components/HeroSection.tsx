import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { siteContent } from '../config/siteConfig';

interface HeroSectionProps {
  onScrollDown: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollDown }) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center px-6 py-20 text-center overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-gradient-to-b from-[#5c1322]/20 via-[#401018]/10 to-transparent blur-[120px] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative max-w-3xl mx-auto z-10 flex flex-col items-center">
        {/* Subtle dedication note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#d48b97] font-sans-clean mb-8"
        >
          <span className="w-8 h-[1px] bg-[#d48b97]/40" />
          <span>{siteContent.hero.dateTag}</span>
          <span className="w-8 h-[1px] bg-[#d48b97]/40" />
        </motion.div>

        {/* Expressive Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#faf5ee] leading-[1.18] tracking-tight mb-8"
        >
          {siteContent.hero.title}
        </motion.h1>

        {/* Sincere Romantic Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-sans-clean text-base sm:text-lg md:text-xl text-[#f7ede2]/80 max-w-2xl font-light leading-relaxed mb-14"
        >
          {siteContent.hero.subtitle}
        </motion.p>

        {/* Gentle Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          onClick={onScrollDown}
          className="group flex flex-col items-center gap-2 text-xs tracking-widest uppercase text-[#d48b97]/70 hover:text-[#d48b97] transition-colors cursor-pointer"
        >
          <span className="font-light">{siteContent.hero.scrollHint}</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-4 h-4 text-[#d48b97]" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};
