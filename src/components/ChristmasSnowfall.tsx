import { useEffect } from 'react';
import '../styles/christmas-snowfall.css';

const ChristmasSnowfall = () => {
  useEffect(() => {
    // Generate snowflakes dynamically
    const container = document.getElementById('snowfall-container');
    if (!container) return;

    const numberOfSnowflakes = 50;
    
    for (let i = 0; i < numberOfSnowflakes; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.innerHTML = '❄';
      
      // Random positioning and animation properties
      snowflake.style.left = `${Math.random() * 100}%`;
      snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
      snowflake.style.animationDelay = `${Math.random() * 2}s`;
      snowflake.style.opacity = `${Math.random() * 0.6 + 0.4}`;
      snowflake.style.fontSize = `${Math.random() * 10 + 10}px`;
      
      container.appendChild(snowflake);
    }

    // Cleanup
    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return <div id="snowfall-container" className="snowfall-container"></div>;
};

export default ChristmasSnowfall;
