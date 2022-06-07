import { useState, useEffect } from "react";
import Question from "../Question";

function Form({ page }) {
  const [qNum, setQNum] = useState(0);
  const [response, setResponse] = useState({});

  const [input, setInput] = useState("");
  // array of various input name+type in the form
  const qData = [
    { name: "Name", type: "text" },
    { name: "Email", type: "email" },
    { name: "DOB", type: "date" },
    { name: "Password", type: "password" },
  ];

  // onClick to move on to the next question and clear input
  const nextQ = () => {
    if (qNum < qData.length - 1) {
      setQNum(qNum + 1);
      setResponse((curr) => {
        // create a clone of the current object
        const clone = { ...curr };
        //a dd in new info
        clone[qData[qNum].name] = input;
        // return obj
        return clone;
      });

      // set input to use entered data or empty string if none is available
      setInput(response[qData[qNum + 1].name]);
    }
  };

  useEffect(() => {
    console.log(response, "re");
  }, [response]);

  const prevQ = () => {
    if (qNum > 0) {
      setQNum(qNum - 1);

      // set input to use entered data or empty string if none is available
      setInput(response[qData[qNum - 1].name]);
    }
  };

  return (
    <div>
      <div>form</div>

      {qNum > 0 ? <button onClick={prevQ}> Back </button> : null}
      <Question
        data={qData[qNum]}
        setInput={setInput}
        input={input}
        nextQ={nextQ}
        isLast={qNum === qData.length - 1}
      />
    </div>
  );
}
export default Form;
