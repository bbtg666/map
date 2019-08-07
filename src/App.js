import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TopMenu from "./components/TopMenu.js";

function App() {
  return (
    <div className="App">
      <Router>
        <TopMenu />
      </Router>
    </div>
  );
}
export default App;
