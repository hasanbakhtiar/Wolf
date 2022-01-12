const darkBtn = document.querySelector('.dark');
const lightBtn = document.querySelector('.light');
const nav  = document.querySelector('nav');

const dark =()=>{
        const modeOne = nav.attributes[0].value = "navbar navbar-expand-lg navbar-dark bg-dark"
        localStorage.setItem('mode',modeOne);
}


const light =()=>{
    const modeTwo = nav.attributes[0].value = "navbar navbar-expand-lg navbar-light bg-light";
    localStorage.setItem('mode',modeTwo);

}

darkBtn.addEventListener('click', dark);
lightBtn.addEventListener('click', light);
nav.attributes[0].value = localStorage.getItem('mode');