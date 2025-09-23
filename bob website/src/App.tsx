import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Mainpage from "./pages/InstantGamingPage";
import ServicesPage from "./pages/ServicesPage";
import GamePage from "./pages/GamePage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/subscription_and_services" element={<ServicesPage />} />
        <Route path="/game/:gameId" element={<GamePage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;