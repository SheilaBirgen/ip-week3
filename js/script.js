
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
     $("#submission").submit(function(event){
    var data_1 = $("input:first").val();
    var data_2 = $("input#mail").val();
    if(data_1 && data_2 != ""  ){
      $(".message").text("Thank you " + data_1 + " Your message has been received");
      $(".message").removeClass("error");
      $(".message").addClass("success");
    }else{
      $(".message").text("Error!!! Please fill in all the details correctly");
      $(".message").addClass("error");
    }
    event.preventDefault(); 
  });     
});
