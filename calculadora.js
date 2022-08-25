'use scrict';

let novoNumero = true;

function insert(num) {
    var numero = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = numero + num;
}

function clean() {
    document.getElementById("display").innerHTML = "";
}

function cleanAll() {
    clean();
    num = undefined;
    numero = true;
}

function backspace() {
    var display = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = display.substring(
        0,
        display.length - 1
    );
}

function calcular() {
    var display = document.getElementById("display").innerHTML;

    if (display) {
        document.getElementById("display").innerHTML = eval(display);
    } else {
        document.getElementById("display").innerHTML = "ERROR";
    }
}

const atualizarDisplay = (texto) => {
    if (novoNumero) {
        display.textContent = texto.toLocaleString("BR");
        novoNumero = false;
    } else {
        display.textContent += texto.toLocaleString("BR");
    }
    document.querySelector("#igual").focus();
};

function inverter() {
    novoNumero = true;
    atualizarDisplay(display.textContent * -1);
}