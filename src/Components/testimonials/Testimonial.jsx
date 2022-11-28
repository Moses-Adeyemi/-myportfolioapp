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
    review: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni accusantium repellendus suscipit quasi veritatis iusto. Aliquam modi  aspernatur numquam inventore dolor natus tempora itaque excepturi voluptatem, sequi iure placeat minus.     ",
  },

  {
    avatar: AVTR2,
    name: "Favour Ayooluwa",
    review: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni accusantium repellendus suscipit quasi veritatis iusto. Aliquam modi  aspernatur numquam inventore dolor natus tempora itaque excepturi voluptatem, sequi iure placeat minus.  ",
  },

  {
    avatar: AVTR3,
    name: "Tolulope Abolarinwa",
    review: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni accusantium repellendus suscipit quasi veritatis iusto. Aliquam modi  aspernatur numquam inventore dolor natus tempora itaque excepturi voluptatem, sequi iure placeat minus.  ",
  },

    {
    avatar: AVTR4,
    name: "Jerremiah Adeyemi",
    review: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni accusantium repellendus suscipit quasi veritatis iusto. Aliquam modi  aspernatur numquam inventore dolor natus tempora itaque excepturi voluptatem, sequi iure placeat minus.  ",
  },
  {
    avatar: AVTR5,
    name: "Feyikemi Mariam",
    review: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni accusantium repellendus suscipit quasi veritatis iusto. Aliquam modi  aspernatur numquam inventore dolor natus tempora itaque excepturi voluptatem, sequi iure placeat minus.  ",
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
