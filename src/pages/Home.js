import React from "react";
import "../assets/styles/home.css";
import Dashboard from "../components/layouts/Dashboard";
import useContextHook from "../hooks/useContextHook";

function Home() {
  const {activeLayout} = useContextHook()

  const renderLayout = () => {
    if(activeLayout === "dashboard") return <Dashboard/>
    return "404 Layout Nor Found!"
  }

  return (
    <section className="home">
      {renderLayout()}
    </section>
  );
}

export default Home;
