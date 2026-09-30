import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import Specialties from "./Pages/Specialties";

import Hospital from "./Pages/Hospital";
import Admin from "./Pages/Admin";
import Appointment from "./Pages/Appointment";
import Doctor from "./Pages/Doctor";
import Contact from "./Pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/specialties" element={<Specialties />} />
        <Route path="/hospital" element={<Hospital />} />
        <Route path="/admin" element={<Admin />} />
         <Route path="/doctor" element={<Doctor />} />
            <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;