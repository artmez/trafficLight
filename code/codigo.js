const luzRoja = document.querySelector("#rojo");
const luzAmarilla = document.querySelector("#amarillo");
const luzVerde = document.querySelector("#verde");
const btnInicio = document.querySelector("#iniciar");
const btnFin = document.querySelector("#detener");

let timer = 0;

luzRoja.style.backgroundColor = "rgb(80, 4, 17)";
luzRoja.style.opacity = "0.2";
luzAmarilla.style.backgroundColor = "rgb(124, 71, 12)";
luzAmarilla.style.opacity = "0.2";
luzVerde.style.backgroundColor = "rgb(6,76,32)";
luzVerde.style.opacity = "0.2";

function reinicia() {
    clearInterval(timer);
    luzRoja.style.backgroundColor = "rgb(80, 4, 17)";
    luzRoja.style.opacity = "0.2";
    luzAmarilla.style.backgroundColor = "rgb(124, 71, 12)";
    luzAmarilla.style.opacity = "0.2";
    luzVerde.style.backgroundColor = "rgb(6,76,32)";
    luzVerde.style.opacity = "0.2";

};

function iniciaSemaforo() {

    setTimeout(function () {
        luzVerde.style.backgroundColor = "rgb(18,203,47)";
        luzVerde.style.opacity = "1";
        luzRoja.style.backgroundColor = "rgb(80, 4, 17)";
        luzRoja.style.opacity = "0.2";
        luzAmarilla.style.backgroundColor = "rgb(124, 71, 12)";
        luzAmarilla.style.opacity = "0.2";
    }, 1000);


    setTimeout(function () {
        luzAmarilla.style.backgroundColor = "rgb(252,177,4)";
        luzAmarilla.style.opacity = "1";
        luzRoja.style.backgroundColor = "rgb(80, 4, 17)";
        luzRoja.style.opacity = "0.2";
        luzVerde.style.backgroundColor = "rgb(6,76,32)";
        luzVerde.style.opacity = "0.2";
    }, 3000);

    setTimeout(function () {
        luzRoja.style.backgroundColor = "rgb(247,15,15)";
        luzRoja.style.opacity = "1";
        luzAmarilla.style.backgroundColor = "rgb(124, 71, 12)";
        luzAmarilla.style.opacity = "0.2";
        luzVerde.style.backgroundColor = "rgb(6,76,32)";
        luzVerde.style.opacity = "0.2";
    }, 5000);
}

btnInicio.addEventListener("click", () => {
    luzVerde.style.backgroundColor = "rgb(18,203,47)";
    luzVerde.style.opacity = "1";
    timer = setInterval(iniciaSemaforo, 5000);
})

btnFin.addEventListener("click", () => {
    reinicia();
})