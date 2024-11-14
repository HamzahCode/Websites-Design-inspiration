import Image from "next/image";
import "./features.css";
import truck from "./images/delivery-truck.png";
import guarantee from "./images/guarantee-certificate.png";
import support from "./images/support.png";
import payment from "./images/secure-payment.png";
export default function Features() {
  return (
    <div className="features">
      <div>
        <div className="feature-image">
          <Image src={truck} alt="" />
        </div>
        <div className="feature-name">
          <h3>Free Shipping</h3>
          <p>Free Shipping On All Citites</p>
        </div>
      </div>
      <div>
        <div className="feature-image">
          <Image src={guarantee} alt="" />
        </div>
        <div className="feature-name">
          <h3>Money Guarantee</h3>
          <p>30 Days Money</p>
        </div>
      </div>
      <div>
        <div className="feature-image">
          <Image src={support} alt="" />
        </div>
        <div className="feature-name">
          <h3>Online Support 24/7</h3>
          <p>Technical Support 24/7</p>
        </div>
      </div>
      <div>
        <div className="feature-image">
          <Image src={payment} alt="" />
        </div>
        <div className="feature-name">
          <h3>Secure Payment</h3>
          <p>All Cashes Accepted</p>
        </div>
      </div>
    </div>
  );
}
