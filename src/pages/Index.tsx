
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ItemCard } from "@/components/ItemCard";
import { CheckCircle, Users, Shield, DollarSign, Search, Plus } from "lucide-react";

const Index = () => {
  // Mock data for featured items
  const featuredItems = [
    {
      id: "1",
      name: "Professional DSLR Camera",
      category: "Electronics",
      price: 45,
      priceUnit: "day" as const,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      location: "Downtown",
      availability: "available" as const,
      owner: "John D.",
    },
    {
      id: "2",
      name: "Mountain Bike",
      category: "Sports",
      price: 25,
      priceUnit: "day" as const,
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop",
      location: "Riverside",
      availability: "available" as const,
      owner: "Sarah M.",
    },
    {
      id: "3",
      name: "Power Drill Set",
      category: "Tools",
      price: 15,
      priceUnit: "day" as const,
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop",
      location: "Uptown",
      availability: "rented" as const,
      owner: "Mike R.",
    },
  ];

  const features = [
    {
      icon: DollarSign,
      title: "Affordable Access",
      description: "Get access to items you need without the full purchase price. Save money and space.",
    },
    {
      icon: Users,
      title: "Local Connections",
      description: "Connect with neighbors in your community. Build relationships while sharing resources.",
    },
    {
      icon: Shield,
      title: "Verified Users",
      description: "All users are verified for safety and trust. Rent with confidence knowing you're protected.",
    },
  ];

  const testimonials = [
    {
      name: "Emily Johnson",
      text: "I saved hundreds of dollars renting a pressure washer instead of buying one. The owner was super helpful too!",
      rating: 5,
    },
    {
      name: "David Chen",
      text: "Great platform for renting out my camera equipment when I'm not using it. Easy extra income!",
      rating: 5,
    },
    {
      name: "Maria Rodriguez",
      text: "Found exactly what I needed for my DIY project. Much cheaper than buying and the quality was excellent.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                Rent Anything,{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Share Everything
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Connect with your neighbors to rent, share, and access the items you need. 
                From tools to tech, find it locally and affordably.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/rentals">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
                  <Search className="w-5 h-5 mr-2" />
                  Browse Rentals
                </Button>
              </Link>
              <Link to="/list-item">
                <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                  <Plus className="w-5 h-5 mr-2" />
                  List an Item
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <Badge variant="secondary" className="px-4 py-2">
                <CheckCircle className="w-4 h-4 mr-2" />
                Verified Users
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <CheckCircle className="w-4 h-4 mr-2" />
                Local Community
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <CheckCircle className="w-4 h-4 mr-2" />
                Safe & Secure
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose Grama Rental?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join a community that believes in sharing resources and building connections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Featured Rentals
            </h2>
            <p className="text-xl text-gray-600">
              Discover popular items available in your community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredItems.map((item) => (
              <ItemCard key={item.id} {...item} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/rentals">
              <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
                View All Rentals
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What Our Community Says
            </h2>
            <p className="text-xl text-gray-600">
              Real experiences from real people in our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-lg">★</span>
                      ))}
                    </div>
                    <p className="text-gray-600 italic">"{testimonial.text}"</p>
                    <p className="font-semibold text-gray-900">- {testimonial.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Start Sharing?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join thousands of community members who are already saving money and building connections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                  Get Started Today
                </Button>
              </Link>
              <Link to="/rentals">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
                  Explore Rentals
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
