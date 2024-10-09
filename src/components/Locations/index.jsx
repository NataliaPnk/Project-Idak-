import React from "react";
import Line from "../Line";
import s from "../Locations/index.module.css";

import pictureAnuradhapura02 from "../Locations/media/pictureAnuradhapura02.png";
import pictureBadulla03 from "../Locations/media/pictureBadulla03.png";
import pictureGampaha04 from "../Locations/media/pictureGampaha04.png";
import pictureJaffna05 from "../Locations/media/pictureJaffna05.png";

export default function Locations() {
  return (
    <div className={s.locationsContainer}>
      <h2>Featured Locations</h2>
      <Line />

      <div className={s.allPhotos}>
        <div className={s.centerPhotos}>
          <img src={pictureAnuradhapura02} />
          <img src={pictureBadulla03} />
          <img src={pictureGampaha04} />
          <img src={pictureJaffna05} />
        </div>
      </div>
    </div>
  );
}
