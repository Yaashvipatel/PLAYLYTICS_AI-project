import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const sports = ['Football', 'Basketball', 'Cricket', 'Tennis', 'Hockey'];

export default function SportSelector() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      style={{
        padding: '40px',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
        minHeight: '100vh',
        color: 'white',
      }}
    >
      <h2 style={{ marginBottom: '30px' }}>Select a Sport</h2>
      <div
        style={{
          display: 'flex',
          gap: '25px',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {sports.map((sport) => (
          <motion.div
            key={sport}
            whileHover={{ scale: 1.1, boxShadow: '0 10px 20px rgba(255,255,255,0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(`/players/${sport}`)}
            style={{
              cursor: 'pointer',
              background: 'rgba(255, 255, 255, 0.15)',
              padding: '25px 40px',
              borderRadius: '20px',
              fontSize: '1.3rem',
              fontWeight: '600',
              textAlign: 'center',
              minWidth: '160px',
              userSelect: 'none',
              color: 'white',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            }}
          >
            {sport}
          </motion.div>
        ))}
      </div>
      <button
        onClick={() => window.history.back()}
        style={{
          marginTop: '50px',
          padding: '12px 25px',
          backgroundColor: '#2a2a72',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          fontWeight: 'bold',
    
        }}
      >
        Back
      </button>
    </motion.div>
  );
}