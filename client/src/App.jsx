import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/authPage";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import Home from "./pages/Home.jsx";
import TripDetails from "./pages/TripDetails.jsx";
import Stripe from "./pages/Stripe.jsx";
import ThankYou from "./pages/ThankYou.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AllUsers from "./pages/AllUsers.jsx";
import AiTrips from "./pages/AiTrips.jsx";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="home" element={<Home />} />
          <Route path="trip/:id" element={<TripDetails />} />
          <Route path="stripe/:id" element={<Stripe />} />
          <Route path="thankyou" element={<ThankYou />} />
          {/* Admin Section */}
          <Route path="admin" element={<AdminDashboard />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="all-users" element={<AllUsers />} />
            <Route path="ai-trips" element={<AiTrips />} />
          </Route>
        </Routes>

        <ToastContainer />
      </Provider>
    </>
  );
}

export default App;
