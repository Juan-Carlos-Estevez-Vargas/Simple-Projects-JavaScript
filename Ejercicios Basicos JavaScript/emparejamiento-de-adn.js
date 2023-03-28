/*
    El par de hebras del ADN esta formado por pares de nucleobases. Los pares de base 
    son representados por los caracteres AT y CG, que forman bloques de doble hélix 
    ADN.

    A la cadena de ADN le falta el elemento de emparejamiento. Escribe una función que 
    coincida con los pares de base faltantes para la hebra de ADN proporcionada. Para 
    cada carácter de la cadena proporcionada, encuentra el carácter de par base. 
    Devuelve los resultados como un arreglo 2d.

    Por ejemplo, la entrada GCG, devuelve [["G", "C"], ["C","G"], ["G", "C"]]

    El carácter y su par se emparejan en un arreglo, y todos los arreglos se agrupan 
    en un arreglo encapsulado.
*/

function pairElement(str) {
  // Function to match each character with the base pair
  let matchWithBasePair = function (char, pairedArray) {
    switch (char) {
      case "A":
        pairedArray.push(["A", "T"]);
        break;
      case "T":
        pairedArray.push(["T", "A"]);
        break;
      case "C":
        pairedArray.push(["C", "G"]);
        break;
      case "G":
        pairedArray.push(["G", "C"]);
        break;
    }
  };

  // Find pair for every character in the string
  const paired = [];
  for (let i = 0; i < str.length; i++) {
    matchWithBasePair(str[i], paired);
  }

  return paired;
}

// test here
pairElement("GCG");
