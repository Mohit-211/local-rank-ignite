import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Rajesh Sharma",
      business: "Smile Dental Clinic, Mumbai",
      image: "👨‍⚕️",
      rating: 5,
      text: "LocalSEO Pro helped us rank #1 in Google Maps for 'dentist Mumbai'. We've seen a 400% increase in appointment bookings from local searches.",
      results: "400% more bookings"
    },
    {
      name: "Priya Patel",
      business: "Patel Law Associates, Delhi",
      image: "👩‍💼", 
      rating: 5,
      text: "Their local SEO strategy brought us from page 3 to the Map Pack within 3 months. The quality of leads has dramatically improved.",
      results: "Map Pack in 3 months"
    },
    {
      name: "Arjun Fitness",
      business: "PowerGym, Bangalore",
      image: "💪",
      rating: 5,
      text: "We struggled to compete with big gym chains. Now we consistently appear in local searches and our membership has doubled.",
      results: "2x membership growth"
    }
  ];

  const trustMarkers = [
    { metric: "500+", label: "Satisfied Clients" },
    { metric: "98%", label: "Client Retention" },
    { metric: "150+", label: "Cities Covered" },
    { metric: "4.9/5", label: "Average Rating" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Trusted by <span className="text-gradient">Local Businesses</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Real stories from real businesses that transformed their local presence with our help.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-brand transition-all duration-300">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary mb-6" />
                
                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* Results Badge */}
                <div className="bg-secondary rounded-lg p-3 mb-6">
                  <div className="text-primary font-semibold text-center">
                    {testimonial.results}
                  </div>
                </div>
                
                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{testimonial.image}</div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.business}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Metrics */}
        <div className="bg-secondary rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustMarkers.map((marker, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {marker.metric}
                </div>
                <div className="text-muted-foreground text-sm">
                  {marker.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Trust Elements */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-8">
            Recognized by Industry Leaders
          </h3>
          <div className="flex justify-center items-center space-x-12 text-muted-foreground">
            <div className="text-lg font-medium">Google Partner</div>
            <div className="text-lg font-medium">Certified Specialists</div>
            <div className="text-lg font-medium">ISO Certified</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;