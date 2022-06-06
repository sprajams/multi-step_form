import { useState } from "react";
import Question from "../Question";

function Form({ page }) {
  const [qNum, setQNum] = useState(0);
  const [response, setReponse] = useState([]);

  const [input, setInput] = useState("");

  //array of various inputs in the form
  const arrQ = [`Name`, `Email`, `DOB`, `Password`];
  //onClick to move on to the next question
  const nextQ = () => {
    if (qNum < arrQ.length - 1 && input.length > 0) {
      console.log("next");
      setQNum(qNum + 1);
      setReponse((curr) => {
        return [...curr, input];
      });
      setInput("");
    }
  };
  console.log(response, "r");
  //onClick to go to the prev question
  const prevQ = () => {
    if (qNum > 0) {
      setQNum(qNum - 1);
    }
  };

  return (
    <div>
      <div>form</div>

      {qNum > 0 ? <button onClick={prevQ}> Back </button> : null}
      <Question name={arrQ[qNum]} setInput={setInput} input={input} />

      {qNum === arrQ.length - 1 ? (
        <button>Submit</button>
      ) : (
        <button onClick={nextQ}>next</button>
      )}
    </div>
  );
}
export default Form;
