import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Instagram, Award, Users, Mic, Calendar, MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import portraitImage from "@/assets/anchor-portrait.jpg";
import weddingImage from "@/assets/wedding-event.jpg";
import corporateImage from "@/assets/corporate-event.jpg";

const achievements = [
  { year: "2019", title: "Started Professional Anchoring", description: "Began journey as a professional event anchor in Jaipur" },
  { year: "2020", title: "100+ Events Milestone", description: "Crossed 100 successful events across Rajasthan" },
  { year: "2021", title: "India Kids Fashion Week", description: "Official anchor for prestigious national kids fashion event" },
  { year: "2022", title: "500+ Events Completed", description: "Established as one of the most sought-after anchors in the region" },
  { year: "2023", title: "Corporate Giants Partnership", description: "Started hosting events for Fortune 500 companies" },
  { year: "2024", title: "1100+ Events & Counting", description: "Continuing to set new standards in event hosting excellence" },
];

const eventCategories = [
  "Weddings & Receptions",
  "Sangeet & Mehendi Ceremonies",
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
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[3/4] max-w-md mx-auto">
                <img
                  src={portraitImage}
                  alt="Anchor Yash - Professional Event Host"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary/20" />
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -bottom-6 -right-6 bg-card border border-border p-4 rounded-xl shadow-lg"
                >
                  <p className="text-3xl font-display font-bold text-gradient-gold">1100+</p>
                  <p className="text-sm text-muted-foreground">Events Hosted</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary text-sm font-medium uppercase tracking-wider">
                About Me
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
                Meet <span className="text-gradient-gold">Anchor Yash</span>
              </h1>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hello! I'm <strong className="text-foreground">Anchor Yash</strong>, a professional event anchor based in the beautiful Pink City, Jaipur, Rajasthan. With over 5 years of experience and 1100+ successful events under my belt, I've had the privilege of hosting everything from intimate family gatherings to grand corporate celebrations.
                </p>
                <p>
                  My journey in the world of anchoring began with a simple passion — connecting with people and creating memorable experiences. Today, that passion drives me to bring unmatched energy, professionalism, and warmth to every event I host.
                </p>
                <p>
                  Whether it's the emotional moments of a wedding ceremony, the high-energy atmosphere of a corporate event, or the glamour of a fashion show, I adapt my style to match the vibe while keeping the audience engaged throughout.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Jaipur, Rajasthan</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>5+ Years Experience</span>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <a
                  href="https://instagram.com/anchor_yash_official
"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="gold">
                    <Instagram className="w-5 h-5" />
                    Follow on Instagram
                  </Button>
                </a>
                <Link to="/contact">
                  <Button variant="outline">
                    Book Me Now
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
              Events I <span className="text-gradient-gold">Specialize</span> In
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {eventCategories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-6 py-3 bg-background border border-border rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-all duration-300"
              >
                {category}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              My Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
              The Path to <span className="text-gradient-gold">Excellence</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {achievements.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 pb-12 last:pb-0 border-l-2 border-border"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary-foreground rounded-full" />
                </div>
                <span className="text-primary font-semibold">{item.year}</span>
                <h3 className="text-xl font-display font-semibold mt-1 mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Backstage
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
              Behind The <span className="text-gradient-gold">Scenes</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative aspect-video overflow-hidden rounded-2xl"
            >
              <img
                src={weddingImage}
                alt="Wedding Event"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <p className="absolute bottom-4 left-4 font-display text-lg">Wedding Ceremony</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-video overflow-hidden rounded-2xl"
            >
              <img
                src={corporateImage}
                alt="Corporate Event"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <p className="absolute bottom-4 left-4 font-display text-lg">Corporate Event</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link to="/gallery">
              <Button variant="gold">
                View Full Gallery
                <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Let's Create <span className="text-gradient-gold">Magic</span> Together
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
              Ready to make your event unforgettable? Get in touch and let's discuss how I can add energy and elegance to your special occasion.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Book Anchor Yash
                <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
