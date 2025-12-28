import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Instagram, Youtube, Phone, Mail, MapPin, ChevronDown } from "lucide-react";

// --- DATA ---
const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const anchoringServices = [
  { name: "Wedding Anchor Jaipur", path: "/wedding-anchor-jaipur" },
  { name: "Sangeet Anchor Jaipur", path: "/sangeet-anchor-jaipur" },
  { name: "Haldi & Mehndi Anchor", path: "/haldi-mehndi-anchor" },
  { name: "Corporate Event Anchor", path: "/corporate-event-anchor-jaipur" },
  { name: "Team Building Host", path: "/game-show-host" },
  { name: "Mall Activation Anchor", path: "/mall-activation-anchor" },
  { name: "Destination Wedding Anchor", path: "/destination-wedding-anchor-rajasthan" },
];

const eventServices = [
  { name: "Event Management Jaipur", path: "/event-management-jaipur" },
  { name: "Event Planning Jaipur", path: "/event-planning-jaipur" },
  { name: "Event Designing", path: "/event-designing" },
  { name: "All Event Services", path: "/event-management" },
];

// --- RESPONSIVE SECTION COMPONENT ---
// Mobile: Dropdown | Desktop: Static List
const FooterSection = ({ title, links }: { title: string; links: { name: string; path: string }[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size to disable dropdown on desktop
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="border-b border-white/10 lg:border-none pb-4 lg:pb-0 mb-6 lg:mb-0">
      {/* HEADER: Clickable on Mobile, Static on Desktop */}
      <button 
        onClick={() => isMobile && setIsOpen(!isOpen)} 
        className={`flex items-center justify-between w-full group ${isMobile ? 'cursor-pointer' : 'cursor-default'}`}
        aria-expanded={isOpen} // Accessibility Tip: Tells screen readers if menu is open
      >
        <h4 className="text-lg font-display font-semibold text-foreground lg:mb-6">
          {title}
        </h4>
        {/* Chevron only shows on Mobile */}
        <ChevronDown 
          className={`w-5 h-5 text-primary transition-transform duration-300 lg:hidden ${isOpen ? "rotate-180" : ""}`} 
        />
      </button>

      {/* LIST: Collapsible on Mobile, Always Visible on Desktop */}
      <ul className={`space-y-2 overflow-hidden transition-all duration-300 ease-in-out 
        ${isMobile 
          ? (isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0") 
          : "max-h-full opacity-100 block" // Always show on desktop
        }`}
      >
        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              className="block py-1.5 text-muted-foreground hover:text-primary transition-colors duration-300 text-sm" // Added py-1.5 for touch targets
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom section-padding">
        
        {/* LAYOUT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* COLUMN 1: BRAND INFO (Takes 4 columns width) */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-block" aria-label="Go to Homepage">
              <span className="text-3xl font-display font-bold">
                <span className="text-gradient-gold">Anchor</span>
                <span className="text-foreground ml-2">Yash</span>
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Jaipur's premium event ecosystem offering professional anchoring and complete event management solutions. 
              1100+ successful events and counting.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/anchor_yash_official" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow Anchor Yash on Instagram" // FIXED: Critical for Accessibility
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.youtube.com/@Anchor_Yash" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Subscribe to Anchor Yash on YouTube" // FIXED: Critical for Accessibility
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS (Takes 2 columns width) */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-display font-semibold text-foreground mb-6 hidden lg:block">
              Quick Links
            </h4>
            {/* Mobile: Reuse the component / Desktop: Simple List */}
            <div className="lg:hidden">
               <FooterSection title="Quick Links" links={quickLinks} />
            </div>
            <ul className="space-y-2 hidden lg:block">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-muted-foreground hover:text-primary text-sm transition-colors block py-1.5">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: SERVICES (Takes 3 columns width) - STACKED */}
          <div className="lg:col-span-3 space-y-10">
            {/* Anchoring Section */}
            <FooterSection title="Anchoring Services" links={anchoringServices} />
            
            {/* Event Services Section (Stacked Below) */}
            <FooterSection title="Event Services" links={eventServices} />
          </div>

          {/* COLUMN 4: CONTACT (Takes 3 columns width) */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-display font-semibold mb-6 text-foreground">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+917737877978" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors py-1">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  +91 77378 77978
                </a>
              </li>
              <li>
                <a href="mailto:yashsoni7978@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors py-1">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  yashsoni7978@gmail.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-muted-foreground py-1">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Jaipur, Rajasthan, India</span>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div className="border-t border-border">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Anchor Yash. All rights reserved.
            </p>
            <div className="flex justify-center gap-6 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors py-2">Privacy Policy</Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors py-2">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
