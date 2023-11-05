import { RadioBoxGroup } from "./RadioBoxGroup";

export const CardGameModeOptions = ({ options }) => {
  let description;
  if (options.currentState === "word")
    description = <p className="cardGameModeOptions_text">Cards will only have words</p>;
  else description = <p className="cardGameModeOptions_text">Cards will only have pictures</p>;

  return (
    <div className="cardGameModeOptions">
      <div className="cardGameModeOptions_inner">
        <h3>Choose a mode for the card game</h3>
        <RadioBoxGroup options={options} />
        {description}
      </div>
    </div>
  );
};
