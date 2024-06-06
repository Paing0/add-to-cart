import MainComponent from "./layout/MainComponent";
import ItemContextProvider from "./store/ItemContext";

function App() {
  return (
    <>
      <ItemContextProvider>
        <MainComponent />
      </ItemContextProvider>
    </>
  );
}

export default App;
