import React from "react";
import Footer from "./footer";
export default function Index() {
  return (
    <div className="text-justify text-gray-600">
      {/* landing background image */}
      <img
        src={require("../images/truck.png").default}
        alt="ETH"
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
            <a href="/search">Track Shipment</a>
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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio nobis
          reprehenderit magnam nihil ipsam, saepe in sequi corrupti eum
          voluptatum aperiam illum maxime beatae possimus! Similique ut aut
          autem at!{" "}
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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio nobis
          reprehenderit magnam nihil ipsam, saepe in sequi corrupti eum
          voluptatum aperiam illum maxime beatae possimus! Similique ut aut
          autem at!{" "}
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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio nobis
          reprehenderit magnam nihil ipsam, saepe in sequi corrupti eum
          voluptatum aperiam illum maxime beatae possimus! Similique ut aut
          autem at!{" "}
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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio nobis
          reprehenderit magnam nihil ipsam, saepe in sequi corrupti eum
          voluptatum aperiam illum maxime beatae possimus! Similique ut aut
          autem at!{" "}
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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio nobis
          reprehenderit magnam nihil ipsam, saepe in sequi corrupti eum
          voluptatum aperiam illum maxime beatae possimus! Similique ut aut
          autem at!{" "}
        </div>
      </div>
      {/* Pictures of our services */}
      <div className="grid md:grid-cols-4 md:items-center -mt-10">
        <div className="bg-orange-400">
          <img
            src={require("../images/truck.png").default}
            alt="BTC"
            className=" h-full w-fit"
          />
        </div>
        <div className="bg-gray-700">
          <img
            src={require("../images/ware.png").default}
            alt="BTC"
            className=""
          />
        </div>
        <div className="bg-gray-400">
          <img
            src={require("../images/plane.png").default}
            alt="BTC"
            className=""
          />
        </div>
        <div className="bg-orange-400">
          <img
            src={require("../images/truck.png").default}
            alt="BTC"
            className=""
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex tempora,
            adipisci mollitia unde quod ullam. Laudantium vitae explicabo
            deserunt cumque? Eos excepturi perferendis reprehenderit voluptatum
            aliquid! Dignissimos quaerat omnis eligendi.
          </div>
          <img
            src={require("../images/s1.png").default}
            alt="ETH"
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
              src={require("../images/truck.png").default}
              alt="Name"
              className="h-24 w-24 rounded-full md:ml-60 ml-44 mt-10"
            />
            <p>John Smith</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              quae laboriosam fuga impedit omnis aperiam repellat aut, et at,
              odit iusto suscipit laborum, voluptatibus cum ipsum. Ut impedit
              quia natus.
            </p>
          </div>
          <div className="card2 text-center">
            <img
              src={require("../images/truck.png").default}
              alt="Name"
              className="h-24 w-24 rounded-full md:ml-60 ml-44 mt-10"
            />
            <p>John Smith</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              quae laboriosam fuga impedit omnis aperiam repellat aut, et at,
              odit iusto suscipit laborum, voluptatibus cum ipsum. Ut impedit
              quia natus.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2">
          <div className="card2 text-center">
            <img
              src={require("../images/truck.png").default}
              alt="Name"
              className="h-24 w-24 rounded-full md:ml-60 ml-44 mt-10"
            />
            <p>John Smith</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              quae laboriosam fuga impedit omnis aperiam repellat aut, et at,
              odit iusto suscipit laborum, voluptatibus cum ipsum. Ut impedit
              quia natus.
            </p>
          </div>
          <div className="card2 text-center">
            <img
              src={require("../images/truck.png").default}
              alt="Name"
              className="h-24 w-24 rounded-full md:ml-60 ml-44 mt-10
              "
            />
            <p>John Smith</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              quae laboriosam fuga impedit omnis aperiam repellat aut, et at,
              odit iusto suscipit laborum, voluptatibus cum ipsum. Ut impedit
              quia natus.
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
