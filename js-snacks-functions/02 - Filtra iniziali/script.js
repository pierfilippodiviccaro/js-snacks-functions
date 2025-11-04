/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */
//dichiarazione di variabili
const nomi = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const solamenteA = onlyA (nomi, "A")

// Dichiara la funzione qui.
function onlyA (names, letter){
    let solamenteA=[]
    for(i=0; i < names.length; i++){
        
        if(names[i][0] == letter ){
            solamenteA.push(names[i])
        }
        
        
    }
    return solamenteA;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(solamenteA)

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]