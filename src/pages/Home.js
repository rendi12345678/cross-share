import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/home.css";
import Navbar from "../components/container/Navbar";
import useContextHook from "../hooks/useContextHook";
import Dashboard from "./../components/container/Dashboard";
import Youtube from "./../components/container/Youtube";

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
