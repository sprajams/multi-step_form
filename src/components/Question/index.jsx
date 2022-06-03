function Question({ name }) {
  return (
    <div>
      <label htmlFor="name">{name}:</label>
      <input type="text" id="name" name="user_name"></input>
    </div>
  );
}

export default Question;
