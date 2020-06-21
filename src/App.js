import React, { useState, useEffect } from "react";
import useFetch from "./hooks/useFetch";
import { URL_API_POSTINGS } from "./utils/constants";
import Card from "./components/Card";
import Loading from "./components/Loading";
import Sidebar from "./components/Sidebar";
import { POSTINGS_FAVORITE_STORAGE } from "./utils/constants";

function App() {
  const postingsResult = useFetch(URL_API_POSTINGS, null);
  const [reloadPostings, setReloadPostings] = useState(false);
  const [operation, setOperation] = useState(4);
  const [querySearch, setQuerySearch] = useState("");

  const [allFavorites, setAllFavorites] = useState([]);

  //Carga AllFavorites al inicio de la aplicacion con todos los favoritos que tengo en localstorage
  useEffect(() => {
    let allFavoriteStorage = localStorage.getItem(POSTINGS_FAVORITE_STORAGE);
    if (allFavoriteStorage != null) {
      setAllFavorites(JSON.parse(allFavoriteStorage));
    }
  }, []);

  //Guarda en localstorage todos los items cuando se agrega uno
  useEffect(() => {
    localStorage.setItem(
      POSTINGS_FAVORITE_STORAGE,
      JSON.stringify(allFavorites)
    );
  }, [allFavorites]);

  //Cambia el valor en true/false cuando se presiona favorito
  const toggleFavorite = (id) => {
    if (!allFavorites.find((c) => c.id === id)) {
      setAllFavorites([
        ...allFavorites,
        { id: id, preference: true, contacted: false },
      ]);
    } else {
      setAllFavorites(
        allFavorites.map((c) =>
          c.id === id ? { ...c, preference: !c.preference } : c
        )
      );
    }
  };

  //Cambia el valor en true/false cuando se presiona favorito
  const toggleContacted = (id) => {
    if (!allFavorites.find((c) => c.id === id)) {
      setAllFavorites([
        ...allFavorites,
        { id: id, preference: false, contacted: true },
      ]);
    } else {
      setAllFavorites(
        allFavorites.map((c) => (c.id === id ? { ...c, contacted: true } : c))
      );
    }
  };

  useEffect(() => {}, [reloadPostings]);

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
                operation={operation}
                querySearch={querySearch}
                toggleContacted={toggleContacted}
                toggleFavorite={toggleFavorite}
                allFavorites={allFavorites}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
