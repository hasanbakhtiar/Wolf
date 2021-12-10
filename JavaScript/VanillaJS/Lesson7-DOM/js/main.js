// // // ()=>{} Arrow function


// // const button = document.querySelector('button');
// // const box = document.querySelector('.box');

// // const infoData =()=>{
// //     box.style.backgroundColor = "green";
// //     // box.style.position="absolute";
// //     // box.style.left ="100px";
// //     box.style.transition = "1s";

// // }

// // button.addEventListener('mousedown', infoData);


// const button = document.querySelector('button');
// const myText = document.querySelector('p');


// const textFunc =()=>{
//    const inputText =  document.querySelector('input').value;
//    myText.appendChild(inputText);
// }


// button.addEventListener('click', textFunc)




let addToDoButton = document.querySelector('#addToDo');
let inputFiled = document.querySelector('#inputField');
let toDoContainer = document.querySelector('#toDoContainer');

const addElement =()=>{
    let paragraph = document.createElement('li');
    // <li></li>
    paragraph.innerText = inputFiled.value;
    // <li>dhfgsdfghsd</li>
   toDoContainer.appendChild(paragraph);
//    <ol>
//        <li>dhfgsdfghsd</li>
//        <li>dhfgsdfghsd</li>
//        <li>dhfgsdfghsd</li>
//        <li>dhfgsdfghsd</li>
//        <li>dhfgsdfghsd</li>
//    </ol>
    inputFiled.value="";
}


addToDoButton.addEventListener('mouseover', addElement)