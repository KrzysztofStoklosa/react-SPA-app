import React from "react";
import { Link } from "react-router-dom";
import Product from "../components/Product";
const ProductPage = ({ match }) => {
  return (
    <>
      <div>
        <Product id={match.params.id} />
        <span>
          <Link to="/products">Back to the list of categories </Link>
        </span>
      </div>
    </>
  );
};

export default ProductPage;
