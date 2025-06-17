
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ItemCard } from "@/components/ItemCard";
import { Search, Filter, SlidersHorizontal } from "lucide-react";

const BrowseRentals = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [location, setLocation] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Mock data for items
  const items = [
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
      category: "Sports & Recreation",
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
    {
      id: "4",
      name: "Acoustic Guitar",
      category: "Music & Audio",
      price: 20,
      priceUnit: "day" as const,
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=300&fit=crop",
      location: "Downtown",
      availability: "available" as const,
      owner: "Emma L.",
    },
    {
      id: "5",
      name: "Laptop Computer",
      category: "Electronics",
      price: 35,
      priceUnit: "day" as const,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      location: "Midtown",
      availability: "available" as const,
      owner: "Alex K.",
    },
    {
      id: "6",
      name: "Camping Tent",
      category: "Sports & Recreation",
      price: 30,
      priceUnit: "day" as const,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
      location: "Riverside",
      availability: "available" as const,
      owner: "Chris P.",
    },
  ];

  const categories = [
    "All Categories",
    "Electronics",
    "Tools",
    "Sports & Recreation",
    "Vehicles",
    "Home & Garden",
    "Photography",
    "Music & Audio",
    "Kitchen & Appliances",
    "Furniture",
  ];

  const locations = [
    "All Locations",
    "Downtown",
    "Uptown",
    "Midtown",
    "Riverside",
    "Westside",
    "Eastside",
  ];

  const priceRanges = [
    "All Prices",
    "$0 - $20",
    "$21 - $50",
    "$51 - $100",
    "$100+",
  ];

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
    setPriceRange("");
    setLocation("");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Browse Rentals</h1>
          <p className="text-gray-600">Find the perfect item for your needs</p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search for items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg"
            />
          </div>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            {/* Mobile Filter Toggle */}
            <div className="md:hidden mb-4">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="w-full"
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                {showFilters ? "Hide Filters" : "Show Filters"}
              </Button>
            </div>

            {/* Filter Options */}
            <div className={`space-y-4 md:space-y-0 md:grid md:grid-cols-4 md:gap-4 ${showFilters ? "block" : "hidden md:grid"}`}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Locations" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((loc) => (
                      <SelectItem key={loc} value={loc}>
                        {loc}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Prices" />
                  </SelectTrigger>
                  <SelectContent>
                    {priceRanges.map((range) => (
                      <SelectItem key={range} value={range}>
                        {range}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button variant="outline" onClick={clearFilters} className="w-full">
                  Clear Filters
                </Button>
              </div>
            </div>

            {/* Availability Filter */}
            <div className={`mt-4 ${showFilters ? "block" : "hidden md:block"}`}>
              <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Checkbox id="available" />
                  <label htmlFor="available" className="text-sm">Available Now</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="upcoming" />
                  <label htmlFor="upcoming" className="text-sm">Available Soon</label>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">{items.length} items found</p>
          <Select defaultValue="featured">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {items.map((item) => (
            <ItemCard key={item.id} {...item} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center">
          <div className="flex space-x-2">
            <Button variant="outline" disabled>Previous</Button>
            <Button className="bg-blue-600 text-white">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseRentals;
