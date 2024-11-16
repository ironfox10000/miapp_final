import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import BeatDetail from './components/BeatDetail';
import Success from './components/Success';
import Failure from './components/Failure';
import Pending from './components/Pending';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/beat/:id" element={<BeatDetail />} />
        <Route path="/success" element={<Success />} />
        <Route path="/failure" element={<Failure />} />
        <Route path="/pending" element={<Pending />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
