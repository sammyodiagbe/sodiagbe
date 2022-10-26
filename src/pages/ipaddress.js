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
        `https://geo.ipify.org/api/v2/country?apiKey=${process.env.REACT_APP_IP_API}`
      )
      .then((data) => {
        console.log(data);
        const {
          data: { ip },
        } = data;
        setIp(ip);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container">
      <Nav />
      <main className="main">
        <h1 className="title">Your IP Address is</h1>
        <h1 className="ip">{ipaddress}</h1>
      </main>
    </div>
  );
};

export default IpAddress;
