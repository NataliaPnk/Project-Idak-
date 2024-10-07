import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import ProductsPresentation from "./components/ProductsPresentation";
import TopCategories from "./components/TopCategories";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <TopCategories />
      <ProductsPresentation />
    </div>
  );
}

export default App;
