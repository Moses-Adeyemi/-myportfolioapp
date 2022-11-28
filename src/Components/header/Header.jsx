
import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/meee-rbg.png'
import HeaderSocial from './HeaderSocials'




const Header = () => {
  return (

   <header> 

      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Moses Adeyemi</h1>
       
        
        {/* {<marquee behavior="scroll" direction="left" scrollamount="5">Brings ideas to life with code. I make awesome things for awesome people!  I love to learn and have fun while doing it. What makes that even more awesome, is sharing it with you!</marquee>} */}
        <h5 className="text-light"> Fullstack Developer</h5>
            <CTA/>
           <HeaderSocial/>     
      <div className="mypics">
        <img src={ME} alt="meee" />
       </div>
       
    <div>
    <a href="#contact"  className="scroll__down">Scroll Down</a>
          </div>
      </div>
      </header>   
      
  )
}

export default Header