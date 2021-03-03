/*
Lista Cognomi
Chiedere all’utente il cognome
inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
stampa la lista ordinata alfabeticamente
scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
Consigli del giorno:
1. consultiamo la documentazione W3Schools o MDN per trovare i metodi javascript che possono esserci utili.
*/


//0. Un Alert spiega la funzionalità del programma.

alert("Salve! Questo programma prende nota del tuo cognome e provvede a confrontarlo con gli altri inseriti a sistema, dandoti la posizione del tuo nome all'interno di una lista, secondo l'ordine alfabetico!")

// 1. Chiedo all'utente il cognome: definisco la variabile e uso un prompt inserito in un ciclo DO WHILE così da poter avere una prima validazione;
// la condizione while (! isNaN(var)) mi permette di far continuare il ciclo in caso l utente continui a inserire un numero piuttosto che una stringa nel prompt.

var cognomeUtente = 0;

do {
  cognomeUtente = prompt("Hai capito? Bene! Allora inserisci qui il tuo cognome:");
} while ( !isNaN ( cognomeUtente ) );


//2. Definisco un Array cognomi con all'interno alcuni cognomi di default:

var cognomi = [ "Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi" ];

//3. Inserisco il cognomeUtente nell'Array cognomi tramite il metodo .push:

cognomi.push( cognomeUtente );

//4. Con un ciclo For provvedo a riportare tutte le stringhe a lower case in modo da rendere più efficiente la successiva operazione di ordinamento:

for ( var i = 0; i < cognomi.length; i++ ){
  cognomi[i] = cognomi[i].toLowerCase();
}

//4. Provvedo a riordinare i dati nell'Array in ordine alfabetico:
/*Uso il metodo sort() che serve a ordinare gli elementi di un array:
in mancanza di una compare function, essi sono convertiti in stringhe e ordinati in ordine alfabetico (fonte MDN WEB DOCS)*/

cognomi.sort();

//5. Provvedo a stampare la lista ordinata dei cognomi usando un ciclo for:

for (var i = 0; i < cognomi.length; i++ ){

  //6. Inserisco delle istruzioni che permettano di mostrare con un messaggio la posizione umana di ciascun cognome all'interno della lista:

  console.log( cognomi[i]  + " è il " + (i + 1) + " ° nome della lista dei cognomi");
  document.getElementById('lista').innerHTML += "<li><em>" + cognomi[i] + " è il " + (i + 1) + " ° nome della lista dei cognomi" + "</em></li>"

}
