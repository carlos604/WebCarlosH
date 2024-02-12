import React, { createContext, useState, useEffect } from 'react';

// Crea el contexto de idioma
export const LanguageContext = createContext();

// Crea un proveedor para el contexto de idioma
export const LanguageProvider = ({ children }) => {
  // Estado para almacenar el idioma actual
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'es');

  // Función para cambiar el idioma
  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  // Guarda el idioma seleccionado en el almacenamiento local
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Renderiza el proveedor con el contexto de idioma y sus valores
  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
