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



// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.  Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.
alert('adesso inserisci due parole e verifica qual\'è la piu lunga');
var parola1 = prompt('prima parola');
var parola2 = prompt('seconda parola');

verificaLunghezza(parola1,parola2);

function verificaLunghezza (prima,seconda) {
    if (prima.length == seconda.length) {
        console.log('sono lunghe uguali: ' + prima + ' ' + seconda);
    } else if (prima.length < seconda.length) {
        console.log('la seconda è piu lunga: ' + seconda);
    } else {
        console.log('la prima è piu lunga: ' + prima);
    }
}


// Scrivi una funzione che fonda due array (con lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro. Es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

var arr1 = ['a','b','c'];
var arr2 = [1,2,3];
function fondi(arr1,arr2) {
    var arrNuovo = [];
    for (i = 0; i < arr1.length; i++) {
        arrNuovo.push(arr1[i],arr2[i]);
    }
    return arrNuovo;
}

console.log(fondi(arr1,arr2));