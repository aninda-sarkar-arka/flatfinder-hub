
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import FeaturedProperties from "@/components/FeaturedProperties";
import Footer from "@/components/Footer";

const Index = () => {
  // Smooth scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Categories Section */}
        <CategorySection />
        
        {/* Featured Properties */}
        <FeaturedProperties />
        
        {/* How It Works Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
                How It Works
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                FlatFinder makes it easy to find your next rental property or list your property for rent.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="glass-panel p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">Search Properties</h3>
                <p className="text-muted-foreground">
                  Browse thousands of verified rental listings with detailed information and high-quality images.
                </p>
              </div>
              
              {/* Step 2 */}
              <div className="glass-panel p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">Contact Owner</h3>
                <p className="text-muted-foreground">
                  Connect directly with property owners or managers to schedule viewings and discuss details.
                </p>
              </div>
              
              {/* Step 3 */}
              <div className="glass-panel p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Rent Your Dream Home</h3>
                <p className="text-muted-foreground">
                  Finalize the rental agreement and move into your new home with confidence and peace of mind.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                Testimonials
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
                What Our Users Say
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join thousands of satisfied users who found their perfect rental property through FlatFinder.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="glass-panel p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">Tenant</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "I found my dream apartment within a week of using FlatFinder. The search filters made it easy to narrow down properties that matched my requirements."
                </p>
              </div>
              
              {/* Testimonial 2 */}
              <div className="glass-panel p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Michael Chen</h4>
                    <p className="text-sm text-muted-foreground">Property Owner</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "As a property owner, FlatFinder has been a game-changer. I've been able to find reliable tenants quickly and the process is seamless."
                </p>
              </div>
              
              {/* Testimonial 3 */}
              <div className="glass-panel p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <h4 className="font-semibold">David Rodriguez</h4>
                    <p className="text-sm text-muted-foreground">Student</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Finding a student hostel was so easy with FlatFinder. The category filters helped me find affordable accommodation near my university."
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
