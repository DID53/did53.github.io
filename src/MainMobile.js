import { Link } from "react-router-dom";
import "./MainMobile.css";

export default function Main() {
  return (
    <div className="main-container mobile-main-container">
      <div className="banner-wrapper">
        <img src="images/main_mobile_bar.png" alt="banner" className="top-banner" />
        <Link to="/home" className="banner-click-area" />
      </div>
      <span className="mobile-bottom-text">
        인덕대학교 디지털산업디자인학과<br/> 2025학년도 졸업전시 <br />
        Induk University Digital Industrial Design<br/>
        Department 2025 Graduation Exhibition
      </span>
    </div>
  );
}
