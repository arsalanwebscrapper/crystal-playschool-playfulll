import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Star } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    childAge: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { ref, push } = await import('firebase/database');
      const { database } = await import('@/lib/firebase');
      
      const contactRef = ref(database, 'contact-messages');
      await push(contactRef, {
        ...formData,
        timestamp: new Date().toISOString()
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        childAge: "",
        message: ""
      });
      
      alert("Thank you for your interest! We'll contact you soon. 🌟");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Sorry, there was an error. Please try again later.");
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Rainbow Street, Happy Valley, Cityville - 12345",
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-PLAY\n+1 (555) 123-7529",
      color: "text-success"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@crystalplayschool.com\nadmissions@crystalplayschool.com",
      color: "text-fun-orange"
    },
    {
      icon: Clock,
      title: "School Hours",
      content: "Monday - Friday: 8:00 AM - 5:00 PM\nSaturday: 9:00 AM - 2:00 PM",
      color: "text-fun-purple"
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold gradient-text mb-6">
            Let's Connect! 📞
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to give your child the best start? We'd love to hear from you! 
            Reach out to learn more about our programs or schedule a visit.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="glass-card border-0 p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              🌟 Get in Touch
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium mb-2 block">
                    Parent's Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="rounded-xl border-2 focus:ring-primary"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="rounded-xl border-2 focus:ring-primary"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium mb-2 block">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="rounded-xl border-2 focus:ring-primary"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <Label htmlFor="childAge" className="text-sm font-medium mb-2 block">
                    Child's Age
                  </Label>
                  <Input
                    id="childAge"
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleInputChange}
                    className="rounded-xl border-2 focus:ring-primary"
                    placeholder="e.g., 3 years old"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="text-sm font-medium mb-2 block">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="rounded-xl border-2 focus:ring-primary resize-none"
                  placeholder="Tell us about your child's interests, any questions you have, or anything else you'd like us to know..."
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-primary text-white border-0 py-6 rounded-2xl text-lg font-semibold hover:scale-105 transition-transform"
              >
                🚀 Send Message
              </Button>
            </form>

            {/* Trust Badges */}
            <div className="mt-8 pt-8 border-t border-border/50">
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>Licensed & Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>5+ Years Experience</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="glass-card border-0 p-6 hover:scale-105 transition-transform">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-card ${info.color}`}>
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">{info.title}</h4>
                    <div className="text-muted-foreground whitespace-pre-line">
                      {info.content}
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            {/* Map Placeholder */}
            <Card className="glass-card border-0 p-6">
              <h4 className="font-bold text-lg mb-4 text-center">🗺️ Find Us Here</h4>
              <div className="bg-gradient-secondary rounded-2xl h-48 flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <div className="font-semibold">Interactive Map</div>
                  <div className="text-sm opacity-90">Click to open in Maps</div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="glass-card rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-display font-bold mb-6">
              Ready for a School Tour? 🏫
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              The best way to experience Crystal Play School is to visit us! 
              Schedule a tour and see why parents and children love our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-primary text-white border-0 px-8 py-6 rounded-2xl text-lg font-semibold hover:scale-105 transition-transform">
                📅 Book a Tour
              </Button>
              <Button 
                variant="outline" 
                className="glass-button px-8 py-6 rounded-2xl text-lg font-semibold"
              >
                💬 Chat with Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;