function ScoreBoard({ score, numOfWords }) {
  const stars = makeStars(score, numOfWords);

  return <div className="scoreBoard">{stars}</div>;
}

// Creates an array of className strings
function makeStars(score, numOfWords) {
  const stars = Array.from({ length: numOfWords }, (_, index) => {
    let className = numOfWords < 5 ? "star_4" : `star_${numOfWords}`;
    // This will highlight the stars from bottom to top
    className = className + (numOfWords - index <= score ? " highlighted" : "");
    return <div className={className} key={index}></div>;
  });
  return stars;
}

export default ScoreBoard;
