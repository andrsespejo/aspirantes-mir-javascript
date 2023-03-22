// escribe la función sum acá
function sum(arreglo){
    let total = 0;
    arreglo.forEach(elemento => total += elemento );
    return total
}
console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0