import { useMediaQuery } from "react-responsive";
import CapstoneDesign from "./components/CapstoneDesign/CapstoneDesign";
import CapstoneDesignMobile from "./components/CapstoneDesign/CapstoneDesignMobile";

export default function CapstoneDesignWrapper() {
  const isMobile = useMediaQuery({ maxWidth: 768 }); // 768px 이하면 모바일

  return isMobile ? <CapstoneDesignMobile /> : <CapstoneDesign />;
}