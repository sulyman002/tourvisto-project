import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/authPage";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import Home from "./pages/Home.jsx";
import TripDetails from "./pages/TripDetails.jsx";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="home" element={<Home />} />
          <Route path="home/trip/:id" element={<TripDetails />} />
        </Routes>
        <ToastContainer />
      </Provider>
    </>
  );
}

export default App;
