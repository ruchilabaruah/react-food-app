import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { CartContextProvider } from "./store/cart-context";

function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  const showCartShownHandler = (value) => {
    setIsCartShown(true);
  };

  const hideCartShownHandler = (value) => {
    setIsCartShown(false);
  };

  return (
    <CartContextProvider>
      {isCartShown && <Cart onClose={hideCartShownHandler} />}
      <Header onShowCart={showCartShownHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartContextProvider>
  );
}

export default App;
