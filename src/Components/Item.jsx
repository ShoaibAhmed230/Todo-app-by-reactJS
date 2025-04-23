import styles from "./Item.module.css";

const Item = ({ foodItems, handleBuyButton, listSelected }) => {
  // let {foodItems} = props; // object/array destructuring

  // customs css ki class ko  andar rkhni he or bootstrap ki  class ko  bahar rkhkni he
  //jb multiple classes hogi tw esy syntax likhy gy className={`${styles['item-bg']} list-group-item`} module css me
  // or jb 1 class hogi tw essy syntax hoga className={styles['item-text']}>{foodItems}



  return (
    <>
      <li className={`${styles["item"]} list-group-item d-flex m-2 ${listSelected && "active"}`}>
        <span className={`${styles["item-text"]} text-capitalize`}>{foodItems}</span>
        <button
          onClick={handleBuyButton}
          className={`${styles["itemBtn"]} btn btn-outline-light`}
        >
          Buy
        </button>
      </li>
    </>
  );
};

export default Item;
