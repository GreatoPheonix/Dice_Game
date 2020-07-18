
function start()
{

  var name1 = document.getElementById("input1").value;

  document.getElementById("player1").innerHTML = name1;

  var name2 = document.getElementById("input2").value;

  document.getElementById("player2").innerHTML = name2;

var randomNumber1 = Math.floor(Math.random()*6)+1; //To generate a number between 1 and 6

var randomImage1 = "dice" + randomNumber1 + ".png"; //To select image name

var randomImageSource1 = "images/" + randomImage1; //To select image source

var image1 = document.querySelector(".img1");

image1.setAttribute("src", randomImageSource1);

var randomNumber2= Math.floor(Math.random()*6)+1;

var randomImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomImage2;

var image2 = document.querySelector(".img2");

image2.setAttribute("src", randomImageSource2);

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML = name1 + " Won";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML = name2 + " Won";
}
else
{
  document.querySelector("h1").innerHTML = "It was a draw";
}
}
