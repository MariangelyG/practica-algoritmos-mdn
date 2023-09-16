/*Enunciado del algoritmo:
Crea una función en JavaScript que reciba una lista de palabras. 
Esta función deberá identificar las palabras que son palíndromos (es decir, se leen igual de izquierda a derecha que de derecha a izquierda)
 y devolver una lista con dichas palabras. Si no hay palíndromos, la lista devuelta debe estar vacía.
Entrada propuesta:
javascriptCopy code
const palabras = ["radar", "mundo", "reconocer", "python", "salas", "programar"];
Salida esperada en consola:
lessCopy code
Las palabras palíndromas son: ["radar", "reconocer", "salas"]
Indicaciones adicionales:
Asegúrate de que tu solución no sea sensible a las mayúsculas, es decir, "Radar" y "radar" deben ser tratados como palíndromos.
Puedes asumir que las palabras no contienen espacios ni signos de puntuación.
No te preocupes por acentos en las palabras.
¡Que te diviertas programando esta solución!*/

const isPalindrome = (palabras) =>{
  
    return palabras.filter((item)=> item.split("").reverse().join("").toLowerCase() == item.toLowerCase())
}

console.log(isPalindrome(["Radar", "mundo", "reconocer", "python", "salas", "programar"]));
