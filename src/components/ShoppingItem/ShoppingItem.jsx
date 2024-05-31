import App from "../App/App";
import React from "react";
import axios from "axios";

const ShoppingItem = ({ item, handleRemoveItem }) => {
  const { id, name, quantity, unit, purchased } = item;

  const handleMarkAsPurchased = () => {
    axios
      .put(`/api/shoppinglist/${id}`, { purchased: true })
      .then(() => {
      })
      .catch((error) => {
        console.error("Error marking item as purchased:", error);
      });
  };



  return (
    <div>
      <span>Name: {name}</span>
      <span>Quantity: {quantity}</span>
      {unit && <span>Unit: {unit}</span>}
      {purchased ? (
        <span>Purchased</span>
      ) : (
        <div>
          <button onClick={handleMarkAsPurchased}>Mark as Purchased</button>
          <button onClick={handleRemoveItem}>Remove</button>
        </div>
      )}
    </div>
  );
};

export default ShoppingItem;