export function ButtonPanel({ names, callbacks }) {
  const buttons = Array.from(names, (name, index) => (
    <button key={index} onClick={callbacks[index]}>
      {name}
    </button>
  ));

  return <div className="buttonPanel">{buttons}</div>;
}
