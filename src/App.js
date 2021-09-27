import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  const showCartShownHandler = (value) => {
    setIsCartShown(true);
  };

  const hideCartShownHandler = (value) => {
    setIsCartShown(false);
  };

  return (
    <Fragment>
      {isCartShown && <Cart onClose={hideCartShownHandler} />}
      <Header onShowCart={showCartShownHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </Fragment>
  );
}

export default App;
