import React from "react";
import { Link } from "react-router-dom";

function ShipmentsList({ shipments }) {
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center">
        <span style={{ color: "orange" }}>List of </span>Shipments
      </h1>
      <div className="p-56 -mt-48">
        <table class="w-full table-auto mb-20 p-10 border-collapse border border-slate-400">
          <thead>
            <tr>
              <th className="border border-slate-300">Name</th>
              <th className="border border-slate-300">Tracking ID</th>
              <th className="border border-slate-300">Location</th>
              <th className="border border-slate-300">Time</th>
              <th className="border border-slate-300">Date</th>
              <th className="border border-slate-300">Sender</th>
              <th className="border border-slate-300">Receiver</th>
              <th className="border border-slate-300">Status</th>
            </tr>
          </thead>

          <tbody>
            {shipments.map((item, i) => (
              <tr className="text-center">
                <td key={i}>{item.itemName1}</td>
                <td key={i}>{item.itemName2}</td>
                <td key={i}>{item.itemName3}</td>
                <td key={i}>{item.itemName4}</td>
                <td key={i}>{item.itemName5}</td>

                <Link key={item._id} to={`/shipment/${item._id}/edit`}>
                  <td key={i} style={{ color: "blue" }}>
                    {item._id}
                  </td>
                </Link>
                <td key={i}>{item.location}</td>
                <td key={i}>{item.time}</td>
                <td key={i}>{item.date}</td>
                <td key={i}>{item.sender}</td>
                <td key={i}>{item.receiver}</td>
                <td key={i}>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShipmentsList;
