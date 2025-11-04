/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */
const word = 'javascript';


// Dichiara la funzione qui.
function soloVocali (word){
let count=0 
const vocali ="aeiouAEIOU"
    for(i=0; i>word.length; i++){
        if (vocali.includes(word[i]))
count++
        }
return count
}

// Invoca la funzione qui e stampa il risultato in console
console.log(soloVocali(word))


//Risultato atteso se si passa 'javascript': 3 (a, a, i)