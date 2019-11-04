
var works = ["design-img", "dev-img", "manage-img"];
var workDesc = ["design", "dev", "manage"];
var projects = [
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh",
  "eighth"
];

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
  });$("#dev-img").click(function() {
    $(this).hide("1000");
    $("#dev").show();
  });
  $("#dev").click(function() {
    $(this).hide(1000);
    $("#dev-img").show();
  });
  $("#manage-img").click(function() {
    $(this).hide("1000");
    $("#manage").show();
  });