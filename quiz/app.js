function myFunction() {
  document.getElementById ("triviaIniciar").style.visibility = "visible";
  }
function check(){
var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var correct = 0
var name = document.getElementById("name").value;

if (question1 == "rebeccaNoraBunch") {
  correct ++;
}
if (question2 == "Emory") {
  correct ++;
}
if (question3 == "borderline") {
  correct ++;
}

var messages = ["¡Impresionante! Sabes tanta información como Paula","Eres un fan casual","¿Josh Chan eres tú? Porque tu cabeza esta en las nubes"]
var range;
  if (correct < 1) {
  range = 2;
  }
  if (correct > 0 && correct < 3) {
  range = 1;
  }
  if (correct > 2) {
  range = 0;
  }
  document.getElementById ("afterSubmit").style.visibility = "visible";
  document.getElementById ("yourName").innerHTML = "Gracias por jugar " + name ;
  document.getElementById ("numberCorrect").innerHTML = "Tuviste " + correct + " correctas";
  document.getElementById ("message").innerHTML = messages [range];
}
