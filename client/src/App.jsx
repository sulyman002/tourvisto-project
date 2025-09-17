import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/authPage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      
        <Routes>
          <Route path="/" element={<AuthPage />} />
        </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
