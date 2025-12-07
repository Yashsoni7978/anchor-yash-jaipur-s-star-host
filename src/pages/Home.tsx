import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, Instagram, Star, Users, Award, Mic, ChevronRight, Quote, Calendar, Palette, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import heroImage from "@/assets/hero-anchor.jpg";
import weddingImage from "@/assets/wedding-event.jpg";
import corporateImage from "@/assets/corporate-event.jpg";
import fashionImage from "@/assets/fashion-show.jpg";
import sangeetImage from "@/assets/sangeet-event.jpg";

const stats = [
  { number: "1100+", label: "Events Hosted", icon: Mic },
  { number: "05+", label: "Years Experience", icon: Award },
  { number: "500+", label: "Happy Clients", icon: Users },
  { number: "70+", label: "Corporate Clients", icon: Star },
];

const trustBadges = [
  "India Kids Fashion Week",
  "Corporate R&R Events",
  "Big Fat Indian Weddings",
  "Destination Weddings",
  "Award Ceremonies",
  "Fashion Shows",
];

const anchoringServices = [
  {
    title: "Wedding Anchor",
    description: "Professional hosting for your special day with seamless ceremony management",
    image: weddingImage,
    link: "/anchoring",
  },
  {
    title: "Corporate Anchor",
    description: "Polished and engaging hosting for business events and conferences",
    image: corporateImage,
    link: "/anchoring",
  },
  {
    title: "Fashion Show Host",
    description: "Bringing glamour and energy to runway events and fashion weeks",
    image: fashionImage,
    link: "/anchoring",
  },
];

const eventManagementServices = [
  {
    icon: Calendar,
    title: "Event Planning",
    description: "End-to-end event planning from concept to flawless execution",
    link: "/event-management",
  },
  {
    icon: Palette,
    title: "Event Designing",
    description: "Stunning decor, themes, and visual experiences for memorable events",
    link: "/event-designing",
  },
  {
    icon: PartyPopper,
    title: "Wedding Planning",
    description: "Complete wedding management including choreography and entertainment",
    link: "/event-designing",
  },
];

const testimonials = [
  {
    name: "Priya & Rahul Sharma",
    event: "Wedding Reception",
    text: "Anchor Yash made our wedding reception absolutely magical! His energy was infectious and he kept all our guests engaged throughout the night. Highly recommend!",
    rating: 5,
  },
  {
    name: "Rajesh Agarwal",
    event: "Corporate Annual Meet",
    text: "Professional, punctual, and incredibly talented. Yash handled our 500+ employee event flawlessly. The best anchor we've ever worked with.",
    rating: 5,
  },
  {
    name: "Sunita Mehra",
    event: "Full Wedding Management",
    text: "From planning to execution, the team delivered beyond our expectations. Every detail was perfect, and Yash's anchoring added that extra magic to our celebrations.",
    rating: 5,
  },
];

const whyChooseUs = [
  {
    title: "Unmatched Energy",
    description: "Bringing electric energy to every event that keeps your guests engaged and entertained",
  },
  {
    title: "End-to-End Solutions",
    description: "From anchoring to complete event management - we handle everything under one roof",
  },
  {
    title: "Bilingual Fluency",
    description: "Fluent in both Hindi and English for seamless multilingual events",
  },
  {
    title: "05+ Years Experience",
    description: "Seasoned professional with expertise across diverse event types",
  },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Anchor Yash - Premium Event Host and Event Management in Jaipur"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>

        {/* Hero Content */}
        <div className="relative container-custom pt-32 pb-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-6">
                Jaipur’s Leading Event Anchor
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6"
            >
              <span className="text-foreground">Anchor</span>{" "}
              <span className="text-gradient-gold">Yash</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground mb-4"
            >
              Premium Wedding & Corporate Event Anchor
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-primary font-medium mb-8"
            >
              1100+ Events • Weddings • Corporate • Sports • Fashion Shows • Event Planning & Designing
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Book Now
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </Link>
              
              <Link to="/portfolio">
                <Button variant="heroOutline" size="xl">
                  <Play className="w-5 h-5" />
                  View Portfolio
                </Button>
              </Link>

              <a
                href="https://instagram.com/anchor_yash_official"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="heroOutline" size="xl">
                  <Instagram className="w-5 h-5" />
                  Instagram
                </Button>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-primary rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-4xl md:text-5xl font-display font-bold text-gradient-gold mb-2">
                  {stat.number}
                </h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Anchoring Services Section */}
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
              Anchoring Services
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
              Professional Event <span className="text-gradient-gold">Hosting</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From weddings to corporate events, experience high-energy hosting that captivates your audience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {anchoringServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <Link to={service.link}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-display font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/anchoring">
              <Button variant="gold" size="lg">
                View All Anchoring Services
                <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Event Management Section */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Event Management
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
              Complete Event <span className="text-gradient-gold">Solutions</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Beyond anchoring - we plan, design, and execute unforgettable events from start to finish
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {eventManagementServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={service.link}
                  className="group block p-8 bg-background border border-border rounded-2xl hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_hsl(43_74%_49%_/_0.1)] h-full"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12 flex flex-wrap justify-center gap-4"
          >
            <Link to="/event-management">
              <Button variant="goldOutline" size="lg">
                Event Management
                <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/event-designing">
              <Button variant="gold" size="lg">
                Event Designing & Wedding Planning
                <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Me Section */}
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
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
              What Sets Us <span className="text-gradient-gold">Apart</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              With over 1100 events and 05 years of experience, we bring unmatched energy and professionalism to every project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_hsl(43_74%_49%_/_0.1)]"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-card border-y border-border overflow-hidden">
        <div className="container-custom">
          <p className="text-center text-muted-foreground mb-8">Trusted by leading brands and events</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-6 py-3 bg-muted rounded-full border border-border text-sm font-medium text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all duration-300"
              >
                {badge}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
              What Our <span className="text-gradient-gold">Clients</span> Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-card border border-border rounded-2xl hover:border-primary/30 transition-all duration-500"
              >
                <Quote className="w-10 h-10 text-primary/30 mb-6" />
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card border-t border-border">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-background to-primary/10 border border-primary/20 p-12 md:p-20 text-center"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Ready to Create Something{" "}
                <span className="text-gradient-gold">Extraordinary?</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
                Whether you need a professional anchor or complete event management, let's bring your vision to life.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="xl">
                    Get Started
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </Link>
                <a href="https://wa.me/917737877978" target="_blank" rel="noopener noreferrer">
                  <Button variant="whatsapp" size="xl">
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
