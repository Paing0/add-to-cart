import { useContext, useState } from "react";
import { ItemContext } from "../store/ItemContext";

const Card = ({ fruit }) => {
  const { name, id, description, price } = fruit;
  const { addItem } = useContext(ItemContext);

  const [currentAmount, setCurrentAmount] = useState(1);
  const currentAmountNumber = +currentAmount;

  const addToCartHandler = () => {
    if (currentAmountNumber < 1 || currentAmount > 5) {
      alert("Please enter a valid amount.");
      return;
    }
    addItem({
      id,
      name,
      price,
      amount: currentAmountNumber,
    });
  };
  return (
    <div className="flex justify-between p-2.5 border-solid border-2 rounded-lg border-yellow-500 my-5">
      <div>
        <p className="text-xl font-semibold">{name}</p>
        <p>{description}</p>
        <p className="text-xl font-semibold">$ {price}</p>
      </div>
      <div>
        <input
          type="number"
          className="block w-12 mt-5 mb-2.5 py-1 px-1.5 border-solid rounded-md border-yellow-500 text-base select-none"
          min={1}
          max={5}
          value={currentAmount}
          onChange={(e) => {
            setCurrentAmount(e.target.value);
          }}
        />
        <button
          className="bg-yellow-500 border-2 rounded-lg  border-yellow-500 p-2 text-white text-sm font-semibold"
          onClick={addToCartHandler}
        >
          +ADD
        </button>
      </div>
    </div>
  );
};

export default Card;
