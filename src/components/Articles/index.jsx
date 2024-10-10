import React from "react";
import s from "../Articles/index.module.css";
import Line from "../Line";
import pictureLeftSite from "../Articles/media/pictureLeftSite.png";
import ArticleItems from "../ArticleItems";

export default function Articles({ articles }) {
  return (
    <div className={s.articlesContainer}>
      <h2>Important Articles</h2>
      <Line />

      <div className={s.contentWrapper}>
        <div className={s.leftSite}>
          <img src={pictureLeftSite} />
          <span>February 4, 2023</span>
          <h4>Top Tips for Finding the Perfect Rental</h4>
          <p>
            Discover expert advice on how to find the ideal rental property that
            meets your needs and budget
          </p>
        </div>

        <div className={s.rightSite}>
          {articles.map((article) => (
            <ArticleItems key={article.id} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
}
