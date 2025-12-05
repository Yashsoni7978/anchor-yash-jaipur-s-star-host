import { motion } from "framer-motion";
import { Instagram as InstagramIcon, Heart, MessageCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import heroImage from "@/assets/hero-anchor.jpg";
import weddingImage from "@/assets/wedding-event.jpg";
import corporateImage from "@/assets/corporate-event.jpg";
import fashionImage from "@/assets/fashion-show.jpg";
import sangeetImage from "@/assets/sangeet-event.jpg";
import poolPartyImage from "@/assets/pool-party.jpg";
import kidsImage from "@/assets/kids-fashion.jpg";
import portraitImage from "@/assets/anchor-portrait.jpg";

const instagramPosts = [
  { id: 1, src: heroImage, likes: "2,456", comments: "128", caption: "Another amazing night on stage! 🎤✨" },
  { id: 2, src: weddingImage, likes: "3,891", comments: "245", caption: "Royal wedding vibes at City Palace 👑" },
  { id: 3, src: sangeetImage, likes: "4,123", comments: "312", caption: "When the dance floor catches fire 🔥" },
  { id: 4, src: corporateImage, likes: "1,892", comments: "89", caption: "Corporate excellence meets entertainment 💼" },
  { id: 5, src: fashionImage, likes: "5,234", comments: "421", caption: "Fashion Week Jaipur 2024 ✨" },
  { id: 6, src: poolPartyImage, likes: "3,567", comments: "198", caption: "Pool party season is here! 🌊🎉" },
  { id: 7, src: kidsImage, likes: "4,892", comments: "356", caption: "India Kids Fashion Week moments 👶✨" },
  { id: 8, src: portraitImage, likes: "6,123", comments: "489", caption: "Ready for another night of magic 🎭" },
  { id: 9, src: weddingImage, likes: "2,345", comments: "167", caption: "Destination wedding in Udaipur 💍" },
];

export default function Instagram() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            {/* Profile Section */}
            <div className="flex flex-col items-center mb-8">
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-primary via-gold-light to-primary">
                  <img
                    src={portraitImage}
                    alt="Anchor Yash"
                    className="w-full h-full rounded-full object-cover border-4 border-background"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] rounded-full flex items-center justify-center">
                  <InstagramIcon className="w-5 h-5 text-foreground" />
                </div>
              </div>
              
              <h1 className="text-3xl font-display font-bold mb-2">@anchor_yash</h1>
              <p className="text-muted-foreground mb-4">
                Jaipur's Most Energetic Event Host | 700+ Events | Weddings • Corporate • Fashion
              </p>
              
              {/* Stats */}
              <div className="flex gap-8 mb-6">
                <div className="text-center">
                  <p className="text-2xl font-display font-bold">156</p>
                  <p className="text-sm text-muted-foreground">Posts</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-display font-bold">45.2K</p>
                  <p className="text-sm text-muted-foreground">Followers</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-display font-bold">892</p>
                  <p className="text-sm text-muted-foreground">Following</p>
                </div>
              </div>
              
              <a
                href="https://instagram.com/anchor_yash"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-foreground hover:opacity-90">
                  <InstagramIcon className="w-5 h-5 mr-2" />
                  Follow on Instagram
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instagram Feed Grid */}
      <section className="pb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-display font-bold">
              Latest <span className="text-gradient-gold">Posts</span>
            </h2>
            <p className="text-muted-foreground mt-2">
              Follow me for behind-the-scenes updates and event highlights
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-2 md:gap-4">
            {instagramPosts.map((post, index) => (
              <motion.a
                key={post.id}
                href="https://instagram.com/anchor_yash"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
              >
                <img
                  src={post.src}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex items-center gap-6 text-foreground">
                    <span className="flex items-center gap-2">
                      <Heart className="w-5 h-5 fill-current" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      {post.comments}
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <a
              href="https://instagram.com/anchor_yash"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="goldOutline" size="lg">
                View More on Instagram
                <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-display font-bold">
              Story <span className="text-gradient-gold">Highlights</span>
            </h2>
          </motion.div>

          <div className="flex justify-center gap-6 overflow-x-auto pb-4">
            {["Weddings", "Corporate", "Fashion", "BTS", "Reviews", "Reels"].map((highlight, index) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-2 flex-shrink-0"
              >
                <div className="w-20 h-20 rounded-full p-0.5 bg-gradient-to-tr from-primary via-gold-light to-primary">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                    <span className="text-2xl">
                      {highlight === "Weddings" && "💒"}
                      {highlight === "Corporate" && "🏢"}
                      {highlight === "Fashion" && "👗"}
                      {highlight === "BTS" && "🎬"}
                      {highlight === "Reviews" && "⭐"}
                      {highlight === "Reels" && "🎥"}
                    </span>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
