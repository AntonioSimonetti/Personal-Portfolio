import React, { useState, useEffect } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './Navbar.css';



export default function Navbar() {
  const [positionSticky, setPositionSticky] = useState(true);
  const [scrollUp, setScrollUp] = useState(false);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);

  /// useEffect to make the navbar position from sticky to fixed and viceversa

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 900) {
          setPositionSticky(false);
      }  

      if (window.scrollY < 700) {
          setPositionSticky(true);
          setIsNavbarHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /// useEffect to define the scrollUp and scrollDown

  useEffect(() => {
      let lastScrollTop = 0;
  
      function handleScrollDirection() {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
        if (currentScrollTop > lastScrollTop) {
          setScrollUp(false);
        } else {
          setScrollUp(true)
        }
  
        lastScrollTop = currentScrollTop;
      }
  
      window.addEventListener('scroll', handleScrollDirection);
  
      return () => {
        window.removeEventListener('scroll', handleScrollDirection);
      };
    }, []);
  
  /// useEffect to hidden the navbar when scrolling up 

  useEffect(() => {
    const handleNavbarHidden = () => {
      if (!positionSticky && scrollUp ) { 
        setIsNavbarHidden(true);
      } else {
        setIsNavbarHidden(false);
      }

      if (isNavbarHidden) {
        if (!scrollUp) {
          setPositionSticky(true);
        }
      }
    };

    window.addEventListener('scroll', handleNavbarHidden);

    return () => {
      window.removeEventListener('scroll', handleNavbarHidden);
    };
  }, []);

  // Component style //
  
  const styles = {
    nav: {
      display: isNavbarHidden ? "none" : "flex",
      backgroundColor: positionSticky ? "transparent" : "rgba(28, 28, 28, 0.5)",
      boxShadow: "none",
      position: positionSticky ? "sticky" : "fixed",
      backdropFilter: "blur(5px)",
      transition: "top 0.3s ease",
      animation: positionSticky ? "none" : "slideDown 0.5s forwards",    //The animation is defined inside Navbar.css file
      color: positionSticky ? "var(--text)" : "var(--accent)",
      alignItems: "center", 
    },

    navTypography: {
      fontFamily: "var(--second-font)",
      fontSize: "15px",
      fontWeight: "500",
      cursor: "pointer",  
    },


 
    
  };


  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar style={styles.nav} >
        <Toolbar style={{ gap: "1rem"}}>
          <div style={{display: "flex", gap:"0.25rem", justifyContent: "center", alignItems:"center"}}>
           <Typography style={{color: positionSticky ? "var(--accent)" : "var(--text)", fontSize: "15px"}}className="nav-number">01</Typography>
           <Typography style={{color: positionSticky ? "var(--accent)" : "var(--text)", fontSize: "30px", marginTop: "-11px", marginLeft: "-4px"}}className="nav-point">.</Typography>
           <Typography variant="h6" component="div" style={styles.navTypography} sx={{ flexGrow: 1 }} className="navbar">
            About
           </Typography>
          </div>
          <div style={{display: "flex", gap:"0.25rem", justifyContent: "center", alignItems:"center"}}>
          <Typography style={{color: positionSticky ? "var(--accent)" : "var(--text)", fontSize: "15px"}}className="nav-number">02</Typography>
          <Typography style={{color: positionSticky ? "var(--accent)" : "var(--text)", fontSize: "30px", marginTop: "-11px", marginLeft: "-4px"}}className="nav-point">.</Typography>
           <Typography variant="h6" component="div" style={styles.navTypography} sx={{ flexGrow: 1 }} className="navbar">
            Experience
           </Typography>
          </div>
          <div style={{display: "flex", gap:"0.25rem", justifyContent: "center", alignItems:"center"}}>
          <Typography style={{color: positionSticky ? "var(--accent)" : "var(--text  )", fontSize: "15px"}}className="nav-number">03</Typography>
          <Typography style={{color: positionSticky ? "var(--accent)" : "var(--text)", fontSize: "30px", marginTop: "-11px", marginLeft: "-4px"}}className="nav-point">.</Typography>
           <Typography variant="h6" component="div" style={styles.navTypography} sx={{ flexGrow: 1 }} className="navbar">
            Contact
           </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}