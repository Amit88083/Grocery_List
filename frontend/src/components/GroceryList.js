import React, {useState,useEffect}from 'react';

function GroceryList(props) {
  const totalPrice = props.price * props.quantity;
  const finalPrice = totalPrice.toFixed(2);

  // useEffect(() => {
  //   setSerialNumber((prevSerialNumber) => prevSerialNumber + 1);
  // }, []);

  return (
    <div className={`list-item ${props.text ? 'item-shown' : ''}`}>
      <div className="serial-number">
        <span className='serialNumber'>{props.index + 1}.</span>
      </div>
      <div className="grocery-box">
        <span className="value">{props.text.charAt(0).toUpperCase() + props.text.slice(1)}</span>
      </div>

      <div className="grocery-box fixed-info1">
        <span className="value">{props.quantity}</span>
        <span className="label"> kg</span>
      </div>

      <div className="grocery-box fixed-info2">
        <span className="label">₹ </span>
        <span className="value">{finalPrice}</span>
      </div>
      <div className="icons">
        <i
          className="fa-regular fa-pen-to-square icon-edit"
          onClick={() => {
            // console.log("key -- >", props.itemId);
            props.updateMode(props.itemId, props.text, props.quantity, props.price);
          }}
        ></i>
        <i className="fa-solid fa-trash-can icon-delete" onClick={props.deleteList}></i>
      </div>
    </div>
  );
}

export default GroceryList;

