document.body.style.width = window.innerWidth;
document.body.style.height = window.innerHeight;


var ball = document.getElementById("ball");

ball.style.margin = 0 + 'px';

var movableWidth = window.innerWidth - ball.offsetWidth;
var movableHeight = window.innerHeight - ball.offsetHeight;

var remainX = null;
var remainY = null;


function moveBall(value) {

    remainX = movableWidth - parseInt(ball.style.marginLeft.slice(0,-2));
    remainY = movableHeight - parseInt(ball.style.marginTop.slice(0,-2));


    if(value === 'd' || value === 'D') {
        if(remainX < 20) {
                ball.style.marginLeft = parseInt(ball.style.marginLeft.slice(0,-2)) + remainX + 'px';
        }
        else {
            ball.style.marginLeft = parseInt(ball.style.marginLeft.slice(0,-2)) + 20 + 'px';
        }

        console.log(ball.style.marginLeft.slice(0,-2));
        console.log(movableWidth);
        console.log(remainX);
    }

    else if(value === 'a' || value === 'A') {
        if(parseInt(ball.style.marginLeft.slice(0,-2)) > 0) {
            ball.style.marginLeft = parseInt(ball.style.marginLeft.slice(0,-2)) - 20 + 'px';
        }
    }

    else if(value === 's' || value === 'S') {
        if(remainY < 20) {
            ball.style.marginTop = parseInt(ball.style.marginTop.slice(0,-2)) + remainY + 'px';
        }
        else {
            ball.style.marginTop = parseInt(ball.style.marginTop.slice(0,-2)) + 20 + 'px';
        }
    }

    else if(value === 'w' || value === 'W') {
        if(parseInt(ball.style.marginTop.slice(0,-2)) > 0) {
            ball.style.marginTop = parseInt(ball.style.marginTop.slice(0,-2)) - 20 + 'px';
        }
    }

}


window.addEventListener("keydown", (event) => {
    var value = event.key;
  
    moveBall(value);
  });