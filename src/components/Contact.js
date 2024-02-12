import React, { useContext } from 'react';
import { Container, Typography, Button, Card, CardContent } from '@mui/material';
import { useDarkMode } from '../components/DarkModeContext'; // Importa useDarkMode
import { LanguageContext, LanguageProvider } from './LanguageContext';




function ContactPage() {
  const numeroWhatsapp = '+56956843480'; // Reemplaza con tu número de WhatsApp
  const correoElectronico = 'carlos.a.e.herrera@gmail.com'; // Reemplaza con tu dirección de correo electrónico
  const nombreDeUsuarioTwitter = 'https://twitter.com/CarlitosGohan'; // Reemplaza con tu nombre de usuario de Twitter
  const { darkMode } = useDarkMode(); // Utiliza useDarkMode
  
  const { language } = useContext(LanguageContext); // Accede al valor del idioma

  const texts = {
    es: {
      contac: "Contacto",
      aboutMY: "¿Cómo contactar conmigo?",
      emailAddress:"Correo Electrónico",
      aboutMeParagraph1:"¡Hola! Soy Carlos, un apasionado desarrollador web. Si estás buscando crear un sitio web, un proyecto interesante o necesitas ayuda con el desarrollo, ¡estaré encantado de ayudarte! Ponte en contacto conmigo a través de los enlaces anteriores.",
      aboutMeParagraph2:"Responderé a tus mensajes lo más pronto posible. ¡Gracias por ponerte en contacto!",
    },
    en: {
      contac: "Contact",
      aboutMY: "How to contact me?",
      emailAddress:"EmailAddress:",
      aboutMeParagraph1:"Hi there! I'm Carlos, a passionate web developer. If you're looking to create a website, an interesting project, or need assistance with development, I'd be happy to help! Feel free to reach out to me through the links above.",
      aboutMeParagraph2:"I will respond to your messages as soon as possible. Thank you for getting in touch!",
    },
  };


  const generarLinkWhatsapp = () => {
    return `https://wa.me/${numeroWhatsapp}`;
  };

  const generarLinkCorreo = () => {
    const asunto = 'Consulta desde tu portafolio';
    return `mailto:${correoElectronico}?subject=${encodeURIComponent(asunto)}`;
  };

  const generarLinkTwitter = () => {
    return `https://twitter.com/${nombreDeUsuarioTwitter}`;
  };


  return (
    <LanguageProvider value="es">
      <div style={{ backgroundColor: darkMode ? 'black' : 'white', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> {/* Aplicar el tema al fondo y centrar contenido */}
      <Container maxWidth="md">
      <Card variant="elevation" style={{ marginTop: '-200px', backgroundColor: darkMode ? '#333' : 'white' }}>
          <CardContent>
            <Typography variant="h4" align="center" gutterBottom>
            {texts[language].contac}
            </Typography>

            <Typography variant="body1" align="center" paragraph>
             {texts[language].aboutMY}
            </Typography>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant="contained" color="primary" component="a" href={generarLinkWhatsapp()} target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
                WhatsApp
              </Button>
              <Button variant="contained" color="primary" component="a" href={generarLinkCorreo()} target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
              {texts[language].emailAddress}
              </Button>
              <Button variant="contained" color="primary" component="a" href={generarLinkTwitter()} target="_blank" rel="noopener noreferrer">
                Twitter
              </Button>
            </div>

            <Typography variant="body1" align="center" style={{ marginTop: '20px' }}>
            </Typography>
            {texts[language].aboutMeParagraph1}
            <Typography variant="body1" align="center">
            {texts[language].aboutMeParagraph2}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
    </LanguageProvider>
  );
}

export default ContactPage;
