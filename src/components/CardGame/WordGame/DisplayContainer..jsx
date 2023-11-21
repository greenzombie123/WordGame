export const DisplayContainer = ({ isFadeIn, type, children }) => {
  return (
    <div className={`topPictureDisplay_${type} ${isFadeIn ? "fadein" : ""}`}>
      {children}
    </div>
  );
};
