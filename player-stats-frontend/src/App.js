import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import components
import WelcomePage from './components/WelcomePage';
import SportSelector from './components/SportSelector';
import PlayerStats from './components/PlayerStats';
import TrendAnalysis from './components/TrendAnalysis';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/sports" element={<SportSelector />} />
        <Route path="/players/:sport" element={<PlayerStats />} />
        <Route path="/trend-analysis" element={<TrendAnalysis />} />

      </Routes>
    </Router>
  );
}

export default App;
