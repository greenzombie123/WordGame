export const ImageDisplay = ({src, newCurrentWord}) => {
  return (
    <img
      className="topPictureDisplay_image"
      src={src}
      alt={newCurrentWord}
      onLoad={() => URL.revokeObjectURL(src)}
    />
  );
};
