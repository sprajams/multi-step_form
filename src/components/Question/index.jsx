import styles from "./styles.module.scss";

function Question({ input, setInput, nextQ, data, isLast }) {
  const { name, type } = data;
  const onChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextQ();
  };

  return (
    <div className={styles.outer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.innerForm}>
          <label htmlFor={name}>{name}:</label>
          <input
            type={type}
            id={name}
            name={name}
            onChange={onChange}
            value={input}
            required
            className={styles.input}
          ></input>
        </div>
        {isLast ? (
          <button type="submit" className={styles.btn}>
            Submit
          </button>
        ) : (
          <button type="submit" className={styles.btn}>
            next
          </button>
        )}
      </form>
    </div>
  );
}

export default Question;
