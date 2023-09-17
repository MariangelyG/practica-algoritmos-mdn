/*Escriba un método (o función, según el idioma) que convierta una cadena a camelCase, es decir, 
todas las palabras deben tener su primera letra en mayúscula y los espacios deben eliminarse.
Ejemplos (entrada --> salida):
"hello case" --> "HelloCase"
"camel case word" --> "CamelCaseWord"
*/
const camelCase = (str)=>{
    return  str.split(" ").map((item)=> (item[0].toUpperCase()) + item.slice(1)).join("")
}

  console.log(camelCase("test case"));
  console.log(camelCase("camel Case method"));
  console.log(camelCase("say hello"));
  console.log(camelCase("camel case word"));
  
  
  