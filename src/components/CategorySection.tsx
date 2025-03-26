
import { Button } from "@/components/ui/button";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: string;
  count: number;
  bgColor: string;
}

const categories: CategoryCardProps[] = [
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
];

const CategoryCard = ({ title, description, icon, count, bgColor }: CategoryCardProps) => {
  return (
    <div className={`rounded-2xl ${bgColor} p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1`}>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-3">{description}</p>
      <div className="text-sm font-medium">
        <span className="text-primary">{count}</span> properties available
      </div>
    </div>
  );
};

const CategorySection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
            Categories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
            Browse By Property Type
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find the perfect property based on your specific requirements, whether it's for personal use, family, or business purposes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="rounded-full px-8">
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
