import React, {useState, useEffect} from "react";
import './Herosection.css';
import Grid from '@mui/material/Grid';
import Typography  from "@mui/material/Typography";
import Box from "@mui/material/Box"
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import statueImage from '../assets/heroPhoto.png';
///
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';



const Herosection = () => {
    const [displayText, setDisplayText] = useState("Hi, my name is");
    const [textColor, setTextColor] = useState("var(--text)");
    const isSmScreen = useMediaQuery('(max-width: 960px)');
    const mediaQueryActiveFs = useMediaQuery('(max-width: 1199px)');

    useEffect(() => {
      // Change phrase every second
      const phrases = ["Hi, my name is", "Hi, mi chiamo", "Hi, je m'appelle", 
                       "Hi, mi nombre es", "Hi, mein name ist","Hi, 私の名前はです",
                       "Hi, 我的名字是","Hi, 제 이름은"];

      let currentIndex = 0;
  
      const textInterval = setInterval(() => {
        setDisplayText(phrases[currentIndex]);
        currentIndex = (currentIndex + 1) % phrases.length;
      }, 1000);
  
      return () => clearInterval(textInterval);
    }, []);

    const handleTextColorToggle = () => {
      // Fn to change the name's color
      if (textColor === "var(--text)") {
        setTextColor("var(--accent)");
      } else if (textColor === "var(--accent)") {
        setTextColor("var(--accent-two)");
      } else {
        setTextColor("var(--text)");
      }
    };

    const styles = {

        heroSection: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '40px',
          maxWidth: "99%",
          //border: "2px solid red"
        },

        column: {
            padding:"20px",
            height: isSmScreen ? "20rem" : "40rem",
            maxHeight: isSmScreen ? "20rem" : "40rem",
            overflow: "hidden",  
            display: 'flex',
            flex:"1",
            justifyContent: 'center',
            alignItems: 'center',    
            //border: "2px solid red",
        },

        columnOne: {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
            padding:"20px",
            height: isSmScreen ? "40rem" : "40rem",
            maxHeight: isSmScreen ? "40rem" : "40rem",
            overflow: "hidden",
            //border: "2px solid red",
        },

        typography: {
            width: '100%',
            lineHeight: 'normal',
            overflow: "hidden", 
            fontFamily: "var(--main-font)",
            fontSize: "5rem",
            fontWeight: "bolder",   
        },

         smTypography: {
            fontSize: '1.5rem',  
        },

        image: {
            width: '100%',
            height: 'auto',
            objectFit: "contain",
        },

        headingStyle : {
            fontFamily: "var(--main-font)",
            color: textColor,
            fontSize: isSmScreen ? "26px": "64px",
            fontWeight: 'bold',
            marginTop: "1rem"
        },
        
        headingStyleTwo : {
            fontFamily: "var(--main-font)",
            color: "var(--text)",
            fontSize: isSmScreen ? "26px": "64px",
            fontWeight: 'bold',
            marginTop: "1rem"
        },
        
        paraStyle : {
            color: 'var(--text)',
            fontWeight: 'normal',
            fontFamily: "var(--main-font)",
            textAlign: "start",
            fontSize: "18px",
            marginTop: "2rem",
        },
        
        btnStyle : {
            fontFamily: "var(--second-font)",
            color: 'var(--accent)',
            border: "2px solid var(--accent)",
        },


        statue:  {
            width: isSmScreen ? "180px" : "350px",
            height: isSmScreen ? "280px" : "500px",
            marginLeft: isSmScreen ? "0rem" : "7.5rem",
            marginTop:  isSmScreen ? "0rem" : "2.5rem",
        },

        statueDiv:  {
            width: isSmScreen ? "100%" : "600px",
            height: isSmScreen ? "350px" : "600px",
            marginLeft: isSmScreen ? "0rem" : "0rem",
            marginTop:  isSmScreen ? "0rem" : "-4rem",
            border: "2px solid var(--text)",
            display: isSmScreen ? "flex" : "block",
            justifyContent: isSmScreen ? "center" : "none",
            alignItems: isSmScreen ? "center" : "none",
        },       
      };

      let theme = createTheme();
      theme = responsiveFontSizes(theme);

    return(
          <Grid container style={styles.heroSection}>
            <Grid item lg={6} md={12} sm={12} xs={12}> 
              <Box style={styles.columnOne}>
              <ThemeProvider theme={theme}>
                
            <Typography style={{...styles.btnStyle, marginLeft: "4px", border: "none"}} className="departure-board-animation">{displayText}</Typography>
            <div style={{position: "relative"}}>
              <Typography variant="h3" style={styles.headingStyle} className="no-wrap-text" onClick={handleTextColorToggle}>
              <span className="interactive-text">Antonio Simonetti.</span> <br />    
              </Typography> 
              <Typography variant="h3" style={styles.headingStyleTwo} className="no-wrap-text" >
              I build things.
              </Typography>
              <svg viewBox="0 0 160 160" style={{ position: "absolute", top: "84%", width: "10.5%", height: "12.5%", left: "66%" }} className="planet">
                <circle cx="80" cy="80" r="50" fill="var(--accent)" className="my-circle" />
                   <g transform="matrix(0.866, -0.5, 0.25, 0.433, 80, 80)">
                      <path d="M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z" fill="var(--text)" stroke="red">
                        <animateTransform attributeName="transform" type="rotate" from="360 0 0" to="0 0 0" dur="3s" repeatCount="indefinite" />
                      </path>
                   </g>
                <path d="M 50,0 A 50,50 0 1,0 -50,0Z" transform="matrix(0.866, -0.5, 0.5, 0.866, 80, 80)" fill="var(--accent)" className="my-circle" />
              </svg>
            </div>
            <Typography variant="p" style={styles.paraStyle} className="lastParaHero">
            Web developer with a deep passion for the ever-evolving world of web technologies.<br/> 
            Eagerly seeking opportunities to apply existing skills and acquire new ones to craft exceptional digital experiences<br/>  
            </Typography>  

            <Button variant="outlined" style={{...styles.btnStyle, padding:"15px 50px",textTransform: "none", marginTop: "4rem"}} className="heroBtn"
             onClick={() => {
              // Scrolls based on window height and media query
              const windowHeight = window.innerHeight; 
              const value = mediaQueryActiveFs ? (windowHeight * 3.8) : (windowHeight * 3);
              
              window.scrollTo({
                top: value,
                behavior: "smooth",
              });
            }}
             >
            <span>Check out my work!</span>
            </Button>

              </ThemeProvider>
              </Box>
             </Grid>
             <Grid item lg={6} md={12} sm={12} xs={12}> 
              <Box style={styles.column}>
              <div style={styles.statueDiv} className="statueDiv" >
              <img src={statueImage} alt="Statue of Liberty" style={styles.statue}  />
              </div>
              </Box> 
             </Grid>
            <div className="scrollerDiv">
              <div className="scroll-downs">
                 <div className="mousey">
                   <div className="scroller">
                  
                   </div>
               </div>
              </div>
             </div>
          </Grid>
    )
}

export default Herosection;