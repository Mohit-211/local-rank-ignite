import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Search, Users, TrendingUp } from "lucide-react";

const ValueProposition = () => {
  const benefits = [
    {
      icon: MapPin,
      title: "Local Visibility",
      description: "Appear in Google Map Pack when customers search for businesses like yours nearby.",
      stat: "3x more clicks"
    },
    {
      icon: Search,
      title: "Intent-Based Traffic",
      description: "Capture customers actively searching for your services in your area.",
      stat: "Higher conversion"
    },
    {
      icon: Users,
      title: "Trust & Credibility",
      description: "Build trust with verified business listings and positive reviews.",
      stat: "90% trust factor"
    },
    {
      icon: TrendingUp,
      title: "Measurable ROI",
      description: "Track calls, visits, and bookings directly from your local SEO efforts.",
      stat: "Clear metrics"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Why Local SEO Beats <span className="text-gradient">Generic SEO</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            While traditional SEO targets broad keywords, Local SEO connects you with 
            customers in your neighborhood who are ready to buy.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-brand transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="text-primary font-semibold">{benefit.stat}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Visual */}
        <div className="bg-secondary rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Traditional SEO vs Local SEO</h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span>Search Volume</span>
                  <div className="flex space-x-2">
                    <div className="text-sm text-muted-foreground">High Competition</div>
                    <div className="text-sm font-semibold text-primary">Local Intent</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span>Conversion Rate</span>
                  <div className="flex space-x-2">
                    <div className="text-sm text-muted-foreground">2-3%</div>
                    <div className="text-sm font-semibold text-primary">15-20%</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span>Time to Results</span>
                  <div className="flex space-x-2">
                    <div className="text-sm text-muted-foreground">6-12 months</div>
                    <div className="text-sm font-semibold text-primary">2-4 months</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-xl p-8 shadow-soft">
                <div className="text-4xl font-bold text-primary mb-2">46%</div>
                <div className="text-muted-foreground mb-4">of Google searches have local intent</div>
                <div className="text-sm text-primary font-medium">That's 8 billion searches per month!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;