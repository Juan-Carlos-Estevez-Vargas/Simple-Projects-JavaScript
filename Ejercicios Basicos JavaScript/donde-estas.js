/*
    Crea una función que busque a través de un arreglo de objetos (primer argumento) 
    y devuelva un arreglo de todos los objetos que tengan pares de nombre y valor 
    coincidentes (segundo argumento). Cada par de nombre y valor del objeto fuente 
    tiene que estar presente en el objeto de la colección si se va a incluir en el 
    arreglo devuelto.

    Por ejemplo, si el primer argumento es [{ first: "Romeo", last: "Montague" }, 
    { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], y el 
    segundo argumento es { last: "Capulet" }, entonces debes devolver el tercer 
    objeto del arreglo (el primer argumento), porque contiene el nombre y su valor, 
    el cual fue pasado como segundo argumento.
*/
function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  const souceKeys = Object.keys(source);

  // filter the collection
  return collection.filter((obj) => {
    for (let i = 0; i < souceKeys.length; i++) {
      if (
        !obj.hasOwnProperty(souceKeys[i]) ||
        obj[souceKeys[i]] !== source[souceKeys[i]]
      ) {
        return false;
      }
    }
    return true;
  });
}

// test here
whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);
