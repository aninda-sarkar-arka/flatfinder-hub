
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="relative min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/20" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070')] bg-cover bg-center" style={{ opacity: 0.15 }} />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 py-10 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-in [animation-delay:200ms]">
            Find Your Perfect Rental
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in [animation-delay:400ms]">
            Discover Your Next Home With Ease
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in [animation-delay:600ms]">
            Browse thousands of rental listings from verified owners. Find the perfect space for your needs, whether it's a bachelor pad, family home, or commercial property.
          </p>
          
          {/* Search Box */}
          <div className="glass-panel p-2 md:p-3 mx-auto max-w-xl mb-8 animate-fade-in [animation-delay:800ms]">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Enter location, area, or city..."
                  className="pl-10 py-6 rounded-xl bg-white border border-border"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button size="lg" className="rounded-xl px-8 py-6 shadow-md hover:shadow-lg">
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
            </div>
          </div>
          
          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3 animate-fade-in [animation-delay:1000ms]">
            <Button variant="outline" className="filter-chip" size="sm">
              For Bachelor
            </Button>
            <Button variant="outline" className="filter-chip" size="sm">
              Family Apartments
            </Button>
            <Button variant="outline" className="filter-chip" size="sm">
              Commercial Space
            </Button>
            <Button variant="outline" className="filter-chip" size="sm">
              Student Hostels
            </Button>
            <Button variant="outline" className="filter-chip" size="sm">
              Luxury Homes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
