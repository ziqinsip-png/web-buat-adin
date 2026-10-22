import React, { useState } from 'react';
import { Settings2, X, Check, RotateCcw, Film, Image as ImageIcon, Music, HelpCircle } from 'lucide-react';
import {
  VIDEO_1_URL,
  PHOTO_1_URL,
  PHOTO_2_URL,
  PHOTO_3_URL,
  PHOTO_4_URL,
  PHOTO_5_URL,
  MUSIC_URL,
} from '../config/siteConfig';

interface MediaSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRefresh: () => void;
}

export const MediaSettingsModal: React.FC<MediaSettingsModalProps> = ({
  isOpen,
  onClose,
  onRefresh,
}) => {
  const [video1, setVideo1] = useState(
    () => localStorage.getItem('romantic_site_video1') || VIDEO_1_URL
  );
  const [photo1, setPhoto1] = useState(
    () => localStorage.getItem('romantic_site_photo1') || PHOTO_1_URL
  );
  const [photo2, setPhoto2] = useState(
    () => localStorage.getItem('romantic_site_photo2') || PHOTO_2_URL
  );
  const [photo3, setPhoto3] = useState(
    () => localStorage.getItem('romantic_site_photo3') || PHOTO_3_URL
  );
  const [photo4, setPhoto4] = useState(
    () => localStorage.getItem('romantic_site_photo4') || PHOTO_4_URL
  );
  const [photo5, setPhoto5] = useState(
    () => localStorage.getItem('romantic_site_photo5') || PHOTO_5_URL
  );
  const [music, setMusic] = useState(
    () => localStorage.getItem('romantic_site_music') || MUSIC_URL
  );
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = () => {
    localStorage.setItem('romantic_site_video1', video1);
    localStorage.setItem('romantic_site_photo1', photo1);
    localStorage.setItem('romantic_site_photo2', photo2);
    localStorage.setItem('romantic_site_photo3', photo3);
    localStorage.setItem('romantic_site_photo4', photo4);
    localStorage.setItem('romantic_site_photo5', photo5);
    localStorage.setItem('romantic_site_music', music);

    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onRefresh();
      onClose();
    }, 600);
  };

  const handleReset = () => {
    [
      'video1',
      'video2',
      'photo1',
      'photo2',
      'photo3',
      'photo4',
      'photo5',
      'music',
    ].forEach((k) => localStorage.removeItem(`romantic_site_${k}`));

    setVideo1(VIDEO_1_URL);
    setPhoto1(PHOTO_1_URL);
    setPhoto2(PHOTO_2_URL);
    setPhoto3(PHOTO_3_URL);
    setPhoto4(PHOTO_4_URL);
    setPhoto5(PHOTO_5_URL);
    setMusic(MUSIC_URL);
    onRefresh();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-[#14080e] border border-[#d48b97]/30 p-6 sm:p-8 text-[#f7ede2] shadow-2xl my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#d48b97]/15 mb-6">
          <div className="flex items-center gap-2.5">
            <Settings2 className="w-5 h-5 text-[#d48b97]" />
            <h3 className="font-editorial text-xl font-normal text-[#faf5ee]">
              Ubah Tautan Media
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup"
            className="p-1.5 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tip box */}
        <div className="mb-6 p-3 rounded-xl bg-[#281119] border border-[#d48b97]/20 text-xs text-[#f7ede2]/80 flex items-start gap-2.5">
          <HelpCircle className="w-4 h-4 text-[#e8d5b5] shrink-0 mt-0.5" />
          <div>
            <span className="font-medium text-[#faf5ee]">Tips:</span> Anda dapat
            memasukkan tautan langsung (MP4 untuk video, JPG/PNG untuk foto, MP3 untuk musik).
            Perubahan dapat disimpan langsung di sini atau diedit di berkas{' '}
            <code className="text-[#e8d5b5]">src/config/siteConfig.ts</code>.
          </div>
        </div>

        {/* Inputs */}
        <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-1">
          {/* Video 1 */}
          <div>
            <label className="flex items-center gap-2 text-xs font-medium text-[#d48b97] mb-1.5">
              <Film className="w-3.5 h-3.5" />
              <span>Video Kenangan (Momen yang ingin kusimpan)</span>
            </label>
            <input
              type="text"
              placeholder="Tautan Video (MP4)"
              value={video1}
              onChange={(e) => setVideo1(e.target.value)}
              className="w-full px-3.5 py-2 rounded-lg bg-[#0c0408] border border-white/10 text-xs text-[#faf5ee] placeholder:text-white/30 focus:border-[#d48b97] focus:outline-hidden"
            />
          </div>

          {/* Photo 1-5 */}
          <div className="pt-2 border-t border-white/10">
            <span className="flex items-center gap-2 text-xs font-medium text-[#d48b97] mb-2">
              <ImageIcon className="w-3.5 h-3.5" />
              <span>5 Foto Galeri Kenangan</span>
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <input
                type="text"
                placeholder="Foto 1 URL"
                value={photo1}
                onChange={(e) => setPhoto1(e.target.value)}
                className="w-full px-3 py-1.5 rounded-lg bg-[#0c0408] border border-white/10 text-xs text-[#faf5ee] placeholder:text-white/30 focus:border-[#d48b97] focus:outline-hidden"
              />
              <input
                type="text"
                placeholder="Foto 2 URL"
                value={photo2}
                onChange={(e) => setPhoto2(e.target.value)}
                className="w-full px-3 py-1.5 rounded-lg bg-[#0c0408] border border-white/10 text-xs text-[#faf5ee] placeholder:text-white/30 focus:border-[#d48b97] focus:outline-hidden"
              />
              <input
                type="text"
                placeholder="Foto 3 URL"
                value={photo3}
                onChange={(e) => setPhoto3(e.target.value)}
                className="w-full px-3 py-1.5 rounded-lg bg-[#0c0408] border border-white/10 text-xs text-[#faf5ee] placeholder:text-white/30 focus:border-[#d48b97] focus:outline-hidden"
              />
              <input
                type="text"
                placeholder="Foto 4 URL"
                value={photo4}
                onChange={(e) => setPhoto4(e.target.value)}
                className="w-full px-3 py-1.5 rounded-lg bg-[#0c0408] border border-white/10 text-xs text-[#faf5ee] placeholder:text-white/30 focus:border-[#d48b97] focus:outline-hidden"
              />
              <input
                type="text"
                placeholder="Foto 5 URL"
                value={photo5}
                onChange={(e) => setPhoto5(e.target.value)}
                className="w-full px-3 py-1.5 rounded-lg bg-[#0c0408] border border-white/10 text-xs text-[#faf5ee] placeholder:text-white/30 focus:border-[#d48b97] focus:outline-hidden sm:col-span-2"
              />
            </div>
          </div>

          {/* Music */}
          <div className="pt-2 border-t border-white/10">
            <label className="flex items-center gap-2 text-xs font-medium text-[#d48b97] mb-1.5">
              <Music className="w-3.5 h-3.5" />
              <span>Tautan Musik Latar (URL MP3)</span>
            </label>
            <input
              type="text"
              placeholder="Tautan Audio Langsung (mis. https://.../audio.mp3)"
              value={music}
              onChange={(e) => setMusic(e.target.value)}
              className="w-full px-3.5 py-2 rounded-lg bg-[#0c0408] border border-white/10 text-xs text-[#faf5ee] placeholder:text-white/30 focus:border-[#d48b97] focus:outline-hidden"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/10">
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs text-white/60 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Kembalikan Default</span>
          </button>

          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#521320] hover:bg-[#6e1a2b] text-xs font-medium text-[#faf5ee] shadow-lg transition-all cursor-pointer"
          >
            {savedSuccess ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Tersimpan!</span>
              </>
            ) : (
              <span>Simpan Perubahan</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
