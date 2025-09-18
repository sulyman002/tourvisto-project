import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/authPage";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="home" element={<Home />} />
        </Routes>
        <ToastContainer />
      </Provider>
    </>
  );
}

export default App;
