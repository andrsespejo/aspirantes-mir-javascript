let receta = {};

    receta.nombre = "Sandwich";
    receta.ingredientes = [];
    receta.ingredientes.push({nombre: "Pan", cantidad: 2});
    receta.ingredientes.push({nombre: "Queso", cantidad: 1});
    console.log(receta.ingredientes[0].nombre);

// Sumar todas las cantidades de los ingredientes y mostrar el resultado en la consola
let totalCantidad = 0;
receta.ingredientes.forEach(function(ingrediente) {
  totalCantidad += ingrediente.cantidad;
});
console.log("Total cantidad de ingredientes: " + totalCantidad);
