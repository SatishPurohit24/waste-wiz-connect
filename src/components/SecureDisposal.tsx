import { Shield, CheckCircle, FileCheck, Eye, Lock, FileWarning, Scale } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SecureDisposal = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Partnership With Authorized Recyclers",
      description: "We work only with CPCB/MPCB-authorized recyclers who follow secure, government-approved dismantling processes."
    },
    {
      icon: CheckCircle,
      title: "Data Wiping Protocol Before Pickup",
      description: "Follow our simple checklist: factory reset, remove SIM, remove memory card, disable Google/iCloud accounts. Need help? We offer optional certified data-wiping service.",
      checklist: [
        "Factory reset your device",
        "Remove SIM card",
        "Remove memory card",
        "Disable Google/iCloud accounts",
        "Optional: Request certified data wiping"
      ]
    },
    {
      icon: FileCheck,
      title: "Chain-of-Custody Tracking",
      description: "Each pickup gets a unique tracking ID from user → pickup partner → recycler → processing. Know exactly where your device is at every step."
    },
    {
      icon: Lock,
      title: "Component-Level Destruction",
      description: "Storage chips are physically destroyed, devices are dismantled safely, and you can request a recycling/destruction certificate for peace of mind."
    },
    {
      icon: Eye,
      title: "Employee Verification & CCTV Monitoring",
      description: "Only verified staff handle devices, and all operations are conducted under controlled, monitored environments."
    },
    {
      icon: FileWarning,
      title: "IMEI Blacklisting (Future Feature)",
      description: "Devices can be marked as 'Scrapped — Not for reuse,' preventing illegal reactivation and ensuring complete disposal."
    },
    {
      icon: Scale,
      title: "Legal Compliance",
      description: "We follow E-Waste Management Rules 2022 and maintain comprehensive audit logs and secure data-handling practices."
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-background to-accent/20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Secure Disposal <span className="text-primary">Guarantee</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Your privacy and security matter to us. Here's how we ensure your devices and data 
            are handled responsibly at every step of the recycling journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      {feature.description}
                    </p>
                    {feature.checklist && (
                      <div className="space-y-2 mt-4">
                        {feature.checklist.map((item, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="max-w-2xl mx-auto text-center animate-fade-up">
          <Card className="p-8 bg-primary/5 border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Dispose Securely?
            </h3>
            <p className="text-muted-foreground mb-6">
              Schedule your free pickup today and experience worry-free, secure e-waste disposal.
            </p>
            <Link to="/schedule">
              <Button variant="cta" size="lg">
                Schedule Free Pickup
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SecureDisposal;
