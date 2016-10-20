$(document).ready(function (){

    var age = parseInt($("#age").val());
    var gender = $("#gender").val();
    var hobby1 = $("#hobby1").val();
    var hobby2 = $("#hobby2").val();
    var tempValue = "";

    $("form#userInput").submit(function(event){

      console.log(hobby1);
      event.preventDefault();
    });

    $("#hobby1").click(function() {
      tempValue = hobby1;
      $("#hobby2 ."+hobby1).show();
    }).change(function(){
        hobby1 = $(this).val().toLowerCase();
        console.log($(this).val());
        $("#hobby2 ."+hobby1).hide();
        return hobby1;
        // console.log("function1");
    }, function() {
      if (tempValue===hobby1) {
        $("#hobby2 ."+hobby1).hide();
      }
    });

});

// function {
//   find opposite list
//   hide the element selected by list
// }
