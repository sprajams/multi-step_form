import { useState } from "react";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [done, setDone] = useState(false);
  const [response, setResponse] = useState({});

  console.log(response);
  return (
    <div className="app">
      {done ? (
        <div>
          <div>congrats!</div>
          <div>details</div>
          <div>{response.Name}</div>
          <div>{response.Email}</div>
          <div>{response.DOB}</div>
          <div>{response.Password}</div>
        </div>
      ) : (
        <Form setDone={setDone} setResponse={setResponse} response={response} />
      )}
    </div>
  );
}

export default App;
