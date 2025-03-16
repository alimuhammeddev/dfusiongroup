import { Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import JoinUs from "./pages/JoinUs";
import Contact from "./pages/Contact";
import AboutDFG from "./pages/About";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<AboutDFG />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;