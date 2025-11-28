import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { useCartContext } from "../utils/CartContext";

export default function Checkout() {
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
      first_name: form.current.first_name.value,
      last_name: form.current.last_name.value,
      user_email: form.current.user_email.value,
      user_phone: form.current.user_phone.value,
      user_address: form.current.user_address.value,
      user_comment: form.current.user_comment.value,
      items_list: itemsList,
      total_sum: total.toFixed(2),
    };

    emailjs
      .send(
        "service_qecnjvt",
        "template_x6obp3s",
        templateParams,
        "MTmSPVanB0uhr6_cs"
      )
      .then(() => {
        alert("Your order has been successfully sent!");
        form.current.reset();
      })
      .catch((err) => {
        console.error(err);
        alert("There was an error sending your order. Please try again.");
      });
  };

  return (
    <main className="main checkout-main">
      <div className="checkout_container container">
        <section className="checkout-sidebar">
          <h2 className="checkout-title">Checkout</h2>

          

          <form ref={form} onSubmit={sendEmail} className="checkout-form">

            <div className="checkout-row">
              <input name="first_name" placeholder="First Name" required />
              <input name="last_name" placeholder="Last Name" required />
            </div>

            <input name="user_email" placeholder="E-mail" required type="email" />
            <input name="user_phone" placeholder="Phone Number" required />
            <input name="user_address" placeholder="Delivery Address" required />

            <textarea
              name="user_comment"
              placeholder="Comment for the order (optional)"
            />

            <label className="take-in-place-label">
              <input type="checkbox" name="TakeInPlace" /> Pick up from store
            </label>

            <p className="checkout-payment-text">
              Please transfer the total order amount({total.toFixed(2)}€) to the following bank account:<br /> <br />
              <b className="copy-iban" onClick={() => navigator.clipboard.writeText('EE762200221058832384')} style={{cursor: 'pointer'}}>
                 EE762200221058832384 <span>(Click to copy)</span>
              </b>
              <br />
              <br />
              <p className="checkout-info-text">
              Please fill out your details below. Don’t worry — all items currently in
              your cart will be included in your order summary and sent to us safely.
            </p>
            </p>

            <button type="submit" className="checkout-btn">
              Submit Order
            </button>
          </form>
        </section>

        <div className="checkout-block">
          
          <div className="order-total">
            <h3 className="order-summary-title">Your Order</h3>
            <p>Total: <b>{total.toFixed(2)}€</b></p>
          </div>
          {cart.map((item) => (
            <div className="order-item" key={item.id + item.size}>
              <img src={item.img} className="order-item-image" />
              <div className="order-item-details">
                <p><b>{item.title}</b></p>
                <p>Size: <b>{item.size}</b></p>
                <p>Quantity: {item.qty}</p>
                <p>{(parseFloat(item.price) * Number(item.qty || 0)).toFixed(2)}€</p>
              </div>
            </div>
          ))}

          
        </div>
      </div>
    </main>
  );
}
