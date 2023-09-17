/*Escribir una funcion que reciba un array de strings como parametro y que devuelva un array de objetos
con las propiedades: Palabra donde se va a colocar el valor del elemento del array, otra 
propiedad que se llamara longitud donde se le asignara como valor la longitud del elemento
del array y una ultima propiedad que se va a llamar mensaje y va a tener como valor es muy largo
si la longitud de la palabra es mayor a 10, y en caso contrario tamaño estandar.

entrada: ['Jose', 'Saavedra', 'estudioprogramacion']
salida: [
  { palabra: 'Jose', longitud: 4, mensaje: 'tamaño estandar' },
  { palabra: 'Saavedra', longitud: 8, mensaje: 'tamaño estandar' },
  {
    palabra: 'estudioprogramacion',
    longitud: 19,
    mensaje: 'es muy largo'
  }
]*/

const devolverArrayObjetos = (arr)=>{
    
    return arr.map((item)=>(
                   {palabras : item,
                    longitud : item.length,
                    mensaje: item.length > 10 ? "es muy largo" : "tamaño estandar"}
 ))
    }


console.log(devolverArrayObjetos(['Jose', 'Saavedra', 'estudioprogramacion']));
