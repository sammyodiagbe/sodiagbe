import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
