import React from "react";
import s from "../Home/index.module.css";
import Search from "../Search";

export default function Home() {
  return (
    <div className={s.homeOuterContainer}>
      <div className={s.homeInnerContainer}>
        <div className={s.text}>
          <div className={s.title}>
            <h1 style={{ color: "#1C1C1C" }}>Discover Your</h1>
            <h1 style={{ color: "#E93740" }}>Perfect Rental</h1>
          </div>
          <p>Rent Cars, Houses, and Items in Just a Few Clicks</p>
        </div>
        <div className={s.optionsPlusSearch}>
          <div className={s.options}>
            <div>Places</div>
            <div>Rides</div>
            <div>Things</div>
          </div>
          <Search />
        </div>
      </div>
    </div>
  );
}
