import { useState } from "react";
import data from "./data.js";
import "./index.css";
import Categories from "./components/Categories.jsx";
import Menue from "./components/Menue.jsx";

function App() {
  const allCategories = ["all", ...new Set(data.map((item) => item.category))];
  const [menueItems, setMenueItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenueItems(data);
      return;
    }
    let newItems = menueItems.filter((item) => item.category === category);
    setMenueItems(newItems);
  };
  return (
    <main>
      <section className="menue section">
        <div>
          <h2 className="title">Our Menue</h2>
          <div className="underline"></div>
        </div>
      </section>
      <Categories filterItems={filterItems} allCategories={allCategories} />
      <Menue items={menueItems} />
    </main>
  );
}

export default App;
