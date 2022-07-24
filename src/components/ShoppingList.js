import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  //console.log(items)

  //step 1: save selection to useState
  //step 2: when selection changes (onChange), create a function to save new choice to selection.
  //step 3: Filter all items/foods based on selection and save to "newArray"
  //step 4: Map through "newArray" selected and display

  //step 1
  const [selectedCategory, setSelectedCategory] = useState("All")

  //step 2
  function saveNewCategory(e){
    setSelectedCategory(e.target.value)
  }

  //step 3
  const categorySelection = items.filter((i) => {
    if (selectedCategory === "All"){
      return true
    }else{
      return i.category === selectedCategory
    }
  })


  //step 4 display "new items" by Mapping through "newArray", and for each item in array, call "Item Component" to display it:

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={saveNewCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {categorySelection.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
