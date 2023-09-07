/*Escribe una función que reciba como argumento un string, deberá devolver los primeros tres carácteres de dicho string*/

const primerosTres = (str) => {
return str.slice(0,3)
}

console.log(primerosTres("Spartan"));
console.log(primerosTres("Maracaibo"));

/*Escribe una función que tome un arreglo de strings y devuelva un arreglo de objetos de esos string, 
lo cual la propiedad key de los objetos será el string y el value el índice */
const arrayYObjetos = (arr) => {
return arr.map((item, index)=>{
    return {[item] : index}
})
}

console.log(arrayYObjetos(["Melocoton", "Fresa", "Patilla", "Guanabana"]));
console.log(arrayYObjetos(["Automovil", "Barco", "Avion"]));
/*cree una funcion que tome como argumento una secuencia y 
devuelva un arreglo sin ningun elemento con el mismo valor 
al lado del otro y conservando el orden original de los elementos
Por ejemplo:
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]   */ 

const uniqueInOrder = (str)=>{
    if (typeof str == "string"){
        return str.split("").filter((item, index, arr)=> item != arr[index+1])
    }else{
        return str.filter((item, index, arr)=> item != arr[index+1])
    }

//     // [...str]
// return [...str].filter((item, index, array) => item !== array[index - 1]);
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder('ABBCcAD'));
console.log(uniqueInOrder([1,2,2,3,3]) );


