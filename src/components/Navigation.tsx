import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gradient">LocalSEO Pro</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="/about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="/services" className="text-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="/industries" className="text-foreground hover:text-primary transition-colors">
                Industries
              </a>
              <a href="/blog" className="text-foreground hover:text-primary transition-colors">
                Blog
              </a>
              <a href="/pricing" className="text-foreground hover:text-primary transition-colors">
                Pricing
              </a>
              <a href="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-brand">
              Free SEO Audit
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-border">
              <a
                href="/"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
              >
                Home
              </a>
              <a
                href="/about"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="/services"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
              >
                Services
              </a>
              <a
                href="/industries"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
              >
                Industries
              </a>
              <a
                href="/blog"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
              >
                Blog
              </a>
              <a
                href="/pricing"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
              >
                Pricing
              </a>
              <a
                href="/contact"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
              <div className="pt-2">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Free SEO Audit
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;