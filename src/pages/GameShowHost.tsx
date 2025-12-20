import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, MessageCircle, Gamepad2, Trophy, Zap, Timer, Users, Smile, Award, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import { SEO } from "@/components/SEO";

const gameServices = [
  {
    icon: Gamepad2,
    title: "Team Building Games",
    description: "Collaborative challenges designed to boost morale, communication, and team spirit.",
  },
  {
    icon: Zap,
    title: "Minute to Win It",
    description: "High-energy, fast-paced 60-second challenges that create instant excitement and laughter.",
  },
  {
    icon: Trophy,
    title: "Corporate Quizzes",
    description: "Engaging trivia sessions mixing business knowledge with pop culture and fun facts.",
  },
  {
    icon: Smile,
    title: "Ice Breakers",
    description: "Quick, fun activities to start conferences or meetings and energize the crowd.",
  },
];

const gameTypes = [
  {
    title: "Office Olympics",
    description: "A series of desk-friendly physical challenges tailored for indoor corporate environments.",
  },
  {
    title: "Bollywood Bingo",
    description: "A musical twist on the classic Tambola/Bingo that everyone loves.",
  },
  {
    title: "Scavenger Hunts",
    description: "Organized hunts within the venue that get teams moving and thinking.",
  },
  {
    title: "Talent Hunts",
    description: "Hosting employee talent shows with encouraging and humorous commentary.",
  },
  {
    title: "Who's the Boss?",
    description: "Fun, lighthearted quizzes about the company leadership and history.",
  },
  {
    title: "Fashion Shows",
    description: "Hosting corporate theme-based fashion walks with style and music.",
  },
];

const faqs = [
  {
    question: "Do you bring the props and music for the games?",
    answer: "I usually coordinate with the event planner for major setups. However, for simple team-building games, I can provide the concept and list of requirements. I always carry my own collection of high-energy music tracks for the DJ.",
  },
  {
    question: "Can you handle a crowd that is shy or hesitant?",
    answer: "That is my specialty! I never force anyone. I start with low-pressure 'Ice Breakers' that get people smiling. Once the comfort level rises, even the most reserved employees end up volunteering for the stage.",
  },
  {
    question: "Is this suitable for senior management and CEOs?",
    answer: "Absolutely. I design activities that are respectful and 'rank-neutral'. I ensure the humor is clean, professional, and inclusive, so everyone from interns to the CEO can participate comfortably.",
  },
  {
    question: "How long is a typical game show session?",
    answer: "A standard energetic session lasts between 45 minutes to 90 minutes. This is the sweet spot to keep energy high without exhausting the attendees.",
  },
];

export default function GameShowHost() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Corporate Game Show Host Jaipur",
    "provider": {
      "@type": "Person",
      "name": "Anchor Yash Soni",
      "url": "https://yashsoni.in",
      "telephone": "+917737877978",
      "areaServed": "Jaipur, Rajasthan",
    },
    "serviceType": "Event Entertainment",
    "description": "High energy game show host and team building anchor for corporate events in Jaipur.",
  };

  return (
    <Layout>
      <SEO 
        title="Corporate Game Show Host in Jaipur | Team Building Anchor | Yash"
        description="Hire the best corporate game show host in Jaipur. Anchor Yash specializes in team building activities, employee engagement, and fun office parties."
        keywords="game show host jaipur, team building anchor, corporate games host, office party anchor jaipur, minute to win it host"
        canonical="/game-show-host"
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
              Employee Engagement Specialist
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Corporate Game Show Host in <span className="text-gradient-gold">Jaipur</span>
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 px-4">
              Turn boring office parties into electric events! I bring the energy, the games, and the fun to unite your team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="btn-hover">
                  Book for Team Building
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
                More Than Just <span className="text-gradient-gold">Games</span>
              </h2>
              <div className="prose prose-invert max-w-none text-muted-foreground text-sm sm:text-base leading-relaxed space-y-4 text-center">
                <p>
                  In the corporate world, 'fun' often feels forced. My goal as a Game Show Host is to change that. 
                  I believe that a team that laughs together, works better together.
                </p>
                <p>
                  Whether it is an offsite in a resort, an annual day celebration, or a casual Friday mixer, 
                  I bring a TV-style game show experience to your venue. Using wit, timing, and carefully curated activities, 
                  I ensure every employee feels like a star participant.
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
                Engagement <span className="text-gradient-gold">Modules</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gameServices.map((service) => (
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

      {/* Game Types */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-4 mb-4">
                Popular <span className="text-gradient-gold">Activities</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gameTypes.map((game) => (
              <StaggerItem key={game.title}>
                <motion.div
                  className="h-full flex flex-col p-6 bg-background border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-lg font-display font-semibold mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    {game.title}
                  </h3>
                  <p className="text-muted-foreground text-sm flex-grow">{game.description}</p>
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
              { icon: Users, number: "50+", label: "Teams United" },
              { icon: Gamepad2, number: "500+", label: "Games Hosted" },
              { icon: Zap, number: "100%", label: "High Energy" },
              { icon: Award, number: "Top", label: "Rated Host" },
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
                Host <span className="text-gradient-gold">FAQs</span>
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
                Ready to <span className="text-gradient-gold">Energize Your Team?</span>
              </h2>
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
