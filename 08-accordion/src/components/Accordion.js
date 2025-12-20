import { useState } from "react";
import AccordionItem from "./AccordionItem";

export default function Accordion({ data }) {
  const [currentOpen, setCurrentOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((faq, i) => (
        <AccordionItem
          number={i + 1}
          title={faq.title}
          text={faq.text}
          currentOpen={currentOpen}
          setCurrentOpen={setCurrentOpen}
          key={faq.title}
        />
      ))}
    </div>
  );
}
