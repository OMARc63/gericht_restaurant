import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { SubHeading } from "../../components";
import { images } from "../../constants";

import "./Gallery.css";

const Gallery = () => {
  const scrollRef = React.useRef();

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    }
    if (direction === "right") {
      current.scrollLeft += 300;
    }
  };
  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta earum
          odit molestias excepturi. Suscipit, pariatur!
        </p>
        <button className="custom__button" style={{ marginTop: "1rem" }}>
          View More
        </button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[
            images.gallery01,
            images.gallery02,
            images.gallery03,
            images.gallery04,
          ].map((img) => (
            <div className="app__gallery-images_card" key={img}>
              <img src={img} alt="gallery_img" />
              <BsInstagram className="app__gallery-images_icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery_arrows-icon left"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery_arrows-icon right"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
