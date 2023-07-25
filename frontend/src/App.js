import React, { useState, useEffect } from 'react';
import "./App.css";
import GroceryList from './components/GroceryList';

import { addGrocery, getAllGrocery, updateGrocery, deleteList } from './utils/HandleApi';

function App() {
  const [ListGrocery, setListGrocery] = useState([]);
  const [inputText, setInputText] = useState("");
  const [totalCost,setTotalCost] = useState(0);
  const [inputQuantity, setInputQuantity] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [id, setId] = useState();

  // useEffect(() => {
    getAllGrocery(setListGrocery);
  // }, [])

  console.log("listGrocery --- >>>",ListGrocery);

  useEffect(() => {
    const calculateTotalCost = () => {
      let total = 0;
      ListGrocery.forEach((item) => {
        const itemTotal = item.quantity * item.price;
        total += itemTotal;
      });

      total = total.toFixed(2);
      setTotalCost(total);
    }

    calculateTotalCost();
  }, [ListGrocery]);


  const updateMode = (_id, text, quantity, price) => {
    setId(_id);
    setIsUpdating(true);
    setInputText(text);
    setInputQuantity(quantity);
    setInputPrice(price);

    // console.log("setting the id -->", id)
  }



  console.log(ListGrocery);

  return (
    <div className="main-container">
      <div className="center-container">
        <div className="input-container">
          <input   //name of the items
            type="text"
            className="input-box"
            placeholder="Enter your Items"
            value={inputText}
            onChange={e => {
              setInputText(e.target.value)
            }}

          />
          <input   //quantity of the items
            type="text"
            className="input-box1"
            placeholder="kg..?"
            value={inputQuantity}
            onChange={e => {
              setInputQuantity(e.target.value)
            }}

          />
          <input  //price of the items
            type="text"
            className="input-box1"
            placeholder="₹/kg"
            value={inputPrice}
            onChange={e => {
              setInputPrice(e.target.value)
            }}

          />
          <button className="add-btn"
            onClick={isUpdating ? () => {
              updateGrocery(id, inputText, setListGrocery, setIsUpdating, inputQuantity, inputPrice,setInputText,setInputPrice,setInputQuantity);

            } : () => {
              addGrocery(inputText, inputQuantity, inputPrice, setListGrocery,setInputText,setInputQuantity,setInputPrice,ListGrocery);
            }}>{isUpdating ? "up" : "+"}</button>
        </div>

        <div className="header-container">
          <h1 className="app-heading">Grocery Lists</h1>
          <span className="total-price"><h5>Total Price: ₹</h5></span>
          <span className="app-heading"><h1>{totalCost}</h1></span>
        </div>


        <hr className='hrtag'/>
        {ListGrocery.map((listItem, index) => (
          <GroceryList
            key={listItem._id} itemId={listItem._id} text={listItem.text}
            quantity={listItem.quantity} price={listItem.price}
            updateMode={updateMode}
            deleteList={() => deleteList(listItem._id, setListGrocery)}
            index = {index}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
