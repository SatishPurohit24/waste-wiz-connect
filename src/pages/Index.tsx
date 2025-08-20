import { CheckCircle, Recycle, Truck, Shield, Users, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import pickupImage from "@/assets/pickup-service.jpg";
import recyclingImage from "@/assets/recycling-facility.jpg";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "100% Free for Households",
      description: "No charges, no hidden fees. We make responsible e-waste disposal accessible to everyone."
    },
    {
      icon: Truck,
      title: "Convenient Pickup",
      description: "Schedule online and we'll collect your e-waste at your doorstep at a time that works for you."
    },
    {
      icon: Recycle,
      title: "Certified Recycling",
      description: "All items are processed by certified partners with full environmental compliance and data security."
    }
  ];

  const stats = [
    { number: "50,000+", label: "Devices Recycled" },
    { number: "15,000+", label: "Happy Households" },
    { number: "25 Tons", label: "E-Waste Diverted" },
    { number: "100%", label: "Satisfaction Rate" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Problem & Solution */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                The E-Waste <span className="text-destructive">Problem</span> is Growing
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Every year, millions of electronic devices end up in landfills, 
                  leaching toxic materials into our soil and water systems.
                </p>
                <p>
                  Meanwhile, valuable materials like gold, silver, and rare earth elements 
                  are wasted instead of being recovered and reused.
                </p>
                <p className="text-primary font-semibold">
                  But there's a better way. Our free pickup service makes responsible 
                  e-waste recycling convenient for every household.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/about">
                  <Button variant="professional" size="lg">
                    Learn More About Our Mission
                  </Button>
                </Link>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src={recyclingImage}
                alt="Electronic recycling facility"
                className="rounded-lg shadow-professional w-full hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-accent/20">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Why Choose <span className="text-primary">EcoWaste Connect</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We've designed our service to make responsible e-waste disposal as easy as possible
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover-lift animate-scale-in">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Services for <span className="text-primary">Everyone</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 hover-lift animate-scale-in">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-primary/10">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Households</h3>
                  <p className="text-primary font-semibold">Completely Free</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Get rid of your old electronics responsibly with our free pickup service. 
                Perfect for families looking to declutter while protecting the environment.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Free doorstep pickup</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Secure data destruction</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Environmental impact certificate</span>
                </li>
              </ul>
              <Link to="/schedule">
                <Button variant="cta" size="lg" className="w-full">
                  Schedule Free Pickup
                </Button>
              </Link>
            </Card>

            <Card className="p-8 hover-lift animate-scale-in">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-secondary/10">
                  <Building2 className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Businesses</h3>
                  <p className="text-secondary font-semibold">Partnership Solutions</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Comprehensive programs for organizations looking to enhance their 
                sustainability initiatives and meet corporate responsibility goals.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  <span className="text-sm text-muted-foreground">Bulk pickup services</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  <span className="text-sm text-muted-foreground">CSR partnership programs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  <span className="text-sm text-muted-foreground">Compliance documentation</span>
                </li>
              </ul>
              <Link to="/services">
                <Button variant="secondary" size="lg" className="w-full">
                  Learn About Partnerships
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Our Environmental <span className="text-primary-glow">Impact</span>
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Together, we're making a real difference for our planet's future
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-up">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  How It <span className="text-primary">Works</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Getting started with responsible e-waste disposal is simple and completely free
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Schedule Online</h3>
                    <p className="text-muted-foreground">
                      Use our simple form to schedule a pickup time that works for you. 
                      Tell us what items you have and when you'd like them collected.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">We Collect</h3>
                    <p className="text-muted-foreground">
                      Our certified team arrives at your location with proper equipment 
                      and safely collects all your electronic waste items.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Responsible Processing</h3>
                    <p className="text-muted-foreground">
                      Items are processed by our certified recycling partners with full 
                      environmental compliance and secure data destruction.
                    </p>
                  </div>
                </div>
              </div>

              <Link to="/schedule">
                <Button variant="cta" size="lg">
                  Schedule Your Free Pickup
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="animate-scale-in">
              <img
                src={pickupImage}
                alt="Professional e-waste pickup service"
                className="rounded-lg shadow-professional w-full hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-accent/20">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Ready to Make a <span className="text-primary">Difference</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of households who have already made the switch to responsible e-waste management. 
              Schedule your free pickup today and help us build a more sustainable future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/schedule">
                <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                  Schedule Free Pickup Now
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="professional" size="lg" className="text-lg px-8 py-4">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
