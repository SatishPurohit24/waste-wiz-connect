import { useState } from "react";
import { Calendar, Clock, Phone, Mail, MapPin, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Schedule = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    itemType: "",
    itemDetails: "",
    preferredDate: "",
    preferredTime: "",
    specialInstructions: ""
  });

  const itemTypes = [
    "Smartphones & Tablets",
    "Laptops & Computers",
    "TVs & Monitors", 
    "Gaming Consoles",
    "Printers & Scanners",
    "Small Appliances",
    "Audio Equipment",
    "Mixed Electronics",
    "Other (specify in details)"
  ];

  const timeSlots = [
    "9:00 AM - 12:00 PM",
    "12:00 PM - 3:00 PM", 
    "3:00 PM - 6:00 PM",
    "6:00 PM - 8:00 PM"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.address || !formData.itemType || !formData.preferredDate || !formData.preferredTime) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Since backend integration requires Supabase, we'll show a success message
    toast({
      title: "Pickup Scheduled Successfully!",
      description: `Thank you ${formData.name}! We'll contact you at ${formData.phone} to confirm your pickup on ${formData.preferredDate} during ${formData.preferredTime}.`,
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      zipCode: "",
      itemType: "",
      itemDetails: "",
      preferredDate: "",
      preferredTime: "",
      specialInstructions: ""
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-accent/30 to-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Schedule Your <span className="text-primary">Free Pickup</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to responsibly dispose of your electronic waste? Schedule a convenient 
              pickup time and we'll handle the rest - completely free for households.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 shadow-professional">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                      <Phone className="w-6 h-6 text-primary" />
                      Contact Information
                    </h2>
                    
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
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="(555) 123-4567"
                          className="mt-1"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  {/* Address Information */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                      <MapPin className="w-6 h-6 text-primary" />
                      Pickup Address
                    </h2>
                    
                    <div>
                      <Label htmlFor="address">Street Address *</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        placeholder="123 Main Street"
                        className="mt-1"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => handleInputChange("city", e.target.value)}
                          placeholder="Your city"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="zipCode">ZIP Code</Label>
                        <Input
                          id="zipCode"
                          value={formData.zipCode}
                          onChange={(e) => handleInputChange("zipCode", e.target.value)}
                          placeholder="12345"
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Item Information */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                      <Package className="w-6 h-6 text-primary" />
                      Items for Pickup
                    </h2>
                    
                    <div>
                      <Label htmlFor="itemType">Primary Item Type *</Label>
                      <Select onValueChange={(value) => handleInputChange("itemType", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select the main type of items" />
                        </SelectTrigger>
                        <SelectContent>
                          {itemTypes.map((type) => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="itemDetails">Item Details</Label>
                      <Textarea
                        id="itemDetails"
                        value={formData.itemDetails}
                        onChange={(e) => handleInputChange("itemDetails", e.target.value)}
                        placeholder="Please list specific items, quantities, and any relevant details..."
                        className="mt-1"
                        rows={3}
                      />
                    </div>
                  </div>

                  {/* Scheduling */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                      <Calendar className="w-6 h-6 text-primary" />
                      Preferred Pickup Time
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="preferredDate">Preferred Date *</Label>
                        <Input
                          id="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                          className="mt-1"
                          min={new Date().toISOString().split('T')[0]}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="preferredTime">Preferred Time Slot *</Label>
                        <Select onValueChange={(value) => handleInputChange("preferredTime", value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select time slot" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((slot) => (
                              <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Special Instructions */}
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="specialInstructions">Special Instructions</Label>
                      <Textarea
                        id="specialInstructions"
                        value={formData.specialInstructions}
                        onChange={(e) => handleInputChange("specialInstructions", e.target.value)}
                        placeholder="Any special instructions for our pickup team (e.g., gate code, apartment number, loading dock access)..."
                        className="mt-1"
                        rows={2}
                      />
                    </div>
                  </div>

                  <Button type="submit" variant="cta" size="lg" className="w-full">
                    Schedule Free Pickup
                  </Button>
                </form>
              </Card>
            </div>

            {/* Info Sidebar */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">What to Expect</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Quick Confirmation</p>
                      <p className="text-sm text-muted-foreground">We'll call within 24 hours to confirm your pickup</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Package className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Professional Service</p>
                      <p className="text-sm text-muted-foreground">Certified team with proper equipment and uniforms</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Impact Certificate</p>
                      <p className="text-sm text-muted-foreground">Receive documentation of your environmental impact</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-accent/20">
                <h3 className="text-xl font-bold mb-4 text-foreground">100% Free for Households</h3>
                <p className="text-muted-foreground mb-4">
                  Our residential pickup service is completely free with no hidden charges. 
                  We earn revenue through partnerships with certified recyclers and refurbishers.
                </p>
                <p className="text-sm text-muted-foreground">
                  Questions? Call us at <strong className="text-primary">9509670286</strong>
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;