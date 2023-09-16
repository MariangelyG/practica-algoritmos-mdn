/*
Problema:

Estás trabajando en la aplicación de un sitio de comercio electrónico, y te han asignado la tarea de desarrollar 
una función que calcule el costo total de un carrito de compras. La función, llamada "calcularTotal", 
debe aceptar un arreglo de objetos, donde cada objeto representa un artículo en el carrito.

Cada objeto artículo debe tener las siguientes propiedades:

nombre: Un string que representa el nombre del artículo.
precio: Un número que representa el precio unitario del artículo.
cantidad: Un número entero que representa la cantidad de ese artículo en el carrito.
Adicionalmente, la función debe aceptar un segundo argumento, un número que representa un código de descuento en porcentaje (entre 0 y 100).

La función debe calcular el costo total del carrito, aplicar el descuento si existe, y devolver el total final como un número.
Entrada Propuesta:
javascript
Copy code
const carrito = [
  { nombre: "Camisa", precio: 20, cantidad: 2 },
  { nombre: "Pantalones", precio: 40, cantidad: 1 },
  { nombre: "Zapatos", precio: 60, cantidad: 1 }];

const descuento = 10; // Representa un 10% de descuento
Salida Esperada en Consola:

Explicación:

El costo total sin descuento se calcula sumando los productos de los precios y las cantidades de cada artículo:

Camisas: 20 * 2 = 40
Pantalones: 40 * 1 = 40
Zapatos: 60 * 1 = 60
El total sin descuento es 40 + 40 + 60 = 140. Luego se aplica un descuento del 10%, lo que equivale a 14, y se resta del total, 
dando un resultado final de 140 - 14 = 126.

*/
const carrito = [
{ nombre: "Camisa", precio: 20, cantidad: 2 },
{ nombre: "Pantalones", precio: 40, cantidad: 1 },
{ nombre: "Zapatos", precio: 60, cantidad: 1 }];

const cacularTotal = (carrito, descuento)=>{
  let suma = carrito.map((item)=>  item.precio * item.cantidad).reduce((acc, item)=> acc + item)
  return suma - (suma * descuento / 100)
}

console.log(cacularTotal(carrito, 10));
