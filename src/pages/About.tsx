import { Recycle, Users, Target, DollarSign, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import recyclingImage from "@/assets/recycling-facility.jpg";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Environmental Protection",
      description: "Every device we collect is processed with the highest environmental standards, preventing toxic materials from entering landfills."
    },
    {
      icon: Users,
      title: "Community First",
      description: "We believe in making e-waste recycling accessible to everyone by providing completely free pickup services for households."
    },
    {
      icon: Award,
      title: "Certified Excellence",
      description: "Our recycling partners are all certified and audited to ensure responsible processing and data security."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-accent/30 to-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              About <span className="text-primary">EcoWaste Connect</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're revolutionizing e-waste management by making responsible recycling 
              accessible, convenient, and completely free for households everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <img
                src={recyclingImage}
                alt="Recycling facility"
                className="rounded-lg shadow-professional w-full hover-lift"
              />
            </div>
            <div className="space-y-6 animate-fade-up">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To create a sustainable future by making e-waste recycling effortless and accessible 
                  for every household, while building a profitable business through strategic partnerships 
                  with certified recyclers and refurbishers.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A world where electronic waste is seen not as a problem, but as a valuable resource 
                  that creates economic opportunities while protecting our environment for future generations.
                </p>
              </div>
              <Link to="/schedule">
                <Button variant="cta" size="lg">
                  Join Our Mission
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="section-padding bg-accent/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              How We Make It <span className="text-primary">Free for You</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our sustainable business model ensures free pickup for households while creating value for everyone
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 hover-lift animate-scale-in">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">For Households</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                We provide completely free pickup of your electronic waste. No hidden fees, 
                no charges, no hassle. Just schedule and we'll handle the rest.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Free pickup scheduling</li>
                <li>• Secure data destruction</li>
                <li>• Convenient doorstep service</li>
                <li>• Environmental impact certificate</li>
              </ul>
            </Card>

            <Card className="p-8 hover-lift animate-scale-in">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-secondary/10">
                  <DollarSign className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Revenue Model</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                We earn revenue through partnerships with certified recyclers, refurbishers, 
                and manufacturers who purchase the collected materials.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Material sales to recyclers</li>
                <li>• Refurbishment partnerships</li>
                <li>• Corporate CSR programs</li>
                <li>• Manufacturer take-back programs</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from pickup to processing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover-lift animate-scale-in">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of households who have already made the switch to responsible e-waste management.
            </p>
            <Link to="/schedule">
              <Button variant="professional" size="lg" className="text-lg px-8 py-4">
                Schedule Your Free Pickup
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;