import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your existing components
import WelcomePage from './components/WelcomePage';
import SportSelector from './components/SportSelector';
import PlayerStats from './components/PlayerStats';
import TrendAnalysis from './components/TrendAnalysis';

// Import Power BI embed component
import PowerBIEmbed from './components/PowerBIEmbed';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/sports" element={<SportSelector />} />
        <Route path="/players/:sport" element={<PlayerStats />} />
        <Route path="/trend-analysis" element={<TrendAnalysis />} />
        
        {/* Power BI Dashboard route */}
        <Route
          path="/powerbi"
          element={
            <PowerBIEmbed embedUrl={"YOUR_POWER_BI_PUBLISHED_URL"} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
