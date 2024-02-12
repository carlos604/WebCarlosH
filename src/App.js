import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { DarkModeProvider } from './components/DarkModeContext'; // Importa DarkModeProvider
import { LanguageProvider } from './components/LanguageContext'; // Importa LanguageProvider

function App() {
  return (
    <DarkModeProvider>
      <LanguageProvider> {/* Envuelve tu aplicación con LanguageProvider */}
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </Router>
      </LanguageProvider>
    </DarkModeProvider>
  );
}

export default App;
