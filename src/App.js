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

  useEffect(() => {
    console.log(reloadPostings);
  }, [reloadPostings]);

  const reloadList = (valueOperation) => {
    setReloadPostings(true);
    setOperation(valueOperation);
  };

  return (
    <div className="App mt-5">
      <div className="row">
        <div className="col-sm-4 d-flex flex-row-reverse">
          <Sidebar reloadList={reloadList} />
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
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
