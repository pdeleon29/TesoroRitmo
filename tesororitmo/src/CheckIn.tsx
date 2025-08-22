import React from 'react';

const CheckIn = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>🌞 Bienvenido / Welcome</h2>
      <p>¿Cómo te sientes hoy? / How are you feeling today?</p>
      <input type="text" placeholder="Escribe tu emoción / Type your feeling" style={{ padding: '0.5rem', width: '80%' }} />
      <p style={{ marginTop: '1rem' }}>✨ Tu emoción es parte del ritual / Your feeling is part of the ritual</p>
    </div>
  );
};

export default CheckIn;
