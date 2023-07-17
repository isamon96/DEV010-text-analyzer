const analyzer = {  
  getWordCount: (text) => {
    let words = text.trim().split(" ");
    words = words.filter(word => word.length > 0 && word.search(/^\W?[a-zA-Z]+\W?$/) !== -1);
    return words.length;
  },
  
  getCharacterCount: (text) => text.length,

  getCharacterCountExcludingSpaces: (text) => {
    const regex = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~¡¿«»“”‘’´¨\s]/g;
    text = text.replace(regex,"");
    return text.length;
  },

  getAverageWordLength: (text) => {
    const regex = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~¡¿«»“”‘’´¨\d]/g;
    text = text.replace(regex,"").trim();
    const words = text.split(" ");
    let numberCharacters = 0;
    words.forEach(word => numberCharacters += word.length);
    const average = numberCharacters/words.length;
    return parseFloat(average.toFixed(2));
  },

  getNumberCount: (text) => {
    const numbersAmount = text.match(/\b\d+(\.\d+)?\b/g);
    return (numbersAmount !== null) ? numbersAmount.length : 0;
  },

  getNumberSum: (text) => {
    const numbers = text.match(/\b\d+(\.\d+)?\b/g);
    let sum = 0;
    if (numbers !== null) {
      numbers.forEach(number => sum += parseFloat(number));
    }
    return sum; 
  },
};

export default analyzer;

