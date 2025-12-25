import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import { Phone, MessageCircle, MapPin, CheckCircle, Star, Users, Calendar, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO"; 
import { FAQSection } from "@/components/FAQSection"; // IMPORTING THE NEW COMPONENT

// --- 1. EVENT TYPES DATA ---
const eventTypes = [
  {
    title: "Sangeet Night Hosting",
    desc: "From dance introductions to couple games and interactive crowd moments, I ensure your sangeet is a night of non-stop entertainment and laughter.",
  },
  {
    title: "Haldi & Mehendi Ceremonies",
    desc: "Light-hearted games, fun banter with family, and warm rituals hosted with the perfect blend of tradition and energy.",
  },
  {
    title: "Varmala / Jaimala Ceremony",
    desc: "Grand couple entries, personalized story-based introductions, and emotional yet classy hosting that sets the tone for your wedding.",
  },
  {
    title: "Reception & Cocktail Events",
    desc: "Sophisticated stage presence for couple entries, toast moments, guest speeches, and elegant evening celebrations.",
  },
  {
    title: "Destination Weddings",
    desc: "Experienced in hosting at heritage venues across Udaipur, Jodhpur, Jaisalmer and luxury resorts throughout Rajasthan.",
  },
];

// --- 2. HIGHLIGHTS DATA ---
const experienceHighlights = [
  { icon: Calendar, label: "1100+ Events", desc: "Weddings, corporates & more" },
  { icon: Star, label: "5+ Years", desc: "Professional experience" },
  { icon: Users, label: "Celebrity Weddings", desc: "High-profile celebrations" },
  { icon: Award, label: "Luxury Venues", desc: "Jaipur's finest properties" },
];

const citiesServed = [
  "Jaipur", "Udaipur", "Jodhpur", "Jaisalmer", "Pushkar",
  "Ajmer", "Bikaner", "Mount Abu", "Neemrana", "Ranthambore",
];

// --- 3. THE 12 SEO-RICH FAQs (AESTHETIC UPGRADE) ---
const weddingFAQs = [
  {
    question: "What makes Anchor Yash the best wedding anchor in Jaipur?",
    answer: "With over 1100 events hosted and 5+ years of experience, Anchor Yash brings unmatched energy, crowd engagement skills, and a deep understanding of Rajasthani wedding traditions. His bilingual hosting in Hindi and English ensures your wedding feels personal and memorable."
  },
  {
    question: "Do you write the Sangeet Script and family intros?",
    answer: "Yes! I provide complete support with Sangeet Scripts. I write personalized 'Sher-o-Shayari' and witty introductions for every family performance to make them feel special."
  },
  {
    question: "Do you host destination weddings in Rajasthan?",
    answer: "Absolutely! I specialize in destination wedding anchoring across Rajasthan including Udaipur, Jodhpur, Jaisalmer, Pushkar, and luxury heritage venues. I work seamlessly with event planners and venue teams."
  },
  {
    question: "What is your style for Haldi and Mehndi events?",
    answer: "My Haldi anchoring is NOT traditional or boring. I bring a 'Crazy Fun' vibe with high-energy commentary, dhol interactions, and spontaneous crowd dancing."
  },
  {
    question: "Do you organize games for couples and guests?",
    answer: "Definitely. I have a library of 100+ interactive games (Couple Shoe Game, Ring Hunt, Musical Chairs, Saree Challenge) categorized by age group to keep guests entertained."
  },
  {
    question: "Do you bring your own props for games?",
    answer: "Yes, I bring my own unique props for games and activities. You don't need to worry about arranging anything for the entertainment segment."
  },
  {
    question: "How long do you stay for a Sangeet night?",
    answer: "I stay until the very end! I arrive 2 hours early for sound checks and keep the energy high until the DJ takes over or the party ends."
  },
  {
    question: "Can you handle the Varmala concepts?",
    answer: "Yes, I host royal Varmala ceremonies with themes like 'Voice of God', Ganga Aarti, or Flower Shower, ensuring the moment is emotional and grand."
  },
  {
    question: "What if there is a delay in the bride/groom entry?",
    answer: "Delays are common in weddings. I am an expert at 'Filler Engagement'—I keep the audience busy with stories, jokes, and interactions so they don't feel bored while waiting."
  },
  {
    question: "Do you coordinate with the DJ and console?",
    answer: "Yes, I coordinate directly with the DJ and Technician for entry songs, fanfare music, and mic cues so the family can relax and enjoy."
  },
  {
    question: "Can you host a formal Wedding Reception?",
    answer: "Absolutely. For Receptions, I switch to a sophisticated, formal tone, managing the stage flow, guest welcomes, and photo-op management smoothly."
  },
  {
    question: "How far in advance should I book you?",
    answer: "For peak wedding season dates (October to February), I recommend booking at least 2-3 months in advance. Contact me with your dates to check availability."
  }
];

export default function WeddingAnchorJaipur() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Wedding Anchor Services in Jaipur",
    "provider": {
      "@type": "Person",
      "name": "Anchor Yash Soni",
      "url": "https://yashsoni.in",
      "image": "https://yashsoni.in/assets/hero-anchor.jpg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "addressCountry": "IN",
      },
      "telephone": "+917737877978"
    },
    "areaServed": {
      "@type": "State",
      "name": "Rajasthan",
    },
    "serviceType": "Wedding Anchoring",
    "description": "Professional wedding anchor and event host for weddings, sangeet, haldi, reception and destination weddings in Jaipur and across Rajasthan.",
  };

  return (
    <Layout>
      <SEO 
        title="Wedding Anchor in Jaipur | Best Wedding Host – Anchor Yash"
        description="Looking for the best wedding anchor in Jaipur? Anchor Yash brings 1100+ events experience to your sangeet, haldi, reception & destination weddings across Rajasthan."
        keywords="wedding anchor jaipur, best wedding host jaipur, destination wedding anchor rajasthan, sangeet anchor jaipur, wedding emcee jaipur, wedding host rajasthan"
        canonical="/wedding-anchor-jaipur"
      />
      
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      {/* Hero Section */}
      <section className="pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="container-custom">
          <ScrollReveal className="max-w-3xl">
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-primary font-medium">
              Professional Wedding Anchor
            </p>
            <h1 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Wedding Anchor in Jaipur –{" "}
              <span className="text-gradient-gold">Anchor Yash</span>
            </h1>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Making every moment of your wedding interactive, emotional, and unforgettable.
              From the varmala ceremony to the sangeet celebrations, I ensure your guests
              are not just watching – they're smiling, cheering, and fully involved in
              your special day.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="btn-hover">
                  Book for Your Wedding
                </Button>
              </Link>
              <a href="https://wa.me/917737877978?text=Hi%20Yash,%20I%20want%20to%20inquire%20about%20wedding%20anchoring." target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="xl">
                  <MessageCircle className="w-5 h-5 mr-1.5" />
                  WhatsApp Now
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-10 sm:py-12 border-y border-border/50 bg-card/30">
        <div className="container-custom">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {experienceHighlights.map((item) => (
              <StaggerItem key={item.label} className="text-center">
                <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary mx-auto mb-2" />
                <p className="font-display font-bold text-lg sm:text-xl">{item.label}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-3 gap-10 lg:gap-14">
          
          {/* Left: Text Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Introduction */}
            <ScrollReveal>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-4">
                Your Trusted Wedding Host in Jaipur & Rajasthan
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  Are you searching for a professional <strong>wedding anchor in Jaipur</strong> who can
                  transform your wedding into an unforgettable celebration? I'm <strong>Anchor Yash</strong>,
                  a Jaipur-based event host with extensive experience hosting over <strong>1100 shows</strong>{" "}
                  across weddings, sangeet nights, haldi ceremonies, receptions, pool parties, and
                  destination celebrations throughout Rajasthan.
                </p>
                <p>
                  What sets a great wedding apart from a good one? It's the moments – the laughter during
                  games, the tears during entries, the energy during sangeet performances. As a dedicated
                  <strong> wedding host in Jaipur</strong>, I understand that each wedding is unique, each
                  family has its own traditions, and each couple has their own story to tell.
                </p>
                <p>
                  From handling emotional bride and groom entries to conducting high-energy sangeet segments,
                  I ensure your guests are never bored. Every moment on stage is meticulously planned for
                  <strong> engagement, emotion, and entertainment</strong>. Whether it's a traditional
                  Rajasthani wedding in Jaipur or a grand destination celebration in Udaipur, I bring the
                  same passion and professionalism to every event.
                </p>
              </div>
            </ScrollReveal>

            {/* Why Choose */}
            <ScrollReveal>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-4">
                Why Choose Anchor Yash for Your Wedding
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  Choosing the right <strong>sangeet anchor in Jaipur</strong> or wedding host can make
                  or break your celebration. Here's why couples across Rajasthan trust me with their
                  most important day:
                </p>
                <ul className="space-y-3">
                  {[
                    { label: "1100+ events hosted", detail: "across weddings, corporates, fashion shows & celebrity events" },
                    { label: "5+ years of experience", detail: "in live crowd handling and stage management" },
                    { label: "All age groups", detail: "comfortable engaging kids, elders, friends, and VIP guests equally" },
                    { label: "Bilingual hosting", detail: "fluent in Hindi & English, adapting to your audience" },
                    { label: "Customized scripts", detail: "based on your love story, family traditions, and cultural preferences" },
                    { label: "Seamless coordination", detail: "with DJ, wedding planners, decorators, and photographers" },
                  ].map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                      <span>
                        <strong>{item.label}</strong> – {item.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Event Types */}
            <ScrollReveal>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-4">
                Types of Wedding Events I Host
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                As a versatile <strong>destination wedding anchor in Rajasthan</strong>, I specialize in
                hosting every type of wedding function with the appropriate energy and elegance:
              </p>
              <StaggerContainer className="grid sm:grid-cols-2 gap-4">
                {eventTypes.map((card) => (
                  <StaggerItem
                    key={card.title}
                    className="bg-card border border-border rounded-xl p-5 hover:border-primary/60 hover:shadow-[0_0_24px_rgba(226,185,85,0.15)] transition-all duration-300"
                  >
                    <h3 className="font-display font-semibold text-base sm:text-lg mb-2">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {card.desc}
                    </p>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </ScrollReveal>

            {/* Cities Served */}
            <ScrollReveal>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-4">
                Cities Served Across Rajasthan
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                Based in <strong>Jaipur, Rajasthan</strong>, I am available for weddings and events
                across the entire state and select destinations pan-India:
              </p>
              <div className="flex flex-wrap gap-2">
                {citiesServed.map((city) => (
                  <span
                    key={city}
                    className="px-3 py-1.5 text-xs sm:text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                  >
                    {city}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                I also travel for select destination weddings across India – contact me to discuss
                availability for your location.
              </p>
            </ScrollReveal>

            {/* --- REPLACED OLD FAQ SECTION WITH NEW AESTHETIC COMPONENT --- */}
            {/* The Accordion is removed, replaced with FAQSection */}
          </div>

          {/* Right: Sticky Booking Card */}
          <ScrollReveal direction="right">
            <div className="bg-card border border-border rounded-2xl p-5 sm:p-6 sticky top-28 space-y-5">
              <h3 className="text-lg sm:text-xl font-display font-semibold">
                Book Your Wedding Anchor
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Share your wedding dates and venue details, and let's plan the perfect
                hosting experience for your big day in Jaipur or anywhere in Rajasthan.
              </p>

              <div className="space-y-4 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground text-xs uppercase tracking-wide">
                      Call / WhatsApp
                    </p>
                    <p className="font-semibold">+91 77378 77978</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground text-xs uppercase tracking-wide">
                      Location
                    </p>
                    <p className="font-semibold text-sm">Jaipur, Rajasthan, India</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <Link to="/contact" className="block">
                  <Button variant="gold" size="lg" className="w-full btn-hover">
                    Send Wedding Inquiry
                  </Button>
                </Link>
                <a
                  href="https://wa.me/917737877978?text=Hi%20Yash,%20I%20want%20to%20book%20you%20as%20a%20wedding%20anchor%20for%20my%20wedding."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="whatsapp" size="lg" className="w-full">
                    <MessageCircle className="w-4 h-4 mr-1.5" />
                    WhatsApp Direct
                  </Button>
                </a>
              </div>

              <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed">
                Available for weddings in Jaipur, across Rajasthan, and select destination
                weddings across India. Early booking recommended for peak season dates.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- ADDED AESTHETIC FAQ SECTION HERE --- */}
      <FAQSection data={weddingFAQs} title="Frequently Asked Questions" />

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-b from-background to-primary/5">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Make Your Wedding Unforgettable?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss how I can bring energy, emotion, and entertainment to your
              special day. Contact me today to check availability for your wedding dates.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="btn-hover">
                  Book Now
                </Button>
              </Link>
              <a href="https://wa.me/917737877978" target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="xl">
                  <MessageCircle className="w-5 h-5 mr-1.5" />
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
