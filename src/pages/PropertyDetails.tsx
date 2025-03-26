
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PropertyCardProps } from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin, Bed, Bath, Move, Calendar, Phone, Mail, Share2, Heart } from "lucide-react";

// Mock property data (in a real app, this would come from an API)
const mockProperties: { [key: string]: PropertyCardProps & { description: string, amenities: string[], contact: { name: string, phone: string, email: string } } } = {
  "1": {
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
    description: "This beautiful modern apartment offers stunning city views and is perfect for professionals or students. Located in the heart of the city, you'll be close to restaurants, shopping, and public transportation. The apartment features an open floor plan, updated kitchen with stainless steel appliances, and a private balcony.",
    amenities: ["Air Conditioning", "High-Speed Internet", "Washer/Dryer", "Dishwasher", "Balcony", "Elevator", "Security System", "Pet Friendly"],
    contact: {
      name: "John Smith",
      phone: "+1 (555) 123-4567",
      email: "john.smith@example.com"
    }
  },
  "2": {
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
    description: "Perfect for families, this spacious home features 4 bedrooms, 2 bathrooms, and a beautiful garden. Located in a quiet suburban neighborhood with excellent schools nearby. The house has a modern kitchen, large living room, and a backyard perfect for children to play.",
    amenities: ["Garden", "Garage", "Central Heating", "Air Conditioning", "Dishwasher", "Washer/Dryer", "High-Speed Internet", "Fireplace"],
    contact: {
      name: "Emma Johnson",
      phone: "+1 (555) 987-6543",
      email: "emma.johnson@example.com"
    }
  }
};

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<(PropertyCardProps & { description: string, amenities: string[], contact: { name: string, phone: string, email: string } }) | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching property data
    setTimeout(() => {
      if (id && mockProperties[id]) {
        setProperty(mockProperties[id]);
      }
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-28 pb-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="glass-panel p-8 animate-pulse">
              <div className="aspect-[16/9] bg-muted rounded-lg mb-8"></div>
              <div className="h-8 bg-muted rounded mb-4 w-3/4"></div>
              <div className="h-4 bg-muted rounded mb-8 w-1/2"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4 md:col-span-2">
                  <div className="h-4 bg-muted rounded w-full"></div>
                  <div className="h-4 bg-muted rounded w-full"></div>
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                </div>
                <div className="h-40 bg-muted rounded"></div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-28 pb-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold mb-4">Property Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The property you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link to="/properties">Browse All Properties</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <nav className="flex items-center text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/properties" className="hover:text-foreground">Properties</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">{property.title}</span>
            </nav>
          </div>

          {/* Property Header */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{property.title}</h1>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span>{property.address}</span>
                </div>
              </div>
              <div className="flex flex-col items-start md:items-end">
                <div className="text-3xl font-bold text-primary">${property.price}</div>
                <div className="text-muted-foreground">per month</div>
              </div>
            </div>
          </div>

          {/* Property Images */}
          <div className="mb-8 rounded-2xl overflow-hidden">
            <div className="aspect-[16/9] relative">
              <img 
                src={property.imageUrl} 
                alt={property.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute top-4 right-4 flex space-x-2">
                <Button size="icon" variant="secondary" className="rounded-full h-10 w-10">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="secondary" className="rounded-full h-10 w-10">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
              <div className="absolute top-4 left-4">
                <Badge className="bg-primary text-white">{property.category}</Badge>
              </div>
            </div>
          </div>

          {/* Property Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Content - Left and Middle */}
            <div className="md:col-span-2 space-y-8">
              {/* Overview */}
              <div className="glass-panel p-6 rounded-2xl">
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center p-4 bg-secondary/50 rounded-xl">
                    <Bed className="h-6 w-6 text-primary mb-2" />
                    <span className="text-lg font-medium">{property.bedrooms}</span>
                    <span className="text-sm text-muted-foreground">Bedrooms</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-secondary/50 rounded-xl">
                    <Bath className="h-6 w-6 text-primary mb-2" />
                    <span className="text-lg font-medium">{property.bathrooms}</span>
                    <span className="text-sm text-muted-foreground">Bathrooms</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-secondary/50 rounded-xl">
                    <Move className="h-6 w-6 text-primary mb-2" />
                    <span className="text-lg font-medium">{property.area}</span>
                    <span className="text-sm text-muted-foreground">Sq Ft</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-secondary/50 rounded-xl">
                    <Calendar className="h-6 w-6 text-primary mb-2" />
                    <span className="text-lg font-medium">Immediate</span>
                    <span className="text-sm text-muted-foreground">Availability</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="glass-panel p-6 rounded-2xl">
                <h2 className="text-2xl font-semibold mb-4">Description</h2>
                <p className="text-muted-foreground">
                  {property.description}
                </p>
              </div>

              {/* Amenities */}
              <div className="glass-panel p-6 rounded-2xl">
                <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location (Placeholder for map) */}
              <div className="glass-panel p-6 rounded-2xl">
                <h2 className="text-2xl font-semibold mb-4">Location</h2>
                <div className="aspect-[16/9] bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground">Map placeholder</span>
                </div>
              </div>
            </div>

            {/* Sidebar - Right */}
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="glass-panel p-6 rounded-2xl">
                <h2 className="text-xl font-semibold mb-4">Contact Landlord</h2>
                <div className="space-y-4">
                  <div>
                    <div className="font-medium">{property.contact.name}</div>
                    <div className="text-sm text-muted-foreground">Property Owner</div>
                  </div>
                  <Separator />
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-3 text-primary" />
                    <span>{property.contact.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-3 text-primary" />
                    <span>{property.contact.email}</span>
                  </div>
                  <Separator />
                  <Button className="w-full">Send Message</Button>
                </div>
              </div>

              {/* Schedule Viewing */}
              <div className="glass-panel p-6 rounded-2xl">
                <h2 className="text-xl font-semibold mb-4">Schedule a Viewing</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Choose a date and time to visit this property
                </p>
                <Button variant="outline" className="w-full mb-3">
                  Choose Date & Time
                </Button>
                <Button className="w-full">Request Viewing</Button>
              </div>

              {/* Similar Properties */}
              <div className="glass-panel p-6 rounded-2xl">
                <h2 className="text-xl font-semibold mb-4">Similar Properties</h2>
                <div className="space-y-4">
                  <Link to="/properties/2" className="block">
                    <div className="flex space-x-3">
                      <div className="flex-shrink-0 w-20 h-20 bg-muted rounded-lg overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070" 
                          alt="Similar property"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium line-clamp-1">Spacious Family Home</div>
                        <div className="text-sm text-muted-foreground">$2,500/month</div>
                      </div>
                    </div>
                  </Link>
                  <Link to="/properties/3" className="block">
                    <div className="flex space-x-3">
                      <div className="flex-shrink-0 w-20 h-20 bg-muted rounded-lg overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070" 
                          alt="Similar property"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium line-clamp-1">Downtown Studio Loft</div>
                        <div className="text-sm text-muted-foreground">$950/month</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PropertyDetails;
