/*var randomNumber1=Math.random()*6;
randomNumber1=Math.floor(randomNumber1)+1;
//console.log(randomNumber1);

var randomNumber2=Math.random()*6;
randomNumber1=Math.floor(randomNumber2)+1;
//console.log(randomNumber2);

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; 


//document.querySelector("img1").setAttribute("href",dice.randomNumber1);
//document.querySelector("img2").setAttribute("href",dice.randomNumber2);


var image1 = document.querySelectorAll("img")[0];
*/






var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource =  randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

image1.setAttribute("src", randomImageSource);

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩PLAYER 1 WINNER";
}
else if (randomNumber2>randomNumber1) {
    document.querySelector("h1").innerHTML="PLAYER 2 WINNER🚩";
}

else {
    document.querySelector("h1").innerHTML=" hahaaha😛";
}