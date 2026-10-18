import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

interface PhotoItemData {
  id: number;
  url: string;
  caption: string;
  date: string;
}

interface PhotoLightboxProps {
  photos: PhotoItemData[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({
  photos,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < photos.length;
  const currentPhoto = isOpen ? photos[currentIndex] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const prev = (currentIndex - 1 + photos.length) % photos.length;
    onNavigate(prev);
  }, [currentIndex, photos.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const next = (currentIndex + 1) % photos.length;
    onNavigate(next);
  }, [currentIndex, photos.length, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Touch swipe support
  const touchStartX = React.useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <AnimatePresence>
      {isOpen && currentPhoto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-6"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            aria-label="Tutup foto"
            className="absolute top-5 right-5 sm:top-8 sm:right-8 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#faf5ee] backdrop-blur-md transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Foto sebelumnya"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-[#faf5ee] backdrop-blur-md transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Foto berikutnya"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-[#faf5ee] backdrop-blur-md transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Photo Content */}
          <motion.div
            key={currentPhoto.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[85vh] flex flex-col items-center select-none"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#160a0f] max-h-[70vh]">
              <img
                src={currentPhoto.url}
                alt={currentPhoto.caption}
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
                className="max-h-[70vh] w-auto object-contain"
                loading="eager"
              />
            </div>

            {/* Caption & Counter */}
            <div className="mt-4 text-center max-w-lg">
              <div className="text-xs uppercase tracking-widest text-[#d48b97] font-sans-clean mb-1">
                Foto 0{currentIndex + 1} dari 0{photos.length} · {currentPhoto.date}
              </div>
              <p className="font-editorial text-lg sm:text-xl text-[#faf5ee] font-light">
                {currentPhoto.caption}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
