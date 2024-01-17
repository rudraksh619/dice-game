var first= Math.floor(Math.random()*6+1);
var second=Math.floor(Math.random()*6+1);
if(first>second)
{
    document.querySelector("h1").innerHTML="Player 1 wins"
}
else if(first===second)
{
    document.querySelector("h1").innerHTML="Draw";
}

else{
    document.querySelector("h1").innerHTML="Player 2 wins"
}


if(first===1)
{
    document.querySelector(".img1").setAttribute("src","./images/dice1.png");
}


if(first===2)
{
    document.querySelector(".img1").setAttribute("src","./images/dice2.png");
}
if(first===3)
{
    document.querySelector(".img1").setAttribute("src","./images/dice3.png");
}
if(first===4)
{
    document.querySelector(".img1").setAttribute("src","./images/dice4.png");
}
if(first===5)
{
    document.querySelector(".img1").setAttribute("src","./images/dice5.png");
}
if(first===6)
{
    document.querySelector(".img1").setAttribute("src","./images/dice6.png");
}

if(second===1)
{
    document.querySelector(".img2").setAttribute("src","./images/dice1.png");
}
if(second===2)
{
    document.querySelector(".img2").setAttribute("src","./images/dice2.png");
} 

if(second===3)
{
    document.querySelector(".img2").setAttribute("src","./images/dice3.png");
}

if(second===4)
{
    document.querySelector(".img2").setAttribute("src","./images/dice4.png");
}

if(second===5)
{
    document.querySelector(".img2").setAttribute("src","./images/dice5.png");
}

if(second===6)
{
    document.querySelector(".img2").setAttribute("src","./images/dice6.png");
}