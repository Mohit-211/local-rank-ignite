import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, 
  Scale, 
  Utensils, 
  Dumbbell, 
  Wrench, 
  GraduationCap,
  ArrowRight
} from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Stethoscope,
      title: "Healthcare",
      description: "Dentists, doctors, physiotherapists",
      challenge: "Compete with large medical networks",
      solution: "Local authority in specific areas"
    },
    {
      icon: Scale,
      title: "Legal Services",
      description: "Lawyers, notaries, law firms",
      challenge: "High competition for legal terms",
      solution: "Dominate local practice areas"
    },
    {
      icon: Utensils,
      title: "Restaurants & Cafes",
      description: "Food service businesses",
      challenge: "Standing out in crowded markets",
      solution: "Local food discovery optimization"
    },
    {
      icon: Dumbbell,
      title: "Fitness & Wellness",
      description: "Gyms, yoga studios, spas",
      challenge: "Seasonal demand fluctuations",
      solution: "Year-round local visibility"
    },
    {
      icon: Wrench,
      title: "Home Services",
      description: "Plumbers, electricians, contractors",
      challenge: "Emergency service competition",
      solution: "Instant local discoverability"
    },
    {
      icon: GraduationCap,
      title: "Education & Training",
      description: "Schools, tutoring, courses",
      challenge: "Trust and credibility factors",
      solution: "Local reputation management"
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Industries <span className="text-gradient">We Serve</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Specialized Local SEO strategies tailored for different business types. 
            We understand your industry's unique challenges.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {industries.map((industry, index) => (
            <Card key={index} className="group hover:shadow-brand transition-all duration-300 cursor-pointer">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <industry.icon className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{industry.title}</h3>
                    <p className="text-sm text-muted-foreground">{industry.description}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-medium text-muted-foreground mb-1">Challenge:</div>
                    <div className="text-sm">{industry.challenge}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-primary mb-1">Our Solution:</div>
                    <div className="text-sm">{industry.solution}</div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <Button variant="ghost" className="w-full justify-between group">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl p-8 md:p-12 shadow-soft">
          <h3 className="text-2xl font-bold mb-4">
            Don't See Your Industry? <span className="text-gradient">We Can Help</span>
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every local business faces unique challenges. Our team creates custom Local SEO 
            strategies that work for your specific industry and market.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-brand">
            Discuss Your Industry
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Industries;