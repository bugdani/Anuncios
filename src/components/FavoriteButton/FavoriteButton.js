import React, { useState } from "react";
import "./FavoriteButton.scss";
import { ReactComponent as Favorite } from "../../assets/img/corazon.svg";

export default function FavoriteButton(props) {
  const { addFavorite, favorite } = props;

  return (
    <button
      type="button"
      className="btn btn-light btn-circle btn-sm"
      onClick={() => {
        addFavorite();
      }}
    >
      <Favorite className={favorite ? "icon-favorite" : "icon-not-favorite"} />
    </button>
  );
}
