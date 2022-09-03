 import myJson from './index.json' assert {type: 'json'} ;

console.log (myJson.index);
console.log (Math.floor((myJson.advi.length)*Math.random()));

var btn = document.getElementById("shuffle-btn");
var advice = document.getElementById("quote");
var number = document.getElementById("number");

btn.addEventListener("click", shuffle)

function shuffle(){  
       
        advice.innerHTML = myJson.advi[ Math.floor(Math.random()*(myJson.advi.length))];
        number.innerHTML = myJson.index[ Math.floor(Math.random()*(myJson.index.length))];
  
        // console.log (myJson.advi);
        // console.log (Math.random()); 
    };
