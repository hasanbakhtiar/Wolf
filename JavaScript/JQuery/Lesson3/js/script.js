
// $(function(){
//   $("button").click(function(){
//     $("h1").slideUp(2000).slideDown(2000).css("color", "red");
//   });
// });
const ferid = $.noConflict();


ferid(function(){
    ferid("button").click(function(){
    //   alert("Text:"+$("h1").text());
    //   alert("Text:"+$("input").val());
    //   alert("Text:"+$("a").attr("class"));
    // $("p").text($('input').val());
    // $("p").html("<b>Hello Front</b>");
    // $('a').attr({
    //     "href":"https://youtube.com"
    // })

    // $('p').append($('input').val());
    // $('p').prepend($('input').val());
    // $('p').after($('input').val());
    // $('p').before($('input').val());
    // $('.container').empty();
    ferid('.container').remove();
  });
});