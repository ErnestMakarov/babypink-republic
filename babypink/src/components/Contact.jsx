import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { useCartContext } from "../utils/CartContext";
import "../css/contact.css";

export default function Contact() {
  const { cart } = useCartContext();
  const form = useRef();

  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price);
    const qty = Number(item.qty) || 0;
    if (isNaN(price)) return sum;
    return sum + price * qty;
  }, 0);

  const sendEmail = (e) => {
    e.preventDefault();

    const itemsList = cart
      .map((item) => {
        const price = parseFloat(item.price);
        const qty = Number(item.qty) || 0;
        const lineTotal = isNaN(price) ? 0 : price * qty;

        return `${item.title} — Size: ${item.size}, Qty: ${qty}, Price: ${lineTotal.toFixed(
          2
        )}€`;
      })
      .join("\n");

    const templateParams = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      user_phone: form.current.user_phone.value,
      user_address: form.current.user_address.value,
      user_comment: form.current.user_comment.value,
      items_list: itemsList,
      total_sum: total.toFixed(2),
    };

    emailjs
      .send(
        "service_o3f9qla",
        "template_qwvs75t",
        templateParams,
        "FRg2d-gy8wK3aDlVA"
      )
      .then(() => {
        alert("Order sent!");
        form.current.reset();
      })
      .catch((err) => {
        console.error(err);
        alert("Error sending order");
      });
  };

  return (
    <div className="checkout-page main">
      <h2 className="checkout-title">Contact</h2>
      <div className="checkout-container container">
          <div className="order-box">
                <form ref={form} onSubmit={sendEmail} className="checkout-form">
                  <input name="user_name" placeholder="Your name" required />
                  <input name="user_email" placeholder="E-mail" required type="email" />
                  <input name="user_phone" placeholder="Phone number" required />
                  <input name="user_address" placeholder="Delivery address" required />
                  <textarea
                    name="user_comment"
                    placeholder="Comment for the order"
                  />
                  <button type="submit" className="checkout-btn">
                    Send
                  </button>
                </form>
          </div>
      </div>
    </div>
  );
}
