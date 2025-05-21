

const horaAtual = new Date().getHours();

console.log(horaAtual);

const minutoAtual = new Date().getMinutes();

console.log(minutoAtual);

const segundoAtual = new Date().getSeconds();

console.log(segundoAtual)

const campoHora = document.querySelector("#hour")
campoHora.textContent = String(horaAtual).padStart(2, "0");

const campoMinutos = document.querySelector("#min");
campoMinutos.textContent = String(minutoAtual).padStart(2, "0");

const campoSegundos = document.querySelector("#sec");
campoSegundos.textContent = String(segundoAtual).padStart(2, "0");



