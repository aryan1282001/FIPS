import React from "react";
import StoreGallery from "./StoreGallery";


const Shopping = () => {
  
  return (
    <div className="shoppingbag-body">
      <div className="Shoppingbag">
        <div className="cart">
          <div className="store-cart-wrapper">
            <h1>Shopping cart</h1>
            <p>Store / Shopping Cart</p>
            
          </div>
          <div className="item-wrapper">
            <div className="item-pic">
                <img src="https://d2j6dbq0eux0bg.cloudfront.net/images/40728386/1796029425.jpg" alt="" />
                
            </div>
            <div className="item-info">
                <h4>SAMPLE.Colored chairs</h4>
                <p>Size:120x34</p>
                <h3>QTY:1 ˅</h3>
            </div>
            <div className="item-price">
                <h4>X</h4>
                <h3>$49.95</h3>

            </div>
          </div>
          <hr />
          <div className="total-wrapper">
            <div className="total1">
            <h1>TOTAL</h1>
            <h3>Looking for more?<span> Continue shopping</span></h3>
          </div>
          <div className="total2">
            $49.95
          </div>
          </div>
        </div>
        <div className="checkout">
            <h1>Checkout</h1>
            <p>Enter your email address. This address will be used to send you order status updates.</p>
            <input className="check-inp-1" type="email" placeholder="Your email address" />
            <div className="checkbox-input">
            <input  className="check-inp-2"type="checkbox"  />
            <label> Keep me up to date on news and exclusive offers</label>
            </div>
            <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
