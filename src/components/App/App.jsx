import css from "./App.module.css";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../Loader/Loader";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));

import("../../pages/RegistrationPage/RegistrationPage");
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/contacts">
                <RegistrationPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts">
                <LoginPage />
              </RestrictedRoute>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
