import { useState } from "react";
import Details from "../Details";
import styles from "./styles.module.scss";

function Sucess({ response }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.outer}>
      <div className={styles.greetingWrap}>
        <div className={styles.greetingIcon}>✔️</div>
        <h2 className={styles.greetingText}>Complete!</h2>
      </div>

      <div className={styles.detailWrap}>
        <button
          className={styles.detailBtn}
          onClick={() => {
            setOpen(!open);
          }}
        >
          Show Details
        </button>
        <div className={styles.detailInfo}>
          {open ? <Details response={response} /> : null}
        </div>
      </div>
    </div>
  );
}

export default Sucess;
