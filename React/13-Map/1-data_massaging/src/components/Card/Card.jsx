import React from "react";
import "./Card.css";

const Card = ({
  person: {
    name,
    birthday,
    favoriteFoods: { meats, fish },
  },
}) => {
  return (
    <div className="Card">
      <div>Name: {name}</div>
      <div>Birthday: {birthday}</div>
      <div>Favorite Meats: {meats.join(", ")}</div>
      <div>Favorite Fish: {fish.join(", ")}</div>
    </div>
  );
};

export default Card;
