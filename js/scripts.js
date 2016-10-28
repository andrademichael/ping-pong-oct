//backend
var pingPong = function(number) {
  numbers = [];
  // for (i=0; i<number.length)
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
      for (i=0; i < outputs.length; i++) {
          $("#outputList").append("<li>" + outputs[i] + "</li");
      };
    };
  });
});
