// DOM 
// Documnet Object Model

// for(let a = 0; a<3; a++){
//     document.getElementsByTagName('p')[a].innerHTML = "JavaScript"
// }

    // document.getElementsByTagName('p')[0].innerHTML = "JavaScript"
    // document.getElementsByClassName('myLink')[0].innerHTML = "JavaScript"
    // document.getElementsByClassName('myLink')[0].innerHTML = "JavaScript"
    // document.getElementById('myColor').innerHTML = 'Green';
    // document.querySelectorAll('.myLink')[0].innerHTML = 'Green';


    // function myFunc(){
    //     let a = 0;
    //     while (a<3) {
    //     document.querySelectorAll('p')[a].innerHTML = "JavaScript";
    //        a++; 
    //     }
    // }

    function myFunc(){
       
        document.querySelector('a').attributes[0].value = "displayNone"

    }


    function myBlock(){
        document.querySelector('a').innerHTML = "Youtube";
        document.querySelector('a').attributes[1].value = "https://youtube.com"
        document.querySelector('a').attributes[0].value ="displayBlock green";
    }


