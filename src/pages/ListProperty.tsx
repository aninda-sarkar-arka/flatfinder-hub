
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const ListProperty = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    address: "",
    description: "",
    amenities: [] as string[],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleAmenityChange = (amenity: string, checked: boolean) => {
    if (checked) {
      setFormData({ ...formData, amenities: [...formData.amenities, amenity] });
    } else {
      setFormData({
        ...formData,
        amenities: formData.amenities.filter((a) => a !== amenity),
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Your property has been submitted for review!");
      setIsSubmitting(false);
      setFormData({
        title: "",
        category: "",
        price: "",
        bedrooms: "",
        bathrooms: "",
        area: "",
        address: "",
        description: "",
        amenities: [],
      });
    }, 1500);
  };

  const amenitiesList = [
    "Air Conditioning",
    "Balcony",
    "Dishwasher",
    "Elevator",
    "Furnished",
    "Garage",
    "Garden",
    "Gym",
    "High-Speed Internet",
    "Parking",
    "Pet Friendly",
    "Security System",
    "Swimming Pool",
    "Washer/Dryer",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">List Your Property</h1>
              <p className="text-muted-foreground">
                Complete the form below to list your property for rent on our platform. Our team will review your submission and publish it once approved.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Property Details */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">Property Details</h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="title">Property Title</Label>
                      <Input
                        id="title"
                        name="title"
                        placeholder="e.g., Modern 2-Bedroom Apartment"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="category">Property Category</Label>
                      <Select
                        value={formData.category}
                        onValueChange={(value) => handleSelectChange("category", value)}
                      >
                        <SelectTrigger id="category">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bachelor">For Bachelor</SelectItem>
                          <SelectItem value="family">Family Apartment</SelectItem>
                          <SelectItem value="commercial">Commercial Space</SelectItem>
                          <SelectItem value="hostel">Student Hostel</SelectItem>
                          <SelectItem value="luxury">Luxury Home</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="price">Monthly Rent (USD)</Label>
                        <Input
                          id="price"
                          name="price"
                          type="number"
                          placeholder="e.g., 1200"
                          value={formData.price}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="area">Area (sq ft)</Label>
                        <Input
                          id="area"
                          name="area"
                          type="number"
                          placeholder="e.g., 850"
                          value={formData.area}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="bedrooms">Bedrooms</Label>
                        <Select
                          value={formData.bedrooms}
                          onValueChange={(value) => handleSelectChange("bedrooms", value)}
                        >
                          <SelectTrigger id="bedrooms">
                            <SelectValue placeholder="Select number" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0">0 (Studio)</SelectItem>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4</SelectItem>
                            <SelectItem value="5+">5+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="bathrooms">Bathrooms</Label>
                        <Select
                          value={formData.bathrooms}
                          onValueChange={(value) => handleSelectChange("bathrooms", value)}
                        >
                          <SelectTrigger id="bathrooms">
                            <SelectValue placeholder="Select number" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4</SelectItem>
                            <SelectItem value="5+">5+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">Location</h2>
                  <div>
                    <Label htmlFor="address">Full Address</Label>
                    <Textarea
                      id="address"
                      name="address"
                      placeholder="Enter the complete address of the property"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="resize-none"
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">Description</h2>
                  <div>
                    <Label htmlFor="description">Property Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="Describe your property in detail, including features and neighborhood information"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      className="min-h-[150px]"
                    />
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">Amenities</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2">
                    {amenitiesList.map((amenity) => (
                      <div key={amenity} className="flex items-center space-x-2">
                        <Checkbox
                          id={`amenity-${amenity}`}
                          checked={formData.amenities.includes(amenity)}
                          onCheckedChange={(checked) =>
                            handleAmenityChange(amenity, checked as boolean)
                          }
                        />
                        <Label htmlFor={`amenity-${amenity}`}>{amenity}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Photos (Placeholder) */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">Photos</h2>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <div className="text-muted-foreground mb-4">
                      Upload photos of your property (coming soon)
                    </div>
                    <Button variant="outline" type="button" disabled>
                      Upload Photos
                    </Button>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Property"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ListProperty;
