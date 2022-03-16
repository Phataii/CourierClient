import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Index from "./components/index";

import Login from "./components/auth/Login";
import Shipments from "./components/shipments/Shipments";
import Navbar from "./components/layout/Navbar";
import AuthContext from "./context/AuthContext";
import Search from "../src/components/shipments/search";
import { EditShipment } from "./components/shipments/EditShipment";

function Router() {
  const { loggedIn } = useContext(AuthContext);
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
            {/* <Route path="/register">
              <Register />
            </Route> */}
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
              <EditShipment />
            </Route>
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
