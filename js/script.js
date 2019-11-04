$(document).ready(function() {
  $("#design-img").click(function() {
    $(this).hide(2000);
    $("#design").show(2000);
  };
  $("#design").click(function() {
    $(this).hide(2000);
    $("#design-img").show(2000);
  });
  $("#dev-img").click(function() {
    $(this).hide("1000");
    $("#dev").show();
  });