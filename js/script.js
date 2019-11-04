$(document).ready(function() {
  $("#design-img").show();
  $("#design-img").click(function() {
    $("#design-img").hide();
    $("#design-p").show();
  });
  $("#design-p").click(function() {
    $("#design-p").hide();
    $("#design-img").show();
  });
  $("#dev-img").click(function() {
    $("#dev-img").hide();
    $("#dev-p").show();
  });
  $("#dev-p").click(function() {
    $("#dev-p").hide();
    $("#dev-img").show();
  });
  $("#product-img").click(function() {
    $("#product-img").hide();
    $("#product-p").show();
  });
  $("#product-p").click(function() {
    $("#product-p").hide();
    $("#product-img").show();
  });
  $(".btnsend").click(function(event) {
    event.preventDefault();
    var user = document.getElementById("name").value;
    alert("Hello there " + user + " your message has been received. Thank you");
  });
});
