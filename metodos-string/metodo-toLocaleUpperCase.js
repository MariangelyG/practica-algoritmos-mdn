/*Método `toLocaleUpperCase`:
Enunciado: Escribe una función que tome una cadena como entrada, y utilice el método `toLocaleUpperCase` 
para convertir todos los caracteres en mayúsculas de acuerdo con las reglas de formato regional del idioma del sistema.
Entrada: Una cadena de texto.
Salida: La cadena convertida a mayúsculas según las reglas de formato regional.

Ejemplo:
Entrada: toLocaleUpperCase("hello world")
Salida: "HELLO WORLD"*/


const toLocaleUpperCase = (str) =>{
    return str.toLocaleUpperCase()
}

console.log(toLocaleUpperCase("hello world"));
