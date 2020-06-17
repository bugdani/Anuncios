import React from "react";
import { Button } from "react-bootstrap";
import "./FavoriteButton.scss";
import { ReactComponent as Favorite } from "../../assets/img/corazon.svg";

export default function FavoriteButton(props) {
  const { addFavorite } = props;

  return (
    <button
      type="button"
      className="btn btn-light btn-circle btn-sm"
      onClick={() => addFavorite()}
    >
      <Favorite className="icon-not-favorite" />
    </button>
  );
}
