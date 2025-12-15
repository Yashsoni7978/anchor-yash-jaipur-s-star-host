import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Youtube, ExternalLink, X, FolderLock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import { SEO } from "@/components/SEO";

interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  category: string;
  featured?: boolean;
}

// ⚠️ NOTE: These are currently placeholders. 
// You will need to replace 'dQw4w9WgXcQ' with your actual YouTube Video IDs.
const videos: Video[] = [
  {
    id: "1",
    title: "Anchor Yash Highlight Reel 2024",
    description: "A compilation of the best moments from 1100+ events",
    youtubeId: "dQw4w9WgXcQ", 
    category: "Highlight",
    featured: true,
  },
  {
    id: "2",
    title: "Royal Jaipur Wedding",
    description: "Hosting at a grand royal wedding ceremony",
    youtubeId: "dQw4w9WgXcQ", 
    category: "Wedding",
  },
  {
    id: "3",
    title: "Corporate Annual Meet 2024",
    description: "Fortune 500 company annual gathering",
    youtubeId: "dQw4w9WgXcQ", 
    category: "Corporate",
  },
  {
    id: "4",
    title: "India Kids Fashion Week",
    description: "Official anchor at IKFW Jaipur edition",
    youtubeId: "dQw4w9WgXcQ", 
    category: "Fashion",
  },
  {
    id: "5",
    title: "Sangeet Night Performance",
    description: "Energetic sangeet ceremony hosting",
    youtubeId: "dQw4w9WgXcQ", 
    category: "Wedding",
  },
  {
    id: "6",
    title: "Destination Wedding Udaipur",
    description: "Luxury destination wedding at Lake Palace",
    youtubeId: "dQw4w9WgXcQ", 
    category: "Wedding",
  },
];

const categories = ["All", "Highlight", "Wedding", "Corporate", "Fashion"];

// ✅ UPDATED: Your Real Google Drive Link
const RAW_WORK_DRIVE_LINK = "https://drive.google.com/drive/folders/1asPWHK3S1I3KX7lWZQX7eq6y-iLPLDLZ?usp=drive_link";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const filteredVideos = activeCategory === "All" 
    ? videos 
    : videos.filter(v => v.category === activeCategory);

  const featuredVideo = videos.find(v => v.featured);
  const otherVideos = filteredVideos.filter(v => !v.featured);

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  // Schema for Video Gallery
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Anchor Yash Soni Portfolio",
    "url": "https://yashsoni.in/portfolio",
    "description": "Watch highlight videos of Anchor Yash Soni hosting weddings, corporate events, and fashion shows in Jaipur.",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": videos.map((video, index) => ({
        "@type": "VideoObject",
        "position": index + 1,
        "name": video.title,
        "description": video.description,
        "thumbnailUrl": `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`,
        "uploadDate": "2024-01-01", 
        "contentUrl": `https://www.youtube.com/watch?v=${video.youtubeId}`
      }))
    }
  };

  return (
    <Layout>
      <SEO 
        title="Event Hosting Portfolio | Anchor Yash Soni – Jaipur"
        description="Watch selected event hosting highlights by Anchor Yash. Private showcases, premium weddings, corporate events, and curated work samples."
        keywords="anchor yash portfolio, event anchor videos, wedding anchor jaipur, corporate event host, event hosting showcase"
        canonical="/portfolio"
      />
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      {/* Hero Section */}
      <section className="pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="container-custom relative text-center">
          <ScrollReveal>
            <span className="text-primary text-xs sm:text-sm font-medium uppercase tracking-wider">
              Portfolio
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-3 sm:mt-4 mb-4 sm:mb-6">
              Watch Me <span className="text-gradient-gold">In Action</span>
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
              Experience the energy, professionalism, and entertainment I bring to every event through these video highlights.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Video - YouTube Embed */}
      {featuredVideo && (
        <section className="pb-12 sm:pb-16">
          <div className="container-custom">
            <ScrollReveal delay={0.1}>
              <div className="relative aspect-video max-w-4xl mx-auto rounded-xl sm:rounded-2xl overflow-hidden border border-border">
                <iframe
                  src={`https://www.youtube.com/embed/${featuredVideo.youtubeId}?rel=0`}
                  title={featuredVideo.title}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 pointer-events-none">
                  <span className="px-2 py-1 sm:px-3 sm:py-1.5 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    Featured
                  </span>
                </div>
              </div>
              <div className="text-center mt-4 sm:mt-6">
                <h2 className="font-display font-bold text-xl sm:text-2xl">{featuredVideo.title}</h2>
                <p className="text-muted-foreground text-sm sm:text-base mt-1">{featuredVideo.description}</p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="pb-6 sm:pb-8">
        <div className="container-custom">
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Video Grid - YouTube Embeds Only */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-center mb-8 sm:mb-12">
              All <span className="text-gradient-gold">Videos</span>
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {otherVideos.map((video) => (
              <StaggerItem key={video.id}>
                <div className="h-full flex flex-col bg-background rounded-lg sm:rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-colors duration-300">
                  {/* YouTube Embed */}
                  <div className="relative aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0`}
                      title={video.title}
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                      loading="lazy"
                    />
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 pointer-events-none">
                      <span className="px-2 py-0.5 sm:py-1 bg-primary/90 text-primary-foreground text-[10px] sm:text-xs font-medium rounded">
                        {video.category}
                      </span>
                    </div>
                  </div>
                  {/* Video Info */}
                  <div className="p-4 flex-grow flex flex-col">
                    <h3 className="font-display font-semibold text-sm sm:text-base line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1 line-clamp-2 flex-grow">
                      {video.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Raw Work Access Section */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <FolderLock className="w-12 h-12 sm:w-16 sm:h-16 text-primary mx-auto mb-4 sm:mb-6" />
              </motion.div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 sm:mb-4">
                Request Access to <span className="text-gradient-gold">Raw Work</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto mb-6 sm:mb-8 px-4">
                Raw videos, behind-the-scenes footage, and unedited event recordings are shared selectively with serious clients and partners only. If you're looking for in-depth portfolio samples or reference material for your upcoming event, request access below.
              </p>
              <motion.a
                href={RAW_WORK_DRIVE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="gold" size="lg" className="btn-hover">
                  <FolderLock className="w-5 h-5 mr-2" />
                  View Raw Files (Google Drive)
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </motion.a>
              <p className="text-xs text-muted-foreground mt-4">
                Access may require approval. Contact for queries.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* YouTube CTA */}
      <section className="section-padding bg-card border-t border-border">
        <div className="container-custom text-center">
          <ScrollReveal>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Youtube className="w-12 h-12 sm:w-16 sm:h-16 text-[#FF0000] mx-auto mb-4 sm:mb-6" />
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 sm:mb-4">
              Subscribe for More <span className="text-gradient-gold">Content</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto mb-6 sm:mb-8 px-4">
              Stay updated with the latest event highlights, behind-the-scenes content, and anchoring tips on my YouTube channel.
            </p>
            <motion.a
              href="https://www.youtube.com/@Anchor_Yash"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" size="lg" className="border-[#FF0000] text-[#FF0000] hover:bg-[#FF0000] hover:text-white btn-hover">
                <Youtube className="w-5 h-5 mr-2" />
                Subscribe on YouTube
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </motion.a>
          </ScrollReveal>
        </div>
      </section>

      {/* Video Modal - Kept for future flexibility */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={closeVideo}
          >
            <motion.button
              onClick={closeVideo}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 sm:p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="w-full max-w-5xl aspect-video rounded-xl sm:rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </motion.div>

            <motion.div 
              className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 text-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="font-display font-semibold text-sm sm:text-base">{selectedVideo.title}</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">{selectedVideo.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
