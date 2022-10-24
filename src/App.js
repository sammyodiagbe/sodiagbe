import { Fragment } from "react";
import Nav from "./components/nav";
import "./App.css";
import Main from "./components/main";

function App() {
  return (
    <div className="container">
      <Nav />
      <Main />
    </div>
  );
}

export default App;
