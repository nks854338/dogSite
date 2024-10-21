import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router and Routes
import HomePage from './pages/HomePage';
import NextPage from "./pages/NextPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nextPage" element={<NextPage />} />
      </Routes>
    </Router>
  );
};

export default App;
