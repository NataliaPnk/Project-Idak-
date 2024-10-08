import React from "react";
import s from "../ProductItem/index.module.css";

export default function ProductItem({
  id,
  img,
  price,
  duration,
  title,
  bedrooms,
  bathrooms,
  square,
  img_seller,
  name_seller,
  jobPosition,
  img_favorite,
}) {
  return (
    <div className={s.productItem}>
      <img src={img} />

      <div className={s.pricePlusTitle}>
        <div className={s.price}>
          <span>{price}</span>
          <p>{duration}</p>
        </div>
        <h4>{title}</h4>
      </div>
      <div className={s.rooms}>
        <p>{bedrooms} |</p>
        <p>{bathrooms} |</p>
        <p>{square} </p>
      </div>

      <div className={s.sellerInformation}>
        <img className={s.sellerPhoto} src={img_seller} />

        <div className={s.sellerTitle}>
          <span>{name_seller}</span>
          <p>{jobPosition}</p>
        </div>

        <img className={s.heard} src={img_favorite} />
      </div>
    </div>
  );
}
