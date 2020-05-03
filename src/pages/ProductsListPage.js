import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductsListPage.css";

const prod = ["Fantasy", "Horror", "Education", "For Kids", "Non Fiction"];

const ProductsListPage = () => {
  const display = prod.map((item) => (
    <li key={item}>
      <Link to={`/product/${item}`}>{item}</Link>
    </li>
  ));
  return (
    <div className="productsList">
      <h1>Our categories</h1>
      <ul>{display}</ul>
    </div>
  );
};
export default ProductsListPage;
