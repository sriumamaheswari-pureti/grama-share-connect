
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";

interface ItemCardProps {
  id: string;
  name: string;
  category: string;
  price: number;
  priceUnit: "day" | "hour";
  image: string;
  location: string;
  availability: "available" | "rented" | "unavailable";
  owner: string;
}

export const ItemCard = ({
  id,
  name,
  category,
  price,
  priceUnit,
  image,
  location,
  availability,
  owner,
}: ItemCardProps) => {
  const availabilityColors = {
    available: "bg-green-100 text-green-800",
    rented: "bg-red-100 text-red-800",
    unavailable: "bg-gray-100 text-gray-800",
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge
          className={`absolute top-2 right-2 ${availabilityColors[availability]}`}
        >
          {availability}
        </Badge>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-lg line-clamp-1">{name}</h3>
            <div className="text-right">
              <p className="text-xl font-bold text-blue-600">
                ${price}
              </p>
              <p className="text-xs text-gray-500">per {priceUnit}</p>
            </div>
          </div>

          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>

          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>By {owner}</span>
            </div>
          </div>

          <div className="pt-2">
            <Link to={`/item/${id}`}>
              <Button 
                className="w-full" 
                disabled={availability !== "available"}
              >
                {availability === "available" ? "View Details" : "Not Available"}
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
