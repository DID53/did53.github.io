import { Link } from "react-router-dom";
import "./Main.css";

export default function Main() {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>

      <div className="center-content">
        <Link to="/home">
          <img
            src="images/main_page2.png"
            alt="main page"
            className="background-img"
          />
        </Link>
        <span className="main-text"> 휘광 <br />輝光 </span>
      </div>

      <span className="bottom-text">
        인덕대학교 디지털산업디자인학과 2025학년도 졸업전시 <br />
        Induk University Digital Industrial Design Department 2025 Graduation Exhibition
      </span>
    </div>

  );
}
