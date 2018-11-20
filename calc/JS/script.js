const numbers = document.getElementsByClassName('number');
const operators = document.getElementsByClassName('operator');
const equal = document.getElementById('equal');
const three = document.getElementById('three');
const inputDisplay = document.getElementById('display');
const cancel = document.getElementById('cancel');
const calcInteraction = document.getElementById('calc-body');
let numberEntered = inputDisplay.value;
let ongoingCalc = inputDisplay.innerHTML;
let result;
let resetAfterEqual;
let operatorSelected;
let decimal;
let btnNumberClicked;





//function backToOrange() {
//    for (var i = 0; i <= operators.length; i += 1) {
//        operators[i].style.backgroundColor = "orange";
//    }
//}

//CALC INTERATCION EVENT LISTENER AND HANDLER
calcInteraction.addEventListener('click', (e) => {

    if (e.target.className == 'btn number') {
        if (inputDisplay.innerHTML == 0) {
            inputDisplay.innerHTML = e.target.innerHTML;
        } else if (inputDisplay.innerHTML != 0) {
            inputDisplay.innerHTML += e.target.innerHTML;
        } else if (resetAfterEqual === true) {
            inputDisplay.innerHTML = 0
        }
    }
    //    if (inputDisplay.innerHTML != 0) {
    //        inputDisplay.innerHTML += e.target.innerHTML;
    //    }
    //    if (resetAfterEqual === true) {
    //        inputDisplay.innerHTML = 0
    //    } else if (e.target.className == 'btn number' && resetAfterEqual) {
    //        inputDisplay.innerHTML = '';
    //        inputDisplay.innerHTML = e.target.innerHTML;
    //        resetAfterEqual = false;
    //        btnNumberClicked = true;
    //    } else if (e.target.className == 'btn number' && resetAfterEqual === false) {
    //        inputDisplay.innerHTML += e.target.innerHTML;
    //        btnNumberClicked = true;
    //    }
    //    else if (e.target.className == 'btn number') {
    //        inputDisplay.innerHTML = '';
    //        inputDisplay.innerHTML += e.target.innerHTML;
    //    }
    //DECIMAL BUTTON
    if (e.target.className == 'btn number decimal' && resetAfterEqual) {
        inputDisplay.innerHTML = 0;
        inputDisplay.innerHTML += e.target.innerHTML;
        resetAfterEqual = false;
        decimal = true;
        operatorSelected = false;
    } else if (e.target.className == 'btn number decimal' && operatorSelected && inputDisplay.innerHTML == 0) {
        inputDisplay.innerHTML += e.target.innerHTML;
        operatorSelected = false;
        decimal = true;
    } else if (e.target.className == 'btn number decimal') {
        inputDisplay.innerHTML += e.target.innerHTML;
        decimal = true;
    } else if (e.target.className == 'btn number decimal' && decimal) {
        inputDisplay.innerHTML += '';
        decimal = true;
    }  else if (e.target.className == 'btn operator ophover') {
        e.target.style.backgroundColor = '#e59400';
        ongoingCalc += inputDisplay.innerHTML + e.target.innerHTML;
        console.log(ongoingCalc);
        inputDisplay.value = '';
        operatorSelected = true;
    } else if (e.target.className == 'btn helper ac') {
        inputDisplay.innerHTML = 0;
        ongoingCalc = '';
    } else if (e.target.className == 'btn equal') {
        ongoingCalc += inputDisplay.innerHTML;
        console.log(ongoingCalc);
        console.log(eval(ongoingCalc));
        inputDisplay.innerHTML = eval(ongoingCalc);
        ongoingCalc = '';
        resetAfterEqual = true;
        decimal = false;
    }
});

const display = document.getElementById('notebook');
const notes = document.getElementById('notes');

notes.addEventListener('click', (e) => {
    display.innerHTML += e.target.innerHTML;
    console.log(e.target.innerHTML);
    console.log(display.innerHTML);
});


//non accetta decimali ancora
//attivare il backspace
//limitare il numero massimo di caratteri nel display
//impedire il riempimento del display a destra
//sono stati aggiunti li stili interattivi per colorare i tasti operatori schiacciati e i numeri in mouseover. I tasti operatori rimangono pero arancione scuro quando si pigiano gli altri tasti e quindi l'operatore non è piu attivo. Se risetto i pulsanti operatori al loro originale arancione nell'event handler quando si spingono altri pulsanti poi peró quando riattivati perdono lo stile in mousehover dato nel CSS
