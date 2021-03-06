//backend

//the eponymous function itself!
var pingPong = function(number) {
  //create an empty array to be added to in the loop
  numbers = [];
  //populate the array with (number) elements
  for (i=1; i <= number; i++) {
    //multiples of 15 become "Ping! Pong!"
    if (i % 15 === 0) {
      numbers.push("!Ping Pong");
    //multiples of 3 become "ping"
    } else if (i % 3 === 0) {
      numbers.push("ping");
    //multiples of 5 become "pong"
    } else if (i % 5 === 0) {
      numbers.push("pong");
    //all other numbers are simply added in sequence
    } else {
      numbers.push(i);
    }
  };
  //return the whole array
  return numbers;
};
//frontend

//Once html document returns ready, attach event listener to the form
$(document).ready(function() {
  $("form#inputForm").submit(function() {
    //don't let the form reload the page
    event.preventDefault();
    //take the number box value
    var userNum = $("input#numberIn").val();
    //if there's no valid input, alert user and stop
    if (!userNum || userNum < 0) {
      alert("Please enter a whole number.")
    //if there is valid input, onward!
    } else {
      //run function pingPong on input
      outputs = pingPong(userNum);
      //Delete existing list if this isn't the first submission
      $("#outputList").empty();
      //create an HTML list item for each entry in the outputs array
      for (i = 0; i < outputs.length; i++) {
          $("#outputList").append("<li>" + outputs[i] + "</li");
      };
    };
  });
});
