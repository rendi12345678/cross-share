import { lazy } from "react";
import "./App.css";
const Navbar = lazy(() => import("./components/Navbar"));
const Dashboard = lazy(() => import("./components/Dashboard"));

function App() {
  return (
    <div className="container">
      <Navbar />
      <main>
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
