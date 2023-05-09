/**
 * This function return all words larger than five reversed.
 * @param {string} text - the text/phrase.
 * @returns {string} All words capitalized.
 */
const spinWords = (string) => {
  const words = string.split(" ");
  const reverseLargerThan4 = words.map((i) =>
    i.length > 4 ? i.split("").reverse().join("") : i
  );
  return console.log(reverseLargerThan4.join(" ")); //remove console log
};

// spinWords("pare de inverter minhas letras caralho");
