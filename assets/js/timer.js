
/**
 * Simple Timer - Vanilla JavaScript
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

