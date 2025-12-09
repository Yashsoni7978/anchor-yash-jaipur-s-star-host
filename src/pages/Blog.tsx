import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

const blogPosts = [
  {
    id: 1,
    slug: "best-wedding-anchors-jaipur",
    title: "Best Wedding Anchors in Jaipur – What to Look For",
    excerpt: "Discover the key qualities that make a wedding anchor exceptional. From energy and crowd engagement to bilingual fluency, learn how to choose the perfect host for your special day.",
    category: "Wedding Tips",
    date: "2024-12-01",
    readTime: "5 min",
    featured: true,
  },
  {
    id: 2,
    slug: "how-anchor-transforms-event",
    title: "How a Good Anchor Can Transform Your Event",
    excerpt: "A skilled anchor does more than introduce speakers. Learn how professional hosting can elevate energy levels, create memorable moments, and ensure seamless event flow.",
    category: "Event Planning",
    date: "2024-11-28",
    readTime: "4 min",
    featured: false,
  },
  {
    id: 3,
    slug: "event-trends-rajasthan-2025",
    title: "Top 10 Event Trends in Rajasthan 2025",
    excerpt: "From destination weddings in heritage palaces to tech-integrated corporate events, explore the hottest event trends shaping celebrations in Rajasthan this year.",
    category: "Trends",
    date: "2024-11-25",
    readTime: "6 min",
    featured: false,
  },
  {
    id: 4,
    slug: "difference-anchoring-hosting",
    title: "Difference Between Anchoring & Event Hosting",
    excerpt: "Many people use these terms interchangeably, but there are subtle differences. Understand when you need an anchor versus a host and how each role contributes to event success.",
    category: "Industry Insights",
    date: "2024-11-20",
    readTime: "4 min",
    featured: false,
  },
  {
    id: 5,
    slug: "event-management-guide-jaipur",
    title: "Complete Event Management Guide in Jaipur",
    excerpt: "Planning an event in the Pink City? This comprehensive guide covers venues, vendors, seasonal considerations, and insider tips for successful event execution.",
    category: "Guides",
    date: "2024-11-15",
    readTime: "8 min",
    featured: false,
  },
  {
    id: 6,
    slug: "sangeet-planning-tips",
    title: "10 Tips for Planning the Perfect Sangeet Night",
    excerpt: "Make your sangeet ceremony unforgettable with these expert tips on choreography, music selection, lighting, and audience engagement strategies.",
    category: "Wedding Tips",
    date: "2024-11-10",
    readTime: "5 min",
    featured: false,
  },
  {
    id: 7,
    slug: "corporate-event-anchoring-tips",
    title: "Corporate Event Anchoring: A Professional Guide",
    excerpt: "Learn the nuances of hosting corporate events, from maintaining professional tone to engaging diverse audiences while adhering to brand guidelines.",
    category: "Corporate",
    date: "2024-11-05",
    readTime: "6 min",
    featured: false,
  },
  {
    id: 8,
    slug: "choosing-venue-jaipur",
    title: "How to Choose the Perfect Event Venue in Jaipur",
    excerpt: "From heritage havelis to modern convention centers, discover how to select the ideal venue based on guest count, budget, theme, and accessibility.",
    category: "Guides",
    date: "2024-10-30",
    readTime: "7 min",
    featured: false,
  },
  {
    id: 9,
    slug: "fashion-show-anchoring",
    title: "The Art of Fashion Show Anchoring",
    excerpt: "Fashion shows require a unique anchoring style. Learn how to command the runway, introduce designers effectively, and maintain the glamorous atmosphere.",
    category: "Fashion",
    date: "2024-10-25",
    readTime: "5 min",
    featured: false,
  },
  {
    id: 10,
    slug: "destination-wedding-rajasthan",
    title: "Planning a Destination Wedding in Rajasthan",
    excerpt: "Why Rajasthan is India's top destination wedding location and how to plan a royal celebration in the land of kings, from Udaipur to Jodhpur.",
    category: "Wedding Tips",
    date: "2024-10-20",
    readTime: "8 min",
    featured: false,
  },
];

const categories = ["All", "Wedding Tips", "Event Planning", "Trends", "Guides", "Corporate", "Fashion"];

export default function Blog() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="container-custom relative text-center">
          <ScrollReveal>
            <span className="text-primary text-xs sm:text-sm font-medium uppercase tracking-wider">
              Blog
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-3 sm:mt-4 mb-4 sm:mb-6">
              Insights & <span className="text-gradient-gold">Inspiration</span>
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
              Expert tips, industry insights, and guides on event hosting, wedding planning, and creating memorable celebrations.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="pb-12 sm:pb-16">
          <div className="container-custom">
            <ScrollReveal>
              <motion.article
                className="relative p-6 sm:p-8 md:p-12 bg-card border border-border rounded-xl sm:rounded-2xl card-hover"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <span className="px-2.5 py-1 bg-primary/10 text-primary text-[10px] sm:text-xs font-medium rounded-full">
                  Featured
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-4 sm:mt-6 mb-3 sm:mb-4 hover:text-primary transition-colors cursor-pointer">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-4 sm:mb-6 max-w-3xl">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
                  <span className="flex items-center gap-1.5 sm:gap-2">
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    {new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1.5 sm:gap-2">
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    {featuredPost.readTime} read
                  </span>
                  <span className="px-2 py-1 bg-muted rounded text-[10px] sm:text-xs">
                    {featuredPost.category}
                  </span>
                </div>
                <Button variant="gold" className="btn-hover text-sm">
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.article>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-custom">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm border border-border text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {regularPosts.map((post) => (
              <StaggerItem key={post.id}>
                <motion.article
                  className="group bg-background border border-border rounded-lg sm:rounded-xl overflow-hidden card-hover"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <span className="text-3xl sm:text-4xl font-display font-bold text-muted-foreground/30">
                      {post.id.toString().padStart(2, '0')}
                    </span>
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-muted-foreground mb-2 sm:mb-3">
                      <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-muted rounded">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-display font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2 cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 mb-3 sm:mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] sm:text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                      <span className="text-primary text-xs sm:text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Read more
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 sm:mb-4">
                Stay <span className="text-gradient-gold">Updated</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8">
                Get the latest event tips, industry insights, and exclusive content delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2.5 sm:px-4 sm:py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-sm sm:text-base"
                />
                <Button variant="gold" className="btn-hover">
                  Subscribe
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
