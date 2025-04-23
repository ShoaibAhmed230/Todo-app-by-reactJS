import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./Components/FoodItems";
import ErrorMsg from "./Components/ErrorMsg";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";

function App() {
  
  // "daal", "roti", "salad"


  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if(event.key === 'Enter') {
      let newFoodItem = event.target.value;
      let newItems = [...foodItems, newFoodItem];
      event.target.value = "";
      setFoodItems(newItems)
      // console.log('food value entered is ' + newFoodItem);
    }
    
  };

  return (
    <>
      <Container>
        <h1 className="text-center fs-3 text">Healthy Food</h1>
        <FoodInput onkeyDownChange={onKeyDown}></FoodInput>
        <ErrorMsg items={foodItems}></ErrorMsg>
        {/* <p className="text-white text-break">{textToShow}</p> */}
        <FoodItems items={foodItems}></FoodItems>
      </Container>
      <Container>
        <p className="text-white">
          Above is the healthy foods that are good for your health.
        </p>
      </Container>
    </>
  );
}

export default App;
