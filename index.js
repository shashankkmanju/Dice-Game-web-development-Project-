var randomNumber1= Math.floor(Math.random() * 6) + 1;
var randomimage= "dice"+ randomNumber1 +".png";
var randomimagesource="images/"+randomimage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesource);

var randomNumber2=Math.floor(Math.random() *6 )+1;
var randomimage2="dice"+randomNumber2+".png";
var randomimagesource2="images/"+randomimage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimagesource2);

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML="🚩Player 1 Win The Game";
}
else if(randomNumber2> randomNumber1)
{
    document.querySelector("h1").innerHTML="Player 2 win The game 🚩";
}
else{
    document.querySelector("h1").innerHTML="! OOPS it's DRAW";
}
