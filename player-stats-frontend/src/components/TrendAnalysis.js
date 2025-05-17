import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer,
} from 'recharts';

export default function TrendAnalysis() {
  const { sport } = useParams();
  const [players, setPlayers] = useState([]);
  const [selectedMetric, setSelectedMetric] = useState('');
  const [trendData, setTrendData] = useState([]);
  const [stats, setStats] = useState({ stdDev: 0, variance: 0, skewness: '' });

  const metricsBySport = {
    Cricket: ['runs', 'wickets', 'catches', 'balls_faced', 'strike_rate', 'economy_rate'],
    Football: ['goals', 'assists', 'tackles', 'passing_yards', 'shots_on_target'],
    Basketball: ['points', 'assists', 'rebounds', 'field_goals', 'three_pointers'],
    Hockey: ['goals', 'assists', 'penalties', 'shots_on_target', 'faceoffs_won'],
    Tennis: ['sets_won', 'games_won', 'aces', 'double_faults', 'first_serve_percentage'],
  };

  useEffect(() => {
    fetch(`http://localhost:5001/players?sport=${sport}`)
      .then((res) => res.json())
      .then((data) => {
        setPlayers(data);
      })
      .catch((err) => console.error(err));
  }, [sport]);

  useEffect(() => {
    if (!selectedMetric || players.length === 0) return;

    const aggregatedData = [];

    players.forEach((player) => {
      player.stats.forEach((stat) => {
        for (let i = 1; i <= 5; i++) {
          const game = stat[`game_${i}`];
          if (game && game[selectedMetric] !== undefined) {
            aggregatedData.push({
              player: player.name,
              year: stat.year,
              game: `Game ${i}`,
              value: game[selectedMetric],
            });
          }
        }
      });
    });

    const x = aggregatedData.map((_, i) => i);
    const y = aggregatedData.map((d) => d.value);

    const n = x.length;
    const sumX = x.reduce((a, b) => a + b, 0);
    const sumY = y.reduce((a, b) => a + b, 0);
    const sumXY = x.reduce((acc, xi, i) => acc + xi * y[i], 0);
    const sumX2 = x.reduce((acc, xi) => acc + xi * xi, 0);

    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;

    const trendLine = y.map((_, i) => slope * i + intercept);

    const mean = y.reduce((a, b) => a + b, 0) / y.length;
    const variance = y.reduce((acc, val) => acc + (val - mean) ** 2, 0) / y.length;
    const stdDev = Math.sqrt(variance);

    const skewness =
      y.length >= 3
        ? (() => {
            const m3 =
              y.reduce((acc, val) => acc + Math.pow(val - mean, 3), 0) / y.length;
            return m3 > 0 ? 'Right Skewed' : m3 < 0 ? 'Left Skewed' : 'Symmetrical';
          })()
        : 'Insufficient data';

    const combined = aggregatedData.map((item, i) => ({
      ...item,
      trend: trendLine[i],
    }));

    setTrendData(combined);
    setStats({ stdDev: stdDev.toFixed(2), variance: variance.toFixed(2), skewness });
  }, [selectedMetric, players]);

  const metricOptions = metricsBySport[sport] || [];

  return (
    <div style={{ padding: '30px', background: '#121212', color: 'white', minHeight: '100vh' }}>
      <h2 style={{ color: '#00d8ff' }}>Trend Analysis - {sport.toUpperCase()}</h2>

      <div style={{ margin: '20px 0' }}>
        <label>Select Metric: </label>
        <select
          value={selectedMetric}
          onChange={(e) => setSelectedMetric(e.target.value)}
          style={{ padding: '10px', borderRadius: '5px', marginLeft: '10px' }}
        >
          <option value="">-- Choose --</option>
          {metricOptions.map((metric) => (
            <option key={metric} value={metric}>
              {metric}
            </option>
          ))}
        </select>
      </div>

      {trendData.length > 0 && (
        <>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="game" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" name="Metric Value" />
              <Line type="monotone" dataKey="trend" stroke="#82ca9d" name="Trend Line" />
            </LineChart>
          </ResponsiveContainer>

          <div style={{ marginTop: '30px', background: '#1e1e1e', padding: '20px', borderRadius: '10px' }}>
            <h3>📊 Statistical Summary</h3>
            <p><strong>Standard Deviation:</strong> {stats.stdDev}</p>
            <p><strong>Variance:</strong> {stats.variance}</p>
            <p><strong>Shape of Distribution:</strong> {stats.skewness}</p>
          </div>
        </>
      )}

      {!selectedMetric && <p style={{ marginTop: '30px' }}>Please select a metric to view trend analysis.</p>}
    </div>
  );
}
