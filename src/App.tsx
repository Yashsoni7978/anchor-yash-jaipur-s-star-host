import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ScrollToTop } from "./components/ScrollToTop";
import { StickyMobileContact } from "./components/StickyMobileContact"; 

// ✅ LAZY LOADING
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Anchoring = lazy(() => import("./pages/Anchoring"));
const EventManagement = lazy(() => import("./pages/EventManagement"));
const EventDesigning = lazy(() => import("./pages/EventDesigning"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

// SEO Landing Pages
const WeddingAnchorJaipur = lazy(() => import("./pages/WeddingAnchorJaipur"));
const EventManagementJaipur = lazy(() => import("./pages/EventManagementJaipur"));
const EventPlanningJaipur = lazy(() => import("./pages/EventPlanningJaipur"));
const SangeetAnchorJaipur = lazy(() => import("./pages/SangeetAnchorJaipur"));
const CorporateEventAnchorJaipur = lazy(() => import("./pages/CorporateEventAnchorJaipur"));
const DestinationWeddingAnchorRajasthan = lazy(() => import("./pages/DestinationWeddingAnchorRajasthan"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
  </div>
);

const App = () => {
  // 🔧 FIX: Cast HelmetProvider to 'any' to satisfy TypeScript
  const HelmetProviderWrapper = HelmetProvider as any;

  return (
    <HelmetProviderWrapper>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            
            <Suspense fallback={<PageLoader />}>
              <Routes>
                {/* Core Pages */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/anchoring" element={<Anchoring />} />
                <Route path="/services" element={<Anchoring />} />
                <Route path="/event-management" element={<EventManagement />} />
                <Route path="/event-designing" element={<EventDesigning />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/videos" element={<Portfolio />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />

                {/* SEO Landing Pages */}
                <Route path="/wedding-anchor-jaipur" element={<WeddingAnchorJaipur />} />
                <Route path="/event-management-jaipur" element={<EventManagementJaipur />} />
                <Route path="/event-planning-jaipur" element={<EventPlanningJaipur />} />
                <Route path="/sangeet-anchor-jaipur" element={<SangeetAnchorJaipur />} />
                <Route path="/corporate-event-anchor-jaipur" element={<CorporateEventAnchorJaipur />} />
                <Route path="/destination-wedding-anchor-rajasthan" element={<DestinationWeddingAnchorRajasthan />} />
                
                {/* 404 Page */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>

            <StickyMobileContact />
            
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProviderWrapper>
  );
};

export default App;

