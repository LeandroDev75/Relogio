
function atualizaHora() {
const horaAtual = new Date().getHours();

const minutoAtual = new Date().getMinutes();

const segundoAtual = new Date().getSeconds();

const campoHora = document.querySelector("#hour")
campoHora.textContent = String(horaAtual).padStart(2, "0");

const campoMinutos = document.querySelector("#min");
campoMinutos.textContent = String(minutoAtual).padStart(2, "0");

const campoSegundos = document.querySelector("#sec");
campoSegundos.textContent = String(segundoAtual).padStart(2, "0");

}

setInterval(function() {
    atualizaHora();
}, 1000);

function geraIndice () {

const imagens = [
    "images/dia1.jpg",
    "images/dia2.jpg",
    "images/dia3.jpg",
    "images/dia4.jpg",
    "images/dia5.jpg",
    "images/dia6.jpg"
];

let geraIndicealeatorio = Math.floor(Math.random() * imagens.length);

let background = document.getElementById("imagensAleatorias");

background.src = imagens[geraIndicealeatorio];

}

setInterval(function() {
    geraIndice();
}, 5000);








