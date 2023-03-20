import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => {
  return (
    <div className="app__menuItem">
      <div className="app__menuItem_head">
        <div className="app__menuItem_head-name">
          <p className="p__cormorant">{title}</p>
        </div>
        <div className="app__menuItem_head-dash" />
        <div className="app__menuItem_head-price">
          <p className="p__cormorant">{price}</p>
        </div>
      </div>
      <div className="app__menuItem_sub">
        <p className="p__opensans" style={{ color: "#AAA" }}>
          {tags}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
