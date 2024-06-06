import { useContext } from "react";
import CartItems from "./CartItems";
import { ItemContext } from "../store/ItemContext";

const Cart = (props) => {
  const { items, totalAmount } = useContext(ItemContext);

  const totalPrice = `$ ${totalAmount.toFixed(2)}`;
  return (
    <section className="bg-white py-2 px-20 w-4/5 z-20 rounded-lg fixed top-[50%] left-1/2 translate-x-[-50%] translate-y-[-50%]">
      <h2>Carts</h2>
      <section className="h-[300px] overflow-auto">
        {items.length < 1 ? (
          <h1 className="text-center">No items in your cart !</h1>
        ) : (
          <>
            {items.map((fruit) => (
              <CartItems key={fruit.id} fruit={fruit} />
            ))}
          </>
        )}
      </section>
      <hr />
      <div className="flex items-center justify-between">
        <h3>Total Price</h3>
        <p className="text-lg font-extrabold">{totalPrice}</p>
      </div>
      <div className="flex items-center justify-end">
        <button
          className="bg-transparent border-2 rounded-lg  border-yellow-500 py-2 px-5 text-yellow-500 text-lg font-semibold mr-5"
          onClick={props.hideCartHandler}
        >
          Close
        </button>

        {items.length < 1 ? (
          <></>
        ) : (
          <button
            className="bg-yellow-500 border-2 rounded-lg  border-yellow-500 py-2 px-5 text-white text-lg font-semibold"
            onClick={() => {
              alert("Ordered!");
            }}
          >
            Order
          </button>
        )}
      </div>
    </section>
  );
};

export default Cart;
