// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// 1. creo numero random per il pc
var numPc = Math.floor(Math.random() * 6 ) + 1;

// 2. creo numero random per l'utente
alert("Tira il dado!");
var numUtente = Math.floor(Math.random() * 6 ) + 1;
alert("Hai fatto " + numUtente);

// 3. confronto i valori e stampo risultato
if (numPc > numUtente) {
  alert("Ho fatto " + numPc + ", quindi ho vinto io!");
} else if (numPc < numUtente) {
  alert("Ho fatto " + numPc + ", quindi hai vinto tu!");
} else {
  alert("Ho fatto " + numPc + " pure io, quindi abbiamo pareggiato!");
}
