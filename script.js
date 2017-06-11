window.onload = function() {
    function randomColor() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
    var squareList = document.getElementsByClassName("square");
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");

    function changeBgColor() {
        for (var i = 0; i < squareList.length; i++) {
            squareList[i].style.backgroundColor = "rgb(255, 162, 0)";
        }
        var square1, square2, square3, len;
        len = squareList.length;
        square1 = squareList[Math.floor(Math.random() * len)];
        do {
            square2 = squareList[Math.floor(Math.random() * len)];
        } while (square1 === square2);

        do {
            square3 = squareList[Math.floor(Math.random() * len)];
        } while (square1 === square3 || square2 === square3);
        square1.style.backgroundColor = randomColor();
        square2.style.backgroundColor = randomColor();
        square3.style.backgroundColor = randomColor();
    }

    btn1.onclick = function() {
        var startId = setInterval(changeBgColor, 1000);
        btn2.onclick = function() {
            clearInterval(startId);
            for (var i = 0; i < squareList.length; i++) {
                squareList[i].style.backgroundColor = "rgb(255, 162, 0)";
            }
        }
    }
}
