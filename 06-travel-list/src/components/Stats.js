export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  }

  const totalItem = items.length;
  const packedItem = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((packedItem / totalItem) * 100);

  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "You got everything! Ready to go ✈"
          : `You have ${totalItem} items on your list, and you already package ${packedItem} (${packedPercentage}%)`}
      </em>
    </footer>
  );
}
