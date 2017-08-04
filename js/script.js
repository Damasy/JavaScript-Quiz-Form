function submitAnswers(){
    "use strict";
    
    var score=0, total=5;
    
    // Get Results From User
    var q1=document.forms["quizform"]["q1"].value;
    var q2=document.forms["quizform"]["q2"].value;
    var q3=document.forms["quizform"]["q3"].value;
    var q4=document.forms["quizform"]["q4"].value;
    var q5=document.forms["quizform"]["q5"].value;
    
    
    // Display Answers
    for(var i=1;i <= total;i++){
        if(eval('q'+i)=='' || eval('q'+i)==null){
            alert("You missed question "+i);
            return false;
        }
    }
    
    var Answers = ["b","a","d","b","d"]
    
    //Check Correct Answers
    for(i=1;i<= total;i++){
        if(eval('q'+i)==Answers[i-1]){
            score++;
        }
        
    }
    //Display Results
    var results = document.getElementById('results');
    results.innerHTML='<h3> You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>';
    alert('You Scored '+score+' Out of '+total);
    scrollTo(0,0);
    return false;
    
}

//  OnClick Slide Down Questions

var speed = "500";

$(document).ready(function(){
    $('form').on('mouseenter', 'h3', function(){
        $(this).next().slideToggle(speed).siblings('.answers').slideUp();
    });
});


// Count Down Timer

function onStart(){

    var seconds = 59,
        countDiv = document.getElementById('countdown'),
        secondPass,
        countDown = setInterval(function(){
            "use strict";
            secondPass();
        },1000);

    function secondPass(){
        "use strict";
        var minutes = Math.floor(seconds/60),
            remSeconds = seconds % 60;
        if(seconds <10){
            remSeconds = "0"+ remSeconds;
        }

        countDiv.innerHTML = minutes + ":" + remSeconds;
        if(seconds > 0){
            seconds = seconds - 1;
        }
        else{
            clearInterval(countDown);
            countDiv.innerHTML = 'Time Out';
        }
    }
    var btn = document.getElementById('startTimer').setAttribute('value','Pause'),
        btnValue = document.getElementById('startTimer').getAttribute('value');
    
    if(btnValue == 'stop' && btn.onclick()){
        clearInterval(countDown);
    }
}