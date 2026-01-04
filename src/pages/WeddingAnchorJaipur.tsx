import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ChevronRight, 
  MessageCircle, 
  Heart,      // Changed from Briefcase
  Music,      // Added for Sangeet
  Users, 
  Sparkles,   // Added for Varmala
  Phone, 
  Star, 
  MapPin, 
  Mic,
  CalendarHeart // Added for Wedding dates
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import { SEO } from "@/components/SEO";
import { FAQSection } from "@/components/FAQSection";

// --- WEDDING SERVICES DATA ---
const weddingServices = [
  {
    icon: Music,
    title: "Sangeet Ceremony",
    description: "High-energy anchoring for Sangeet nights, dance battles, and family performances that keeps the crowd on their feet.",
  },
  {
    icon: Sparkles,
    title: "Varmala Themes",
    description: "Royal and poetic hosting for the Jaimala ceremony, ensuring the most photographed moment is magical.",
  },
  {
    icon: Users,
    title: "Haldi & Mehandi",
    description: "Interactive fun, couple games, and ice-breakers to engage guests during daytime pre-wedding rituals.",
  },
  {
    icon: Star,
    title: "Reception & Ring Ceremony",
    description: "Elegant and sophisticated hosting for formal receptions, cake cutting, and ring exchange ceremonies.",
  },
];

// --- WEDDING EVENT TYPES ---
const weddingEventTypes = [
  {
    title: "Destination Weddings",
    description: "Specialized in hosting 2-3 day destination weddings in Udaipur, Jodhpur, Jaisalmer, and Pushkar.",
  },
  {
    title: "Sangeet Nights",
    description: "The highlight of Indian weddings—I manage the flow of performances, DJ interactions, and open dance floors.",
  },
  {
    title: "Haldi Carnivals",
    description: "Turning traditional Haldi into a fun carnival with props, rapid-fire rounds, and family interaction.",
  },
  {
    title: "Varmala Concepts",
    description: "Executing themed Varmala entries (Ganga Aarti, Vintage, Flower Shower) with perfect voice-over coordination.",
  },
  {
    title: "Pool Parties",
    description: "Casual, high-vibe anchoring for welcome lunches and pool parties to break the ice between the two families.",
  },
  {
    title: "After Parties",
    description: "Keeping the energy alive post-midnight for the youngsters with engaging games and DJ hype.",
  },
];

// --- WEDDING VENUES/STYLES ---
const weddingStyles = [
  "Royal Palaces", "Beach Weddings", "Heritage Resorts", "Luxury Hotels", "Open Lawns",
  "Banquet Halls", "Poolside Venues", "Fort Weddings", "Intimate Gatherings", "Grand Galas"
];

// --- 12 WEDDING SEO FAQs ---
const weddingFAQs = [
  {
    question: "Do you travel for destination weddings outside Jaipur?",
    answer: "Absolutely! I frequently host destination weddings in Udaipur, Jodhpur, Jaisalmer, Pushkar, and across India. Travel and stay are arranged by the client."
  },
  {
    question: "What is your anchoring style: Funny or Formal?",
    answer: "I blend both! I am energetic and witty for Sangeet/Haldi to get people laughing, but graceful and poetic (Shayari) for Varmala and Pheras."
  },
  {
    question: "How do you handle a crowd that isn't dancing?",
    answer: "That’s my specialty. I use proven ice-breaker games, 'Ladkewale vs Ladkiwale' banter, and interactive couples activities to naturally build momentum."
  },
  {
    question: "Do you provide scripts for family performances?",
    answer: "Yes, I help frame the script for family performances and can provide voice-overs to make the Sangeet flow like a Bollywood awards show."
  },
  {
    question: "What languages do you anchor in?",
    answer: "I am fluent in Hindi and English. I switch seamlessly between the two to ensure both the elders and the younger generation feel connected."
  },
  {
    question: "How many weddings have you hosted?",
    answer: "I have hosted over 1100+ events, with a major focus on weddings, Sangeets, and corporate shows over the last 5+ years."
  },
  {
    question: "Do you work with the DJ and Event Planner?",
    answer: "Yes, I coordinate directly with the DJ for music cues (fanfares, entry songs) and the planner to ensure the event timeline is followed strictly."
  },
  {
    question: "What do you wear for weddings?",
    answer: "I dress to impress! I wear premium Indo-Westerns, Jodhpuri Suits, or Tuxedos depending on the theme of your event (Haldi vs. Reception)."
  },
  {
    question: "Can you host the Varmala with poetry/Shayari?",
    answer: "Yes, I have a collection of royal Shayari and verses specifically for the Jaimala moment to make it emotional and grand."
  },
  {
    question: "How long do you stay at the event?",
    answer: "I am there from the start of the guest arrival until the end of the planned itinerary/party. I don't rush; I ensure the event finishes on a high note."
  },
  {
    question: "Do you conduct games for the Bride and Groom?",
    answer: "Yes! Shoe Game, Compatibility Test, Ring Hunt—I have a list of trending wedding games to make the couple the center of attention."
  },
  {
    question: "How do we book you?",
    answer: "You can contact me via WhatsApp or call directly to check availability for your wedding dates. It is best to book 2-3 months in advance."
  }
];

export default function WeddingAnchorJaipur() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Wedding Anchor in Jaipur",
    "provider": {
      "@type": "Person",
      "name": "Anchor Yash Soni",
      "url": "https://yashsoni.in",
      "telephone": "+917737877978",
      "areaServed": "Jaipur, Rajasthan, Udaipur, Jodhpur",
    },
    "serviceType": "Wedding Emcee & Host",
    "description": "Premium wedding anchor in Jaipur for Sangeet, Varmala, and Destination Weddings. 1100+ events hosted.",
  };

  return (
    <Layout>
      <SEO 
        title="Wedding Anchor in Jaipur | Sangeet & Destination Wedding Emcee | Anchor Yash"
        description="Best Wedding Anchor in Jaipur for Sangeet, Haldi, and Varmala. Anchor Yash brings energy, games, and emotions to your destination wedding in Rajasthan."
        keywords="wedding anchor jaipur, sangeet anchor jaipur, wedding emcee rajasthan, destination wedding host, varmala anchor, haldi games host"
        canonical="/wedding-anchor-jaipur"
      />
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

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
              Premium Wedding Emcee
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              More Than Just a Mic – I Bring the <span className="text-gradient-gold">Life</span> to Your Wedding
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 px-4">
              Jaipur’s Premier Anchor for High-Energy Sangeets, Emotional Varmalas, and Unforgettable Haldi Ceremonies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="btn-hover">
                  Check Availability
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="https://wa.me/917737877978?text=Hi%20Anchor%20Yash,%20I%20am%20looking%20for%20an%20anchor%20for%20my%20wedding." target="_blank" rel="noopener noreferrer">
                <Button variant="heroOutline" size="lg">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Me
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
                Making Every Moment <span className="text-gradient-gold">Unforgettable</span>
              </h2>
              <div className="prose prose-invert max-w-none text-muted-foreground text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  A wedding isn't just about rituals; it's about the laughter during the Haldi, the competitive spirit during the Sangeet dance battles, and the teary-eyed silence during the Varmala. As a Wedding Anchor, my job isn't just to speak—it's to connect hearts.
                </p>
                <p>
                  With over <strong>5+ years of experience</strong> in Jaipur and Rajasthan's destination wedding circuit, I know exactly how to read a room. Whether it's engaging the elders with respectful humor or getting the shy cousins on the dance floor, I ensure your guests are not just watching the wedding—they are <em>living</em> it.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Wedding Services */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <span className="text-primary text-xs sm:text-sm font-medium uppercase tracking-wider">
                Ceremonies
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-4 mb-4">
                Events I <span className="text-gradient-gold">Host</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {weddingServices.map((service) => (
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

      {/* Event Types Details */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <span className="text-primary text-xs sm:text-sm font-medium uppercase tracking-wider">
                Expertise
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-4 mb-4">
                Wedding <span className="text-gradient-gold">Highlights</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {weddingEventTypes.map((event) => (
              <StaggerItem key={event.title}>
                <motion.div
                  className="h-full flex flex-col p-6 bg-background border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg font-display font-semibold mb-3 flex items-center gap-2">
                    <Mic className="w-5 h-5 text-primary" />
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm flex-grow">{event.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Experience Stats */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <span className="text-primary text-xs sm:text-sm font-medium uppercase tracking-wider">
                Experience
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-4 mb-4">
                Why Families <span className="text-gradient-gold">Trust Me</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: CalendarHeart, number: "1100+", label: "Events Hosted" },
              { icon: Star, number: "5+", label: "Years Experience" },
              { icon: Users, number: "100k+", label: "Happy Guests" },
              { icon: MapPin, number: "15+", label: "Cities Covered" },
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

      {/* Venues/Styles */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-12">
              <span className="text-primary text-xs sm:text-sm font-medium uppercase tracking-wider">
                Venues
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-4 mb-4">
                Wedding Styles I <span className="text-gradient-gold">Handle</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-3xl mx-auto">
            {weddingStyles.map((style) => (
              <StaggerItem key={style}>
                <motion.div
                  className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium hover:border-primary/50 hover:text-primary transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {style}
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* --- WEDDING FAQ SECTION --- */}
      <FAQSection data={weddingFAQs} title="Wedding Anchor FAQs" />

      {/* CTA */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-6">
                Ready to Create <span className="text-gradient-gold">Magic?</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-2xl mx-auto">
                Dates for the wedding season fill up fast. Let's discuss your Sangeet ideas and block your dates today!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="lg" className="btn-hover">
                    Book Now
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </Link>
                <a href="tel:+917737877978" className="block">
                  <Button variant="heroOutline" size="lg">
                    <Phone className="w-5 h-5" />
                    Call Now
                  </Button>
                </a>
              </div>
              <p className="text-muted-foreground text-sm mt-8">
                Looking for corporate events? Check out my <Link to="/corporate-event-anchor-jaipur" className="text-primary hover:underline">Corporate Anchor Profile</Link>.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
