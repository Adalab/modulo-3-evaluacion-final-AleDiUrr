import '../styles/components/CharacterFilter.scss';

const CharacterFilter = (props) => {
  const handleCharacters = (event) => {
    props.handleFilterCharacter(event.target.value);
  };
  const renderCharacter = () => {
    return props.characters.map((character, i) => {
      return (
        <option key={i} value={character}>
          {character}
        </option>
      );
    });
  };

  return (
    <>
      <select
        className="filter__character"
        value={props.filterCharacter}
        onChange={handleCharacters}
      >
        <option className="filter__year" value="every">
          Character
        </option>
        {renderCharacter()}
      </select>
    </>
  );
};
export default CharacterFilter;
