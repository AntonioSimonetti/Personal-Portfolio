import Typography  from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import './Parallax.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import React, { useEffect, useState } from 'react';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import statueImage from '../assets/heroPhoto.png';
import useMediaQuery from '@mui/material/useMediaQuery';




const ParallaxComponent = () => {

  const mediaQueryActiveFs = useMediaQuery('(max-width: 450px)');

  {/*Define the parallax logic on mouse vertical scroll*/}
  useEffect(() => {
    const sections = document.querySelectorAll('.parallax-section');

    const handleScroll = () => {
      const scrollY = window.scrollY;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionBottom = sectionTop + sectionHeight;

        if (scrollY >= sectionTop && scrollY <= sectionBottom) {
          section.style.transform = `translateY(-${scrollY - sectionTop}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  
  {/*Ensure the animation plays in its entirety once started*/}
  useEffect(() => {
    const overlay = document.querySelector('.overlay');
    const mainPara = document.querySelector(".mainPara")

    if (overlay) {
      overlay.addEventListener('mouseover', () => {
        overlay.style.animation = 'moveLeft 4s forwards';
        overlay.style.animationPlayState = 'running';
        mainPara.classList.add('pulse');
      });

      overlay.addEventListener('animationend', () => {
        overlay.style.animation = 'none';
        overlay.style.left = '20%';
        overlay.style.top = '19.6%';
        mainPara.classList.remove('pulse');
      });
    }
  }, []);
  
  {/*Define styles*/}
  const containerStyle = {
    height: '300vh',
    overflow: 'hidden',
    backgroundColor: "var(--dark-background)", 
    width: '100%', 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    //border: "2px solid yellow",

  };

  const sectionStyle = {
    height: '100vh',
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'start',
    transition: 'transform 0.2s',
    flexDirection: "column",
    gap:"1rem",
    width:"80%",
  };

  const mainFlexContainer = {
    height: "100%",
    width: "100%" ,
    //border: "2px solid var(--dark-background) ",
    animation: "borderTransition 4s linear infinite",  
  }

  const headerDiv = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  }

  const headerText = {
    fontSize: mediaQueryActiveFs ? "30px" : undefined,
    fontFamily: "var(--second-font)", 
  }

  const firstBoxContainer = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems:"center",
    width: "90%",
    height: "100%",
    //border: "2px solid blue",  
    padding: "0 2rem", 
  }

  const secondBoxContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    width: "90%",
    height: "100%",
    //border: "2px solid green",  
    padding: "0 2rem", 
  }

  const paraStyle = {
    color: 'var(--text)',
    fontWeight: 'normal',
    fontFamily: "var(--main-font)", 
    fontSize: mediaQueryActiveFs ? "10px" : undefined,
  };

  const imageStyle = {
    width: mediaQueryActiveFs ? "30%" : undefined,
    height: mediaQueryActiveFs ? "30%" : undefined,
  }

  {/*Theme to use the responsive fontsize fomr Mui */}
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  const [selectedCategory, setSelectedCategory] = useState('frontend');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const categoryToTechMap = {
    frontend: ['JavaScript', 'HTML5', 'CSS3', 'React'],
    backend: ['Node.js'],
    versionControl: ['GitHub', 'Git'],
    developmentTools: ['ESLint', 'Webpack'],
    testing: ['Jest', 'Testing Library'],
    webDevelopmentEcosystem: ['Firebase'],
  };


  return (
    <div style={containerStyle}>
      <section className="parallax-section" style={{ ...sectionStyle, backgroundColor:"transparent", marginTop: "10rem"}}>
      <Grid container style={mainFlexContainer}>
            <Box style={headerDiv}>
              <Typography variant="h3" style={headerText}>
              <span style={{color: "var(--accent)"}}>01</span>
              </Typography> 
              <Typography variant="h3" style={headerText}>
              <span style={{color: "var(--accent)", fontFamily: "Helvetica, Roboto"}}>.</span>
              </Typography> 
              <Typography variant="h3" style={headerText}>
              <span style={{color: "var(--text)", marginLeft: "1rem"}}>About Me</span>
              </Typography> 
            </Box>
       
            <Grid item lg={6} md={12} sm={12} xs={12}> 
               <Box style={firstBoxContainer}>
                 <ThemeProvider theme={theme}>
                   <Typography variant="p" style={paraStyle} className="mainPara">
                   Hello everyone, my name is <span style={{color: "var(--accent)"}}>Antonio</span>, and I began my journey in the world of web development just about a year ago. 
                   But let me share my story with you. From a young age, I've been a computer enthusiast and a 'pc guy,' as well as a passionate gamer and football enthusiast. 
                   I worked in the networking and help-desk field, and even though I enjoyed what I did, I wasn't entirely sure if it was my final destination as a job. Despite my interest in that field, I sensed that there was something more I wanted to explore.
                  <br/>
                  <br/>
                  That desire to explore and learn something new drove me to take a bold step. 
                  I embarked on my journey into the world of web development, and my determination to learn made the seemingly impossible possible. 
                  I started with <span style={{color: "var(--accent)"}}>HTML and CSS</span>, then I delved into <span style={{color: "var(--accent)"}}>JavaScript, React, Node</span>, and other technologies. 
                  I also found myself drawn to <span style={{color: "var(--accent)"}}>3D technologies like three.js</span>.
                  While it's a desire of mine to master them, I've decided to do so after completing my path to becoming a <span style={{color: "var(--accent)"}}>full-stack developer</span>, as I currently consider myself primarily a <span style={{color: "var(--accent)"}}>front-end developer</span>.
                  <br/>
                  <br/>
                  Before I committed to web development, it's important to note that I explored marketing during my career journey.<span style={{color: "var(--accent)"}}>
                  However, I quickly realized it wasn't the place for me, even if it was a nice stays.</span> This realization led me to transition <span style={{color: "var(--accent)", fontWeight: "bolder"}}>boldly</span> into web development.
                  <br/>
                  <br/>
                  My journey has been a continuous and self-driven learning experience. <span style={{color: "var(--accent)"}}>I've never stopped seeking new ways to improve my skills and knowledge.</span> I'm determined to grow and contribute with my dedication and passion.

                   </Typography>
                 </ThemeProvider>
                </Box>
             </Grid>
             <Grid item lg={6} md={12} sm={12} xs={12} > 
                <Box style={secondBoxContainer} className="secondBoxContainer">
                 <div className="overlay"></div>
                 <img className="image" src={statueImage} alt="Image" style={imageStyle}/>
                </Box> 
              </Grid>
       </Grid>
      </section>


      <section className="parallax-section" style={{ ...sectionStyle, backgroundColor: 'transparent', border: "2px solid yellow" }}>
        <Grid container style={mainFlexContainer}>
            <Box style={headerDiv}>
              <Typography variant="h3" style={headerText}>
              <span style={{color: "var(--accent)"}}>02</span>
              </Typography> 
              <Typography variant="h3" style={headerText}>
              <span style={{color: "var(--accent)", fontFamily: "Helvetica, Roboto"}}>.</span>
              </Typography> 
              <Typography variant="h3" style={headerText}>
              <span style={{color: "var(--text)", marginLeft: "1rem"}}>Technologies</span>
              </Typography> 
            </Box>
       
            <Grid item lg={6} md={12} sm={12} xs={12} > 
              <Box className="side-menu">
              <ThemeProvider theme={theme}>
                 <List>
                      {Object.keys(categoryToTechMap).map((category) => (
                        <ListItem
                        button
                        key={category}
                        selected={selectedCategory === category}
                        onClick={() => handleCategoryClick(category)}
                        >
                           <ListItemText primary={category} />
                        </ListItem>
                      ))}
                 </List>
              </ThemeProvider>
              </Box>
            </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12} > 
                 <ThemeProvider theme={theme}>
                 <List>
                      {categoryToTechMap[selectedCategory].map((tech) => (
                        <ListItem key={tech}>
                           <ListItemText primary={tech} />
                        </ListItem>
                      ))}
                 </List>
                 </ThemeProvider>
              </Grid>                      
        </Grid>      
      </section>
      <section className="parallax-section" style={{ ...sectionStyle, backgroundColor: 'blue' }}>
        Section 3
      </section>
    </div>
  );
};

export default ParallaxComponent;