const infoButton  = document.querySelectorAll("button")[0];
const infoButtonOne  = document.querySelectorAll("button")[1];
const  text = document.querySelector('p');
let myWindow;
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_loc_assign
// const myScreen = screen.availWidth;
// const myScreen = window.innerWidth;
// if (myScreen >= 700) {
//     infoButton.style.display = "none";
// }
// if (window.location.pathname == "/index.htm") {
//     alert("error");
// }

const infoFunct =()=>{
        // text.innerHTML =  window.innerWidth+" "+window.innerHeight;
         // window.open("https://google.com","","width=300px, height=400px");
        // window.close();
        // text.innerHTML = window.location.href;
        // text.innerHTML = window.location.hostname;
        // text.innerHTML = window.location.pathname;
        text.innerHTML = window.location.protocol;


    //    myWindow = window.open("","myWindow","width=300px, height=400px");
    //    myWindow.document.write("Hello<br>")
       
}
// const infoFunctOne =()=>{
//     myWindow.moveTo(1000, 100);                                  // Moves the new window   
//     myWindow.focus(); 
// }
infoButton.addEventListener('click',infoFunct);
// infoButtonOne.addEventListener('click',infoFunctOne);
