import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import Episode127 from './Episode127.tsx';
import Episode126 from './Episode126.tsx';
import Episode125 from './Episode125.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/podcast">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/episode/127" element={<Episode127 />} />
        <Route path="/episode/126" element={<Episode126 />} />
        <Route path="/episode/125" element={<Episode125 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
