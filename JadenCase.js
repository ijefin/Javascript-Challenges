/**
 * This function return all words capitalized on their first position.
 * @param {string} text - the text/phrase.
 * @returns {string} All words capitalized.
 */
const jadenCase = (phrase) => {
  const words = phrase.split(" ");
  const capitalized = words.map((l) => l[0].toUpperCase() + l.slice(1));
  return console.log(capitalized.join(" ")); //remove console log
};

const text = "O rato roeu a roupa do rei de roma";

// jadenCase(text);




const obj = {};
