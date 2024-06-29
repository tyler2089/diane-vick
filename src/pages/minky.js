import React from "react";
import Navbar from "../components/navbar";
import fetchData from "../components/fetchstockdata";
import "../styles/search.css";
import "../styles/shop.css";

import { useEffect, useState, useRef } from "react";

const Minky = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const searchRef = useRef();
  const filterRef = useRef();

  useEffect(() => {
    fetchData().then((data) => {
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
      </div>
    );
  }

  const ProductsDisplay = () => {
    if (products){
    return (
      <div className="shop-container">
        {products.map((product) => {
          if (search !== "") {
            if (product.title.toLowerCase().includes(search.toLowerCase())) {
              return ProductTabGenerator(product);
            }
          } else if (filter !== "") {
            if (product.category === filter) {
              return ProductTabGenerator(product);
            }
          } else {
            return ProductTabGenerator(product);
          }
        })}
      </div>
    );
  }
  }

  function searchFunction() {
    searchRef.current.value !== "" ? setSearch(searchRef.current.value) : setSearch("");
    filterRef.current.value !== "" ? setFilter(filterRef.current.value) : setFilter("");

    console.log('search: ', searchRef.current.value);
    console.log('filter: ', filterRef.current.value);
  };

  const Search = () => {
    return (
        <div className="search-container">
          <div className="search-group">
            <input ref={searchRef} type="text" placeholder="Search..." />
            <select ref={filterRef}>
                <option value="">All</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
            <div className="button" onClick={() => searchRef.current.value !== "" || filterRef.current.value !== "" ? searchFunction(): null}>Search</div>
            <div className="button" style={{ display: search === "" && filter === "" ? "none" : "inlineblock" }} onClick={() => searchFunction()}>Clear</div>
            </div>
        </div>
    );
};
  return (
    <div>
      <Navbar />
      <Search />
        <ProductsDisplay />
    </div>
  );
};

export default Minky;
