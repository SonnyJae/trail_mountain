import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './trail_mountain/SceneComponent';
import reportWebVitals from "./trail_mountain/reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
