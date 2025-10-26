import { useMediaQuery } from "react-responsive";
import SmartDesign from "./components/SmartDesign/SmartDesign";
import SmartDesignMobile from "./components/SmartDesign/SmartDesignMobile";

export default function SmartDesignWrapper() {
  const isMobile = useMediaQuery({ maxWidth: 768 }); // 768px 이하면 모바일

  return isMobile ? <SmartDesignMobile /> : <SmartDesign />;
}