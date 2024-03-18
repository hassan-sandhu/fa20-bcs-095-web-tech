import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div className="contactus">
      <div className="contact-bg"></div>

      <div class="form-container">
        <h1>CONTACT US</h1>
        <form id="contactForm">
          <div className="name">
            <input type="text" name="name" id="name" placeholder="Your Name" />
            <span id="nameError" class="error"></span>
          </div>
          <div className="email">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
            />
            <span id="emailError" class="error"></span>
          </div>
          <div className="message">
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
            <span id="messageError" class="error"></span>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
