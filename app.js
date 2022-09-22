// https://www.omnicalculator.com/health/psa-density

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const PSAdensityRadio = document.getElementById('PSAdensityRadio');
const lengthRadio = document.getElementById('lengthRadio');
const widthRadio = document.getElementById('widthRadio');
const heightRadio = document.getElementById('heightRadio');
const PSARadio = document.getElementById('PSARadio');

let PSAdensity;
const PI = Math.PI;
let length = v1;
let width = v2;
let height = v3;
let PSA = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

PSAdensityRadio.addEventListener('click', function() {
  variable1.textContent = 'Length';
  variable2.textContent = 'Width';
  variable3.textContent = 'Height';
  variable4.textContent = 'PSA';
  length = v1;
  width = v2;
  height = v3;
  PSA = v4;
  result.textContent = '';
});

lengthRadio.addEventListener('click', function() {
  variable1.textContent = 'PSA density';
  variable2.textContent = 'Width';
  variable3.textContent = 'Height';
  variable4.textContent = 'PSA';
  PSAdensity = v1;
  width = v2;
  height = v3;
  PSA = v4;
  result.textContent = '';
});

widthRadio.addEventListener('click', function() {
  variable1.textContent = 'PSA density';
  variable2.textContent = 'Length';
  variable3.textContent = 'Height';
  variable4.textContent = 'PSA';
  PSAdensity = v1;
  length = v2;
  height = v3;
  PSA = v4;
  result.textContent = '';
});

heightRadio.addEventListener('click', function() {
  variable1.textContent = 'PSA density';
  variable2.textContent = 'Length';
  variable3.textContent = 'Width';
  variable4.textContent = 'PSA';
  PSAdensity = v1;
  length = v2;
  width = v3;
  PSA = v4;
  result.textContent = '';
});

PSARadio.addEventListener('click', function() {
  variable1.textContent = 'PSA density';
  variable2.textContent = 'Length';
  variable3.textContent = 'Width';
  variable4.textContent = 'Height';
  PSAdensity = v1;
  length = v2;
  width = v3;
  height = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(PSAdensityRadio.checked)
    result.textContent = `PSA density = ${computePSAdensity().toFixed(2)}`;

  else if(lengthRadio.checked)
    result.textContent = `Length = ${computelength().toFixed(2)}`;

  else if(widthRadio.checked)
    result.textContent = `Width = ${computewidth().toFixed(2)}`;

  else if(heightRadio.checked)
    result.textContent = `Height = ${computeheight().toFixed(2)}`;

  else if(PSARadio.checked)
    result.textContent = `PSA = ${computePSA().toFixed(2)}`;
})

// calculation

// PSAdensity = PSA / (length * width * height * π / 6)

function computePSAdensity() {
  return  Number(PSA.value) / (Number(length.value) *  Number(width.value) *  Number(height.value) * PI / 6);
}

function computelength() {
  return Number(PSA.value) / (Number(PSAdensity.value) *  Number(width.value) *  Number(height.value) * PI / 6);
}

function computewidth() {
  return Number(PSA.value) / (Number(length.value) *  Number(PSAdensity.value) *  Number(height.value) * PI / 6);
}

function computeheight() {
  return Number(PSA.value) / (Number(length.value) *  Number(width.value) *  Number(PSAdensity.value) * PI / 6);
}

function computePSA() {
  return Number(PSAdensity.value) * (Number(length.value) *  Number(width.value) *  Number(height.value) * PI / 6);
}