import React from "react";
import s from "../ProductsPresentation/index.module.css";
import Line from "../Line";
import chevronRight from "../ProductsPresentation/media/chevronRight.png";
import ProductItem from "../ProductItem";

export default function ProductsPresentation({ products }) {
  return (
    <div className={s.productsOuterContainer}>
      <div className={s.productsInnerContainer}>
        <h2>Featured Listings</h2>
        <Line />

        <div className={s.themes}>
          <div>
            <p>All Items(5125)</p>
          </div>
          <div>
            <p>Residential Spaces(64)</p>
          </div>
          <div>
            <p>Sports Venues</p>
          </div>
          <div>
            <p>Meeting Spaces</p>
          </div>
          <div>
            <p>Vans&Buses</p>
          </div>
          <div>
            <p>Curs&SUVs</p>
          </div>
          <div>
            <p>Lorries&Industrial Vehicles</p>
          </div>
          <div>
            <img src={chevronRight} />
          </div>
        </div>
          <div className={s.productsItemWrapper}>
        {products.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
        </div>

        <button>Load More</button>

      </div>
    </div>
  );
}
