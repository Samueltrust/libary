const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result span');
const symbols = document.querySelectorAll('.symbol');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const negative = document.querySelector('.plus-minus'); 
const percent = document.querySelector('.percent');


let firstValue = "";
let secondValue = "";
let selectedSymbol = "";

for(let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value');
        if (selectedSymbol == "") {
        getFirstValue(atr); 
        } else {
        getSecondValue(atr);
        }
    })
}


function flashEffect() {
    // Add the "flash" class to the button
    document.querySelector('.click').classList.add('flash');

    // Remove the "flash" class after a short delay (500 milliseconds)
    setTimeout(function() {
      document.querySelector('button').classList.remove('flash');
    }, 500);
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
    if(selectedSymbol === 'add') {
        resultValue = parseFloat(firstValue) + parseFloat(secondValue);
    } else if (selectedSymbol === 'minus') {
        resultValue = parseFloat(firstValue) - parseFloat(secondValue);
    } else if (selectedSymbol === 'divide') {
        resultValue = parseFloat(firstValue) / parseFloat(secondValue);
    } else if (selectedSymbol === 'multiply') {
        resultValue = parseFloat(firstValue) * parseFloat(secondValue);
    }

    if (resultValue)
    result.innerHTML = resultValue;
    firstValue = resultValue;
    secondValue = "";
    
})

negative.addEventListener('click', () => {
    result.innerHTML = "";
    if(firstValue != "") {
        resultValue = -firstValue;
        firstValue = resultValue;
    }

    /*
    if(secondValue != "") {
        secondValue = -secondValue;
    } 
    */

    if(firstValue != "" && secondValue != "" && selectedSymbol != "") {
        resultValue = -resultValue;
    }

    result.innerHTML = resultValue;
});

percent.addEventListener('click', () => {
    result.innerHTML = "";
    if(firstValue != "") {
        resultValue = firstValue / 100;
        firstValue = resultValue;
    }

        /*
    if(secondValue != "") {
        secondValue = -secondValue;
    } 
    */
    
    if(firstValue != "" && secondValue != "" && selectedSymbol != "") {
        resultValue = resultValue / 100;
    }

    result.innerHTML = resultValue;
});

clear.addEventListener('click', () => {
    result.innerHTML = 0;

    firstValue = "";
    secondValue = "";
    selectedSymbol = "";
    resultValue = 0;
});
