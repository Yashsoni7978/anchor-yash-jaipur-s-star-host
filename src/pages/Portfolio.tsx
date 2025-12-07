import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Youtube, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  category: string;
  featured?: boolean;
}

const videos: Video[] = [
  {
    id: "1",
    title: "Anchor Yash Highlight Reel 2024",
    description: "A compilation of the best moments from 1100+ events",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    category: "Highlight",
    featured: true,
  },
  {
    id: "2",
    title: "Royal Jaipur Wedding",
    description: "Hosting at a grand royal wedding ceremony",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    category: "Wedding",
  },
  {
    id: "3",
    title: "Corporate Annual Meet 2024",
    description: "Fortune 500 company annual gathering",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    category: "Corporate",
  },
  {
    id: "4",
    title: "India Kids Fashion Week",
    description: "Official anchor at IKFW Jaipur edition",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    category: "Fashion",
  },
  {
    id: "5",
    title: "Sangeet Night Performance",
    description: "Energetic sangeet ceremony hosting",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    category: "Wedding",
  },
  {
    id: "6",
    title: "Destination Wedding Udaipur",
    description: "Luxury destination wedding at Lake Palace",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    category: "Wedding",
  },
  {
    id: "7",
    title: "Product Launch Event",
    description: "Premium brand product launch hosting",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    category: "Corporate",
  },
  {
    id: "8",
    title: "Fashion Week Runway",
    description: "Designer showcase at Jaipur Fashion Week",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    category: "Fashion",
  },
];

const categories = ["All", "Highlight", "Wedding", "Corporate", "Fashion"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const filteredVideos = activeCategory === "All" 
    ? videos 
    : videos.filter(v => v.category === activeCategory);

  const featuredVideo = videos.find(v => v.featured);
  const otherVideos = filteredVideos.filter(v => !v.featured);

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
              Portfolio
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6">
              Watch Me <span className="text-gradient-gold">In Action</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience the energy, professionalism, and entertainment I bring to every event through these video highlights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Video */}
      {featuredVideo && (
        <section className="pb-16">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden border border-border"
            >
              {playingVideo === featuredVideo.id ? (
                <iframe
                  src={`https://youtu.be/EXcsessKpR4?si=-ZhDznLCqXoyC3pw`}
                  title={featuredVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              ) : (
                <div 
                  className="absolute inset-0 bg-card flex items-center justify-center cursor-pointer group"
                  onClick={() => setPlayingVideo(featuredVideo.id)}
                >
                  <img
                    src={`https://img.youtube.com/vi/${featuredVideo.youtubeId}/maxresdefault.jpg`}
                    alt={featuredVideo.title}
                    className="w-full h-full object-cover opacity-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                        <Play className="w-10 h-10 text-primary fill-primary" />
                      </div>
                      <h3 className="text-2xl font-display font-bold mb-2">{featuredVideo.title}</h3>
                      <p className="text-muted-foreground">{featuredVideo.description}</p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="pb-8">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              All <span className="text-gradient-gold">Videos</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div 
                  className="relative aspect-video rounded-xl overflow-hidden mb-4 cursor-pointer border border-border"
                  onClick={() => setPlayingVideo(video.id)}
                >
                  {playingVideo === video.id ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  ) : (
                    <>
                      <img
                        src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-background/40 flex items-center justify-center">
                        <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                          <Play className="w-6 h-6 text-primary fill-primary" />
                        </div>
                      </div>
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded">
                          {video.category}
                        </span>
                      </div>
                    </>
                  )}
                </div>
                <h3 className="font-display font-semibold group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{video.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Youtube className="w-16 h-16 text-[#FF0000] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Subscribe for More <span className="text-gradient-gold">Content</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Stay updated with the latest event highlights, behind-the-scenes content, and anchoring tips on my YouTube channel.
            </p>
            <a
              href="https://www.youtube.com/@Anchor_Yash"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="border-[#FF0000] text-[#FF0000] hover:bg-[#FF0000] hover:text-foreground">
                <Youtube className="w-5 h-5 mr-2" />
                Subscribe on YouTube
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
