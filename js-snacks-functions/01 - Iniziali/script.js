/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
const iniziali = getInitials(names)
// Dichiara la funzione qui.
function getInitials(names){
return names.map(p => p[0]);
}

// Invoca la funzione qui e stampa il risultato in console

console.log(iniziali)

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]