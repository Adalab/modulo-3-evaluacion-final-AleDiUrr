import '../styles/components/ButtonPlayWow.scss';

const ButtonPlayWow = (props) => {
  return (
    <a
      className="btn__play"
      href={props.audio}
      target="blank"
      rel="noopener noreferrer"
    >
      Here is the wow
    </a>
  );
};

export default ButtonPlayWow;
