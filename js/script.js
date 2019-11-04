
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
  });
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
  $("#manage").click(function() {
    $(this).hide(1000);
    $("#manage-img").show();
  });
  projects.forEach(function(project) {
    $("#" + project).hover(
      function() {
        $(this).removeClass();
        $(this).addClass("overlay1", project + "-box");
        $("." + project + "-box").show();
      },
      function() {
        $(this).removeClass();
        $("." + project + "-box").hide();
      }
    );
  });
});
$("form").submit(function() {
  var name = $("input#name").val();
  $("#sender-name").text(name);
  $("#exampleModal").modal("toggle");
});
});
