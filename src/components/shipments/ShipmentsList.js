import React from "react";
import { Link } from "react-router-dom";

function ShipmentsList({ shipments }) {
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center">
        <span style={{ color: "orange" }}>List of </span>Shipments
      </h1>
      <div className="p-56 -mt-48">
        <table className="w-full table-auto mb-20 p-10 border-collapse border border-slate-400">
          <thead>
            <tr>
              <th className="border border-slate-300">Item 1</th>
              <th className="border border-slate-300">Item 2</th>
              <th className="border border-slate-300">Item 3</th>
              <th className="border border-slate-300">Item 4</th>
              <th className="border border-slate-300">Item 5</th>
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
              <tr key={item._id} className="text-center">
                <td>{item.itemName1}</td>
                <td>{item.itemName2}</td>
                <td>{item.itemName3}</td>
                <td>{item.itemName4}</td>
                <td>{item.itemName5}</td>

                <td style={{ color: "blue" }}>
                  <Link key={item._id} to={`/shipment/${item._id}/edit`}>
                    {item._id}{" "}
                  </Link>
                </td>

                <td>{item.location}</td>
                <td>{item.time}</td>
                <td>{item.date}</td>
                <td>{item.sender}</td>
                <td>{item.receiver}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShipmentsList;
