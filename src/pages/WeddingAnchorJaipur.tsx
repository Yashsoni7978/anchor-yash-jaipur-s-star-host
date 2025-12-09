import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import { Phone, MessageCircle, MapPin, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function WeddingAnchorJaipur() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="container-custom">
          <ScrollReveal className="max-w-3xl">
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-primary font-medium">
              Wedding Anchor in Jaipur
            </p>
            <h1 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold">
              Wedding Anchor in Jaipur –{" "}
              <span className="text-gradient-gold">Anchor Yash</span>
            </h1>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl">
              Making every moment interactive, emotional and unforgettable for your big day.
              From varmala to sangeet, I ensure your guests are not just watching –
              they’re smiling, cheering and fully involved.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Book for Your Wedding
                </Button>
              </Link>
              <a href="https://wa.me/917737877978" target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="xl">
                  <MessageCircle className="w-5 h-5 mr-1.5" />
                  WhatsApp Now
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-3 gap-10 lg:gap-14">
          {/* Left: Text */}
          <div className="lg:col-span-2 space-y-10">
            {/* Intro */}
            <ScrollReveal>
              <h2 className="text-xl sm:text-2xl font-display font-bold mb-3">
                Professional Wedding Anchor for Jaipur & Rajasthan Weddings
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Looking for a professional wedding anchor in Jaipur or Rajasthan?
                I’m <strong>Anchor Yash</strong>, a Jaipur-based event host with{" "}
                <strong>1100+ shows</strong> across weddings, sangeet, haldi, receptions,
                pool parties and destination celebrations.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground mt-3">
                From handling emotional entries to high-energy sangeet segments, I make sure
                your guests are never bored. Every moment on stage is planned for
                <strong> engagement, emotion and energy</strong>.
              </p>
            </ScrollReveal>

            {/* What I Do */}
            <ScrollReveal>
              <h3 className="text-lg sm:text-xl font-display font-semibold mb-3">
                What I Do as Your Wedding Anchor
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3 sm:gap-4 text-sm sm:text-base text-muted-foreground">
                {[
                  "Guest engagement – no awkward silence, no boring gaps",
                  "Smooth announcements – entries, varmala, ring ceremony, games",
                  "High-energy sangeet hosting – intros, games, couple moments",
                  "Family comfort – keeping parents & elders involved",
                  "Coordination with DJ, planner, decor & photography",
                  "Managing event flow so everything feels seamless",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Event Types */}
            <ScrollReveal>
              <h3 className="text-lg sm:text-xl font-display font-semibold mb-3">
                Wedding Events I Specialize In
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Sangeet Night Hosting",
                    desc: "Dance introductions, couple games, fun crowd moments and interactive segments.",
                  },
                  {
                    title: "Haldi & Mehendi Functions",
                    desc: "Light games, fun banter and rituals hosted with warmth and energy.",
                  },
                  {
                    title: "Varmala / Jaimala Ceremony",
                    desc: "Grand entries, story-based introductions and emotional yet classy hosting.",
                  },
                  {
                    title: "Reception & Cocktail",
                    desc: "Classy stage presence for couple entries, speeches and celebrations.",
                  },
                  {
                    title: "Pool Parties & After Parties",
                    desc: "Youthful, interactive and high-energy hosting for close-knit celebrations.",
                  },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="bg-card border border-border rounded-xl p-4 sm:p-5 hover:border-primary/60 hover:shadow-[0_0_20px_rgba(226,185,85,0.18)] transition-all"
                  >
                    <h4 className="font-semibold text-sm sm:text-base mb-1.5">
                      {card.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">{card.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Why Choose */}
            <ScrollReveal>
              <h3 className="text-lg sm:text-xl font-display font-semibold mb-3">
                Why Couples Choose Anchor Yash
              </h3>
              <ul className="space-y-2.5 text-sm sm:text-base text-muted-foreground">
                <li>
                  ✅ <strong>1100+ events hosted</strong> – weddings, corporates, fashion shows & more
                </li>
                <li>
                  ✅ <strong>5+ years</strong> of experience in live crowd handling
                </li>
                <li>
                  ✅ Comfortable with <strong>all age groups</strong> – kids, elders, friends, VIP guests
                </li>
                <li>
                  ✅ <strong>Bilingual hosting</strong> – Hindi & English as per audience
                </li>
                <li>
                  ✅ <strong>Customized scripts</strong> based on your story, rituals and family culture
                </li>
              </ul>
            </ScrollReveal>

            {/* Locations */}
            <ScrollReveal>
              <h3 className="text-lg sm:text-xl font-display font-semibold mb-3">
                Based in Jaipur, Performing Across Rajasthan
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-3">
                I am based in <strong>Jaipur, Rajasthan</strong> and available for:
              </p>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm sm:text-base text-muted-foreground">
                <li>• Jaipur city weddings</li>
                <li>• Udaipur & Jodhpur destination weddings</li>
                <li>• Jaisalmer, Pushkar & heritage venues</li>
                <li>• Select pan-India weddings (on prior booking)</li>
              </ul>
            </ScrollReveal>
          </div>

          {/* Right: Booking Card */}
          <ScrollReveal direction="right">
            <div className="bg-card border border-border rounded-2xl p-5 sm:p-6 sticky top-28 space-y-5">
              <h3 className="text-lg sm:text-xl font-display font-semibold">
                Book Your Wedding Anchor
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Share your wedding dates and venue, and let’s plan the perfect hosting experience
                for your big day in Jaipur or anywhere in Rajasthan.
              </p>

              <div className="space-y-3 text-sm sm:text-base">
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-0.5 text-primary" />
                  <div>
                    <p className="text-muted-foreground text-xs uppercase tracking-wide">
                      Call / WhatsApp
                    </p>
                    <p className="font-semibold">+91 77378 77978</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                  <div>
                    <p className="text-muted-foreground text-xs uppercase tracking-wide">
                      Location
                    </p>
                    <p className="font-semibold text-sm">Jaipur, Rajasthan, India</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <Link to="/contact">
                  <Button variant="gold" size="lg" className="w-full btn-hover">
                    Send Wedding Inquiry
                  </Button>
                </Link>
                <a
                  href="https://wa.me/917737877978?text=Hi%20Yash,%20I%20want%20to%20book%20you%20as%20a%20wedding%20anchor."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="whatsapp" size="lg" className="w-full">
                    <MessageCircle className="w-4 h-4 mr-1.5" />
                    WhatsApp Direct
                  </Button>
                </a>
              </div>

              <p className="text-[11px] sm:text-xs text-muted-foreground">
                Available for weddings in Jaipur, across Rajasthan and select destination weddings
                across India.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
