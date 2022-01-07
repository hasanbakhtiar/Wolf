
const lightBtn = document.querySelector('.light');
const darkBtn = document.querySelector('.dark');
const nav = document.querySelector('nav');




const darkFunc = ()=>{
    const modeOne = nav.attributes[0].value = 'navbar navbar-expand-lg navbar-dark bg-dark';
    localStorage.setItem('mode', modeOne);
}


const lightFunc = ()=>{
    const modeTwo = nav.attributes[0].value = 'navbar navbar-expand-lg navbar-light bg-light';
    localStorage.setItem('mode', modeTwo);
    
}



lightBtn.addEventListener('click', lightFunc);
darkBtn.addEventListener('click', darkFunc);
nav.attributes[0].value = localStorage.getItem('mode');





// localStorage.setItem('name', 'muhabbat');
// localStorage.setItem('surname','bagirov');
// const myText = document.querySelector('h1');

// myText.innerHTML = localStorage.getItem('name');

// localStorage.removeItem('name');
// localStorage.clear();


