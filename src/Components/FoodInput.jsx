import styles from "./FoodInput.module.css";

const FoodInput = ({onkeyDownChange}) => {



  return (
    <>
      <input
        type="text"
        placeholder="Enter food item"
        className={`${styles['foodInput']} form-control form-control-sm mb-3 bg-transparent `}
        onKeyDown={onkeyDownChange}
      />
    </>
  );
};

export default FoodInput;
