import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import ProductsPresentation from "./components/ProductsPresentation";
import TopCategories from "./components/TopCategories";
import productsData from './data/productsData.js'
import PerformanceMetrics from "./components/PerformanceMetrics/index.jsx";
import Locations from "./components/Locations/index.jsx";

function App() {

const [ products, setProducts ] = useState(productsData)


  return (
    <div>
      <Header />
      <Home />
      <TopCategories />
      <ProductsPresentation products={products} />
      <PerformanceMetrics />
      <Locations />
    </div>
  );
}

export default App;
