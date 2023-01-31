import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    // 
    emailjs.send("service_9qmzbi7","template_oi35qwt")
      .then(
        (result) => {
          alert(result.text);
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <br />
      <input type="text" name="user_name" />
      <br />
      <label>Email</label>
      <br />
      <input type="email" name="email" />
      <br />
      <label>Message</label>
      <br />
      <textarea name="message" />
      <br />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactUs;