"use client";
import "./header.css";
import Image from "next/image";
import search from "./images/search.png";
import cart from "./images/shopping-cart.png";
import headphone1 from "./images/headphone.png";

export default function Header() {
  return (
    <>
      <div className="header-container">
        <div className="logo-navbar">
          <div className="logo">PHLOX</div>
          <div className="navbar">
            <ul>
              <li className="active">Home</li>
              <li>Shop</li>
              <li>About Us</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="login-search">
          <div>Login</div>
          <div>
            <Image className="icons" src={search} alt="" />
          </div>
          <div>
            <Image className="icons" src={cart} alt="" />
          </div>
        </div>
      </div>
      <div className="bigimage">
        <div className="textphoto">
          <div className="line1">Beat Solo</div>
          <div className="line2">Wireless</div>
          <div className="line3">HEADPHONE</div>
        </div>
        <Image src={headphone1} alt="" />
        <button className="shop-categ">Shop By Category</button>
      </div>
    </>
  );
}
