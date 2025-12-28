import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

import UploadMedia from "./components/frontend-dt/UploadMedia";
import ViewFiles from "./components/frontend-dt/ViewFiles";

import EventManagement from "./components/services/Event Management";


function App() {
  return (
    <BrowserRouter>
      {/* Common Navbar */}
      <Navbar />

      <Routes>
        {/* Home page (contains narrative + services inside Home) */}
        <Route path="/" element={<Home />} />

        {/* Media pages */}
        <Route path="/uploadmedia" element={<UploadMedia />} />
        <Route path="/files" element={<ViewFiles />} />
        <Route path="/services/event-management" element={<EventManagement />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
