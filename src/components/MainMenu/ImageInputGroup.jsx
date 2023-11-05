export function ImageInputGroup({ words, onImageAdd }) {
  return (
    <div className="imageInputGroup">
      {/* <h1>Add Pictures</h1> */}
      <ul className="imageInputList">
        {words.map((word) => (
          <li className="imageInputList_item" key={word.id}>
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
        ))}
      </ul>
    </div>
  );
}

// div
//      h1
//      ul
//         li
//            p -> word
//            filepicker label -> NoImage / ImageAdded
