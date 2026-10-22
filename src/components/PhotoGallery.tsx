import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Maximize2 } from 'lucide-react';
import { siteContent, getMediaUrl } from '../config/siteConfig';
import { PhotoLightbox } from './PhotoLightbox';

export const PhotoGallery: React.FC = () => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  // Map 5 photos using configuration
  const photos = siteContent.gallery.photos.map((item) => ({
    id: item.id,
    url: getMediaUrl(item.urlKey as any),
    caption: item.caption,
    date: item.date,
    aspect: item.aspect,
  }));

  // Varied rotations and alignments for 5-photo scrapbook aesthetic (2 on top, 3 below)
  const layoutStyles = [
    {
      colSpan: 'sm:col-span-6 lg:col-span-6',
      rotation: '-rotate-1 hover:rotate-0',
      aspectClass: 'aspect-[4/5] sm:aspect-[3/4]',
      tapePosition: '-top-3 left-8 rotate-[-3deg]',
    },
    {
      colSpan: 'sm:col-span-6 lg:col-span-6',
      rotation: 'rotate-1 hover:rotate-0',
      aspectClass: 'aspect-[4/5] sm:aspect-[3/4]',
      tapePosition: '-top-3 right-10 rotate-[2deg]',
    },
    {
      colSpan: 'sm:col-span-6 lg:col-span-4',
      rotation: 'rotate-1.5 hover:rotate-0',
      aspectClass: 'aspect-[4/5] sm:aspect-[3/4]',
      tapePosition: '-top-3 left-10 rotate-[4deg]',
    },
    {
      colSpan: 'sm:col-span-6 lg:col-span-4',
      rotation: '-rotate-1 hover:rotate-0',
      aspectClass: 'aspect-[4/5] sm:aspect-[3/4]',
      tapePosition: '-top-3 right-8 rotate-[-2deg]',
    },
    {
      colSpan: 'sm:col-span-12 lg:col-span-4 flex justify-center',
      rotation: 'rotate-1 hover:rotate-0',
      aspectClass: 'aspect-[4/5] sm:aspect-[3/4] max-w-[400px] sm:max-w-none w-full',
      tapePosition: '-top-3 left-12 rotate-[3deg]',
    },
  ];

  return (
    <section className="relative py-28 sm:py-36 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#d48b97] font-sans-clean mb-3"
        >
          <span className="w-6 h-[1px] bg-[#d48b97]/40" />
          <span>{siteContent.gallery.sectionTag}</span>
          <span className="w-6 h-[1px] bg-[#d48b97]/40" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-editorial text-3xl sm:text-4xl md:text-5xl font-light text-[#faf5ee] mb-4"
        >
          {siteContent.gallery.sectionTitle}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans-clean text-sm sm:text-base text-[#f7ede2]/70 max-w-lg font-light leading-relaxed"
        >
          {siteContent.gallery.sectionDescription}
        </motion.p>
      </div>

      {/* 5-Photo Editorial Scrapbook Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-10 sm:gap-12 items-start">
        {photos.map((photo, index) => {
          const style = layoutStyles[index] || layoutStyles[0];

          return (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`${style.colSpan}`}
            >
              <div
                onClick={() => setActivePhotoIndex(index)}
                className={`relative group w-full cursor-pointer transition-transform duration-500 ease-out ${style.rotation}`}
              >
                {/* Vintage Washi Tape Accent */}
                <div
                  className={`absolute ${style.tapePosition} w-16 h-5 bg-[#e8d5b5]/40 backdrop-blur-xs border border-[#e8d5b5]/30 shadow-xs z-20 pointer-events-none rounded-xs`}
                />

                {/* Photo Card with Fine Matte Border */}
                <div className="p-3 sm:p-4 rounded-xl bg-[#1b0d13] border border-[#d48b97]/20 shadow-xl shadow-black/50 group-hover:border-[#d48b97]/40 group-hover:shadow-2xl transition-all duration-300">
                  <div
                    className={`relative overflow-hidden rounded-lg bg-[#28131c] ${style.aspectClass}`}
                  >
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      referrerPolicy="no-referrer"
                      crossOrigin="anonymous"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src.includes('i.ibb.co.com')) {
                          target.src = target.src.replace('i.ibb.co.com', 'i.ibb.co');
                        } else if (target.src.includes('i.ibb.co/')) {
                          target.src = target.src.replace('i.ibb.co/', 'i.ibb.co.com/');
                        }
                      }}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Hover expand hint */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <div className="p-2.5 rounded-full bg-black/60 text-[#faf5ee] backdrop-blur-md">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Refined Editorial Caption */}
                  <div className="pt-3.5 pb-1 px-1">
                    <div className="text-[11px] tracking-wider uppercase text-[#d48b97]/80 font-sans-clean mb-1">
                      0{index + 1} · {photo.date}
                    </div>
                    <p className="font-editorial text-base sm:text-lg text-[#faf5ee] font-light leading-snug">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <PhotoLightbox
        photos={photos}
        currentIndex={activePhotoIndex}
        onClose={() => setActivePhotoIndex(null)}
        onNavigate={(idx) => setActivePhotoIndex(idx)}
      />
    </section>
  );
};
