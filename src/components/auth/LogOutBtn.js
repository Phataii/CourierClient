import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import requestClient from "../../utils/request-client";

function LogOutBtn() {
  // const { getLoggedIn } = useContext(AuthContext);

  const history = useHistory();

  async function logOut() {
    await requestClient.get("/auth/logout");
    // await axios.get(
    //   "https://mern-auth-template-tutorial.herokuapp.com/auth/logout"
    // );
    // await getLoggedIn();
    history.push("/");
  }

  return (
    <button
      onClick={logOut}
      className="text-white border border-orange-400 p-1 hover:bg-orange-400"
    >
      Log out
    </button>
  );
}

export default LogOutBtn;
