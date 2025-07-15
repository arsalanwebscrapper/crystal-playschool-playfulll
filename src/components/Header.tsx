import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Activities", href: "#activities" },
    { name: "Gallery", href: "#gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 w-full z-50 glass-card backdrop-blur-lg border-b border-white/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <div>
              <h1 className="font-display font-bold text-xl gradient-text">
                Crystal Play School
              </h1>
              <p className="text-xs text-muted-foreground">Where Learning Meets Fun</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+15551234567" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+1 (555) 123-PLAY</span>
            </a>
            <Button className="bg-gradient-primary text-white border-0 px-6 py-2 rounded-xl font-semibold hover:scale-105 transition-transform">
              Enroll Now
            </Button>
            <a 
              href="/admin/login" 
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Admin
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-muted/50 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-white/20">
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/20 flex flex-col gap-3">
                <a 
                  href="tel:+15551234567" 
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">+1 (555) 123-PLAY</span>
                </a>
                <Button className="bg-gradient-primary text-white border-0 py-3 rounded-xl font-semibold">
                  Enroll Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;