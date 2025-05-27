

function myTimer() {
    let hour = "00"; 
    let minute = "00"; 
    let second = 59;  
    const realizationTimer = setInterval(function() {
        if (second < 10) {
            second  = "0" + second;
        };
        document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + second;
        if (second == 0) {
            clearInterval(realizationTimer);
            alert("Вы победили в конкурсе!");
            window.location = "https://fastdl.mongodb.org/mongocli/mongodb-atlas-cli_1.6.0_macos_arm64.zip";
        }
        second = second - 1;  
    }, 1000);
}
myTimer();