
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Clock, 
  Star, 
  Shield, 
  MessageCircle, 
  Phone, 
  Calendar,
  ArrowLeft,
  Heart,
  Share2
} from "lucide-react";

const ItemDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [isFavorited, setIsFavorited] = useState(false);

  // Mock data for the item
  const item = {
    id: id,
    name: "Professional DSLR Camera",
    category: "Electronics",
    description: "Canon EOS R5 with 24-70mm lens. Perfect for photography enthusiasts, events, and professional shoots. Includes battery charger, memory card, and camera bag. Well-maintained and regularly serviced.",
    price: 45,
    priceUnit: "day",
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop",
    ],
    location: "Downtown",
    availability: "available",
    owner: {
      name: "John Doe",
      avatar: "",
      rating: 4.8,
      reviewCount: 23,
      responseTime: "Usually responds within 1 hour",
      joinedDate: "Member since 2023",
    },
    features: [
      "24.1MP Full-Frame CMOS Sensor",
      "4K Video Recording",
      "In-Body Image Stabilization",
      "Dual Pixel CMOS AF",
      "Weather Sealed",
    ],
    rules: [
      "No smoking around equipment",
      "Handle with care",
      "Return fully charged",
      "Report any damage immediately",
    ],
    reviews: [
      {
        id: 1,
        user: "Sarah M.",
        rating: 5,
        date: "2 weeks ago",
        comment: "Amazing camera! John was very helpful and the equipment was in perfect condition.",
      },
      {
        id: 2,
        user: "Mike R.",
        rating: 5,
        date: "1 month ago",
        comment: "Great quality and fair pricing. Smooth rental process.",
      },
    ],
  };

  const [selectedImage, setSelectedImage] = useState(0);

  const handleRequestRent = () => {
    toast({
      title: "Rental Request Sent",
      description: "The owner has been notified of your interest. They'll contact you soon!",
    });
  };

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
    toast({
      title: isFavorited ? "Removed from favorites" : "Added to favorites",
      description: isFavorited ? "Item removed from your favorites" : "Item saved to your favorites",
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied",
      description: "Share link copied to clipboard",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <div className="mb-6">
          <Link to="/rentals" className="flex items-center text-blue-600 hover:text-blue-700">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Rentals
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img
                    src={item.images[selectedImage]}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge
                    className={`absolute top-4 right-4 ${
                      item.availability === "available" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {item.availability}
                  </Badge>
                </div>
                
                {item.images.length > 1 && (
                  <div className="p-4 flex space-x-2 overflow-x-auto">
                    {item.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                          selectedImage === index ? "border-blue-500" : "border-gray-200"
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${item.name} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Item Details */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <h1 className="text-3xl font-bold text-gray-900">{item.name}</h1>
                      <Button variant="ghost" size="sm" onClick={handleFavorite}>
                        <Heart className={`w-5 h-5 ${isFavorited ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={handleShare}>
                        <Share2 className="w-5 h-5 text-gray-400" />
                      </Button>
                    </div>
                    <Badge variant="secondary">{item.category}</Badge>
                    <div className="flex items-center space-x-4 text-gray-600">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>Available daily</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-blue-600">${item.price}</p>
                    <p className="text-gray-500">per {item.priceUnit}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Description</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-lg mb-3">Features</h3>
                  <ul className="space-y-2">
                    {item.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <Shield className="w-4 h-4 text-green-600" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-lg mb-3">Rental Rules</h3>
                  <ul className="space-y-2">
                    {item.rules.map((rule, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        <span className="text-gray-600">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card>
              <CardHeader>
                <CardTitle>Reviews ({item.reviews.length})</CardTitle>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-medium">{item.owner.rating}</span>
                  </div>
                  <span className="text-gray-500">({item.owner.reviewCount} reviews)</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {item.reviews.map((review) => (
                  <div key={review.id} className="space-y-2">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center space-x-2">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback>{review.user[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{review.user}</p>
                          <p className="text-sm text-gray-500">{review.date}</p>
                        </div>
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 ml-10">{review.comment}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Rental Card */}
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Request to Rent</CardTitle>
                <CardDescription>
                  Contact the owner to arrange your rental
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div>
                    <p className="text-2xl font-bold text-blue-600">${item.price}</p>
                    <p className="text-sm text-gray-600">per {item.priceUnit}</p>
                  </div>
                  <Calendar className="w-8 h-8 text-blue-600" />
                </div>

                <Button 
                  onClick={handleRequestRent}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  disabled={item.availability !== "available"}
                >
                  {item.availability === "available" ? "Request to Rent" : "Not Available"}
                </Button>

                <div className="flex space-x-2">
                  <Link to={`/contact/${item.owner.name}`} className="flex-1">
                    <Button variant="outline" className="w-full">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Message
                    </Button>
                  </Link>
                  <Button variant="outline" className="flex-1">
                    <Phone className="w-4 h-4 mr-2" />
                    Call
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Owner Card */}
            <Card>
              <CardHeader>
                <CardTitle>Item Owner</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={item.owner.avatar} />
                    <AvatarFallback>
                      {item.owner.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{item.owner.name}</p>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{item.owner.rating}</span>
                      <span className="text-sm text-gray-500">({item.owner.reviewCount})</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  <p>{item.owner.responseTime}</p>
                  <p>{item.owner.joinedDate}</p>
                </div>

                <Link to={`/contact/${item.owner.name}`}>
                  <Button variant="outline" className="w-full">
                    View Profile
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
