import { lazy, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import { createContext } from "use-context-selector";
import "./App.css";
const Navbar = lazy(() => import("./components/Navbar"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

export const AppContext = createContext(null);

const routes = [
  {
    path: "/",
    element: <Dashboard />,
  },
];

function App() {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const accessTokenRef = useRef(null);
  const youtubeVideoRef = useRef(null);
  const uploadScheduleRef = useRef(null);

  const contextValue = {
    titleRef,
    descriptionRef,
    accessTokenRef,
    youtubeVideoRef,
    uploadScheduleRef,
  };

  return (
    <AppContext.Provider value={contextValue}>
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
    </AppContext.Provider>
  );
}

export default App;
