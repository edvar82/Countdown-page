var check = false;
var img = document.querySelector('#fire');
var texto = document.querySelector("#texto");


img.addEventListener("click", xequemate);

function xequemate() {
    //Cria o intervalo do contador, para cada 1 segundo chamar a função start.
    var timer1 = setInterval(function () { start() }, 1000);
    var timer2 = setInterval(function () { end() }, 13100);
    var timer3 = setInterval(function () { begin() }, 13900);
    var count = 10;
    img.src = "./assets/xm.png";
    //Função para começar o contador, apresentar o número ao invés do texto e dar plau no som.
    function start() {
        beep();
        texto.innerHTML = count;
        if (count == 0) {
            //Desativa o intervalo da contagem.
            clearInterval(timer1);
            img.src = "./assets/explosion.gif";
            texto.innerHTML = "GAME OVER!";
            thunder();
        }
        count--;
    }
}
function beep() {
    //Cria um audio.
    var audio = new Audio;
    audio.src = "./assets/Beep_Short.mp3";
    audio.play();
}
function thunder() {
    var audio = new Audio;
    audio.src = "./assets/Thunder_Crack.mp3";
    audio.play();
}
function end() {
    img.src = "./assets/clean.png";
}
function begin() {
    img.src = "./assets/xm.png";
    texto.innerHTML = "Countdown";
}