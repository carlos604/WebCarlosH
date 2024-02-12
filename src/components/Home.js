import React, { useContext } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { LanguageContext, LanguageProvider } from './LanguageContext';
import fondo1 from '../assets/imagenes/fondo2.jpg'; // Ajusta la ruta de la importación

function HomePage() {
  const backgroundImage = `url(${fondo1})`;
  const [expanded, setExpanded] = React.useState(false);
  const { language } = useContext(LanguageContext);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const texts = {
    es: {
      welcome: "Bienvenido a mi Portafolio",
      about: "Más acerca de mí",
      aboutMeParagraph1: `Desde el 2019, me he dedicado apasionadamente a la programación, comprometiéndome a mejorar constantemente mis habilidades. Me considero un autodidacta entusiasta, explorando diferentes áreas como el desarrollo de juegos en Godot, MonoGame y Unity. Aunque no soy fanático de este último, estoy dispuesto a enfrentar cualquier desafío que se presente.`,
      aboutMeParagraph2: `Me destaco por mi capacidad para adaptarme rápidamente a nuevas tecnologías y entornos de desarrollo, lo que me permite abordar proyectos diversos con confianza y eficacia. Disfruto particularmente los desafíos complejos y me entusiasma la oportunidad de encontrar soluciones innovadoras para problemas difíciles.`,
      aboutMeParagraph3: `Si necesitas ayuda con la creación de scripts, el desarrollo de páginas web o cualquier otro proyecto relacionado con la programación, ¡no dudes en contactarme! Estoy siempre listo para colaborar en nuevos proyectos y contribuir con mi experiencia y entusiasmo.`,
    },
    en: {
      welcome: "Welcome to my Portfolio",
      about: "About me",
      aboutMeParagraph1:"Since 2019, I have been passionately dedicated to programming, committed to constantly improving my skills. I consider myself an enthusiastic self-learner, exploring different areas such as game development in Godot, MonoGame, and Unity. Although I am not a fan of the latter, I am willing to face any challenge that comes my way.",
      aboutMeParagraph2:"I stand out for my ability to quickly adapt to new technologies and development environments, which allows me to approach diverse projects with confidence and efficiency. I particularly enjoy complex challenges and I am excited about the opportunity to find innovative solutions to difficult problems.",
      aboutMeParagraph3:"If you need help with scripting, web development, or any other programming-related project, don't hesitate to contact me! I am always ready to collaborate on new projects and contribute my experience and enthusiasm.",
    },
  };

  
  return (
    <LanguageProvider value="es">
            <Box
      component="div"
      sx={{
        backgroundImage: backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        position: 'relative', // Añadido para establecer la posición relativa
      }}
    >
      {/* Fondo semitransparente */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente oscuro
          padding: 2,
          borderRadius: '50%', // Hace que el elemento tenga forma circular
          width: 40, // Ancho del elemento
          height: 40, // Alto del elemento
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />

      <Container>
        <Typography variant="h3" align="center" gutterBottom>
        {texts[language].welcome}
        </Typography>
        {/* Agrega más contenido según sea necesario */}
      </Container>

      {/* Botón de expansión */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente oscuro
          padding: 2,
          borderRadius: '50%', // Hace que el elemento tenga forma circular
          width: 80, // Ancho del elemento
          height: 80, // Alto del elemento
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="body2" color="right" onClick={handleExpandClick} style={{ cursor: 'pointer' }}>
          {texts[language].about}
          <ExpandMoreIcon sx={{ fontSize: 16, color: 'white', ml: 1 }} />
        </Typography>
      </Box>

      {/* Contenido de la pestaña desplegable */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box
          sx={{
            position: 'absolute',
            bottom: 50,
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fondo semitransparente oscuro
            padding: 2,
            borderRadius: 4,
          }}
        >
          <Typography variant="body1" align="center">
          {texts[language].aboutMeParagraph1}<br /><br />

          {texts[language].aboutMeParagraph2}<br /><br />

          {texts[language].aboutMeParagraph1}

          </Typography>
        </Box>
      </Collapse>
    </Box>
    </LanguageProvider>
  );
}

export default HomePage;

