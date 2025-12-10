import { HashRouter, Routes, Route } from "react-router-dom";
import MainWrapper from "./MainWrapper";
import HomeWrapper from "./HomeWrapper";
import SmartDesignWrapper from "./SmartDesignWrapper";
import CapstoneDesignWrapper from "./CapstoneDesignWrapper";
import UXDesignWrapper from "./UXDesignWrapper";
import ScrollToTop from "./ScrollToTop";
import "./style.css";
import SmartDesignDetail from "./components/SmartDesign/SmartDesignDetail";
import CapstoneDesignDetail from "./components/CapstoneDesign/CapstoneDesignDetail";
import UXDesignDetail from "./components/UXDesign/UXDesignDetail";

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainWrapper />}></Route>
        <Route path="/home" element={<HomeWrapper />}></Route>

        <Route path="/smart-design" element={<SmartDesignWrapper />}></Route>
        <Route path="/smart-design/:id" element={<SmartDesignDetail />}></Route>

        <Route path="/capstone-design" element={<CapstoneDesignWrapper />}></Route>
        <Route path="/capstone-design/:id" element={<CapstoneDesignDetail />}></Route>

        <Route path="/UX-design" element={<UXDesignWrapper />}></Route>
        <Route path="/UX-design/:id" element={<UXDesignDetail />}></Route>
      </Routes>
    </HashRouter>
  );
}
