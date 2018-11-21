const numbers = document.getElementsByClassName('number');
const operators = document.getElementsByClassName('operator');
const equal = document.getElementById('equal');
const three = document.getElementById('three');
const inputDisplay = document.getElementById('display');
const cancel = document.getElementById('cancel');
const calcInteraction = document.getElementById('calc-body');
let numberEntered = inputDisplay.innerHTML;
let ongoingCalc = inputDisplay.innerHTML;
//BOOLEANS
let result;
let resetAfterEqual;
let operatorSelected;
let decimal = false;
let btnNumberClicked;


//CALC INTERATCION EVENT LISTENER AND HANDLER
calcInteraction.addEventListener('click', (e) => {
    //NUMBERS
    if (e.target.className == 'btn number') {
        if (!decimal) {
            if (inputDisplay.innerHTML == 0 || resetAfterEqual === true) {
                inputDisplay.innerHTML = e.target.innerHTML;
                resetAfterEqual = false;
            }
        } else if (inputDisplay.innerHTML != 0) {
            inputDisplay.innerHTML += e.target.innerHTML;
            resetAfterEqual = false;
        } else if (decimal) {
            if (inputDisplay.innerHTML == 0 || resetAfterEqual === true) {
                inputDisplay.innerHTML += e.target.innerHTML;
                resetAfterEqual = false;
            }
        } else if (inputDisplay.innerHTML != 0) {
            inputDisplay.innerHTML += e.target.innerHTML;
            resetAfterEqual = false;
        }
    }

    //DECIMALS
    if (e.target.className == 'btn number decimal') {
        if (decimal) {
            inputDisplay.innerHTML += '';
        } else {
            inputDisplay.innerHTML += e.target.innerHTML;
            decimal = true;
            resetAfterEqual = false;
            operatorSelected = false;
        }
    }

    //OPERATORS
    if (e.target.className == 'btn operator ophover') {
        //        e.target.style.backgroundColor = '#e59400';
        ongoingCalc += inputDisplay.innerHTML + e.target.innerHTML;
        inputDisplay.innerHTML = 0;
        operatorSelected = true;
        decimal = false;
    }

    //HELPERS
    else if (e.target.className == 'btn helper ac') {
        inputDisplay.innerHTML = 0;
        ongoingCalc = '';
        decimal = false;
    }

    //EQUAL
    else if (e.target.className == 'btn equal') {
        ongoingCalc += inputDisplay.innerHTML;
        inputDisplay.innerHTML = eval(ongoingCalc);
        ongoingCalc = '';
        resetAfterEqual = true;
        decimal = false;
        operatorSelected = false;
    }
});

//APPUNTI
//Calcoli in decimali sbacliati avvolte di 0.01 (controllare)
//attivare il backspace
//limitare il numero massimo di caratteri nel display
//impedire il riempimento del display a destra
//sono stati aggiunti li stili interattivi per colorare i tasti operatori schiacciati e i numeri in mouseover. I tasti operatori rimangono pero arancione scuro quando si pigiano gli altri tasti e quindi l'operatore non è piu attivo. Se risetto i pulsanti operatori al loro originale arancione nell'event handler quando si spingono altri pulsanti poi peró quando riattivati perdono lo stile in mousehover dato nel CSS
