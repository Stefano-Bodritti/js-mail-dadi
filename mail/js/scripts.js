// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// 1. chiedo all'utente la email
var mail = prompt("Inserisci la tua mail");

// 2. definisco lista email
var lista = ["andrea@gmail.com", "franco@yahoo.it", "alberto@hotmail.it", "stefano@outlook.com", "giulia@gmail.com"];
var corrispondenza = 0;

// 3. controllo se la mail inserita è in lista, se lo è fisso corrispondenza=1
for (var i = 0; i < lista.length; i++) {
  if (mail == lista[i]) {
    var corrispondenza = 1;
  }
}

// 4. stampo messaggio appropriato
if (corrispondenza == 1) {
  alert("La tua mail è in lista!");
} else {
  alert("Mi dispiace, la tua mail non è in lista!");
}
