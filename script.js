let feedbackText;
let feedbackEmail;

document.getElementById("submitButton").addEventListener("click", function (){
  feedbackText = document.getElementById("feedbackTextId").value;
  console.log(feedbackText);
});