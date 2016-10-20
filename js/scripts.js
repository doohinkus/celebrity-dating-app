$(document).ready(function (){
    $("form#userInput").submit(function(event){
      event.preventDefault();
      var age = parseInt($("#age").val());
      var gender = $("#gender").val();
      var hobby1 = $("#hobby1").val();
      var hobby2 = $("#hobby2").val();
      var selection = getCheckedCheckboxesFor('hobby')

      if ((gender === "Male") && (selection.indexOf("Photography")===0)) {
        $("#ricci").show();
      }
    });

    function getCheckedCheckboxesFor(checkboxName) {
    var checkboxes = document.querySelectorAll('input[name="' + checkboxName + '"]:checked'), values = [];
    Array.prototype.forEach.call(checkboxes, function(el) {
        values.push(el.value);
    });
    // console.log(values);
    }
    var array = [2, 7, 7, 2];
    console.log(array.indexOf(2))
});









// $("#hobby1").click(function() {
//   tempValue = hobby1;
//   $("#hobby2 ."+hobby1).show();
// }).change(function(){
//     hobby1 = $(this).val().toLowerCase();
//     // console.log("function 1!!");
//     $("#hobby2 ."+hobby1).hide();
//     return hobby1;
// });
