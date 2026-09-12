import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components/Layout";
import { RouteEffects } from "./components/Seo";
import HomePage from "./pages/HomePage";
import TreatmentDetailPage from "./pages/TreatmentDetailPage";
import {
  TreatmentsPage,
  TechnologiesPage,
  ResultsPage,
  FAQPage,
  ContactPage,
  NotFoundPage,
} from "./pages/InfoPages";
export default function App() {
  return (
    <BrowserRouter>
      <RouteEffects />
      <Header />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tratamentos" element={<TreatmentsPage />} />
          <Route path="/tratamentos/:slug" element={<TreatmentDetailPage />} />
          <Route path="/tecnologias" element={<TechnologiesPage />} />
          <Route path="/resultados" element={<ResultsPage />} />
          <Route path="/duvidas-frequentes" element={<FAQPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
