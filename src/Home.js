import Subjects from "./Subjects.js";
import "./Home.css";
import "./components/Subject.css"; // CSS 분리 가능

export default function Home() {
  return (
    <div className="container">
      {/* Header */}

      {/* Main */}
      <main>
        <div className="home_row">
          <img src="images/home_title2.png" className="home_photo" />
          <div className="insta-link-wrapper">
            <a
              className="semi-bold insta-link"
              href="https://www.instagram.com/did25.official/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Insta
            </a>
          </div>
        </div>

        <img src="images/main_page.png" className="home_0" />
        <img src="images/home_1.png" className="home_1" />
        <Subjects />
        <img src="images/home_2.png" className="home_2" />
      </main>
    </div>
  );
}
