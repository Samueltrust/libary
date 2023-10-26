const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result span');
const symbols = document.querySelectorAll('.symbol');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
/* const negative = document.querySelector('.negative'); */
const percent = document.querySelector('.percent');


let firstValue = "";
let secondValue = "";
let selectedSymbol = "";

for(let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value');
        getFirstValue(atr);
        getSecondValue(atr);
    })
}

function getFirstValue(el) {
    result.innerHTML = "";
    firstValue += el;
    result.innerHTML = firstValue;
}

function getSecondValue(el) {
    if(firstValue != "" && selectedSymbol != "") {
    secondValue += el;
    result.innerHTML = secondValue;
    secondValue = +secondValue;
    }
}

function getSymbol(el) {
    for(let i = 0; i < symbols.length; i++) {
        symbols[i].addEventListener('click', (e) => {
            selectedSymbol = e.target.getAttribute('value');
        })
    }
}
getSymbol();

equals.addEventListener('click', () => {
    result.innerHTML = "";
    if(selectedSymbol === '+') {
        resultValue = firstValue + secondValue;
    } else if (selectedSymbol === '-') {
        resultValue = firstValue - secondValue;
    } else if (selectedSymbol === '/') {
        resultValue = firstValue / secondValue;
    } else if (selectedSymbol === '*') {
        resultValue = firstValue * secondValue;
    }
    result.innerHTML = resultValue;
    
})
