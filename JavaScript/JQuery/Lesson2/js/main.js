// $(function(){
//     $("#flip").click(function(){
//     //   $("#panel").slideUp(1000);
//       $("#panel").slideToggle(3000,()=>{
//           document.querySelector("#myText").innerHTML = "Hello";
//       });
//     //   $("#panel").slideDown(1000);
//     });

//     $("button").click(function(){
//         $("#panel").stop();
//     })
//   });


// $(function() {
//     $("button").click(function(){
//         // $('h1').css({"color":"red","background":"black"});
//         $('h1').toggleClass("box");
//         // $('h1').addClass("box");
//     })
// })



const mode=()=>{
    document.querySelector('nav').attributes[0].value="navbar navbar-expand-lg navbar-dark bg-dark";
}
const modew=()=>{
    document.querySelector('nav').attributes[0].value="navbar navbar-expand-lg navbar-light bg-light";
}
// $(function() {
//     $(".btn").click(function(){
//       $('nav').toggleClass("navbar navbar-expand-lg navbar-dark bg-dark")
//     })
// })