/* =============================================================
   App — Salt & Sage Warm Editorial Luxury
   Light theme, single-page layout
   ============================================================= */

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Reporting from "./pages/Reporting";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import CaseStudies from "./pages/CaseStudies";
import About from "./pages/About";

function SiteRouter() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/reporting" component={Reporting} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/blog" component={Blog} />
      <Route path="/case-studies" component={CaseStudies} />
      <Route path="/about" component={About} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster
            toastOptions={{
              style: {
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: "0.9rem",
              },
            }}
          />
          <Router hook={useHashLocation}>
            <SiteRouter />
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
