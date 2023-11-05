const TextInputGroup = ({
  words,
  onChange,
  onDeleteButtonClick,
  onAddButtonClick,
}) => {
  const hasDeleteButtons = words.length > 2;
  const notMaxWords = words.length !== 9;

  return (
    <div className="textInputGroup">
      {words.map((word) => (
        <div className="wordInput" key={word.id}>
          <input
            type="text"
            value={word.word}
            name={`word-${word.id}`}
            id={`word-${word.id}`}
            onChange={onChange(word.id)}
          />
          {hasDeleteButtons && (
            <button
              className="deleteButton"
              onClick={onDeleteButtonClick(word.id)}
            >
              X
            </button>
          )}
        </div>
      ))}
      <div className="addButtonContainer">
        {notMaxWords && (
          <button className="addButton" onClick={onAddButtonClick}>
            Add
          </button>
        )}
      </div>
    </div>
  );
};

export { TextInputGroup };
