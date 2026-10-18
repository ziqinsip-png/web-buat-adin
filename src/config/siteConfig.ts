/**
 * Central Configuration for Romantic Website
 * Personalized with actual media and heartfelt, mature Indonesian copy.
 */

// ==========================================
// 1. MEDIA URL CONFIGURATION
// ==========================================
export const VIDEO_1_URL = "https://www.image2url.com/r2/default/videos/1792339392086-afdf548f-9ba1-4669-bacc-9f55275eb007.mp4";
export const VIDEO_2_URL = "/video2_rotated.mp4";

export const PHOTO_1_URL = "https://i.ibb.co.com/PsydxvRL/IMG-20261018-WA0155.jpg";
export const PHOTO_2_URL = "https://i.ibb.co.com/DPzF5m58/IMG-20261018-WA0154.jpg";
export const PHOTO_3_URL = "https://i.ibb.co.com/LX8qRJmG/Screenshot-20261010-124933-Tik-Tok.jpg";
export const PHOTO_4_URL = "https://i.ibb.co.com/CpCVSDVC/Screenshot-20261008-191535-Instagram.jpg";

export const MUSIC_URL = "https://feeldreams.github.io/audio/angelbaby.mp3";

// Fallbacks
export const DEMO_FALLBACKS = {
  video1: VIDEO_1_URL,
  video2: VIDEO_2_URL,
  photo1: PHOTO_1_URL,
  photo2: PHOTO_2_URL,
  photo3: PHOTO_3_URL,
  photo4: PHOTO_4_URL,
  music: MUSIC_URL,
};

// ==========================================
// 2. ROMANTIC TEXT & CONTENT CONFIGURATION
// Heartfelt, sincere, mature, and deeply touching
// ==========================================
export const siteContent = {
  // Opening Experience
  opening: {
    message: "Untuk seseorang yang selalu punya tempat istimewa di hatiku.",
    subtext: "Sebuah ruang kecil yang kubuat khusus untukmu, untuk menyimpan rasa syukur atas hadirmu di hidupku.",
    buttonText: "Buka catatan kecilku",
  },

  // Hero Section
  hero: {
    title: "Kalau tentang kamu, aku selalu punya alasan untuk tersenyum.",
    subtitle:
      "Bukan tentang kisah yang harus serba luar biasa, tapi tentang bagaimana hal-hal sederhana—caramu tertawa, caramu memandang dunia—selalu berhasil membuat hariku terasa jauh lebih utuh dan tenang.",
    dateTag: "Sebuah ruang kecil untuk kita",
    scrollHint: "Gulir perlahan",
  },

  // Video 1 Section
  video1: {
    caption: "Momen yang ingin kusimpan",
    title: "Detik yang Ingin Kuhentikan",
    description:
      "Ada saat-saat di mana aku hanya ingin menatapmu sedikit lebih lama. Menikmati caramu berbicara, caramu tertawa lepas, dan menyadari betapa beruntungnya aku memiliki seseorang sepertimu di sampingku.",
  },

  // Video 2 Section
  video2: {
    caption: "Tentang kita, dalam potongan kecil",
    title: "Tempat Pulang yang Sebenarnya",
    description:
      "Dunia di luar mungkin sering kali melelahkan dan bising. Tapi bersamamu, segalanya selalu terasa lebih tenang. Terima kasih sudah menjadi tempat di mana aku selalu merasa cukup dan diterima apa adanya.",
  },

  // 4-Photo Memory Gallery
  gallery: {
    sectionTag: "Galeri Kenangan",
    sectionTitle: "Empat Potret, Beribu Syukur",
    sectionDescription:
      "Setiap gambar mungkin hanya menangkap satu detik, namun rasanya bertahan selamanya di ingatanku.",
    photos: [
      {
        id: 1,
        urlKey: "photo1",
        caption: "Senyummu yang selalu punya cara tersendiri untuk meredakan hari-hariku yang berat.",
        date: "Tatap yang Menenangkan",
        aspect: "portrait",
      },
      {
        id: 2,
        urlKey: "photo2",
        caption: "Bahkan dalam kesederhanaan, kamu selalu terlihat paling istimewa di mataku.",
        date: "Sudut Favoritku",
        aspect: "portrait",
      },
      {
        id: 3,
        urlKey: "photo3",
        caption: "Bukan tentang ke mana kita melangkah, tapi tentang dengan siapa aku berjalan.",
        date: "Potongan Bahagia",
        aspect: "portrait",
      },
      {
        id: 4,
        urlKey: "photo4",
        caption: "Terima kasih untuk setiap tawa, cerita, dan waktu yang kamu bagi bersamaku.",
        date: "Selalu dan Seterusnya",
        aspect: "portrait",
      },
    ],
  },

  // Personal Love Letter
  letter: {
    sectionTag: "Sebuah Surat Terbuka",
    date: "Hari ini, esok, dan seterusnya",
    salutation: "Untuk kamu, yang selalu ada di doaku,",
    paragraphs: [
      "Kadang aku berpikir, betapa ajaibnya bagaimana seseorang bisa membawa begitu banyak ketenangan ke dalam hidup yang sebelumnya terasa begitu bising. Sejak kamu hadir, banyak hal berubah menjadi jauh lebih bermakna dan hangat.",
      "Terima kasih sudah menjadi dirimu sendiri—dengan segala kelembutan hatimu, caramu mendengarkan tanpa menghakimi, dan ketulusanmu yang selalu menenangkan. Bersamamu, aku belajar bahwa menyayangi seseorang bukan tentang janji-janji yang muluk, melainkan tentang kesetiaan untuk saling menjaga, saling menguatkan, dan tetap ada di setiap keadaan.",
      "Aku tidak bisa menjanjikan bahwa setiap hari yang kita lalui akan selalu mudah. Tapi satu hal yang bisa kupastikan: di setiap langkah, di hari yang cerah maupun saat mendung datang, aku akan selalu berusaha membuatmu merasa aman, dihargai, dan dicintai seutuhnya.",
      "Semoga semesta senantiasa menjaga senyummu, dan semoga apa pun yang kita semogakan bersama perlahan menemukan jalannya. Terima kasih sudah hadir dan melengkapi duniaku.",
    ],
    closing: "Dengan rasa yang tak pernah berkurang,",
    signature: "Dari seseorang yang selalu menyayangimu",
  },

  // Music Player
  music: {
    title: "Angel Baby",
    artist: "Lagu Pengiring Kita",
    promptPlay: "Putar Musik Latar",
  },

  // Closing Section
  closing: {
    quote:
      "Kalau suatu hari kamu merasa dunia sedang tidak baik-baik saja, ingatlah bahwa kamu selalu punya rumah di sini—dan seseorang yang selalu percaya padamu.",
    note: "Halaman ini akan selalu ada, sebagai pengingat kecil bahwa hadirmu begitu berharga untukku.",
    buttonText: "Kembali ke awal",
  },
};

/**
 * Helper to get the effective media URL
 */
export function getMediaUrl(key: 'video1' | 'video2' | 'photo1' | 'photo2' | 'photo3' | 'photo4' | 'music'): string {
  const rawMap: Record<string, string> = {
    video1: VIDEO_1_URL,
    video2: VIDEO_2_URL,
    photo1: PHOTO_1_URL,
    photo2: PHOTO_2_URL,
    photo3: PHOTO_3_URL,
    photo4: PHOTO_4_URL,
    music: MUSIC_URL,
  };

  if (typeof window !== 'undefined') {
    const custom = localStorage.getItem(`romantic_site_${key}`);
    if (custom && custom.trim().length > 0) {
      // Discard stale placeholders or old fallback assets
      if (
        !custom.startsWith('PASTE_') &&
        !custom.includes('unsplash') &&
        !custom.includes('mixkit') &&
        !custom.includes('streamable.com')
      ) {
        return custom.trim();
      }
    }
  }

  return rawMap[key] || DEMO_FALLBACKS[key];
}
