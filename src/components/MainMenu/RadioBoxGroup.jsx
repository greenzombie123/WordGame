export const RadioBoxGroup = ({ options }) => {
  return (
    <div className="radioBoxGroup">
      {options.radioBoxes.map((radioBox, index) => (
        <div className="radioBoxGroup_unit" key={index}>
          <input
            className="radioBoxGroup_radioBox"
            type="radio"
            name={radioBox.name}
            id={`${radioBox.name}_${index}`}
            onChange={radioBox.callback}
            checked={options.currentState === radioBox.value}
          />
          <label htmlFor={`${radioBox.name}_${index}`}>{radioBox.label}</label>
        </div>
      ))}
    </div>
  );
};
