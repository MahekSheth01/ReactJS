function College({ name }) {
  return (
    <div>
      <h1>College Names</h1>
      <ul>
        {name.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </div>
  );
}

export default College;
