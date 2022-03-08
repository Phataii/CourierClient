import axios from "axios";
import React, { useState } from "react";
import Footer from "../footer";
export default function Search() {
  const [shipments, setShipments] = useState([]);
  const [shipmentId, setShipmentId] = useState("");
  // useEffect(() => {
  //   searchShipment();
  // }, []);

  async function searchShipment(e) {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://iswds.herokuapp.com/shipment/${shipmentId}`
      );
      setShipments(res.data);
      // console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="">
      <img
        src={require("../../images/truck.png").default}
        alt="ETH"
        className="w-screen h-80"
      />
      <form onSubmit={searchShipment} className="mt-56 md:ml-96 ml-3">
        <input
          onChange={(e) => setShipmentId(e.target.value)}
          type="text"
          className="md:w-2/5 h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
          placeholder="Search shipment"
        />
        <input
          type="submit"
          value="Search"
          className="bg-orange-400 rounded-md w-20 h-11"
        />
      </form>

      <div>
        <div className="">
          <h1 className="text-3xl font-bold text-center">
            Tracking Your Shipment
          </h1>
          <div className="md:p-56 md:-mt-48">
            <table class="md:w-full table-auto mb-20 p-10 border-collapse border border-slate-400">
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
                  {/* <th className="">Click</th> */}
                </tr>
              </thead>
              {/* href={`/shipment/${item._id}/edit` */}

              <tbody>
                <tr className="text-center">
                  <td>{shipments.itemName}</td>
                  <td>{shipments._id}</td>
                  <td>{shipments.location}</td>
                  <td>{shipments.time}</td>
                  <td>{shipments.date}</td>
                  <td>{shipments.sender}</td>
                  <td>{shipments.receiver}</td>
                  <td>{shipments.status}</td>
                  {/* <Link to={`edit/${customer._id}`} className="text-blue-600 ml-10">
                Edit
              </Link> */}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
