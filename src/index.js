import analyzer from './analyzer.js';

const resetButton = document.getElementById('reset-button');
const textarea = document.querySelector('textarea[name="user-input"]');
const palabrasCount = document.getElementById('palabrasCount');
const caracteresCount = document.getElementById('caracteresCount');
const caracteresNoSpaces = document.getElementById('caracteresNoSpaces');
const numeroCount = document.getElementById('numeroCount');
const numeroSum = document.getElementById('numeroSum');
const promedio = document.getElementById('promedio');

resetButton.addEventListener('click', cleanTextArea);
textarea.addEventListener('input', updateMetrics);

function cleanTextArea () {
  document.querySelector('textarea[name="user-input"]').value = "";
  updateMetrics();
}

function updateMetrics() {
  const text = textarea.value;
  palabrasCount.textContent = analyzer.getWordCount(text);
  caracteresCount.textContent = analyzer.getCharacterCount(text);
  caracteresNoSpaces.textContent = analyzer.getCharacterCountExcludingSpaces(text);
  numeroCount.textContent = analyzer.getNumberCount(text);
  numeroSum.textContent = analyzer.getNumberSum(text);
  promedio.textContent = analyzer.getAverageWordLength(text);
}


