/*Tienes un array de objetos que representan productos en una tienda en línea. 
Cada objeto tiene las siguientes propiedades: nombre, precio y cantidad. 
Escribe una función llamada calcularTotal que tome este array como entrada y 
devuelva el total de la compra, es decir, la suma de los precios multiplicados por la cantidad de cada producto*/

const productos = [
    { nombre: "Camiseta", precio: 20, cantidad: 2 },
    { nombre: "Pantalón", precio: 30, cantidad: 1 },
    { nombre: "Zapatos", precio: 50, cantidad: 2 }
  ];

  const calculateTotal = (arr) =>{
    return arr.reduce((prevValue,currentValue) => {
        return prevValue += (currentValue.precio * currentValue.cantidad)
        
    },0)
  }

  console.log(calculateTotal(productos));
  