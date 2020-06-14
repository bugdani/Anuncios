import React, { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";
import { URL_API_POSTINGS } from "./utils/constants";
import "./App.css";
import Card from "./components/Card";

function App() {
  const postingsResult = useFetch(URL_API_POSTINGS, null);
  const [postings, setPostings] = useState([]);

  console.log(postingsResult);
  return (
    <div className="App container mt-5">
      <div className="row">
        <div className="col-sm-4">col-sm-4</div>
        <div className="col-sm-8">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
