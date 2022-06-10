const givenInput = document.getElementById('user-input');
const lengthEl = document.getElementById('length');
const volumeEl = document.getElementById('volume');
const massEl = document.getElementById('mass');

givenInput.addEventListener('input', displayResults);

function displayResults() {
  const numb = givenInput.value;
  const length = tolength(numb);
  const volume = toVolume(numb);
  const mass = toMass(numb);

  lengthEl.textContent = `${numb} meters = ${length[0]} feet | ${numb} feet = ${length[1]} meters`;
  volumeEl.textContent = `${numb} liters = ${volume[0]} gallons | ${numb} gallons = ${volume[1]} liters`;
  massEl.textContent = `${numb} kilos = ${mass[0]} pounds | ${numb} pounds = ${mass[1]} kilos`;
}

function tolength(number) {
  const mtoft = number * 3.28084;
  const ftom = number / 3.28084;
  const resultLength = roundNumber(mtoft, ftom);
  return resultLength;
}

function toVolume(number) {
  const ltog = number * 0.2641;
  const gtol = number / 0.2641;
  const resultVolume = roundNumber(ltog, gtol);
  return resultVolume;
}

function toMass(number) {
  const ktop = number * 2.20462;
  const ptok = number / 2.20462;
  const resultMass = roundNumber(ktop, ptok);
  return resultMass;
}

function roundNumber(...numbersToRound) {
  const roundedNumbers = numbersToRound.map((number) => number.toFixed(3));
  return roundedNumbers;
}