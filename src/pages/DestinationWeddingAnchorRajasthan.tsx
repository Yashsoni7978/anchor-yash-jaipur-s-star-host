import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Crown, Star, Users, Phone, MessageCircle, Sparkles, Building, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import { SEO } from "@/components/SEO"; // Added Smart SEO

const destinationVenues = [
  {
    icon: Building,
    title: "Palace Weddings",
    description: "Host at iconic heritage palaces like City Palace, Taj Lake Palace, and Rambagh Palace with royal grandeur.",
  },
  {
    icon: MapPin,
    title: "Udaipur Celebrations",
    description: "The Venice of the East offers breathtaking lakeside venues perfect for fairy-tale destination weddings.",
  },
  {
    icon: Crown,
    title: "Jaipur Heritage",
    description: "Pink City's majestic forts and havelis provide the perfect backdrop for unforgettable celebrations.",
  },
  {
    icon: Sparkles,
    title: "Jodhpur Grandeur",
    description: "Blue City's stunning Mehrangarh Fort and Umaid Bhawan create magical wedding memories.",
  },
];

const whyChoose = [
  "Experience hosting 200+ destination weddings across Rajasthan",
  "Fluent in Hindi, English, and familiar with regional dialects",
  "Understanding of palace protocols and heritage venue requirements",
  "Coordination with local vendors and event teams",
  "Flexible with multi-day wedding celebrations",
  "Professional handling of diverse guest demographics",
];

const faqs = [
  {
    question: "What makes a destination wedding anchor different from a regular wedding host?",
    answer: "A destination wedding anchor understands the unique dynamics of out-of-town celebrations—managing diverse guest groups, coordinating with unfamiliar venues, adapting to heritage location acoustics, and keeping the energy high across multi-day events. I bring experience from 200+ destination weddings across Rajasthan's most prestigious venues.",
  },
  {
    question: "Which palace venues in Rajasthan do you host weddings at?",
    answer: "I've hosted weddings at Rajasthan's finest heritage properties including City Palace Jaipur, Taj Lake Palace Udaipur, Rambagh Palace, Umaid Bhawan Palace Jodhpur, Oberoi Rajvilas, Fairmont Jaipur, and numerous boutique heritage havelis. Each venue has its own character, and I adapt my hosting style accordingly.",
  },
  {
    question: "Do you travel for destination weddings outside Rajasthan?",
    answer: "Absolutely. While Rajasthan is my home base and specialty, I regularly travel for destination weddings across India—Goa, Kerala, Himachal, and beyond. Travel arrangements and accommodation are discussed during booking to ensure seamless coordination.",
  },
  {
    question: "How do you handle multi-day wedding events?",
    answer: "Destination weddings often span 3-5 days with mehendi, sangeet, haldi, wedding ceremony, and reception. I maintain consistent energy while adapting the tone for each function—playful for mehendi, high-energy for sangeet, emotional for the pheras, and celebratory for the reception.",
  },
  {
    question: "What languages do you host in for destination weddings?",
    answer: "I'm fluent in Hindi and English, which covers most destination wedding requirements. For NRI weddings or events with international guests, I seamlessly blend both languages to ensure everyone feels included and connected to the celebrations.",
  },
];

export default function DestinationWeddingAnchorRajasthan() {
  const whatsappMessage = encodeURIComponent(
    "Hi Anchor Yash, I'm planning a destination wedding in Rajasthan and would like to discuss hosting services."
  );

  // Schema for Destination Wedding Service
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Destination Wedding Anchor Services Rajasthan",
    "provider": {
      "@type": "Person",
      "name": "Anchor Yash Soni",
      "url": "https://yashsoni.in",
      "telephone": "+917737877978",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "addressCountry": "IN"
      }
    },
    "areaServed": {
      "@type": "State",
      "name": "Rajasthan",
    },
    "description": "Professional destination wedding anchor and palace wedding host services across Rajasthan including Jaipur, Udaipur, and Jodhpur.",
    "serviceType": "Destination Wedding Anchoring",
  };

  return (
    <Layout>
      {/* Smart SEO Component */}
      <SEO 
        title="Destination Wedding Anchor Rajasthan | Palace Wedding Host Jaipur – Anchor Yash"
        description="Book Anchor Yash for destination weddings in Rajasthan. Experienced palace wedding host in Jaipur, Udaipur, and Jodhpur. 200+ heritage venue weddings hosted."
        keywords="destination wedding anchor rajasthan, palace wedding host jaipur, destination wedding emcee udaipur, heritage wedding anchor, royal wedding host rajasthan, wedding anchor jodhpur"
        canonical="/destination-wedding-anchor-rajasthan"
      />
      
      {/* Schema Injection */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      {/* Hero Section */}
      <section className="pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="container-custom relative text-center">
          <ScrollReveal>
            <span className="text-primary text-xs sm:text-sm font-medium uppercase tracking-wider">
              Destination Wedding Specialist
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-3 sm:mt-4 mb-4 sm:mb-6">
              Destination Wedding Anchor <span className="text-gradient-gold">Rajasthan</span>
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
              Palace wedding host in Jaipur, Udaipur, and Jodhpur. Bringing royal celebrations to life at Rajasthan's most iconic heritage venues.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <motion.a
                href={`https://wa.me/917737877978?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="gold" size="lg" className="w-full sm:w-auto btn-hover">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Discuss Your Wedding
                </Button>
              </motion.a>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto btn-hover">
                    <Phone className="w-5 h-5 mr-2" />
                    Contact Now
                  </Button>
                </Link>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-center mb-6 sm:mb-8">
                Why Rajasthan for Your <span className="text-gradient-gold">Dream Wedding?</span>
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 text-sm sm:text-base">
                <p>
                  Rajasthan isn't just a destination—it's an experience. From the pink sandstone walls of Jaipur to the shimmering lakes of Udaipur and the blue-hued streets of Jodhpur, every corner of this royal state tells a story. When couples choose Rajasthan for their destination wedding, they're choosing a backdrop that transforms their celebration into a fairy tale.
                </p>
                <p>
                  As a destination wedding anchor with deep roots in Rajasthan, I understand what makes these celebrations special. It's not just about hosting an event—it's about honoring the grandeur of palace venues, respecting heritage protocols, and creating moments that match the magnificence of your surroundings. Having hosted over 200 destination weddings across the state, I bring local expertise combined with professional hosting that elevates every function.
                </p>
                <p>
                  Whether you're planning an intimate celebration at a boutique haveli or a grand affair at a five-star palace property, the right anchor can bridge cultures, manage diverse guest groups, and ensure your destination wedding unfolds seamlessly from mehendi to bidaai.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Destination Venues */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-center mb-4">
              Premier <span className="text-gradient-gold">Destination Venues</span>
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8 sm:mb-12 px-4">
              Experienced in hosting at Rajasthan's most prestigious wedding destinations
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {destinationVenues.map((venue, index) => (
              <StaggerItem key={index}>
                <div className="h-full flex flex-col bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <venue.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{venue.title}</h3>
                  <p className="text-muted-foreground text-sm flex-grow">{venue.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What I Bring */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-center mb-6 sm:mb-8">
                The Destination Wedding <span className="text-gradient-gold">Experience</span>
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 text-sm sm:text-base">
                <p>
                  Destination weddings demand more than just a good microphone voice. When families travel from across India—and often across the world—to celebrate at a Rajasthani palace, every element needs to come together perfectly. As your palace wedding host in Jaipur, Udaipur, or Jodhpur, I focus on creating an atmosphere where every guest feels welcomed and every moment feels intentional.
                </p>
                <p>
                  The challenge with heritage venues is unique. Palace acoustics differ from conventional banquet halls. Guest demographics span multiple generations and sometimes multiple countries. Ceremonies need to respect both tradition and the venue's heritage character. I've learned to navigate these nuances through years of experience—knowing when to amplify energy during the sangeet, when to create intimate moments during the pheras, and how to keep international guests engaged while honoring Indian traditions.
                </p>
                <p>
                  My coordination extends beyond the stage. I work closely with wedding planners, venue teams, and technical crews to ensure smooth transitions between functions. For destination weddings, this backstage coordination is just as important as what happens in front of the guests.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-center mb-4">
              Why Couples <span className="text-gradient-gold">Trust Me</span>
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8 sm:mb-12 px-4">
              What sets a destination wedding anchor apart
            </p>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {whyChoose.map((item, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
                    <Star className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Multi-Day Events */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-6 sm:mb-8">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold">
                  Multi-Day <span className="text-gradient-gold">Celebrations</span>
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 text-sm sm:text-base">
                <p>
                  Rajasthani destination weddings rarely fit into a single evening. From the colorful mehendi afternoon to the emotional vidaai, these celebrations unfold over three to five days—each function with its own mood, pace, and requirements. As an experienced destination wedding emcee, I understand the rhythm of extended celebrations.
                </p>
                <p>
                  The sangeet needs high energy and entertainment value. The haldi ceremony calls for warmth and family participation. The wedding day itself balances sacred rituals with joyful celebration. And the reception brings everything together in a grand finale. I adapt my hosting style for each function while maintaining the thread that connects your entire wedding story.
                </p>
                <p>
                  For NRI families and international guests, I also serve as a cultural bridge—explaining traditions in English, keeping everyone engaged regardless of language, and ensuring that your destination wedding feels inclusive for every guest who traveled to celebrate with you.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-center mb-8 sm:mb-12">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h2>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-card border border-border rounded-xl p-5 sm:p-6 hover:border-primary/30 transition-colors">
                  <h3 className="font-display font-semibold text-base sm:text-lg mb-2 sm:mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{faq.answer}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container-custom text-center">
          <ScrollReveal>
            <Users className="w-12 h-12 sm:w-16 sm:h-16 text-primary mx-auto mb-4 sm:mb-6" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 sm:mb-4">
              Planning a Destination Wedding in <span className="text-gradient-gold">Rajasthan?</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto mb-6 sm:mb-8 px-4">
              Let's discuss how I can bring your palace wedding vision to life. From venue-specific planning to multi-day coordination, I'm here to make your celebration unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <motion.a
                href={`https://wa.me/917737877978?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="gold" size="lg" className="w-full sm:w-auto btn-hover">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Now
                </Button>
              </motion.a>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto btn-hover">
                    <Phone className="w-5 h-5 mr-2" />
                    Contact Page
                  </Button>
                </Link>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Internal Links */}
          <ScrollReveal delay={0.2}>
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-muted-foreground text-sm mb-4">Explore more services:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/wedding-anchor-jaipur" className="text-primary hover:underline text-sm">
                  Wedding Anchor Jaipur
                </Link>
                <Link to="/sangeet-anchor-jaipur" className="text-primary hover:underline text-sm">
                  Sangeet Anchor Jaipur
                </Link>
                <Link to="/event-management-jaipur" className="text-primary hover:underline text-sm">
                  Event Management Jaipur
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
