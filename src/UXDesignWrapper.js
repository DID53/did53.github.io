import { useMediaQuery } from "react-responsive";
import UXDesign from "./components/UXDesign/UXDesign";
import UXDesignMobile from "./components/UXDesign/UXDesignMobile";

export default function UXDesignWrapper() {
  const isMobile = useMediaQuery({ maxWidth: 768 }); // 768px 이하면 모바일

  return isMobile ? <UXDesignMobile /> : <UXDesign />;
}