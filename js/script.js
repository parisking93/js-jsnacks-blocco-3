// Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).  La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

function newArray(array,min,max) {
    var arr = [];
    if (max > min) {
        for(var i = max; i >= min; i--) {
            arr.push(array[i]);
        }
    } else if ( min > max) {
        for(var i = min; i >= max; i--) {
            arr.push(array[i]);
        }
    } else {
        arr.push(array[max])
    }
    return arr
}
var maxUtente = parseInt(prompt('inserisci il massimo del nuovo array... numero tra 0 e 8'));
var minUtente = parseInt(prompt('inserisci il minimo del nuovo  array... numero tra 0 e 8'));
while (maxUtente < 0 || maxUtente > 8 || isNaN(maxUtente) || minUtente < 0 || minUtente > 8 || isNaN(minUtente)) {
    alert('inserisci SOLO numeri e COMPRESI tra 0 e 8');
    var maxUtente = parseInt(prompt('inserisci il massimo del nuovo array... numero tra 0 e 8'));
    var minUtente = parseInt(prompt('inserisci il minimo del nuovo  array... numero tra 0 e 8'));
}
var x = newArray(['gino','franco','3','pasquale','cristian','6','7','carmelo','edo'],minUtente,maxUtente).reverse();
console.log(x);