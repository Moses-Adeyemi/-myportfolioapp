
import React from 'react'
import './footer.css'
import { AiOutlineFacebook } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiOutlineMediumWorkmark } from 'react-icons/ai'


const Footer = () => {
  return (
    <footer >


  <a href="#home" className='foot__logo'>ADEYEMI</a>

      <ul className='permalinks'>
        <li>    <a href="#home">HOME</a></li>
        <li>    <a href="#about">ABOUT</a></li>
        <li>    <a href="#experience">EXPERIENCE</a></li>
        <li>    <a href="#services">SERVICES</a></li>
        <li>    <a href="#portfolio">PORTFOLIO</a></li>
        <li>    <a href="#testimonial">TESTIMONIALS</a></li>
        <li>    <a href="#contact">CONTACT</a></li>
      </ul>

      <div className="footer__socials">
        <a href="#https://facebook.com"><AiOutlineFacebook /></a>
        <a href="#https://linkedin.com"><AiOutlineLinkedin /></a>
        <a href="#https://medium.com"><AiOutlineMediumWorkmark/></a>
      </div>


    </footer>
  )
}

export default Footer;