function Details({ response }) {
  return (
    <div>
      <div>
        <span>Name: </span> {response.Name}
      </div>
      <div>
        <span>Email: </span> {response.Email}
      </div>
      <div>
        <span>DOB: </span>
        {response.DOB}
      </div>
      <div>
        <span>Password: </span>
        {response.Password}
      </div>
    </div>
  );
}

export default Details;
