import { useState, useEffect } from "react";
import Question from "../Question";

function Form({ page }) {
  const [qNum, setQNum] = useState(0);
  const [response, setReponse] = useState([]);

  const [input, setInput] = useState("");
  //array of various inputs in the form
  const arrQ = [`Name`, `Email`, `DOB`, `Password`];
  //onClick to move on to the next question
  const nextQ = () => {
    if (qNum < arrQ.length - 1) {
      setQNum(qNum + 1);
      setReponse((curr) => {
        return [...curr, input];
      });
      setInput("");
    }
  };

  useEffect(() => {
    console.log(response, "re");
  }, [response]);

  const prevQ = () => {
    if (qNum > 0) {
      setQNum(qNum - 1);
    }
  };

  return (
    <div>
      <div>form</div>

      {qNum > 0 ? <button onClick={prevQ}> Back </button> : null}
      <Question
        name={arrQ[qNum]}
        setInput={setInput}
        input={input}
        nextQ={nextQ}
      />
    </div>
  );
}
export default Form;
