import styles from "./CartButton.module.css";

const CartButton = (props) => {
  return (
    <button className={styles.button}>
      <span>Your Cart</span>
      <span className={styles.badge}>3</span>
    </button>
  );
};

export default CartButton;