import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Paintbrush, 
  Music, 
  Book, 
  TreePine, 
  Users, 
  Gamepad2,
  Cookie,
  Puzzle
} from "lucide-react";

const Activities = () => {
  const activities = [
    {
      icon: Paintbrush,
      title: "Arts & Crafts",
      description: "Colorful creative sessions with painting, drawing, and crafting",
      emoji: "🎨",
      color: "bg-gradient-to-br from-pink-400 to-purple-500"
    },
    {
      icon: Music,
      title: "Music & Dance",
      description: "Rhythm, songs, and movement to develop coordination",
      emoji: "🎵",
      color: "bg-gradient-to-br from-yellow-400 to-orange-500"
    },
    {
      icon: Book,
      title: "Story Time",
      description: "Engaging stories that spark imagination and language skills",
      emoji: "📚",
      color: "bg-gradient-to-br from-green-400 to-blue-500"
    },
    {
      icon: TreePine,
      title: "Nature Exploration",
      description: "Garden walks and outdoor discovery adventures",
      emoji: "🌿",
      color: "bg-gradient-to-br from-green-500 to-teal-500"
    },
    {
      icon: Users,
      title: "Social Play",
      description: "Group activities to build friendships and teamwork",
      emoji: "👫",
      color: "bg-gradient-to-br from-blue-400 to-indigo-500"
    },
    {
      icon: Gamepad2,
      title: "Educational Games",
      description: "Fun learning games for numbers, letters, and shapes",
      emoji: "🎮",
      color: "bg-gradient-to-br from-purple-400 to-pink-500"
    },
    {
      icon: Cookie,
      title: "Cooking Fun",
      description: "Simple cooking activities to learn measurements and following instructions",
      emoji: "👩‍🍳",
      color: "bg-gradient-to-br from-red-400 to-pink-500"
    },
    {
      icon: Puzzle,
      title: "Problem Solving",
      description: "Puzzles and brain games to develop critical thinking",
      emoji: "🧩",
      color: "bg-gradient-to-br from-indigo-400 to-purple-500"
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold gradient-text mb-6">
            Fun Learning Activities 🎪
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every day brings new adventures! Our carefully designed activities 
            help children develop skills while having the time of their lives.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {activities.map((activity, index) => (
            <Card 
              key={index}
              className="glass-card border-0 overflow-hidden hover:scale-105 transition-all duration-300 group cursor-pointer"
            >
              {/* Colorful Header */}
              <div className={`${activity.color} p-6 text-center text-white relative overflow-hidden`}>
                <div className="text-4xl mb-2 transform group-hover:scale-110 transition-transform">
                  {activity.emoji}
                </div>
                <activity.icon className="w-8 h-8 mx-auto opacity-80" />
                
                {/* Decorative circles */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/20 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/10 rounded-full"></div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold mb-3 text-center">{activity.title}</h3>
                <p className="text-muted-foreground text-sm text-center leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Schedule Section */}
        <div className="glass-card rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-display font-bold mb-4">Daily Schedule 📅</h3>
            <p className="text-muted-foreground">
              A perfect blend of learning, play, and rest throughout the day
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { time: "9:00 AM", activity: "Morning Circle", icon: "☀️" },
              { time: "10:00 AM", activity: "Learning Time", icon: "📖" },
              { time: "11:00 AM", activity: "Outdoor Play", icon: "🏃‍♀️" },
              { time: "12:00 PM", activity: "Lunch & Rest", icon: "🍎" },
              { time: "1:00 PM", activity: "Creative Arts", icon: "🎨" },
              { time: "2:00 PM", activity: "Music & Dance", icon: "🎵" },
              { time: "3:00 PM", activity: "Story Time", icon: "📚" },
              { time: "4:00 PM", activity: "Home Time", icon: "👋" }
            ].map((slot, index) => (
              <div key={index} className="text-center p-4 rounded-xl bg-gradient-card">
                <div className="text-2xl mb-2">{slot.icon}</div>
                <div className="font-semibold text-primary mb-1">{slot.time}</div>
                <div className="text-sm text-muted-foreground">{slot.activity}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button className="bg-gradient-primary text-white border-0 px-8 py-6 rounded-2xl text-lg font-semibold hover:scale-105 transition-transform">
              📋 View Full Curriculum
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;