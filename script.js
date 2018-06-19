$(document).ready(function() {
    //Magic 8 Ball Object & Properties
    var magic8Ball = {};

    magic8Ball.listOfAnswers = [
        "Yes",
        "Fasho",
        "Sure, why not?",
        "Speak it into Existence",
        "Make it Happen, Cap'n",
        "You already know!",
        "No",
        "Probably Not",
        "Get your entire life",
        "Bye Felicia",
        "You could do something more productive",
        "It's too soon to tell",
        "Just wait until you see",
        "Maybe",
        "I Don't Even Know",
        "Are you sure you want to know?",
        "Is it really what YOU want?",
        "That's not a good look"
    ]

    // functions
    magic8Ball.pickAnswer = function() {
        $('#8ball').effect('shake');

        var answer = this.listOfAnswers[
            Math.floor(Math.random() * this.listOfAnswers.length)
        ];

        $("#answer").text(answer);
    };

    var askQuestion = function() {
        $("#answer").hide();
        $("#8ball").attr(
            "src",
            "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png"
        );

        setTimeout(function() {
            prompt("Go ahead, Ask away");
            magic8Ball.pickAnswer();
        }, 500);

        $("#answer").fadeIn(4000);
    };

    // Manipulate the DOM
    $("#answer").hide();
    $("#questionButton").click(askQuestion);
})