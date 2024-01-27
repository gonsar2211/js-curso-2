let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del desafio';

function verConsola() {
    console.log('El botón fue clicado');
}

function preguntarNombreDeCiudadDeBrasil() {
    let nombreDeCiudadDeBrasil = prompt('indica una ciudad de Brazil');
    alert(`Estuve en ${nombreDeCiudadDeBrasil} y me acordé de ti`);
}

function presionarBotonAlerta() {
    alert('Yo amo JS');
}

function sumaDeDosNumeros() {
    let primerNumero = parseInt(prompt('Digita un número:'));
    let segundoNumero = parseInt(prompt('Digita otro Numero:'));
    let resultadoDeSuma = primerNumero + segundoNumero;
    alert(`El resultado de tu suma es: ${resultadoDeSuma}`);
}

