//2 players
//10 emoji's all assign a value
//each player randomly generates one
//winner get's a point
let p1 = 0;
let p2 = 0;
let score1 = 0;
let score2 = 0;
let playButton = document.getElementById("play");
let p1Display =document.getElementById("score1");
let p2Display =document.getElementById("score2");
let emoji1 = document.querySelector("#p1emoji");
let emoji2 = document.querySelector("#p2emoji");
let sign = document.getElementById("sign");

const emojiData = {
    1: "Drunk Emoji.png",
    2: "Eye Roll Emoji.png",
    3: "Heart Eyes Emoji.png",
    4: "Hugging Emoji.png",
    5: "Loudly Crying Emoji.png",
    6: "Money Emoji.png",
    7: "Smirk Emoji.png",
    8: "Sunglasses Emoji.png",
    9: "Tears Emoji.png",
    10: "Upside Down Smiling Emoji.png",
};

playButton.addEventListener("click",function(){
    let p1 = (Math.floor(Math.random()*10)+1);
    let p2 = (Math.floor(Math.random()*10)+1);
    playButton.setAttribute('disabled', 'true');
    emoji1.classList.add('bounceInLeft',"animated");
    emoji2.classList.add('bounceInRight',"animated");
    sign.style.visibility = 'hidden';
    setTimeout(function(){
        sign.classList.add("flipInX","animated");
        sign.style.visibility = 'visible';
        console.log("hello");
    },500);

    setTimeout(function(){
        emoji1.classList.remove('bounceInLeft',"animated");
        emoji2.classList.remove('bounceInRight',"animated");
        sign.classList.remove("flipInX","animated");
        playButton.removeAttribute('disabled');
    }, 1000);
    emoji1.src = "emojis/" + emojiData[p1];
    emoji2.src = "emojis/" + emojiData[p2];

    if(p1>p2){
        score1++;
        sign.textContent = ">"
        sign.style.color = "green"
    }else if(p1<p2){
        score2++;
        sign.textContent = "<"
        sign.style.color = "red"

    }else if(p1=p2){
        sign.textContent = "="
        sign.style.color = "black"


    }
    p1Display.textContent = score1; 
    p2Display.textContent = score2; 

});
