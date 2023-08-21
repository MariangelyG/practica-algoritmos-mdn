/*Método `toLocaleLowerCase`:
Enunciado: Crea una función que tome una cadena como entrada, y utilice el método `toLocaleLowerCase` para convertir todos los caracteres en minúsculas de acuerdo con las 
reglas de formato regional del idioma del sistema.
Entrada: Una cadena de texto.
Salida: La cadena convertida a minúsculas según las reglas de formato regional.

Ejemplo:
Entrada: toLocaleLowerCase("HELLO WORLD")
Salida: "hello world"*/


const toLocaleLowerCase = (str) =>{
    return str.toLocaleLowerCase()
}

console.log(toLocaleLowerCase("HELLO WORLD"));

