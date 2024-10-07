import React from "react";
import s from "../Search/index.module.css";

export default function Search() {
  return (
    <div className={s.search}>
      <input type="search" placeholder="Search for houses, cars, and more" />
    </div>
  );
}
