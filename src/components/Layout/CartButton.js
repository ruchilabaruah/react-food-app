import { useContext } from "react";
import CartContext from "../../store/cart-context";
import styles from "./CartButton.module.css";

const CartButton = (props) => {
  const ctx = useContext(CartContext);
  return (
    <button className={styles.button} onClick={props.onShowCart}>
      <span>Your Cart</span>
      <span className={styles.badge}>{ctx.items.length}</span>
    </button>
  );
};

export default CartButton;
