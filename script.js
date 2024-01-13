document.addEventListener('DOMContentLoaded', function() {

  let feedbackText = document.getElementById("feedbackTextId").value;
  let emailText = document.getElementById("feedbackEmailId").value;

  document.getElementById("submitButton").addEventListener("click", clickSubmitButton);

  function retrieveFeedback(){
    feedbackText = document.getElementById("feedbackTextId").value;
    emailText = document.getElementById("feedbackEmailId").value;

    let feedbackInstance = {
      feedback: feedbackText,
      email: emailText
    };
    return feedbackInstance;
  }

  function submitFeedback(localRetrievedFeedback){
    feedbackInString = JSON.stringify(localRetrievedFeedback);
    console.log(feedbackInString);
    alert("Feedback submitted! Thank you!");
    document.getElementById("feedbackTextId").value = "";
    document.getElementById("feedbackEmailId").value = "";
  }

  function clickSubmitButton (){
    submitFeedback(retrieveFeedback());
  }

});