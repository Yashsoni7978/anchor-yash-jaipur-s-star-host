import { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Youtube, Phone, Mail, MapPin, ChevronDown } from "lucide-react";

// --- LINK DATA ---
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

// --- DROPDOWN COMPONENT (For Services Only) ---
const FooterDropdown = ({ title, links }: { title: string; links: { name: string; path: string }[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 lg:border-none pb-4 lg:pb-0">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center justify-between w-full group py-1"
      >
        <h4 className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h4>
        <ChevronDown 
          className={`w-5 h-5 text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
        />
      </button>

      {/* List toggles on Click */}
      <ul className={`space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
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
        {/* Adjusted Grid: 5 Columns Total */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* COLUMN 1 & 2: Brand Info (Takes up 2 slots) */}
          <div className="lg:col-span-2 space-y-6 mb-4 lg:mb-0">
            <Link to="/" className="inline-block">
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
              <a href="https://instagram.com/anchor_yash_official" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@Anchor_Yash" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* COLUMN 3: Quick Links (STATIC - No Dropdown) */}
          <div>
            <h4 className="text-lg font-display font-semibold text-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Services Stack (Anchoring TOP, Events BOTTOM) */}
          <div className="space-y-8">
            {/* Top: Anchoring */}
            <FooterDropdown title="Anchoring Services" links={anchoringServices} />
            
            {/* Bottom: Events (Stacked Under) */}
            <FooterDropdown title="Event Services" links={eventServices} />
          </div>

          {/* COLUMN 5: Contact Info */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-6 text-foreground">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+917737877978" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  +91 77378 77978
                </a>
              </li>
              <li>
                <a href="mailto:yashsoni7978@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  yashsoni7978@gmail.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Jaipur, Rajasthan, India</span>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Anchor Yash. All rights reserved.
            </p>
            <div className="flex justify-center gap-6 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
