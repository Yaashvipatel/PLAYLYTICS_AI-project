import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import TrendAnalysis from './TrendAnalysis';  // <-- import TrendAnalysis component

export default function PlayerStats() {
  const { sport } = useParams();
  const [players, setPlayers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [selectedPlayer, setSelectedPlayer] = React.useState(null);
  const [showTrend, setShowTrend] = React.useState(false);  // <-- new state for toggling trend analysis

  React.useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5001/players?sport=${encodeURIComponent(sport)}`)
      .then((res) => res.json())
      .then((data) => {
        setPlayers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [sport]);

  if (loading) return <div style={{ padding: '30px', color: 'white' }}>Loading players...</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      style={{
        padding: '30px',
        background: 'linear-gradient(135deg, #8360c3 0%, #2ebf91 100%)',
        minHeight: '100vh',
        color: 'white',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h2>Players in {sport}</h2>
      {!players.length && <p>No players found for this sport.</p>}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {players.map((player) => (
          <li
            key={player._id}
            style={{
              marginBottom: '15px',
              cursor: 'pointer',
              padding: '10px',
              borderRadius: '10px',
              background: 'rgba(255,255,255,0.15)',
              fontWeight: '600',
            }}
            onClick={() => {
              setSelectedPlayer(player);
              setShowTrend(false);  // Reset trend when selecting a new player
            }}
          >
            {player.name}
          </li>
        ))}
      </ul>

      {selectedPlayer && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          style={{
            marginTop: '40px',
            background: 'rgba(255,255,255,0.2)',
            borderRadius: '15px',
            padding: '25px',
            color: '#000',
            maxWidth: '700px',
          }}
        >
          <h3>{selectedPlayer.name} - {selectedPlayer.sport}</h3>
          <h4>Stats:</h4>
          {selectedPlayer.stats.length === 0 && <p>No stats available.</p>}
          {selectedPlayer.stats.map((yearStat, index) => (
            <div key={index} style={{ marginBottom: '15px' }}>
              <h5>Year: {yearStat.year}</h5>
              <ul>
                {Object.entries(yearStat).map(([key, value]) => {
                  if (key === 'year') return null;
                  return (
                    <li key={key}>
                      <strong>{key}:</strong>
                      <ul>
                        {typeof value === 'object' && value !== null
                          ? Object.entries(value).map(([statKey, statVal]) => (
                              <li key={statKey}>{statKey}: {statVal}</li>
                            ))
                          : value
                        }
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          <button
            onClick={() => setShowTrend(!showTrend)}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              fontWeight: 'bold',
              backgroundColor: '#5643bd',
              color: 'white',
            }}
          >
            {showTrend ? 'Hide Trend Analysis' : 'View Trend Analysis'}
          </button>

          {showTrend && <TrendAnalysis stats={selectedPlayer.stats} />}

          <button
            onClick={() => setSelectedPlayer(null)}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              fontWeight: 'bold',
              backgroundColor: '#5643bd',
              color: 'white',
            }}
          >
            Close
          </button>
        </motion.div>
      )}

      <button
        onClick={() => window.history.back()}
        style={{
          marginTop: '40px',
          padding: '12px 25px',
          backgroundColor: '#3a1c71',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        Back to Sports
      </button>
    </motion.div>
  );
}
