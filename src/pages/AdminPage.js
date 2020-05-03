import React from "react";
import { Route, Redirect } from "react-router-dom";
const permision = false;
const AdminPage = () => {
  return (
    <div>
      <Route
        render={() =>
          permision ? <h3>Welcome in panel Admin</h3> : <Redirect to="/login" />
        }
      />
    </div>
  );
};

export default AdminPage;
