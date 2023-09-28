/*Filtrado de listas
En este kata, creará una función que toma una lista de cadenas y números enteros no negativos y 
devuelve una nueva lista con las cadenas filtradas.

Ejemplo
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]*/

const filter_list = (l) => {
   return l.filter((item)=> typeof (item) === 'number')
  }

  console.log(filter_list([1,2,'a','b']));
  console.log(filter_list([1,'a','b',0,15]));
  console.log(filter_list([1,2,'aasf','1','123',123]));
  