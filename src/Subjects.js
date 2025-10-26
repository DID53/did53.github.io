// Subjects.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Subjects.css"; // CSS 분리 가능

export default function Subjects() {
  const navigate = useNavigate();

  return (
    <div className="subject-buttons">
      <button className="subject-btn" onClick={() => navigate("/smart-design")}>Smart Design</button>
      <button className="subject-btn" onClick={() => navigate("/capstone-design")}>Capstone Design</button>
      <button className="subject-btn" onClick={() => navigate("/ux-design")}>UX Design</button>
    </div>
  );
}
