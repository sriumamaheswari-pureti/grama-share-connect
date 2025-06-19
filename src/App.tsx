
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useAuth } from "@/hooks/useAuth";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import ListItem from "./pages/ListItem";
import BrowseRentals from "./pages/BrowseRentals";
import ItemDetail from "./pages/ItemDetail";
import ContactOwner from "./pages/ContactOwner";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Navbar isAuthenticated={!!user} />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route 
                  path="/auth" 
                  element={user ? <Navigate to="/" replace /> : <Auth />} 
                />
                <Route 
                  path="/login" 
                  element={<Navigate to="/auth" replace />} 
                />
                <Route 
                  path="/signup" 
                  element={<Navigate to="/auth" replace />} 
                />
                <Route 
                  path="/dashboard" 
                  element={user ? <Dashboard /> : <Navigate to="/auth" replace />} 
                />
                <Route path="/list-item" element={<ListItem />} />
                <Route path="/rentals" element={<BrowseRentals />} />
                <Route path="/item/:id" element={<ItemDetail />} />
                <Route path="/contact/:ownerId" element={<ContactOwner />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
