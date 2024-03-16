import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { createContext } from "use-context-selector";
import "./App.css";
import useAppContext from "./hooks/useAppContext";
import useRoutes from "./hooks/useRoutes";
const Navbar = lazy(() => import("./components/layouts/Navbar"));

export const AppContext = createContext(null);

function App() {
  const { contextValue } = useAppContext();
  const routes = useRoutes();

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
