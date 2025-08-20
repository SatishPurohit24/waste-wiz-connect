import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Recycle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Schedule Pickup", path: "/schedule" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-professional"
          : "bg-transparent"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-primary shadow-soft group-hover:shadow-professional transition-all duration-300">
              <Recycle className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">EcoWaste</span>
              <span className="text-xs text-muted-foreground">Connect</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "relative font-medium transition-colors duration-200",
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                )}
              >
                {item.name}
                {location.pathname === item.path && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/schedule">
              <Button variant="cta" size="lg">
                Schedule Pickup
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-professional border-t border-border">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block py-2 font-medium transition-colors duration-200",
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <Link to="/schedule" onClick={() => setIsOpen(false)}>
                  <Button variant="cta" size="lg" className="w-full">
                    Schedule Pickup
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;