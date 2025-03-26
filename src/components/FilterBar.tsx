
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search, Filter, MapPin } from "lucide-react";

interface FilterState {
  location: string;
  category: string;
  priceRange: [number, number];
  bedrooms: string;
  floor: string;
}

const FilterBar = () => {
  const [filters, setFilters] = useState<FilterState>({
    location: "",
    category: "",
    priceRange: [500, 5000],
    bedrooms: "",
    floor: "",
  });

  const handlePriceChange = (value: number[]) => {
    setFilters({
      ...filters,
      priceRange: [value[0], value[1]] as [number, number],
    });
  };

  const handleReset = () => {
    setFilters({
      location: "",
      category: "",
      priceRange: [500, 5000],
      bedrooms: "",
      floor: "",
    });
  };

  return (
    <div className="glass-panel p-5 mx-auto max-w-6xl mb-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Location Search */}
        <div className="md:col-span-3 relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Location"
            className="pl-10 bg-white"
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          />
        </div>

        {/* Property Type */}
        <div className="md:col-span-2">
          <Select
            value={filters.category}
            onValueChange={(value) => setFilters({ ...filters, category: value })}
          >
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="bachelor">For Bachelor</SelectItem>
              <SelectItem value="family">Family</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
              <SelectItem value="hostel">Hostel</SelectItem>
              <SelectItem value="luxury">Luxury</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Price Range */}
        <div className="md:col-span-3">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-between bg-white">
                <span>Price Range</span>
                <span className="text-xs text-muted-foreground">
                  ${filters.priceRange[0]} - ${filters.priceRange[1]}
                </span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-72">
              <div className="space-y-4">
                <h4 className="font-medium">Monthly Rent Range</h4>
                <div className="px-1">
                  <Slider
                    defaultValue={[filters.priceRange[0], filters.priceRange[1]]}
                    max={10000}
                    min={0}
                    step={100}
                    onValueChange={handlePriceChange}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <span className="font-medium">${filters.priceRange[0]}</span>
                    <span className="text-muted-foreground"> min</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">${filters.priceRange[1]}</span>
                    <span className="text-muted-foreground"> max</span>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Bedrooms */}
        <div className="md:col-span-2">
          <Select
            value={filters.bedrooms}
            onValueChange={(value) => setFilters({ ...filters, bedrooms: value })}
          >
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Bedrooms" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="1">1+</SelectItem>
              <SelectItem value="2">2+</SelectItem>
              <SelectItem value="3">3+</SelectItem>
              <SelectItem value="4">4+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Floor */}
        <div className="md:col-span-2">
          <Select
            value={filters.floor}
            onValueChange={(value) => setFilters({ ...filters, floor: value })}
          >
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Floor" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="ground">Ground</SelectItem>
              <SelectItem value="1-3">1st - 3rd</SelectItem>
              <SelectItem value="4-8">4th - 8th</SelectItem>
              <SelectItem value="9+">9th+</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <Button variant="outline" size="sm" onClick={handleReset}>
          Reset Filters
        </Button>
        <Button size="sm" className="px-6">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>
    </div>
  );
};

export default FilterBar;
