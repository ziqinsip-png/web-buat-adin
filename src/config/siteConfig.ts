/**
 * Central Configuration for Romantic Website
 * Personalized with actual media and heartfelt, mature Indonesian copy.
 */

// ==========================================
// 1. MEDIA URL CONFIGURATION
// ==========================================
export const VIDEO_1_URL = "https://www.image2url.com/r2/default/videos/1792648289176-fb8089ed-54b9-4aa0-9c0e-d259b0dd375b.mp4";

export const PHOTO_1_URL = "https://i.ibb.co.com/0ybHkdhm/IMG-20261022-WA0045.jpg";
export const PHOTO_2_URL = "https://i.ibb.co.com/xtsJ1Wgy/IMG-20261022-WA0043.jpg";
export const PHOTO_3_URL = "https://i.ibb.co.com/rgk1hPd/IMG-20261022-WA0047.jpg";
export const PHOTO_4_URL = "https://i.ibb.co.com/9QkVNNW/IMG-20261022-WA0042.jpg";
export const PHOTO_5_URL = "https://i.ibb.co.com/yc38yD49/IMG-20261022-WA0048.jpg";

export const MUSIC_URL = "https://feeldreams.github.io/audio/angelbaby.mp3";

// Fallbacks
export const DEMO_FALLBACKS = {
  video1: VIDEO_1_URL,
  photo1: PHOTO_1_URL,
  photo2: PHOTO_2_URL,
  photo3: PHOTO_3_URL,
  photo4: PHOTO_4_URL,
  photo5: PHOTO_5_URL,
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

  // Video Section (Single special video)
  video: {
    caption: "Momen yang ingin kusimpan",
    title: "Dalam Setiap Detik yang Tenang",
    description:
      "Ada saat-saat sederhana di mana aku hanya ingin menatapmu sedikit lebih lama. Menikmati caramu berbicara, caramu tertawa lepas, dan menyadari betapa bersyukurnya aku memiliki kamu yang selalu melengkapi hariku.",
  },

  // 5-Photo Memory Gallery
  gallery: {
    sectionTag: "Galeri Kenangan",
    sectionTitle: "Lima Potret, Beribu Syukur",
    sectionDescription:
      "Setiap gambar menyimpan satu detik berharga yang tak pernah ingin kulupakan.",
    photos: [
      {
        id: 1,
        urlKey: "photo1",
        caption: "Senyummu yang selalu punya cara sederhana untuk meredakan segala lelahku.",
        date: "Tatap yang Menenangkan",
        aspect: "portrait",
      },
      {
        id: 2,
        urlKey: "photo2",
        caption: "Bahkan dalam detik paling biasa, bersamamu selalu terasa istimewa.",
        date: "Sudut Favoritku",
        aspect: "portrait",
      },
      {
        id: 3,
        urlKey: "photo3",
        caption: "Bukan tentang ke mana kita melangkah, tapi tentang dengan siapa aku berjalan.",
        date: "Langkah Bersama",
        aspect: "portrait",
      },
      {
        id: 4,
        urlKey: "photo4",
        caption: "Terima kasih sudah selalu jadi tempat paling nyaman untuk pulang.",
        date: "Tempat Ternyaman",
        aspect: "portrait",
      },
      {
        id: 5,
        urlKey: "photo5",
        caption: "Untuk hari ini, esok, dan seterusnya—aku selalu memilih kamu.",
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
export function getMediaUrl(key: 'video1' | 'photo1' | 'photo2' | 'photo3' | 'photo4' | 'photo5' | 'music'): string {
  const rawMap: Record<string, string> = {
    video1: VIDEO_1_URL,
    photo1: PHOTO_1_URL,
    photo2: PHOTO_2_URL,
    photo3: PHOTO_3_URL,
    photo4: PHOTO_4_URL,
    photo5: PHOTO_5_URL,
    music: MUSIC_URL,
  };

  if (typeof window !== 'undefined') {
    const custom = localStorage.getItem(`romantic_site_${key}`);
    if (custom && custom.trim().length > 0) {
      if (
        !custom.startsWith('PASTE_') &&
        !custom.includes('unsplash') &&
        !custom.includes('mixkit') &&
        !custom.includes('streamable.com') &&
        !custom.includes('video2_rotated') &&
        !custom.includes('1792339392086') &&
        !custom.includes('IMG-20261018')
      ) {
        return custom.trim();
      }
    }
  }

  return rawMap[key] || (DEMO_FALLBACKS as any)[key];
}
