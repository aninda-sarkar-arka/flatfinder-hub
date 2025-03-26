
import { useState, useEffect } from "react";
import PropertyCard, { PropertyCardProps } from "./PropertyCard";
import { Button } from "@/components/ui/button";

// Mock data for featured properties
const mockProperties: PropertyCardProps[] = [
  {
    id: "1",
    title: "Modern Apartment with City View",
    address: "123 Downtown St, Central City",
    price: 1200,
    bedrooms: 2,
    bathrooms: 1,
    area: 850,
    imageUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2080",
    category: "For Bachelor",
    featured: true,
  },
  {
    id: "2",
    title: "Spacious Family Home with Garden",
    address: "456 Suburban Ave, Greenville",
    price: 2500,
    bedrooms: 4,
    bathrooms: 2,
    area: 1800,
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070",
    category: "Family",
    featured: true,
  },
  {
    id: "3",
    title: "Downtown Studio Loft",
    address: "789 Urban St, Metropolitan",
    price: 950,
    bedrooms: 1,
    bathrooms: 1,
    area: 500,
    imageUrl: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070",
    category: "For Bachelor",
  },
  {
    id: "4",
    title: "Luxury Penthouse with Terrace",
    address: "1010 High Rise Blvd, Skyline",
    price: 3800,
    bedrooms: 3,
    bathrooms: 3,
    area: 2200,
    imageUrl: "https://images.unsplash.com/photo-1600607687644-c7f34b5e0f02?q=80&w=2070",
    category: "Luxury",
    featured: true,
  },
  {
    id: "5",
    title: "Commercial Office Space",
    address: "222 Business Park, Commerce District",
    price: 3000,
    bedrooms: 0,
    bathrooms: 2,
    area: 1500,
    imageUrl: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069",
    category: "Commercial",
  },
  {
    id: "6",
    title: "Student Hostel Room",
    address: "333 Campus Way, University Town",
    price: 450,
    bedrooms: 1,
    bathrooms: 1,
    area: 300,
    imageUrl: "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=2070",
    category: "Hostel",
  },
];

const FeaturedProperties = () => {
  const [properties, setProperties] = useState<PropertyCardProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const loadData = () => {
      setTimeout(() => {
        setProperties(mockProperties);
        setLoading(false);
      }, 1000);
    };

    loadData();
  }, []);

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Properties</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium rental properties that match your requirements and preferences.
          </p>
        </div>

        {loading ? (
          // Loading skeleton
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="property-card animate-pulse">
                <div className="aspect-[4/3] bg-muted"></div>
                <div className="p-5 space-y-3">
                  <div className="h-5 bg-muted rounded"></div>
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                  <div className="flex gap-2">
                    <div className="h-4 bg-muted rounded w-1/4"></div>
                    <div className="h-4 bg-muted rounded w-1/4"></div>
                    <div className="h-4 bg-muted rounded w-1/4"></div>
                  </div>
                  <div className="flex justify-between">
                    <div className="h-6 bg-muted rounded w-1/3"></div>
                    <div className="h-8 bg-muted rounded w-1/4"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Actual property grid
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Button size="lg" className="rounded-full px-8">View All Properties</Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
