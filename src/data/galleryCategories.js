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
 *
 * NOTE: All images are explicitly listed below.
 * Auto-glob is intentionally disabled to prevent duplicate image cards.
 * When adding new images, add them to public/gallery/<folder>/ AND add
 * an entry in the galleryImages array below.
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
};

/**
 * Add new image entries here when you add images to public/gallery/.
 * Format: { category, image, title }
 */
export const galleryImages = [

  // ── Sports & Games ──────────────────────────────────────────────────────────
  { category: "Sports & Games", image: "/gallery/sports-games/Cricket.jpeg", title: "Annual Sports Meet" },
  { category: "Sports & Games", image: "/gallery/sports-games/Cricket1.jpeg", title: "Annual Sports Meet" },
  { category: "Sports & Games", image: "/gallery/sports-games/Cricket3.jpeg", title: "Annual Sports Meet" },

  // ── Special Days ─────────────────────────────────────────────────────────────
  { category: "Special Days", image: "/gallery/special-days/Pongal.jpeg", title: "Pongal Celebration" },
  { category: "Special Days", image: "/gallery/special-days/Pongal1.jpeg", title: "Pongal Celebration" },
  { category: "Special Days", image: "/gallery/special-days/pongal2.jpeg", title: "Pongal Celebration" },
  { category: "Special Days", image: "/gallery/special-days/Pongal3.jpeg", title: "Pongal Celebration" },
  { category: "Special Days", image: "/gallery/special-days/Pongal4.jpeg", title: "Pongal Celebration" },

  // ── Campus Events ─────────────────────────────────────────────────────────────
  { category: "Campus Events", image: "/gallery/campus-events/Samaiyal.jpeg", title: "Batch Samaiyal" },
  { category: "Campus Events", image: "/gallery/campus-events/Samaiyal1.jpeg", title: "Batch Samaiyal" },
  { category: "Campus Events", image: "/gallery/campus-events/Samaiyal3.jpeg", title: "Batch Samaiyal" },
  { category: "Campus Events", image: "/gallery/campus-events/Samaiyal4.jpeg", title: "Batch Samaiyal" },

  // ── Seminars ──────────────────────────────────────────────────────────────────
  { category: "Seminars", image: "/gallery/seminars/seminar.jpeg", title: "Academic Seminar" },
  { category: "Seminars", image: "/gallery/seminars/Seminar1.jpeg", title: "Academic Seminar" },
  { category: "Seminars", image: "/gallery/seminars/Seminar4.jpeg", title: "Academic Seminar" },
  { category: "Seminars", image: "/gallery/seminars/Seminar5.jpeg", title: "Academic Seminar" },
  { category: "Seminars", image: "/gallery/seminars/Seminar6.jpeg", title: "Academic Seminar" },
  { category: "Seminars", image: "/gallery/seminars/Seminar7.jpeg", title: "Academic Seminar" },
  { category: "Seminars", image: "/gallery/seminars/Seminar8.jpeg", title: "Academic Seminar" },
  { category: "Seminars", image: "/gallery/seminars/Seminar9.jpeg", title: "Academic Seminar" },
  { category: "Seminars", image: "/gallery/seminars/Akka3.jpeg", title: "Interactive Session" },
  { category: "Seminars", image: "/gallery/seminars/Students.jpeg", title: "Student Presentation" },

  // ── Meetings ──────────────────────────────────────────────────────────────────
  { category: "Meetings", image: "/gallery/seminars/Meeting1.jpeg", title: "Parent Meeting" },
  { category: "Meetings", image: "/gallery/seminars/Meeting2.jpeg", title: "Parent Meeting" },
  { category: "Meetings", image: "/gallery/seminars/Meeting3.jpeg", title: "Parent Meeting" },
  { category: "Meetings", image: "/gallery/seminars/Meeting4.jpeg", title: "Parent Meeting" },

  // ── Awarding ──────────────────────────────────────────────────────────────────
  { category: "Awarding", image: "/gallery/awarding/Avarding.jpg", title: "Awarding Ceremony" },
  { category: "Awarding", image: "/gallery/awarding/Avarding1.jpg", title: "Awarding Ceremony" },
  { category: "Awarding", image: "/gallery/awarding/Avarding2.jpg", title: "Awarding Ceremony" },
  { category: "Awarding", image: "/gallery/awarding/Avarding3.jpg", title: "Awarding Ceremony" },
  { category: "Awarding", image: "/gallery/awarding/Avarding4.jpg", title: "Awarding Ceremony" },
  { category: "Awarding", image: "/gallery/awarding/Avarding5.jpg", title: "Awarding Ceremony" },
  { category: "Awarding", image: "/gallery/awarding/Avarding6.jpg", title: "Awarding Ceremony" },
  { category: "Awarding", image: "/gallery/awarding/Avarding7.jpg", title: "Awarding Ceremony" },
  { category: "Awarding", image: "/gallery/awarding/Avarding8.jpg", title: "Awarding Ceremony" },
  { category: "Awarding", image: "/gallery/awarding/Avarding9.jpg", title: "Awarding Ceremony" },
  { category: "Awarding", image: "/gallery/awarding/Avarding10.jpg", title: "Awarding Ceremony" },
  { category: "Awarding", image: "/gallery/awarding/Avarding11.jpg", title: "Awarding Ceremony" },
  { category: "Awarding", image: "/gallery/awarding/Avarding12.jpg", title: "Awarding Ceremony" },
  { category: "Awarding", image: "/gallery/awarding/Avarding13.jpg", title: "Awarding Ceremony" },
  { category: "Awarding", image: "/gallery/awarding/Avarding14.jpg", title: "Awarding Ceremony" },
  { category: "Awarding", image: "/gallery/awarding/Avarding15.jpg", title: "Awarding Ceremony" },
  { category: "Awarding", image: "/gallery/awarding/Avarding16.jpg", title: "Awarding Ceremony" },

  // ── Class Activities ──────────────────────────────────────────────────────────
  { category: "Class Activities", image: "/gallery/class-activities/Lab.jpeg", title: "Lab Session" },
  { category: "Class Activities", image: "/gallery/class-activities/Lab1.jpeg", title: "Lab Session" },
  { category: "Class Activities", image: "/gallery/class-activities/Lab2.jpeg", title: "Lab Session" },
  { category: "Class Activities", image: "/gallery/class-activities/Lab3.jpeg", title: "Lab Session" },
  { category: "Class Activities", image: "/gallery/class-activities/Lab4.jpeg", title: "Lab Session" },
  { category: "Class Activities", image: "/gallery/class-activities/Lab5.jpeg", title: "Lab Session" },
  { category: "Class Activities", image: "/gallery/class-activities/Exam2.jpeg", title: "Classroom Examination" },

  // ── Visits — Jobfair ──────────────────────────────────────────────────────────
  { category: "Visits", image: "/gallery/visits/jobfire.jpeg", title: "Jobfair Visit" },
  { category: "Visits", image: "/gallery/visits/jobfire1.jpeg", title: "Jobfair Visit" },
  { category: "Visits", image: "/gallery/visits/jobfire2.jpeg", title: "Jobfair Visit" },

  // ── Visits — Library ──────────────────────────────────────────────────────────
  { category: "Visits", image: "/gallery/visits/LibraryVisite1.jpeg", title: "Library Visit" },
  { category: "Visits", image: "/gallery/visits/LibraryVisite2.jpeg", title: "Library Visit" },
  { category: "Visits", image: "/gallery/visits/LibraryVisite3.jpeg", title: "Library Visit" },
  { category: "Visits", image: "/gallery/visits/LibraryVisite4.jpeg", title: "Library Visit" },

  // ── Visits — Kovil ────────────────────────────────────────────────────────────
  { category: "Visits", image: "/gallery/visits/kovilVisite1.jpeg", title: "Kovil Visit" },
  { category: "Visits", image: "/gallery/visits/kovilVisite2.jpeg", title: "Kovil Visit" },

  // ── Social Service ────────────────────────────────────────────────────────────
  { category: "Social service", image: "/gallery/social-service/", title: "Social service" },
  { category: "Social service", image: "/gallery/social-service/", title: "Social service" },

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
 * Returns all gallery images from the explicit galleryImages list above.
 * Auto-glob is intentionally disabled — it caused duplicate cards because
 * Vite's import.meta.glob on public/ resolves to hashed asset URLs that
 * don't match the plain path strings in addedPaths, bypassing deduplication.
 */
export function getAllGalleryImages() {
  if (!Array.isArray(galleryImages)) return [];

  return galleryImages
    .filter((item) => item && item.image)
    .map((item, idx) => {
      const imgPath = item.image.startsWith('/') ? item.image : `/${item.image}`;
      return {
        id: `img-${idx}-${imgPath}`,
        image: imgPath,
        url: imgPath,
        category: item.category || 'Campus Events',
        title: item.title || formatTitleFromFilename(imgPath.split('/').pop()),
      };
    });
}
