import { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { createContext } from "use-context-selector";
import "./App.css";
import useAppContext from "./hooks/useAppContext";
import useRoutes from "./hooks/useRoutes";
import { checkTimeToUpload } from "./utils/timeScheduler";

export const AppContext = createContext(null);

function App() {
  const { contextValue } = useAppContext();
  const routes = useRoutes();

  useEffect(() => {
    setInterval(() => {
      checkTimeToUpload();
    }, 1000);
  }, []);

  return (
    <AppContext.Provider value={contextValue}>
      <div className="container">
        <Suspense fallback={<div className="loader"></div>}>
          <Routes>
            {routes.map(({ path, element }, index) => (
              <Route key={index + 1} path={path} element={element} />
            ))}
          </Routes>
        </Suspense>
      </div>
    </AppContext.Provider>
  );
}

export default App;
