import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import LogOutBtn from "../auth/LogOutBtn";

function Navbar() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <div className="flex justify-around bg-transaparent absolute h-20 w-full">
      <h1 className="uppercase font-bold text-2xl text-white text-center border border-white mt-5 p-5 h-full">
        IMPACT <span style={{ color: "orange" }}>SAFEWAY</span>
        <br /> DELIVERY
      </h1>
      <div className="md:mt-5">
        <svg
          class="w-10 h-10 md:hidden mt-5 cursor-pointer"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        {/* <span className="font-bold text-xl mt-7 ml-2 md:-mt-0">
          PrimeInvestors
        </span> */}
      </div>
      <div className="mt-6 ml-60 w-fit text-sm text-white hidden md:block">
        <span className="ml-10 font-bold text-orange-400">
          <a href="index">HOME</a>
        </span>
        <span className="ml-10 font-bold text-white">
          <a href="index">ABOUT US</a>
        </span>
        <span className="ml-10 font-bold text-white">
          <a href="index">SERVICES</a>
        </span>

        <span className="ml-10 font-bold text-white">
          <a href="index">CONTACT</a>
        </span>
        {/* <span className="ml-10 font-bold text-white">
          <a href="/search">Search</a>
        </span> */}
      </div>
      <div className="mt-6 w-fit">
        {loggedIn === false && (
          <>
            <a href="./login">
              <span className="border p-3 rounded-md text-gray-200 font-bold text-sm border-yellow-500  hover:bg-orange-400 hover:text-white duration-700">
                Login / Signup
              </span>
            </a>
          </>
        )}
        {loggedIn === true && (
          <>
            <Link to="/shipment" className="text-gray-200 mx-10">
              Dashboard{" "}
            </Link>

            <LogOutBtn />
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
