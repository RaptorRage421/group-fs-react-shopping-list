import App from "../App/App";
import React from "react";
import './ShoppingItem.css'

const ShoppingItem = ({ item, handleRemoveItem, handleMarkAsPurchased }) => {
  const { name, quantity, unit } = item;

  return (
    <div>
      <span className="padding">Name: {name}</span>
      <span>Quantity: {quantity}</span>
      {unit && <span>Unit: {unit}</span>}
      
        <div>
          <button onClick={handleMarkAsPurchased}>Mark as Purchased</button>
          <button onClick={handleRemoveItem}>Remove</button>
        </div>
      
    </div>
  );
};

export default ShoppingItem;