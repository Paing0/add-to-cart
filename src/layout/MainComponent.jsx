import { useState } from "react";
import Header from "./Header";
import Body from "./Body.jsx";
import BackDrop from "../components/BackDrop.jsx";

const MainComponent = () => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };
  const hideCartHandler = () => {
    setShowCart(false);
  };
  return (
    <section>
      <Header showCartHandler={showCartHandler} />
      <Body />
      <BackDrop showCart={showCart} hideCartHandler={hideCartHandler} />
    </section>
  );
};

export default MainComponent;
