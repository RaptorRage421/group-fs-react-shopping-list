





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


const addItem = (newItem) => {
    axios.post('/api/shoppinglist', newItem)
      .then(() => {
        getItems()
      })
      .catch(err => {
        console.error('Error adding item:', err);
      });
  };



    return (
        <div className="App">
            <Header />

            <AddItemForm />

            <main>
                <p>Under Construction....</p>
<<<<<<< HEAD
                <ShoppingList />
=======
                <ShoppingList items={items}/>
>>>>>>> sams-branch
            </main>
        </div>
    );
}

export default App;
