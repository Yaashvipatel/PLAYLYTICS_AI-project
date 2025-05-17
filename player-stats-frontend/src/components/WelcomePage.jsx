import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        height: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <motion.h1
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        style={{ fontSize: '3rem', marginBottom: '20px' }}
      >
        Welcome to Playlytics AI
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{ fontSize: '1.2rem', marginBottom: '40px' }}
      >
        Your AI-powered sports performance companion
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: '#5a45a5' }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/sports')}
        style={{
          padding: '15px 30px',
          fontSize: '1.1rem',
          backgroundColor: '#4e3fbd',
          border: 'none',
          borderRadius: '10px',
          color: 'white',
          cursor: 'pointer',
          boxShadow: '0 8px 15px rgba(0,0,0,0.2)',
          fontWeight: 'bold',
        }}
      >
        Get Started
      </motion.button>
    </motion.div>
  );
}
