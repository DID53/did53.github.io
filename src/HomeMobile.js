import Dropdown from "./components/Dropdown";
import './HomeMobile.css';

export default function HomeWrapper() {
    return (
        <div className="mobile-body">
            <div className="mobile-container">
                <div className="header-container">
                    <div className="header-left">
                        <p><strong>53nd</strong></p>
                        <p>Digital Industrial Design</p>
                        <p>Graduation Exhibition</p>
                    </div>
                    <div className="header-right">
                        <a
                            className="semi-bold insta-link"
                            href="https://www.burgerking.co.kr/home"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontSize: 14 }}
                        >
                            Insta
                        </a>
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