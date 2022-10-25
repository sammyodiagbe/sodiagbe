import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import IpAddress from "./pages/ipaddress";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/ipaddress" element={<IpAddress />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
