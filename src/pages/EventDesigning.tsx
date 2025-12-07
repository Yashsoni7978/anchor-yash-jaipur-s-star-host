import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ChevronRight, Sparkles, Palette, Music, Heart, Camera, Star, Flower2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
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
  return (
    <Layout>
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
              Event Designing & Wedding Planning
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6">
              Creating <span className="text-gradient-gold">Dream Events</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From stunning decor to complete wedding planning, we transform your vision into reality with meticulous attention to every detail.
            </p>
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
                className="group p-8 bg-background border border-border rounded-2xl hover:border-primary/50 transition-all duration-500"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-6">{service.description}</p>
                <ul className="space-y-2">
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

      {/* Portfolio */}
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
              Our Work
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
              Recent <span className="text-gradient-gold">Projects</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-display font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
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
            <Link to="/gallery">
              <Button variant="goldOutline" size="lg">
                View Full Gallery
                <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Pricing Packages */}
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
              Packages
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
              Investment <span className="text-gradient-gold">Options</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Customizable packages designed to match your event scale and budget
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-8 rounded-2xl border ${
                  pkg.popular
                    ? "bg-gradient-to-b from-primary/10 to-background border-primary shadow-[0_0_40px_hsl(43_74%_49%_/_0.15)]"
                    : "bg-background border-border"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-display font-bold mb-2">{pkg.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-display font-bold text-gradient-gold">{pkg.price}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-6">{pkg.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/contact">
                  <Button
                    variant={pkg.popular ? "gold" : "outline"}
                    className="w-full"
                  >
                    Get Quote
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground text-sm mt-8"
          >
            * All packages are customizable. Prices vary based on venue, scale, and specific requirements.
          </motion.p>
        </div>
      </section>

      {/* Process */}
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
              How We Work
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
              Our <span className="text-gradient-gold">Process</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your vision, style, and requirements" },
              { step: "02", title: "Design", desc: "Creating detailed concepts and mood boards" },
              { step: "03", title: "Planning", desc: "Vendor coordination and timeline management" },
              { step: "04", title: "Execution", desc: "Flawless delivery of your dream event" },
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

      {/* CTA */}
      <section className="section-padding bg-card border-t border-border">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Let's Create Your <span className="text-gradient-gold">Dream Event</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
              From concept to celebration, we handle every detail so you can enjoy your special moments.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Start Planning
                <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
