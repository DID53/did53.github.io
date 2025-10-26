import { HashRouter, Routes, Route } from "react-router-dom";
import MainWrapper from "./MainWrapper";
import HomeWrapper from "./HomeWrapper";
import SmartDesignWrapper from "./SmartDesignWrapper";
import ScrollToTop from "./ScrollToTop";
import CapstoneDesign from "./components/CapstoneDesign/CapstoneDesign";
import UXDesign from "./components/UXDesign/UXDesign";
import "./style.css";
import SmartDesignDetail from "./components/SmartDesign/SmartDesignDetail";

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        {/* <Route path="/" element={<Main />}></Route> */}
        <Route path="/" element={<MainWrapper />}></Route>

        <Route path="/home" element={<HomeWrapper />}></Route>

        <Route path="/smart-design" element={<SmartDesignWrapper />}></Route>
        <Route path="/smart-design/:id" element={<SmartDesignDetail />}></Route>

        <Route path="/capstone-design" element={<CapstoneDesign />}></Route>

        <Route path="/UX-design" element={<UXDesign />}></Route>
      </Routes>
    </HashRouter>
  );
}