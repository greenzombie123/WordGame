import { RadioBoxGroup } from "./RadioBoxGroup";

export const CardGameModeOptions = ({ options }) => {
  const { cardGameModeOptions, showPictureOptions } = options;

  let description;
  if (cardGameModeOptions.currentState === "word")
    description = (
      <p className="cardGameModeOptions_text">Cards will only have words</p>
    );
  else
    description = (
      <p className="cardGameModeOptions_text">Cards will only have pictures</p>
    );

  return (
    <div className="cardGameModeOptions">
      <div className="cardGameModeOptions_inner">
        <h2>Choose a mode for the card game</h2>
        <RadioBoxGroup options={cardGameModeOptions} />
        {description}
        {cardGameModeOptions.currentState === "word" && (
          <>
            <h2>Show picture or definition of target word card during game </h2>
            <RadioBoxGroup options={showPictureOptions} />
          </>
        )}
      </div>
    </div>
  );
};
