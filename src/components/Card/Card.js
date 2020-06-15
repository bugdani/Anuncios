import React from "react";
import "./Card.scss";
import moment from "moment";

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
              <p className="card-text">{posting.publication_plan}</p>
              <svg
                className="bi bi-heart-fill"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
              </svg>
              <img
                src={posting.posting_picture}
                className="card-img"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  {posting.posting_prices[0].price.amount}
                </p>
                <p className="card-text">
                  {getExpenses(posting.posting_prices[0].expenses)}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{posting.title}</h5>
              <h5 className="card-subtitle">
                {posting.posting_location.zone}, {posting.posting_location.city}
              </h5>
              <p className="card-text">{posting.posting_description}</p>
            </div>
            <div className="card-bottom">
              <p className="card-text">
                {getDifferenceDays(posting.publish_date)}
              </p>
              <button>Contactar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
