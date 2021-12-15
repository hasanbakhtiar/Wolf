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
    paragraph.innerText = inputFiled.value;
   toDoContainer.appendChild(paragraph);
    inputFiled.value="";
    paragraph.addEventListener('click', ()=>{
        paragraph.style.color = "red";
        paragraph.style.textDecoration = 'line-through'
    })

    paragraph.addEventListener('dblclick', ()=>{
        toDoContainer.removeChild(paragraph)
    })
}


addToDoButton.addEventListener('click', addElement)