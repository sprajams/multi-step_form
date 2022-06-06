import styles from "./styles.module.scss";

function Question({ input, setInput, nextQ, data }) {
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
        <label htmlFor="name">{name}:</label>
        <input
          type={type}
          id={name}
          name={name}
          onChange={onChange}
          value={input}
          required
          className={styles.input}
        ></input>
        <button type="submit" className={styles.btnNext}>
          next
        </button>
      </form>
    </div>
  );
}

export default Question;
