//backend
var pingPong = function(number) {
  numbers = [];
  for (i=1; i <= number; i++) {
    numbers.push(i);
  }
  return numbers;
};
//frontend

$(document).ready(function() {
  $("form#inputForm").submit(function() {
    event.preventDefault();
    debugger;
    var userNum = parseInt($("input#numberIn").val());
    if (!userNum) {
      alert("Please enter a number.")
    } else {
      outputs = pingPong(userNum);
      console.log(outputs, outputs.length);
      for (i = 0; i < outputs.length; i++) {
          $("#outputList").append("<li>" + outputs[i] + "</li");
      };
    };
  });
});
