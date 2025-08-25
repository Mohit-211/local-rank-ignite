import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Globe, MapPin, Target, Users, TrendingUp, Award } from "lucide-react";

const About = () => {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              About <span className="text-gradient">LocalSEO Pro</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From Toronto to Mumbai, we're helping local businesses dominate Google Maps 
              and attract more customers through proven Local SEO strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  LocalSEO Pro began in 2019 in Toronto, Canada, with a simple mission: help local 
                  businesses get found by their ideal customers. What started as a small team serving 
                  Canadian SMBs quickly grew into a specialized Local SEO agency with proven results.
                </p>
                <p>
                  After helping over 500+ Canadian businesses dominate their local markets, we recognized 
                  a massive opportunity in India's rapidly growing digital landscape. Indian businesses 
                  deserve the same world-class Local SEO expertise that we've perfected in North America.
                </p>
                <p>
                  Today, we bring Canadian-quality Local SEO services to Indian businesses, combining 
                  international best practices with local market understanding to deliver exceptional results.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-soft-bg border-0">
                <CardContent className="p-6 text-center">
                  <Globe className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <div className="text-2xl font-bold text-foreground mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Businesses Served</div>
                </CardContent>
              </Card>
              <Card className="bg-soft-bg border-0">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <div className="text-2xl font-bold text-foreground mb-1">2</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </CardContent>
              </Card>
              <Card className="bg-soft-bg border-0">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <div className="text-2xl font-bold text-foreground mb-1">300%</div>
                  <div className="text-sm text-muted-foreground">Avg. Growth</div>
                </CardContent>
              </Card>
              <Card className="bg-soft-bg border-0">
                <CardContent className="p-6 text-center">
                  <Award className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <div className="text-2xl font-bold text-foreground mb-1">5</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-soft-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Target className="w-12 h-12 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We help small and medium businesses dominate local searches, get found on Google Maps, 
              and grow through data-driven Local SEO strategies that deliver measurable ROI.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Local Dominance</h3>
                <p className="text-sm text-muted-foreground">
                  Help businesses rank #1 in Google Map Pack for their target keywords
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Customer Growth</h3>
                <p className="text-sm text-muted-foreground">
                  Attract more qualified local customers ready to buy your products or services
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Measurable ROI</h3>
                <p className="text-sm text-muted-foreground">
                  Deliver transparent reporting and proven results that impact your bottom line
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose LocalSEO Pro?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine international expertise with local execution to deliver 
              results that matter to your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-brand hover:shadow-brand-hover transition-all duration-300">
              <CardContent className="p-8">
                <Globe className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Canadian Expertise, Indian Scalability
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Proven strategies from the Canadian market, adapted and scaled 
                  for the unique opportunities in the Indian business landscape.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-brand hover:shadow-brand-hover transition-all duration-300">
              <CardContent className="p-8">
                <Award className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Clear Deliverables, Transparent Reporting
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  No black-box tactics. Every month, you'll receive detailed reports 
                  showing exactly what we've done and the results we've achieved.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-brand hover:shadow-brand-hover transition-all duration-300">
              <CardContent className="p-8">
                <TrendingUp className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Proven ROI-Driven Process
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our systematic approach has helped 500+ businesses increase their 
                  local visibility and customer acquisition by an average of 300%.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-soft-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Local SEO experts dedicated to your business growth
            </p>
            
            <div className="max-w-2xl mx-auto">
              <Card className="border-0 shadow-brand">
                <CardContent className="p-12 text-center">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Experienced Local SEO Specialists
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our team combines years of Local SEO expertise with deep understanding 
                    of both Canadian and Indian markets. We're passionate about helping 
                    local businesses succeed in the digital age.
                  </p>
                  <div className="mt-6 text-sm text-muted-foreground">
                    <em>Founder and team profiles coming soon</em>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to be Found?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful businesses that trust us to dominate their local search results.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-soft text-lg px-8 py-6"
            >
              Book a Free Local SEO Audit Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;