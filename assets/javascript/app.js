//create an on-click function to start the game and then display the trivia questions
$("#startBtn").on("click", function() {
    game.start();
});

//variable created to contain an object for each question, the answer choices and correct answer
var questions = [{
    question: "By what name was William F. Cody better known?",
    answers: ["Bill Walton", "Wild Bill Hitchcock", "Randy Quad", "Buffalo Bill"],
    correctAnswer: "Buffalo Bill"
}, {
    question: "What is the capital city of Peru?",
    answers:["Lima", "Salt Lake City", "London", "Cusco"],
    correctAnswer: "Lima"
}, {
    question: "What is the third sign of the Zodiac?",
    answers:["Leo", "Gemini", "Aries", "Cancer"],
    correctAnswer: "Gemini"
}, {
    question: "Who was the first American to go into space?",
    answers:["Alan Shephard", "Donald Trump", "Neil Armstrong", "Lance Armstrong"],
    correctAnswer: "Alan Shephard"
}, {
    question: "Which is the most populous U.S. state?",
    answers:["New York", "North Dakota", "Florida", "California"],
    correctAnswer: "California"
}, {
    question: "Which pop album is the best selling of all time?",
    answers:["Hotel California", "Thriller", "The Wall", "Back In Black"],
    correctAnswer: "Thriller"
}, {
    question: "What is the square root of 256?",
    answers:["15", "28", "2", "16"],
    correctAnswer: "16"
}, {
    question: "What did the crocodile swallow in Peter Pan?",
    answers:["A Lost Boy", "Alarm Clock", "Chicken", "A Floridian"],
    correctAnswer: "Alarm Clock"
}, {
    question: "By what name was William F. Cody better known?",
    answers:["Bill Walton", "Wild Bill Hitchcock", "Randy Quad", "Buffalo Bill"],
    correctAnswer: "Buffalo Bill"
}, {
    question: "What did the 7 dwarves do for a job?",
    answers:["Strippers", "Hot Tile Roofers", "Miners", "Therapists"],
    correctAnswer: "Miners"
}];
//object and method that start the game
var game = {
    correct: 0,
    inCorrect: 0,
    counter: 60,
    countDown: function () {
        game.counter--;
        $("#counter").html(game.counter)
        if (game.counter == 0) {
            console.log("Out of time, homie!!!");
            game.done();
        }      
    },
    start: function () {
        timer= setInterval(game.countDown, 1000);
        $("#subContainer").prepend('<h2>Time Left: <span id="counter">60</span> Seconds');
        $("#startBtn").remove();
        for (var i=0; i < questions.length; i++) {
            $("#subContainer").append('<h2>' + questions[i].question + '</h2>');
            for (var j=0; j < questions[i].answers.length; j++) {
                $("#subContainer").append("<input type='radio' name= 'question- " + i + "'value='" + questions[i].answers[j] + "'>" + questions[i].answers[j]);
                }
            }
        },
    done: function () {
        //looks for each element within the () to see if answer is correct
        $.each($('input[name="question-0"]:checked'), function() {
            if($(this).val()==questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.inCorrect++;
            }
        });
        $.each($('input[name="question-1"]:checked'), function() {
            if($(this).val()==questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.inCorrect++;
            }
        });
        $.each($('input[name="question-2"]:checked'), function() {
            if($(this).val()==questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.inCorrect++;
            }
        });
        $.each($('input[name="question-3"]:checked'), function() {
            if($(this).val()==questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.inCorrect++;
            }
        });
        $.each($('input[name="question-4"]:checked'), function() {
            if($(this).val()==questions[4].correctAnswer) {
                game.correct++;
            } else {
                game.inCorrect++;
            }
        });
        $.each($('input[name="question-5"]:checked'), function() {
            if($(this).val()==questions[5].correctAnswer) {
                game.correct++;
            } else {
                game.inCorrect++;
            }
        });
        $.each($('input[name="question-6"]:checked'), function() {
            if($(this).val()==questions[6].correctAnswer) {
                game.correct++;
            } else {
                game.inCorrect++;
            }
        });
        $.each($('input[name="question-7"]:checked'), function() {
            if($(this).val()==questions[7].correctAnswer) {
                game.correct++;
            } else {
                game.inCorrect++;
            }
        });
        $.each($('input[name="question-8"]:checked'), function() {
            if($(this).val()==questions[8].correctAnswer) {
                game.correct++;
            } else {
                game.inCorrect++;
            }
        });
        $.each($('input[name="question-9"]:checked'), function() {
            if($(this).val()==questions[9].correctAnswer) {
                game.correct++;
            } else {
                game.inCorrect++;
            }
        });
        
        this.result();
        },
        //function to be called when the time runs out
        result: function() {
            clearInterval(timer);
            $('#subContainer h2').remove();
            $('#subContainer').html("<h2>Trivia Complete!<h2>");
            $('#subContainer').append("<h3> Correct Answers: " + this.correct + "<h3>");
            $('#subContainer').append("<h3> Incorrect Answers: " + this.inCorrect + "<h3>");
            $('#subContainer').append("<h3> Unanswered: " + (questions.length - (this.inCorrect+this.correct))+"</h3>");
           
            
        }

    }
