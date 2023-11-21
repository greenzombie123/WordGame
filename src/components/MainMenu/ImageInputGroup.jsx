import { DefinitionInput } from "./DefinitionInput";
import { ImageInput } from "./ImageInput";
import { InputButton } from "./InputButton";

export function ImageInputGroup({ words, onImageAdd, onPropSwap, onDefinitionChange, cardGameMode }) {
  return (
    <div className="imageInputGroup">
      <ul className="imageInputList">
        {words.map((word) => {
          const props = Object.keys(word);
          const hasFile = props.some((prop) => "file" === prop);
          const hasDefinition = props.some((prop) => "definition" === prop);
          if (hasFile) return <div className="imageInputList_inputContainer" key={word.id}>
            <ImageInput word={word} onImageAdd={onImageAdd}/>
            {cardGameMode === "word" && <InputButton onPropSwap={onPropSwap(word.id)}/>}
          </div>;
          else if(hasDefinition) return <div className="imageInputList_inputContainer" key={word.id}>
          <DefinitionInput word={word} onDefinitionChange={onDefinitionChange}/>
          {cardGameMode === "word" && <InputButton onPropSwap={onPropSwap(word.id)}/>}
        </div>;
        })}
      </ul>
    </div>
  );
}
