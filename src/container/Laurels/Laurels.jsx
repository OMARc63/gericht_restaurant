import React from "react";
import { SubHeading } from "../../components";
import { data, images } from "../../constants";

import "./Laurels.css";

const AwardCard = ({ title, subtitle, img }) => (
  <div className="app__laurels_awards-card">
    <img src={img} alt="award img" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: "#dcda87" }}>
        {title}
      </p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Awards & Recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>
      <div className="app__laurels_awards">
        {data.awards.map((award) => (
          <AwardCard
            img={award.imgUrl}
            title={award.title}
            subtitle={award.subtitle}
          />
        ))}
        {console.log(data.awards)}
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels img" />
    </div>
  </div>
);

export default Laurels;
