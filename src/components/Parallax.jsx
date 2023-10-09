import { Directions } from '@mui/icons-material';
import Typography  from "@mui/material/Typography";
import React, { useEffect } from 'react';
import Button from '@mui/material/Button';


const ParallaxComponent = () => {
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

  const containerStyle = {
    height: '300vh',
    overflow: 'hidden',
    backgroundColor: "var(--dark-background)", 
    width: '95%', 
    margin: '2rem auto',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    //border: "2px solid green",

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

  



  return (
    <div style={containerStyle}>
      <section className="parallax-section" style={{ ...sectionStyle, backgroundColor:"red", marginTop: "10rem"}}>
        Section 1
      </section>
      <section className="parallax-section" style={{ ...sectionStyle, backgroundColor: 'green' }}>
        Section 2
      </section>
      <section className="parallax-section" style={{ ...sectionStyle, backgroundColor: 'blue' }}>
        Section 3
      </section>
    </div>
  );
};

export default ParallaxComponent;