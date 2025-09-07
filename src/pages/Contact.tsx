import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [locationCheck, setLocationCheck] = useState({
    location: "",
    result: null as "available" | "unavailable" | null,
    isChecking: false
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const handleLocationCheck = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!locationCheck.location.trim()) {
      toast({
        title: "Please enter a location",
        description: "Enter your city or area to check service availability.",
        variant: "destructive"
      });
      return;
    }

    setLocationCheck(prev => ({ ...prev, isChecking: true }));

    // Simulate API call with setTimeout
    setTimeout(() => {
      const location = locationCheck.location.toLowerCase().trim();
      const isNagpur = location.includes('nagpur');
      
      setLocationCheck(prev => ({
        ...prev,
        result: isNagpur ? "available" : "unavailable",
        isChecking: false
      }));
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-accent/30 to-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions about our e-waste pickup services? Need to discuss a business partnership? 
              We're here to help and ready to make a difference together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-6 hover-lift">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Phone</h3>
                </div>
                <p className="text-muted-foreground mb-2">Call us for immediate assistance</p>
                <a 
                  href="tel:9509670286" 
                  className="text-lg font-semibold text-primary hover:text-primary-glow transition-colors"
                >
                  9509670286
                </a>
              </Card>

              <Card className="p-6 hover-lift">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Email</h3>
                </div>
                <p className="text-muted-foreground mb-2">Send us a detailed message</p>
                <a 
                  href="mailto:info@ecowasteconnect.com" 
                  className="text-lg font-semibold text-primary hover:text-primary-glow transition-colors"
                >
                  info@ecowasteconnect.com
                </a>
              </Card>

              <Card className="p-6 hover-lift">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Location</h3>
                </div>
                <p className="text-muted-foreground mb-2">Service Area</p>
                <p className="text-lg font-semibold text-foreground">
                  Greater Metropolitan Area<br />
                  Serving all surrounding counties
                </p>
              </Card>

              <Card className="p-6 hover-lift">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Hours</h3>
                </div>
                <div className="space-y-1 text-muted-foreground">
                  <p><strong>Monday - Friday:</strong> 8:00 AM - 8:00 PM</p>
                  <p><strong>Saturday:</strong> 9:00 AM - 6:00 PM</p>
                  <p><strong>Sunday:</strong> 10:00 AM - 4:00 PM</p>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 shadow-professional">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground">Send Us a Message</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="(555) 123-4567"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        placeholder="What's this about?"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us how we can help you..."
                      className="mt-1"
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" variant="cta" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-accent/20">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Our Service <span className="text-primary">Area</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We proudly serve the greater metropolitan area and surrounding counties with our free e-waste pickup services
            </p>
          </div>

          {/* Location Availability Checker */}
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 text-center shadow-professional">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Check Service Availability</h3>
              <p className="text-muted-foreground mb-6">
                Enter your location to see if we can serve you with our free e-waste pickup service.
              </p>

              <form onSubmit={handleLocationCheck} className="max-w-md mx-auto mb-6">
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Enter your city (e.g., Nagpur)"
                    value={locationCheck.location}
                    onChange={(e) => setLocationCheck(prev => ({ ...prev, location: e.target.value }))}
                    className="flex-1"
                  />
                  <Button 
                    type="submit" 
                    variant="cta" 
                    disabled={locationCheck.isChecking}
                  >
                    {locationCheck.isChecking ? "Checking..." : "Check"}
                  </Button>
                </div>
              </form>

              {locationCheck.result && (
                <div className={`p-6 rounded-lg mb-4 ${
                  locationCheck.result === "available" 
                    ? "bg-green-50 border border-green-200" 
                    : "bg-orange-50 border border-orange-200"
                }`}>
                  {locationCheck.result === "available" ? (
                    <div className="text-center">
                      <div className="text-2xl mb-2">🎉</div>
                      <h4 className="text-xl font-bold text-green-700 mb-2">
                        Great news! We serve Nagpur!
                      </h4>
                      <p className="text-green-600">
                        We'll pick up your e-waste right from your doorstep. Schedule your free pickup today and join us in making Nagpur a greener city!
                      </p>
                      <Button variant="cta" size="lg" className="mt-4" onClick={() => {
                        // Scroll to contact form or redirect to schedule page
                        window.location.href = '/schedule';
                      }}>
                        Schedule Free Pickup Now
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="text-2xl mb-2">🌱</div>
                      <h4 className="text-xl font-bold text-orange-700 mb-2">
                        Service expansion coming soon!
                      </h4>
                      <p className="text-orange-600 mb-4">
                        We're currently serving Nagpur but are actively working to expand our eco-friendly e-waste pickup service to more cities. Your interest helps us prioritize new locations!
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button variant="outline" onClick={() => {
                          setFormData(prev => ({ ...prev, subject: `Service expansion request for ${locationCheck.location}` }));
                          document.getElementById('message')?.scrollIntoView({ behavior: 'smooth' });
                        }}>
                          Request Service in {locationCheck.location}
                        </Button>
                        <Button variant="cta" onClick={() => window.location.href = '/about'}>
                          Learn About Our Mission
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="bg-muted/30 rounded-lg p-8">
                <p className="text-muted-foreground">
                  💡 Currently serving Nagpur with free doorstep e-waste pickup. Help us expand by sharing our mission!
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-3 text-foreground">Is pickup really free for households?</h3>
              <p className="text-muted-foreground">
                Yes! Our residential pickup service is completely free with no hidden charges. 
                We earn revenue through partnerships with certified recyclers.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold mb-3 text-foreground">What items do you accept?</h3>
              <p className="text-muted-foreground">
                We accept all types of electronic waste including computers, phones, TVs, 
                printers, and small appliances. Contact us for specific items.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold mb-3 text-foreground">How quickly can you pick up?</h3>
              <p className="text-muted-foreground">
                We typically schedule pickups within 2-5 business days. Emergency pickups 
                may be available for businesses with special arrangements.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold mb-3 text-foreground">Do you provide data destruction?</h3>
              <p className="text-muted-foreground">
                Yes, all devices receive secure data destruction according to industry standards. 
                We provide certificates of data destruction upon request.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;