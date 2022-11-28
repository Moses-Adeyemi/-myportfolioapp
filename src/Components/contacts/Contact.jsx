import React from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookMessenger } from "react-icons/fa";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_ewb9gdf", "template_gxyzavo", form.current, "PzH7GGZlZghEtFWu9");

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5> Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4> Email</h4>
            {/* <h5>oludare@gmail.com</h5> */}
            <a href="mailto:oludareadeyemi52@gmail.com">Send a message</a>
          </article>

          <article className="contact__option">
            <FaFacebookMessenger className="contact__option-icon" />
            <h4> Messager</h4>
            {/* <h5>Moses Adeyemi</h5> */}
            <a
              href="https://m.me/mosesadeyemi"
              target="_blank"
              rel="noreferrer"
            >
              Send an message
            </a>
          </article>

          <article className="contact__option">
            <AiOutlineWhatsApp className="contact__option-icon" />
            <h4> WhatsApp</h4>
            
            <a href="https://wa.me/+2349020019943">
              Send Chat
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />

          <textarea name="message" id="" cols="30" rows="7" required>
            Your Message
          </textarea>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
