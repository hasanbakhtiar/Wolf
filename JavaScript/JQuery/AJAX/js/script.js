// $(function(){
//     $("button").click(function(){
//       $("p").load("data/info.txt .a");
//     });
//   });


$("button").click(function(){
    $("p").load("data/info.txt", function(responseTxt, statusTxt, xhr){
        if(statusTxt == "success")
         $('h1').html("Məlumat uğurla yükləndi")
        if(statusTxt == "error")
          alert("Xeta: " + xhr.status + ": " + xhr.statusText);
      } );
  });