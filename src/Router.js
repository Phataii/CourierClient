import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, useRouteMatch } from "react-router-dom";
import Index from "./components/index";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Shipments from "./components/shipments/Shipments";
import Navbar from "./components/layout/Navbar";
import AuthContext from "./context/AuthContext";
import Search from "../src/components/shipments/search";

function Router() {
  const { loggedIn } = useContext(AuthContext);
  console.log(loggedIn);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Index />
        </Route>
        <Route path="/search">
          {/* <Navbar /> */}
          <Search />
        </Route>
        {loggedIn === false && (
          <>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </>
        )}
        {loggedIn === true && (
          <>
            <Route exact path="/shipment">
              <Shipments />
            </Route>

            <Route exact path="/shipment/:id/edit">
              <Fake />
            </Route>
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}

const Fake = () => {
  const match = useRouteMatch();
  return (
    <div>
      <div>name:{JSON.stringify(match.params)}</div>
      <div>name:{JSON.stringify(match.itemName1)}</div>
    </div>
  );
};
export default Router;
