import { useEffect } from 'react';
import '../styles/shooting-stars.css';

const ShootingStars = () => {
  useEffect(() => {
    const container = document.getElementById('shooting-stars-container');
    if (!container) return;

    const createShootingStar = () => {
      const star = document.createElement('div');
      star.className = 'shooting-star';
      
      // Random starting position (top area)
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 30}%`;
      
      container.appendChild(star);
      
      // Remove after animation completes
      setTimeout(() => {
        star.remove();
      }, 2000);
    };

    // Create shooting stars at random intervals
    const interval = setInterval(() => {
      if (Math.random() > 0.5) {
        createShootingStar();
      }
    }, 3000);

    return () => {
      clearInterval(interval);
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return <div id="shooting-stars-container" className="shooting-stars-container"></div>;
};

export default ShootingStars;
