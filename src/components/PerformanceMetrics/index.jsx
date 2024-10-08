import React from "react";
import s from "../PerformanceMetrics/index.module.css";

export default function PerformanceMetrics() {
  return (
    <div className={s.performanceMetricsContainer}>
      <h2>Insights and Performance Metrics</h2>

      <div className={s.metricsItemsWrapper}>
        <div>
          <span>5000+</span> <p>Total Listings in the System</p>
        </div>
        <div>
          <span>1000+</span> <p>Active Listings</p>
        </div>
        <div>
          <span>30+</span> <p>Articles in the Blog</p>
        </div>
      </div>
    </div>
  );
}
