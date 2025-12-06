import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import weddingImage from "@/assets/wedding-event.jpg";
import corporateImage from "@/assets/corporate-event.jpg";
import fashionImage from "@/assets/fashion-show.jpg";
import sangeetImage from "@/assets/sangeet-event.jpg";
import poolPartyImage from "@/assets/pool-party.jpg";
import kidsImage from "@/assets/kids-fashion.jpg";
import heroImage from "@/assets/hero-anchor.jpg.jpg";
import portraitImage from "@/assets/anchor-portrait.jpg";

const categories = ["All", "Weddings", "Corporate", "Fashion", "Social", "Stage"];

const galleryItems = [
  { id: 1, src: heroImage, category: "Stage", title: "Grand Stage Performance" },
  { id: 2, src: weddingImage, category: "Weddings", title: "Royal Wedding Setup" },
  { id: 3, src: corporateImage, category: "Corporate", title: "Corporate Annual Meet" },
  { id: 4, src: fashionImage, category: "Fashion", title: "Fashion Week Jaipur" },
  { id: 5, src: sangeetImage, category: "Weddings", title: "Sangeet Night" },
  { id: 6, src: poolPartyImage, category: "Social", title: "Pool Party Event" },
  { id: 7, src: kidsImage, category: "Fashion", title: "Kids Fashion Show" },
  { id: 8, src: portraitImage, category: "Stage", title: "Backstage Moments" },
  { id: 9, src: weddingImage, category: "Weddings", title: "Destination Wedding" },
  { id: 10, src: corporateImage, category: "Corporate", title: "Product Launch" },
  { id: 11, src: fashionImage, category: "Fashion", title: "Designer Showcase" },
  { id: 12, src: sangeetImage, category: "Social", title: "Cultural Night" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="container-custom relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Gallery
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6">
              Captured <span className="text-gradient-gold">Moments</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A visual journey through 700+ events — weddings, corporate gatherings, fashion shows, and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-12">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "gold" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20">
        <div className="container-custom">
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-xs text-primary font-medium">{item.category}</span>
                    <p className="text-sm font-semibold">{item.title}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-full bg-card border border-border hover:border-primary transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-6 p-2 rounded-full bg-card border border-border hover:border-primary transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <motion.img
              key={currentImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={filteredItems[currentImage]?.src}
              alt={filteredItems[currentImage]?.title}
              className="max-w-[90vw] max-h-[80vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-6 p-2 rounded-full bg-card border border-border hover:border-primary transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <p className="font-display font-semibold">{filteredItems[currentImage]?.title}</p>
              <p className="text-sm text-muted-foreground">
                {currentImage + 1} / {filteredItems.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
