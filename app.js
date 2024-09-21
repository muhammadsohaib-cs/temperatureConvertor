const tempInput = document.getElementById('temp-input');
const fromUnitSelect = document.getElementById('from-unit');
const toUnitSelect = document.getElementById('to-unit');
const convertBtn = document.getElementById('convert-btn');
const outputDiv = document.getElementById('output');

convertBtn.addEventListener('click', convertTemperature);

function convertTemperature() {
  const tempValue = (tempInput.value);
  const fromUnit = fromUnitSelect.value
  const toUnit = toUnitSelect.value;
  let convertedTemp;

  switch (fromUnit) {
    case 'Celsius':
      switch (toUnit) {
        case 'Fahrenheit':
          convertedTemp = (tempValue * 9/5) + 32;
          break;
        case 'Kelvin':
          convertedTemp = tempValue + 273.15;
          break;
        default:
          convertedTemp = tempValue;
      }
      break;
    case 'Fahrenheit':
      switch (toUnit) {
        case 'Celsius':
          convertedTemp = (tempValue - 32) * 5/9;
          break;
        case 'Kelvin':
          convertedTemp = ((tempValue - 32) * 5/9) + 273.15;
          break;
        default:
          convertedTemp = tempValue;
      }
      break;
    case 'Kelvin':
      switch (toUnit) {
        case 'Celsius':
          convertedTemp = tempValue - 273.15;
          break;
        case 'Fahrenheit':
          convertedTemp = ((tempValue - 273.15) * 9/5) + 32;
          break;
        default:
          convertedTemp = tempValue;
      }
      break;
  }

  outputDiv.innerText = `The converted temperature is ${convertedTemp} ${toUnit}`;
}