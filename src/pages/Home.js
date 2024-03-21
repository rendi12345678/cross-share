import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/home.css";
import Dashboard from "../components/layouts/Dashboard";
import Navbar from "../components/layouts/Navbar";
import Youtube from "../components/layouts/Youtube";
import useContextHook from "../hooks/useContextHook";

function Home() {
  const { activeLayout = "dashboard", setActiveLayout } = useContextHook();
  const navigate = useNavigate();

  const renderLayout = () => {
    if (activeLayout === "logout") {
      navigate("/sign-in");
      setActiveLayout("dashboard");
    }
    if (activeLayout === "dashboard") return <Dashboard />;
    if (activeLayout === "youtube") return <Youtube />;
    return "404 Layout Nor Found!";
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="home">{renderLayout()}</section>
      </main>
    </>
  );
}

export default Home;
