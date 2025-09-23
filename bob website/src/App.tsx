import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Mainpage from "./pages/InstantGamingPage";
import ServicesPage from "./pages/ServicesPage";


const Main = () => <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center"><h1 className="text-4xl">Main Page</h1></div>;

// Mock products data


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
        <Route path="/" element={<Mainpage/>} />
        <Route path="/subscription_and_services" element={<ServicesPage />} />

      </Routes>
      {/* <Toaster position="top-center" toastOptions={{ duration: 4000 }} /> */}
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