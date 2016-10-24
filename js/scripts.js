$(document).ready(function (){
    $("form#userInput").submit(function(event){
      event.preventDefault();
      var age = parseInt($("#age").val());
      var gender = $("#gender").val();
      var hobby = $("#hobby").val();
      var digits = /^\d+$/g;
      var name = "";

      $("#hutchenson, #beiber, #grande, #cyrus, #levine, #adele, #stephanie, #timberlake, #mystery").hide();
      //age verification
      if (!$("#age").val().match(digits)){
        $("p#message").text("Please enter a number for your age.").fadeIn();
      }else{

        //logic for celebrity
        if (age < 18 && gender === "Female" && (hobby === "fashion" || hobby === "photo")){
          name = "Josh Hutchenson";
          $("#hutchenson").fadeIn();
        }
        else if (age < 18 && gender === "Female" && (hobby === "mma" || hobby === "sk8")){
          name = "Justin Beiber";
          $("#beiber").fadeIn();
        }
        else if (age < 18 && gender === "Male" && (hobby === "fashion" || hobby === "photo")){
          name = "Ariana Grande";
          $("#grande").fadeIn();
        }
        else if (age < 18 && gender === "Male" && (hobby === "mma" || hobby === "sk8")){
          name = "Miley Cyrus";
          $("#cyrus").fadeIn();
        }
        else if (age >= 18 && gender === "Female" && (hobby === "fashion" || hobby === "photo")){
          name = "Justin Timberlake";
          $("#timberlake").fadeIn();
        }
        else if (age >= 18 && gender === "Female" && (hobby === "mma" || hobby === "sk8")){
          name = "Adam Levine";
          $("#levine").fadeIn();
        }
        else if (age >= 18 && gender === "Male" && (hobby === "fashion" || hobby === "photo")){
          name = "Adele";
          $("#adele").fadeIn();
        }
        else {
          name = "Gwen Stephanie";
          $("#stephanie").fadeIn();
        }
        $("p#message").text(name);
  }

console.log(age, " ", gender, " ", hobby);

    });
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
