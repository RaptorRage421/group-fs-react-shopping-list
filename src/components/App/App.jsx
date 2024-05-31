





import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddItemForm from '../AddItemForm/AddItemForm.jsx';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';

import Header from '../Header/Header.jsx'
import './App.css';
import ShoppingItem from '../ShoppingList/ShoppingList.jsx';

function App() {

const [items, setItems] = useState([])

useEffect(() => {
    getItems()
}, [])

const getItems = () => {
axios.get('/api/shoppinglist')
.then(response => {
    setItems(response.data)
    console.log("Items", response.data)
})
.catch(err => {
    console.error("error getting list of items", err)
})

}


const addItems = (newItem) => {
    axios.post('/api/shoppinglist', newItem)
    
      .then(() => {
        console.log("New Item", newItem)
        getItems()
      })
      .catch(err => {
        console.error('Error adding item:', err);
      });
  };

  const handleRemoveItem = (id) => {
    axios
      .delete(`/api/shoppinglist/${id}`)
      .then(() => {
       getItems()
      })
      .catch((error) => {
        console.error("Error removing item:", error);
      });
  };

  const handleMarkAsPurchased = (id) => {
    axios.put(`/api/shoppinglist/${id}`, { purchased: true })
      .then(() => {
          getItems()
      })
      .catch((error) => {
          console.error("Error marking item as purchased:", error);
      });
  };


  const setPurchasedFalse = () => {
    console.log("in setPurchasedFalse")
    axios.put('/api/shoppinglist', {purchased: false})
    .then(()=>{
        getItems()
    })
    .catch((err)=> {
        console.error("error marking all as not purchased", err)
    })

  }

  const deleteEverything = () => {
    console.log("DELETING EVERYTHING")
    axios.delete('/api/shoppinglist')
    .then(() => {
        getItems()
    })
    .catch((err) => {
        console.error("error deleting everything", err)
    })

  }
    return (
        <div className="App">
            <Header />
        <h2>Add an Item</h2>
            <AddItemForm addItems={addItems}/>

            <main>
         <h2>Shopping List</h2>
            <ShoppingList 
            items={items}
            setPurchasedFalse={setPurchasedFalse}
            deleteEverything={deleteEverything}
            handleRemoveItem={handleRemoveItem}
            handleMarkAsPurchased={handleMarkAsPurchased}
            />
            </main>
        </div>
    );
}

export default App;
