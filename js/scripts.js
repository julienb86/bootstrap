$(document).ready(function(){

$('.carousel').carousel({interval: 2000});

$("#carouselButton").click(function(){
 if ($("#carouselButton").children("i").hasClass("fa-pause")){
   $("#mycarousel").carousel("pause");
   $("#carouselButton").children("i").removeClass("fa-pause");
   $("#carouselButton").children("i").addClass("fa-play");
 }
  else if ($("#carouselButton").children("i").hasClass("fa-play")){
    $("#mycarousel").carousel("cycle");
    $("#carouselButton").children("i").removeClass("fa-play");
    $("#carouselButton").children("i").addClass("fa-pause");
}
});
//toggle for the reservation form
$("#reserve-button").click(function() {
  $('#reservation').modal('toggle');
});
$("#close-button").click(function () {
  $("#reservation").modal('hide');
});

//toggle for the login form
$("#login-button").click(function () {
$("#loginModal").modal('toggle');
});
$("#close-login-button").click(function () {
$("#loginModal").modal('hide');
});

});
