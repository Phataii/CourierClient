import { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { requestClient } from "../../utils/request-client";

export const EditShipment = () => {
  const match = useRouteMatch();
  const history = useHistory();
  const [shipment, setShipment] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const shipmentId = match.params.id;

  useEffect(() => {
    async function fetchShipment() {
      setIsLoading(true);
      const res = await requestClient.get(`shipment/${shipmentId}`);

      setShipment(res.data);
    }

    fetchShipment()
      .catch(() => {})
      .finally(() => setIsLoading(false));
  }, [shipmentId]);

  async function onFormSubmit(e) {
    e.preventDefault();
    console.log(shipment);

    try {
      const res = await requestClient.put(`/shipment/${shipmentId}`, shipment);
      console.log(res);
      history.push("/shipment");
    } catch (err) {
      console.log(err);
    }
  }

  const onInputChange = (e) => {
    const { name, value } = e.target;

    setShipment((old) => ({ ...old, [name]: value }));
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading....</p>
      ) : shipment ? (
        <form onSubmit={onFormSubmit} className="mt-10 p-40 ml-32">
          <h2 className="font-bold text-4xl text-center mb-5">
            Edit <span style={{ color: "orange" }}>Shipment</span>
          </h2>
          <input
            className="w-2/5 h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="text"
            name="itemName1"
            placeholder="Item name"
            onChange={onInputChange}
            value={shipment.itemName1}
          />
          <input
            className="w-2/5 h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="text"
            placeholder="Item name"
            name="itemName2"
            onChange={onInputChange}
            value={shipment.itemName2}
          />
          <input
            className="w-2/5 h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="text"
            placeholder="Item name"
            name="itemName3"
            onChange={onInputChange}
            value={shipment.itemName3}
          />
          <input
            className="w-2/5 h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="text"
            name="itemName4"
            placeholder="Item name"
            onChange={onInputChange}
            value={shipment.itemName4}
          />
          <input
            className="w-2/5 h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="text"
            placeholder="Item name"
            name="itemName5"
            onChange={onInputChange}
            value={shipment.itemName5}
          />
          <input
            className="w-2/5 h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="text"
            placeholder="Location"
            name="location"
            onChange={onInputChange}
            value={shipment.location}
          />
          <input
            className="w-2/5 h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="time"
            placeholder="Time"
            name="time"
            onChange={onInputChange}
            value={shipment.time}
          />
          <input
            className="w-2/5 h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="date"
            placeholder="Date"
            onChange={onInputChange}
            name="date"
            value={shipment.date}
          />
          <input
            className="w-2/5 h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="text"
            placeholder="Receiver"
            onChange={onInputChange}
            value={shipment.receiver}
            name="receiver"
          />
          <input
            className="w-2/5 h-10 rounded-md shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
            type="text"
            placeholder="Sender"
            name="sender"
            onChange={onInputChange}
            value={shipment.sender}
          />

          <button
            type="submit"
            className="bg-orange-400 w-2/5 h-10 rounded-md shadow-xl ml-64"
          >
            Edit Shipment
          </button>
        </form>
      ) : (
        <p>Shipment not found</p>
      )}
    </div>
  );
};
