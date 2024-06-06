import Cart from "./Cart";

const BackDrop = (props) => {
  return (
    <>
      {props.showCart && (
        <>
          <section
            className="w-full h-screen bg-neutral-400/60 fixed top-0 left-0 z-10 flex items-center justify-center"
            onClick={props.hideCartHandler}
          />
          <Cart hideCartHandler={props.hideCartHandler} />
        </>
      )}
    </>
  );
};

export default BackDrop;
