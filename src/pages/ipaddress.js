import { useState } from "react";
import Nav from "../components/nav";
import "../styles/ipaddress.css";

const IpAddress = () => {
  const [ipaddress, setIp] = useState("");
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
