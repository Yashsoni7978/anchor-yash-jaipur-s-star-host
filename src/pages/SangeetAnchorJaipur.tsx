import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ChevronRight, MessageCircle, Music, Heart, Sparkles, Users, Phone, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

const sangeetServices = [
  {
    icon: Music,
    title: "Sangeet Night Hosting",
    description: "High-energy hosting that keeps the dance floor alive and guests entertained throughout the celebration",
  },
  {
    icon: Heart,
    title: "Couple Introduction",
    description: "Heartfelt storytelling and fun couple games that make the bride and groom the stars of the evening",
  },
  {
    icon: Users,
    title: "Performance Coordination",
    description: "Seamless anchoring between family performances, ensuring smooth transitions and audience engagement",
  },
  {
    icon: Sparkles,
    title: "Interactive Entertainment",
    description: "Games, audience participation segments, and spontaneous fun that creates memorable moments",
  },
];

const eventTypes = [
  {
    title: "Traditional Sangeet",
    description: "Classic sangeet ceremonies with traditional music, family performances, and cultural rituals anchored with grace and energy.",
  },
  {
    title: "Bollywood Theme Night",
    description: "High-energy Bollywood-themed sangeet with dance performances, movie dialogues, and filmi fun throughout the evening.",
  },
  {
    title: "Fusion Sangeet",
    description: "Modern sangeet blending traditional elements with contemporary entertainment, DJ nights, and creative performances.",
  },
  {
    title: "Intimate Sangeet",
    description: "Smaller, heartfelt gatherings focused on meaningful moments, storytelling, and close family bonding.",
  },
];

const cities = [
  "Jaipur", "Udaipur", "Jodhpur", "Jaisalmer", "Pushkar", 
  "Ajmer", "Bikaner", "Mount Abu", "Neemrana", "Alwar"
];

const faqs = [
  {
    question: "What makes a sangeet anchor different from a wedding anchor?",
    answer: "A sangeet anchor specializes in creating a fun, high-energy atmosphere focused on dance, music, and entertainment. Unlike formal wedding ceremonies, sangeet requires an anchor who can keep the energy high, coordinate multiple performances, engage diverse age groups, and handle spontaneous moments with humor and grace.",
  },
  {
    question: "How do you handle family performances during sangeet?",
    answer: "I coordinate with families before the event to understand the performance lineup, timing, and any special requirements. During the sangeet, I introduce each performance with context and enthusiasm, manage transitions smoothly, and ensure performers feel comfortable and celebrated on stage.",
  },
  {
    question: "Can you anchor sangeet in both Hindi and English?",
    answer: "Yes, I'm fluent in both Hindi and English and can seamlessly switch between languages based on your guest demographics. Many Jaipur sangeets have mixed audiences, and bilingual anchoring ensures everyone stays engaged and entertained.",
  },
  {
    question: "Do you include games and activities in sangeet anchoring?",
    answer: "Absolutely. Interactive games, couple challenges, family face-offs, and audience participation segments are integral to a memorable sangeet. I curate activities based on your preferences and guest demographics to ensure maximum participation and fun.",
  },
  {
    question: "How early should I book a sangeet anchor in Jaipur?",
    answer: "For peak wedding season (October to February), I recommend booking 3-6 months in advance. Popular dates get booked quickly, and early booking ensures proper coordination with your choreographer and event planner for a seamless sangeet experience.",
  },
];

export default function SangeetAnchorJaipur() {
  return (
    <Layout>
      <Helmet>
        <title>Sangeet Anchor in Jaipur | Best Sangeet Host for Weddings | Anchor Yash</title>
        <meta
          name="description"
          content="Looking for the best sangeet anchor in Jaipur? Anchor Yash brings energy, fun, and seamless coordination to your sangeet night. 700+ events hosted across Rajasthan."
        />
        <meta
          name="keywords"
          content="sangeet anchor jaipur, sangeet host jaipur, wedding sangeet anchor, best sangeet anchor rajasthan, sangeet night host, mehndi sangeet anchor"
        />
        <link rel="canonical" href="https://anchoryash.com/sangeet-anchor-jaipur" />
        <meta property="og:title" content="Sangeet Anchor in Jaipur | Anchor Yash" />
        <meta
          property="og:description"
          content="Professional sangeet anchoring for weddings in Jaipur. High-energy hosting, seamless performance coordination, and memorable entertainment."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://anchoryash.com/sangeet-anchor-jaipur" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Sangeet Anchor in Jaipur",
            provider: {
              "@type": "Person",
              name: "Anchor Yash",
              areaServed: "Jaipur, Rajasthan",
            },
            serviceType: "Sangeet Anchoring",
            description: "Professional sangeet anchoring services for weddings in Jaipur and Rajasthan. High-energy entertainment, performance coordination, and memorable celebrations.",
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-6">
              Sangeet Anchor in Jaipur
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Sangeet Anchor in <span className="text-gradient-gold">Jaipur</span>
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 px-4">
              Make your sangeet night unforgettable with high-energy hosting that keeps the celebrations alive from the first beat to the last dance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="btn-hover">
                  Book for Your Sangeet
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="https://wa.me/919784713889" target="_blank" rel="noopener noreferrer">
                <Button variant="heroOutline" size="lg">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-6 text-center">
                The Heart of Every <span className="text-gradient-gold">Sangeet Celebration</span>
              </h2>
              <div className="prose prose-invert max-w-none text-muted-foreground text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  A sangeet is more than just a pre-wedding function—it's where families come together, friendships are celebrated, and the bride and groom are showered with love through music and dance. In Jaipur's rich wedding culture, the sangeet holds special significance, often becoming the most memorable night of the wedding festivities.
                </p>
                <p>
                  As a sangeet anchor in Jaipur, I bring the perfect blend of energy, warmth, and entertainment coordination that transforms your sangeet from a series of performances into a cohesive celebration. With experience hosting over 700 events, including countless sangeet nights at palace venues, luxury hotels, and heritage properties across Rajasthan, I understand what makes these evenings truly special.
                </p>
                <p>
                  Whether you're planning an intimate mehndi-sangeet at home or a grand celebration at a five-star venue, the right anchor makes all the difference in keeping guests engaged, performances flowing smoothly, and the couple feeling celebrated throughout the night.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What I Bring */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <span className="text-primary text-xs sm:text-sm font-medium uppercase tracking-wider">
                Sangeet Services
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-4 mb-4">
                What I Bring to Your <span className="text-gradient-gold">Sangeet</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sangeetServices.map((service) => (
              <StaggerItem key={service.title}>
                <motion.div
                  className="h-full flex flex-col p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm flex-grow">{service.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Event Types */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <span className="text-primary text-xs sm:text-sm font-medium uppercase tracking-wider">
                Event Types
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-4 mb-4">
                Sangeet Styles I <span className="text-gradient-gold">Anchor</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {eventTypes.map((event) => (
              <StaggerItem key={event.title}>
                <motion.div
                  className="h-full flex flex-col p-6 bg-background border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg font-display font-semibold mb-3 flex items-center gap-2">
                    <Music className="w-5 h-5 text-primary" />
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm flex-grow">{event.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <span className="text-primary text-xs sm:text-sm font-medium uppercase tracking-wider">
                Experience
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-4 mb-4">
                Why Families Choose <span className="text-gradient-gold">Anchor Yash</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Star, number: "700+", label: "Events Hosted" },
              { icon: Heart, number: "300+", label: "Sangeet Nights" },
              { icon: Users, number: "5+", label: "Years Experience" },
              { icon: MapPin, number: "50+", label: "Venues Covered" },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <motion.div
                  className="text-center p-6 bg-card border border-border rounded-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <div className="text-3xl sm:text-4xl font-display font-bold text-gradient-gold mb-2">
                    {stat.number}
                  </div>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Cities Served */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-12">
              <span className="text-primary text-xs sm:text-sm font-medium uppercase tracking-wider">
                Coverage
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-4 mb-4">
                Sangeet Anchoring Across <span className="text-gradient-gold">Rajasthan</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-3xl mx-auto">
            {cities.map((city) => (
              <StaggerItem key={city}>
                <motion.div
                  className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium hover:border-primary/50 hover:text-primary transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {city}
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <span className="text-primary text-xs sm:text-sm font-medium uppercase tracking-wider">
                FAQs
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-4">
                Frequently Asked <span className="text-gradient-gold">Questions</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-base sm:text-lg font-display font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-6">
                Ready to Make Your Sangeet <span className="text-gradient-gold">Unforgettable?</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-2xl mx-auto">
                Let's create a sangeet night that your family will talk about for years. Book a consultation to discuss your vision.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="lg" className="btn-hover">
                    Book Your Sangeet Anchor
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </Link>
                <a href="tel:+919784713889" className="block">
                  <Button variant="heroOutline" size="lg">
                    <Phone className="w-5 h-5" />
                    Call Now
                  </Button>
                </a>
              </div>
              <p className="text-muted-foreground text-sm mt-8">
                Also explore our <Link to="/wedding-anchor-jaipur" className="text-primary hover:underline">wedding anchoring</Link> and <Link to="/anchoring" className="text-primary hover:underline">other anchoring services</Link>.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
