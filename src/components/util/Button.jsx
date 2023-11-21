export const Button = ({ onClick, text, classNames = null }) => {
  return (
    <button className={classNames} onClick={onClick}>
      {text}
    </button>
  );
};
