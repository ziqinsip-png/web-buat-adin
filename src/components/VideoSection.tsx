import React from 'react';
import { motion } from 'motion/react';
import { VideoItem } from './VideoItem';
import { siteContent, getMediaUrl } from '../config/siteConfig';

export const VideoSection: React.FC = () => {
  const video1Url = getMediaUrl('video1');
  const video2Url = getMediaUrl('video2');

  return (
    <section className="relative py-24 sm:py-32 px-6 max-w-6xl mx-auto">
      {/* Subtle section watermark or indicator */}
      <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
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

      <div className="space-y-24 sm:space-y-36">
        {/* VIDEO 1 */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <VideoItem
            url={video1Url}
            caption={siteContent.video1.caption}
            title={siteContent.video1.title}
            description={siteContent.video1.description}
            layoutVariant="left"
            indexLabel="01"
            orientation="portrait"
          />
        </motion.div>

        {/* Delicate divider flourish */}
        <div className="flex items-center justify-center gap-4 py-4">
          <span className="w-12 h-[1px] bg-[#d48b97]/20" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#d48b97]/30" />
          <span className="w-12 h-[1px] bg-[#d48b97]/20" />
        </div>

        {/* VIDEO 2 */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <VideoItem
            url={video2Url}
            caption={siteContent.video2.caption}
            title={siteContent.video2.title}
            description={siteContent.video2.description}
            layoutVariant="right"
            indexLabel="02"
            orientation="landscape"
          />
        </motion.div>
      </div>
    </section>
  );
};
