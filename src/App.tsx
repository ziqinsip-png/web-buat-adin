import React, { useState, useRef, useEffect, useCallback } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';
import { Settings2 } from 'lucide-react';
import { OpeningScreen } from './components/OpeningScreen';
import { HeroSection } from './components/HeroSection';
import { VideoSection } from './components/VideoSection';
import { PhotoGallery } from './components/PhotoGallery';
import { LoveLetterSection } from './components/LoveLetterSection';
import { ClosingSection } from './components/ClosingSection';
import { MusicPlayer } from './components/MusicPlayer';
import { MediaSettingsModal } from './components/MediaSettingsModal';
import { getMediaUrl } from './config/siteConfig';

export default function App() {
  const [isOpeningOpen, setIsOpeningOpen] = useState(true);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const [needsInteraction, setNeedsInteraction] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Smooth scroll progress tracking
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  // Clean up any stale fallback URLs from localStorage on mount
  useEffect(() => {
    ['video1', 'video2', 'photo1', 'photo2', 'photo3', 'photo4', 'photo5', 'music'].forEach((k) => {
      const v = localStorage.getItem(`romantic_site_${k}`);
      if (
        v &&
        (v.startsWith('PASTE_') ||
          v.includes('unsplash') ||
          v.includes('mixkit') ||
          v.includes('freesound') ||
          v.includes('streamable.com') ||
          v.includes('1792339392086') ||
          v.includes('IMG-20261018') ||
          (v.includes('i.ibb.co/') && !v.includes('i.ibb.co.com/')))
      ) {
        localStorage.removeItem(`romantic_site_${k}`);
      }
    });
    localStorage.removeItem('romantic_site_video2');
  }, []);

  // Initialize background audio element once
  useEffect(() => {
    const musicUrl = getMediaUrl('music');
    if (!musicUrl) return;

    const audio = new Audio(musicUrl);
    audio.loop = true;
    audio.volume = 0.7;

    const handleEnded = () => {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    };

    const handleError = () => {
      setAudioError(true);
      setIsPlayingMusic(false);
    };

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    audioRef.current = audio;

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audio.pause();
      audioRef.current = null;
    };
  }, [refreshKey]);

  // Attempt playing audio
  const startAudio = useCallback(() => {
    if (!audioRef.current) return;
    setAudioError(false);
    audioRef.current
      .play()
      .then(() => {
        setIsPlayingMusic(true);
        setNeedsInteraction(false);
      })
      .catch((err) => {
        // Autoplay blocked by browser policy
        console.warn('Autoplay audio blocked or waiting for user interaction:', err);
        setIsPlayingMusic(false);
        setNeedsInteraction(true);
      });
  }, []);

  const toggleMusic = useCallback(() => {
    if (!audioRef.current) return;
    if (isPlayingMusic) {
      audioRef.current.pause();
      setIsPlayingMusic(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlayingMusic(true);
          setNeedsInteraction(false);
          setAudioError(false);
        })
        .catch(() => {
          setAudioError(true);
        });
    }
  }, [isPlayingMusic]);

  // Handle "Buka surat kecilku" click
  const handleOpenLetter = () => {
    setIsOpeningOpen(false);
    startAudio();

    // Smooth scroll to top of content
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToContent = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRefreshMedia = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <div key={refreshKey} className="relative min-h-screen bg-[#0e0709] text-[#f7ede2] selection:bg-[#7a2232] selection:text-[#fff5f5] overflow-x-hidden">
      {/* Cinematic subtle film grain & background atmosphere */}
      <div className="fixed inset-0 bg-grain opacity-25 pointer-events-none z-0" />

      {/* Subtle, elegant minimalist scroll progress bar at the very top */}
      {!isOpeningOpen && (
        <motion.div
          style={{ scaleX }}
          className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#521320] via-[#d48b97] to-[#e8d5b5] origin-left z-50 pointer-events-none shadow-[0_0_10px_rgba(212,139,151,0.5)]"
        />
      )}

      {/* Opening Screen (Gatekeeper) */}
      <AnimatePresence>
        {isOpeningOpen && (
          <OpeningScreen
            isOpen={isOpeningOpen}
            onOpen={handleOpenLetter}
          />
        )}
      </AnimatePresence>

      {/* Main Website Experience */}
      <main className="relative z-10">
        {/* Section B: Hero Section */}
        <div ref={heroRef}>
          <HeroSection onScrollDown={handleScrollToContent} />
        </div>

        <div ref={contentRef}>
          {/* Section C: Exactly Two Personal Looping Video Sections */}
          <VideoSection />

          {/* Section D: Four-Photo Memory Gallery with Lightbox */}
          <PhotoGallery />

          {/* Section E: Personal Love Letter */}
          <LoveLetterSection />

          {/* Section G: Closing Section */}
          <ClosingSection onScrollToTop={handleScrollToTop} />
        </div>
      </main>

      {/* Section F: Background Music Player */}
      <MusicPlayer
        audioRef={audioRef}
        isPlaying={isPlayingMusic}
        onTogglePlay={toggleMusic}
        audioError={audioError}
        needsInteraction={needsInteraction}
      />

      {/* Discreet Media Configurator Button (for easily testing or replacing URLs in-browser) */}
      <div className="fixed bottom-5 left-5 sm:bottom-8 sm:left-8 z-40">
        <button
          onClick={() => setIsSettingsOpen(true)}
          title="Ubah Tautan Media & Pengaturan"
          aria-label="Buka pengaturan tautan video dan foto"
          className="group flex items-center gap-2 px-3 py-2 rounded-full bg-[#1b0d13]/80 hover:bg-[#2e131d] border border-[#d48b97]/20 hover:border-[#d48b97]/40 text-[#f7ede2]/70 hover:text-[#faf5ee] backdrop-blur-md transition-all shadow-lg text-xs cursor-pointer"
        >
          <Settings2 className="w-3.5 h-3.5 text-[#d48b97] group-hover:rotate-45 transition-transform" />
          <span className="hidden sm:inline font-sans-clean font-light text-[11px]">
            Pengaturan Media
          </span>
        </button>
      </div>

      {/* Media Settings Modal */}
      <MediaSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        onRefresh={handleRefreshMedia}
      />
    </div>
  );
}
