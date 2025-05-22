
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

let background = document.querySelector("body");

