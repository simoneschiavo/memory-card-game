export default function ButtonSelector({ levelSelected, handleLevel }) {
  const capitalizeFirstWord = (string) => {
    if (!string) return ""; // Handle empty strings
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <button className={levelSelected} onClick={handleLevel}>
      {capitalizeFirstWord(levelSelected)}
    </button>
  );
}
