import React, { useEffect, useState } from "react";
import ShipmentForm from "./ShipmentsForm";
import ShipmentList from "./ShipmentsList";
import Footer from "../footer";
import { Link } from "react-router-dom";
import { requestClient } from "../../utils/request-client";
function Shipment() {
  const [shipments, setShipments] = useState([]);
  async function getShipments() {
    const shipmentsRes = await requestClient.get("/shipment");
    setShipments(shipmentsRes.data);
  }

  useEffect(() => {
    getShipments();
  }, []);

  return (
    <div>
      <img
        src={require("../../images/truck.png").default}
        alt="ETH"
        className="w-screen h-80"
      />
      <Link to="/">
        <button>Go back home</button>
      </Link>
      <ShipmentForm getShipments={getShipments} />
      <ShipmentList shipments={shipments} />
      <Footer />
    </div>
  );
}

export default Shipment;
