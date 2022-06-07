import { useState } from "react";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [done, setDone] = useState(false);
  return (
    <div className="app">
      {done ? <div>congrats!</div> : <Form setDone={setDone} />}
    </div>
  );
}

export default App;
