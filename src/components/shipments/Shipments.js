import axios from "axios";
import React, { useEffect, useState } from "react";
import ShipmentForm from "./ShipmentsForm";
import ShipmentList from "./ShipmentsList";
import Footer from "../footer";
function Shipment() {
  const [shipments, setShipments] = useState([]);
  async function getShipments() {
    const shipmentsRes = await axios.get("http://localhost:5000/shipment/");
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
      <ShipmentForm getShipments={getShipments} />
      <ShipmentList shipments={shipments} />
      <Footer />
    </div>
  );
}

export default Shipment;
