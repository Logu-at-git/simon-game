var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;


$(document).keydown(function() {
    var h1=$("h1").text();
    if(level===0)
    {
        nextSequence();
        $("h1").text("Level "+level++);
    }
    if(h1==="Game Over Press Any key to Play Again")
    {
        level=0;
        gamePattern=[];
        userClickedPattern=[];
        nextSequence();
        $("h1").text("Level "+level++);
    }
})



$(".btn").click(function(){
    var chosenColor=this.id;
    userClickedPattern.push(chosenColor);
    animate(chosenColor);
    makeSound(chosenColor);
    checkPattern(userClickedPattern.length-1);
})



function nextSequence()
{
    var randomNumber=Math.round(Math.random()*3);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    animate(randomChosenColour);
    makeSound(randomChosenColour);
}


function checkPattern(i)
{
    if(userClickedPattern[i]==gamePattern[i])
        {
                
        
        
        if(userClickedPattern.length==gamePattern.length)
        {
            setTimeout(function() {nextSequence();},1000);
            $("h1").text("Level "+level++);
            userClickedPattern=[];
        }
        
        
        }
    else
        {
            makeSound("wrong");
            $("body").addClass("red");
            setTimeout(function() {
                $("body").removeClass("red");
            },100);
            $("h1").text("Game Over Press Any key to Play Again");
        }
}


function animate(currentColor)
{
    $("#"+currentColor).fadeOut(100).fadeIn(100);
    $("#"+currentColor).addClass("pressed");
    setTimeout(function () {
        $("#"+currentColor).removeClass("pressed");
    }, 100);
}



function makeSound(name)
{
    switch (name) {
        case "blue":
            var blue=new Audio("sounds/blue.mp3");
            blue.play();
            break;
        case "green":
            var green=new Audio("sounds/green.mp3");
            green.play();
            break;
        case "red":
            var red=new Audio("sounds/red.mp3");
            red.play();     
            break;
        case "yellow":
            var yellow=new Audio("sounds/yellow.mp3");
            yellow.play();        
            break;
        case "wrong":
            var wrong=new Audio("sounds/wrong.mp3");
            wrong.play();
            break;
        default:
            alert("Something went wrong.");
            break;
    }
}