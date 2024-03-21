import React from "react";
import "../styles/contact.css";
import {useState} from "react";


const Contact = () => {

  const [errors, setErrors] = useState({}); 


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  const changeHandler = (event) => {

    const name = event.target.name;
    const value = event.target.value;
    


    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newErrors = {};
    for (const key in formData) {
      if (formData[key].trim() === "") {
        newErrors[key] = true;
      }
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert("Form Data Submitted Successfully");
      setFormData({
        name:"",
        email:"",
        message:""
      });

    }
  };

  return (
    <div className="contactus">
      <div className="contact-bg"></div>

      <div className="form-container">
        <h1>CONTACT US</h1>
        <form id="contactForm" onSubmit={submitHandler}>
          <div className={errors.name ? "name error" : "name"}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={changeHandler}
            />
            {errors.name && <span className="error">Name is required</span>}
          </div>
          <div className={errors.email ? "email error" : "email"}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={changeHandler}
            />
            {errors.email && <span className="error">Email is required</span>}
          </div>
          <div className={errors.message ? "message error" : "message"}>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Your Message"
              value={formData.message}
              onChange={changeHandler}
            ></textarea>
            {errors.message && <span className="error">Message is required</span>}
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
