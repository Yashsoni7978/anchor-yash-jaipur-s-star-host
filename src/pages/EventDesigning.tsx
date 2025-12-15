import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ChevronRight, Palette, Music, Heart, Camera, Star, Flower2, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import { SEO } from "@/components/SEO"; 
import weddingImage from "@/assets/wedding-event.jpg";
import sangeetImage from "@/assets/sangeet-event.jpg";
import corporateImage from "@/assets/corporate-event.jpg";

const services = [
  {
    icon: Palette,
    title: "Event Designing & Decor",
    description: "Transform any venue into a stunning visual masterpiece with creative themes, elegant decorations, and meticulous attention to every detail.",
    features: ["Theme conceptualization", "Stage design & backdrop", "Floral arrangements", "Lighting design", "Table settings & centerpieces"],
  },
  {
    icon: Heart,
    title: "Wedding Planning",
    description: "Complete end-to-end wedding planning that takes care of every detail, from venue selection to the final farewell, so you can enjoy your special day.",
    features: ["Venue selection & booking", "Vendor management", "Timeline coordination", "Guest management", "Budget optimization"],
  },
  {
    icon: Music,
    title: "Sangeet Choreography",
    description: "Professional dance choreography for sangeet ceremonies that will have your guests cheering. From traditional to Bollywood styles.",
    features: ["Custom choreography", "Group dance coordination", "Solo performance training", "Music selection & mixing", "Rehearsal sessions"],
  },
  {
    icon: Star,
    title: "Bride & Groom Entry Design",
    description: "Create a grand entrance that sets the tone for your celebration. Unique, memorable, and perfectly tailored to your personality.",
    features: ["Concept development", "Props & special effects", "Music synchronization", "Pyrotechnics (where permitted)", "Rehearsal coordination"],
  },
  {
    icon: Camera,
    title: "Entertainment Management",
    description: "Access to top entertainers, DJs, live bands, dancers, and performers to elevate your event's entertainment quotient.",
    features: ["Artist booking", "Performance scheduling", "Sound & lighting coordination", "Green room management", "Technical crew"],
  },
  {
    icon: Flower2,
    title: "Destination Wedding Planning",
    description: "Complete destination wedding solutions for creating magical celebrations at exotic locations across India.",
    features: ["Location scouting", "Travel & accommodation", "Local vendor coordination", "Guest experience management", "Multi-day itinerary planning"],
  },
];

const packages = [
  {
    name: "Decor Only",
    price: "₹1,50,000+",
    description: "Complete event decoration and designing",
    features: [
      "Theme conceptualization",
      "Stage & backdrop design",
      "Floral arrangements",
      "Table decor",
      "Lighting setup",
    ],
    popular: false,
  },
  {
    name: "Wedding Planning",
    price: "₹3,50,000+",
    description: "Full wedding planning & coordination",
    features: [
      "Everything in Decor Only",
      "Vendor management",
      "Timeline coordination",
      "Day-of coordination",
      "Guest management",
      "Sangeet choreography",
    ],
    popular: true,
  },
  {
    name: "Destination Wedding",
    price: "₹8,00,000+",
    description: "Complete destination wedding solution",
    features: [
      "Everything in Wedding Planning",
      "Location scouting & booking",
      "Travel arrangements",
      "Accommodation management",
      "Multi-day event coordination",
      "Guest experience curation",
      "Anchor Yash as host",
    ],
    popular: false,
  },
];

const portfolio = [
  {
    title: "Royal Rajasthani Wedding",
    description: "A 3-day grand celebration at Jaipur's heritage venue",
    image: weddingImage,
    category: "Wedding",
  },
  {
    title: "Sangeet Night Extravaganza",
    description: "Choreographed performances with stunning stage design",
    image: sangeetImage,
    category: "Sangeet",
  },
  {
    title: "Corporate Gala Night",
    description: "Elegant corporate event with premium decor",
    image: corporateImage,
    category: "Corporate",
  },
];

export default function EventDesigning() {
  // Schema for Event Designing
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Event Designing & Decor Services",
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
    "serviceType": "Event Designing",
    "description": "Premium event designing, wedding decor, sangeet choreography, and entry concepts in Jaipur.",
  };

  return (
    <Layout>
      {/* Smart SEO Component */}
      <SEO 
        title="Event Designing & Wedding Decor in Jaipur | Sangeet Choreography"
        description="Transform your event with expert designing and decor in Jaipur. We offer wedding themes, sangeet choreography, and grand entry concepts. Book now!"
        keywords="event designing jaipur, wedding decor jaipur, sangeet choreography, bride groom entry ideas, event themes rajasthan"
        canonical="/event-designing"
      />
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      {/* Hero Section */}
      <section className="pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="container-custom relative text-center">
          <ScrollReveal>
            <span className="text-primary text-xs sm:text-sm font-medium uppercase tracking-wider">
              Event Designing & Wedding Planning
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-3 sm:mt-4 mb-4 sm:mb-6">
              Creating <span className="text-gradient-gold">Dream Events</span>
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
              From stunning decor to complete wedding planning, we transform your vision into reality with meticulous attention to every detail.
            </p>
            
            {/* Added CTA Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="btn-hover">
                  Design My Event
                </Button>
              </Link>
              <a href="https://wa.me/917737877978" target="_blank" rel="noopener noreferrer">
                <Button variant="heroOutline" size="lg">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </Button>
              </a>
            </div>

          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-16">
              <span className="text-primary text-xs sm:text-sm font-medium uppercase tracking-wider">
                Our Services
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-3 sm:mt-4">
                What We <span className="text-gradient-gold">Offer</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <motion.div
                  className="group p-6 sm:p-8 bg-background border border-border rounded-xl sm:rounded-2xl card-hover"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-display font-semibold mb-2 sm:mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-4 sm:mb-6">{service.description}</p>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs sm:text-sm">
                        <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Portfolio */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-16">
              <span className="text-primary text-xs sm:text-sm font-medium uppercase tracking-wider">
                Our Work
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-3 sm:mt-4">
                Recent <span className="text-gradient-gold">Projects</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {portfolio.map((item) => (
              <StaggerItem key={item.title}>
                <motion.div
                  className="group relative overflow-hidden rounded-xl sm:rounded-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-primary/90 text-primary-foreground text-[10px] sm:text-xs font-medium rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-display font-bold mb-1 sm:mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">{item.description}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-8 sm:mt-12">
              <Link to="/portfolio">
                <Button variant="goldOutline" size="lg" className="btn-hover">
                  View Full Portfolio
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-16">
              <span className="text-primary text-xs sm:text-sm font-medium uppercase tracking-wider">
                Packages
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-3 sm:mt-4 mb-4 sm:mb-6">
                Investment <span className="text-gradient-gold">Options</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto px-4">
                Customizable packages designed to match your event scale and budget
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <StaggerItem key={pkg.name}>
                <motion.div
                  className={`relative p-6 sm:p-8 rounded-xl sm:rounded-2xl border ${
                    pkg.popular
                      ? "bg-gradient-to-b from-primary/10 to-background border-primary shadow-[0_0_40px_hsl(43_74%_49%_/_0.15)]"
                      : "bg-background border-border"
                  }`}
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-[10px] sm:text-xs font-semibold rounded-full">
                      Most Popular
                    </div>
                  )}
                  
                  <h3 className="text-xl sm:text-2xl font-display font-bold mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-2xl sm:text-3xl font-display font-bold text-gradient-gold">{pkg.price}</span>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-4 sm:mb-6">{pkg.description}</p>
                  
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs sm:text-sm">
                        <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/contact">
                    <Button
                      variant={pkg.popular ? "gold" : "outline"}
                      className="w-full btn-hover text-sm"
                    >
                      Get Quote
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.3}>
            <p className="text-center text-muted-foreground text-xs sm:text-sm mt-6 sm:mt-8 px-4">
              * All packages are customizable. Prices vary based on venue, scale, and specific requirements.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card border-t border-border">
        <div className="container-custom text-center">
          <ScrollReveal>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto mb-4 sm:mb-6" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 sm:mb-6">
              Let's Create Your <span className="text-gradient-gold">Dream Event</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 px-4">
              From concept to celebration, we handle every detail so you can enjoy your special moments.
            </p>
            <div className="flex justify-center gap-4">
                <Link to="/contact">
                <Button variant="hero" size="xl" className="btn-hover">
                    Start Planning
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
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
