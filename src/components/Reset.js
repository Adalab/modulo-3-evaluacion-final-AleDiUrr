import '../styles/components/Reset.scss';

const Reset = (props) => {
  const hadleReset = () => {
    props.reset();
  };

  return (
    <button className="btn__reset div3" onClick={hadleReset}>
      Resetwow
    </button>
  );
};
export default Reset;
