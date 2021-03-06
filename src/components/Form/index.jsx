import { useState, useEffect } from "react";
import Question from "../Question";
import styles from "./styles.module.scss";

function Form({ setDone, setResponse, response }) {
  const [qNum, setQNum] = useState(0);

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
    setResponse((curr) => {
      // create a clone of the current object
      const clone = { ...curr };
      //a dd in new info
      clone[qData[qNum].name] = input;
      // return obj
      return clone;
    });
    if (qNum < qData.length - 1) {
      setQNum(qNum + 1);
    }
    if (qNum === qData.length - 1) {
      setDone(true);
    }
  };

  // set input to use entered data or empty string if none is available
  useEffect(() => {
    setInput(response[qData[qNum].name] || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qNum]);

  const prevQ = () => {
    if (qNum > 0) {
      setQNum(qNum - 1);
    }
  };

  return (
    <div className={styles.outer}>
      {qNum > 0 ? (
        <button onClick={prevQ} className={styles.btnBack}>
          ＜ Back
        </button>
      ) : null}
      <div className={styles.qWrap}>
        <Question
          data={qData[qNum]}
          setInput={setInput}
          input={input}
          nextQ={nextQ}
          isLast={qNum === qData.length - 1}
        />
      </div>

      <div className={styles.pageNum}>
        {qNum + 1} / {qData.length}
      </div>
    </div>
  );
}
export default Form;
