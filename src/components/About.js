import React, { useState,useContext } from 'react';
import './About.css';
import reactImage from '../assets/imagenes/react.png';
import jsImage from '../assets/imagenes/js.png';
import phpImage from '../assets/imagenes/php.png';
import pythonImage from '../assets/imagenes/python.jpg';
import csharpImage from '../assets/imagenes/csharp.png';
import mongoDBImage from '../assets/imagenes/mongo.png';
import oracleImage from '../assets/imagenes/oracle.png';
import mysqlImage from '../assets/imagenes/mysl.png';
import { useDarkMode } from '../components/DarkModeContext'; // Importa useDarkMode
import { LanguageContext, LanguageProvider } from './LanguageContext';

function About() {
  const [isReactHovered, setReactHovered] = useState(false);
  const [isJsHovered, setJsHovered] = useState(false);
  const [isPhpHovered, setPhpHovered] = useState(false);
  const [isPythonHovered, setPythonHovered] = useState(false);
  const [isCSharpHovered, setCSharpHovered] = useState(false);
  const [isMongoDBHovered, setMongoDBHovered] = useState(false);
  const [isOracleHovered,setOracleHovered]= useState(false);
  const [isMySQLHovered,setMySQLHovered] = useState(false);
  const { darkMode } = useDarkMode(); // Utiliza useDarkMode
  const { language } = useContext(LanguageContext); // Accede al valor del idioma

  const texts = {
    es: {
      skillsAndTechnologies: "Habilidades y Tecnologías",
      aboutMeParagraph1:"A continuación, algunas de las habilidades y tecnologías con las que trabajo:",
      programmingLanguages:"Lenguajes de Programación",
      db:"Base de Datos",
    },
    en: {
      skillsAndTechnologies: "Skills and Technologies",
      aboutMeParagraph1:"Here are some of the skills and technologies I work with:",
      programmingLanguages:"Programming Languages",
      db:"Database",
    },
  };

  return (
    <LanguageProvider value="es">
        <div style={{ backgroundColor: darkMode ? 'black' : 'white' }}> {/* Aplicar el tema al fondo */}
                <div style={{ marginTop: '50px', textAlign: 'center' }}>
            <h2>{texts[language].skillsAndTechnologies}</h2>
            <p>{texts[language].aboutMeParagraph1}</p>
                {/* Sección de Habilidades y Tecnologías */}
                <div style={{ marginBottom: '20px' }}>
                  {/* Tarjeta de habilidades de React */}
                  <div
                    className={`card-container ${isReactHovered ? 'hovered' : ''}`}
                    onMouseEnter={() => setReactHovered(true)}
                    onMouseLeave={() => setReactHovered(false)}
                    style={{ margin: 'auto' }} // Añadido para centrar
                  >
                    <img
                      src={reactImage}
                      alt="React"
                      className="card-image"
                    />
                    <p className="card-text">React</p>
                  </div>
                </div>

          {/* Sección de Lenguajes de Programación */}
          <h2>{texts[language].programmingLanguages}</h2>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {/* Tarjetas de lenguajes de programación */}
            <div
              className={`card-container ${isJsHovered ? 'hovered' : ''}`}
              onMouseEnter={() => setJsHovered(true)}
              onMouseLeave={() => setJsHovered(false)}
            >
              <img
                src={jsImage}
                alt="JavaScript"
                className="card-image"
              />
              <p className="card-text">JavaScript</p>
            </div>
            <div
              className={`card-container ${isPhpHovered ? 'hovered' : ''}`}
              onMouseEnter={() => setPhpHovered(true)}
              onMouseLeave={() => setPhpHovered(false)}
            >
              <img
                src={phpImage}
                alt="PHP"
                className="card-image"
              />
              <p className="card-text">PHP</p>
            </div>
            <div
              className={`card-container ${isPythonHovered ? 'hovered' : ''}`}
              onMouseEnter={() => setPythonHovered(true)}
              onMouseLeave={() => setPythonHovered(false)}
            >
              <img
                src={pythonImage}
                alt="Python"
                className="card-image"
              />
              <p className="card-text">Python</p>
            </div>
            <div
              className={`card-container ${isCSharpHovered ? 'hovered' : ''}`}
              onMouseEnter={() => setCSharpHovered(true)}
              onMouseLeave={() => setCSharpHovered(false)}
            >
              <img
                src={csharpImage}
                alt="C#"
                className="card-image"
              />
              <p className="card-text">C#</p>
            </div>
          </div>
    {/* Sección de Bases de Datos */}
    <div>
      <h2>{texts[language].db}</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {/* Tarjeta de MongoDB */}
        <div
          className={`card-container ${isMongoDBHovered ? 'hovered' : ''}`}
          onMouseEnter={() => setMongoDBHovered(true)}
          onMouseLeave={() => setMongoDBHovered(false)}
        >
          <img src={mongoDBImage} alt="MongoDB" className="card-image" />
          <p className="card-text">MongoDB</p>
        </div>
        {/* Tarjeta de MySQL */}
        <div
          className={`card-container ${isMySQLHovered ? 'hovered' : ''}`}
          onMouseEnter={() => setMySQLHovered(true)}
          onMouseLeave={() => setMySQLHovered(false)}
        >
          <img src={mysqlImage} alt="MySQL" className="card-image" />
          <p className="card-text">MySQL</p>
        </div>
        {/* Tarjeta de Oracle */}
        <div
          className={`card-container ${isOracleHovered ? 'hovered' : ''}`}
          onMouseEnter={() => setOracleHovered(true)}
          onMouseLeave={() => setOracleHovered(false)}
        >
          <img src={oracleImage} alt="Oracle" className="card-image" />
          <p className="card-text">Oracle</p>
        </div>
        {/* Puedes agregar más tarjetas según sea necesario */}
      </div>
    </div>
        </div>
      </div>
    </LanguageProvider>


  );
}

export default About;
