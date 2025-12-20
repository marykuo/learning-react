import Accordion from "./Accordion.js";
import faqs from "./Data.js";

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}
