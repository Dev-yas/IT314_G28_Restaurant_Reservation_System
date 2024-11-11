import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './components/LoginSignup/LandingPage';
import LoginPage from './components/LoginSignup/LoginPage';
import UserTypeSelection from './components/LoginSignup/UserTypeSelection';
import Dashboard from './components/RestaurantOwner/Dashboard';
import LoadingManager from './components/LoadingManager';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<LoadingManager />}>
          {/* Default landing page */}
          <Route path="/" element={<LandingPage />} />

          {/* Login page */}
          <Route path="/login" element={<LoginPage />} />

          {/* User type selection page */}
          <Route path="/select-user" element={<UserTypeSelection />} />

          {/* Dashboard page */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Redirect any unknown paths to the landing page */}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
