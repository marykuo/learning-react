export default function AccordionItem({ number, title, text }) {
  return (
    <div className="item">
      <p className="number">{number}</p>
      <p className="title">{title}</p>
      <p className="icon">-</p>
      <div className="content-box">{text}</div>
    </div>
  );
}
