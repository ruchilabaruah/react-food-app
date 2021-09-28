import { useRef, useState } from "react";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Input from "../UI/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountRef = useRef();
  const [amtIsValid, setAmtIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const amt = +amountRef.current.value;

    if (amt < 0 || amt > 5) {
      setAmtIsValid(false);
      return;
    }
    props.onAddToCart(amt);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: "amount_" + props.id, // this changed!,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: '1',
        }}
      ></Input>
      <button>+ Add</button>
      {!amtIsValid && "Invalid amount!"}
    </form>
  );
};

export default MealItemForm;
