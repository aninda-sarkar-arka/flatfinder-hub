
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export interface PropertyCardProps {
  id: string;
  title: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  imageUrl: string;
  category: string;
  featured?: boolean;
}

const PropertyCard = ({
  id,
  title,
  address,
  price,
  bedrooms,
  bathrooms,
  area,
  imageUrl,
  category,
  featured = false,
}: PropertyCardProps) => {
  return (
    <div 
      className={`property-card group animate-scale-in ${
        featured ? 'ring-2 ring-primary/20' : ''
      }`}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {featured && (
          <div className="absolute top-3 left-3">
            <Badge variant="default" className="bg-primary text-white font-medium">
              Featured
            </Badge>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <Badge className="category-tag font-medium">
            {category}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2 line-clamp-1">{title}</h3>
        
        <div className="flex items-center text-muted-foreground mb-3">
          <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
          <span className="text-sm truncate">{address}</span>
        </div>
        
        <div className="flex flex-wrap gap-3 mb-4">
          <div className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{bedrooms}</span> Beds
          </div>
          <div className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{bathrooms}</span> Baths
          </div>
          <div className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{area}</span> sqft
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-xl font-bold">${price}</span>
            <span className="text-muted-foreground text-sm">/month</span>
          </div>
          <Button size="sm" variant="outline" className="rounded-full">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
