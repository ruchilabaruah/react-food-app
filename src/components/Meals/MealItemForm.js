import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Input from "../UI/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const ctx = useContext(CartContext);

  return (
    <form className={styles.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id, // this changed!,
          type: "number",
          min: "0",
          max: "5",
          step: "1",
          defaultValue: props.meal.quantity,
        }}
      ></Input>
      <button onClick={ctx.addItem}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
