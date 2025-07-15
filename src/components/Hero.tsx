import { Button } from "@/components/ui/button";
import { Star, Heart, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import EnrollmentModal from "./EnrollmentModal";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-fun-yellow text-6xl bounce-animation">
          <Star className="w-16 h-16" />
        </div>
        <div className="absolute top-32 right-20 text-fun-pink text-5xl wiggle-animation">
          <Heart className="w-12 h-12" />
        </div>
        <div className="absolute bottom-32 left-20 text-fun-orange text-4xl float-animation">
          <Sparkles className="w-10 h-10" />
        </div>
        <div className="absolute bottom-20 right-32 text-fun-lime text-5xl bounce-animation">
          <Star className="w-14 h-14" />
        </div>
        <div className="absolute top-40 left-1/2 text-fun-blue text-4xl float-animation-delayed">
          <Sparkles className="w-8 h-8" />
        </div>
        <div className="absolute bottom-40 right-10 text-fun-red text-3xl wiggle-animation">
          <Heart className="w-6 h-6" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Welcome to{" "}
              <span className="rainbow-text block font-extrabold mt-2 wiggle-animation">
                Crystal Play School
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
              Where learning meets fun! 🌟 A magical place where your little ones discover, 
              explore, and grow with joy every single day.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <EnrollmentModal />
              <Button 
                variant="outline" 
                size="lg" 
                className="glass-button text-lg px-8 py-6 rounded-2xl font-semibold text-white border-white/40 hover:bg-white/20 hover:text-white hover:border-white/60 transition-all bounce-animation"
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              >
                📸 View Gallery 🎨
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="cartoon-card p-6 text-center border-fun-yellow hover:border-fun-orange">
                <div className="text-3xl font-bold text-fun-yellow mb-2">5+ 🏆</div>
                <div className="text-white/80 text-sm">Years Experience</div>
              </div>
              <div className="cartoon-card p-6 text-center border-fun-pink hover:border-fun-red">
                <div className="text-3xl font-bold text-fun-pink mb-2">200+ 😊</div>
                <div className="text-white/80 text-sm">Happy Kids</div>
              </div>
              <div className="cartoon-card p-6 text-center border-fun-lime hover:border-fun-green">
                <div className="text-3xl font-bold text-fun-lime mb-2">15+ 👨‍🏫</div>
                <div className="text-white/80 text-sm">Expert Teachers</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="glass-card rounded-3xl overflow-hidden pulse-glow">
              <img 
                src={heroImage} 
                alt="Happy children playing at Crystal Play School"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 cartoon-card p-4 bounce-animation border-fun-yellow">
              <div className="text-center">
                <div className="text-2xl mb-1">⭐</div>
                <div className="text-sm font-semibold text-fun-yellow">Best in City! 🎉</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;