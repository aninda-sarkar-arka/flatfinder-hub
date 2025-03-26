
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About FlatFinder</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connecting property owners and renters through a seamless, transparent platform
            </p>
          </div>

          {/* Mission Section */}
          <div className="glass-panel p-8 rounded-2xl mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground mb-4">
                  At FlatFinder, we're committed to revolutionizing the rental market by creating a platform that simplifies the process of finding and listing rental properties. We believe that everyone deserves access to quality housing that meets their specific needs and budget.
                </p>
                <p className="text-muted-foreground">
                  Our mission is to connect property owners with qualified tenants through a transparent, efficient, and user-friendly platform. We strive to make the rental process as smooth as possible for all parties involved.
                </p>
              </div>
              <div className="bg-secondary/30 rounded-2xl aspect-square flex items-center justify-center">
                <div className="text-9xl">🏠</div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Our Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-panel p-6 rounded-2xl">
                <div className="text-primary text-4xl mb-4">✨</div>
                <h3 className="text-xl font-semibold mb-2">Transparency</h3>
                <p className="text-muted-foreground">
                  We believe in clear communication and honest representation of all properties on our platform.
                </p>
              </div>
              <div className="glass-panel p-6 rounded-2xl">
                <div className="text-primary text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-semibold mb-2">Trust</h3>
                <p className="text-muted-foreground">
                  We prioritize building trust between property owners and renters through verification and reviews.
                </p>
              </div>
              <div className="glass-panel p-6 rounded-2xl">
                <div className="text-primary text-4xl mb-4">📱</div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously improve our platform with innovative features that enhance the rental experience.
                </p>
              </div>
              <div className="glass-panel p-6 rounded-2xl">
                <div className="text-primary text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-semibold mb-2">Inclusivity</h3>
                <p className="text-muted-foreground">
                  We're committed to creating a platform that serves the diverse needs of all renters and property owners.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="glass-panel p-6 rounded-2xl text-center">
                <div className="w-24 h-24 rounded-full bg-secondary mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-1">John Smith</h3>
                <p className="text-primary mb-2">CEO & Founder</p>
                <p className="text-muted-foreground">
                  With over 15 years of experience in real estate, John founded FlatFinder to address the inefficiencies in the rental market.
                </p>
              </div>
              <div className="glass-panel p-6 rounded-2xl text-center">
                <div className="w-24 h-24 rounded-full bg-secondary mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-1">Sarah Johnson</h3>
                <p className="text-primary mb-2">Chief Technology Officer</p>
                <p className="text-muted-foreground">
                  Sarah brings her expertise in technology to create a seamless platform that connects property owners and renters efficiently.
                </p>
              </div>
              <div className="glass-panel p-6 rounded-2xl text-center">
                <div className="w-24 h-24 rounded-full bg-secondary mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-1">David Lee</h3>
                <p className="text-primary mb-2">Head of Customer Experience</p>
                <p className="text-muted-foreground">
                  David ensures that both property owners and renters have a positive experience using the FlatFinder platform.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="glass-panel p-10 rounded-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Whether you're a property owner looking to list your property or a renter searching for your next home, FlatFinder is here to help. Join our growing community today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/list-property">List Your Property</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/properties">Find a Rental</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
