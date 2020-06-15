import React from "react";
import "./Card.scss";
import moment from "moment";
import { ReactComponent as Favorite } from "../../assets/img/corazon.svg";

export default function Card(props) {
  const { posting } = props;

  const getExpenses = (expense) => {
    if (!expense) {
      return `Sin Expensas`;
    } else {
      return `+ ${expense.amount} Expensas`;
    }
  };

  const getDifferenceDays = (publishDate) => {
    const expDate = moment(publishDate, "DD-MM-YYYY").format("MM-DD-YYYY");
    const nowDate = moment();
    const diff = nowDate.diff(expDate, "days");
    return `Publicado hace ${diff} dias`;
  };

  return (
    <>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <div className="card">
              <div className="form-row header-image">
                <div className="col">
                  <p className="card-text">{posting.publication_plan}</p>
                </div>
                <div className="col">
                  <Favorite className="card__icon-favorite" />
                </div>
              </div>
              <img
                src={posting.posting_picture}
                className="card-img"
                alt="..."
              />
              <div className="card-body text-left">
                <p className="card-text price">
                  $ {posting.posting_prices[0].price.amount}
                </p>
                <p className="card-text expenses">
                  {getExpenses(posting.posting_prices[0].expenses)}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body text-left">
              <h5 className="card-title">{posting.title}</h5>
              <h5 className="card-subtitle">
                {posting.posting_location.zone}, {posting.posting_location.city}
              </h5>
              <p className="card-text mt-5">{posting.posting_description}</p>
              <div className="form-row">
                <div className="col">
                  <p className="card-text font-weight-bold">
                    {getDifferenceDays(posting.publish_date)}
                  </p>
                </div>
                <div className="col">
                  <button className="btn btn-light float-right card__contact-button">
                    Contactar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
