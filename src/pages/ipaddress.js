import { useEffect, useState } from "react";
import Nav from "../components/nav";
import "../styles/ipaddress.css";

const IpAddress = () => {
  const [ipaddress, setIp] = useState("");

  useEffect(() => {
    fetch("https://api.ipify.org")
      .then((response) => {
        console.log(response.json());
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
