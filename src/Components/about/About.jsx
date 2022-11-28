import React from "react";
import "./about.css";
import {CgAwards} from 'react-icons/cg'
import {AiFillFolderAdd} from 'react-icons/ai'
import {AiOutlineProject} from 'react-icons/ai'
import ME from '../..//assets/me-about.jpg'




const About = () => {
  return (
   
    <section id="about">
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Imag" />
          </div>
          </div>

      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <CgAwards  className="about__icon"/>
            <h5>Experience</h5>
            <small>2+ Years Working</small>
          </article>

          <article className="about__card">
            <AiFillFolderAdd  className="about__icon"/>
            <h5>Clients</h5>
            <small>10+ Worldwide</small>
          </article>

          <article className="about__card">
            <AiOutlineProject  className="about__icon"/>
            <h5>Projects</h5>
            <small>20+ Completed Projects</small>
          </article>
          </div>

          <p>Am a tech enthusiast who believes in integrating FAITH & TECHNOLOGY 
            for purposeful impact and changing the world for Christ by using technology.  
            Ambitious Full Stack Developer skilled at collaborating with  colleagues 
            and project managers in deadline-driven environment where sound work 
          ethic is paramount. Intermediate knowledge in front-end development tools, including : JavaScript,
           React, NodeJS, MongoDB . <br /> I thrive on bringing ideas to life and 
           delivering eye-catching results ahead of schedule. All whilst possessing a keen eye for design, 
           accessibility, and well-structured code.</p>
     
     <a href="#contact" className="btn btn-primary">Let's Talk</a>
  </div>
</div>
     
</section>
   
  );
};

export default About;
