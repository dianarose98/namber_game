var min = 0;
var max = 100;

var middle = Math.floor((min + max) / 2);

var stage = 1;

function start() {

    document.getElementById("startText").classList.add("notOnScreen");
    document.getElementById("startButton").classList.add("notOnScreen");

    document.getElementById("question").classList.remove("notOnScreen");
    document.getElementById("question").innerHTML = "Попытка " + stage + ": " + middle;

    document.getElementById("small").classList.remove("notOnScreen");
    document.getElementById("right").classList.remove("notOnScreen");
    document.getElementById("big").classList.remove("notOnScreen");
}

function smallClick() {

    max = middle;

    middle = Math.floor((min + max) / 2);
    if (max == middle) {
        middle -= 1;
    }
    checkGame();
}

function bigClick() {

    min = middle;


    middle = Math.floor((min + max) / 2);


    if (min == middle) {
        middle += 1;
    }

    checkGame();
}

function bingoClick() {

    max = middle;
    min = middle;

    checkGame();
}


function checkGame() {

    if (min == max) {
        document.getElementById("question").innerHTML = "Вы загадали число " + min;

        document.getElementById("small").classList.add("notOnScreen");
        document.getElementById("right").classList.add("notOnScreen");
        document.getElementById("big").classList.add("notOnScreen");


        return;
    }

    stage += 1;
    if (stage == 8) {

        document.getElementById("question").innerHTML = "Жульничать — нехорошо!";
    }

    document.getElementById("question").innerHTML = "Попытка " + stage + ": " + middle;
}