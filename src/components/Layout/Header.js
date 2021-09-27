import { Fragment } from "react";
import styles from "./Header.module.css";
import foodImage from "../../assets/food.jpg";
import CartButton from "./CartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Tasty Meals by Ruchila</h1>
        <CartButton onShowCart={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={foodImage} alt="A world of best dishes" />
      </div>
    </Fragment>
  );
};

export default Header;
