import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WesselEnergi from "./pages/WesselEnergi";
import HistorienOmWesselkvartalet from "./pages/HistorienOmWesselkvartalet";
import FraFamilietomtTilByutvikling from "./pages/FraFamilietomtTilByutvikling";
import Arkitektur from "./pages/Arkitektur";
import ArkitektoniskKvalitet from "./pages/ArkitektoniskKvalitet";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/wessel-energi" element={<WesselEnergi />} />
          <Route path="/historien-om-wesselkvartalet" element={<HistorienOmWesselkvartalet />} />
          <Route path="/fra-familietomt-til-byutvikling" element={<FraFamilietomtTilByutvikling />} />
          <Route path="/arkitektur" element={<Arkitektur />} />
          <Route path="/arkitektonisk-kvalitet" element={<ArkitektoniskKvalitet />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
