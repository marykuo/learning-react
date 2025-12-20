import { SelectInput, PercontageInput } from "./Input";
import Output from "./Output";
import Button from "./Button";
import { useState } from "react";

export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percontage1, setPercontage1] = useState(0);
  const [percontage2, setPercentage2] = useState(0);

  const tip = Math.round((bill * (percontage1 + percontage2)) / 2) / 100;

  function handleReset() {
    setBill("");
    setPercontage1(0);
    setPercentage2(0);
  }

  return (
    <div className="App">
      <SelectInput
        question="How much was the bill?"
        bill={bill}
        onSetBill={setBill}
      ></SelectInput>
      <PercontageInput percontage={percontage1} onSelect={setPercontage1}>
        How did you like the service?
      </PercontageInput>
      <PercontageInput percontage={percontage2} onSelect={setPercentage2}>
        How did your friend like the service?
      </PercontageInput>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Button text="reset" onClick={handleReset} />
        </>
      )}
    </div>
  );
}
