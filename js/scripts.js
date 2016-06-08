$(document).ready(function(){
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();

    var userInput = $("input#input").val();
    var result = userInput;

    $(".output").text(result);

    $("#result").show();


  });
});
