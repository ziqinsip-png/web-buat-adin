import React from 'react';
import { motion } from 'motion/react';
import { VideoItem } from './VideoItem';
import { siteContent, getMediaUrl } from '../config/siteConfig';

export const VideoSection: React.FC = () => {
  const video1Url = getMediaUrl('video1');

  return (
    <section className="relative py-24 sm:py-32 px-6 max-w-5xl mx-auto">
      {/* Subtle section watermark or indicator */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#d48b97] font-sans-clean mb-3"
        >
          <span className="w-6 h-[1px] bg-[#d48b97]/40" />
          <span>Arsip Bergerak</span>
          <span className="w-6 h-[1px] bg-[#d48b97]/40" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-editorial text-3xl sm:text-4xl md:text-5xl font-light text-[#faf5ee]"
        >
          Detik yang Tak Pernah Pudar
        </motion.h2>
      </div>

      {/* SINGLE SPECIAL VIDEO */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <VideoItem
          url={video1Url}
          caption={siteContent.video.caption}
          title={siteContent.video.title}
          description={siteContent.video.description}
          layoutVariant="left"
          indexLabel="01"
          orientation="portrait"
        />
      </motion.div>
    </section>
  );
};
