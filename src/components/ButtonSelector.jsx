export default function ButtonSelector({
  levelSelected,
  handleLevel,
  resetIsOver,
}) {
  const capitalizeFirstWord = (string) => {
    if (!string) return ""; // Handle empty strings
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleClick = (e) => {
    resetIsOver();
    handleLevel(e);
  }

  return (
    <button className={levelSelected} id={levelSelected} onClick={(e) => handleClick(e)}>
      {capitalizeFirstWord(levelSelected)}
    </button>
  );
}
