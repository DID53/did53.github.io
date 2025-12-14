// Subjects.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Subjects.css"; // CSS 분리 가능

export default function Subjects() {
  const navigate = useNavigate();

  return (
    <div className="subject-buttons">
      <button className="subject-btn" onClick={() => navigate("/smart-design")}>
        <img
          src="/images/logo1.png"
          alt="Smart Design"
          className="subject-logo"
        />
        <span className="subject-label">Smart Design</span>
      </button>

      <button
        className="subject-btn"
        onClick={() => navigate("/capstone-design")}
      >
        <img
          src="/images/logo2.png"
          alt="Capstone Design"
          className="subject-logo"
        />
        <span className="subject-label">Capstone Design</span>
      </button>

      <button className="subject-btn" onClick={() => navigate("/ux-design")}>
        <img src="/images/logo3.png" alt="UX Design" className="subject-logo" />
        <span className="subject-label">UX Design</span>
      </button>
    </div>
  );
}
