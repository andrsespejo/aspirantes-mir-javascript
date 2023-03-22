// escribe la función max acá
function max(arreglo) {
    if (!arreglo.isEmpty){
        arreglo.sort((a, b) => b-a);
        return arreglo[0];
    }
    return undefined
}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined