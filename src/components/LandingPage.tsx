
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface LandingPageProps {
  onGuestAccess: () => void;
}

export const LandingPage = ({ onGuestAccess }: LandingPageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">GR</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Grama Rental</span>
          </div>

          <div className="space-y-4">
            <Link to="/login" className="block">
              <Button size="lg" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-6">
                Login
              </Button>
            </Link>
            
            <Link to="/signup" className="block">
              <Button size="lg" variant="outline" className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-lg py-6">
                Sign Up
              </Button>
            </Link>

            <Button 
              size="lg" 
              variant="ghost" 
              className="w-full text-gray-600 hover:text-gray-800 text-lg py-6"
              onClick={onGuestAccess}
            >
              Continue as Guest
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
