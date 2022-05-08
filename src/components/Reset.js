const Reset = (props) => {
  const hadleReset = () => {
    props.reset();
  };

  return <button onClick={hadleReset}>Resetwow</button>;
};
export default Reset;
