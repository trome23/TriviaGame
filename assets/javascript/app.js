//create an on-click function to start the game and display the trivia questions
$("#start").on("click", function() {
    $("#subContainer").remove();
});

//variable created to contain an object for each question and answer
var questions = [{
    question: "By what name was William F. Cody better known?"
    answers:["Bill Walton", "Wild Bill Hitchcock", "Randy Quad", "Buffalo Bill"]
    correctAnswer: "Buffalo Bill"
}, {
    question: "What is the capital city of Peru?"
    answers:["Lima", "Salt Lake City", "London", "Cusco"]
    correctAnswer: "Lima"
}, {
    question: "What is the third sign of the Zodiac?"
    answers:["Leo", "Gemini", "Aries", "Cancer"]
    correctAnswer: "Gemini"
}, {
    question: "Who was the first American to go into space?"
    answers:["Alan Shephard", "Donald Trump", "Neil Armstrong", "Lance Armstrong"]
    correctAnswer: "Alan Shephard"
}, {
    question: "Which is the most populous U.S. state?"
    answers:["New York", "North Dakota", "Florida", "California"]
    correctAnswer: "California"
}, {
    question: "Which pop album is the best selling of all time?"
    answers:["Hotel California", "Thriller", "The Wall", "Back In Black"]
    correctAnswer: "Thriller"
}, {
    question: "What is the square root of 256?"
    answers:["15", "28", "2", "16"]
    correctAnswer: "16"
}, {
    question: "What did the crocodile swallow in Peter Pan? "
    answers:["A Lost Boy", "Alarm Clock", "Chicken", "A Floridian"]
    correctAnswer: "Alarm Clock"
}, {
    question: "By what name was William F. Cody better known?"
    answers:["Bill Walton", "Wild Bill Hitchcock", "Randy Quad", "Buffalo Bill"]
    correctAnswer: "Buffalo Bill"
}, {
    question: "What did the 7 dwarves do for a job? "
    answers:["Strippers", "Hot Tile Roofers", "Miners", "Therapists"]
    correctAnswer: "Miners"
}



]