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
};

/**
 * Frontend Image Configuration Array
 * 
 * Add new image entries here when you manually add images to public/gallery/
 * Example:
 * {
 *   category: "Sports & Games",
 *   image: "/gallery/sports-games/sports-01.jpg",
 *   title: "Sports Day 2026",
 * }
 */
export const galleryImages = [
  {
    category: "Sports & Games",
    image: "/gallery/sports-games/Cricket.jpeg",
    title: "Annual Sports Meet",
  },
  {
    category: "Sports & Games",
    image: "/gallery/sports-games/Cricket1.jpeg",
    title: "Annual Sports Meet",
  },
  {
    category: "Sports & Games",
    image: "/gallery/sports-games/Cricket3.jpeg",
    title: "Annual Sports Meet",
  },
  {
    category: "Special Days",
    image: "/gallery/special-days/Pongal.jpeg",
    title: "Pongal Celebration",
  },
  {
    category: "Special Days",
    image: "/gallery/special-days/Pongal1.jpeg",
    title: "Pongal Celebration",
  },
  {
    category: "Special Days",
    image: "/gallery/special-days/pongal2.jpeg",
    title: "Pongal Celebration",
  },
  {
    category: "Special Days",
    image: "/gallery/special-days/Pongal3.jpeg",
    title: "Pongal Celebration ",
  },
  {
    category: "Campus Events",
    image: "/gallery/campus-events/Samaiyal.jpeg",
    title: "Batch Samaiyal",
  },
  {
    category: "Campus Events",
    image: "/gallery/campus-events/Samaiyal1.jpeg",
    title: "Batch Samaiyal",
  },
  {
    category: "Campus Events",
    image: "/gallery/campus-events/Samaiyal3.jpeg",
    title: "Batch Samaiyal",
  },
  {
    category: "Campus Events",
    image: "/gallery/campus-events/Samaiyal4.jpeg",
    title: "Batch Samaiyal",
  },
  {
    category: "Seminars",
    image: "/gallery/seminars/seminar.jpeg",
    title: "Seminars",
  },
  {
    category: "Seminars",
    image: "/gallery/seminars/Seminar1.jpeg",
    title: "Seminars",
  },
  {
    category: "Seminars",
    image: "/gallery/seminars/Seminar4.jpeg",
    title: "Seminars",
  },
  {
    category: "Seminars",
    image: "/gallery/seminars/Seminar5.jpeg",
    title: "Seminars",
  },
  {
    category: "Seminars",
    image: "/gallery/seminars/Seminar6.jpeg",
    title: "Seminars",
  },
  {
    category: "Seminars",
    image: "/gallery/seminars/Seminar7.jpeg",
    title: "Seminars",
  },
  {
    category: "Seminars",
    image: "/gallery/seminars/Seminar8.jpeg",
    title: "Seminars",
  },
  {
    category: "Seminars",
    image: "/gallery/seminars/Seminar9.jpeg",
    title: "Seminars",
  },
  {
    category: "Seminars",
    image: "/gallery/seminars/Akka3.jpeg",
    title: "Seminars",
  },
  {
    category: "Seminars",
    image: "/gallery/seminars/Students.jpeg",
    title: "Seminars",
  },
  {
    category: "Seminars",
    image: "/gallery/seminars/Meeting1.jpeg",
    title: "Parent Meeting",
  },
  {
    category: "Seminars",
    image: "/gallery/seminars/Meeting4.jpeg",
    title: "Parent Meeting",
  },
  {
    category: "Awarding",
    image: "/gallery/awarding/Avarding.JPG",
    title: "Awarding Ceremony",
  },
  {
    category: "Awarding",
    image: "/gallery/awarding/Avarding2.JPG",
    title: "Awarding Ceremony",
  },
  {
    category: "Awarding",
    image: "/gallery/awarding/Avarding3.JPG",
    title: "Awarding Ceremony",
  },
  {
    category: "Awarding",
    image: "/gallery/awarding/Avarding4.JPG",
    title: "Awarding Ceremony",
  },
  {
    category: "Awarding",
    image: "/gallery/awarding/Avarding5.JPG",
    title: "Awarding Ceremony",
  },
  {
    category: "Awarding",
    image: "/gallery/awarding/Avarding6.JPG",
    title: "Awarding Ceremony",
  },
  {
    category: "Awarding",
    image: "/gallery/awarding/Avarding7.JPG",
    title: "Awarding Ceremony",
  },
  {
    category: "Awarding",
    image: "/gallery/awarding/Avarding8.JPG",
    title: "Awarding Ceremony",
  },
  {
    category: "Awarding",
    image: "/gallery/awarding/Avarding9.JPG",
    title: "Awarding Ceremony",
  },
  {
    category: "Awarding",
    image: "/gallery/awarding/Avarding10.JPG",
    title: "Awarding Ceremony",
  },
  {
    category: "Awarding",
    image: "/gallery/awarding/Avarding11.JPG",
    title: "Awarding Ceremony",
  },
  {
    category: "Awarding",
    image: "/gallery/awarding/Avarding12.JPG",
    title: "Awarding Ceremony",
  },
  {
    category: "Awarding",
    image: "/gallery/awarding/Avarding13.JPG",
    title: "Awarding Ceremony",
  },
  {
    category: "Awarding",
    image: "/gallery/awarding/Avarding14.JPG",
    title: "Awarding Ceremony",
  },
  {
    category: "Awarding",
    image: "/gallery/awarding/Avarding15.JPG",
    title: "Awarding Ceremony",
  },
  {
    category: "Awarding",
    image: "/gallery/awarding/Avarding16.JPG",
    title: "Awarding Ceremony",
  },



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
 * Pure frontend function to retrieve all gallery images.
 * Merges manual entries in `galleryImages` with auto-detected files in `public/gallery/`.
 */
export function getAllGalleryImages() {
  const list = [];
  const addedPaths = new Set();

  // 1. Process manually listed items in galleryImages array
  if (Array.isArray(galleryImages)) {
    galleryImages.forEach((item, idx) => {
      if (item && item.image) {
        const imgPath = item.image.startsWith('/') ? item.image : `/${item.image}`;
        addedPaths.add(imgPath);
        list.push({
          id: `manual-${idx}-${imgPath}`,
          image: imgPath,
          url: imgPath,
          category: item.category || 'Campus Events',
          title: item.title || formatTitleFromFilename(imgPath.split('/').pop()),
        });
      }
    });
  }

  // 2. Auto-detect files inside public/gallery/ folders
  try {
    const globFiles = import.meta.glob(
      ['/gallery/*/*.*', '/gallery/*/*/*.*'],
      { eager: true, import: 'default' }
    );

    Object.entries(globFiles).forEach(([filePath, resolvedUrl]) => {
      if (filePath.endsWith('.gitkeep') || filePath.includes('/.')) return;

      const publicPath = typeof resolvedUrl === 'string'
        ? resolvedUrl
        : filePath;

      if (!addedPaths.has(publicPath)) {
        addedPaths.add(publicPath);

        const relativeParts = filePath.replace('\\', '/').split('/gallery/')[1]?.split('/') || [];
        const folderSlug = relativeParts[0] || '';
        const filename = relativeParts[relativeParts.length - 1] || 'Image';

        const matchedCategory = Object.keys(CATEGORY_FOLDER_MAP).find(
          (cat) => CATEGORY_FOLDER_MAP[cat] === folderSlug
        ) || formatTitleFromFilename(folderSlug);

        list.push({
          id: filePath,
          image: publicPath,
          url: publicPath,
          category: matchedCategory,
          title: formatTitleFromFilename(filename),
        });
      }
    });
  } catch (err) {
    // Ignore non-vite context
  }

  return list;
}
