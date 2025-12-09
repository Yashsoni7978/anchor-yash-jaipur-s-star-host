import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Anchoring from "./pages/Anchoring";
import EventManagement from "./pages/EventManagement";
import EventDesigning from "./pages/EventDesigning";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import WeddingAnchorJaipur from "@/pages/WeddingAnchorJaipur";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/anchoring" element={<Anchoring />} />
          <Route path="/services" element={<Anchoring />} /> {/* Redirect old URL */}
          <Route path="/event-management" element={<EventManagement />} />
          <Route path="/event-designing" element={<EventDesigning />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/videos" element={<Portfolio />} /> {/* Redirect old URL */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wedding-anchor-jaipur"element={<WeddingAnchorJaipur />}/>

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
