import { useState } from "react";
import Details from "../Details";
function Sucess({ response }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div>congrats!</div>
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        details
      </button>
      {open ? <Details response={response} /> : null}
    </div>
  );
}

export default Sucess;
