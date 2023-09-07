/*Jaden Smith, el hijo de Will Smith, es la estrella de películas como The Karate Kid (2010) y After Earth (2013). 
Jaden también es conocido por parte de su filosofía que transmite a través de Twitter . Cuando escribe en Twitter,
es conocido por escribir casi siempre con mayúscula cada palabra. Para simplificar, tendrá que poner cada palabra en mayúsculas,
verifique cómo se espera que sean las contracciones en el ejemplo a continuación.

Su tarea es convertir las cadenas a cómo las escribiría Jaden Smith. Las cadenas son citas reales de Jaden Smith,
pero no están en mayúsculas de la misma forma en que las escribió originalmente.*/

const toJaden =  (str) => {
 return  str.split(" ").map((item)=> item[0].toUpperCase() + item.slice(1)).join(" ")
};

console.log(toJaden("How can mirrors be real if our eyes aren't real"));
  