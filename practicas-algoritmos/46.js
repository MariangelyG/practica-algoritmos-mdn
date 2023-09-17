/*Algoritmo
Dado este objeto, rellénalo con los valores que te pido sacando los datos de la propiedad "phrase"*/
const stringsData = {
phrase: 'El conocimiento es poder, pero la práctica es la clave para desbloquearlo.',
firstFloor: {
//Sólo vocales
vowels: []
},
secondFloor: {
//Sólo consonantes (sin espacios, sin puntos y sin comas)
consonants: []
},
 thirdFloor: {
//El valor asciicode de cada letra
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
 asciiCode: []},
 fourthFloor: {
//Cada palabra de la frase será una posición del array
wordsInUppercase: [],
 wordsInLowercase: []
},
 fifthFloor: {
// En este nivel codificarás la frase para que sea un secreto.
// Si el caracter es una vocal, la sustituirás por un número siendo a-1 e-2 i-3 o-4 u-5
 // Si el caracter es una consonante deberás sustituirlo por su consonante anterior, si fuera una c, sería una b y si fuera una p sería una ñ y así sucesivamente
// Si el caracter es un espacio u otro caracter que no sea una letra lo sustituirás por una letra random del alfabeto
secretCode: '' }};


const phrase = (obj)=>{
    let soloVocales = Object.values(obj)[0].replace(/[^aeiou]/gi, "")
    let soloConsonantes = Object.values(obj)[0].replace(/^\.[aeiou]$/gi, "")

    return soloConsonantes

}

console.log(phrase(stringsData));
