/*El viejo cambio
escribir una función vowel2index(str)que toma una cadena y reemplaza todas las vocales [a,e,i,o,u] 
con sus respectivas posiciones dentro de esa cadena.
P.ej:
vowel2index('this is my string') == 'th3s 6s my str15ng'
vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
vowel2index('') == ''
Su función debe ser insensible a las mayúsculas y minúsculas de las vocales.*/

const vowel2index =(str)=> {
   
    return str.split("").map((item, index)=>item.replace(/[aeiou]/i,(index)+1)).join("")
 }

 console.log(vowel2index('this is my string'));
 console.log(vowel2index('Codewars is the best site in the world'));
 console.log(vowel2index('Tomorrow is going to be raining'));
 console.log(vowel2index(''));
 
 
 