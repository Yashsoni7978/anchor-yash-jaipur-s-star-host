import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import { Phone, MessageCircle, MapPin, CheckCircle, Users, Briefcase, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO"; // Switched to Smart SEO Component
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const eventsCovered = [
  {
    icon: Heart,
    title: "Wedding Events",
    desc: "Complete wedding planning from mehendi to reception – vendor coordination, decor, entertainment, and flawless execution across all functions.",
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    desc: "Product launches, annual meets, team outings, award ceremonies, and conferences with professional production and seamless logistics.",
  },
  {
    icon: Sparkles,
    title: "Fashion Shows",
    desc: "Runway events, brand launches, and fashion weeks with stage design, model coordination, backstage management, and show direction.",
  },
  {
    icon: Users,
    title: "Social & Private Events",
    desc: "Birthday parties, anniversary celebrations, baby showers, and intimate gatherings with personalized themes and curated experiences.",
  },
];

const vendorCategories = [
  "Decorators & Florists",
  "Catering & Live Counters",
  "Photography & Videography",
  "DJ & Sound Systems",
  "Lighting & AV Setup",
  "Makeup Artists & Stylists",
  "Choreographers",
  "Entertainment Artists",
  "Invitation & Printing",
  "Transport & Logistics",
];

const whyTrustUs = [
  {
    label: "Single Point of Contact",
    detail: "No running after multiple vendors – I coordinate everything so you can relax",
  },
  {
    label: "Curated Vendor Network",
    detail: "Trusted partners I've worked with across 1100+ events, vetted for quality",
  },
  {
    label: "Transparent Process",
    detail: "Clear communication, no hidden costs, and regular updates throughout",
  },
  {
    label: "Personal Involvement",
    detail: "I'm personally present at your event to ensure everything runs smoothly",
  },
  {
    label: "Flexible Approach",
    detail: "Adapt to your budget, preferences, and last-minute changes without stress",
  },
  {
    label: "End-to-End Execution",
    detail: "From concept to cleanup – every detail handled with care",
  },
];

const faqs = [
  {
    question: "How is this different from a traditional event management company?",
    answer: "Unlike large agencies, I work as your personal event coordinator. You get direct access to me throughout the planning process, curated vendor recommendations based on your budget, and my personal presence at every event. It's a more hands-on, personalized approach without the overhead of a big company.",
  },
  {
    question: "What types of events do you manage in Jaipur?",
    answer: "I manage weddings (all functions from engagement to reception), corporate events (launches, conferences, team events), fashion shows, social gatherings (birthdays, anniversaries), and private celebrations. Each event is approached with the same level of dedication and attention to detail.",
  },
  {
    question: "Do you work with a fixed set of vendors?",
    answer: "I have a trusted network of vendors I've worked with across 1100+ events, but I'm flexible. If you have preferred vendors or specific requirements, I'm happy to coordinate with them. My goal is to get you the best quality within your budget, whether through my network or yours.",
  },
  {
    question: "Can you manage destination events outside Jaipur?",
    answer: "Absolutely! I regularly manage destination weddings and events across Rajasthan including Udaipur, Jodhpur, Jaisalmer, and Pushkar. I either work with local vendors at the destination or bring my trusted Jaipur team depending on your requirements and budget.",
  },
  {
    question: "How do I get started with event planning?",
    answer: "Simply reach out via WhatsApp or the contact form with your event date, type, and approximate guest count. We'll schedule a call to discuss your vision, budget, and requirements. From there, I'll share a proposal with vendor options and a detailed plan for your event.",
  },
];

export default function EventManagementJaipur() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Event Management Services in Jaipur",
    "provider": {
      "@type": "Person",
      "name": "Anchor Yash Soni",
      "url": "https://yashsoni.in",
      "telephone": "+917737877978",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "addressCountry": "IN",
      },
    },
    "areaServed": {
      "@type": "State",
      "name": "Rajasthan",
    },
    "serviceType": "Event Management",
    "description": "End-to-end event management and planning services with curated vendor coordination for weddings, corporate events, and fashion shows in Jaipur.",
  };

  return (
    <Layout>
      {/* Smart SEO Component */}
      <SEO 
        title="Event Management in Jaipur | Best Event Planner – Anchor Yash"
        description="Looking for event management in Jaipur? Anchor Yash offers end-to-end event planning with curated vendors for weddings, corporate events & fashion shows."
        keywords="event management jaipur, best event planner jaipur, wedding event management jaipur, corporate event planner jaipur, event organizer rajasthan"
        canonical="/event-management-jaipur"
      />
      
      {/* Schema Injection */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      {/* Hero Section */}
      <section className="pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="container-custom">
          <ScrollReveal className="max-w-3xl">
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-primary font-medium">
              Event Management in Jaipur
            </p>
            <h1 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Event Management Services in Jaipur –{" "}
              <span className="text-gradient-gold">Anchor Yash</span>
            </h1>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Your personal event coordinator with a curated network of trusted vendors.
              From concept to execution, I handle every detail so you can enjoy your
              event stress-free.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="btn-hover">
                  Plan Your Event
                </Button>
              </Link>
              <a href="https://wa.me/917737877978?text=Hi%20Yash,%20I%20need%20help%20with%20event%20management." target="_blank" rel="noopener noreferrer">
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
          {/* Left: Text Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Introduction */}
            <ScrollReveal>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-4">
                Your Trusted Event Partner in Jaipur
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  Planning an event in Jaipur? Whether it's a dream wedding, a corporate conference,
                  or a fashion show, finding the right vendors and coordinating everything can be
                  overwhelming. That's where I come in. I'm <strong>Anchor Yash</strong>, and beyond
                  being one of Jaipur's most sought-after event hosts, I also offer complete{" "}
                  <strong>event management services in Jaipur</strong>.
                </p>
                <p>
                  But here's what makes my approach different: I'm not a faceless agency with layers
                  of account managers. I work as your <strong>personal event coordinator</strong> –
                  someone who understands your vision, connects you with the right vendors from my
                  curated network, and ensures flawless execution on the day.
                </p>
                <p>
                  With experience from over <strong>1100+ events</strong>, I've built relationships
                  with Jaipur's best decorators, caterers, photographers, DJs, and entertainment
                  artists. When you work with me, you get access to this trusted network along with
                  the peace of mind that comes from having a single point of contact who's invested
                  in making your event perfect.
                </p>
              </div>
            </ScrollReveal>

            {/* How It Works */}
            <ScrollReveal>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-4">
                How I Manage Your Event End-to-End
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  As the <strong>best event planner in Jaipur</strong> for personalized service,
                  here's how I work to bring your vision to life:
                </p>
                <ol className="space-y-4 list-decimal list-inside">
                  <li>
                    <strong>Understanding Your Vision</strong> – We start with a detailed conversation
                    about your event type, guest count, budget, and preferences. I listen to understand
                    not just what you want, but the experience you want to create.
                  </li>
                  <li>
                    <strong>Curated Vendor Recommendations</strong> – Based on your requirements, I
                    suggest vendors from my trusted network. You get options across different budget
                    levels, and I help you compare and choose what works best.
                  </li>
                  <li>
                    <strong>Coordination & Planning</strong> – Once vendors are finalized, I handle all
                    coordination – scheduling meetings, managing timelines, ensuring everyone is aligned
                    with the event flow.
                  </li>
                  <li>
                    <strong>Day-of Execution</strong> – On the event day, I'm personally present to
                    supervise setup, coordinate between vendors, handle any last-minute changes, and
                    ensure everything runs exactly as planned.
                  </li>
                  <li>
                    <strong>Post-Event Support</strong> – From collecting deliverables (photos, videos)
                    to handling vendor payments, I stay involved until everything is wrapped up.
                  </li>
                </ol>
              </div>
            </ScrollReveal>

            {/* Events Covered */}
            <ScrollReveal>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-4">
                Events I Manage
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                From intimate celebrations to large-scale productions, here's what I specialize in:
              </p>
              <StaggerContainer className="grid sm:grid-cols-2 gap-4">
                {eventsCovered.map((card) => (
                  <StaggerItem
                    key={card.title}
                    className="bg-card border border-border rounded-xl p-5 hover:border-primary/60 hover:shadow-[0_0_24px_rgba(226,185,85,0.15)] transition-all duration-300"
                  >
                    <card.icon className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-display font-semibold text-base sm:text-lg mb-2">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {card.desc}
                    </p>
                  </StaggerItem>
                ))}
              </StaggerContainer>
              <p className="mt-4 text-sm text-muted-foreground">
                Looking for <strong>wedding event management in Jaipur</strong>?{" "}
                <Link to="/wedding-anchor-jaipur" className="text-primary hover:underline">
                  See my wedding anchoring services
                </Link>{" "}
                for complete wedding hosting.
              </p>
            </ScrollReveal>

            {/* Vendor Coordination */}
            <ScrollReveal>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-4">
                Vendor Coordination Model
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                I work with a curated network of trusted vendors across all categories needed
                for your event. No commissions that inflate your costs – just honest recommendations
                based on quality and fit:
              </p>
              <div className="flex flex-wrap gap-2">
                {vendorCategories.map((vendor) => (
                  <span
                    key={vendor}
                    className="px-3 py-1.5 text-xs sm:text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                  >
                    {vendor}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Already have preferred vendors? I'm happy to work with them and integrate
                them seamlessly into the event plan.
              </p>
            </ScrollReveal>

            {/* Why Trust Us */}
            <ScrollReveal>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-4">
                Why Clients Trust Anchor Yash
              </h2>
              <ul className="space-y-3 text-sm sm:text-base text-muted-foreground">
                {whyTrustUs.map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                    <span>
                      <strong>{item.label}</strong> – {item.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* FAQs */}
            <ScrollReveal>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="border-border">
                    <AccordionTrigger className="text-left text-sm sm:text-base font-medium hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollReveal>

            {/* Internal Links */}
            <ScrollReveal>
              <div className="bg-card/50 border border-border rounded-xl p-5 sm:p-6">
                <h3 className="font-display font-semibold text-base sm:text-lg mb-3">
                  Related Services
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Explore more ways I can help make your event unforgettable:
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/wedding-anchor-jaipur">
                    <Button variant="outline" size="sm" className="btn-hover">
                      Wedding Anchor Services
                    </Button>
                  </Link>
                  <Link to="/anchoring">
                    <Button variant="outline" size="sm" className="btn-hover">
                      All Anchoring Services
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="gold" size="sm" className="btn-hover">
                      Get in Touch
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Sticky Booking Card */}
          <ScrollReveal direction="right">
            <div className="bg-card border border-border rounded-2xl p-5 sm:p-6 sticky top-28 space-y-5">
              <h3 className="text-lg sm:text-xl font-display font-semibold">
                Start Planning Your Event
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Share your event details and let's discuss how I can help bring your
                vision to life with the right vendors and seamless coordination.
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
                      Based In
                    </p>
                    <p className="font-semibold text-sm">Jaipur, Rajasthan</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <Link to="/contact" className="block">
                  <Button variant="gold" size="lg" className="w-full btn-hover">
                    Send Inquiry
                  </Button>
                </Link>
                <a
                  href="https://wa.me/917737877978?text=Hi%20Yash,%20I%20need%20event%20management%20help%20for%20my%20upcoming%20event."
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
                Available for events in Jaipur, across Rajasthan, and select destinations
                pan-India. Early discussions recommended for large events.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-b from-background to-primary/5">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Plan Your Event?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss your event requirements and create something memorable together.
              Reach out today to get started.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="btn-hover">
                  Contact Now
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