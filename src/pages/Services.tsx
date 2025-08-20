import { Home, Building2, Recycle, Shield, Clock, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import pickupImage from "@/assets/pickup-service.jpg";

const Services = () => {
  const householdServices = [
    "Smartphones & Tablets",
    "Laptops & Computers", 
    "TVs & Monitors",
    "Gaming Consoles",
    "Printers & Scanners",
    "Small Appliances",
    "Cables & Chargers",
    "Audio Equipment"
  ];

  const businessServices = [
    "Bulk IT Equipment Disposal",
    "Data Center Decommissioning", 
    "Corporate CSR Partnerships",
    "Secure Data Destruction",
    "Asset Recovery Programs",
    "Compliance Documentation",
    "Scheduled Pickup Routes",
    "Volume-Based Partnerships"
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Certified & Secure",
      description: "All our recycling partners are certified with proper data destruction protocols."
    },
    {
      icon: Clock,
      title: "Convenient Scheduling",
      description: "Book online and choose a pickup time that works for your schedule."
    },
    {
      icon: Award,
      title: "Environmental Impact",
      description: "Receive certificates showing the positive environmental impact of your recycling."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-accent/30 to-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive e-waste management solutions for households and businesses, 
              designed to make responsible recycling simple and accessible.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Household Services */}
            <Card className="p-8 hover-lift animate-scale-in">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-primary/10">
                  <Home className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">For Households</h2>
                  <p className="text-primary font-semibold">100% FREE Pickup</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">
                We make it easy for families to responsibly dispose of their electronic waste. 
                Simply schedule a pickup, and we'll collect your items at no charge.
              </p>

              <div className="space-y-4 mb-6">
                <h3 className="font-semibold text-foreground">Items We Accept:</h3>
                <div className="grid grid-cols-2 gap-2">
                  {householdServices.map((service, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link to="/schedule">
                <Button variant="cta" size="lg" className="w-full">
                  Schedule Free Pickup
                </Button>
              </Link>
            </Card>

            {/* Business Services */}
            <Card className="p-8 hover-lift animate-scale-in">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-secondary/10">
                  <Building2 className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">For Businesses</h2>
                  <p className="text-secondary font-semibold">Partnership Solutions</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Comprehensive e-waste management solutions for organizations looking to enhance 
                their sustainability programs and meet corporate responsibility goals.
              </p>

              <div className="space-y-4 mb-6">
                <h3 className="font-semibold text-foreground">Services We Offer:</h3>
                <div className="grid grid-cols-1 gap-2">
                  {businessServices.map((service, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link to="/contact">
                <Button variant="secondary" size="lg" className="w-full">
                  Request Partnership Info
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-accent/20">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              How It <span className="text-primary">Works</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, secure, and sustainable e-waste pickup in just three easy steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-scale-in">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Schedule Online</h3>
              <p className="text-muted-foreground">
                Use our simple form to schedule a pickup time that works for you
              </p>
            </div>

            <div className="text-center animate-scale-in">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">We Collect</h3>
              <p className="text-muted-foreground">
                Our certified team arrives at your location and safely collects your e-waste
              </p>
            </div>

            <div className="text-center animate-scale-in">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Responsible Recycling</h3>
              <p className="text-muted-foreground">
                Items are processed by certified recyclers with full environmental compliance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <img
                src={pickupImage}
                alt="Professional pickup service"
                className="rounded-lg shadow-professional w-full hover-lift"
              />
            </div>
            <div className="space-y-8 animate-fade-up">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">
                  Why Choose <span className="text-primary">EcoWaste Connect</span>?
                </h2>
                <p className="text-lg text-muted-foreground">
                  We're not just another waste management company. We're your partners 
                  in creating a sustainable future.
                </p>
              </div>

              <div className="space-y-6">
                {whyChooseUs.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/schedule">
                <Button variant="cta" size="lg">
                  Get Started Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Recycle Responsibly?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join the sustainable movement with free, convenient e-waste pickup services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/schedule">
                <Button variant="professional" size="lg" className="text-lg px-8 py-4">
                  Schedule Pickup Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;