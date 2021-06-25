import React from "react";
import CardProduct from "./CardProduct";

const CardBlockShop = (props) => {
  const renderCards = () =>
    props.list
      ? props.list.map((card) => <CardProduct key={card._id} {...card} />)
      : null;
  return (
    <div>
      <div>
        <div>
          {props.list ? (
            props.list.length === 0 ? (
              <div className="no_result">Sorry, no results</div>
            ) : null
          ) : null}
          {renderCards(props.list)}
        </div>
      </div>
    </div>
  );
};

export default CardBlockShop;
