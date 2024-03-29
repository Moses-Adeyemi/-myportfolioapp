import React from "react";
import "./testimonial.css";
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpeg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpeg'
import AVTR5 from '../../assets/avatar5.jpeg'



// import Swiper core and required modules
import {  Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const data = [
  {
    avatar: AVTR1,
    name: "Anthoy Daniyan",
    review: " Working with Moses was an absolute pleasure. 
      Their ability to seamlessly integrate faith and technology into their work is truly inspiring.
      Their dedication to delivering high-quality results ahead of schedule is commendable.     ",
  },

  {
    avatar: AVTR2,
    name: "Favour Ayooluwa",
    review: "   I had the pleasure of collaborating with Moses on a project and was impressed by their strong
      work ethic and expertise in full stack development. Their proficiency in front-end development tools such as JavaScript, 
      React, and NodeJS were instrumental in achieving our project goals.  ",
  },

  {
    
    {
    avatar: AVTR4,
    name: "Jeremiah Adeyemi",
    review: "  As a project manager, I can attest to Adeyemi's exceptional skills as a Full Stack Developer.
      Their commitment to bringing innovative ideas to life while maintaining a focus on design, 
      accessibility, and well-structured code sets them apart in the industry.  ",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5> Review from Clients </h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >




     
{
  data.map(({avatar, name, review}, index) =>  {
    return (
      <SwiperSlide  key={index}    className="testimonial">
      <div className="client__avatar">
        <img src={avatar} alt="Avatar One" />
      </div>
      <h5 className="client__name">{name}</h5>
      <small className="client__review">
       {review}
      </small>
    </SwiperSlide>
    )
  })
}
       
      </Swiper>
    </section>
  );
};

export default Testimonial;
