import AccordionItem from "./AccordionItem";

export default function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((faq, i) => (
        <AccordionItem
          number={i + 1}
          title={faq.title}
          text={faq.text}
          key={faq.title}
        />
      ))}
    </div>
  );
}
