/*
 *Programa una función que valide si una palabra o frase dada, es un
 *palíndromo (que se lee igual en un sentido que en otro), pe.
 *mifuncion("Salas") devolverá true
 */
const palindromo = (cadena = "") => {
  if (!cadena) console.warn("NO ingresaste ninguna palabra");
  cadena = cadena.toLowerCase();
  let reves = cadena.split("").reverse().join("");
  return cadena === reves
    ? document.write(`La palabra ${cadena} es palíndroma`)
    : document.write(`La palabra ${cadena} NO es palíndroma`);
};

palindromo("salas");
