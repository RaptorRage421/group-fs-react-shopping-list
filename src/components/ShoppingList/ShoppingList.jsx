import React from "react";
import ShoppingItem from "../ShoppingItem/ShoppingItem";

const ShoppingList = ({ items, handleRemoveItem, handleMarkAsPurchased , setPurchasedFalse, deleteEverything}) => {
  return (
    <div>
        <button onClick={setPurchasedFalse}>RESET</button>
        <button onClick={deleteEverything}>Delete!</button>
        
      {items.map((item) => (
        <ShoppingItem key={item.id} item={item} handleRemoveItem={()=> handleRemoveItem(item.id)} handleMarkAsPurchased={() => handleMarkAsPurchased(item.id)}/>
      ))}
    </div>
  );
};

export default ShoppingList;