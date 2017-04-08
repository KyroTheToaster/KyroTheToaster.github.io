function getStats() {
  var x = document.getElementById("portfolioTextArea").value;
  var wordCounter = 1;
  var sentenceCounter = 0;
  var avgWordsPerSentenceCounter = 0;
  var spaceCounter = 0;
  for (var i = 0; i <= x.length; i++) {
    if (x[i] == " ") {
      wordCounter++;
      spaceCounter++;
    }
    if (x[i] == "." || x[i] == "?" || x[i] == "!") {
      sentenceCounter++;
    }
    avgWordsPerSentenceCounter = wordCounter/sentenceCounter;
  }
  document.getElementById("textAreaResults1").innerHTML =
  "There is " + wordCounter + " word(s) in this text.";
  document.getElementById("textAreaResults2").innerHTML =
  "There is " + sentenceCounter + " sentence(s) in this text.";
  document.getElementById("textAreaResults3").innerHTML =
  "There is an average of " + avgWordsPerSentenceCounter +
  " word(s) per sentence in this text.";
  document.getElementById("textAreaResults4").innerHTML =
  "There is " + spaceCounter + " space(s) in this text.";
}
