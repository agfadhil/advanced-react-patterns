import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <div>
        <Link to="/render-props">
          <button
            style={{
              margin: "10px",
              padding: "10px 20px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Render Props
          </button>
        </Link>
        <Link to="/hoc">
          <button
            style={{
              margin: "10px",
              padding: "10px 20px",
              backgroundColor: "#008CBA",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Higher Order Components (HOC)
          </button>
        </Link>
        <Link to="/compound-component">
          <button
            style={{
              margin: "10px",
              padding: "10px 20px",
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Compound Component
          </button>
        </Link>
      </div>
    </div>
  );
}
