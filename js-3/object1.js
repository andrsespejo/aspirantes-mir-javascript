let pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", "squash", "piano"]
}
console.log("");
console.log("Llamado 1 de la edad del objeto pedro:");
console.log(pedro.edad);
console.log("");
console.log("Llamado 2 de la edad del objeto pedro:");
let llave = "edad"; 
 console.log (pedro[llave]); //2. Imprime en la consola el valor de la llave edad. 
  
 pedro.estatura = 1.8; //3. Agrega una propiedad con llave estatura y valor 1.8 
  
 delete pedro.activo; //4. Elimina la propiedad con llave activo. 
 console.log(""); 
 // 5.Recorre todas las propiedades e imprímelas en consola (una línea por propiedad y separando la llavey el valor con dos puntos:) 
 console.log ("Primer forma de recorrer todas las propiedades e imprimir en consola con hasOwnProperty, cada propiedad en una linea :"); 
 for (let llave in pedro) { 
    if (pedro.hasOwnProperty(llave)) { 
        console.log (llave + ": " + pedro[llave]); 
    } 
 } 
 console.log(""); 
 console.log ("Segunda forma de recorrer todas las propiedades e imprimir en consola con Object.keys, cada propiedad en una linea :"); 
 let llaves = Object.keys (pedro); 
 for (let llave of llaves) { 
    console.log (llave + ": " + pedro[llave]); 
 } 
 // 6 Agrégale al objeto una función llamada saluda que retorne la frase “Hola, me llamo ” seguido del nombre de la persona. 
 pedro.saluda = function() { 
    console.log ("Hola, me llamo " + this.nombre); 
 } 
 console.log(""); 
 // 7. Llama la función saluda y verifica el resultado, debería decir “Hola, me llamo Pedro Perez”. 
    pedro.saluda();