import { Link } from "react-router-dom";
import { Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";

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
  { name: "Corporate Event Anchor", path: "/corporate-event-anchor-jaipur" },
  { name: "Destination Wedding Anchor", path: "/destination-wedding-anchor-rajasthan" },
  { name: "All Anchoring Services", path: "/anchoring" },
];

const eventServices = [
  { name: "Event Management Jaipur", path: "/event-management-jaipur" },
  { name: "Event Planning Jaipur", path: "/event-planning-jaipur" },
  { name: "Event Designing", path: "/event-designing" },
  { name: "All Event Services", path: "/event-management" },
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-block">
              <span className="text-3xl font-display font-bold">
                <span className="text-gradient-gold">Anchor</span>
                <span className="text-foreground ml-2">Yash</span>
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Jaipur's premium event ecosystem offering professional anchoring and complete event management solutions. 
              1100+ successful events and counting.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/anchor_yash_official"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@Anchor_Yash"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-6 text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path + link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-6 text-foreground">
              Anchoring
            </h4>
            <ul className="space-y-3">
              {anchoringServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="text-lg font-display font-semibold mb-4 mt-8 text-foreground">
              Event Services
            </h4>
            <ul className="space-y-3">
              {eventServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-6 text-foreground">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+917737877978"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  +91 77378 77978
                </a>
              </li>
              <li>
                <a
                  href="mailto:yashsoni7978@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 text-primary" />
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
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Anchor Yash. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                to="/privacy"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
