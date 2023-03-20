import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer_contact">
        <h1 className="headtext__cormorant">Contact Us</h1>
        <p className="p__opensans">9wr 35d, New York, NY10024, USA</p>
        <p className="p__opensans">+135 214 15 741</p>
        <p className="p__opensans">+125 684 78 254</p>
      </div>
      <div className="app__footer_logo">
        <img src={images.gericht} alt="logo footer" />
        <p className="p__opensans">
          "The best way to find yourself is to lose yourself in the service of
          others"
        </p>
        <img src={images.spoon} alt="spoon" style={{ marginTop: "15px" }} />
        <div className="app__footer_logo-icons">
          <BsFacebook />
          <BsTwitter />
          <BsInstagram />
        </div>
      </div>
      <div className="app__footer_work">
        <h1 className="headtext__cormorant">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>
    <div className="footer_copyrights">
      <p className="p__opensans">2021 Gericht All Rights reserved</p>
    </div>
  </div>
);

export default Footer;
