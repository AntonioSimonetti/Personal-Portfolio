import Typography  from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';
import './Parallax.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import React, { useEffect, useState } from 'react';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import statueImage from '../assets/heroPhoto.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import CarouselComponent from "./Carousel";




const ParallaxComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState('frontend');
  const mediaQueryActiveFs = useMediaQuery('(max-width: 1199px)');
  //const oldMediaQuery = useMediaQuery('(max-width: 450px)');


  const handleCategoryClick = (category) => {
    // Set the selected category when a category button is clicked
    setSelectedCategory(category);
  };

// Tech categories and their tech to be shown inside the 2nd section

  const categoryToTechMap = {
    frontend: [
      { name: 'JavaScript', skill: 3 },  
      { name: 'HTML5', skill: 4 },    
      { name: 'CSS3', skill: 3 },       
      { name: 'React', skill: 3 },    
      { name: 'Material-ui', skill: 2 },  
    ],
    backend: [
      { name: 'Node.js', skill: 1 },  
    ],
    VCS: [
      { name: 'Git', skill: 3 },         
      { name: 'GitHub', skill: 4 },    
    ],
    devTools: [
      { name: 'Vite', skill: 2 },       
      { name: 'Webpack', skill: 2 },      
      { name: 'Firebase', skill: 2 },     
    ],
    testing: [
      { name: 'Jest', skill: 1 },      
      { name: 'Testing Library', skill: 1 },
    ],
  };
  

  

//Define the parallax logic on mouse vertical scroll
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
  
//Ensure the animation plays in its entirety once started
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
  
//Define component's styles
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
    //border: "2px solid var(--accent) ",
  }

  const headerDiv = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    //border: "2px solid red"
  }

  const headerText = {
    fontSize: mediaQueryActiveFs ? "30px" : undefined,
    fontFamily: "var(--second-font)", 
  }

//Theme to use the responsive fontsize from Mui

  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  
//SECTION N1 STYLES

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

  //SECTION N2 STYLES

  const firstList = {
    display: "flex",
    flexDirection: mediaQueryActiveFs ? "row" : "column",
    justifyContent: "center",
    alignItems: mediaQueryActiveFs ? "flex-start" : "flex-end",
    //border: "2px solid yellow",
    width: "100%",
    height: mediaQueryActiveFs ? "100px" : undefined,   
  }

  const secondList = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: mediaQueryActiveFs ? "flex-start" : "flex-end",
    //border: "2px solid purple",
    width: "100%",
    marginLeft: "0.5rem",
    height: mediaQueryActiveFs ? "300px" : undefined,
    marginTop: mediaQueryActiveFs ? "-14rem" : undefined,
    
  }

  const listItemButtonStyle = {
    borderLeft: mediaQueryActiveFs ? "none":"2px solid var(--text)",
    borderBottom: mediaQueryActiveFs ?"2px solid var(--text)" : "none",
    width: "25%",
    textAlign: mediaQueryActiveFs ? "center" : "left", 
    padding: "10px",
    fontSize: mediaQueryActiveFs ? "1px !important" : undefined,
    //border: "2px solid purple",
    marginRight: mediaQueryActiveFs ? "2px" : undefined, 
    marginLeft: mediaQueryActiveFs ? "2px" : undefined, 

  };
  
  const selectedListItemButtonStyle = {
    borderLeft: mediaQueryActiveFs ? "none" : '2px solid var(--accent)',
    borderBottom: mediaQueryActiveFs ? "2px solid var(--accent)" : "none",
    width: '25%',
    textAlign: mediaQueryActiveFs ? "center !important" : "left", 
    padding: '10px',
    color: "var(--accent)",
    //border: "2px solid purple",
    marginRight: mediaQueryActiveFs ? "2px" : undefined,
    marginLeft: mediaQueryActiveFs ? "2px" : undefined, 
    animation: `borderAnimation 4s infinite`, // Imposta l'animazione
 
  };

  const itemTextStyle = {
    fontSize: mediaQueryActiveFs ? "10px" : "20px",
  }

  const skillStyleName = {
    fontSize: mediaQueryActiveFs ? "10px" : "21px",
  }

  const skillStyle = {
    color: 'var(--accent)', 
    marginLeft: "1rem", 
    animation: "colorSkill 4s infinite",
  } 

  const skillStyleNumb = {
  }

  const btnStyle ={
    fontFamily: "var(--second-font)",
    color: 'var(--accent)',
    border: "2px solid var(--accent)",
    textTransform: "none",
  }
  
  

  return (
    <div style={containerStyle}>
      <section className="parallax-section" style={{ ...sectionStyle, backgroundColor:"transparent", marginTop: "10rem"}}>
      <Grid container style={mainFlexContainer}>
            <Box style={headerDiv}>
              <Typography variant="h3" style={headerText} className="header-text">
              <span style={{color: "var(--accent)"}}>01</span>
              </Typography> 
              <Typography variant="h3" style={headerText} className="header-text">
              <span style={{color: "var(--accent)", fontFamily: "Helvetica, Roboto"}}>.</span>
              </Typography> 
              <Typography variant="h3" style={headerText}>
              <span style={{color: "var(--text)", marginLeft: "1rem"}} className="header-text">About Me</span>
              </Typography> 
            </Box>
       
            <Grid item lg={6} md={12} sm={12} xs={12}> 
               <Box style={firstBoxContainer}>
                 <ThemeProvider theme={theme}>
                 <Typography variant="p" style={paraStyle} className="mainPara">
                   Hello everyone, I’m <span style={{color: "var(--accent)"}}>Antonio</span>, and I started my journey in the world of web development about a year ago. 
                   Let me share my story with you. For my whole life, I've been a computer enthusiast and a 'pc guy,' as well as a passionate gamer and football supporter. 
                   I worked in the networking and help-desk fields, but even though I enjoyed what I was doing, I wasn't entirely sure if it was my final career destination. Despite my interest in that field, I sensed that there was something more I wanted to explore.
                  <br/>
                  <br/>
                  The desire to explore and learn something new drove me to take a bold step. I embarked on my journey into the world of web development, and my determination made the seemingly impossible possible. 
                  I started with <span style={{color: "var(--accent)"}}>HTML and CSS</span>, then I delved into <span style={{color: "var(--accent)"}}>JavaScript, React, Node</span>, and other technologies. 
                  I also found myself drawn to <span style={{color: "var(--accent)"}}>3D technologies like three.js</span>.
                  Even though it is a desire of mine to master them, I've decided to do so after completing my path to becoming a <span style={{color: "var(--accent)"}}>full-stack developer</span>, as I currently consider myself primarily a <span style={{color: "var(--accent)"}}>front-end developer</span>.
                  <br/>
                  <br/>
                  Before I committed to web development, it's important to note that I explored marketing during my career journey.<span style={{color: "var(--accent)"}}>
                  However, I quickly realized it wasn't the place for me, even though it was a nice experience.</span> This realization led me to switch <span style={{color: "var(--accent)", fontWeight: "bolder"}}>boldly</span> into web development.
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

      <section className="parallax-section" style={{ ...sectionStyle, backgroundColor: 'var(--dark-background-two', width: "100%" }}>
        <Grid container style={mainFlexContainer}>
            <Box style={headerDiv}>
              <Typography variant="h3" style={headerText} className="header-text">
              <span style={{color: "var(--accent)"}}>02</span>
              </Typography> 
              <Typography variant="h3" style={headerText} className="header-text">
              <span style={{color: "var(--accent)", fontFamily: "Helvetica, Roboto"}}>.</span>
              </Typography> 
              <Typography variant="h3" style={headerText} className="header-text">
              <span style={{color: "var(--text)", marginLeft: "1rem"}}>Technologies</span>
              </Typography> 
            </Box>
       
            <Grid item lg={6} md={12} sm={12} xs={12} > 
              <Box  >
              <ThemeProvider theme={theme}>
              <List style={firstList}>
                    {Object.keys(categoryToTechMap).map((category) => {       /* Create an array of object keys for mapping over and displaying them inside the buttons */
                          const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1); /* Capitalize the first letter of each entry */
                
                          return (
                            <ListItemButton
                              style={                                         /* Define the button style based on if it's selected or not */
                                selectedCategory === category      
                                  ? selectedListItemButtonStyle
                                  : listItemButtonStyle
                              }
                              key={category}
                              selected={selectedCategory === category}
                              onClick={() => handleCategoryClick(category)}   /* Define the selectedCategory storing the user's choise inside the state */
                            >
                                <p style={itemTextStyle}>{capitalizedCategory} </p>
                            </ListItemButton>
                          );
                      })}
              </List>
              </ThemeProvider>
              </Box>
            </Grid>
            <Grid item lg={6} md={12} sm={12} xs={12}> 
            <ThemeProvider theme={theme}>
            <List style={secondList} className="second-list">
                    <Box>
                    {categoryToTechMap[selectedCategory].map((tech) => {
                            const { name, skill } = tech;

                            return (
                              <ListItem key={name} >
                                <p className="second-list-text" style={skillStyleName} >
                                  {name}:
                                </p>
                              </ListItem>
                            );
                          })}
                      </Box>
                      <Box >
                      {categoryToTechMap[selectedCategory].map((tech, i) => {
                        const { name, skill } = tech;
                        const animationDelayInSeconds = i * 0.2;

                        return (
                          <ListItem key={name} >
                          <p className="second-list-text" style={skillStyleName} >
                             <span style={{...skillStyle, animationDelay:`${animationDelayInSeconds}s` , fontSize: mediaQueryActiveFs ? "10px" : "21px"  }}>{'/'.repeat(skill)}</span>
                             <span style={{...skillStyleNumb, fontSize: mediaQueryActiveFs ? "10px" : "21px" }}>{'/'.repeat(6 - skill)} </span>
                          </p>
                          </ListItem>
                        );
                      })}
                      </Box>
            </List>
            </ThemeProvider>
            </Grid>                           
        </Grid>      
      </section>

      <section className="parallax-section" style={{ ...sectionStyle, width: "100%", backgroundColor: "var(--accent-three", }}>
         <Grid container style={mainFlexContainer}>
              <Box style={headerDiv}>
                      <Typography variant="h3" style={headerText} className="header-text">
                      <span style={{color: "var(--accent)"}}>03</span>
                      </Typography> 
                      <Typography variant="h3" style={headerText} className="header-text">
                      <span style={{color: "var(--accent)", fontFamily: "Helvetica, Roboto"}}>.</span>
                      </Typography> 
                      <Typography variant="h3" style={headerText} className="header-text">
                      <span style={{color: "var(--text)", marginLeft: "1rem"}}>Work</span>
                      </Typography> 
              </Box>
              <Box style={{ width:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                 <CarouselComponent/>
              </Box>
              <Box style={{width: "100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                 <Button variant="outlined" style={btnStyle} className="parallaxBtn"
                  onClick={() => {window.open("https://github.com/AntonioSimonetti?tab=repositories", '_blank');  
                    
                  }} >
                  <span>More on GitHub</span>
                 </Button>
             </Box>
           
         </Grid>
      </section>

    </div>
  );
};

export default ParallaxComponent;

 