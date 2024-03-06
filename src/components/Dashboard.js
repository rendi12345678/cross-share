import React from "react";
import "../assets/styles/dashboard.css";

function Dashboard() {
  return (
    <section className="dashboard">
      <div>
        <h1>Overview</h1>
      </div>
      <ul className="list-social-media">
        <li>
          <h4>Facebook</h4>
          <p>Reaction : 0</p>
          <p>Comments : 0</p>
          <p>Shared : 0</p>
        </li>
        <li>
          <h4>Instagram</h4>
          <p>Reaction : 0</p>
          <p>Comments : 0</p>
          <p>Shared : 0</p>
        </li>
        <li>
          <h4>Linkedin</h4>
          <p>Reaction : 0</p>
          <p>Comments : 0</p>
          <p>Shared : 0</p>
        </li>
      </ul>
    </section>
  );
}

export default Dashboard;
