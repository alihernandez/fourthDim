import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';

import { scroller } from "react-scroll";
import './Footer.css';

const Footer = () => {

    const scrollToSection = () => {
        scroller.scrollTo("aboutMe", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      };

    return(
        <div className="footer">
        <div className="fContent">
        
          <p style={{textAlign:"center"}}>Text Goes Here</p>
        </div>
  
          <div className="socialLinks">
  
          <Link to={'/'}>
          <Button className="homeBtn" onClick={scrollToSection}>Home</Button> 
          </Link>
  
         
  
          <Link to={'/'}>
          <Button className="contactBtn">Contact</Button> 
          </Link>
          

          
  
          
  
          </div>
  
          <p style={{textAlign:"center"}}>&copy; The Fourth Dimension 2021</p>
          <a href="/Terms"><p style={{textAlign:"center"}}>Terms & Services</p></a>
          
      </div>
    );
};

export default Footer;