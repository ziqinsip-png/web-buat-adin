import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, Volume2, VolumeX, AlertCircle, Music } from 'lucide-react';
import { siteContent } from '../config/siteConfig';

interface MusicPlayerProps {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  isPlaying: boolean;
  onTogglePlay: () => void;
  audioError: boolean;
  needsInteraction: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({
  audioRef,
  isPlaying,
  onTogglePlay,
  audioError,
  needsInteraction,
}) => {
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.muted = isMuted;
    }
  }, [volume, isMuted, audioRef]);

  const toggleMute = () => {
    if (audioRef.current) {
      const nextMuted = !isMuted;
      audioRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (val === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-40">
      <AnimatePresence>
        {needsInteraction && !isPlaying && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mb-2 bg-[#2d0f17]/95 border border-[#d48b97]/30 text-[#f7ede2] text-xs px-3 py-1.5 rounded-full shadow-lg backdrop-blur-md flex items-center gap-2 cursor-pointer"
            onClick={onTogglePlay}
          >
            <Music className="w-3.5 h-3.5 text-[#e8d5b5]" />
            <span>Klik untuk memutar musik latar</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="flex items-center gap-2 sm:gap-3 p-2 sm:p-2.5 rounded-full bg-[#1b0d13]/90 border border-[#d48b97]/25 backdrop-blur-xl shadow-2xl shadow-black/70 text-[#faf5ee]"
        onMouseEnter={() => setShowVolumeSlider(true)}
        onMouseLeave={() => setShowVolumeSlider(false)}
      >
        {/* Play / Pause Button */}
        <button
          onClick={onTogglePlay}
          disabled={audioError}
          aria-label={isPlaying ? 'Jeda musik' : 'Putar musik'}
          className={`p-2 sm:p-2.5 rounded-full transition-colors cursor-pointer ${
            audioError
              ? 'bg-red-950/40 text-red-300 opacity-60'
              : 'bg-[#401018] hover:bg-[#571622] text-[#faf5ee]'
          }`}
        >
          {audioError ? (
            <AlertCircle className="w-4 h-4 text-red-400" />
          ) : isPlaying ? (
            <Pause className="w-4 h-4 fill-current" />
          ) : (
            <Play className="w-4 h-4 fill-current translate-x-0.5" />
          )}
        </button>

        {/* Animated Soundwave Indicator */}
        <div className="hidden sm:flex items-center gap-1 px-1">
          {[0, 1, 2, 3].map((bar) => (
            <motion.span
              key={bar}
              animate={
                isPlaying && !audioError
                  ? {
                      height: [6, 16, 8, 18, 6][(bar + 1) % 5],
                    }
                  : { height: 4 }
              }
              transition={
                isPlaying
                  ? {
                      repeat: Infinity,
                      duration: 0.8 + bar * 0.15,
                      ease: 'easeInOut',
                    }
                  : { duration: 0.2 }
              }
              className={`w-0.5 rounded-full ${
                isPlaying ? 'bg-[#d48b97]' : 'bg-[#d48b97]/40'
              }`}
            />
          ))}
        </div>

        {/* Track Label */}
        <div className="hidden md:flex flex-col pr-2 text-left">
          <span className="text-xs font-editorial text-[#faf5ee] leading-tight">
            {siteContent.music.title}
          </span>
          <span className="text-[10px] text-[#f7ede2]/50 font-sans-clean">
            {audioError ? 'Tautan audio bermasalah' : isPlaying ? 'Sedang diputar' : 'Dihentikan'}
          </span>
        </div>

        {/* Volume Slider (Expandable) */}
        <div className="flex items-center gap-2">
          {showVolumeSlider && !audioError && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 68, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              className="flex items-center overflow-hidden"
            >
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                aria-label="Volume musik"
                className="w-16 h-1 accent-[#d48b97] bg-white/20 rounded-lg appearance-none cursor-pointer"
              />
            </motion.div>
          )}

          {/* Mute Button */}
          <button
            onClick={toggleMute}
            disabled={audioError}
            aria-label={isMuted ? 'Nyalakan suara' : 'Bisukan'}
            className="p-1.5 sm:p-2 rounded-full hover:bg-white/10 text-[#f7ede2]/80 hover:text-[#faf5ee] transition-colors cursor-pointer"
          >
            {isMuted || volume === 0 ? (
              <VolumeX className="w-4 h-4 text-white/50" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
