import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import ProductsPresentation from "./components/ProductsPresentation";
import TopCategories from "./components/TopCategories";
import productsData from './data/productsData.js'
import PerformanceMetrics from "./components/PerformanceMetrics/index.jsx";
import Locations from "./components/Locations/index.jsx";
import Articles from "./components/Articles/index.jsx";
import ArticleItems from "./data/articlesData.js";

function App() {

const [ products, setProducts ] = useState(productsData)
const [ articles, setArticles ] = useState(ArticleItems)


  return (
    <div>
      <Header />
      <Home />
      <TopCategories />
      <ProductsPresentation products={products} />
      <PerformanceMetrics />
      <Locations />
      <Articles articles={articles}/>
    </div>
  );
}

export default App;
