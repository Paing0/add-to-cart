import React, { useContext } from "react";
import { ItemContext } from "../store/ItemContext";

const CartItems = ({ fruit }) => {
  const { addItem, removeItem } = useContext(ItemContext);
  const addAmountHandler = () => {
    addItem({ ...fruit, amount: 1 });
  };
  const removeAmountHandler = () => {
    removeItem(fruit.id);
  };
  return (
    <div className="flex justify-between p-5 border-solid border-2 rounded-lg border-yellow-500 my-5">
      <div>
        <p className="text-xl font-semibold">{fruit.name}</p>
        <p className="font-bold">$ {fruit.price}</p>
      </div>
      <div>
        <p className="py-1 px-1.5 bg-yellow-500 text-center font-medium rounded-lg text-white">
          x<span>{fruit.amount} </span>
        </p>
        <div className="">
          <button
            className="border-solid border-yellow-500 text-yellow-500 rounded-md mr-2 text-xl bg-transparent px-1.5 py-0 font-extrabold"
            onClick={addAmountHandler}
          >
            +
          </button>
          <button
            className="border-solid border-yellow-500 text-yellow-500 rounded-md text-xl bg-transparent px-1.5 py-0 font-extrabold"
            onClick={removeAmountHandler}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
