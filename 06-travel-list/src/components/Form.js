import { useState } from "react";

export default function Form({ onAddItem }) {
  const [description, setDesctiption] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    // not to take the default action (submitting the form)
    e.preventDefault();

    if (!description) return;

    const newItem = { id: Date.now(), description, quantity, packed: false };

    onAddItem(newItem);

    setDesctiption("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item ..."
        value={description}
        onChange={(e) => setDesctiption(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
