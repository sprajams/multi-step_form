function Question({ name, input, setInput }) {
  const onChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  return (
    <div>
      <label htmlFor="name">{name}:</label>
      <input
        type="text"
        id="name"
        name="user_name"
        onChange={onChange}
        value={input}
        required
      ></input>
    </div>
  );
}

export default Question;
