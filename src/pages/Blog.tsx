import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { blogPosts } from "@/data/blogPosts"; // This imports your real data

export default function Blog() {
  return (
    <Layout>
      <SEO 
        title="Event Planning Blog | Anchor Yash Soni – Jaipur"
        description="Read the latest insights on wedding anchoring, corporate events, and event management tips from Jaipur's premium host."
        keywords="event blog jaipur, wedding anchor tips, anchoring scripts, event management trends"
        canonical="/blog"
      />
      
      <section className="pt-32 pb-20 relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Blog</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
              Latest <span className="text-gradient-gold">Insights</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Expert advice, behind-the-scenes stories, and tips to make your next event unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors h-full flex flex-col"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-display font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    to={`/blog/${post.slug}`} 
                    className="inline-flex items-center text-primary text-sm font-medium hover:gap-2 transition-all mt-auto"
                  >
                    Read Article <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
