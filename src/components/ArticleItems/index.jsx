import React from "react";
import s from "../ArticleItems/index.module.css";

export default function ArticleItems({ id, picture, timestamp, title, text }) {
  return (
    <div className={s.articleItems}>
      <img src={picture} />

      <div className={s.textContentItems}>
      <span>{timestamp}</span>
      <h4>{title}</h4>
      <p>{text}</p>
      </div>
    </div>
  );
}
