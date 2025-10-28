import { HashRouter, Routes, Route } from "react-router-dom";
import MainWrapper from "./MainWrapper";
import HomeWrapper from "./HomeWrapper";
import SmartDesignWrapper from "./SmartDesignWrapper";
import ScrollToTop from "./ScrollToTop";
import CapstoneDesign from "./components/CapstoneDesign/CapstoneDesign";
import UXDesignWrapper from "./UXDesignWrapper";
import "./style.css";
import SmartDesignDetail from "./components/SmartDesign/SmartDesignDetail";
import UXDesignDetail from "./components/UXDesign/UXDesignDetail";

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

        <Route path="/UX-design" element={<UXDesignWrapper />}></Route>
        <Route path="/UX-design/:id" element={<UXDesignDetail />}></Route>
      </Routes>
    </HashRouter>
  );
}
