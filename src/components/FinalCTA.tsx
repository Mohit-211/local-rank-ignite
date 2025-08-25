import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to be Found?
            <br />
            <span className="text-white/90">Let's Get Started</span>
          </h2>
          
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Join 500+ local businesses that trust us to dominate their local search results. 
            Your competition is already ranking - don't get left behind.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-soft text-lg px-8 py-6"
            >
              Get Your Free SEO Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6"
            >
              Schedule a Call
              <Phone className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 text-white/80">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-5 h-5" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-5 h-5" />
              <span>hello@localseopro.in</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Available 24/7</span>
            </div>
          </div>

          {/* Guarantee */}
          <div className="mt-12 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
            <div className="text-white font-semibold mb-2">Our Guarantee</div>
            <div className="text-white/80 text-sm">
              See improvement in your local rankings within 90 days, or we'll work for free 
              until you do. That's our commitment to your success.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;