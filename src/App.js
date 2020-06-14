import React from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App container">
      <div className="row">
        <div className="col-sm-4">col-sm-4</div>
        <div className="col-sm-8">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
