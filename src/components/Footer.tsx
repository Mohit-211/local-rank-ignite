import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-gradient mb-4">LocalSEO Pro</h3>
            <p className="text-background/80 mb-6 leading-relaxed">
              Helping local businesses dominate Google Maps and local search results 
              across India with proven SEO strategies.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-background/80">
              <li><a href="/services/local-seo" className="hover:text-primary transition-colors">Local SEO Optimization</a></li>
              <li><a href="/services/google-business" className="hover:text-primary transition-colors">Google Business Profile</a></li>
              <li><a href="/services/reviews" className="hover:text-primary transition-colors">Review Management</a></li>
              <li><a href="/services/website-seo" className="hover:text-primary transition-colors">Website SEO</a></li>
              <li><a href="/services/citations" className="hover:text-primary transition-colors">Local Citations</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Industries</h4>
            <ul className="space-y-3 text-background/80">
              <li><a href="/industries/healthcare" className="hover:text-primary transition-colors">Healthcare</a></li>
              <li><a href="/industries/legal" className="hover:text-primary transition-colors">Legal Services</a></li>
              <li><a href="/industries/restaurants" className="hover:text-primary transition-colors">Restaurants</a></li>
              <li><a href="/industries/fitness" className="hover:text-primary transition-colors">Fitness & Wellness</a></li>
              <li><a href="/industries/home-services" className="hover:text-primary transition-colors">Home Services</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-4 text-background/80">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>hello@localseopro.in</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <div>
                  <div>Mumbai, India</div>
                  <div className="text-sm">Toronto, Canada</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-background/60">
            <div className="text-sm mb-4 md:mb-0">
              © 2024 LocalSEO Pro. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="/sitemap" className="hover:text-primary transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;