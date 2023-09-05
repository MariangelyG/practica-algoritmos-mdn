/*hacer una funcion que reciba un array de palabras y retornar todas las palabras que tienen una letra "a"
 apartir del cuarto caracter en adelante*/

 const wordsWithA = (arr)=>{
    return arr.filter((item)=> item.includes("a", 4))
 }

 console.log(wordsWithA(["apple", "banana", "avocado", "grape"]));
 

/* hacer una funcion que calcule el promedio apartir de un array de numeros,  
y luego crear otra funcion para evaluar si el resultado de la funcion es aprobado o reprobado. */

const calcularPromedio = (arr) =>{
   let promedio = arr.reduce((acc,item)=>acc+item)/arr.length
   return promedio >= 70 ? "aprobado" : "reprobado"
}

console.log(calcularPromedio([85, 92, 88, 78, 90]));


/*hacer una funcion y tomar una cadena de texto como entrada, 
y devolver la cadena de texto mas grande encontrada*/

const cadenaMasGrande = (str) =>{
    return  str.split(" ").sort((a,b)=> b.length - a.length)[0]
  
}


console.log(cadenaMasGrande( "La programación es fascinante y desafiante"));
