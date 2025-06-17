
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Star, Phone, MessageCircle, Send } from "lucide-react";

const ContactOwner = () => {
  const { ownerId } = useParams();
  const { toast } = useToast();
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Mock data for the owner
  const owner = {
    id: ownerId,
    name: "John Doe",
    avatar: "",
    rating: 4.8,
    reviewCount: 23,
    responseTime: "Usually responds within 1 hour",
    joinedDate: "Member since 2023",
    phone: "+1 (555) 123-4567",
    whatsapp: "+1 (555) 123-4567",
    bio: "Photography enthusiast and tech lover. I enjoy sharing my equipment with fellow creatives in the community. Always happy to help with setup and usage tips!",
    recentItems: [
      "Professional DSLR Camera",
      "Mirrorless Camera",
      "Studio Lighting Kit",
    ],
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate message sending
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Message Sent",
        description: `Your message has been sent to ${owner.name}. They'll get back to you soon!`,
      });
      setMessage("");
      setSubject("");
    }, 1000);
  };

  const handleWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${owner.whatsapp.replace(/\D/g, '')}?text=Hi, I'm interested in renting one of your items from Grama Rental.`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${owner.phone}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <div className="mb-6">
          <Link to="/rentals" className="flex items-center text-blue-600 hover:text-blue-700">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Rentals
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Owner Profile */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={owner.avatar} />
                  <AvatarFallback className="text-xl">
                    {owner.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl">{owner.name}</CardTitle>
                <div className="flex items-center justify-center space-x-1 mt-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-medium">{owner.rating}</span>
                  <span className="text-gray-500">({owner.reviewCount})</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm text-gray-600">
                  <p>{owner.responseTime}</p>
                  <p>{owner.joinedDate}</p>
                </div>

                <div>
                  <h4 className="font-medium mb-2">About</h4>
                  <p className="text-sm text-gray-600">{owner.bio}</p>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Recent Items</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {owner.recentItems.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>

                {/* Quick Contact Buttons */}
                <div className="space-y-2 pt-4 border-t">
                  <Button 
                    onClick={handleCall}
                    variant="outline" 
                    className="w-full"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call {owner.phone}
                  </Button>
                  <Button 
                    onClick={handleWhatsApp}
                    variant="outline" 
                    className="w-full text-green-600 border-green-600 hover:bg-green-50"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Get in touch with {owner.name} about their rental items
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="e.g., Interested in renting your camera"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Hi! I'm interested in renting your item. Could you please let me know about availability and pickup details?"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    disabled={isLoading}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>

                {/* Quick Message Templates */}
                <div className="mt-8 pt-6 border-t">
                  <h4 className="font-medium mb-4">Quick Message Templates</h4>
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSubject("Rental Inquiry");
                        setMessage("Hi! I'm interested in renting one of your items. Could you please share the availability and rental details?");
                      }}
                      className="w-full text-left justify-start"
                    >
                      General rental inquiry
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSubject("Pickup Details");
                        setMessage("Hello! I'd like to know more about the pickup location and timing for your rental items. When would be a good time to coordinate?");
                      }}
                      className="w-full text-left justify-start"
                    >
                      Ask about pickup details
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSubject("Usage Instructions");
                        setMessage("Hi! I'm planning to rent your item and would appreciate any usage tips or special instructions you might have. Thanks!");
                      }}
                      className="w-full text-left justify-start"
                    >
                      Request usage instructions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Safety Tips */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Safety Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Always meet in a public, well-lit location</li>
                  <li>• Inspect the item before payment</li>
                  <li>• Keep communication within the platform</li>
                  <li>• Take photos of the item condition</li>
                  <li>• Report any suspicious behavior</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactOwner;
