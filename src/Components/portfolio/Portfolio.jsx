import React from "react";
import "./portfolio.css";
import IMG1 from '../../assets/project1.png'
import IMG2 from '../../assets/port2.PNG'
import IMG3 from '../../assets/port3.PNG'
import IMG4 from '../../assets/port2.jpg'
import IMG5 from '../../assets/port6.jpg'


//ARAY//
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'dashboard',
    github: 'https://github.com/Moses-Adeyemi/dashboard',
    demo:  'https://dribbble.com',
  },

  {
    id: 2,
    image: IMG2,
    title: 'Grid taable ',
    github: 'https://github.com/Moses-Adeyemi/dashboard',
    demo:  'https://dribbble.com',
  },

  {
    id: 3,
    image: IMG3,
    title: 'crypto currency Dashboard ',
    github: 'https://googlebookapp.netlify.app/',
    demo:  'https://googlebookapp.netlify.app/',
  },

  {
    id: 4,
    image: IMG4,
    title: 'Mobile App ',
    github: 'https://github.com',
    demo:  'https://dribbble.com',
  },

  {
    id: 5,
    image: IMG3,
    title: 'Google-book app ',
    github: 'https://github.com',
    demo:  'https://dribbble.com',
  },

  {
    id: 6,
    image: IMG5,
    title: 'Dashboard ',
    github: 'https://github.com',
    demo:  'https://dribbble.com',
  },
]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       
{
  data.map(({id, image, title, github, demo})  =>{
  return(
    <article key={id}  className="portfolio__item">
    <div className="portfolio__item-image">
      <img src={image} alt={title} />
    </div>
    <h3>{title}</h3>
    <div className='portfolio__item-cta'>
      <a
        href={github}
        className="btn"
        target="_blank" rel="noreferrer"
      >
        Github
      </a>
      <a
        href={demo}
        className="btn btn-primary"
        target="_blank" rel="noreferrer"
       
      >
        Live Demo
      </a>
    </div>
  </article>
  )
})
}
      </div>
    </section>
  )
}

export default Portfolio;
