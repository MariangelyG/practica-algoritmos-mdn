/*5. Método `concat`:
Enunciado: Escribe una función que tome dos o más cadenas como entrada y utilice el método `concat` para concatenarlas en una sola cadena.
Entrada: Dos o más cadenas de texto.
Salida: La cadena resultante después de la concatenación.*/

const concat = (str1,str2) =>{
    return str1.concat(str2)
}

console.log(concat("hola ","mundo"));
console.log(concat("Me gusta comer ","chocolate"));
