 import myJson from './index.json' assert {type: 'json'} ;
 const api_url = "https://api.adviceslip.com/advice" ;

// console.log (myJson.index);
// console.log (Math.floor((myJson.advi.length)*Math.random()));

var btn = document.getElementById("shuffle-btn");
var advice = document.getElementById("quote");
var number = document.getElementById("number");

btn.addEventListener("click", shuffle)

function shuffle(){  

    async function getapi(url) {
        const response = await fetch(url);
        var data = await response.json();
        // console.log(data);
        // console.log(data.slip);
        // console.log(data.slip.id);
        // console.log(data.slip.advice);

        advice.innerHTML = data.slip.advice;
        number.innerHTML = data.slip.id;
    };
    
    getapi(api_url);
       
        // advice.innerHTML = myJson.advi[ Math.floor(Math.random()*(myJson.advi.length))];
        // number.innerHTML = myJson.index[ Math.floor(Math.random()*(myJson.index.length))];

  
        // console.log (myJson.advi);
        // console.log (Math.random()); 
    };
