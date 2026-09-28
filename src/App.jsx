import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import Specialties from "./Pages/Specialties";

import Hospital from "./Pages/Hospital";
import Admin from "./Pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/specialties" element={<Specialties />} />

        <Route path="/hospital" element={<Hospital />} />
   <Route path="/admin" element={<Admin />} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;