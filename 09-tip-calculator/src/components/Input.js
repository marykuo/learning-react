export function SelectInput({ question, bill, onSetBill }) {
  return (
    <div>
      <label>{question}</label>
      <input
        type="text"
        placeholder="bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      ></input>
    </div>
  );
}

export function PercontageInput({ percontage, onSelect, children }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percontage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
