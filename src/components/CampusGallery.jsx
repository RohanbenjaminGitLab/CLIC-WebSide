import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageOff, ChevronLeft, ChevronRight, X, Maximize2, Sparkles, FolderOpen } from 'lucide-react';
import { CATEGORIES, CATEGORY_FOLDER_MAP, getAllGalleryImages } from '../data/galleryCategories';

export default function CampusGallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Load all frontend gallery images (config + auto-discovery)
  const allImages = useMemo(() => getAllGalleryImages(), []);

  // Filter images based on selected category tab
  const filteredImages = useMemo(() => {
    if (activeCategory === 'All') {
      return allImages;
    }
    return allImages.filter(
      (img) => img.category?.trim().toLowerCase() === activeCategory.trim().toLowerCase()
    );
  }, [allImages, activeCategory]);

  // Modal navigation
  const handlePrev = (e) => {
    e.stopPropagation();
    if (lightboxIndex === null || filteredImages.length === 0) return;
    setLightboxIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (lightboxIndex === null || filteredImages.length === 0) return;
    setLightboxIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="w-full py-12 scroll-mt-24 bg-white dark:bg-slate-950 transition-colors">
      {/* Gallery Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 px-4 space-y-3">
        <span className="inline-flex items-center gap-1.5 text-[#8F173D] dark:text-brand-300 text-xs sm:text-sm font-bold uppercase tracking-widest bg-brand-50 dark:bg-brand-950/40 px-3.5 py-1.5 rounded-full border border-brand-100 dark:border-brand-900/50">
          <Sparkles className="h-3.5 w-3.5 text-[#8F173D]" />
          Frontend Campus Gallery
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white">
          Campus Gallery
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
          Explore campus activities, sports meets, seminars, special days, awarding ceremonies, and events.
        </p>
      </div>

      {/* Filter Tabs Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex items-center justify-start md:justify-center overflow-x-auto pb-3 pt-1 scrollbar-none gap-2 sm:gap-2.5">
          {CATEGORIES.map((catName) => {
            const isActive = activeCategory === catName;
            return (
              <button
                key={catName}
                onClick={() => {
                  setActiveCategory(catName);
                  setLightboxIndex(null);
                }}
                className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer select-none ${
                  isActive
                    ? 'bg-[#8F173D] text-white shadow-lg shadow-[#8F173D]/20 scale-[1.02]'
                    : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white border border-slate-200/60 dark:border-slate-800'
                }`}
              >
                {catName}

                {isActive && (
                  <motion.div
                    layoutId="activeCategoryTab"
                    className="absolute inset-0 bg-[#8F173D] rounded-xl -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Gallery Grid or Clean Empty State */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {filteredImages.length > 0 ? (
            /* Responsive Grid */
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
            >
              {filteredImages.map((image, idx) => (
                <motion.div
                  key={image.id || idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: (idx % 8) * 0.04 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-[#8F173D]/10 transition-all duration-300 cursor-pointer aspect-[4/3] sm:aspect-square"
                >
                  <img
                    src={image.url || image.image}
                    alt={image.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] uppercase tracking-wider font-bold text-brand-200 bg-[#8F173D]/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-[#8F173D]/40">
                        {image.category}
                      </span>
                      <div className="p-1.5 rounded-lg bg-white/20 text-white backdrop-blur-md">
                        <Maximize2 className="h-4 w-4" />
                      </div>
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-white mt-1.5 line-clamp-1">
                      {image.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Clean Empty State Message */
            <motion.div
              key={`empty-${activeCategory}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-10 sm:p-16 text-center max-w-2xl mx-auto shadow-sm my-6 flex flex-col items-center justify-center space-y-4"
            >
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-brand-50 dark:bg-brand-950/40 border border-brand-100 dark:border-brand-900/60 flex items-center justify-center text-[#8F173D] dark:text-brand-300 shadow-inner">
                  {activeCategory === 'All' ? (
                    <FolderOpen className="h-10 w-10 text-[#8F173D] stroke-[1.5]" />
                  ) : (
                    <ImageOff className="h-10 w-10 text-[#8F173D] stroke-[1.5]" />
                  )}
                </div>
                <div className="absolute -bottom-1 -right-1 bg-[#8F173D] text-white p-1 rounded-full text-[10px] shadow-sm">
                  <Sparkles className="h-3 w-3" />
                </div>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  No images available in this category yet.
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light max-w-md mx-auto leading-relaxed">
                  {activeCategory === 'All'
                    ? 'Place images inside public/gallery/ folders or list them in galleryImages in src/data/galleryCategories.js.'
                    : `Category "${activeCategory}" is ready. Add images into public/gallery/${CATEGORY_FOLDER_MAP[activeCategory] || ''}/ and list them in src/data/galleryCategories.js.`}
                </p>
              </div>

              {activeCategory !== 'All' && CATEGORY_FOLDER_MAP[activeCategory] && (
                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 text-[11px] font-medium text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-950 px-3.5 py-1.5 rounded-lg border border-slate-200/60 dark:border-slate-800">
                    <span>Folder:</span>
                    <code className="text-[#8F173D] font-mono">
                      public/gallery/{CATEGORY_FOLDER_MAP[activeCategory]}/
                    </code>
                  </span>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Lightbox / Zoom Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredImages[lightboxIndex] && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-md cursor-pointer"
            />

            {/* Content Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              className="relative z-10 max-w-5xl w-full flex flex-col items-center pointer-events-none"
            >
              <div className="relative pointer-events-auto bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl max-h-[85vh] flex flex-col w-full">
                {/* Modal Header */}
                <div className="flex items-center justify-between p-4 bg-slate-950/80 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-brand-300 uppercase tracking-widest bg-brand-950/80 px-2.5 py-1 rounded-md border border-brand-800/50">
                      {filteredImages[lightboxIndex].category}
                    </span>
                    <span className="text-xs text-slate-400">
                      {lightboxIndex + 1} of {filteredImages.length}
                    </span>
                  </div>
                  <button
                    onClick={() => setLightboxIndex(null)}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-[#8F173D] text-slate-300 hover:text-white transition-colors"
                    aria-label="Close Lightbox"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Main Lightbox Image */}
                <div className="relative flex items-center justify-center p-2 bg-slate-950 min-h-[240px] sm:min-h-[380px] md:min-h-[450px]">
                  <img
                    src={filteredImages[lightboxIndex].url || filteredImages[lightboxIndex].image}
                    alt={filteredImages[lightboxIndex].title}
                    className="max-h-[65vh] w-auto object-contain rounded-xl select-none"
                  />

                  {/* Previous / Next Controls */}
                  {filteredImages.length > 1 && (
                    <>
                      <button
                        onClick={handlePrev}
                        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-slate-900/80 hover:bg-[#8F173D] text-white border border-slate-700/60 shadow-lg backdrop-blur-md transition-all duration-200"
                        aria-label="Previous Image"
                      >
                        <ChevronLeft className="h-5 sm:h-6 w-5 sm:w-6" />
                      </button>
                      <button
                        onClick={handleNext}
                        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-slate-900/80 hover:bg-[#8F173D] text-white border border-slate-700/60 shadow-lg backdrop-blur-md transition-all duration-200"
                        aria-label="Next Image"
                      >
                        <ChevronRight className="h-5 sm:h-6 w-5 sm:w-6" />
                      </button>
                    </>
                  )}
                </div>

                {/* Modal Footer */}
                <div className="p-4 bg-slate-950/90 border-t border-slate-800 text-center">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {filteredImages[lightboxIndex].title}
                  </h3>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
