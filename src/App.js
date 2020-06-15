import React from "react";
import useFetch from "./hooks/useFetch";
import { URL_API_POSTINGS } from "./utils/constants";
import "./App.css";
import Card from "./components/Card";
import Loading from "./components/Loading";
import Sidebar from "./components/Sidebar";

function App() {
  const postingsResult = useFetch(URL_API_POSTINGS, null);
  return (
    <div className="App mt-5">
      <div className="row">
        <div className="col-sm-4">
          <Sidebar />
        </div>
        <div className="col-sm-8">
          {postingsResult.loading || !postingsResult.result ? (
            <Loading />
          ) : (
            postingsResult.result.map((posting, index) => (
              <Card posting={posting} key={posting.posting_id} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
