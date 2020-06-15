import React from "react";
import "./FavoriteButton.scss";
import { ReactComponent as Favorite } from "../../assets/img/corazon.svg";

export default function FavoriteButton() {
  return (
    <>
      <i>
        <Favorite className="card__icon-favorite" />
      </i>
    </>
  );
}
