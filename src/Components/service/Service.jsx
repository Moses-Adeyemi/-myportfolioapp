import React from "react";
import "./service.css";
import { BiCheck } from "react-icons/bi";

const Service = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Work with product managers to design user interactions in applications.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Add features to older websites, implementing user-friendly designs.</p>
            </li>
            
          
            <li>
              <BiCheck className="service__list-icon" />
              <p>Develop prototypes, Create user flows and wireframe.</p>
            </li>
          </ul>
        </article>

        {/*      end of Web Dev  */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Modified existing software systems to enhance performance and add new features.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Demonstrated exceptional interpersonal and communication skills.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Worked closely with development team members to identify and remove software bugs.</p>
            </li>
           
            <li>
              <BiCheck className="service__list-icon" />
              <p> Keep up-to-date with the latest design trends, tools, and technologies..</p>
            </li>
           
        
          </ul>
        </article>

   

        <article className="service">
          <div className="service__head">
            <h3>Graphic Designer</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Create designs using illustration, photo editing and layout software.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Produce drafts for client review and make revisions based on feedback received.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Review designs for errors before they are printed or published.</p>
            </li>
           {/*  <li>
              <BiCheck className="service__list-icon" />
              <p></p>
            </li> */}
           
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Service;
