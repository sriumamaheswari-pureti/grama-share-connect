
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LandingPage } from "@/components/LandingPage";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ListItem from "./pages/ListItem";
import BrowseRentals from "./pages/BrowseRentals";
import ItemDetail from "./pages/ItemDetail";
import ContactOwner from "./pages/ContactOwner";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isGuest, setIsGuest] = useState(false);

  // Check if user should have access to the main app
  const hasAccess = isAuthenticated || isGuest;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            {!hasAccess ? (
              // Show landing page with login/signup options
              <Routes>
                <Route 
                  path="/login" 
                  element={<Login onLogin={() => setIsAuthenticated(true)} />} 
                />
                <Route 
                  path="/signup" 
                  element={<Signup onSignup={() => setIsAuthenticated(true)} />} 
                />
                <Route 
                  path="*" 
                  element={
                    <LandingPage 
                      onGuestAccess={() => setIsGuest(true)}
                    />
                  } 
                />
              </Routes>
            ) : (
              // Show main app
              <>
                <Navbar isAuthenticated={isAuthenticated} />
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/login" element={<Navigate to="/" replace />} />
                    <Route path="/signup" element={<Navigate to="/" replace />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/list-item" element={<ListItem />} />
                    <Route path="/rentals" element={<BrowseRentals />} />
                    <Route path="/item/:id" element={<ItemDetail />} />
                    <Route path="/contact/:ownerId" element={<ContactOwner />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
                <Footer />
              </>
            )}
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
