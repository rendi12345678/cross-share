import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
const Navbar = lazy(() => import("./components/Navbar"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

const routes = [
  {
    path: "/",
    element: <Dashboard />,
  },
];

function App() {
  return (
    <div className="container">
      <Navbar />
      <main>
        <Routes>
          {routes.map(({ path, element }, index) => (
            <Route key={index + 1} path={path} element={element} />
          ))}
        </Routes>
      </main>
    </div>
  );
}

export default App;
