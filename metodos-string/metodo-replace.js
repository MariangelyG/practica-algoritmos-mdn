/*Método `replace`:
Enunciado: Crea una función que tome una cadena, una expresión regular o una cadena de búsqueda y 
un valor de reemplazo como entrada, y use el método `replace` para reemplazar todas las apariciones
 de la búsqueda con el valor de reemplazo.
Entrada: Una cadena de texto, una expresión regular o una cadena de búsqueda y un valor de reemplazo
 (puede ser una cadena de texto o una función de reemplazo).
Salida: La cadena resultante después de realizar los reemplazos.

Ejemplo:
Entrada: replace("The quick brown fox", /brown/, "red")
Salida: "The quick red fox"*/

const replace = (str) =>{
    return str.replace("brown", "red")
}


console.log(replace("The quick brown fox"));

