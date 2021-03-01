// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// 1. creo numero random per il pc
var numPc = Math.floor(Math.random() * 6 ) + 1;

// 2. creo numero random per l'utente
alert("tira il dado!");
var numUtente = Math.floor(Math.random() * 6 ) + 1;
