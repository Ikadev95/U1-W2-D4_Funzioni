/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2) {
    let areaRettangolo = l1 * l2;
    return areaRettangolo;
}
console.log(area(19, 30));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(num1, num2) {
    if (typeof num1 == "number" && typeof num2 == "number") {
        let somma = num1 + num2;
        if (num1 === num2) {
            return somma * 3;
        } else return somma;
    } else return "inserisci dei numeri interi";
}

console.log(crazySum(4, 6));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(numero) {
    if (typeof numero == "number") {
        let differenzaAssoluta = numero - 19;
        if (numero > 19) {
            return differenzaAssoluta * 3;
        } else return Math.abs(differenzaAssoluta); // essendo minore di 19 la differenza sarebbe negativa quindi attivo il modulo
    } else console.log("inserisci un numero");
}
console.log(crazyDiff(2));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
    if ((n > 20 && n <= 100 && typeof n == "number") || (n == 400 && typeof n == "number")) {
        return true;
    } else return false;
}
console.log(boundary(30));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let stringa = "ciao come stai";

function epify(stringa) {
    let epi = "EPICODE";
    if (typeof stringa == "string") {
        if (stringa.search(epi) == 0) {
            return stringa;
        } else return epi.concat(" ", stringa);
    } else return "inserisci una stringa";
}
console.log(epify(stringa));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(numeroPositivo) {
    if (numeroPositivo * -1 < 0 && typeof numeroPositivo == "number") {
        if (numeroPositivo % 3 == 0 || numeroPositivo % 7 == 0) {
            return true;
        } else return false;
    } else return "inserisci un numero positivo";
}
console.log(check3and7(3));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(stringa) {
    const splitString = stringa.split(""); // nuovo array con una lettera per ogni elemento dell'array
    const reverseArray = splitString.reverse(); // inverto l'array
    let Result = reverseArray.join(""); // unisco gli elementi in una stringa
    return Result;
}
console.log(reverseString("epicode"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(stringa) {
    const splitString = stringa.split(" "); // nuovo array con una parola per ogni elemento dell'array
    console.log(splitString);
    for (let i = 0; i < splitString.length; i++) {
        splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1);
        // charAt() per individuare la prima posizione della stringa , toUpperCase per renderla maiuscola (ritorna però solo la prima lettera maiuscola quindi vado a concatenare con il resto)
    }
    let ResultString = splitString.join(" "); // unisco in una stringa
    return ResultString;
}
console.log(upperFirst("ciao come stai"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(stringa) {
    return stringa.substring(1, stringa.length - 1);
}
console.log(cutString("epicode"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
    if (typeof n == "number") {
        const array = [];
        for (let i = 0; i < n; i++) {
            array.push(Math.floor(Math.random() * 11));
        }
        return array;
    } else console.log("inserisci un numero intero");
}
console.log(giveMeRandom(4));
