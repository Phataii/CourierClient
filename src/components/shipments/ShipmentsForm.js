import axios from "axios";
import React, { useState } from "react";

function ShipmentsForm({ getShipments }) {
  const [itemName1, setItemName1] = useState("");
  const [itemName2, setItemName2] = useState("");
  const [itemName3, setItemName3] = useState("");
  const [itemName4, setItemName4] = useState("");
  const [itemName5, setItemName5] = useState("");
  const [trackingId] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [receiver, setReceiver] = useState("");
  const [sender, setSender] = useState("");
  const [status] = useState("Moving");

  async function saveShipment(e) {
    e.preventDefault();

    try {
      const shipmentData = {
        itemName1,
        itemName2,
        itemName3,
        itemName4,
        itemName5,
        trackingId,
        location,
        time,
        date,
        sender,
        receiver,
        status,
      };
      await axios.post("https://iswds.herokuapp.com/shipment/", shipmentData);

      getShipments();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <form onSubmit={saveShipment} className="mt-10 p-40 ml-32">
        <h2 className="font-bold text-4xl text-center mb-5">
          Create a <span style={{ color: "orange" }}>Shipment</span>
        </h2>
        <input
          className="w-2/5 h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
          type="text"
          placeholder="Item name"
          onChange={(e) => {
            setItemName1(e.target.value);
          }}
          value={itemName1}
        />
        <input
          className="w-2/5 h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
          type="text"
          placeholder="Item name"
          onChange={(e) => {
            setItemName2(e.target.value);
          }}
          value={itemName2}
        />
        <input
          className="w-2/5 h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
          type="text"
          placeholder="Item name"
          onChange={(e) => {
            setItemName3(e.target.value);
          }}
          value={itemName3}
        />
        <input
          className="w-2/5 h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
          type="text"
          placeholder="Item name"
          onChange={(e) => {
            setItemName4(e.target.value);
          }}
          value={itemName4}
        />
        <input
          className="w-2/5 h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
          type="text"
          placeholder="Item name"
          onChange={(e) => {
            setItemName5(e.target.value);
          }}
          value={itemName5}
        />
        <input
          className="w-2/5 h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
          type="text"
          placeholder="Location"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          value={location}
        />
        <input
          className="w-2/5 h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
          type="time"
          placeholder="Time"
          onChange={(e) => {
            setTime(e.target.value);
          }}
          value={time}
        />
        <input
          className="w-2/5 h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
          type="date"
          placeholder="Date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
          value={date}
        />
        <input
          className="w-2/5 h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
          type="text"
          placeholder="Receiver"
          onChange={(e) => {
            setReceiver(e.target.value);
          }}
          value={receiver}
        />
        <input
          className="w-2/5 h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
          type="text"
          placeholder="Sender"
          onChange={(e) => {
            setSender(e.target.value);
          }}
          value={sender}
        />
        {/* <select
          className="w-2/5 h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Status</option>
          <option>Moving</option>
          <option>Delivered</option>
        </select> */}

        <button
          type="submit"
          className="bg-orange-400 w-2/5 h-10 rounded-md shadow-xl ml-64"
        >
          Create Shipment
        </button>
      </form>
    </div>
  );
}

export default ShipmentsForm;
