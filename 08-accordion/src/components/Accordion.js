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
          currentOpen={currentOpen}
          setCurrentOpen={setCurrentOpen}
          key={faq.title}
        >
          {faq.text}
        </AccordionItem>
      ))}

      <AccordionItem
        number={99}
        title="Learn React"
        currentOpen={currentOpen}
        setCurrentOpen={setCurrentOpen}
        key="Learn React"
      >
        <p>Allows React developers to:</p>
        <ul>
          <li>Break up UI into components</li>
          <li>Make components reusable</li>
          <li>Place state efficiently</li>
        </ul>
      </AccordionItem>
    </div>
  );
}
