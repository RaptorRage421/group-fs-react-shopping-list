import { useState } from "react";
// import "./AddItemForm.css";
import axios from "axios";

function AddItemForm({ getItems })
//^this is props! 
{  let [itemName, setItemName] = useState("");
  let [quantity, setQuantity] = useState("");
  let [unit, setUnit] = useState("");

  const addItem = (event) => {
    console.log("Inside AddItemForm", itemName, quantity, unit);
    event.preventDefault();
    axios
      .post("/items", {
        name: itemName,
        quantity: quantity,
        unit: unit,
      })
      .then((response) => {
        console.log("Inside client response of post request");
        getItems();
        setItemName("");
        setQuantity("");
        setUnit("");
      })
      .catch((error) => {
        console.log("Error in client side of post request:", error);
      });
  };
  return (
    <section>
      <form onSubmit={addItem}>
        <label htmlFor="item-name-input">Item Name:</label>
        <input
          id="item-name-input"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />

        <label htmlFor="quantity">Quantity:</label>
        <input
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <label htmlFor="unit">Unit:</label>
        <input
          id="unit"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
        />

        <button type="submit">Add Item</button>
      </form>
    </section>
  );
}

export default AddItemForm;