import { useContext } from "react";
import CartContext from "../../store/cart-context";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const ctx = useContext(CartContext);
  const price = `$${props.meal.price.toFixed(2)}`;

  const addToCartHandler = (amt) => {
    ctx.addItem({
      id: props.meal.id,
      name: props.meal.name,
      price: props.meal.price,
      quantity: amt,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={styles.description}>{props.meal.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm
          id={props.meal.id}
          meal={props.meal}
          onAddToCart={addToCartHandler}
        />
      </div>
    </li>
  );
};

export default MealItem;
