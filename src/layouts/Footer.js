import React from "react";
import { Route } from "react-router-dom";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <h2>Footer</h2>
      <Route
        path="/"
        exact
        render={(props) => (
          <p>
            You are on the <span>home page</span>
          </p>
        )}
      />
      <Route
        path="/:name"
        exact
        render={(props) => (
          <p>
            You are on the <span>{props.match.params.name}</span>
          </p>
        )}
      />
      <Route
        path="/:name/:id"
        render={(props) => (
          <p>
            You are on the <span>{props.match.params.id}</span>
          </p>
        )}
      />
    </div>
  );
};

export default Footer;
