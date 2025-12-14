import { Link } from "react-router-dom";
import "./MainMobile.css";

export default function MainMobile() {
  return (
    <div className="mobile-main-container">
      <div className="banner-wrapper">
        <span className="banner-left">53rd</span>
        <span className="banner-center">DID Graduation Exhibition</span>
        <Link to="/home" className="banner-click-area">
          <img src="/images/get_start_button_mobile.png" alt="get start" />
        </Link>
      </div>

      {/* <span className="mobile-bottom-text">
        인덕대학교 디지털산업디자인학과
        <br /> 2025학년도 졸업전시 <br />
        Induk University Digital Industrial Design
        <br />
        Department 2025 Graduation Exhibition
      </span> */}
    </div>
  );
}
