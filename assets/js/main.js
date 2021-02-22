"use strict";

const gameContainer = document.querySelector(".game-container");

//create item elements
for(let i = 1; i <= 100; i++){
    gameContainer.innerHTML += '<div class="item"></div>';
}

let itemElements = document.querySelectorAll(".item");

//console.log(itemElements)

let changeColor = (item) =>{

    item.classList.add("active");
    setTimeout(function(){
        item.classList.remove("active");
    }, 500);

}

itemElements.forEach(item => {
    item.addEventListener("mouseover", event => {
        changeColor(item);
    })
})



