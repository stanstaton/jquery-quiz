let iterator = 0;
let score = 0;
let questions = [
{
    prompt: "What is the capital of Rhode Island?",
    answers: ["Providence", "Cranston", "Newport", "Warwick"],
    correctAnswerIndex: 0,
    state: "rhode-island"
},
{
    prompt: "What is the capital of Texas?",
    answers: ["Houston", "Dallas", "Austin", "San Antonio"],
    correctAnswerIndex: 2,
    state: "texas"
},
{
    prompt: "What is the capital of Colorado?",
    answers: ["Colorado Springs", "Denver", "Boulder", "Aurora"],
    correctAnswerIndex: 1,
    state: "colorado"
},
{
    prompt: "What is the capital of Washington?",
    answers: ["Olympia", "Tacoma", "Yakima", "Spokane"],
    correctAnswerIndex: 0,
    state: "washington"
},
{
    prompt: "What is the capital of New York?",
    answers: ["New York City", "Albany", "Ithaca", "Buffalo"],
    correctAnswerIndex: 1,
    state: "new-york"
}
];

//this is to create an array of the prompts, it is filled when quiz starts
let promptArr = [];

//listens for start button click and starts the quiz
$("#start").click(function() {
    startQuiz();
    console.log("Clicked baby");
})

$("#next").click(function() {
    checkAnswer();
    console.log(score);

    //increases the iterator thereby moving to the next set of questions and answers
    iterator++;

    //empties the div so that the next question can take its place
    $("#question").empty();

    // if (iterator = questions.length) {
    //     $("question").empty
    //     var finalMessage = $(`<h2>You scored a ${score} on this quiz!`)
    //     return score;
    // }


    //creates next question and answer
    createQuestion();
    giveOptions();
    

})

$("#next").hide();

//starts the quiz
function startQuiz() {
    //fills the previously empty array
    for (var i = 0; i < questions.length; i++) {
        promptArr.push(questions[i].prompt); 
        // console.log(promptArr);
    }
    
    //creates the first question
   createQuestion();

    //creates the next button
    $("#next").show();

    //hides the start button
    var removeButton = $("#start").hide();

    

    //create the radio options
    giveOptions(); 
}



function giveOptions(){
   //create radio buttons
    for (var j = 0; j < questions[iterator].answers.length; j++) {
        console.log(questions[iterator].answers[j])
        var radioBtn = $(`<input type="radio" name="${questions[iterator].state}" value="${j}" />${questions[iterator].answers[j]}<br/>`);
        radioBtn.appendTo('#question');
    }

}

function checkAnswer(){
    //check if an answer is selected
    // if (!($(`input[name='${questions[iterator.state]}']:checked`))){
    //     var notCheckedStatement = $("<p id='goofed'></p>").text("Please make a selection");
    // } 
    //check if answer is correct
    // else {

    //checks if the answer given is correct
    var checkedanswer = $(`input[name='${questions[iterator].state}']:checked`).val();
    console.log(checkedanswer);
    console.log(questions[iterator].correctAnswerIndex);
    if (checkedanswer == questions[iterator].correctAnswerIndex) {
        console.log("You got it right!");
        score += 20;
    } else {
        console.log("You got it wrong");
        score += 0;
    }
    // }

}

function createQuestion(){
     //creates the question
    var newDiv = $("<div></div>").text(promptArr[iterator]);
    $("#question").append(newDiv);
}





