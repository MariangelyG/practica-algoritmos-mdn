/*Convertir nombres en iniciales:
Planteamiento: Escribe una función que tome un array de nombres completos y devuelva un
nuevo array con las iniciales de cada nombre.

Entrada: ["John Doe", "Jane Smith", "Michael Johnson"]
Retorno: ["JD", "JS", "MJ"]*/

const namesInitials = (arr)=>{
    return arr.map((item)=> item.split(" ").map((element)=> element[0]).join(""))
}

console.log(namesInitials(["John Doe", "Jane Smith", "Michael Johnson"]));


