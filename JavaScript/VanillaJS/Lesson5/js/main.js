// Array
// new Array();

// const infoData = [];//, infoArray = [true,5];
// infoData[0] = "Table";
// infoData[1] = "Table1";
// infoData[2] = "Table2";
// infoData[3] = "Table3";
// // infoData[3] = "Mouse";
// // infoData["myArray"] = "Mouse";
// const Sunny = "Sun";
// const infoData = ["Table", "Pen",[true,5,["Snow",Sunny],"Dark"],10];


// console.log(infoData[2][2][1]);




// for( x in infoData){
//     console.log(infoData[x]);
// }

// const infoObj = {
//     name:"name"
// }


// const car={
//         name:"Mercedes",
//         model:"S500",
//         salon:{
//             wheel:"White",
//             seat:"Green",
//             seatLenght: 2,
//             newSalon:["seat", 4, 'red',{
//                 name:"Mazi"
//             }]
//         }
// }


// console.log(car.salon.newSalon[3].name);



// (function infoFunc (){
//     console.log("Hello my new function");
// })()

// const infoFunc = function (){
//     console.log("Hello my new function");
// }

// infoFunc();

// function infoFunc(a=1,b=4) {
//     return a+b;
// }

// console.log(infoFunc(10,5));


const newCar = {
    name:"Mercedes",
    model:"S500",
    carYear:function (oldYear){
        return new Date().getFullYear() - oldYear;
    }
}

// console.log(newCar.carYear(1995));



let a = "Hello";

let b = " Javascript"
console.log(eval("a+b"));





