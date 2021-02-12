//Global Variables
var numberOfInputs;
var result = document.querySelector(".result");

//Event Listeners - select menu and button
$("select").click(function(){
  $("input").remove();
  numberOfInputs = $(this).children("option:selected").val();
  addInputFields(numberOfInputs);
});

$("button").on("click", function(){
  calculateAverage(numberOfInputs);
});

//Add input fields depending on how many number user wants to find average of
function addInputFields(inputs){
  for (var i = 0; i < inputs; i++){
    var input = document.createElement("input");
    var body = $(".input");
    body.append(input);
  }
}

//Takes the sum of the user input values and divides by number of values
function calculateAverage(inputs){
  let value = [];
  let total = 0;
  for (var i = 0; i < inputs; i++){
     value[i] = $("input")[i].value;
     total += new Number(value[i]);
  }
  let average = total/inputs;
  result.innerHTML = "The average is " + average;
}
