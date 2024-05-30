import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShoppingForm from '../ShoppingForm/ShoppingForm.jsx';
import Header from '../Header/Header.jsx'
import './App.css';


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
            <ShoppingForm addItem={addItem}/>

            <main>
                <p>Under Construction....</p>
                <ShoppingList items={items}/>
            </main>
        </div>
    );
}

export default App;
