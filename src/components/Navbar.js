import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDarkMode } from './DarkModeContext';
import { LanguageContext, LanguageProvider } from './LanguageContext'; // Ruta de importación correcta
import { Select, MenuItem } from '@mui/material';



function Navbar() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { language, changeLanguage } = useContext(LanguageContext);
  const spanishTitle = "Mi Portafolio";
  const englishTitle = "My Portfolio";

  const spanishTexts = {
    home: "Inicio",
    about: "Acerca de",
    contact: "Contacto",
  };
  const englishTexts = {
    home: "Home",
    about: "About",
    contact: "Contact",
  };

  const handleChange = (event) => {
    changeLanguage(event.target.value);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar sx={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Typography variant="h6" className="navbar-title">
               {language === 'es' ? spanishTitle : englishTitle}
            </Typography>

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              className="menu-icon"
            >
              <MenuIcon />
            </IconButton>

            <Button color="inherit" component={Link} to="/">
              {language === 'es' ? spanishTexts.home : englishTexts.home}
            </Button>
            <Button color="inherit" component={Link} to="/about">
              {language === 'es' ? spanishTexts.about : englishTexts.about}
            </Button>
            <Button color="inherit" component={Link} to="/contact">
              {language === 'es' ? spanishTexts.contact : englishTexts.contact}
            </Button>

            <Button color="inherit" onClick={toggleDarkMode}>
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </Button>
            <Button
              component={Link}
              to="https://twitter.com/CarlitosGohan"
              target="_blank"
              rel="noopener noreferrer"
              className="twitter-icon"
            >
              <TwitterIcon color="primary" />
            </Button>
            <Select
              value={language}
              onChange={handleChange}
              sx={{ position: 'absolute', right: '0' }}
            >
              <MenuItem value="es">ES</MenuItem>
              <MenuItem value="en">EN</MenuItem>
            </Select>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </LanguageProvider>

  );
}

export default Navbar;
