
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ItemCard } from "@/components/ItemCard";
import { Plus, Star, DollarSign, Package, Calendar } from "lucide-react";

const Dashboard = () => {
  const [user] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    avatar: "",
    rating: 4.8,
    totalEarnings: 1250,
    activeListings: 3,
    completedRentals: 12,
  });

  // Mock data for user's listings
  const userListings = [
    {
      id: "1",
      name: "Professional DSLR Camera",
      category: "Electronics",
      price: 45,
      priceUnit: "day" as const,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      location: "Downtown",
      availability: "available" as const,
      owner: "You",
    },
    {
      id: "2",
      name: "Power Drill Set",
      category: "Tools",
      price: 15,
      priceUnit: "day" as const,
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop",
      location: "Downtown",
      availability: "rented" as const,
      owner: "You",
    },
  ];

  // Mock data for rental history
  const rentalHistory = [
    {
      id: "1",
      itemName: "Mountain Bike",
      owner: "Sarah M.",
      date: "2024-01-15",
      duration: "3 days",
      total: 75,
      status: "completed",
    },
    {
      id: "2",
      itemName: "Pressure Washer",
      owner: "Mike R.",
      date: "2024-01-10",
      duration: "1 day",
      total: 30,
      status: "completed",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Manage your rentals and account</p>
        </div>

        {/* Profile Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <Card className="lg:col-span-1">
            <CardHeader className="text-center">
              <Avatar className="w-20 h-20 mx-auto mb-4">
                <AvatarImage src={user.avatar} />
                <AvatarFallback className="text-lg">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-xl">{user.name}</CardTitle>
              <CardDescription>{user.email}</CardDescription>
              <div className="flex items-center justify-center space-x-1 mt-2">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium">{user.rating}</span>
              </div>
            </CardHeader>
          </Card>

          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Earnings</p>
                    <p className="text-2xl font-bold text-green-600">${user.totalEarnings}</p>
                  </div>
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Active Listings</p>
                    <p className="text-2xl font-bold text-blue-600">{user.activeListings}</p>
                  </div>
                  <Package className="w-8 h-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Completed Rentals</p>
                    <p className="text-2xl font-bold text-purple-600">{user.completedRentals}</p>
                  </div>
                  <Calendar className="w-8 h-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="listings" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="listings">My Listings</TabsTrigger>
            <TabsTrigger value="rentals">Rental History</TabsTrigger>
            <TabsTrigger value="settings">Account Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="listings" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">My Listings</h2>
              <Link to="/list-item">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Plus className="w-4 h-4 mr-2" />
                  List New Item
                </Button>
              </Link>
            </div>

            {userListings.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {userListings.map((item) => (
                  <ItemCard key={item.id} {...item} />
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="p-12 text-center">
                  <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No listings yet</h3>
                  <p className="text-gray-600 mb-6">Start earning by listing your first item</p>
                  <Link to="/list-item">
                    <Button>List Your First Item</Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="rentals" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Rental History</h2>
            
            <div className="space-y-4">
              {rentalHistory.map((rental) => (
                <Card key={rental.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <div className="space-y-1">
                        <h3 className="font-semibold text-lg">{rental.itemName}</h3>
                        <p className="text-gray-600">Rented from {rental.owner}</p>
                        <p className="text-sm text-gray-500">
                          {rental.date} • {rental.duration}
                        </p>
                      </div>
                      <div className="text-right space-y-2">
                        <p className="text-2xl font-bold text-green-600">${rental.total}</p>
                        <Badge variant="secondary">
                          {rental.status}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Account Settings</h2>
            
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your personal information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">First Name</label>
                    <p className="text-gray-600">John</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Last Name</label>
                    <p className="text-gray-600">Doe</p>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <p className="text-gray-600">{user.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Phone</label>
                  <p className="text-gray-600">{user.phone}</p>
                </div>
                <Button variant="outline">Edit Profile</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Account Security</CardTitle>
                <CardDescription>Manage your password and security settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline">Change Password</Button>
                <Button variant="outline">Two-Factor Authentication</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
