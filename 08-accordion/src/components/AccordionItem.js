export default function AccordionItem({
  number,
  title,
  children: text,
  currentOpen,
  setCurrentOpen,
}) {
  const isOpen = number === currentOpen;

  function handleToggle(number) {
    if (number === currentOpen) setCurrentOpen(null);
    else setCurrentOpen(number);
  }

  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => handleToggle(number)}
    >
      <p className="number">{number < 9 ? `0${number}` : number}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
