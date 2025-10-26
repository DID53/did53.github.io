import Subjects from "./Subjects.js";
import "./Home.css";

export default function Home() {
  return (
    <div className="container">
      {/* Header */}

      {/* Main */}
      <main>
        <div className="home_row">
          <img src="images/home_title.png" className="home_photo" />
          <a
            className="semi-bold insta-link"
            href="https://www.burgerking.co.kr/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            Insta
          </a>
        </div>

        <img src="images/hello.png" className="home_0" />
        <img src="images/home_1.png" className="home_1" />


        <Subjects />

        <img src="images/home_2.png" className="home_2" />
      </main>
    </div>
  );
}
