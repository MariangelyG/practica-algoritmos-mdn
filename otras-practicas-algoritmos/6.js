// Mensaje invertido
// Invierte un mensaje para que las palabras y letras que se le pasan se pongan en minúsculas y se inviertan. 
// Además, escriba en mayúscula la primera letra de las palabras recién invertidas. Si un número o símbolo (!#,>) 
// está ahora en la primera posición de la palabra, no es necesario utilizar mayúsculas.

// Ejemplo:

// reverseMessage('This is an example of a Reversed Message!');
// Returns: '!egassem Desrever A Fo Elpmaxe Na Si Siht'

const reverseMessage = (str)=> {
  
    let invetirString = str.toLowerCase().split("").reverse().join("")
    return invetirString.split(" ").map((item)=> item.charAt(0).toUpperCase() + item.slice(1)).join(" ")

}


console.log(reverseMessage('AaaaA'));
console.log(reverseMessage('Hello there'));
console.log(reverseMessage('Pl34k78j'));
console.log(reverseMessage('Reverse this message!'));
console.log(reverseMessage('Today is the 14th of January!'));
console.log(reverseMessage('hty56hA T76#Td'));
console.log(reverseMessage(''));

 // return str.split("").reverse().join("").toLowerCase().split(" ").map(x=>x.charAt(0).toUpperCase()+x.slice(1)).join(" ");

