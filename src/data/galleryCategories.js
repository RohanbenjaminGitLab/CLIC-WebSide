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
    image: "/gallery/sports-games/Cricket.jpeg",
    title: "Annual Sports Meet",
  },
  {
    category: "Seminars",
    image: "/gallery/seminars/seminar-01.jpg",
    title: "Tech Seminar 2026",
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
