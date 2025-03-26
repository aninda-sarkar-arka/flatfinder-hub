
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

interface CategoryProps {
  title: string;
  description: string;
  icon: string;
  count: number;
  bgColor: string;
}

const categories: CategoryProps[] = [
  {
    title: "For Bachelors",
    description: "Perfect for individuals looking for independence",
    icon: "👨‍💼",
    count: 152,
    bgColor: "bg-blue-50",
  },
  {
    title: "Family Apartments",
    description: "Spacious homes for your loved ones",
    icon: "👨‍👩‍👧‍👦",
    count: 238,
    bgColor: "bg-green-50",
  },
  {
    title: "Commercial Spaces",
    description: "Offices and retail spaces for your business",
    icon: "🏢",
    count: 89,
    bgColor: "bg-purple-50",
  },
  {
    title: "Student Hostels",
    description: "Affordable accommodations for students",
    icon: "🎓",
    count: 104,
    bgColor: "bg-orange-50",
  },
  {
    title: "Luxury Homes",
    description: "Premium properties with high-end features",
    icon: "✨",
    count: 56,
    bgColor: "bg-yellow-50",
  },
  {
    title: "Studio Apartments",
    description: "Compact and efficient living spaces",
    icon: "🏠",
    count: 127,
    bgColor: "bg-red-50",
  },
  {
    title: "Shared Accommodations",
    description: "Shared living spaces for cost-effective renting",
    icon: "👥",
    count: 83,
    bgColor: "bg-indigo-50",
  },
  {
    title: "Short-Term Rentals",
    description: "Temporary accommodations for short stays",
    icon: "⏱️",
    count: 62,
    bgColor: "bg-teal-50",
  },
];

const Categories = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Property Categories</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse through our diverse range of property categories to find the perfect rental that meets your specific needs and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link 
                key={index} 
                to={`/properties?category=${category.title.toLowerCase().replace(' ', '-')}`}
                className={`rounded-2xl ${category.bgColor} p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1`}
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-muted-foreground mb-3">{category.description}</p>
                <div className="text-sm font-medium">
                  <span className="text-primary">{category.count}</span> properties available
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Categories;
