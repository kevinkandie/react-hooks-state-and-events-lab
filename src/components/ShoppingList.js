import { useState } from "react";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Ensure all items show when initially rendered (selectedCategory === "All")
  const filteredItems = items.filter((item) =>
    selectedCategory === "All" ? true : item.category === selectedCategory
  );

  return (
    <div>
      <h2>Shopping List</h2>

      {/* Dropdown for selecting category */}
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>

      {/* ✅ Ensure this <ul> has className="Items" to match the test */}
      <ul className="Items">
        {filteredItems.map((item) => (
          <li key={item.id} className="">
            <span>{item.name}</span>
            <span className="category">{item.category}</span>
            <button>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
