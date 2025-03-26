
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FilterBar from "@/components/FilterBar";
import PropertyCard, { PropertyCardProps } from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";

// Mock properties data (in a real app, this would come from an API)
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
  {
    id: "7",
    title: "Cozy One Bedroom Apartment",
    address: "444 Quiet Lane, Peaceful Heights",
    price: 850,
    bedrooms: 1,
    bathrooms: 1,
    area: 650,
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070",
    category: "For Bachelor",
  },
  {
    id: "8",
    title: "Waterfront Luxury Villa",
    address: "555 Lakeside Dr, Waterfront",
    price: 4500,
    bedrooms: 5,
    bathrooms: 4,
    area: 3200,
    imageUrl: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070",
    category: "Luxury",
  },
  {
    id: "9",
    title: "Modern Co-working Space",
    address: "666 Innovation Ave, Tech District",
    price: 2000,
    bedrooms: 0,
    bathrooms: 2,
    area: 1200,
    imageUrl: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=2070",
    category: "Commercial",
  },
];

const Properties = () => {
  const [properties, setProperties] = useState<PropertyCardProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setProperties(mockProperties);
      setLoading(false);
    }, 1000);
  }, []);

  const loadMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 3, properties.length));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">All Properties</h1>
            <p className="text-muted-foreground">
              Browse through our collection of verified rental properties
            </p>
          </div>

          <FilterBar />

          {loading ? (
            // Loading skeleton
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
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
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {properties.slice(0, visibleCount).map((property) => (
                  <PropertyCard key={property.id} {...property} />
                ))}
              </div>

              {visibleCount < properties.length && (
                <div className="text-center mt-12">
                  <Button onClick={loadMore} size="lg" className="rounded-full px-8">
                    Load More
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Properties;
