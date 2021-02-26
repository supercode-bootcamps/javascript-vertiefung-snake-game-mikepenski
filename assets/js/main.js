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

/**
 * hover items //change color function
 */
let changeColor = (item) =>{
    item.classList.add("active");
    setTimeout(function(){
        item.classList.remove("active");
    }, 500);
}

/**
 * check score color function
 */
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
            gameContainer.classList.add("finish");
            return
        }
    } 
}

/**
 * create randomItem 
 */
let randomTimeNumber = Math.floor(Math.random() * (4 - 2 + 1) + 2);
let randomItem = setInterval( () => {

  if(currentScore >= 10){
    return
  }

  if(currentScore < 10){

    itemElements.forEach(item => {
      item.classList.remove("catch");
    })

    let randomItemNumber = Math.floor(Math.random() * 100) + 1;
    let randomItem = itemElements[randomItemNumber];
    randomItem.classList.add("catch");
  }

}, randomTimeNumber * 1000);


itemElements.forEach(item => {
  item.addEventListener("mouseover", event => {
      changeColor(item);
      updateScore(item);
  })
})

stopwatch.start();
