let display = document.getElementsByClassName('notebook-display');
let key = document.getElementsByClassName('keyboard');

key.addEventListener('click', (e) => {
    display.innerHTML += e.target.innerHTML;
    console.log(e.target.innerHTML);
    console.log(display.innerHTML);
});

////alert('hello');
//
//key.addEventListener('click', (e) => {
//    let display = document.getElementsByClassName('notebook-display');
//    let keyboard = document.getElementsByClassName('keyboard');
//    display.innerHTML += e.target.innerHTML;
//    console.log(e.target.innerHTML);
//    console.log(display.innerHTML);
//});
//
////key.addEventListener('click', (e) => {
////    alert('hello');
////});