import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import InstantGamingPage from "./pages/InstantGamingPage";
import TestPage from "./pages/TestPage";

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
        <Route path="/" element={<Main />} />
        <Route path="/instant-gaming" element={<InstantGamingPage />} />
        <Route path="/test" element={<TestPage />} />
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