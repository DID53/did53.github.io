import { useMediaQuery } from "react-responsive";
import Main from "./Main";
import MainMobile from "./MainMobile"; // 새로 만든 모바일용 컴포넌트

export default function MainWrapper() {
  const isMobile = useMediaQuery({ maxWidth: 768 }); // 768px 이하면 모바일

  return isMobile ? <MainMobile /> : <Main />;
}
