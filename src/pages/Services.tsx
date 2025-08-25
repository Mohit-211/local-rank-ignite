import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, MapPin, Search, Star, Megaphone, CheckCircle, Target, Globe, TrendingUp } from "lucide-react";

const Services = () => {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Our Services: <span className="text-gradient">Grow Your Business</span> with Local SEO
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We provide ROI-focused solutions designed specifically for local businesses 
              ready to dominate their market and attract more customers.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Local SEO Optimization */}
            <Card className="border-0 shadow-brand hover:shadow-brand-hover transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Local SEO Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Dominate Google Maps and local search results with our comprehensive Local SEO strategies.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Google Business Profile (GBP) setup & optimization</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">NAP consistency (Name, Address, Phone across directories)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Local keyword targeting & citation building</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Google Map Pack ranking strategies</span>
                  </li>
                </ul>
                <Button className="w-full">
                  Learn More About Local SEO
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Website SEO Support */}
            <Card className="border-0 shadow-brand hover:shadow-brand-hover transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Website SEO Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Optimize your website to support and amplify your local search presence.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">On-page SEO (meta tags, headings, keywords)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Technical SEO (site speed, mobile optimization, sitemaps)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Internal linking + content optimization</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Local schema markup implementation</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Optimize My Website
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Reputation & Reviews Management */}
            <Card className="border-0 shadow-brand hover:shadow-brand-hover transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Reputation & Reviews Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Build trust and credibility with a strategic approach to online reputation management.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Set up automated review request systems</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Help businesses get more 5-star Google reviews</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Monitor and respond to online reviews</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Reputation crisis management</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Manage My Reputation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Google Ads & Local Landing Pages */}
            <Card className="border-0 shadow-brand hover:shadow-brand-hover transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Megaphone className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Google Ads & Local Landing Pages</CardTitle>
                <div className="text-sm text-primary font-medium">Add-on Services</div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Accelerate your results with targeted local advertising and optimized landing pages.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Local search ads setup & optimization</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">High-converting local landing pages</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Location-based targeting strategies</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Campaign management & optimization</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Add Paid Advertising
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-soft-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Work With LocalSEO Pro?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven methodology and transparent approach deliver measurable results 
              that impact your bottom line.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Transparent Process, Measurable Results
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                No black-box tactics. Every strategy is clearly explained, and every result 
                is tracked and reported with full transparency.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Faster ROI Than Traditional SEO
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Local SEO delivers results faster than traditional SEO. Most clients see 
                improvements in Google Maps rankings within 30-60 days.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                International Expertise + Local Execution
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Canadian-proven strategies adapted for the Indian market, combining 
                international best practices with local market insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Proven Process</h2>
            <p className="text-xl text-muted-foreground">
              A systematic approach that has delivered results for 500+ businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Local SEO Audit", description: "Comprehensive analysis of your current local presence and opportunities" },
              { step: "02", title: "Strategy Development", description: "Custom Local SEO strategy tailored to your business and market" },
              { step: "03", title: "Implementation", description: "Execute optimization across all local search channels and directories" },
              { step: "04", title: "Monitor & Optimize", description: "Continuous monitoring, reporting, and optimization for maximum ROI" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Let's Put Your Business on the Map
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Ready to dominate local search and attract more customers? 
              Start with a comprehensive analysis of your current local SEO performance.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-soft text-lg px-8 py-6"
            >
              Request a Free Local SEO Audit Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <div className="mt-6 text-white/70 text-sm">
              ✓ No obligations ✓ Detailed 20-page report ✓ Actionable recommendations
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;