import React from "react";
import "../assets/styles/dashboard.css";
import PostTable from "../components/PostTable";

function Dashboard() {
  return (
    <section className="dashboard">
      <div className="top">
        <h1>Dashboard</h1>
      </div>
      <PostTable />
    </section>
  );
}

export default Dashboard;
