import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Users, Award, Heart, Palette, Music } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Creative Learning",
      description: "Interactive lessons that make learning fun and engaging for every child",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Users,
      title: "Small Classes",
      description: "Personal attention with low student-teacher ratios for better growth",
      color: "text-fun-purple",
      bgColor: "bg-fun-purple/10"
    },
    {
      icon: Award,
      title: "Certified Teachers",
      description: "Qualified and experienced educators who love working with children",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      icon: Heart,
      title: "Safe Environment",
      description: "Child-safe facilities with modern security and health protocols",
      color: "text-red-500",
      bgColor: "bg-red-50"
    },
    {
      icon: Palette,
      title: "Arts & Crafts",
      description: "Creative activities to develop imagination and fine motor skills",
      color: "text-fun-orange",
      bgColor: "bg-fun-orange/10"
    },
    {
      icon: Music,
      title: "Music & Dance",
      description: "Fun sessions to develop rhythm, coordination, and self-expression",
      color: "text-accent",
      bgColor: "bg-accent/10"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold gradient-text mb-6">
            Why Choose Crystal Play School? ✨
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We create a nurturing environment where children learn through play, 
            exploration, and discovery. Every day is an adventure filled with joy and growth!
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="glass-card p-8 text-center hover:scale-105 transition-all duration-300 border-0"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${feature.bgColor} mb-6`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="glass-card rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-display font-bold mb-6">
              Ready to Give Your Child the Best Start? 🚀
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Join our happy family of learners and watch your little one blossom 
              into a confident, curious, and creative individual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary text-white border-0 px-8 py-6 rounded-2xl text-lg font-semibold hover:scale-105 transition-transform">
                📞 Schedule a Visit
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="glass-button px-8 py-6 rounded-2xl text-lg font-semibold"
              >
                📋 Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;