import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, AlertCircle, RefreshCw, ExternalLink, RotateCw } from 'lucide-react';

interface VideoItemProps {
  url: string;
  caption: string;
  title: string;
  description: string;
  layoutVariant?: 'left' | 'right';
  indexLabel: string;
  orientation?: 'portrait' | 'landscape';
}

export const VideoItem: React.FC<VideoItemProps> = ({
  url,
  caption,
  title,
  description,
  layoutVariant = 'left',
  indexLabel,
  orientation,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [customRotation, setCustomRotation] = useState(0);

  // Determine orientation: explicit prop takes precedence, else detect from keywords
  const isPortrait =
    orientation === 'portrait' ||
    (orientation === undefined &&
      (url.includes('streamable.com') ||
        url.includes('tiktok') ||
        url.includes('shorts') ||
        url.includes('1792339392086'))); // video 1

  // Detect if url is an embed link (Streamable, YouTube, Vimeo, Google Drive, etc.)
  const isEmbed =
    url.includes('streamable.com') ||
    url.includes('youtube.com') ||
    url.includes('youtu.be') ||
    url.includes('vimeo.com') ||
    url.includes('drive.google.com/file');

  const getEmbedSrc = (rawUrl: string): string => {
    if (rawUrl.includes('streamable.com/')) {
      let code = '';
      if (rawUrl.includes('/e/')) {
        code = rawUrl.split('/e/')[1]?.split('?')[0];
      } else {
        code = rawUrl.split('streamable.com/')[1]?.split('?')[0];
      }
      return `https://streamable.com/e/${code}?autoplay=1&muted=1`;
    }
    if (rawUrl.includes('youtube.com/watch?v=')) {
      const id = rawUrl.split('watch?v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&playsinline=1`;
    }
    if (rawUrl.includes('youtu.be/')) {
      const id = rawUrl.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&playsinline=1`;
    }
    if (rawUrl.includes('vimeo.com/')) {
      const id = rawUrl.split('vimeo.com/')[1]?.split('?')[0];
      return `https://player.vimeo.com/video/${id}?autoplay=1&loop=1&muted=1`;
    }
    if (rawUrl.includes('drive.google.com/file/d/')) {
      const id = rawUrl.split('/d/')[1]?.split('/')[0];
      return `https://drive.google.com/file/d/${id}/preview`;
    }
    return rawUrl;
  };

  useEffect(() => {
    setHasError(false);
    const video = videoRef.current;
    if (video && !isEmbed) {
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Autoplay may need user gesture, keep status
            setIsPlaying(false);
          });
      }
    }
  }, [url, isEmbed]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const retryLoad = () => {
    setHasError(false);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <div
      className={`grid grid-cols-1 ${
        isPortrait ? 'lg:grid-cols-12 gap-8 lg:gap-16' : 'lg:grid-cols-12 gap-8 lg:gap-14'
      } items-center ${layoutVariant === 'right' ? 'lg:flex-row-reverse' : ''}`}
    >
      {/* Video Framing Column */}
      <div
        className={`${
          isPortrait ? 'lg:col-span-6 flex flex-col items-center' : 'lg:col-span-7 flex flex-col items-center'
        } ${layoutVariant === 'right' ? 'lg:order-2' : 'lg:order-1'}`}
      >
        <div
          className={`relative overflow-hidden bg-[#160a0f] border-2 border-[#d48b97]/30 shadow-2xl shadow-black/90 group ${
            isPortrait
              ? 'aspect-[9/16] w-full max-w-[310px] sm:max-w-[340px] rounded-3xl'
              : 'aspect-[16/9] w-full max-w-[620px] rounded-2xl'
          }`}
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          {/* Background Skeleton while loading */}
          <div className="absolute inset-0 flex items-center justify-center bg-[#160a0f] z-0 pointer-events-none">
            <div className="flex flex-col items-center gap-2 text-[#d48b97]/40">
              <div className="w-7 h-7 rounded-full border-2 border-[#d48b97]/30 border-t-[#d48b97] animate-spin" />
              <span className="text-[11px] font-sans-clean font-light tracking-wider">
                Menyiapkan tayangan...
              </span>
            </div>
          </div>

          {/* Video Content */}
          {hasError ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-[#1a0c12] z-20">
              <AlertCircle className="w-8 h-8 text-[#d48b97]/70 mb-3" />
              <p className="text-sm text-[#faf5ee] font-medium mb-1">
                Video belum dapat dimuat
              </p>
              <button
                onClick={retryLoad}
                className="inline-flex items-center gap-2 px-4 py-2 mt-2 text-xs font-medium rounded-full bg-[#401018] hover:bg-[#571622] text-[#faf5ee] transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Coba Lagi</span>
              </button>
            </div>
          ) : isEmbed ? (
            /* Streamable / Iframe Embed */
            <iframe
              src={getEmbedSrc(url)}
              title={caption}
              className="w-full h-full border-0 absolute inset-0 z-10"
              allow="fullscreen; autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : (
            /* Direct Native HTML5 Video */
            <video
              ref={videoRef}
              src={url}
              playsInline
              autoPlay
              muted={isMuted}
              loop
              preload="metadata"
              className={`w-full h-full object-cover bg-black relative z-10 transition-transform duration-300 ${
                isPortrait ? 'object-cover' : 'object-contain sm:object-cover'
              }`}
              style={{
                transform: customRotation ? `rotate(${customRotation}deg)` : undefined,
              }}
              onError={() => setHasError(true)}
              onEnded={() => {
                if (videoRef.current) {
                  videoRef.current.currentTime = 0;
                  videoRef.current.play().catch(() => {});
                }
              }}
            />
          )}

          {/* Minimal Caption Badge at bottom edge */}
          <div className="absolute bottom-3 left-3 z-20 pointer-events-none">
            <div className="px-3 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-sans-clean text-[#f7ede2]/90 tracking-wide">
              {caption}
            </div>
          </div>

          {/* Interactive Controls Overlay for Native Video */}
          {!hasError && !isEmbed && (
            <div
              className={`absolute top-3 right-3 z-30 flex items-center gap-2 transition-opacity duration-300 ${
                showControls ? 'opacity-100' : 'opacity-80 sm:opacity-0 group-hover:opacity-100'
              }`}
            >
              <button
                onClick={() => setCustomRotation((prev) => (prev + 90) % 360)}
                aria-label="Putar orientasi video"
                title="Putar orientasi video 90°"
                className="p-2 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md text-[#faf5ee] border border-white/15 transition-colors cursor-pointer"
              >
                <RotateCw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? 'Jeda video' : 'Putar video'}
                className="p-2 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md text-[#faf5ee] border border-white/15 transition-colors cursor-pointer"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={toggleMute}
                aria-label={isMuted ? 'Nyalakan audio video' : 'Bisukan video'}
                className="p-2 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md text-[#faf5ee] border border-white/15 transition-colors cursor-pointer"
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5 text-white/60" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-300" />}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Editorial Narrative Companion */}
      <div
        className={`${
          isPortrait ? 'lg:col-span-6' : 'lg:col-span-5'
        } flex flex-col justify-center ${
          layoutVariant === 'right' ? 'lg:order-1' : 'lg:order-2'
        }`}
      >
        <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#d48b97] font-sans-clean mb-3">
          <span>{indexLabel}</span>
          <span className="w-4 h-[1px] bg-[#d48b97]/40" />
          <span>{caption}</span>
        </div>

        <h3 className="font-editorial text-2xl sm:text-3xl text-[#faf5ee] font-light leading-snug mb-4">
          {title}
        </h3>

        <p className="font-sans-clean text-sm sm:text-base text-[#f7ede2]/75 font-light leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
