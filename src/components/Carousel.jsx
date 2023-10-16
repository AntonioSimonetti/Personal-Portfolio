import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Card, CardContent, CardMedia, Typography, Container, Button } from '@mui/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';
import useMediaQuery from '@mui/material/useMediaQuery';



const CarouselComponent = () => {
    const mediaQueryActiveFs = useMediaQuery('(max-width: 1024px)');



  const cardData = [
    {
      title: 'Personal Portfolio',
      image: 'https://via.placeholder.com/150',
      description: 'This is card 1.',
      isHovered: false,
    },
    {
      title: 'Twitter Clone',
      image: 'https://via.placeholder.com/150',
      description: 'This is card 2.',
      isHovered: false,

    },
    { 
        title: 'PC Shop',
        image: 'https://via.placeholder.com/150',
        description: 'This is card 3.',
        isHovered: false,

    },
    {
      title: 'Where is Waldo',
      image: 'https://via.placeholder.com/150',
      description: 'This is card 4.',
      isHovered: false,

    },
    {
        title: 'Weather App',
        image: 'https://via.placeholder.com/150',
        description: 'This is card 5.',
        isHovered: false,

    },
    { 
        title: 'Battleship',
        image: 'https://via.placeholder.com/150',
        description: 'This is card 6.',
        isHovered: false,

    },
  ]; 

  const itemsPerSlide = 3;
  const totalItems = cardData.length;

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

    const contentStyleDiv = {
        cursor: "pointer",
        opacity: 1,
        backgroundColor: "var(--accent)", 
        position: "absolute",
        top: "60%",
        left:0,
        right:0,
        bottom:0,
        width: "100%",
        height: "30%",
        fontSize: mediaQueryActiveFs ? "10px" : undefined,
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
        {[...Array(Math.ceil(totalItems / itemsPerSlide))].map((_, i) => {
          const startIndex = i * itemsPerSlide;
          const endIndex = startIndex + itemsPerSlide;

          return (
            <div key={i} className="carousel-page" style={{display: "flex", justifyContent: "space-between"}}>
              {cardData.slice(startIndex, endIndex).map((card, index) => (
                <Card key={index} className="carousel-card" style={{width: "30%", margin: "10px", position: "relative"}}>
                  <CardMedia
                    component="img"
                    alt={card.title}
                    height="100%"
                    image={card.image}
                  />
                  <CardContent  style={contentStyle} className="opacity">
                    <Typography variant="h6" component="div" style={{fontSize: mediaQueryActiveFs ? "10px" : undefined,}}>
                      {card.title}
                    </Typography>
                  </CardContent>
                  <div style={contentStyleDiv}>
                  <Button variant="contained" color="primary" className='card-buttons'>
                      Button 1 
                    </Button>
                    <Button variant="contained" color="secondary" className='card-buttons'>
                      Button 2
                    </Button>
                    </div>
                </Card>
              ))}
            </div>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default CarouselComponent;