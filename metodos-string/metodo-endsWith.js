/*6. Método `endsWith`:
Enunciado: Crea una función que tome una cadena y un valor de sufijo como entrada, 
y use el método `endsWith` para determinar si la cadena termina con el sufijo dado.
Entrada: Una cadena de texto y otra cadena de texto que representa el sufijo.
Salida: true si la cadena termina con el sufijo dado; de lo contrario, false.*/

const endsWith = (str,end)=>{
    return str.endsWith(end)
}

console.log(endsWith("Cats are the best!", ""));
console.log(endsWith("Cats are the best!", "best"));
