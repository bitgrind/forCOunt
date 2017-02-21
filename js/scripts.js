
var countTo = 0;
var countBy = 0;

$(function(){



   console.log("Start is working")
  $(".numberTaker").submit(function(){
    event.preventDefault();
    countTo = parseInt($("#number1").val());
    countBy = parseInt($("#number2").val());
    if(countTo <= 0){
      countTo = countTo * -1;
      for (var i = 0; i<=countTo; i += countBy ) {
        $(".output").append("<li>-"+ i + "</li>");
      }
    } else if (countTo < countBy) {

      alert("Number to count to must be greater than number to count by!");
    } else {
      for (var i = 0; i<=countTo; i += countBy ) {
        $(".output").append("<li>"+ i + "</li>");
      }
    }


  });



});
