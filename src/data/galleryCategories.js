/**
 * Campus Gallery Frontend Configuration & Image Management
 *
 * Category List:
 * - Sports & Games
 * - Special Days
 * - Campus Events
 * - Seminars
 * - Awarding
 * - Class Activities
 * - Visits
 * - Social Service
 * - Meetings
 * - Abacus
 *
 * NOTE: All images are explicitly listed below.
 * Images are served in optimized WebP format with dedicated thumbnails
 * for lightning-fast loading and zero layout shifts.
 */

export const CATEGORIES = [
  'All',
  'Sports & Games',
  'Special Days',
  'Campus Events',
  'Seminars',
  'Awarding',
  'Class Activities',
  'Visits',
  'Social Service',
  'Meetings',
  'Abacus'
];

export const CATEGORY_FOLDER_MAP = {
  'Sports & Games': 'sports-games',
  'Special Days': 'special-days',
  'Campus Events': 'campus-events',
  'Seminars': 'seminars',
  'Awarding': 'awarding',
  'Class Activities': 'class-activities',
  'Visits': 'visits',
  'Social Service': 'social-service',
  'Meetings': 'seminars',
  'Abacus': 'abacus'
};

/**
 * Add new image entries here when you add images to public/gallery/.
 * Format: { category, image, title }
 */
export const galleryImages = [

  // ── Sports & Games ──────────────────────────────────────────────────────────
  { category: "Sports & Games", image: "/gallery/sports-games/Cricket.webp", title: "Annual Sports Meet" },
  { category: "Sports & Games", image: "/gallery/sports-games/Cricket1.webp", title: "Annual Sports Meet" },
  { category: "Sports & Games", image: "/gallery/sports-games/Cricket3.webp", title: "Annual Sports Meet" },

  // ── Special Days ─────────────────────────────────────────────────────────────
  { category: "Special Days", image: "/gallery/special-days/Pongal.webp", title: "Pongal Celebration" },
  { category: "Special Days", image: "/gallery/special-days/Pongal1.webp", title: "Pongal Celebration" },
  { category: "Special Days", image: "/gallery/special-days/pongal2.webp", title: "Pongal Celebration" },
  { category: "Special Days", image: "/gallery/special-days/Pongal3.webp", title: "Pongal Celebration" },
  { category: "Special Days", image: "/gallery/special-days/Pongal4.webp", title: "Pongal Celebration" },

  // ── Campus Events ─────────────────────────────────────────────────────────────
  { category: "Campus Events", image: "/gallery/campus-events/Samaiyal.webp", title: "Batch Samaiyal" },
  { category: "Campus Events", image: "/gallery/campus-events/Samaiyal1.webp", title: "Batch Samaiyal" },
  { category: "Campus Events", image: "/gallery/campus-events/Samaiyal3.webp", title: "Batch Samaiyal" },
  { category: "Campus Events", image: "/gallery/campus-events/Samaiyal4.webp", title: "Batch Samaiyal" },

  // ── Seminars ──────────────────────────────────────────────────────────────────
  { category: "Seminars", image: "/gallery/seminars/seminar.webp", title: "Academic Seminar" },
  { category: "Seminars", image: "/gallery/seminars/Seminar1.webp", title: "Academic Seminar" },
  { category: "Seminars", image: "/gallery/seminars/Seminar4.webp", title: "Academic Seminar" },
  { category: "Seminars", image: "/gallery/seminars/Seminar5.webp", title: "Academic Seminar" },
  { category: "Seminars", image: "/gallery/seminars/Seminar6.webp", title: "Academic Seminar" },
  { category: "Seminars", image: "/gallery/seminars/Seminar7.webp", title: "Academic Seminar" },
  { category: "Seminars", image: "/gallery/seminars/Seminar8.webp", title: "Academic Seminar" },
  { category: "Seminars", image: "/gallery/seminars/Seminar9.webp", title: "Academic Seminar" },
  { category: "Seminars", image: "/gallery/seminars/Akka3.webp", title: "Interactive Session" },
  { category: "Seminars", image: "/gallery/seminars/Students.webp", title: "Student Presentation" },

  // ── Meetings ──────────────────────────────────────────────────────────────────
  { category: "Meetings", image: "/gallery/seminars/Meeting1.webp", title: "Parent Meeting" },
  { category: "Meetings", image: "/gallery/seminars/Meeting2.webp", title: "Parent Meeting" },
  { category: "Meetings", image: "/gallery/seminars/Meeting3.webp", title: "Parent Meeting" },
  { category: "Meetings", image: "/gallery/seminars/Meeting4.webp", title: "Parent Meeting" },

  // ── Awarding ──────────────────────────────────────────────────────────────────
  { category: "Awarding", image: "/gallery/awarding/Avarding.webp", title: "Awarding Ceremony" },
  { category: "Awarding", image: "/gallery/awarding/Avarding1.webp", title: "Awarding Ceremony" },
  { category: "Awarding", image: "/gallery/awarding/Avarding2.webp", title: "Awarding Ceremony" },
  { category: "Awarding", image: "/gallery/awarding/Avarding3.webp", title: "Awarding Ceremony" },
  { category: "Awarding", image: "/gallery/awarding/Avarding4.webp", title: "Awarding Ceremony" },
  { category: "Awarding", image: "/gallery/awarding/Avarding5.webp", title: "Awarding Ceremony" },
  { category: "Awarding", image: "/gallery/awarding/Avarding6.webp", title: "Awarding Ceremony" },
  { category: "Awarding", image: "/gallery/awarding/Avarding7.webp", title: "Awarding Ceremony" },
  { category: "Awarding", image: "/gallery/awarding/Avarding8.webp", title: "Awarding Ceremony" },
  { category: "Awarding", image: "/gallery/awarding/Avarding9.webp", title: "Awarding Ceremony" },
  { category: "Awarding", image: "/gallery/awarding/Avarding10.webp", title: "Awarding Ceremony" },
  { category: "Awarding", image: "/gallery/awarding/Avarding11.webp", title: "Awarding Ceremony" },
  { category: "Awarding", image: "/gallery/awarding/Avarding12.webp", title: "Awarding Ceremony" },
  { category: "Awarding", image: "/gallery/awarding/Avarding13.webp", title: "Awarding Ceremony" },
  { category: "Awarding", image: "/gallery/awarding/Avarding14.webp", title: "Awarding Ceremony" },
  { category: "Awarding", image: "/gallery/awarding/Avarding15.webp", title: "Awarding Ceremony" },
  { category: "Awarding", image: "/gallery/awarding/Avarding16.webp", title: "Awarding Ceremony" },
  { category: "Awarding", image: "/gallery/awarding/Avarding17.webp", title: "Awarding Ceremony" },
  { category: "Awarding", image: "/gallery/awarding/Avarding18.webp", title: "Awarding Ceremony" },
  { category: "Awarding", image: "/gallery/awarding/Avarding19.webp", title: "Awarding Ceremony" },
  { category: "Awarding", image: "/gallery/awarding/Avarding20.webp", title: "Awarding Ceremony" },
  { category: "Awarding", image: "/gallery/awarding/Avarding21.webp", title: "Awarding Ceremony" },
  { category: "Awarding", image: "/gallery/awarding/Avarding22.webp", title: "Awarding Ceremony" },

  // ── Class Activities ──────────────────────────────────────────────────────────
  { category: "Class Activities", image: "/gallery/class-activities/Lab.webp", title: "Lab Session" },
  { category: "Class Activities", image: "/gallery/class-activities/Lab1.webp", title: "Lab Session" },
  { category: "Class Activities", image: "/gallery/class-activities/Lab2.webp", title: "Lab Session" },
  { category: "Class Activities", image: "/gallery/class-activities/Lab3.webp", title: "Lab Session" },
  { category: "Class Activities", image: "/gallery/class-activities/Lab4.webp", title: "Lab Session" },
  { category: "Class Activities", image: "/gallery/class-activities/Lab5.webp", title: "Lab Session" },
  { category: "Class Activities", image: "/gallery/class-activities/Exam2.webp", title: "Classroom Examination" },

  // ── Visits — Jobfair ──────────────────────────────────────────────────────────
  { category: "Visits", image: "/gallery/visits/jobfire.webp", title: "Jobfair Visit" },
  { category: "Visits", image: "/gallery/visits/jobfire1.webp", title: "Jobfair Visit" },
  { category: "Visits", image: "/gallery/visits/jobfire2.webp", title: "Jobfair Visit" },

  // ── Visits — Library ──────────────────────────────────────────────────────────
  { category: "Visits", image: "/gallery/visits/LibraryVisite1.webp", title: "Library Visit" },
  { category: "Visits", image: "/gallery/visits/LibraryVisite2.webp", title: "Library Visit" },
  { category: "Visits", image: "/gallery/visits/LibraryVisite3.webp", title: "Library Visit" },
  { category: "Visits", image: "/gallery/visits/LibraryVisite4.webp", title: "Library Visit" },

  // ── Visits — Kovil ────────────────────────────────────────────────────────────
  { category: "Visits", image: "/gallery/visits/kovilVisite1.webp", title: "Kovil Visit" },
  { category: "Visits", image: "/gallery/visits/kovilVisite2.webp", title: "Kovil Visit" },

  // ── Abacus ────────────────────────────────────────────────────────────
  { category: "Abacus", image: "/gallery/Abacus/Abacus.webp", title: "Abacus" },
  { category: "Abacus", image: "/gallery/Abacus/Abacus1.webp", title: "Abacus" },
  { category: "Abacus", image: "/gallery/Abacus/Abacus2.webp", title: "Abacus" },
  { category: "Abacus", image: "/gallery/Abacus/Abacus3.webp", title: "Abacus" },
  { category: "Abacus", image: "/gallery/Abacus/Abacus4.webp", title: "Abacus" },
  { category: "Abacus", image: "/gallery/Abacus/Abacus5.webp", title: "Abacus" },
  { category: "Abacus", image: "/gallery/Abacus/Abacus6.webp", title: "Abacus" },
  { category: "Abacus", image: "/gallery/Abacus/Abacus7.webp", title: "Abacus" },

];

/**
 * Format a filename into a human-readable title.
 */
function formatTitleFromFilename(filename) {
  const nameWithoutExt = filename.substring(0, filename.lastIndexOf('.')) || filename;
  return nameWithoutExt
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

/**
 * Returns all gallery images from the explicit galleryImages list.
 * Includes optimized thumbnail paths and full resolution paths for fast grid loading
 * and crisp lightbox displays.
 */
export function getAllGalleryImages() {
  if (!Array.isArray(galleryImages)) return [];

  return galleryImages
    .filter((item) => item && item.image && item.image.trim() !== '' && !item.image.endsWith('/'))
    .map((item, idx) => {
      const imgPath = item.image.startsWith('/') ? item.image : `/${item.image}`;
      
      // Calculate thumbnail path if inside /gallery/
      let thumbPath = imgPath;
      if (imgPath.startsWith('/gallery/')) {
        thumbPath = imgPath.replace('/gallery/', '/gallery/_thumbs/');
      }

      return {
        id: `img-${idx}-${imgPath}`,
        image: imgPath,
        url: imgPath,
        fullUrl: imgPath,
        thumbUrl: thumbPath,
        category: item.category || 'Campus Events',
        title: item.title || formatTitleFromFilename(imgPath.split('/').pop()),
      };
    });
}
