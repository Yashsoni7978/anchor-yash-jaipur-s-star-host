import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { 
    name: "Services", 
    path: "#",
    submenu: [
      { name: "Anchoring", path: "/anchoring" },
      { name: "Event Management", path: "/event-management" },
      { name: "Event Designing", path: "/event-designing" },
    ]
  },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenSubmenu(null);
  }, [location]);

  const isActive = (path: string) => {
    if (path === "#") return false;
    return location.pathname === path;
  };

  const isSubmenuActive = (submenu: { name: string; path: string }[]) => {
    return submenu.some(item => location.pathname === item.path);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-display font-bold">
              <span className="text-gradient-gold">Anchor</span>
              <span className="text-foreground ml-2">Yash</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.path + link.name} className="relative group">
                {link.submenu ? (
                  <button
                    className={cn(
                      "px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg flex items-center gap-1",
                      isSubmenuActive(link.submenu)
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={cn(
                      "px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg block",
                      isActive(link.path)
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                  >
                    {link.name}
                  </Link>
                )}
                
                {/* Dropdown */}
                {link.submenu && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-card border border-border rounded-xl shadow-xl py-2 min-w-[200px]">
                      {link.submenu.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className={cn(
                            "block px-4 py-2 text-sm transition-colors",
                            isActive(subItem.path)
                              ? "text-primary bg-primary/10"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted"
                          )}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://instagram.com/anchor_yash_official"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <Link to="/contact">
              <Button variant="gold" size="sm">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-20 bg-background/98 backdrop-blur-xl transition-all duration-500 z-40",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <div className="container-custom py-8">
          <div className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <div key={link.path + link.name}>
                {link.submenu ? (
                  <>
                    <button
                      onClick={() => setOpenSubmenu(openSubmenu === link.name ? null : link.name)}
                      className={cn(
                        "w-full px-4 py-4 text-lg font-medium transition-all duration-300 rounded-lg border-b border-border/50 flex items-center justify-between",
                        isSubmenuActive(link.submenu)
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:bg-muted"
                      )}
                    >
                      {link.name}
                      <ChevronDown className={cn(
                        "w-5 h-5 transition-transform",
                        openSubmenu === link.name && "rotate-180"
                      )} />
                    </button>
                    {openSubmenu === link.name && (
                      <div className="pl-4 py-2 space-y-1">
                        {link.submenu.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className={cn(
                              "block px-4 py-3 text-base transition-colors rounded-lg",
                              isActive(subItem.path)
                                ? "text-primary bg-primary/10"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted"
                            )}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={cn(
                      "px-4 py-4 text-lg font-medium transition-all duration-300 rounded-lg border-b border-border/50 block",
                      isActive(link.path)
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:bg-muted"
                    )}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="flex gap-3 mt-6">
              <a
                href="https://instagram.com/anchor_yash_official"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="goldOutline" className="w-full">
                  <Instagram className="w-5 h-5 mr-2" />
                  Follow
                </Button>
              </a>
              <Link to="/contact" className="flex-1">
                <Button variant="gold" className="w-full">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
