import { useState } from "react";

export function ToggleSwitch({ id, onToggleClick, isToggled}) {

  return (
    <div className="toggleSwitch">
      <input
        onChange={onToggleClick}
        type="checkbox"
        name={`toggle-${id}`}
        id={`toggle-${id}`}
        checked={isToggled}
      />
      <label htmlFor={`toggle-${id}`}>
        <div
          className="status-toggle"
          data-unchecked="Off"
          data-checked="On"
        ></div>
      </label>
    </div>
  );
}
