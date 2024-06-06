import { useContext } from "react";
import { ItemContext } from "../store/ItemContext";

const Nav = (props) => {
  const { items } = useContext(ItemContext);
  const totalCart = items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);

  return (
    <nav className="flex items-center justify-between p-2.5">
      <h2 className="text-3xl uppercase text-yellow-500">Shoppy</h2>
      <button
        className="py-2.5 px-5 border border-yellow-500 bg-yellow-500 text-white rounded-lg font-bold text-base"
        onClick={props.showCartHandler}
      >
        Cart <span>({totalCart})</span>
      </button>
    </nav>
  );
};

export default Nav;
