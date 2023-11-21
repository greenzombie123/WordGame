export const ImageInput = ({ word, onImageAdd }) => {
  return (
    <li className="imageInputList_item">
      <p className={`imageInputList_word ${word.word !== "" ? "" : "noWord"}`}>
        {word.word ? word.word : "No Word Typed"}
      </p>
      <input
        type="file"
        name={`image${word.id}`}
        id={`image${word.id}`}
        onChange={onImageAdd(word.id)}
      />
      <label htmlFor={`image${word.id}`}>
        {word.file ? "Image Added!" : "Attach An Image"}
      </label>
    </li>
  );
};
