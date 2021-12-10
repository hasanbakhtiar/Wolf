const box = document.querySelector('.box');
const button = document.querySelector("button");

function navBar() {
    box.attributes[0].value = 'box1';
    
}

button.addEventListener('click',navBar);



function callNavBar() {
    box.attributes[0].value = 'box';
    
}
button.addEventListener('dblclick',callNavBar);
