"use strict";

const gameContainer = document.querySelector(".game-container");
let currentScore = 0;

//create currentScoreContainer
let createScoreContainer = () => {
    const currentScoreContainer = document.createElement('div');
    currentScoreContainer.id = "currentScoreContainer";
    currentScoreContainer.innerHTML = '<div class="inner"><p class="points">Punkte:</p>' + currentScore + '</div>';
    gameContainer.appendChild(currentScoreContainer);
}
createScoreContainer();

//create item elements
for(let i = 1; i <= 100; i++){
    gameContainer.innerHTML += '<div class="item"></div>';
}

//get the 100 divs => items
let itemElements = document.querySelectorAll(".item");

//change color function
let changeColor = (item) =>{
    item.classList.add("active");
    setTimeout(function(){
        item.classList.remove("active");
    }, 500);
}

//check score color function
let updateScore = (item) =>{

    if(item.classList.contains("catch")){

        item.classList.remove("catch");
        if(currentScore < 10){
            currentScore++;
            currentScoreContainer.innerHTML = '<div class="inner"><p class="points">Punkte:</p>' + currentScore + '</div>';
            gameContainer.appendChild(currentScoreContainer);
        }
        if(currentScore >= 10){
            stopwatch.stop();
            return
        }

    } 
}

itemElements.forEach(item => {
    item.addEventListener("mouseover", event => {
        changeColor(item);
        updateScore(item);
    })
})




//create randomItem 
let randomTimeNumber = Math.floor(Math.random() * (4 - 2 + 1) + 2);
let randomItem = setInterval( () => {
    let randomItemNumber = Math.floor(Math.random() * 100) + 1;
    let randomItem = itemElements[randomItemNumber];
    randomItem.classList.add("catch");
}, randomTimeNumber * 1000);


/*
let setTimer = setInterval( () => {

    currentTime++;
    console.log(currentTime);
    
},  500);
*/

/**
 * Simple Timer - Vanilla JavaScrip
 * https://codepen.io/Zyberg/pen/YGvdVd 
 */

var min,sec,ms,count, malt, salt, msalt;
var stopwatch = {
  start: function(){
    ms = 0;
    sec = 0;
    min = 0;
    count = setInterval(function(){
      if(ms == 100){
        ms = 0;
        if(sec == 60){
          sec = 0;
          min++;
        }
        else{
          sec++;
        }
      }
      else{
        ms++;
      }
      malt = stopwatch.pad(min);
      salt = stopwatch.pad(sec);
      msalt = stopwatch.pad(ms);

      
        if(sec > 30){
            var temp = document.querySelector("#timeContainer .time");
            temp.style.color = "orange";
        }

        if(sec > 45){
            var temp = document.querySelector("#timeContainer .time");
            temp.style.color = "red";
        }

      
      stopwatch.update(malt + ":" + salt + ":" + msalt);
    }, 10);
    },
  stop: function(){
    clearInterval(count);
  },
  update: function(txt){
     var temp = document.querySelector("#timeContainer .time");
     temp.firstChild.nodeValue = txt;
  },
  pad: function(time){
    var temp;

    if(time < 10){
      temp = "0" + time;
    }
    else{
      temp = time;
    }
    return temp;
  }
}

stopwatch.start()
