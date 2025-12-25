import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, MessageCircle, Briefcase, Award, Users, Target, Phone, Star, MapPin, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import { SEO } from "@/components/SEO";
import { FAQSection } from "@/components/FAQSection"; // IMPORT THE NEW COMPONENT

const corporateServices = [
  {
    icon: Briefcase,
    title: "Conference Hosting",
    description: "Professional emceeing for conferences, seminars, and business summits with polished delivery",
  },
  {
    icon: Award,
    title: "Award Ceremonies",
    description: "Elegant hosting for recognition events, annual awards, and achievement celebrations",
  },
  {
    icon: Users,
    title: "Team Building Events",
    description: "Energetic facilitation of team activities, offsites, and employee engagement programs",
  },
  {
    icon: Target,
    title: "Product Launches",
    description: "Dynamic anchoring for product unveilings, brand launches, and promotional events",
  },
];

const eventTypes = [
  {
    title: "Annual Conferences",
    description: "Multi-session corporate conferences with keynote introductions, panel moderation, and seamless session transitions.",
  },
  {
    title: "R&R Events",
    description: "Recognition and rewards ceremonies that celebrate achievements while maintaining corporate professionalism with entertainment.",
  },
  {
    title: "Town Halls & AGMs",
    description: "Formal corporate gatherings requiring precise timing, professional delivery, and audience management expertise.",
  },
  {
    title: "Corporate Celebrations",
    description: "Milestone celebrations, anniversary events, and festive gatherings that balance professionalism with celebration.",
  },
  {
    title: "Dealer & Partner Meets",
    description: "Business networking events, dealer conferences, and partner appreciation events with engaging hosting.",
  },
  {
    title: "Training & Workshops",
    description: "Interactive facilitation for corporate training sessions, workshops, and skill development programs.",
  },
];

const clients = [
  "IT Companies", "Manufacturing", "Hospitality", "Healthcare", "Finance & Banking",
  "Real Estate", "Education", "Retail", "Pharmaceuticals", "Startups"
];

// --- 12 CORPORATE SEO FAQs ---
const corporateFAQs = [
  {
    question: "Have you hosted formal Corporate Award Nights?",
    answer: "Yes, I have hosted over 100+ formal events including R&R Awards, CEO Summits, and Government conclaves. I maintain strict professional decorum and stage etiquette."
  },
  {
    question: "Can you conduct Team Building activities?",
    answer: "I am a specialist Game Show Host. I conduct energy-boosting ice-breakers and team-building challenges that improve employee morale and collaboration."
  },
  {
    question: "Do you require a script from the company?",
    answer: "I am flexible. I can strictly follow your corporate script for compliance, or I can provide professional improvisation if you want a more natural flow."
  },
  {
    question: "How do you handle VIPs and Dignitaries on stage?",
    answer: "I have extensive experience managing VIP protocol, ensuring correct names, titles, and order of precedence are followed during lamp lighting and speeches."
  },
  {
    question: "Can you host Product Launches in Jaipur?",
    answer: "Yes, I host Product Launches for automobiles, tech, and FMCG brands, ensuring the product reveal is high-energy and impactful."
  },
  {
    question: "Do you host Mall Activations and Roadshows?",
    answer: "Yes, I am known for my high energy in Mall Activations (Malls in Jaipur/Delhi) to gather crowds and drive customer engagement for brands."
  },
  {
    question: "What attire do you wear for corporate events?",
    answer: "I adhere to strict grooming standards. I wear formal Tuxedos or Suits for galas, and smart casuals for team-building offsites, matching your brand image."
  },
  {
    question: "Can you anchor in fluent English for international delegates?",
    answer: "Yes, I am fluent in global-standard English and can easily host events with international delegates and expats."
  },
  {
    question: "Do you raise a GST invoice for corporate billing?",
    answer: "Yes, we provide proper GST invoices for all corporate bookings to ensure smooth vendor registration and payment processing."
  },
  {
    question: "Can you manage the 'Fun' part after the formal conference?",
    answer: "Absolutely. I can seamlessly switch roles from a 'Formal Emcee' during the day to a 'Gala Night Host' in the evening to make the party unforgettable."
  },
  {
    question: "Do you host Dealer Meets and distributor conferences?",
    answer: "Yes, I connect well with dealer networks, mixing business talk with engaging entertainment to keep the partners motivated."
  },
  {
    question: "How much experience do you have with Corporate Events?",
    answer: "I have worked with top brands like Tata, Reliance, and government bodies, delivering over 300+ successful corporate shows."
  }
];

export default function CorporateEventAnchorJaipur() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Corporate Event Anchor in Jaipur",
    "provider": {
      "@type": "Person",
      "name": "Anchor Yash Soni",
      "url": "https://yashsoni.in",
      "telephone": "+917737877978",
      "areaServed": "Jaipur, Rajasthan",
    },
    "serviceType": "Corporate Event Anchoring",
    "description": "Professional corporate event anchoring services for conferences, award ceremonies, product launches, and business events in Jaipur.",
  };

  return (
    <Layout>
      <SEO 
        title="Corporate Event Anchor in Jaipur | Professional Emcee | Anchor Yash"
        description="Professional corporate event anchor in Jaipur. Expert hosting for conferences, award ceremonies, product launches, and corporate celebrations. 70+ corporate clients served."
        keywords="corporate event anchor jaipur, corporate emcee jaipur, conference host jaipur, corporate anchor rajasthan, business event host, award ceremony anchor"
        canonical="/corporate-event-anchor-jaipur"
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
              Corporate Event Anchor
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Corporate Event Anchor in <span className="text-gradient-gold">Jaipur</span>
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 px-4">
              Elevate your corporate events with professional anchoring that combines polished delivery, precise timing, and engaging stage presence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="btn-hover">
                  Book for Your Event
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="https://wa.me/917737877978?text=Hi%20Anchor%20Yash,%20I%20want%20to%20inquire%20about%20corporate%20anchoring." target="_blank" rel="noopener noreferrer">
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
                Professional Anchoring for <span className="text-gradient-gold">Business Excellence</span>
              </h2>
              <div className="prose prose-invert max-w-none text-muted-foreground text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  Corporate events demand a different kind of anchoring—one that balances professionalism with engagement, precision with personality. In Jaipur's growing business landscape, companies need anchors who understand corporate culture, can handle formal protocols, and still keep audiences attentive throughout long conference days or celebratory evenings.
                </p>
                <p>
                  With experience hosting over 70 corporate clients across industries—from IT giants to manufacturing leaders, hospitality brands to financial institutions—I bring a refined approach to business event hosting. Whether it's a high-stakes product launch, an annual conference for 500+ attendees, or an intimate leadership summit, the anchoring adapts to reflect your brand's values and event objectives.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Corporate Services */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <span className="text-primary text-xs sm:text-sm font-medium uppercase tracking-wider">
                Services
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-4 mb-4">
                Corporate Anchoring <span className="text-gradient-gold">Services</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {corporateServices.map((service) => (
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
                Corporate Events I <span className="text-gradient-gold">Anchor</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventTypes.map((event) => (
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
                Trusted by <span className="text-gradient-gold">Businesses</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Star, number: "70+", label: "Corporate Clients" },
              { icon: Briefcase, number: "200+", label: "Business Events" },
              { icon: Users, number: "50,000+", label: "Audience Reached" },
              { icon: MapPin, number: "10+", label: "Industries Served" },
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

      {/* Industries Served */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-12">
              <span className="text-primary text-xs sm:text-sm font-medium uppercase tracking-wider">
                Industries
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-4 mb-4">
                Sectors I've <span className="text-gradient-gold">Worked With</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-3xl mx-auto">
            {clients.map((client) => (
              <StaggerItem key={client}>
                <motion.div
                  className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium hover:border-primary/50 hover:text-primary transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {client}
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* --- REPLACED FAQ SECTION --- */}
      <FAQSection data={corporateFAQs} title="Corporate Event FAQs" />

      {/* CTA */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-6">
                Elevate Your Next <span className="text-gradient-gold">Corporate Event</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-2xl mx-auto">
                Let's discuss how professional anchoring can enhance your business event. Share your requirements for a customized approach.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="lg" className="btn-hover">
                    Get in Touch
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
                Also explore our <Link to="/wedding-anchor-jaipur" className="text-primary hover:underline">wedding anchoring</Link> and <Link to="/event-management-jaipur" className="text-primary hover:underline">event management services</Link>.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
