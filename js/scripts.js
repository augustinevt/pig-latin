///business logic

function checkVowel(word) {
  var vowels = ['a','e','i','o','u'];
  var match = [false, false]
  var firstLetter = word.charAt(0);
  var secondLetter = word.charAt(1);
  var thirdLetter = word.charAt(2);
  // debugger;
  vowels.forEach(function(vowel) {
    if ((firstLetter === "q") && (secondLetter === "u")){
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

  var firstTwoLetters;
  var firstThreeLetters;
  var firstLetter;
  var ayResult;
  var restOfWord;

  if (match[0] === "q-case"){
    firstTwoLetters = word.slice(0,2);
    restOfWord = word.substring(2);
    ayResult = restOfWord.concat(firstTwoLetters + "ay");
  } else if (match[1] === "q-case"){
    firstThreeLetters = word.slice(0,3);
    restOfWord = word.substring(3);
    ayResult = restOfWord.concat(firstThreeLetters + "ay");
  } else if ((match[0] === false) && (match[1] === false)){
    firstTwoLetters = word.slice(0,2);
    restOfWord = word.substring(2);
    ayResult = restOfWord.concat(firstTwoLetters + "ay");
  } else if (match[0] === false){
    firstLetter = word.charAt(0);
    restOfWord = word.substring(1);
    ayResult = restOfWord.concat(firstLetter + "ay");
  } else {
    ayResult = word.concat("ay");
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

    $(".output").text(addAy(userInput, result));

    $("#result").show();


  });
});
