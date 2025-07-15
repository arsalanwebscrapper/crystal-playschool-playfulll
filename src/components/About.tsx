import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Users, Award, Heart, Palette, Music } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Creative Learning",
      description: "Interactive lessons that make learning fun and engaging for every child",
      color: "text-fun-blue",
      bgColor: "bg-fun-blue/10",
      emoji: "📚",
      borderColor: "border-fun-blue"
    },
    {
      icon: Users,
      title: "Small Classes",
      description: "Personal attention with low student-teacher ratios for better growth",
      color: "text-fun-purple",
      bgColor: "bg-fun-purple/10",
      emoji: "👥",
      borderColor: "border-fun-purple"
    },
    {
      icon: Award,
      title: "Certified Teachers",
      description: "Qualified and experienced educators who love working with children",
      color: "text-fun-yellow",
      bgColor: "bg-fun-yellow/10",
      emoji: "🏆",
      borderColor: "border-fun-yellow"
    },
    {
      icon: Heart,
      title: "Safe Environment",
      description: "Child-safe facilities with modern security and health protocols",
      color: "text-fun-red",
      bgColor: "bg-fun-red/10",
      emoji: "💖",
      borderColor: "border-fun-red"
    },
    {
      icon: Palette,
      title: "Arts & Crafts",
      description: "Creative activities to develop imagination and fine motor skills",
      color: "text-fun-orange",
      bgColor: "bg-fun-orange/10",
      emoji: "🎨",
      borderColor: "border-fun-orange"
    },
    {
      icon: Music,
      title: "Music & Dance",
      description: "Fun sessions to develop rhythm, coordination, and self-expression",
      color: "text-fun-green",
      bgColor: "bg-fun-green/10",
      emoji: "🎵",
      borderColor: "border-fun-green"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-fun-pink/20 via-fun-yellow/20 to-fun-blue/20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold rainbow-text mb-6 wiggle-animation">
            Why Choose Crystal Play School? ✨🎪
          </h2>
          <p className="text-xl text-fun-purple font-semibold max-w-3xl mx-auto">
            We create a nurturing environment where children learn through play, 
            exploration, and discovery. Every day is an adventure filled with joy and growth! 🌈
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
           {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`cartoon-card p-8 text-center border-4 ${feature.borderColor} hover:border-fun-lime transition-all duration-300 bounce-animation`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl ${feature.bgColor} mb-6 bounce-animation`}>
                <div className="text-3xl">{feature.emoji}</div>
                <feature.icon className={`w-6 h-6 ${feature.color} absolute`} />
              </div>
              <h3 className={`text-xl font-bold mb-4 ${feature.color}`}>{feature.title} 🎯</h3>
              <p className="text-foreground leading-relaxed font-medium">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="cartoon-card p-12 max-w-4xl mx-auto border-4 border-fun-rainbow bg-gradient-fun/10 float-animation">
            <h3 className="text-3xl font-display font-bold mb-6 rainbow-text">
              Ready to Give Your Child the Best Start? 🚀✨
            </h3>
            <p className="text-lg text-fun-purple font-semibold mb-8">
              Join our happy family of learners and watch your little one blossom 
              into a confident, curious, and creative individual! 🌻👶
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-rainbow text-white border-0 px-8 py-6 rounded-2xl text-lg font-bold hover:scale-110 transition-transform bounce-animation">
                📞 Schedule a Visit 🎉
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="glass-button px-8 py-6 rounded-2xl text-lg font-bold border-4 border-fun-yellow hover:border-fun-orange"
              >
                📋 Download Brochure 📚
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;