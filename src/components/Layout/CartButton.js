import { useContext } from "react";
import CartContext from "../../store/cart-context";
import styles from "./CartButton.module.css";

const CartButton = (props) => {
  const ctx = useContext(CartContext);
  const totalItems = ctx.items.reduce((current, item) => {
    return current + item.quantity;
  }, 0);

  return (
    <button className={styles.button} onClick={props.onShowCart}>
      <span>Your Cart</span>
      <span className={styles.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
