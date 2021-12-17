


// const infoData =()=>{
// infoText.innerHTML = navigator.onLine;
//   let text;

//   let person = prompt("Bura adinizi daxil edin:", "");


//   if (person == null || person == "") {
//     text = "Xahis edirik adinizi daxil edin.";
//   } else {
//     text = "Salam, " + person + "! Bu gün necəsən?";
//   }
//   infoText.innerHTML = text;

// }

const infoButton = document.querySelector('button');
const infoText =  document.querySelector('p');


const infoData=()=>{
        infoText.innerHTML = new Date();
}
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_settimeout2
// clearInterval();
infoButton.addEventListener('click', setInterval(infoData, 1000));