import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CourseCard from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  Code, 
  Briefcase, 
  Palette, 
  Camera, 
  Music,
  Heart,
  BarChart,
  Users,
  Star,
  Award
} from "lucide-react";

// Course images
import webDevelopmentImg from "@/assets/course-web-development.jpg";
import machineLearningImg from "@/assets/course-machine-learning.jpg";
import digitalMarketingImg from "@/assets/course-digital-marketing.jpg";
import photoshopImg from "@/assets/course-photoshop.jpg";
import pythonImg from "@/assets/course-python.jpg";
import awsImg from "@/assets/course-aws.jpg";

const LandingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Sample course data
  const courses = [
    {
      id: "1",
      title: "The Complete 2024 Web Development Bootcamp",
      instructor: "Dr. Angela Yu",
      rating: 4.7,
      reviewCount: 273829,
      price: 84.99,
      originalPrice: 199.99,
      duration: "61.5 hours",
      students: 847392,
      imageUrl: webDevelopmentImg,
      category: "Development",
      level: "Beginner" as const,
      bestseller: true
    },
    {
      id: "2",
      title: "Machine Learning A-Z: Hands-On Python & R",
      instructor: "Kirill Eremenko",
      rating: 4.5,
      reviewCount: 178543,
      price: 94.99,
      originalPrice: 199.99,
      duration: "44 hours",
      students: 623847,
      imageUrl: machineLearningImg,
      category: "Data Science",
      level: "Intermediate" as const,
      bestseller: true
    },
    {
      id: "3",
      title: "The Complete Digital Marketing Course - 12 Courses in 1",
      instructor: "Rob Percival",
      rating: 4.6,
      reviewCount: 89234,
      price: 89.99,
      originalPrice: 179.99,
      duration: "36 hours",
      students: 345678,
      imageUrl: digitalMarketingImg,
      category: "Marketing",
      level: "Beginner" as const
    },
    {
      id: "4",
      title: "Adobe Photoshop CC – Essentials Training Course",
      instructor: "Daniel Walter Scott",
      rating: 4.8,
      reviewCount: 67891,
      price: 74.99,
      originalPrice: 149.99,
      duration: "12 hours",
      students: 234567,
      imageUrl: photoshopImg,
      category: "Design",
      level: "Beginner" as const
    },
    {
      id: "5",
      title: "Complete Python Bootcamp: Go from Zero to Hero",
      instructor: "Jose Portilla",
      rating: 4.6,
      reviewCount: 456789,
      price: 89.99,
      originalPrice: 199.99,
      duration: "22 hours",
      students: 987654,
      imageUrl: pythonImg,
      category: "Programming",
      level: "Beginner" as const,
      bestseller: true
    },
    {
      id: "6",
      title: "AWS Certified Solutions Architect",
      instructor: "Ryan Kroonenburg",
      rating: 4.5,
      reviewCount: 123456,
      price: 94.99,
      originalPrice: 199.99,
      duration: "26 hours",
      students: 456789,
      imageUrl: awsImg,
      category: "IT & Software",
      level: "Advanced" as const
    }
  ];

  const categories = [
    { id: "all", label: "All Courses", icon: TrendingUp },
    { id: "development", label: "Development", icon: Code },
    { id: "business", label: "Business", icon: Briefcase },
    { id: "design", label: "Design", icon: Palette },
    { id: "photography", label: "Photography", icon: Camera },
    { id: "music", label: "Music", icon: Music },
    { id: "health", label: "Health & Fitness", icon: Heart },
    { id: "marketing", label: "Marketing", icon: BarChart }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      {/* Featured Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Explore Featured Categories
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover courses in the most popular categories and start learning today
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.slice(1).map((category) => {
              const IconComponent = category.icon;
              return (
                <Button
                  key={category.id}
                  variant="outline"
                  className="h-auto p-6 flex flex-col items-center gap-3 hover:shadow-hover transition-all duration-300 hover:border-primary group"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <IconComponent className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-center">{category.label}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Most Popular Courses
              </h2>
              <p className="text-muted-foreground text-lg">
                Join thousands of students in these top-rated courses
              </p>
            </div>
            
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full md:w-auto mt-6 md:mt-0">
              <TabsList className="grid w-full grid-cols-3 md:w-auto md:grid-cols-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="development">Development</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="business">Business</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="hover:shadow-hover">
              View All Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-secondary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Trusted by Millions Worldwide
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-12 max-w-2xl mx-auto">
            Join our global community of learners and start your journey to success
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "57M+", label: "Students Enrolled" },
              { icon: TrendingUp, value: "85%", label: "Success Rate" },
              { icon: Star, value: "4.7", label: "Average Rating" },
              { icon: Award, value: "2000+", label: "Expert Instructors" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <IconComponent className="w-12 h-12 text-primary-light mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-primary-foreground/80">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Start Learning Today
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Don't wait any longer. Join millions of students and start building the skills you need to succeed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:bg-primary-dark px-8">
              Get Started for Free
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Browse All Courses
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <Badge variant="outline">No Credit Card Required</Badge>
            <Badge variant="outline">7-Day Free Trial</Badge>
            <Badge variant="outline">Cancel Anytime</Badge>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">EduPlatform</h3>
              <p className="text-primary-foreground/80 text-sm">
                Empowering learners worldwide with high-quality online education.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-light transition-colors">Browse Courses</a></li>
                <li><a href="#" className="hover:text-primary-light transition-colors">Become Instructor</a></li>
                <li><a href="#" className="hover:text-primary-light transition-colors">Mobile App</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-light transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary-light transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary-light transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-light transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary-light transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary-light transition-colors">Press</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-light/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
            <p>&copy; 2024 EduPlatform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;