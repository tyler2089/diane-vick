import React from "react";
import Navbar from "../components/navbar";
import fetchData from "../components/fetchstockdata";
import "../styles/shop.css";
import { useEffect, useState } from "react";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchData().then((data) => {
      console.log(data);
      setProducts(data);
    });
  }, []);

  function ProductTabGenerator(product) {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return (
      <div className="product-tab" key={product.ID} onClick={() => window.open(product.link, "_blank"
      )}>
        <div
          className="product-image"
          style={{ backgroundImage: `url(${product.image_url})` }}
        ></div>
        <h1 className="product-name">{product.title}</h1>
        <h2 className="product-price">{`$${product.price.toFixed(2)} - (1/4) yard`}</h2>
        <h3 className="product-quantity">{`${product.quantity} yards`}</h3>
      </div>
    );
  }

  const ProductsDisplay = () => {
    console.log(products)
    if (products){
    return (
      <div className="shop-container">
        {products.map((product) => {
          return ProductTabGenerator(product);
        })}
      </div>
    );
  }
  }
  return (
    <div>
      <Navbar />
        <ProductsDisplay />
    </div>
  );
};

export default Shop;
