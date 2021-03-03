/*
Lista Cognomi
Chiedere all’utente il cognome
inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
stampa la lista ordinata alfabeticamente
scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
Consigli del giorno:
1. consultiamo la documentazione W3Schools o MDN per trovare i metodi javascript che possono esserci utili.
*/

// 1. Chiedo all'utente il cognome:

var cognomeUtente = prompt("Ciao! Inserisci qui il tuo cognome per favore:");

//2. Definisco un Array Cognome con all'interno alcuni cognomi di default:

var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

//3. Inserisco il cognomeUtente nell'Array cognomi tramite il metodo .push:

cognomi.push(cognomeUtente);

//4. Provvedo a riordinare i dati nell'Array in ordine alfabetico:
/*Uso il metodo sort() che serve a ordinare gli elementi di un array:
in mancanza di una compare function, essi sono convertiti in stringhe e ordinati in ordine alfabetico (fonte MDN WEB DOCS)*/

cognomi.sort();

//5. Provvedo a stampare la lista ordinata dei cognomi usando un ciclo for:

for (var i = 0; i < cognomi.length; i++){

  //6. Inserisco delle istruzioni che permettano di mostrare con un messaggio la posizione umana di ciascun cognome all'interno della lista:

  console.log(cognomi[i] + " è il " + (i + 1) + " ° nome della lista dei cognomi")

}
