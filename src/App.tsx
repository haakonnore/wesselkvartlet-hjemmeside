import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MetaPixel from "./components/MetaPixel";
import Index from "./pages/Index";
import WesselEnergi from "./pages/WesselEnergi";
import OmProsjektet from "./pages/OmProsjektet";
import Lokaler from "./pages/Lokaler";
import Bod from "./pages/Bod";
import Parkering from "./pages/Parkering";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MetaPixel />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/wessel-energi" element={<WesselEnergi />} />
          <Route path="/om-prosjektet" element={<OmProsjektet />} />
          <Route path="/parkering" element={<Parkering />} />
          <Route path="/lokaler" element={<Lokaler />} />
          <Route path="/bod" element={<Bod />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
