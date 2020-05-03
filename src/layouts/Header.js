import React from "react";
import "../styles/Header.css";
import { Route, Switch } from "react-router-dom";
import Header1 from "../images/header1.jpg";
import Header2 from "../images/header2.jpg";
import Header3 from "../images/header3.jpg";
const Header = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <img src={Header1} alt="citi" />} />
        <Route
          path="/products"
          render={() => <img src={Header2} alt="citi1" />}
        />
        <Route
          path="/contact"
          render={() => <img src={Header3} alt="citi2" />}
        />
        <Route path="/admin" render={() => <img src={Header1} alt="citi" />} />
        <Route render={() => <img src={Header1} alt="citi" />} />
      </Switch>
    </>
  );
};

export default Header;
