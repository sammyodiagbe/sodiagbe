import { useEffect, useState } from "react";
import Nav from "../components/nav";
import "../styles/ipaddress.css";
import axios from "axios";

const IpAddress = () => {
  const [ipaddress, setIp] = useState("");

  useEffect(() => {
    console.log(process.env.REACT_APP_GEO_API);
    axios
      .get(
        `https://geo.ipify.org/api/v2/country?apiKey=${process.env.REACT_APP_GEO_API}`
      )
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container">
      <Nav />
      <main className="main">
        <h1>Your IP Address is</h1>
      </main>
    </div>
  );
};

export default IpAddress;
