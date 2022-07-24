import React, {useState} from "react";

function Item({ name, category }) {

  // store inCart value to state and set value to false
  const [inCart, setInCart] = useState(false)

  // function handle add items to cart, when called , sets "inCarts" value to "not false" 
  function location(){
    setInCart((inCart => !inCart))
  }
  
  // variable to className , depending on whether "inCart" is "true" or "not"
  const setClass = inCart ? "in-cart" : null

  //button element with tenary expression to decide it's text content based on the boolean value of "inCart"
  return (
    <li className={setClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={location}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
