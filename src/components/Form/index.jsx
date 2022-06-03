import { useState } from "react";
import Question from "../Question";

function Form({ page }) {
  const [qNum, setQNum] = useState(0);
  const [response, setReponse] = useState({
    name: "",
    email: "",
    DOB: "",
    password: "",
  });
  const arrQ = [`Name`, `Email`, `DOB`, `Password`];
  console.log(qNum, response.email);

  const nextQ = () => {
    console.log(qNum);
    if (qNum < arrQ.length - 1) {
      setQNum(qNum + 1);
    }
  };
  const prevQ = () => {
    if (qNum > 0) {
      setQNum(qNum - 1);
    }
  };

  return (
    <div>
      <div>form</div>

      {qNum > 0 ? <button onClick={prevQ}> Back </button> : null}
      <Question name={arrQ[qNum]} />

      {qNum === arrQ.length - 1 ? (
        <button>Submit</button>
      ) : (
        <button onClick={nextQ}>next</button>
      )}
    </div>
  );
}
export default Form;
