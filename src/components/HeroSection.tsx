import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Play, Award, Users, BookOpen } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-primary-foreground/20"></div>
        <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-primary-foreground/10"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 rounded-full bg-primary-foreground/20"></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 rounded-full bg-primary-foreground/10"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Learn Without
              <br />
              <span className="text-primary-light">Limits</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Start, switch, or advance your career with more than 5,000 courses, 
              Professional Certificates, and degrees from world-class universities and companies.
            </p>

            {/* Search Bar */}
            <div className="flex gap-2 mb-8 max-w-md mx-auto md:mx-0">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input 
                  placeholder="What do you want to learn?" 
                  className="pl-10 h-12 bg-primary-foreground border-0 text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <Button size="lg" className="h-12 px-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Search
              </Button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Start Learning Today
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 text-center md:text-left">
              <div>
                <div className="flex items-center justify-center md:justify-start mb-2">
                  <Users className="w-6 h-6 text-primary-light mr-2" />
                  <span className="text-2xl font-bold text-primary-foreground">57M+</span>
                </div>
                <p className="text-primary-foreground/80 text-sm">Students</p>
              </div>
              
              <div>
                <div className="flex items-center justify-center md:justify-start mb-2">
                  <BookOpen className="w-6 h-6 text-primary-light mr-2" />
                  <span className="text-2xl font-bold text-primary-foreground">213K+</span>
                </div>
                <p className="text-primary-foreground/80 text-sm">Courses</p>
              </div>
              
              <div>
                <div className="flex items-center justify-center md:justify-start mb-2">
                  <Award className="w-6 h-6 text-primary-light mr-2" />
                  <span className="text-2xl font-bold text-primary-foreground">75K+</span>
                </div>
                <p className="text-primary-foreground/80 text-sm">Instructors</p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary-foreground rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary-foreground mb-4">
                  Start Your Learning Journey
                </h3>
                <p className="text-primary-foreground/80 mb-6">
                  Join millions of learners worldwide and unlock your potential
                </p>
                
                {/* Popular Courses Preview */}
                <div className="space-y-3">
                  {[
                    "Web Development Bootcamp",
                    "Data Science & Machine Learning",
                    "Digital Marketing Mastery"
                  ].map((course, index) => (
                    <div key={index} className="flex items-center justify-between bg-primary-foreground/10 rounded-lg p-3">
                      <span className="text-sm text-primary-foreground">{course}</span>
                      <Button size="sm" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/20">
                        <Play className="w-3 h-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;