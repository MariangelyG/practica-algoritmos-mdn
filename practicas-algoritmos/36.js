/*Enunciado
Desarrolla una función en JavaScript que reciba como entrada
una lista de objetos que representen a personas, donde cada objeto contenga las
propiedades nombre, edad, correo y activo. La función debe encontrar y retornar
el nombre y correo electrónico de todas las personas que tienen 18 años o más y
están marcadas como activas.

Entrada:

Una lista de objetos personas. Cada objeto tiene las
siguientes propiedades:
nombre: Una cadena de texto que representa el nombre de la
persona.
edad: Un número entero que representa la edad de la persona.
correo: Una cadena de texto que representa el correo
electrónico de la persona.
activo: Un valor booleano que indica si la persona está
activa o no.

Salida:

La función debe imprimir en la consola el nombre y el correo
electrónico de todas las personas que cumplan con las condiciones (18 años o
más y están marcadas como activas).
Ejemplos de Entrada y Salida
Ejemplo 1
Entrada:
const personas =
[{ nombre: "Ana", edad: 22, correo: "ana@example.com", activo: true },
{ nombre:"Luis", edad: 17, correo: "luis@example.com", activo: true},
{nombre: "Marta", edad: 35, correo: "marta@example.com", activo:false },
{ nombre: "Carlos", edad: 29, correo: "carlos@example.com", activo: true}]

Salida en la Consola:

Ana: ana@example.com
Carlos: carlos@example.com
La función debe procesar la lista de entrada y aplicar las
condiciones requeridas para encontrar las personas que cumplan con los
criterios especificados.*/

const personas =
[{ nombre: "Ana", edad: 22, correo: "ana@example.com", activo: true },
{ nombre:"Luis", edad: 17, correo: "luis@example.com", activo: true},
{nombre: "Marta", edad: 35, correo: "marta@example.com", activo:false },
{ nombre: "Carlos", edad: 29, correo: "carlos@example.com", activo: true}]

const peoples = (personas)=>{
    return personas.filter((item)=> item.edad > 18 && item.activo === true).map((item)=> {

     return {[item.nombre] : item.correo}
})
}
console.log(peoples(personas));
