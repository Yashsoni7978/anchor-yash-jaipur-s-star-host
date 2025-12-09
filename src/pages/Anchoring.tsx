import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ChevronRight, Sparkles, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import weddingImage from "@/assets/wedding-event.jpg";
import corporateImage from "@/assets/corporate-event.jpg";
import fashionImage from "@/assets/fashion-show.jpg";
import sangeetImage from "@/assets/sangeet-event.jpg";
import poolPartyImage from "@/assets/pool-party.jpg";
import kidsImage from "@/assets/kids-fashion.jpg";

const services = [
  {
    title: "Wedding Anchor",
    description: "Make your special day unforgettable with professional wedding hosting that captures every emotion and keeps your guests engaged throughout the celebration.",
    image: weddingImage,
    features: ["Complete wedding ceremony hosting", "Multi-day event coordination", "Bilingual announcements", "Seamless transition management"],
  },
  {
    title: "Sangeet & Haldi Hosting",
    description: "Add fun, energy, and entertainment to your pre-wedding celebrations with interactive games, dance coordination, and crowd engagement.",
    image: sangeetImage,
    features: ["Dance performance introductions", "Interactive games & activities", "Family engagement sessions", "Musical coordination"],
  },
  {
    title: "Corporate Event Anchor",
    description: "Professional hosting for corporate gatherings, annual meets, product launches, and team-building events with polished delivery and business etiquette.",
    image: corporateImage,
    features: ["Annual general meetings", "Product launches", "Award ceremonies", "Team building events"],
  },
  {
    title: "Fashion Show Host",
    description: "Bring glamour and sophistication to the runway with professional fashion show anchoring that elevates designer presentations.",
    image: fashionImage,
    features: ["Designer introductions", "Model walk coordination", "Collection announcements", "VIP acknowledgments"],
  },
  {
    title: "Kids Fashion & Events",
    description: "Fun, engaging, and age-appropriate hosting for children's events including fashion shows, birthday parties, and school functions.",
    image: kidsImage,
    features: ["India Kids Fashion Week experience", "Birthday party hosting", "School annual days", "Kids' talent shows"],
  },
  {
    title: "Pool Parties & Social Events",
    description: "High-energy hosting for pool parties, themed events, and social gatherings that keep the party going all night long.",
    image: poolPartyImage,
    features: ["Pool party hosting", "Themed event coordination", "Club night anchoring", "Bachelor/Bachelorette parties"],
  },
];

const packages = [
  {
    name: "Essential",
    price: "₹***",
    duration: "Up to 3 hours",
    description: "Perfect for intimate gatherings and small events",
    features: [
      "Professional anchoring",
      "Sound coordination",
      "Basic script preparation",
      "Hindi/English hosting",
      "1 costume change",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "₹****",
    duration: "Up to 6 hours",
    description: "Ideal for weddings and corporate events",
    features: [
      "Everything in Essential",
      "Pre-event consultation",
      "Custom script writing",
      "Crowd engagement activities",
      "2 costume changes",
      "Post-event coordination",
    ],
    popular: true,
  },
  {
    name: "Luxury",
    price: "₹*****",
    duration: "Full day / Multi-day",
    description: "Complete solution for grand celebrations",
    features: [
      "Everything in Premium",
      "Multiple day coverage",
      "Celebrity-style presentation",
      "Entertainment coordination",
      "Unlimited costume changes",
      "VIP guest management",
      "Priority booking",
    ],
    popular: false,
  },
];

export default function Anchoring() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="container-custom relative text-center">
          <ScrollReveal>
            <span className="text-primary text-xs sm:text-sm font-medium uppercase tracking-wider">
              Anchoring Services
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-3 sm:mt-4 mb-4 sm:mb-6">
              Professional Event <span className="text-gradient-gold">Hosting</span>
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
              From intimate gatherings to grand celebrations, Anchor Yash brings energy, professionalism, and unforgettable moments to every event.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-custom">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <motion.div
                  className="group bg-background border border-border rounded-xl sm:rounded-2xl overflow-hidden card-hover"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={service.image}
                      alt={`${service.title} - Best Anchor in Jaipur`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-display font-semibold mb-2 sm:mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">{service.description}</p>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-xs sm:text-sm">
                          <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-16">
              <span className="text-primary text-xs sm:text-sm font-medium uppercase tracking-wider">
                Packages
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-3 sm:mt-4 mb-4 sm:mb-6">
                Choose Your <span className="text-gradient-gold">Package</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto px-4">
                Flexible packages designed to match your event needs and budget
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
                      : "bg-card border-border"
                  }`}
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-[10px] sm:text-xs font-semibold rounded-full flex items-center gap-1">
                      <Crown className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      Most Popular
                    </div>
                  )}
                  
                  <h3 className="text-xl sm:text-2xl font-display font-bold mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl sm:text-4xl font-display font-bold text-gradient-gold">{pkg.price}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">{pkg.duration}</p>
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
              * Prices may vary based on event location, duration, and specific requirements. Contact for custom quotes.
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
              Ready to <span className="text-gradient-gold">Book?</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 px-4">
              Let's discuss your event and create something extraordinary together.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="btn-hover">
                Hire Anchor Yash
                <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
