import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, Instagram, Star, Users, Award, Mic, ChevronRight, Quote, Calendar, Palette, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import { SEO } from "@/components/SEO";
import { FAQSection } from "@/components/FAQSection"; // Import the Aesthetic FAQ Component

// --- Asset Imports ---
import heroImage from "@/assets/hero-anchor.webp";
import weddingImage from "@/assets/wedding-event.jpg";
import corporateImage from "@/assets/corporate-event.jpg";
import fashionImage from "@/assets/fashion-show.jpg";
import sangeetImage from "@/assets/sangeet-event.jpg";

// --- DATA: 12 SEO-RICH FAQs ---
const homeFAQs = [
  {
    question: "Who is the Best Anchor in Jaipur for events?",
    answer: "Anchor Yash Soni is widely rated as the Best Anchor in Jaipur and a top-tier Male Anchor in Rajasthan. With over 5+ years of experience and 1100+ successful events, he is known for his high energy, wit, and professional stage presence."
  },
  {
    question: "What types of events do you specialize in?",
    answer: "I specialize in a complete range of events: Grand Indian Weddings (Sangeet, Haldi, Varmala), Corporate Events (Awards, Summits), Mall Activations, Celebrity Shows, and Government Events."
  },
  {
    question: "Do you travel for Destination Weddings outside Jaipur?",
    answer: "Yes, I am a specialist Destination Wedding Anchor. I frequently travel to Udaipur, Jodhpur, Jaisalmer, Pushkar, Goa, and other major Indian cities. Travel and stay are arranged by the client."
  },
  {
    question: "Which languages are you fluent in?",
    answer: "I am a multilingual anchor fluent in Hindi, English, and Marwari (Rajasthani). I can also engage audiences in Gujarati, Bhojpuri, and Bengali, making me perfect for cross-cultural weddings."
  },
  {
    question: "Do you also provide Event Management services?",
    answer: "Yes! Beyond anchoring, I offer full Event Management Services in Jaipur including venue planning, artist management, decor, and entertainment solutions."
  },
  {
    question: "Can you provide a Female Anchor or Co-Host?",
    answer: "Absolutely. If your event requires a Male-Female Anchor duo for better chemistry, I can team up with the best female anchors in Jaipur and Rajasthan."
  },
  {
    question: "How far in advance should we book you?",
    answer: "To ensure availability, especially during the wedding season (Nov-Feb), it is best to book 2-3 months in advance. However, you can always check for last-minute dates."
  },
  {
    question: "What are your charges for an event?",
    answer: "My charges depend on the event scope, duration, and location. I offer customized packages for 1-day or 3-day wedding events. Contact me on WhatsApp for a quick quote."
  },
  {
    question: "Do you bring your own team?",
    answer: "Yes, I work with a professional team including DJ coordination, scriptwriters, and event managers to ensure your show runs seamlessly."
  },
  {
    question: "Why should we hire Anchor Yash over others?",
    answer: "My USP is 'Connection.' I don't just speak; I connect with every guest from age 6 to 60. Plus, I don't rely on scripts—I improvise to keep the energy fresh and spontaneous."
  },
  {
    question: "How do I confirm a booking with you?",
    answer: "Booking is simple. Call +91-7737877978 to check availability. Once the date is finalized, a token advance confirms your slot."
  },
  {
    question: "Can we see videos of your past work?",
    answer: "Yes, you can visit the Portfolio page on this website or check my Instagram/YouTube (@Anchor_Yash) to see live performance videos."
  }
];

const stats = [
  { number: "1100+", label: "Events Hosted", icon: Mic },
  { number: "05+", label: "Years Experience", icon: Award },
  { number: "500+", label: "Happy Clients", icon: Users },
  { number: "70+", label: "Corporate Clients", icon: Star },
];

const trustBadges = [
  "Celebrity Weddings",
  "Corporate R&R Events",
  "Big Fat Indian Weddings",
  "Award Ceremonies",
  "Live Productions",
  "Award shows",
  "National-Level Sports Events",
];

const anchoringServices = [
  {
    title: "Wedding Anchor",
    description: "Professional hosting for your special day with seamless ceremony management",
    image: weddingImage,
    link: "/wedding-anchor-jaipur",
  },
  {
    title: "Corporate Anchor",
    description: "Polished and engaging hosting for business events and conferences",
    image: corporateImage,
    link: "/corporate-event-anchor-jaipur",
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
    link: "/event-planning-jaipur",
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
    link: "/event-management-jaipur",
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
    title: "High-Energy Stage Presence",
    description: "Dynamic, engaging hosting that keeps audiences active, entertained, and emotionally connected throughout the event.",
  },
  {
    title: "150+ Celebrity & High-Profile Wedding Events",
    description: "Experienced in hosting luxury weddings with celebrity presence and elite audiences.",
  },
  {
    title: "Bilingual Fluency",
    description: "Fluent in both Hindi and English for seamless multilingual events",
  },
  {
    title: "05+ Years Experience",
    description: "Extensive experience across weddings, corporate shows, award nights, and large-scale live events.",
  },
];

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Anchor Yash Soni",
    "url": "https://yashsoni.in",
    "jobTitle": "Event Anchor & Emcee",
    "worksFor": {
      "@type": "Organization",
      "name": "Yash Soni Events"
    },
    "sameAs": [
      "https://instagram.com/anchor_yash_official",
      "https://youtube.com/@anchoryashsoni"
    ]
  };

  return (
    <Layout>
      <SEO 
        title="Anchor Yash Soni | Best Wedding Anchor in Jaipur & Rajasthan"
        description="Book Anchor Yash Soni for Weddings, Corporate Events & Sangeet in Jaipur. 1100+ shows, celebrity events, and high-energy hosting. Call now!"
        keywords="Anchor Yash Soni, Anchor in Jaipur, Event Host Jaipur, Wedding Anchor Rajasthan, Corporate Emcee"
        canonical="/"
      />
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Anchor Yash - Premium Event Host and Event Management in Jaipur"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>

        <div className="relative container-custom pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                Jaipur's Leading Event Anchor
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-4 sm:mb-6"
            >
              <span className="text-foreground">Anchor</span>{" "}
              <span className="text-gradient-gold">Yash</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-3 sm:mb-4"
            >
              Premium Wedding & Corporate Event Anchor
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-sm sm:text-base md:text-lg text-primary font-medium mb-6 sm:mb-8"
            >
              1100+ Events • Weddings • Corporate • Sports • Fashion Shows • Event Planning & Designing
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-3 sm:gap-4"
            >
              <Link to="/contact">
                <Button variant="hero" size="lg" className="text-sm sm:text-base btn-hover">
                  Book Now
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
              
              <Link to="/portfolio">
                <Button variant="heroOutline" size="lg" className="text-sm sm:text-base">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  View Portfolio
                </Button>
              </Link>

              <a
                href="https://instagram.com/anchor_yash_official"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:block"
              >
                <Button variant="heroOutline" size="lg">
                  <Instagram className="w-5 h-5" />
                  Instagram
                </Button>
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 hidden sm:block"
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
      <section className="py-12 sm:py-16 md:py-20 bg-card border-y border-border">
        <div className="container-custom">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <StaggerItem key={stat.label}>
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-3 sm:mb-4" />
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gradient-gold mb-1 sm:mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm md:text-base">{stat.label}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Anchoring Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-16">
              <span className="text-primary text-xs sm:text-sm font-medium uppercase tracking-wider">
                Anchoring Services
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-3 sm:mt-4 mb-4 sm:mb-6">
                Professional Event <span className="text-gradient-gold">Hosting</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto px-4">
                From weddings to corporate events, experience high-energy hosting that captivates your audience
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {anchoringServices.map((service) => (
              <StaggerItem key={service.title}>
                <motion.div
                  className="group relative overflow-hidden rounded-xl sm:rounded-2xl"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
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
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                      <h3 className="text-xl sm:text-2xl font-display font-bold mb-1 sm:mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm">{service.description}</p>
                    </div>
                  </Link>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-8 sm:mt-12">
              <Link to="/anchoring">
                <Button variant="gold" size="lg" className="btn-hover">
                  View All Anchoring Services
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-16">
              <span className="text-primary text-xs sm:text-sm font-medium uppercase tracking-wider">
                Why Choose Me
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-3 sm:mt-4 mb-4 sm:mb-6">
                What Sets My Hosting Style <span className="text-gradient-gold">Apart</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto px-4">
                With over 1100 events and 05 years of experience, we bring unmatched energy and professionalism to every project
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {whyChooseUs.map((item) => (
              <StaggerItem key={item.title}>
                <motion.div
                  className="group h-full flex flex-col p-5 sm:p-6 bg-card border border-border rounded-xl card-hover"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                    <Star className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm flex-grow">{item.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 sm:py-16 bg-card border-y border-border overflow-hidden">
        <div className="container-custom">
          <ScrollReveal>
            <p className="text-center text-muted-foreground text-sm mb-6 sm:mb-8">Trusted by leading brands and events</p>
          </ScrollReveal>
          <StaggerContainer className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-8">
            {trustBadges.map((badge) => (
              <StaggerItem key={badge}>
                <motion.div
                  className="px-4 py-2 sm:px-6 sm:py-3 bg-muted rounded-full border border-border text-xs sm:text-sm font-medium text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {badge}
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-16">
              <span className="text-primary text-xs sm:text-sm font-medium uppercase tracking-wider">
                Testimonials
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-3 sm:mt-4 mb-4 sm:mb-6">
                What Our <span className="text-gradient-gold">Clients</span> Say
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial) => (
              <StaggerItem key={testimonial.name}>
                <motion.div
                  className="h-full flex flex-col p-6 sm:p-8 bg-card border border-border rounded-xl sm:rounded-2xl card-hover"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-primary/30 mb-4 sm:mb-6" />
                  <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed flex-grow">
                    "{testimonial.text}"
                  </p>
                  <div className="mt-auto">
                    <div className="flex items-center gap-1 mb-3 sm:mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <div>
                      <p className="font-semibold text-sm sm:text-base">{testimonial.name}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.event}</p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Event Management Section */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-16">
              <span className="text-primary text-xs sm:text-sm font-medium uppercase tracking-wider">
                Event Management
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-3 sm:mt-4 mb-4 sm:mb-6">
                Complete Event <span className="text-gradient-gold">Solutions</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto px-4">
                Beyond anchoring - we plan, design, and execute unforgettable events from start to finish
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {eventManagementServices.map((service) => (
              <StaggerItem key={service.title}>
                <Link to={service.link} className="h-full block">
                  <motion.div
                    className="group h-full flex flex-col p-6 sm:p-8 bg-background border border-border rounded-xl sm:rounded-2xl card-hover"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-display font-semibold mb-2 sm:mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm flex-grow">{service.description}</p>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-8 sm:mt-12">
              <Link to="/event-designing">
                <Button variant="goldOutline" size="lg" className="btn-hover">
                  Explore Event Services
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- FAQ SECTION ADDED HERE --- */}
      <FAQSection data={homeFAQs} title="Frequently Asked Questions" />

      {/* Final CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <ScrollReveal>
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 sm:mb-6">
                Ready to Make Your Event <span className="text-gradient-gold">Unforgettable?</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 px-4">
                Whether you need professional anchoring or complete event management, we're here to bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="hero" size="xl" className="w-full sm:w-auto btn-hover">
                    Book Anchor Yash
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                    <Play className="w-5 h-5" />
                    View My Work
                  </Button>
                </Link>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
