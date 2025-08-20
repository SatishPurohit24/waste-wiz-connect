import { ArrowRight, Shield, Truck, Recycle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-ewaste.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Electronic waste management"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Turn Your <span className="text-primary-glow">E-Waste</span> Into
            <br />
            Environmental <span className="text-secondary">Impact</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Free, convenient pickup of your electronic waste. We partner with certified recyclers 
            to give your devices a second life while protecting our planet.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/schedule">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Schedule Free Pickup
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="professional" size="lg" className="text-lg px-8 py-4">
                Learn More
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary-glow" />
              <span>Certified & Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-primary-glow" />
              <span>Free Pickup</span>
            </div>
            <div className="flex items-center gap-2">
              <Recycle className="w-5 h-5 text-primary-glow" />
              <span>100% Responsible</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;