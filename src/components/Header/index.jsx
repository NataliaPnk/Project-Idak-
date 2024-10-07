import React from "react";
import s from "../Header/index.module.css";
import label from "../Header/media/label.png";
import iconSignIn from "../Header/media/icon_sign_in.png";

export default function Header() {
  return (
    <div className={s.headerOuterContainer}>
      <div className={s.headerInnerContainer}>
        <img src={label} />

        <div className={s.nav_bar}>
          <p>Home</p>
          <p>Rentals</p>
          <p>Categories</p>
          <p>About Us</p>
          <p>Contact</p>
          <p>Blog</p>
        </div>

        <div className={s.rightPartHeader}>
          <div className={s.sightInPart}>
            <img src={iconSignIn} />
            <span>Sigh in</span>
          </div>

          <button>+ Post Listing</button>
        </div>
      </div>
    </div>
  );
}
