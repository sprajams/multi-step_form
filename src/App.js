import { useState } from "react";
import Success from "./components/Success";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [done, setDone] = useState(false);
  const [response, setResponse] = useState({});

  console.log(response);
  return (
    <div className="app">
      {done ? (
        <Success response={response} />
      ) : (
        <Form setDone={setDone} setResponse={setResponse} response={response} />
      )}
    </div>
  );
}

export default App;
