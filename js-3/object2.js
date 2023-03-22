let persona = {
    nombre: "Andres", 
    edad: 32, 
    ciudad: "Bogota", 
    profesion: "Programador maquinaria CNC metalmecanica",
    } 
    console.log(persona) //Imprime en la consola el objeto "persona" completo. 
    console.log(""); 
     
    function presentacion(persona) { //Crea una función llamada "presentacion" que tome el objeto "persona" como argumento y devuelva una cadena de texto 
        return "Mi nombre es " + persona.nombre + " tengo "+ persona.edad + " años y vivo en " + persona.ciudad; 
    } 
    let mensaje = presentacion(persona); //Llama a la función "presentacion" y almacena el resultado en una variable llamada "mensaje". 
    console.log(mensaje); //Imprime en la consola el valor de la variable "mensaje" 
     
    console.log(""); 
    persona.hobbies = ["Dios", "Xbox", "diseño 3D", "futbol","familia"]; //Agrega una nueva propiedad al objeto "persona" llamada "hobbies" que sea un arreglo 
    console.log(persona.hobbies); //Imprime en la consola la propiedad "hobbies" del objeto "persona" 
     
    console.log(""); 
    for (let hobbie of persona.hobbies) { 
        console.log (hobbie); //imprime la totalidad de los hobbies, separadas con sus propiedades. 
    }