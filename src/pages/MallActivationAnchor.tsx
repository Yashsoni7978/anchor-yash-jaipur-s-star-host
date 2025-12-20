import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, MessageCircle, Megaphone, ShoppingBag, TrendingUp, Users, Mic2, Gift, Star, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import { SEO } from "@/components/SEO";

const mallServices = [
  {
    icon: Megaphone,
    title: "Product Launches",
    description: "Creating hype and gathering crowds for new store openings or product unveils in malls.",
  },
  {
    icon: Users,
    title: "Crowd Engagement",
    description: "Stopping the walking footfall and converting them into an active audience through interaction.",
  },
  {
    icon: Gift,
    title: "Contests & Giveaways",
    description: "Hosting rapid-fire quizzes and lucky draws to distribute brand merchandise effectively.",
  },
  {
    icon: TrendingUp,
    title: "Sales Promotion",
    description: "Driving instant sales through persuasive talking points and limited-time offer announcements.",
  },
];

const activationTypes = [
  {
    title: "Mall Atrium Events",
    description: "Center-stage hosting in major malls like WTP, GT Central, and MGF.",
  },
  {
    title: "Store Launches",
    description: "Ribbon-cutting ceremonies and initial crowd management for new outlets.",
  },
  {
    title: "Roadshows",
    description: "Outdoor mobile van promotions (Canter activities) across Jaipur city.",
  },
  {
    title: "Festive Activations",
    description: "Diwali, Christmas, or New Year themed events to boost holiday sales.",
  },
  {
    title: "Celebrity Visits",
    description: "Managing the crowd and warming up the audience before a celebrity appearance.",
  },
  {
    title: "Flash Mobs",
    description: "Coordinating surprise performances to grab instant attention.",
  },
];

const faqs = [
  {
    question: "How do you stop people walking by in a busy mall?",
    answer: "Voice modulation and energy are key. I use catchy hooks, direct interaction ('Sir in the blue shirt!'), and instant gratification (small gifts/chocolates) to build an initial crowd circle. Once a crowd forms, the 'FOMO' effect attracts even more people.",
  },
  {
    question: "Can you memorize brand USPs for the pitch?",
    answer: "Yes, that is essential. Before the event, I study the product's key selling points. I weave these USPs into the games and announcements so the audience learns about the product without feeling like they are watching a boring ad.",
  },
  {
    question: "Do you have experience with Jaipur crowds?",
    answer: "I have anchored at World Trade Park (WTP), GT, Triton, and Pink Square. I understand the Jaipur audience—what jokes work, what language they prefer (Hindi/English mix), and what prizes excite them.",
  },
  {
    question: "How long can you anchor continuously?",
    answer: "Mall activations are marathons. I have the stamina to host multiple 45-minute sets throughout the day with consistent high energy, ensuring the evening peak hours get the best performance.",
  },
];

export default function MallActivationAnchor() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mall Activation Anchor Jaipur",
    "provider": {
      "@type": "Person",
      "name": "Anchor Yash Soni",
      "url": "https://yashsoni.in",
      "telephone": "+917737877978",
      "areaServed": "Jaipur, Rajasthan",
    },
    "serviceType": "Marketing Event Anchoring",
    "description": "Expert mall activation anchor and roadshow host in Jaipur. Specializing in crowd gathering and sales promotions.",
  };

  return (
    <Layout>
      <SEO 
        title="Mall Activation Anchor in Jaipur | Roadshow Host | Anchor Yash"
        description="Hire the most energetic mall activation anchor in Jaipur. Anchor Yash specializes in product launches, roadshows, and crowd engagement at WTP, GT, and more."
        keywords="mall activation anchor jaipur, roadshow host jaipur, promotional anchor, emcee for product launch, wtp event anchor"
        canonical="/mall-activation-anchor"
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
              Marketing & Promotions
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Mall Activation Anchor in <span className="text-gradient-gold">Jaipur</span>
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 px-4">
              Grab attention, gather crowds, and drive sales. The voice that turns footfall into customers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="btn-hover">
                  Book for Promotion
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </Link>
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
                Turning Noise into <span className="text-gradient-gold">Numbers</span>
              </h2>
              <div className="prose prose-invert max-w-none text-muted-foreground text-sm sm:text-base leading-relaxed space-y-4 text-center">
                <p>
                  In a busy mall or market, getting noticed is the hardest part. People are distracted. 
                  You need an anchor who doesn't just hold a mic, but commands the space.
                </p>
                <p>
                  I specialize in "Crowd Gathering." Using high-energy interaction, witty one-liners, 
                  and engaging games, I stop the moving traffic and build an audience for your brand. 
                  My style is loud, clear, and persuasive—perfect for roadshows and mall setups.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-4 mb-4">
                Promotional <span className="text-gradient-gold">Services</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mallServices.map((service) => (
              <StaggerItem key={service.title}>
                <motion.div
                  className="h-full flex flex-col p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
                  whileHover={{ y: -4 }}
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

      {/* Activation Types */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-4 mb-4">
                Where I <span className="text-gradient-gold">Perform</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activationTypes.map((type) => (
              <StaggerItem key={type.title}>
                <motion.div
                  className="h-full flex flex-col p-6 bg-background border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-lg font-display font-semibold mb-3 flex items-center gap-2">
                    <Volume2 className="w-5 h-5 text-primary" />
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground text-sm flex-grow">{type.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding">
        <div className="container-custom">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Mic2, number: "100+", label: "Activations" },
              { icon: Users, number: "1000s", label: "Crowd Gathered" },
              { icon: ShoppingBag, number: "High", label: "Sales Conversion" },
              { icon: Star, number: "100%", label: "Brand Impact" },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <motion.div
                  className="text-center p-6 bg-card border border-border rounded-xl"
                  whileHover={{ scale: 1.05 }}
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

      {/* FAQs */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-4">
                Promotion <span className="text-gradient-gold">FAQs</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="p-6 bg-background border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
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
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-6">
                Boost Your Brand <span className="text-gradient-gold">Visibility</span>
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="lg" className="btn-hover">
                    Book for Activation
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
