import '../styles/components/Results.scss';

const Results = (props) => {
  const handleResults = (event) => {
    props.handleResults(event.target.value);
  };

  return (
    <input
      className="results"
      type="number"
      value={props.results}
      onChange={handleResults}
    />
  );
};
export default Results;
