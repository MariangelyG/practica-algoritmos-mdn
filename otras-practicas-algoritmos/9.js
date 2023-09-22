// Método CamelCase
// Escribe un método (o función, dependiendo del idioma) que convierta una cadena a camelCase, es decir,
//  todas las palabras deben tener su primera letra en mayúscula y se deben eliminar los espacios.

// Ejemplos (entrada --> salida):
// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"


String.prototype.camelCase=function(){
    return this.split(" ").map((item)=> item.charAt().toUpperCase() + item.slice(1)).join("")
  }

  console.log("test case".camelCase());
  console.log("camel Case method".camelCase());
  console.log("say hello".camelCase());
  console.log("camel case word".camelCase());
  console.log("".camelCase());
  
  
//   return this.split(" ").map((item)=> item[0].toUpperCase() + item.slice(1)).join("")