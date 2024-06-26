import { useState } from "react";
import "./AddItemForm.css"

function AddItemForm({ addItems })
//^this is props! 
{  let [itemName, setItemName] = useState("");
  let [quantity, setQuantity] = useState("");
  let [unit, setUnit] = useState("");

  const addItem = (event) => {
    console.log("Inside AddItemForm", itemName, quantity, unit);
    event.preventDefault();

 
   
   addItems({ name: itemName, quantity: quantity, unit: unit})

        setItemName("");
        setQuantity("");
        setUnit("");
      }
      
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