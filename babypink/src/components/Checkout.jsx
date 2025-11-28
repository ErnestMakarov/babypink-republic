import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useCartContext } from "../utils/CartContext";

export default function Checkout() {
  const { cart } = useCartContext();
  const form = useRef();

  const [isPickup, setIsPickup] = useState(false);
  const [isPayOnSpot, setIsPayOnSpot] = useState(false);

  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price);
    const qty = Number(item.qty) || 0;
    return sum + price * qty;
  }, 0);

  const sendEmail = (e) => {
    e.preventDefault();

    const itemsList = cart
      .map((item) => {
        const lineTotal = parseFloat(item.price) * Number(item.qty);
        return `${item.title} — Size: ${item.size}, Qty: ${item.qty}, Price: ${lineTotal.toFixed(
          2
        )}€`;
      })
      .join("\n");

    const templateParams = {
      first_name: form.current.first_name.value,
      last_name: form.current.last_name.value,
      user_email: form.current.user_email.value,
      user_phone: form.current.user_phone.value,
      user_address: isPickup ? "Pickup from store" : form.current.user_address.value,
      user_comment: form.current.user_comment.value,
      payment_method: isPayOnSpot ? "Pay at pickup (cash/card)" : "Bank transfer",
      items_list: itemsList,
      total_sum: total.toFixed(2),
    };

    emailjs
      .send(
        "service_qecnjvt",
        "template_3byuqch",
        templateParams,
        "MTmSPVanB0uhr6_cs"
      )
      .then(() => {
        alert("Your order has been successfully sent!");
        form.current.reset();
        setIsPickup(false);
        setIsPayOnSpot(false);
      })
      .catch(() => alert("There was an error sending your order."));
  };

  return (
    <main className="main checkout-main">
      <div className="checkout_container">

        <section className="checkout-left">

          <h2 className="checkout-title">Checkout</h2>

          <form ref={form} onSubmit={sendEmail} className="checkout-form">
            <div className="input_container">
              <div className="checkout-row">
                <input name="first_name" placeholder="First Name" required />
                <input name="last_name" placeholder="Last Name" required />
              </div>

              <input name="user_email" placeholder="E-mail" required type="email" />
              <input name="user_phone" placeholder="Phone Number" required />
              {!isPickup && (
                <input name="user_address" placeholder="Delivery Address" required />
              )}
            </div>

            <textarea className="comment-input"
              name="user_comment"
              placeholder="Comment for the order (optional)"
            />

            <label className="checkbox">
              <input
                type="checkbox"
                checked={isPickup}
                onChange={() => setIsPickup(!isPickup)}
              />
              <span className="checkmark"></span>
              Pick up from store
            </label>

            <label className="checkbox">
              <input
                type="checkbox"
                checked={isPayOnSpot}
                onChange={() => setIsPayOnSpot(!isPayOnSpot)}
              />
              <span className="checkmark"></span>
              Pay at pickup (cash/card)
            </label>

            {!isPayOnSpot && (
              <div className="payment-box">
                <p>Please transfer the total amount:</p>
                <h3>{total.toFixed(2)}€</h3>

                <b
                  className="iban"
                  onClick={() =>
                    navigator.clipboard.writeText("EE762200221058832384")
                  }
                >
                  EE762200221058832384 <span>(Click to copy)</span>
                </b>
              </div>
            )}

            <button type="submit" className="checkout-btn">
              Submit Order
            </button>
          </form>
        </section>

        <div className="checkout-right">
          <h3 className="order-summary-title">Your Order</h3>
          <p className="order-total">Total: <b>{total.toFixed(2)}€</b></p>

          <div className="order-list">
            {cart.map((item) => (
              <div className="order-item" key={item.id + item.size}>
                <img src={item.img} />
                <div>
                  <p><b>{item.title}</b></p>
                  <p>Size: {item.size}</p>
                  <p>quantity: {item.qty}</p>
                  <p>{(item.qty * item.price).toFixed(2)}€</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
