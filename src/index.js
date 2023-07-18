import analyzer from './analyzer.js';

const resetButton = document.getElementById('reset-button');
const textarea = document.querySelector('textarea[name="user-input"]');
const liWordCount = document.querySelector('li[data-testid="word-count"]')
const liCharacterCount = document.querySelector('li[data-testid="character-count"]');
const liCharacterNoSpaces = document.querySelector('li[data-testid="character-no-spaces-count"]');
const liNumberCount = document.querySelector('li[data-testid="number-count"]');
const liNumberSum = document.querySelector('li[data-testid="number-sum"]');
const liWordAverage = document.querySelector('li[data-testid="word-length-average"]');


resetButton.addEventListener('click', cleanTextArea);
//textarea.addEventListener('input', updateMetrics);
textarea.addEventListener('keyup', updateMetrics);

function cleanTextArea () {
  document.querySelector('textarea[name="user-input"]').value = "";
  updateMetrics();
}

function updateMetrics() {
  const text = textarea.value;
  const wordCount = analyzer.getWordCount(text);
  const characterCount = analyzer.getCharacterCount(text);
  const characterNoSpaces = analyzer.getCharacterCountExcludingSpaces(text);
  const numberCount = analyzer.getNumberCount(text);
  const numberSum = analyzer.getNumberSum(text);
  const wordAverage = analyzer.getAverageWordLength(text);

  liWordCount.textContent = `PALABRAS: ${wordCount}`;
  liCharacterCount.textContent = `CARACTERES: ${characterCount}`;
  liCharacterNoSpaces.textContent = `CARACTERES SIN SIGNOS NI ESPACIOS: ${characterNoSpaces}`;
  liNumberCount.textContent = `NÚMEROS: ${numberCount}`;
  liNumberSum.textContent = `SUMA: ${numberSum}`;
  liWordAverage.textContent = `LONGITUD MEDIA: ${wordAverage}`;

}


