import { useState } from "react";
import "./App.css";
import Grocery from "./components/Grocery";

function App() {
  const products = [
    {
      name: "Oranges",
      votes: 0,
    },
    { name: "Bananas", votes: 0 },
  ];

  return (
    <div className="App">
      <Grocery products={products} />
    </div>
  );
}

export default App;
