import React from "react";
import { images } from "../../constants";

import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus section__padding flex__center app__bg"
    id="#about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="big G" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="spoon" />
        <p className="p__opensans">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
          mollitia rerum iure odio maiores. Aperiam, fuga quia voluptatibus
          omnis, nesciunt impedit.
        </p>
        <button className="custom__button">keep news</button>
      </div>
      <div className="app__aboutus_knife">
        <img src={images.knife} alt="knife" />
      </div>
      <div className="app__aboutus_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="spoon" />
        <p className="p__opensans">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
          mollitia rerum iure odio maiores. Aperiam, fuga quia voluptatibus
          omnis, nesciunt impedit.
        </p>
        <button className="custom__button">keep news</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
