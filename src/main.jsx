import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import WheelGallery from './routes/WheelGallery/WheelGallery.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="WheelGallery" element={<WheelGallery />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
