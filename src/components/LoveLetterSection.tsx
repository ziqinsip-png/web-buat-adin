import React from 'react';
import { motion } from 'motion/react';
import { Feather, Heart } from 'lucide-react';
import { siteContent } from '../config/siteConfig';

export const LoveLetterSection: React.FC = () => {
  const { letter } = siteContent;

  return (
    <section className="relative py-28 sm:py-36 px-6 max-w-4xl mx-auto">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#5c1322]/15 blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#d48b97] font-sans-clean mb-3"
        >
          <Feather className="w-3.5 h-3.5 text-[#d48b97]" />
          <span>{letter.sectionTag}</span>
        </motion.div>
      </div>

      {/* The Letter Envelope / Card */}
      <motion.div
        initial={{ opacity: 0, y: 36, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-2xl bg-[#faf5ee] text-[#2c131a] p-8 sm:p-12 md:p-16 shadow-2xl shadow-black/70 border border-[#e8d5b5]/40 overflow-hidden"
      >
        {/* Subtle Paper Grain & Watermark */}
        <div className="absolute inset-0 bg-grain opacity-10 pointer-events-none" />
        <div className="absolute top-8 right-8 opacity-10 pointer-events-none">
          <Heart className="w-24 h-24 stroke-[0.8] text-[#401018]" />
        </div>

        {/* Letter Date */}
        <div className="flex justify-between items-center pb-6 mb-8 border-b border-[#2c131a]/10">
          <span className="text-xs font-sans-clean tracking-wider text-[#2c131a]/60 uppercase">
            {letter.date}
          </span>
          <span className="text-xs font-serif italic text-[#7a2232]">
            Teruntuk yang terkasih
          </span>
        </div>

        {/* Salutation */}
        <div className="mb-8">
          <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-[#2c131a] italic">
            {letter.salutation}
          </h3>
        </div>

        {/* Letter Paragraphs */}
        <div className="space-y-6 font-serif text-base sm:text-lg text-[#2c131a]/85 leading-relaxed tracking-wide">
          {letter.paragraphs.map((para, idx) => (
            <p key={idx} className={idx === 0 ? 'first-letter:text-4xl first-letter:font-editorial first-letter:text-[#7a2232] first-letter:mr-1 first-letter:float-left' : ''}>
              {para}
            </p>
          ))}
        </div>

        {/* Sign-off */}
        <div className="mt-12 pt-8 border-t border-[#2c131a]/10 flex flex-col items-end text-right">
          <p className="font-sans-clean text-xs sm:text-sm text-[#2c131a]/60 font-light mb-2">
            {letter.closing}
          </p>
          <p className="font-editorial text-xl sm:text-2xl text-[#521320] italic font-medium">
            {letter.signature}
          </p>
        </div>

        {/* Subtle Decorative Bottom Corner Detail */}
        <div className="absolute bottom-4 left-6 flex items-center gap-2 text-[#2c131a]/30">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7a2232]/40" />
          <span className="text-[10px] tracking-widest font-sans-clean uppercase">
            Surat Pribadi
          </span>
        </div>
      </motion.div>
    </section>
  );
};
