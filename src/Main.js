import { Link } from "react-router-dom";
import "./Main.css";

export default function Main() {
  return (
    <div className="main-container">
      <div className="banner-wrapper">
        <span className="banner-left">53rd</span>
        <span className="banner-center">DID Graduation Exhibition</span>
        <Link to="/home" className="banner-click-area">
          <img src="/images/get_start_button.png" alt="get start" />
        </Link>
      </div>
      <span className="bottom-text">
        인덕대학교 디지털산업디자인학과 2025학년도 졸업전시 <br />
        Induk University Digital Industrial Design Department 2025 Graduation
        Exhibition
      </span>
    </div>
  );
}
