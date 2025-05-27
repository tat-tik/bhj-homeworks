let cookieClick = document.getElementById("cookie");
let clickerCounter = 0;
let start = Date.now();

cookieClick.addEventListener("click", function(){
    cookieClick.width = ++clickerCounter % 2 === 0 ? 250 : 200;
    document.getElementById("clicker__counter").innerHTML = clickerCounter;



        setTimeout(function a() {
            let start2 = Date.now();
            let delay = (start2 - start);
            let speed = parseFloat(1000 / delay).toFixed(2);
            document.getElementById("speed__counter").innerHTML = speed;
            start = start2;
},);
});







