export const DefinitionInput = ({ word, onDefinitionChange }) => {
  return (
    <li className="imageInputList_item" key={word.id}>
      <input
        className="imageInputList_definition"
        type="input"
        name={`definition${word.id}`}
        id={`definition${word.id}`}
        onChange={onDefinitionChange(word.id)}
        value={word.definition}
        placeholder={word.definition ? null : "Type definition"}
      />
    </li>
  );
};
