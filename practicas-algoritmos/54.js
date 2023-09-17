/*Realizar una funcion que reciba como parametros dos numeros, debe realizar una operacion de suma, resta, 
multiplicacion y division de los dos numeros. 
validar que los argumentos recibidos en la funcion sean numeros, de lo contrario, retornar un texto que diga:
" no se puede realizar la operacion matematicas, porque uno o los dos parametros no son numeros."*/

const operations = (num1, num2) => {
let operationsResult = `Suma: ${num1} + ${num2} = ${num1+num2}, Resta: ${num1} - ${num2} = ${num1-num2}, Multiplicacion: ${num1} * ${num2} = ${num1*num2}, Division:${num1} / ${num2} = ${num1/num2}`
 return operationsResult !== Number ? operationsResult : "No se puede realizar la operacion matematica porque uno o los dos valores no son numeros" 
}

console.log(operations(2, 2))



/* Crear una funcion que reciba como parametros un array donde cada uno de sus elementos son strings, la funcion 
debe retornar un array con aquellos elementos que son palindromos. ejemplos(anitalavalatina, lata, arepera, carro, ala, oso) */

const isPalindrome = (arr)=>{
    return arr.filter((item)=> item.split("").reverse().join("").toLowerCase() === item.toLowerCase())
}

console.log(isPalindrome(["Anitalavalatina", "lata", "Arepera", "carro", "Ala", "Oso"]));


/* hacer una funcion que reciba como parametros un array de objetos con las propiedades nombre, apellido, y id, 
la funcion debe retornar todos los objetos en un array donde su id sea mayor a 10*/

const users =[{
    nombre: "Maria",
    apellido : "Urzua",
    id: 9
},
{
    nombre: "Fernando",
    apellido: "Castillo",
    id: 10
},
{
    nombre: "Camila",
    apellido: "Hurtado",
    id: 13

}]

const filterUserById = (arr)=>{
  return  arr.filter((item)=> item.id >= 10)
}

console.log(filterUserById(users));


/*hacer una funcion que reciba un array como parametro, donde sus elementos son strings y numeros. 
retornar un array que en el indice devuelva el tipo*/ 

const valueType = (arr)=>{
    return arr.map((item, index)=> index + " " +  typeof item)
}

console.log(valueType([5, "Hola", 8, "Mundo", {},]));





const isPangrama = (str)=>{
  return [...new Set(str)].length === 26
 
}

console.log(isPangrama("abhckbdlmefghijklmnopqrstuvwxyz"));
console.log(isPangrama("bfjefjkbkqwfhqwnfjkwlfjwesegksen"));



const isPar = (num)=>{
    return typeof(num) === "string" ? "No es un numero" : num % 2 === 0 ? true : false 
}

console.log(isPar(2));
console.log(isPar(5));
console.log(isPar("hola"));

const isImpar = (num)=>{
    return num % 2 === 0 ? true : typeof(num) == "string" ? "no es un numero": false 
}

console.log(isImpar(2));
console.log(isImpar(5));
console.log(isImpar("hola"));













