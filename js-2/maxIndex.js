// escribe la función maxIndex acá
function maxIndex(arreglo){
    if(arreglo.length){
        return arreglo.indexOf(Math.max(...arreglo));
    }
    return -1;
}

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1