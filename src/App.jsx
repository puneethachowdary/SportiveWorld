import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Cricket from "./pages/Cricket";
import Formula1 from "./pages/Formula1";
import Kabaddi from "./pages/Kabaddi";
import Players from "./pages/Players";
import Tournaments from "./pages/Tournaments";
import Records from "./pages/Records";
import About from "./pages/About";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("sportive-theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return true;
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );

    localStorage.setItem(
      "sportive-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <BrowserRouter>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cricket" element={<Cricket />} />
        <Route path="/formula1" element={<Formula1 />} />
        <Route path="/kabaddi" element={<Kabaddi />} />
        <Route path="/players" element={<Players />} />
        <Route path="/tournaments" element={<Tournaments />} />
        <Route path="/records" element={<Records />} />
        <Route path="/about" element={<About />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;