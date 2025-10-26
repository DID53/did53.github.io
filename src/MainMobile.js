import { Link } from "react-router-dom";
import "./MainMobile.css";

export default function Main() {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <img
        src="images/main_page.gif"
        alt="main page"
        className="background-img"
      />

      <div className="center-content">
        <span className="mobile-main-text"> 모바일 <br />輝光 </span>
        <Link to="/home">
          <button className="mobile-enter-btn">ENTER</button>
        </Link>
      </div>

      <span className="mobile-bottom-text">
        인덕대학교 디지털산업디자인학과<br />2025학년도 졸업전시 <br /><br />
        Induk University Digital Industrial Design<br/> Department 2025 Graduation Exhibition
      </span>
    </div>

  );
}
