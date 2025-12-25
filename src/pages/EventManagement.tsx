import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ChevronRight, Sparkles, Calendar, Users, Music, Camera, Palette, Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO"; 
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import { FAQSection } from "@/components/FAQSection"; // IMPORT FAQ COMPONENT

import weddingImage from "@/assets/wedding-event.jpg";
import sangeetImage from "@/assets/sangeet-event.jpg";
import corporateImage from "@/assets/corporate-event.jpg";

const services = [
  {
    icon: Calendar,
    title: "Full Event Planning",
    description: "End-to-end event planning and coordination, from concept to execution. We handle every detail so you can enjoy your special day.",
    features: ["Venue selection & booking", "Vendor coordination", "Timeline management", "Day-of coordination"],
  },
  {
    icon: Palette,
    title: "Event Designing & Decor",
    description: "Transform any venue into a stunning visual masterpiece with creative themes, elegant decorations, and attention to every detail.",
    features: ["Theme conceptualization", "Stage design", "Floral arrangements", "Lighting design"],
  },
  {
    icon: Music,
    title: "Sangeet Choreography",
    description: "Professional dance choreography for sangeet ceremonies that will have your guests cheering. From traditional to Bollywood styles.",
    features: ["Custom choreography", "Group dance coordination", "Solo performance training", "Music selection"],
  },
  {
    icon: Star,
    title: "Bride & Groom Entry Design",
    description: "Create a grand entrance that sets the tone for your celebration. Unique, memorable, and perfectly tailored to your style.",
    features: ["Concept development", "Props & effects", "Music coordination", "Rehearsal sessions"],
  },
  {
    icon: Users,
    title: "Entertainment Artists Management",
    description: "Access to top entertainers, DJs, live bands, dancers, and performers to elevate your event entertainment.",
    features: ["Artist booking", "Performance coordination", "Sound & lighting", "Stage management"],
  },
  {
    icon: Camera,
    title: "Corporate Event Production",
    description: "Professional production services for corporate events, conferences, and business gatherings with technical excellence.",
    features: ["AV equipment", "Stage setup", "Live streaming", "Technical crew"],
  },
];

const sampleEvents = [
  {
    title: "Royal Rajasthani Wedding",
    description: "A 3-day grand celebration with traditional decor and entertainment",
    image: weddingImage,
    category: "Wedding",
  },
  {
    title: "Sangeet Night Extravaganza",
    description: "Choreographed performances and stunning stage design",
    image: sangeetImage,
    category: "Sangeet",
  },
  {
    title: "Corporate Annual Meet",
    description: "500+ employee event with full production support",
    image: corporateImage,
    category: "Corporate",
  },
];

// --- 12 EVENT MANAGEMENT FAQs ---
const eventManagementFAQs = [
  {
    question: "What does your Event Management service include?",
    answer: "We offer end-to-end solutions including Venue Booking, Vendor Management (Decor, Catering, Photo/Video), Logistics, Artist Management, and On-day Coordination."
  },
  {
    question: "Do you handle Corporate Event Production?",
    answer: "Yes, we specialize in technical production for corporate events, including Stage Fabrication, LED Walls, Sound & Light (Line Array), and Live Streaming setups."
  },
  {
    question: "Can you book Celebrity Artists or Live Bands?",
    answer: "Absolutely. We have direct contacts with top Bollywood singers, Live Bands, Stand-up Comedians, and International Performers to elevate your event entertainment."
  },
  {
    question: "Do you work with a specific budget range?",
    answer: "We are flexible. We customize our services based on your budget. Whether it's an intimate gathering or a large-scale festival, we optimize resources to give you the best value."
  },
  {
    question: "How do you handle destination event logistics?",
    answer: "We have a dedicated logistics team that manages travel bookings, hotel room allocation (RSVP), airport transfers, and local transport for all your guests."
  },
  {
    question: "Do you provide decor and designing in-house?",
    answer: "We work with a curated set of premium decor partners under our creative supervision to ensure the theme and vision are executed perfectly."
  },
  {
    question: "Can you manage last-minute events?",
    answer: "While we recommend planning in advance, our experienced team is capable of pulling off 'Express Events' with a turnaround time of just 7-10 days depending on the scale."
  },
  {
    question: "Do you take care of permissions and licenses?",
    answer: "Yes, we assist in procuring necessary permissions like PPL/IPRS (Music license), Loudspeaker permits, and other local authority clearances."
  },
  {
    question: "Why should we hire an Event Planner instead of doing it ourselves?",
    answer: "Hiring us saves you stress, time, and money. We get better rates from vendors due to our volume of work and ensure flawless execution so you can enjoy the party."
  },
  {
    question: "Do you handle social events like Birthdays and Anniversaries?",
    answer: "Yes, we curate milestone celebrations like 25th Anniversaries, 50th Birthdays, and Theme Parties with the same attention to detail as weddings."
  },
  {
    question: "How big is your team?",
    answer: "We have a core team of senior planners and a large network of on-ground crew, shadows, and hospitality staff to manage events of up to 2000+ guests."
  },
  {
    question: "What is your payment structure?",
    answer: "We generally work on a flexible schedule: a booking advance to block dates, interim payments for vendor advances, and final settlement before the event."
  }
];

export default function EventManagement() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Event Management Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Anchor Yash Soni Events",
      "url": "https://yashsoni.in",
      "telephone": "+917737877978",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "addressCountry": "IN"
      },
    },
    "serviceType": "Event Management",
    "description": "Full-service event management, decor, and choreography for weddings and corporate events in Jaipur.",
  };

  return (
    <Layout>
      <SEO 
        title="Event Management Company in Jaipur | Best Event Planner - Yash Soni"
        description="Complete event management services in Jaipur. Wedding planning, decor, choreography, and corporate event production. 1100+ events experience."
        keywords="event management jaipur, event planner jaipur, wedding planner rajasthan, corporate event management, sangeet choreography jaipur"
        canonical="/event-management"
      />
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

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
              Event Management & Choreography
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6">
              Complete Event <span className="text-gradient-gold">Solutions</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Beyond anchoring, we offer full-service event management, stunning decor, sangeet choreography, and entertainment coordination to make your celebration truly spectacular.
            </p>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="btn-hover">
                  Start Planning
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="https://wa.me/917737877978" target="_blank" rel="noopener noreferrer">
                <Button variant="heroOutline" size="lg">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </Button>
              </a>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
              What We <span className="text-gradient-gold">Offer</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group h-full flex flex-col p-8 bg-background border border-border rounded-2xl hover:border-primary/50 transition-all duration-500"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 flex-grow">{service.description}</p>
                <ul className="space-y-2 mt-auto">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Events */}
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
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
              Sample <span className="text-gradient-gold">Events</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {sampleEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                    {event.category}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-display font-bold mb-2">{event.title}</h3>
                  <p className="text-muted-foreground text-sm">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
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
              How We Work
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
              Our <span className="text-gradient-gold">Process</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understanding your vision, budget, and requirements" },
              { step: "02", title: "Planning", desc: "Creating detailed event plan and timeline" },
              { step: "03", title: "Coordination", desc: "Managing vendors, logistics, and preparations" },
              { step: "04", title: "Execution", desc: "Flawless event delivery and management" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl font-display font-bold text-gradient-gold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ADDED FAQ SECTION HERE --- */}
      <FAQSection data={eventManagementFAQs} title="Event Management FAQs" />

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Plan Your Event <span className="text-gradient-gold">With Us</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
              From concept to execution, let us handle everything while you enjoy your celebration.
            </p>
            <div className="flex justify-center gap-4">
                <Link to="/contact">
                <Button variant="hero" size="xl">
                    Get Started
                    <ChevronRight className="w-5 h-5" />
                </Button>
                </Link>
                <a href="https://wa.me/917737877978" target="_blank" rel="noopener noreferrer">
                    <Button variant="heroOutline" size="xl">
                        <MessageCircle className="w-5 h-5" />
                        WhatsApp
                    </Button>
                </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
