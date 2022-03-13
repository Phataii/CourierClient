import React from "react";
import Footer from "./footer";
import { Link } from "react-router-dom";
export default function Index() {
  return (
    <div className="text-justify text-gray-600">
      {/* landing background image */}
      <img
        src={require("../images/bg6.png").default}
        alt="HomeImage"
        className="h-screen w-screen"
      />
      {/* Content on the landing image */}
      <div className="text-center">
        <h1 className="-mt-96 text-7xl font-extrabold text-white">
          Worldwide Freight
          <br /> Services
        </h1>
        <button className="bg-orange-400 h-16 w-48 mt-5 italic uppercase text-white text-xl">
          <span className="font-bold text-white">
            {/* <a href=""></a> */}
            <Link to="/search">Track Shipment</Link>
          </span>
        </button>
      </div>
      {/* The three boxes on home */}
      <div className="grid md:grid-cols-3 md:p-20 md:items-center -mt-10">
        <div className="p-20 bg-orange-400">
          <svg
            className="h-20 ml-14"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          Why waste time trying to brave the traffic to get your package, gift,
          or business documents delivered. With Impact Safway Delivery Service
          you can relax because we offer seemless delivery anywhere. This means
          you can focus on what matters most while the experts help you be in
          two, three, even four places at one time.
        </div>
        <div className="p-20 bg-gray-700">
          <h2 className="text-white text-center">Send Us a Message</h2>
          <form className="mt-5">
            <input
              //value={email}
              //onChange={(e) => setEmail(e.target.value)}
              type="Name"
              placeholder="Name"
              className="border-l-4 border-gray-700 md:w-full rounded-md shadow-md p-2 mt-1 mb-3"
            />
            <input
              //value={email}
              //onChange={(e) => setEmail(e.target.value)}
              type="Name"
              placeholder="Email"
              className="border-l-4 border-gray-700 md:w-full rounded-md shadow-md p-2 mt-1 mb-3"
            />
            <br />
            <textarea
              placeholder="Leave a message..."
              className="border-l-4 border-gray-700 md:w-full rounded-md shadow-md p-2 mt-1 mb-3"
            />
            <br />

            <input
              type="submit"
              value="Send Message"
              className="p-2 mt-7 rounded-sm w-fit cursor-pointer text-white bg-orange-400 opacity-75"
            />
          </form>
        </div>
        <div className="p-20 bg-orange-400">
          <svg
            className="h-20 ml-14"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
            ></path>
          </svg>
          Rush Delivery is well things delivered in a rush. We put a priority on
          these deliveries and make sure they are delivered before regular
          delivery items. The time of delivery ranges from 2-4 hours and depends
          on item, distance, and time of day. Contact us to get an estimate on
          time and price for your rush delivery.
        </div>
      </div>
      {/* what we offer */}
      <h2 className="uppercase text-center text-4xl text-orange-400 font-bold">
        <span className="border-b-8 border-orange-400">What w</span>e offer
      </h2>
      <div className="grid md:grid-cols-3 md:items-center ">
        <div className="p-20">
          <svg
            className="h-20 ml-16"
            style={{ color: "orange" }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
          With Impact Safeway Delivery Service, you are guaranteed of your card
          safety, with our entrusted customer services, we assure you that you
          card details or any other mode of payment is well protected.{" "}
        </div>
        <div className="p-20">
          <svg
            className="h-20 ml-16"
            style={{ color: "orange" }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
            ></path>
          </svg>
          We offer a seemless customer care relationship and this brings about
          the trust we've built over the years, you can contact us using our
          email or message our phone number below.
        </div>
        <div className="p-20">
          <svg
            className="h-20 ml-16"
            style={{ color: "orange" }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            ></path>
          </svg>
          We deliver Parcels anywhere around the globe at a reasonable price and
          fixed duration of time. Consistency and time consciousness is our top
          most legacy.
        </div>
      </div>
      {/* Pictures of our services */}
      <div className="grid md:grid-cols-4 md:items-center -mt-10">
        <div className="bg-orange-400">
          <img
            src={require("../images/truck.png").default}
            alt="Truck"
            className=" h-full w-fit"
          />
        </div>
        <div className="bg-gray-700">
          <img
            src={require("../images/ware.png").default}
            alt="Warehouse"
            className=" h-full w-fit"
          />
        </div>
        <div className="bg-gray-400">
          <img
            src={require("../images/plane.png").default}
            alt="Air Cargo"
            className=" h-full w-fit"
          />
        </div>
        <div className="bg-orange-400">
          <img
            src={require("../images/bg6.png").default}
            alt="ship"
            className=" h-full w-fit"
          />
        </div>
      </div>
      {/* More Services */}
      <div>
        <h2 className="uppercase text-center text-4xl text-orange-400 font-bold mt-10">
          More <span className="border-b-8 border-orange-400">Services</span>...
        </h2>
        <div className="grid md:grid-cols-2">
          <div className="p-28">
            To think that there maybe unforseen circumstances, we ship our
            parcels via various means of transportations which ranges from Land,
            to water, to air. It may also interest you that we have a well
            equiped and 24/7 secured warehouse where your goods are ensured
            maximum security and confidentiality
          </div>
          <img
            src={require("../images/s1.png").default}
            alt="Services"
            className="h-96 mt-3"
          />
        </div>
      </div>
      {/* Testimonials */}
      <div className="mt-10 p-10">
        <h2 className="uppercase text-center text-4xl text-orange-400 font-bold mb-10">
          <span className="border-b-8 border-orange-400">Testim</span>onials
        </h2>
        <div className="grid md:grid-cols-2">
          <div className="card2 text-center">
            <img
              src={require("../images/m1.png").default}
              alt="Name"
              className="h-24 w-24 rounded-full md:ml-60 ml-44 mt-10"
            />
            <p>Dinnesh Jr.</p>
            <p>
              This is one of the most fast and reliable platforms i have ever
              used. And they offer great customer services with efficient
              delivery.
            </p>
          </div>
          <div className="card2 text-center">
            <img
              src={require("../images/w1.jpg").default}
              alt="Name"
              className="h-24 w-24 rounded-full md:ml-60 ml-44 mt-10"
            />
            <p>Holmat Stones</p>
            <p>
              Great customer service and very timely delivery. The driver eas
              great and worked to make it to the destination on time. I very
              much appreciate the hardwork and communication.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2">
          <div className="card2 text-center">
            <img
              src={require("../images/m2.jpg").default}
              alt="Name"
              className="h-24 w-24 rounded-full md:ml-60 ml-44 mt-10"
            />
            <p>John Smith</p>
            <p>
              I've been in customer service for a long time and have not run
              across any platform as nice and helpful as impact safeway delivery
              service. Thank you ISWDS!
            </p>
          </div>
          <div className="card2 text-center">
            <img
              src={require("../images/w2.jpg").default}
              alt="Name"
              className="h-24 w-24 rounded-full md:ml-60 ml-44 mt-10
              "
            />
            <p>Sabrina Jones</p>
            <p>
              This was the first time we've had need of a courier i truly don't
              know how to thank you and the other folkd at ISWDS for helping
              today, i fot the delivery notification and was so so relived.
            </p>
          </div>
        </div>
      </div>
      {/* Contact */}
      <div>
        <h2 className="uppercase text-center text-4xl text-orange-400 font-bold mt-10">
          Co<span className="border-b-8 border-orange-400">ntac</span>t Us
        </h2>
        <div className="grid md:grid-cols-2">
          <img
            src={require("../images/c1.png").default}
            alt="ETH"
            className="h-96 mt-3 md:ml-20"
          />
          <div className="md:p-28 grid">
            <form className="mt-5 ml-24 mb-5 md:ml-1">
              <input
                //value={email}
                //onChange={(e) => setEmail(e.target.value)}
                type="Name"
                placeholder="Name"
                className="border-l-4 border-gray-700 md:w-full rounded-md shadow-md p-2 mt-1 mb-3"
              />
              <input
                //value={email}
                //onChange={(e) => setEmail(e.target.value)}
                type="Name"
                placeholder="Email"
                className="border-l-4 border-gray-700 md:w-full rounded-md shadow-md p-2 mt-1 mb-3"
              />
              <br />
              <textarea
                placeholder="Leave a message..."
                className="border-l-4 border-gray-700 md:w-full rounded-md shadow-md p-2 mt-1 mb-3"
              />
              <br />

              <input
                type="submit"
                value="Send Message"
                className="p-2 mt-7 rounded-sm w-fit cursor-pointer text-white bg-orange-400 opacity-75"
              />
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
