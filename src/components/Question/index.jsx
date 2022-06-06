function Question({ name, input, setInput, nextQ }) {
  const onChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextQ();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">{name}:</label>
        <input
          type="text"
          id={name}
          name={name}
          onChange={onChange}
          value={input}
          required
        ></input>
        <button type="submit">next</button>
      </form>
    </div>
  );
}

export default Question;
