import React, { useState, useEffect } from "react";
import "./Card.scss";
import moment from "moment";
import { Button } from "react-bootstrap";
import ModalContact from "../Modal";
import ModalInformation from "../ModalInformation";
import FavoriteButton from "../FavoriteButton";
import { priceSplitter } from "../../utils/numberFormat";
import { ReactComponent as Time } from "../../assets/img/tiempo.svg";

export default function Card(props) {
  const {
    posting,
    operation,
    querySearch,
    toggleFavorite,
    allFavorites,
    toggleContacted,
  } = props;
  const [modalShow, setModalShow] = useState(false);
  const [contacted, setContacted] = useState(false);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const newValue = allFavorites.filter(
      (config) => config.id === posting.posting_id
    );
    if (newValue.length > 0) {
      console.log(newValue);

      setFavorite(newValue[0].preference);
      setContacted(newValue[0].contacted);
    } else {
      setFavorite(false);
      setContacted(false);
    }
  }, []);

  const changeFavorite = (id) => {
    setFavorite(!favorite);
    toggleFavorite(id);
  };

  const getExpenses = (expense) => {
    if (!expense) {
      return `Sin Expensas`;
    } else {
      return `+ ${priceSplitter(expense.amount)} Expensas`;
    }
  };

  const getDifferenceDays = (publishDate) => {
    const expDate = moment(publishDate, "DD-MM-YYYY").format("MM-DD-YYYY");
    const nowDate = moment();
    const diff = nowDate.diff(expDate, "days");
    return `Publicado hace ${diff} dias`;
  };

  const getTruncateText = (text) => {
    if (text.length > 300) {
      return `${text.substring(1, 300)}...`;
    }
  };
  const setInvisible = (valueOperation, valueQuerySearch) => {
    if (valueOperation === 4 && valueQuerySearch === "") {
      return "";
    } else if (valueQuerySearch !== "") {
      if (posting.posting_location.address.includes(valueQuerySearch)) {
        return "";
      } else {
        return "none";
      }
    } else if (valueOperation !== posting.operation_type.operation_type_id) {
      return "none";
    }
  };

  const addContacted = () => {
    setContacted(true);
    toggleContacted(posting.posting_id);
  };

  const translateText = (publication_plan) => {
    if (publication_plan === "SUPERHIGHLIGHTED") {
      return "Super destacado";
    } else if (publication_plan === "HIGHLIGHTED") {
      return "Destacado";
    } else {
      return "Simple";
    }
  };

  return (
    <>
      <div
        className={`card mb-3 ${posting.publication_plan.toLowerCase()} shadow bg-white rounded`}
        style={{
          maxWidth: 900,
          display: setInvisible(operation, querySearch),
        }}
      >
        <div className="row no-gutters">
          <div className="col-md-4">
            <div className="form-row header-image">
              <div className="col text-left">
                <p className="card-text badge badge-pill badge-info publication_plan">
                  {translateText(posting.publication_plan)}
                </p>
              </div>
              <div className="col text-right">
                <FavoriteButton
                  id={posting.posting_id}
                  favorite={favorite}
                  changeFavorite={changeFavorite}
                />
              </div>
            </div>
            <img src={posting.posting_picture} className="card-img" alt="..." />
            <div className="price-body text-left">
              <p className="price">
                $ {priceSplitter(posting.posting_prices[0].price.amount)}
              </p>
              <p className="expenses">
                {getExpenses(posting.posting_prices[0].expenses)}
              </p>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body text-left">
              <h5 className="card-title">{posting.title}</h5>
              <h5 className="card-subtitle">
                {posting.posting_location.zone}, {posting.posting_location.city}
              </h5>
              <p className="card-text card-description mt-4">
                {getTruncateText(posting.posting_description)}
              </p>
              <div className="form-row">
                <div className="col">
                  <p className="card-text font-weight-bold">
                    <Time style={{ width: 18, height: 18, marginRight: 8 }} />
                    {getDifferenceDays(posting.publish_date)}
                  </p>
                </div>
                <div className="col">
                  <Button
                    className="btn btn-light float-right card__contact-button"
                    onClick={() => setModalShow(true)}
                  >
                    Contactar
                  </Button>
                  {!contacted ? (
                    <ModalContact
                      addContacted={addContacted}
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                  ) : (
                    <ModalInformation
                      addContacted={addContacted}
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
