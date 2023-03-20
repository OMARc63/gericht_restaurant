import React from "react";
import { meal } from "../../constants";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";

import "./Intro.css";

const Intro = () => {
  const vidRef = React.useRef();
  const [playVideo, setPlayVideo] = React.useState(false);

  const hundleVideo = () => {
    setPlayVideo((prevPlayVid) => !prevPlayVid);
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className="app__video">
      <video src={meal} ref={vidRef} />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={() => {
            hundleVideo();
          }}
        >
          {playVideo ? (
            <BsPauseFill size={27} color="#fff" />
          ) : (
            <BsPlayFill size={27} color="#fff" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
