import React from "react";

const Card = ({ cardInfo, number }) => {
  console.log("cardInfo:", cardInfo, "number:", number);
  return (
    <div className="card-border">
      <div>Number :{number}</div>
      <div>Title: {cardInfo.title}</div>
      <div>Content : {cardInfo.content}</div>
    </div>
  );
};

export default Card;
