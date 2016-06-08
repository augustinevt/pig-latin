///business logic

function checkVowel(word) {
  var vowels = ['a','e','i','o','u'];
  var match = false;
  vowels.forEach(function(vowel) {
    console.log(vowel + "  " + word.charAt(0) )
    if (word.charAt(0) === vowel) {
      alert('worked!');
      match = true;
    }
  });
  return match;
}

function addAy(word, match) {
  if (match === false){
    var firstLetter = word.charAt(0);
    var restOfWord = word.substring(1);
    var ayResult = restOfWord.concat(firstLetter + "ay");
    console.log(ayResult);
  }
}


///user interface logic
$(document).ready(function(){
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();

    var userInput = $("input#input").val();

    var result = checkVowel(userInput);

    addAy(userInput, result);

    // debugger;

    $(".output").text(result);

    $("#result").show();


  });
});
