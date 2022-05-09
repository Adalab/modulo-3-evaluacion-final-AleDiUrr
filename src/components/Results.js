const Results = (props) => {
  const handleResults = (event) => {
    props.handleResults(event.target.value);
  };

  return (
    <input
      className="filter__year div2"
      type="number"
      value={props.results}
      onChange={handleResults}
    />
  );
};
export default Results;
