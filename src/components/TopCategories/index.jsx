import React from "react";
import s from "../TopCategories/index.module.css";

import HolidayRentals_01 from "./media/Holiday Rentals_01.png";
import ResidentialSpaces_02 from "./media/ResidentialSpaces_02.png";
import EventSpaces_03 from "./media/EventSpaces_03.png";
import CommercialProperties_04 from "./media/CommercialProperties_04.png";
import More_05 from "./media/More_05.png";

export default function TopCategories() {
  return (
    <div className={s.topCategoriesOuterContainer}>
      <div className={s.topCategoriesInnerContainer}>
        <h2>Browse From Top Categories</h2>
        <div className={s.line}>
          <div className={s.lineFirstPart}></div>
          <div className={s.lineSecondPart}></div>
        </div>

        <div className={s.categories}>
          <div>
            <img src={HolidayRentals_01} /> <p>Holiday Rentals</p>
          </div>
          <div>
            <img src={ResidentialSpaces_02} /> <p>Residential Spaces</p>
          </div>
          <div>
            <img src={EventSpaces_03} /> <p>Event Spaces</p>
          </div>
          <div>
            <img src={CommercialProperties_04} /> <p>Commercial Properties</p>
          </div>
          <div>
            <img src={More_05} /> <p>More</p>
          </div>
        </div>
      </div>
    </div>
  );
}
