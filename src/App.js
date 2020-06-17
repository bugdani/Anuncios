import React, { useState, useEffect } from "react";
import useFetch from "./hooks/useFetch";
import { URL_API_POSTINGS } from "./utils/constants";
import Card from "./components/Card";
import Loading from "./components/Loading";
import Sidebar from "./components/Sidebar";

function App() {
  const postingsResult = useFetch(URL_API_POSTINGS, null);
  const [reloadPostings, setReloadPostings] = useState(false);
  const [operation, setOperation] = useState(4);
  const [querySearch, setQuerySearch] = useState("");

  useEffect(() => {
    console.log(reloadPostings);
  }, [reloadPostings]);

  const reloadList = (valueOperation) => {
    setReloadPostings(true);
    setOperation(valueOperation);
    setQuerySearch("");
  };

  const reloadListForSearch = (query) => {
    setOperation(4);
    setQuerySearch(query);
  };

  return (
    <div className="App mt-5">
      <div className="row" style={{ marginLeft: 0, marginRight: 0 }}>
        <div className="col-sm-4 d-flex flex-row-reverse">
          <Sidebar
            reloadList={reloadList}
            reloadListForSearch={reloadListForSearch}
          />
        </div>
        <div className="col-sm-8">
          {postingsResult.loading || !postingsResult.result ? (
            <Loading />
          ) : (
            postingsResult.result.map((posting, index) => (
              <Card
                posting={posting}
                key={posting.posting_id}
                operation={operation}
                querySearch={""}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
