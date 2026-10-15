
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { SolutionPage, ProjectPage, ProjectsPage, CheckPage, AboutPage, ContactPage } from './pages/ContentPages';
import { sitePages, projectPages } from './content/catalog';
import Index from "./pages/Index";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import AGB from "./pages/AGB";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/agb" element={<AGB />} />
          {sitePages.map(page => <Route key={page.slug} path={'/' + page.slug} element={<SolutionPage slug={page.slug} />} />)}
          {projectPages.map(page => <Route key={page.slug} path={'/projekte/' + page.slug} element={<ProjectPage slug={page.slug} />} />)}
          <Route path="/projekte" element={<ProjectsPage />} />
          <Route path="/prozess-check" element={<CheckPage />} />
          <Route path="/ueber-mich" element={<AboutPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
