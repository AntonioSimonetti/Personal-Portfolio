import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Card, CardContent, CardMedia, Typography, Container, Button } from '@mui/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import provaImage from "../assets/page1.png";
import pulseImg from "../assets/pulse.jpg";
import pcShopImg from "../assets/pcShop.png";
import pokeImg from "../assets/pokeFinder.png";
import weatherAppImg from "../assets/weatherApp.png";
import { Box } from '@mui/system';



const CarouselComponent = () => {
    const mediaQueryActiveFs = useMediaQuery('(max-width: 1024px)');
    const mediaQueryActiveSmall = useMediaQuery('(max-width: 450px)');




  const cardData = [
    {
      title: 'Personal Portfolio',
      image: provaImage,
      description: 'This is card 1.',
      isHovered: false,
    },
    {
      title: 'Twitter Clone',
      image: pulseImg,
      description: 'This is card 2.',
      isHovered: false,

    },
    { 
        title: 'PC Shop',
        image: pcShopImg,
        description: 'This is card 3.',
        isHovered: false,

    },
    {
      title: 'Where is Waldo',
      image: pokeImg,
      description: 'This is card 4.',
      isHovered: false,

    },
    {
        title: 'Weather App',
        image: weatherAppImg,
        description: 'This is card 5.',
        isHovered: false,

    },

  ]; 

  

  const containerStyle = {
    display: "flex", 
    justifyContent: mediaQueryActiveFs ? "center" : "space-between", 
    flexDirection: "column",
    //border: mediaQueryActiveSmall ? "2px solid yellow" : "2px solid red",
    width: "100%",
    height: mediaQueryActiveFs ? "auto" : "20rem",
  }

  const cardStyle = { 
    width: mediaQueryActiveFs ? "100%" : "100%", 
    height: mediaQueryActiveFs ? "100%" : undefined,
    margin: "10px", 
    position: "relative",
    //border: "2px solid green",
  }

  const contentStyle = {
     cursor: "pointer",
     opacity: 1,
     backgroundColor: "transparent", 
     position: "absolute",
     top: "50%",
     left:0,
     right:0,
     bottom:0,
     width: "130%",
     height: "30%",
     transform: "translateY(-50%)",
     fontSize: mediaQueryActiveFs ? "10px" : undefined,
     color: "red"
  }

  const imageStyle = {
    width: "100%", // Imposta sempre la larghezza al 100%
    height: "auto", // Imposta l'altezza su "auto" per mantenere le proporzioni
  }

  const buttonStyleDiv = {
    cursor: "pointer",
    opacity: 1,
    position: "absolute",
    top: "75%",
    left:0,
    right:0,
    bottom:0,
    width: "100%",
    height: "15%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: mediaQueryActiveFs ? "center" : "center",
    //border: "2px solid red"

  }
  
  const buttonStyle = {
    fontSize: mediaQueryActiveFs ? "10px" : "13px",
    width: mediaQueryActiveFs ? "20%":"20%",
    height: mediaQueryActiveFs ? "10px" : "10%",
    /*border: "2px solid yellow", */
    height: mediaQueryActiveFs ? "10%":"40%",
    backgroundColor: "var(--accent)",
    padding: mediaQueryActiveFs ? "10px": "20px",
    borderRadius: "16px",
  
  }


  return (
    <Container maxWidth="md">
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        dynamicHeight={false}
        infiniteLoop={true}
        renderThumbs={() => {}}
      >
        {cardData.map((card, index) => (
           
          <div key={index} className="carousel-page" style={containerStyle}>
              <Box style={{display: "flex", alignItems:"center", justifyContent:"center", gap:"2rem"}}>
                <Typography variant="h6" component="div" style={{ fontSize: mediaQueryActiveFs ? "10px" : "30px" }}>
                  {index + 1}
                </Typography>
                <Typography variant="h6" component="div" style={{ fontSize: mediaQueryActiveFs ? "10px" : "30px" }}>
                  {card.title}
                </Typography>
              </Box>
            <Card className="carousel-card" style={cardStyle}>
              <CardMedia
                component="img"
                alt={card.title}
                height="100%"
                image={card.image}
                style={mediaQueryActiveSmall ? { ...imageStyle, maxWidth: "450px" } : imageStyle}
                />
               
              <CardContent className="opacity" style={contentStyle}>
              
             </CardContent> 
              <div className="card-buttons" style={buttonStyleDiv}>
                <Button disableRipple className='card-buttons' style={buttonStyle}>
                  Code
                </Button>
                <Button disableRipple className='card-buttons' style={buttonStyle}>
                  Live
                </Button>
             </div> 
            </Card>
          </div>
        ))}
      </Carousel>
    </Container>
  );
}; 

export default CarouselComponent;


/* import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Card, CardContent, CardMedia, Typography, Container, Button } from '@mui/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import provaImage from "../assets/page1.png";
import pulseImg from "../assets/pulse.jpg";
import pcShopImg from "../assets/pcShop.png";
import pokeImg from "../assets/pokeFinder.png";
import weatherAppImg from "../assets/weatherApp.png";



const CarouselComponent = () => {
  const mediaQueryActiveFs = useMediaQuery('(max-width: 1024px)');
  




  const cardData = [
    {
      title: 'Personal Portfolio',
      image: provaImage,
      description: 'This is card 1.',
      isHovered: false,
    },
    {
      title: 'Twitter Clone',
      image: pulseImg,
      description: 'This is card 2.',
      isHovered: false,

    },
    { 
        title: 'PC Shop',
        image: pcShopImg,
        description: 'This is card 3.',
        isHovered: false,

    },
    {
      title: 'Where is Waldo',
      image: pokeImg,
      description: 'This is card 4.',
      isHovered: false,

    },
    {
        title: 'Weather App',
        image: weatherAppImg,
        description: 'This is card 5.',
        isHovered: false,

    },

  ]; 


  const containerStyle = {
    display: "flex", 
    justifyContent: mediaQueryActiveFs ? "center" : "space-between", 
    border: "2px solid yellow",
    width: "100%",
    height: "20rem",
  }

  const cardStyle = { 
    width: mediaQueryActiveFs ? "100%" : "100%", 
    height: mediaQueryActiveFs ? "100%" : undefined,
    margin: "10px", 
    position: "relative",
    //border: "2px solid green",
  }

  const contentStyle = {
     cursor: "pointer",
     opacity: 0,
     backgroundColor: "var(--accent)", 
     position: "absolute",
     top: "50%",
     left:0,
     right:0,
     bottom:0,
     width: "100%",
     height: "30%",
     transform: "translateY(-50%)",
     fontSize: mediaQueryActiveFs ? "10px" : undefined,
  }

  const buttonStyleDiv = {
    cursor: "pointer",
    opacity: 1,
    position: "absolute",
    top: "75%",
    left:0,
    right:0,
    bottom:0,
    width: "100%",
    height: "15%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: mediaQueryActiveFs ? "center" : "center",
    //border: "2px solid red"

  }
  
  const buttonStyle = {
    fontSize: mediaQueryActiveFs ? "10px" : "13px",
    width: mediaQueryActiveFs ? "40%":"40%",
    height: mediaQueryActiveFs ? "100px" : "10%",
    border: "2px solid yellow", 
    height: mediaQueryActiveFs ? "10%":"40%",
    backgroundColor: "var(--accent)",
    padding: mediaQueryActiveFs ? "20px": "0px",
    borderRadius: "16px",
  
  }

  let itemsPerSlide = 1;
  const totalItems = cardData.length;

/*
  return (
    <Container maxWidth="md">
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        dynamicHeight={false}
        infiniteLoop={true}
        renderThumbs={() => {}}
      >
        {cardData.map((card, index) => (
          <div key={index} className="carousel-page">
            <Card className="carousel-card">
              <CardMedia
                component="img"
                alt={card.title}
                height="100%"
                image={card.image}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
              <CardContent className="opacity">
                <Typography variant="h6" component="div" style={{ fontSize: mediaQueryActiveFs ? "10px" : undefined }}>
                  {card.title}
                </Typography>
              </CardContent>
              <div className="card-buttons">
                <Button disableRipple className='card-buttons' style={{ fontSize: mediaQueryActiveFs ? "10px" : "13px" }}>
                  Code
                </Button>
                <Button disableRipple className='card-buttons' style={{ fontSize: mediaQueryActiveFs ? "10px" : "13px" }}>
                  Live
                </Button>
              </div>
            </Card>
          </div>
        ))}
      </Carousel>
    </Container>
  );
}; 

export default CarouselComponent; */