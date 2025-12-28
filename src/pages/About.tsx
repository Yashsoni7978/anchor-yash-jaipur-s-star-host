import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Instagram, Award, Users, Mic, Calendar, MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import { SEO } from "@/components/SEO"; // Added Smart SEO
import portraitImage from "@/assets/anchor-portrait.jpg";
import weddingImage from "@/assets/wedding-event.jpg";
import corporateImage from "@/assets/corporate-event.jpg";

const achievements = [
  { year: "2019", title: "Started Professional Anchoring", description: "Began journey as a professional event anchor in PAN India" },
  { year: "2020", title: "100+ Events Milestone", description: "Crossed 100 successful events across Rajasthan" },
  { year: "2022", title: "500+ Events Completed", description: "Established as one of the most sought-after anchors in the region" },
  { year: "2023", title: "Corporate Giants Partnership", description: "Started hosting events for Renowned companies" },
  { year: "2025", title: "1100+ Events & Counting", description: "Continuing to set new standards in event hosting excellence" },
];

const eventCategories = [
  "Weddings & Receptions",
  "Sangeet & Haldi Ceremonies",
  "Corporate Annual Meets",
  "Product Launches",
  "Fashion Shows",
  "College Fests",
  "Cultural Nights",
  "Kids Shows & Birthday Parties",
  "Award Ceremonies",
  "Social Events",
];

export default function About() {
  // Schema for About Page
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Anchor Yash Soni",
      "alternateName": "Yash Soni",
      "identifier": "anchor-yash-jaipur",
      "jobTitle": "Event Anchor",
      "image": "https://yashsoni.in/assets/anchor-portrait.webp",
      "description": "Professional Event Anchor in Jaipur with 1100+ shows hosted. Specializes in weddings, corporate events, and sangeet nights.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://instagram.com/anchor_yash_official",
        "https://youtube.com/@Anchor_Yash"
      ]
    }
  };

  return (
    <Layout>
      {/* Smart SEO Component */}
      <SEO 
        title="About Anchor Yash Soni | 4+ Years Experience & 1100+ Events"
        description="Meet Anchor Yash Soni, Jaipur's leading event host. From humble beginnings to hosting 1100+ events for celebrities and big brands. Read his story."
        keywords="Anchor Yash biography, event anchor profile, best emcee jaipur profile, anchor yash experience"
        canonical="/about"
      />
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      {/* Hero Section */}
      <section className="pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <ScrollReveal direction="left">
              <div className="relative aspect-[3/4] max-w-sm sm:max-w-md mx-auto">
                <img
                  src={portraitImage}
                  alt="Anchor Yash - Professional Event Host"
                  className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                />
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl ring-1 ring-inset ring-primary/20" />
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-card border border-border p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-lg"
                >
                  <p className="text-2xl sm:text-3xl font-display font-bold text-gradient-gold">1100+</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Events Hosted</p>
                </motion.div>
              </div>
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal direction="right">
              <span className="text-primary text-xs sm:text-sm font-medium uppercase tracking-wider">
                About Me
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-3 sm:mt-4 mb-4 sm:mb-6">
                Meet <span className="text-gradient-gold">Anchor Yash</span>
              </h1>
              
              <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                <p>
                  Hello! I'm <strong className="text-foreground">Anchor Yash</strong>, a professional event anchor based in the beautiful Pink City, Jaipur, Rajasthan. With over 05 years of experience and 1100+ successful events under my belt, I've had the privilege of hosting everything from intimate family gatherings to grand corporate celebrations.
                </p>
                <p>
                  My journey in the world of anchoring began with a simple passion — connecting with people and creating memorable experiences. Today, that passion drives me to bring unmatched energy, professionalism, and warmth to every event I host.
                </p>
                <p>
                  Whether it's the emotional moments of a wedding ceremony, the high-energy atmosphere of a corporate event, or the glamour of a fashion show, I adapt my style to match the vibe while keeping the audience engaged throughout.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-6 sm:mt-8">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  <span>Jaipur, Rajasthan</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  <span>05+ Years Experience</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8">
                <a
                  href="https://instagram.com/anchor_yash_official"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="gold" className="btn-hover text-sm sm:text-base">
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                    Follow on Instagram
                  </Button>
                </a>
                <Link to="/contact">
                  <Button variant="outline" className="text-sm sm:text-base">
                    Book Me Now
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-12">
              <span className="text-primary text-xs sm:text-sm font-medium uppercase tracking-wider">
                Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-3 sm:mt-4">
                Events I <span className="text-gradient-gold">Specialize</span> In
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {eventCategories.map((category) => (
              <StaggerItem key={category}>
                <motion.div
                  className="px-4 py-2 sm:px-6 sm:py-3 bg-background border border-border rounded-full text-xs sm:text-sm font-medium hover:border-primary hover:text-primary transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {category}
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-16">
              <span className="text-primary text-xs sm:text-sm font-medium uppercase tracking-wider">
                My Journey
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-3 sm:mt-4">
                The Path to <span className="text-gradient-gold">Excellence</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            {achievements.map((item, index) => (
              <ScrollReveal key={item.year} delay={index * 0.1} direction={index % 2 === 0 ? "left" : "right"}>
                <div className="relative pl-6 sm:pl-8 pb-8 sm:pb-12 last:pb-0 border-l-2 border-border">
                  <motion.div 
                    className="absolute -left-2.5 sm:-left-3 top-0 w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.2 }}
                  >
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-primary-foreground rounded-full" />
                  </motion.div>
                  <span className="text-primary font-semibold text-sm sm:text-base">{item.year}</span>
                  <h3 className="text-lg sm:text-xl font-display font-semibold mt-1 mb-1 sm:mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-12">
              <span className="text-primary text-xs sm:text-sm font-medium uppercase tracking-wider">
                Backstage
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-3 sm:mt-4">
                Behind The <span className="text-gradient-gold">Scenes</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <StaggerItem>
              <motion.div
                className="relative aspect-video overflow-hidden rounded-xl sm:rounded-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={weddingImage}
                  alt="Wedding Event"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <p className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 font-display text-base sm:text-lg">Wedding Ceremony</p>
              </motion.div>
            </StaggerItem>
            <StaggerItem>
              <motion.div
                className="relative aspect-video overflow-hidden rounded-xl sm:rounded-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={corporateImage}
                  alt="Corporate Event"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <p className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 font-display text-base sm:text-lg">Corporate Event</p>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>

          <ScrollReveal delay={0.2}>
            <div className="text-center mt-8 sm:mt-10">
              <Link to="/portfolio">
                <Button variant="gold" className="btn-hover">
                  View Full Portfolio
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 sm:mb-6">
              Let's Create <span className="text-gradient-gold">Magic</span> Together
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 px-4">
              Ready to make your event unforgettable? Get in touch and let's discuss how I can add energy and elegance to your special occasion.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="btn-hover">
                Book Anchor Yash
                <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
