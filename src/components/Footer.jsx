import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Link, Box } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; 
import GitHubIcon from '@mui/icons-material/GitHub'; 
import useMediaQuery from '@mui/material/useMediaQuery';
import './Footer.css';



const Footer = () => {

  const mediaQueryActiveSmall = useMediaQuery('(max-width: 1024px)');

  const navStyle = {
    backgroundColor: "var(--dark-background-two)",
    marginTop: "4rem",
    padding: "10px 10px", 
    borderTop: "2px solid var(--accent)",
    animation: "borderTransition 4s infinite",
  };

  const navTypography = {
    fontFamily: "var(--second-font)",
    fontSize: mediaQueryActiveSmall ? "10px" : undefined,
    color: "var(--text)",
  };

  const iconStyle = {
    color: "var(--text)",
    marginRight: "1rem",
    fontSize: "1.5rem", 
  };

  const footerBoxStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  };

  const rightBoxStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "1rem",
    width: "100%",
    color: mediaQueryActiveSmall ? "green" :"red",
  };

  return (
    <AppBar position="static" style={navStyle}>
      <Toolbar>

        <Box style={footerBoxStyle}>
        <Typography variant="body1" style={navTypography} className='typo'>
        "Collapsed statue and outer space universe" by Miftha Sofyan Assidiq
        </Typography>
        </Box>

        <Box style={rightBoxStyle}>
        <Typography variant="body1" style={navTypography} className='typo'>
          © 2023 Antonio Simonetti.
        </Typography>

        <IconButton className='icon-l'>
          <Link href="https://www.linkedin.com/in/antonio-simonetti-it/" target="_blank">
            <LinkedInIcon style={iconStyle} />
          </Link>
        </IconButton>
        <IconButton className='icon-g'>
          <Link href="https://github.com/AntonioSimonetti/AntonioSimonetti" target="_blank">
            <GitHubIcon style={iconStyle} />
          </Link>
        </IconButton>
        </Box>
    
      </Toolbar>
    </AppBar>
  );
};

export default Footer;