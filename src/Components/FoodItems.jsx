import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ items }) => {

let [activeItems, setActiveItems] = useState([]);

let onBuyBtn = (item, event) => {
  let newItems = [...activeItems, item];
  setActiveItems(newItems);
}


  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Item
            key={item}
            foodItems={item}
            listSelected={activeItems.includes(item)}
            handleBuyButton={(event) => onBuyBtn(item, event)}
          ></Item>
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
