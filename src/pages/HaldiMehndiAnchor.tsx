import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, MessageCircle, Music, Heart, Sun, Smile, Users, Star, Mic, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import { SEO } from "@/components/SEO";
import { FAQSection } from "@/components/FAQSection"; // IMPORT FAQ COMPONENT

const ceremonyServices = [
  {
    icon: Sun,
    title: "Haldi Ceremony",
    description: "Engaging hosting for the Haldi ritual with fun commentary, flower showers, and traditional beats.",
  },
  {
    icon: Music,
    title: "Mehndi & Sangeet",
    description: "High-energy anchoring for Ladies Sangeet, Antakshari, and dance performances.",
  },
  {
    icon: Smile,
    title: "Family Games",
    description: "Interactive games like 'Shoe Game', 'Ring Discovery', and couple quizzes to break the ice.",
  },
  {
    icon: Heart,
    title: "Bhaat & Mayra",
    description: "Traditional hosting for cultural rituals with respectful yet entertaining narration.",
  },
];

const activityTypes = [
  {
    title: "Couple Games",
    description: "Fun compatibility tests and lighthearted roasts for the bride and groom.",
  },
  {
    title: "Ladies Sangeet Antakshari",
    description: "Organizing the classic boys vs girls singing battle with high energy.",
  },
  {
    title: "Dholki Night Hosting",
    description: "Traditional songs and boliyan sessions managed with enthusiasm.",
  },
  {
    title: "Family Roasts",
    description: "Respectful but hilarious introductions of key family members.",
  },
  {
    title: "Dance Performance Intros",
    description: "Hype-building introductions for every cousin and auntie performing on stage.",
  },
  {
    title: "Ritual Narration",
    description: "Explaining the significance of rituals to younger guests in an engaging way.",
  },
];

// --- 12 HALDI & MEHNDI FAQs ---
const haldiMehndiFAQs = [
  {
    question: "How is a Haldi anchor different from a main Wedding anchor?",
    answer: "Haldi and Mehndi events are informal, intimate, and chaotic (in a good way!). My role is less about formal announcements and more about being a 'Family Friend'—cracking jokes, managing the dholwala, getting shy uncles to dance, and keeping the energy high."
  },
  {
    question: "Can you host in Marwari or local dialects?",
    answer: "Yes! Being from Jaipur, I add Marwari touches and Desi humor to connect with the elders, while keeping the vibe cool enough for the youngsters. It's a perfect blend of tradition and modern fun."
  },
  {
    question: "Do you organize games for the Mehndi function?",
    answer: "Absolutely. Mehndi can be long for the bride. I organize engaging games like 'Paper Dance', 'Find the Groom', and 'Saree Draping Challenge' to keep the guests entertained while the henna is being applied."
  },
  {
    question: "How do you handle Ladies Sangeet Antakshari?",
    answer: "I take full charge of the mic to organize the Antakshari (Boys vs Girls), introduce dance performances with high energy, and ensure there are no awkward silences between tracks."
  },
  {
    question: "Do you bring your own props for games?",
    answer: "Yes, I bring quirky props for games (like placards, ribbons, fun glasses) to make the photos look colorful and the activities more engaging."
  },
  {
    question: "Can you manage the 'Bhaat' or 'Mayra' ceremony?",
    answer: "Yes, I understand the cultural significance of the Bhaat ceremony in Rajasthan. I host it with a mix of respect for the ritual and celebratory joy for the maternal family's arrival."
  },
  {
    question: "How long do you stay for a Haldi/Mehndi event?",
    answer: "I typically stay for the entire duration of the main rituals and entertainment, usually 3-4 hours, ensuring the energy never drops until the food is served or the DJ takes over."
  },
  {
    question: "Do you help with music selection for Sangeet?",
    answer: "Yes! I can suggest a playlist of trending Bollywood and Folk songs for dance performances and background music to keep the vibe lively."
  },
  {
    question: "What if the bride/groom is shy?",
    answer: "I specialize in making shy couples feel comfortable. I use low-pressure games like the 'Shoe Game' where they just have to lift props, rather than speaking on the mic, to get them involved."
  },
  {
    question: "Do you host 'Pool Parties' for weddings?",
    answer: "Yes! For modern weddings with a Pool Party, I switch to a 'Club MC' avatar with rain dance games, water balloon fights, and high-octane commentary."
  },
  {
    question: "Can you engage both kids and elderly guests?",
    answer: "My hosting style is inclusive. I have specific games for kids to keep them busy, and respectful interactions/banter for the elders so everyone feels part of the celebration."
  },
  {
    question: "How far in advance should we book you?",
    answer: "Since auspicious dates are limited, it is best to book 2-3 months in advance. However, feel free to check for last-minute availability."
  }
];

export default function HaldiMehndiAnchor() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Haldi & Mehndi Anchor in Jaipur",
    "provider": {
      "@type": "Person",
      "name": "Anchor Yash Soni",
      "url": "https://yashsoni.in",
      "telephone": "+917737877978",
      "areaServed": "Jaipur, Rajasthan",
    },
    "serviceType": "Wedding Event Anchoring",
    "description": "Fun and traditional anchor for Haldi, Mehndi, and Sangeet ceremonies in Jaipur. Expert in family games and ladies sangeet hosting.",
  };

  return (
    <Layout>
      <SEO 
        title="Haldi & Mehndi Anchor in Jaipur | Ladies Sangeet Host | Anchor Yash"
        description="Best anchor for Haldi and Mehndi ceremonies in Jaipur. Anchor Yash brings fun games, family roasting, and high energy to your pre-wedding functions."
        keywords="haldi anchor jaipur, mehndi host jaipur, ladies sangeet anchor, wedding games host, best anchor for sangeet jaipur, rajasthani wedding anchor"
        canonical="/haldi-mehndi-anchor"
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
              Pre-Wedding Specialist
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Haldi & Mehndi Anchor in <span className="text-gradient-gold">Jaipur</span>
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 px-4">
              Add laughter, games, and traditional charm to your pre-wedding functions. 
              The perfect host for a fun-filled family celebration.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="btn-hover">
                  Book for Sangeet/Haldi
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="https://wa.me/917737877978?text=Hi%20Anchor%20Yash,%20looking%20for%20an%20anchor%20for%20Haldi/Mehndi." target="_blank" rel="noopener noreferrer">
                <Button variant="heroOutline" size="lg">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Inquiry
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
                Making Rituals <span className="text-gradient-gold">Fun & Memorable</span>
              </h2>
              <div className="prose prose-invert max-w-none text-muted-foreground text-sm sm:text-base leading-relaxed space-y-4 text-center">
                <p>
                  Pre-wedding functions like Haldi, Mehndi, and Sangeet are the heart of Indian weddings. 
                  These are the moments where families bond, laughter flows, and memories are made. 
                  However, without a host, these events can often feel scattered or dull.
                </p>
                <p>
                  As your Haldi and Mehndi anchor, I act as the bridge between the bride's side and the groom's side. 
                  My job is to break the ice, get the 'shy cousins' on the dance floor, and turn traditional rituals into 
                  engaging celebrations that everyone—from kids to grandparents—enjoys.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Ceremony Services */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-4 mb-4">
                Ceremonies I <span className="text-gradient-gold">Host</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ceremonyServices.map((service) => (
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

      {/* Activity Types */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-4 mb-4">
                Games & <span className="text-gradient-gold">Entertainment</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activityTypes.map((activity) => (
              <StaggerItem key={activity.title}>
                <motion.div
                  className="h-full flex flex-col p-6 bg-background border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-lg font-display font-semibold mb-3 flex items-center gap-2">
                    <Mic className="w-5 h-5 text-primary" />
                    {activity.title}
                  </h3>
                  <p className="text-muted-foreground text-sm flex-grow">{activity.description}</p>
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-4 mb-4">
                Creating <span className="text-gradient-gold">Happy Families</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, number: "200+", label: "Haldi Ceremonies" },
              { icon: Music, number: "150+", label: "Sangeet Nights" },
              { icon: Users, number: "1000s", label: "Smiles Created" },
              { icon: Camera, number: "Uncounted", label: "Selfies Taken" },
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

      {/* --- ADDED FAQ SECTION HERE --- */}
      <FAQSection data={haldiMehndiFAQs} title="Haldi & Mehndi FAQs" />

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-6">
                Let's Make Your Pre-Wedding <span className="text-gradient-gold">Lit!</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-2xl mx-auto">
                Ready to add some craziness to your Haldi and Sangeet? Contact me today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="lg" className="btn-hover">
                    Get a Quote
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
