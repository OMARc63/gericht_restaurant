import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";

import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase The New Flavour" />
      <h1 className="app__header-h1">The Key To Fine Dinning</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        debitis praesentium, suscipit molestias fuga accusamus dolor magnam,
        minus maxime tempora.
      </p>
      <button className="custom__button">Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="Welcome" />
    </div>
  </div>
);

export default Header;
