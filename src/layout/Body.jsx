import Card from "../components/Card";

const Body = () => {
  const fruits = [
    {
      id: 1,
      price: 10.98,
      name: "Banana",
      description: "fresh banana from Thailand",
    },
    {
      id: 2,
      price: 11.98,
      name: "Coconut",
      description: "fresh coconut from Thailand",
    },
    {
      id: 3,
      price: 13.12,
      name: "Mango",
      description: "fresh mango from Thailand",
    },
  ];
  return (
    <section>
      {fruits.map((fruit) => (
        <Card key={fruit.id} fruit={fruit} />
      ))}
    </section>
  );
};

export default Body;
