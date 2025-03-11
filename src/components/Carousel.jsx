import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Card, CardContent, CardMedia, Typography, Container, Button } from '@mui/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import provaImage from "../assets/page1.png";
import pulseImg from "../assets/pulse.jpg";
import pcShopImg from "../assets/pcShop.png";
import quizApp from "../assets/QuizApp.png";
import fbs from "../assets/flight-booking.png";
import { Box } from '@mui/system';



const CarouselComponent = () => {  
  const [isHovered, setIsHovered] = useState(false);

  const mediaQueryActiveFs = useMediaQuery('(max-width: 1024px)');
  const mediaQueryActiveSmall = useMediaQuery('(max-width: 450px)');

  const cardData = [
    {
      title: 'quiz app',
      image: quizApp,
      linkCode: 'https://github.com/AntonioSimonetti/QuizAppFE',
      linkLive: 'https://quizappfe-dmhrdjdxhmdfabgf.eastus-01.azurewebsites.net/',
      isHovered: false,
      disabled: false,
    },
    {
      title: 'flight-booking system',
      image: fbs,
      linkCode: 'https://github.com/AntonioSimonetti/flight-booking',
      linkLive: 'disabled',
      isHovered: false,
      disabled: true,
    },
    {
      title: 'personal portfolio',
      image: provaImage,
      linkCode: 'https://github.com/AntonioSimonetti/Personal-Portfolio ',
      linkLive: 'disabled',
      isHovered: false,
      disabled: true,
    },
    {
      title: 'twitter clone',
      image: pulseImg,
      linkCode: 'https://github.com/AntonioSimonetti/socialcloneTOP',
      linkLive: 'disabled',
      isHovered: false,
      disabled: true,
    },
    { 
        title: 'pc shop',
        image: pcShopImg,
        linkCode: 'https://github.com/AntonioSimonetti/ShoppingCartTOP',
        linkLive: 'https://antoniosimonetti.github.io/ShoppingCartTOP/',
        isHovered: false,
        disabled: false,
    },
   

  ]; 

  const containerStyle = {
    display: "flex", 
    justifyContent: mediaQueryActiveFs ? "center" : "space-between", 
    flexDirection: "column",
    width: "100%",
    height: mediaQueryActiveFs ? "auto" : "20rem",
  }

  const cardStyle = { 
    width: "100%", 
    height: mediaQueryActiveFs ? "100%" : undefined,
    margin: "10px", 
    position: "relative",
    //border: "2px solid green",
    transition: "transform 0.3s ease",
    transform: isHovered ? 'translate(-5px, 5px)' : "translate(0px, 0px)",
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
    display: isHovered ? "flex" : "none",
    justifyContent: "space-around",
    alignItems: mediaQueryActiveFs ? "center" : "center",
    //border: "2px solid red"
    transition: "opacity 0.3s ease",
  }
  
  const buttonStyle = {
    fontSize: mediaQueryActiveFs ? "10px" : "15px",
    width: mediaQueryActiveFs ? "20%":"20%",
    height: mediaQueryActiveFs ? "10px" : "10%",
    /*border: "2px solid yellow", */
    padding: mediaQueryActiveFs ? "10px": "20px",
    borderRadius: "16px",
    color: "var(--accent-two )",
    backgroundColor: "var(--text)",
    fontFamily: "var(--second-font)", 
    textTransform: "lowercase",
    fontWeight: "bolder", 
   
  }

  const titleStyle = {
    color: isHovered ? "var(--accent)" : "var(--text)",
  }

  const titleStyleDot = {
    color: isHovered ? "var(--accent)" : "var(--accent-three)",
  }



   // Gestisci l'evento onMouseEnter
   const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Gestisci l'evento onMouseLeave
  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <Container maxWidth="md">

      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        dynamicHeight={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        renderThumbs={() => {}}
      
      >

        {cardData.map((card, index) => (
           
          <div key={index} className="carousel-page" style={containerStyle } onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
              <Box style={{display: "flex", alignItems:"center", justifyContent:"center", }}>
                <Typography variant="h6" component="div" style={{ ...titleStyleDot,fontSize: mediaQueryActiveFs ? "10px" : "30px", fontFamily: "Helvetica", }}>
                  -
                </Typography>
                <Typography variant="h6" component="div" style={{ ...titleStyle,fontSize: mediaQueryActiveFs ? "10px" : "30px", fontFamily: "var(--second-font)", margin:"0 0.5rem" }}>
                  {card.title}
                </Typography>
                <Typography variant="h6" component="div" style={{ ...titleStyleDot,fontSize: mediaQueryActiveFs ? "10px" : "30px", fontFamily: "Helvetica", }}>
                  -
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
               
              <CardContent  style={contentStyle}>
              
             </CardContent> 
              <div className="card-buttons-div" style={buttonStyleDiv}>
                <Button disableRipple className='card-buttons' style={buttonStyle} onClick={() => window.open(card.linkCode, '_blank')}>
                &lt;code/&gt;
                </Button>
                <Button disableRipple className='card-buttons' style={{...buttonStyle, backgroundColor: "var(--accent-two)", color: "var(--accent)"}}
                  disabled={card.linkLive === "disabled"}
                  onClick={() => {
                    if (card.disabled) {
                      return; 
                    } else {
                      window.open(card.linkLive, '_blank');  // Apre il link esterno
                    }
                  }}                   
                >
                &lt;live/&gt;
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