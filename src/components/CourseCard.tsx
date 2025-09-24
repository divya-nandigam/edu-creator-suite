import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Users, Play } from "lucide-react";

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice?: number;
  duration: string;
  students: number;
  imageUrl: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  bestseller?: boolean;
}

const CourseCard = ({
  title,
  instructor,
  rating,
  reviewCount,
  price,
  originalPrice,
  duration,
  students,
  imageUrl,
  category,
  level,
  bestseller
}: CourseCardProps) => {
  return (
    <div className="group bg-card border rounded-lg shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden">
      {/* Course Image */}
      <div className="relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button size="sm" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Play className="w-4 h-4 mr-2" />
            Preview
          </Button>
        </div>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {bestseller && (
            <Badge className="bg-warning text-warning-foreground text-xs px-2 py-1">
              Bestseller
            </Badge>
          )}
          <Badge variant="secondary" className="text-xs px-2 py-1">
            {level}
          </Badge>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-4">
        {/* Category */}
        <Badge variant="outline" className="text-xs mb-2">
          {category}
        </Badge>
        
        {/* Title */}
        <h3 className="font-semibold text-card-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        {/* Instructor */}
        <p className="text-sm text-muted-foreground mb-3">
          By {instructor}
        </p>
        
        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium text-warning">{rating}</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-3 h-3 ${
                    i < Math.floor(rating) 
                      ? 'fill-warning text-warning' 
                      : 'text-muted-foreground'
                  }`} 
                />
              ))}
            </div>
          </div>
          <span className="text-xs text-muted-foreground">({reviewCount})</span>
        </div>
        
        {/* Course Stats */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {duration}
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            {students.toLocaleString()}
          </div>
        </div>
        
        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {price === 0 ? (
              <span className="text-lg font-bold text-success">
                Free
              </span>
            ) : (
              <>
                <span className="text-lg font-bold text-primary">
                  ${price}
                </span>
                {originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    ${originalPrice}
                  </span>
                )}
              </>
            )}
          </div>
          <Button size="sm" className="bg-gradient-primary hover:bg-primary-dark">
            {price === 0 ? "Enroll Free" : "Add to Cart"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;