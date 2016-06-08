///business logic

function checkVowel(word) {
  var vowels = ['a','e','i','o','u'];
  var match = [false, false]
  var firstLetter = word.charAt(0);
  var secondLetter = word.charAt(1);
  var thirdLetter = word.charAt(2);
  debugger;
  vowels.forEach(function(vowel) {
    console.log(vowel + "  " + word.charAt(0) )
    if ((firstLetter === "q") && (secondLetter === "u")){
      alert('qu!');
      match[0] = "q-case";
    } else if ((secondLetter === "q") && (thirdLetter === "u")){
      match[1] = "q-case";
    } else if (firstLetter === vowel) {
      alert('worked!');
      match[0] = true;
    } else if (secondLetter === vowel){
      alert('worked!');
      match[0] = true;
    }
  });
  return match;
}

function addAy(word, match) {
  if (match[0] === "q-case"){
    console.log("first two letters are qu");
  } else if (match[1] === "q-case"){
    console.log("second two letters are qu");

  } else if (match[0] === false){
    var firstLetter = word.charAt(0);
    var restOfWord = word.substring(1);
    var ayResult = restOfWord.concat(firstLetter + "ay");
    console.log(ayResult);
  } else {
    var ayResult = word.concat("ay");
    console.log(ayResult);
  }
  return ayResult;
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
