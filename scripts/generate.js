var words = ["Ass","Penis","Dick","Cock","Sucker","Slayer","Testicle","Chunky","Salty","Sticky","Square"];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var usernames = {
  generate: function(amount, numberList) {
    var names = "";
    var namess = [];
    for (let i = 0; i < amount; i++) {
      var r1 = getRandom(0, words.length);
      var r2 = getRandom(0, words.length);
      var word2 = words[r1];
      var word1 = words[r2];
      var n = getRandom(0, numbers.length);
      var number = numbers[n];
      if (numberList === true) {
        var generatedName = word2 + word1 + number;
        var nametoAdd = (i + 1 + ". ") + generatedName;
        namess.push(nametoAdd);
      } else {
        var generatedName = word2 + word1 + number;
        var nametoAdd = generatedName;
        namess.push(nametoAdd);
      }
    }
    return namess;
  }
};