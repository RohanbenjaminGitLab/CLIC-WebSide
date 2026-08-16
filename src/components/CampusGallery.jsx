import { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageOff, ChevronLeft, ChevronRight, X, Maximize2, Sparkles, FolderOpen } from 'lucide-react';
import { CATEGORIES, CATEGORY_FOLDER_MAP, getAllGalleryImages } from '../data/galleryCategories';

export default function CampusGallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const tabsContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

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

  // Check category scroll capability for left/right buttons & fade indicators
  const checkScroll = useCallback(() => {
    const el = tabsContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);
  }, []);

  useEffect(() => {
    checkScroll();
    const el = tabsContainerRef.current;
    if (!el) return;

    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);

    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll]);

  // Smooth scroll left and right for category tabs
  const scrollTabs = (direction) => {
    const el = tabsContainerRef.current;
    if (!el) return;
    const scrollAmount = Math.max(el.clientWidth * 0.6, 200);
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  // Category tab selection with auto-scroll into view
  const handleCategorySelect = (catName, event) => {
    setActiveCategory(catName);
    setLightboxIndex(null);

    // Center selected button in category scroll container
    if (event?.currentTarget && tabsContainerRef.current) {
      const button = event.currentTarget;
      const container = tabsContainerRef.current;
      const buttonLeft = button.offsetLeft;
      const buttonWidth = button.offsetWidth;
      const containerWidth = container.offsetWidth;
      const targetScroll = buttonLeft - (containerWidth / 2) + (buttonWidth / 2);

      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  // Modal navigation
  const handlePrev = useCallback((e) => {
    if (e) e.stopPropagation();
    if (lightboxIndex === null || filteredImages.length === 0) return;
    setLightboxIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  }, [lightboxIndex, filteredImages.length]);

  const handleNext = useCallback((e) => {
    if (e) e.stopPropagation();
    if (lightboxIndex === null || filteredImages.length === 0) return;
    setLightboxIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  }, [lightboxIndex, filteredImages.length]);

  // Keyboard navigation and lock body scroll during lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex, handlePrev, handleNext]);

  return (
    <section id="gallery" className="w-full py-8 sm:py-12 md:py-16 scroll-mt-24 bg-white dark:bg-slate-950 transition-colors">
      {/* Gallery Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 px-4 space-y-3 sm:space-y-4">
        <span className="inline-flex items-center gap-1.5 text-[#8F173D] dark:text-brand-300 text-xs sm:text-sm font-bold uppercase tracking-widest bg-brand-50 dark:bg-brand-950/40 px-3.5 py-1.5 rounded-full border border-brand-100 dark:border-brand-900/50 shadow-sm">
          <Sparkles className="h-3.5 w-3.5 text-[#8F173D] dark:text-brand-300 shrink-0" />
          Frontend Campus Gallery
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-tight">
          Campus Gallery
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
          Explore campus activities, sports meets, seminars, special days, awarding ceremonies, and events.
        </p>
      </div>

      {/* Responsive Filter Tabs Bar with Left/Right Scroll Controls */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 mb-8 sm:mb-10">
        <div className="relative flex items-center group/tabbar">
          
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={() => scrollTabs('left')}
            disabled={!canScrollLeft}
            aria-label="Scroll categories left"
            className={`hidden sm:flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md text-slate-700 dark:text-slate-200 hover:bg-[#8F173D] hover:text-white dark:hover:bg-[#8F173D] dark:hover:text-white transition-all shrink-0 mr-1.5 sm:mr-2 z-10 ${
              !canScrollLeft ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:scale-105 active:scale-95'
            }`}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Left Gradient Fade Mask */}
          {canScrollLeft && (
            <div className="hidden sm:block absolute left-10 top-0 bottom-0 w-8 bg-gradient-to-r from-white dark:from-slate-950 to-transparent pointer-events-none z-[5]" />
          )}

          {/* Scrolling Categories List */}
          <div
            ref={tabsContainerRef}
            className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 overflow-x-auto scrollbar-none py-2 px-1 scroll-smooth w-full select-none"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {CATEGORIES.map((catName) => {
              const isActive = activeCategory === catName;
              return (
                <button
                  key={catName}
                  type="button"
                  onClick={(e) => handleCategorySelect(catName, e)}
                  className={`relative px-3.5 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap shrink-0 flex items-center gap-1.5 sm:gap-2 cursor-pointer select-none touch-manipulation ${
                    isActive
                      ? 'bg-[#8F173D] text-white shadow-md shadow-[#8F173D]/25 font-bold scale-[1.02]'
                      : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white border border-slate-200/60 dark:border-slate-800'
                  }`}
                >
                  <span>{catName}</span>

                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryTab"
                      className="absolute inset-0 bg-[#8F173D] rounded-xl sm:rounded-2xl -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Gradient Fade Mask */}
          {canScrollRight && (
            <div className="hidden sm:block absolute right-10 top-0 bottom-0 w-8 bg-gradient-to-l from-white dark:from-slate-950 to-transparent pointer-events-none z-[5]" />
          )}

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={() => scrollTabs('right')}
            disabled={!canScrollRight}
            aria-label="Scroll categories right"
            className={`hidden sm:flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md text-slate-700 dark:text-slate-200 hover:bg-[#8F173D] hover:text-white dark:hover:bg-[#8F173D] dark:hover:text-white transition-all shrink-0 ml-1.5 sm:ml-2 z-10 ${
              !canScrollRight ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:scale-105 active:scale-95'
            }`}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile-only scroll hint / swipe indicators */}
        <div className="flex sm:hidden items-center justify-between px-2 pt-1 text-[11px] text-slate-400 dark:text-slate-500 font-medium">
          <span className="flex items-center gap-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#8F173D]" />
            {filteredImages.length} {filteredImages.length === 1 ? 'image' : 'images'}
          </span>
          <span className="text-[10px] text-slate-400 dark:text-slate-500 italic">
            Swipe categories left / right
          </span>
        </div>
      </div>

      {/* Gallery Grid or Clean Empty State */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {filteredImages.length > 0 ? (
            /* Responsive Balanced Grid */
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6"
            >
              {filteredImages.map((image, idx) => (
                <motion.div
                  key={image.id || idx}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: (idx % 8) * 0.03 }}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:shadow-[#8F173D]/10 transition-all duration-300 cursor-pointer aspect-[4/3] xs:aspect-[4/3] sm:aspect-square"
                >
                  <img
                    src={image.url || image.image}
                    alt={image.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    onError={(e) => {
                      e.currentTarget.style.opacity = '0.5';
                    }}
                  />

                  {/* Category Chip always visible on mobile, expanded on desktop hover */}
                  <div className="absolute top-2.5 left-2.5 z-10">
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-bold text-white bg-slate-950/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 shadow-sm">
                      {image.category}
                    </span>
                  </div>

                  {/* Gradient Hover/Focus Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3.5 sm:p-4 z-20">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xs sm:text-sm font-bold text-white line-clamp-1">
                        {image.title}
                      </h3>
                      <div className="p-1.5 rounded-lg bg-white/20 text-white backdrop-blur-md shrink-0">
                        <Maximize2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </div>
                    </div>
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
              className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 text-center max-w-2xl mx-auto shadow-sm my-6 flex flex-col items-center justify-center space-y-3 sm:space-y-4"
            >
              <div className="relative">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-brand-50 dark:bg-brand-950/40 border border-brand-100 dark:border-brand-900/60 flex items-center justify-center text-[#8F173D] dark:text-brand-300 shadow-inner">
                  {activeCategory === 'All' ? (
                    <FolderOpen className="h-8 w-8 sm:h-10 sm:w-10 text-[#8F173D] stroke-[1.5]" />
                  ) : (
                    <ImageOff className="h-8 w-8 sm:h-10 sm:w-10 text-[#8F173D] stroke-[1.5]" />
                  )}
                </div>
                <div className="absolute -bottom-1 -right-1 bg-[#8F173D] text-white p-1 rounded-full text-[10px] shadow-sm">
                  <Sparkles className="h-3 w-3" />
                </div>
              </div>

              <div className="space-y-1 sm:space-y-1.5 px-2">
                <h3 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white">
                  No images available in this category yet.
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light max-w-md mx-auto leading-relaxed">
                  {activeCategory === 'All'
                    ? 'Place images inside public/gallery/ folders or list them in galleryImages in src/data/galleryCategories.js.'
                    : `Category "${activeCategory}" is ready. Add images into public/gallery/${CATEGORY_FOLDER_MAP[activeCategory] || ''}/ and list them in src/data/galleryCategories.js.`}
                </p>
              </div>

              {activeCategory !== 'All' && CATEGORY_FOLDER_MAP[activeCategory] && (
                <div className="pt-1 sm:pt-2">
                  <span className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-medium text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-200/60 dark:border-slate-800">
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

      {/* Responsive Lightbox / Zoom Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredImages[lightboxIndex] && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="absolute inset-0 bg-slate-950/92 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Dialog Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 10 }}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              className="relative z-10 max-w-5xl w-full flex flex-col items-center pointer-events-none"
            >
              <div className="relative pointer-events-auto bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col w-full">
                
                {/* Modal Header */}
                <div className="flex items-center justify-between px-3.5 py-3 sm:p-4 bg-slate-950/90 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] sm:text-xs font-bold text-brand-300 uppercase tracking-widest bg-brand-950/80 px-2.5 py-1 rounded-md border border-brand-800/50">
                      {filteredImages[lightboxIndex].category}
                    </span>
                    <span className="text-[11px] sm:text-xs text-slate-400 font-medium">
                      {lightboxIndex + 1} / {filteredImages.length}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(null)}
                    className="p-2 min-w-[36px] min-h-[36px] flex items-center justify-center rounded-xl bg-slate-800 hover:bg-[#8F173D] text-slate-300 hover:text-white transition-colors cursor-pointer touch-manipulation"
                    aria-label="Close Lightbox"
                  >
                    <X className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                  </button>
                </div>

                {/* Main Lightbox Image Viewport */}
                <div className="relative flex items-center justify-center p-2 sm:p-4 bg-slate-950 min-h-[220px] sm:min-h-[350px] md:min-h-[420px] select-none">
                  <img
                    src={filteredImages[lightboxIndex].url || filteredImages[lightboxIndex].image}
                    alt={filteredImages[lightboxIndex].title}
                    className="max-h-[55vh] sm:max-h-[65vh] md:max-h-[70vh] w-auto max-w-full object-contain rounded-lg sm:rounded-xl shadow-lg"
                  />

                  {/* Previous / Next Controls */}
                  {filteredImages.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={handlePrev}
                        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-slate-900/85 hover:bg-[#8F173D] text-white border border-slate-700/60 shadow-xl backdrop-blur-md transition-all active:scale-95 cursor-pointer touch-manipulation z-20"
                        aria-label="Previous Image"
                      >
                        <ChevronLeft className="h-5 sm:h-6 w-5 sm:w-6" />
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-slate-900/85 hover:bg-[#8F173D] text-white border border-slate-700/60 shadow-xl backdrop-blur-md transition-all active:scale-95 cursor-pointer touch-manipulation z-20"
                        aria-label="Next Image"
                      >
                        <ChevronRight className="h-5 sm:h-6 w-5 sm:w-6" />
                      </button>
                    </>
                  )}
                </div>

                {/* Modal Footer */}
                <div className="px-4 py-3 sm:py-3.5 bg-slate-950/95 border-t border-slate-800/80 text-center">
                  <h3 className="text-xs sm:text-base font-bold text-white truncate max-w-lg mx-auto">
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

