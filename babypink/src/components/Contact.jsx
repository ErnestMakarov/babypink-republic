import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../css/contact.css";


export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      first_name: form.current.first_name.value,
      last_name: "its contact message",
      user_email: form.current.user_email.value,
      user_phone: form.current.user_phone.value,
      user_address: "its contact message",
      user_comment: form.current.user_comment.value,
      payment_method: "its contact message",
      items_list: "its contact message",
      total_sum: "its contact message",
    };

    emailjs
      .send(
        "service_qecnjvt",
        "template_3byuqch",
        templateParams,
        "MTmSPVanB0uhr6_cs"    
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((err) => {
        console.error(err);
        alert("Error sending message.");
      });
  };

  return (
    <div className="contact-page main">
      <div className="contact-container">
        <div className="contact-box">
          <form ref={form} onSubmit={sendEmail} className="contact-form">

            <input name="first_name" placeholder="Your name" required />
            <input name="user_email" placeholder="Your email" type="email" required />
            <input name="user_phone" placeholder="Your phone number" required />

            <textarea
              name="user_comment"
              placeholder="Your message"
              required
            />

            <button type="submit" className="contact-btn">Send</button>

          </form>

        </div>
      </div>
    </div>
  );
}
