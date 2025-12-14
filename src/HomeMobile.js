import Dropdown from "./components/Dropdown";
import "./HomeMobile.css";

export default function HomeWrapper() {
  return (
    <div className="mobile-body">
      <div className="mobile-container">
        <div className="header-container">
          <div className="header-left-wrapper">
            <div className="header-title semi-bold">휘광</div>
            <div className="header-left semi-bold">
              <p>Digital Industrial Design</p>
              <p>Graduation Exhibition</p>
            </div>
          </div>
          <div className="header-right">
            <div className="insta-link-wrapper">
              <a
                className="semi-bold insta-link"
                href="https://www.instagram.com/did25.official/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 14 }}
              >
                Insta
              </a>
            </div>
            <Dropdown />
          </div>
        </div>

        <img
          src="images/home_mobile.png"
          className="home_mobile"
          style={{ marginTop: 80 }}
        />
      </div>
    </div>
  );
}
