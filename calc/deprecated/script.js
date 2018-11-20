const numbers = document.getElementsByClassName('number');
const operators = document.getElementsByClassName('operator');
const equal = document.getElementById('equal');
const three = document.getElementById('three');
const inputDisplay = document.querySelector('input');
const cancel = document.getElementById('cancel');
const calcInteraction = document.getElementById('calc-body');
let numberEntered = inputDisplay.value;
let ongoingCalc = inputDisplay.value;
let result;
let resetAfterEqual;
let operatorSelected;
let decimal;


    //function backToOrange() {
    //    for (var i = 0; i <= operators.length; i += 1) {
    //        operators[i].style.backgroundColor = "orange";
    //    }
    //}

//CALC INTERATCION EVENT LISTENER AND HANDLER
    calcInteraction.addEventListener('click', (e) => {
        if (e.target.className == 'btn number' && resetAfterEqual) {
            inputDisplay.value = '';
            inputDisplay.value += e.target.innerHTML;
            resetAfterEqual = false;
        } else if (e.target.className == 'btn number decimal' && resetAfterEqual) {
            inputDisplay.value += 0 + e.target.innerHTML;
            resetAfterEqual = false;
            decimal = true;
            operatorSelected = false;
        } else if (e.target.className == 'btn number decimal' && operatorSelected) {
            inputDisplay.value += 0 + e.target.innerHTML;
            operatorSelected = false;
            decimal = true;
        } else if (e.target.className == 'btn number decimal') {
            inputDisplay.value += e.target.innerHTML;
            decimal = true;
        } else if (e.target.innerHTML == '.' && decimal) {
            inputDisplay.value += '';
        } else if (e.target.className == 'btn number') {
            inputDisplay.value += parseFloat(e.target.innerHTML);
        } else if (e.target.className == 'btn operator ophover') {
            e.target.style.backgroundColor = '#e59400';
            ongoingCalc += inputDisplay.value + e.target.innerHTML;
            console.log(ongoingCalc);
            inputDisplay.value = '';
            operatorSelected = true;
        } else if (e.target.className == 'btn helper ac') {
            inputDisplay.value = 0;
            inputDisplay.textContent = 'hello';
            ongoingCalc = '';
        } else if (e.target.className == 'btn equal') {
            ongoingCalc += inputDisplay.value;
            console.log(ongoingCalc);
            console.log(eval(ongoingCalc));
            inputDisplay.value = eval(ongoingCalc);
            ongoingCalc = '';
            resetAfterEqual = true;
            decimal = false;
        }
    });




//non accetta decimali ancora
//attivare il backspace
//limitare il numero massimo di caratteri nel display
//impedire il riempimento del display a destra
//sono stati aggiunti li stili interattivi per colorare i tasti operatori schiacciati e i numeri in mouseover. I tasti operatori rimangono pero arancione scuro quando si pigiano gli altri tasti e quindi l'operatore non è piu attivo. Se risetto i pulsanti operatori al loro originale arancione nell'event handler quando si spingono altri pulsanti poi peró quando riattivati perdono lo stile in mousehover dato nel CSS
