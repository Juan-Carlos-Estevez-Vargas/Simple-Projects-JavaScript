/*
 *Programa una función para contar el número de veces que se repite una
 *palabra en un texto largo, pe. miFuncion("hola mundo adios mundo",
 *"mundo") devolverá 2.
 */
const palabraRepetida = (cadena = "", texto = "") => {
  if (!cadena) return console.warn("NO ingresaste una cadena");
  if (!texto) return console.warn("NO ingresasteel texto a evaluar");

  let i = 0,
    contador = 0;

  while (i !== -1) {
    i = cadena.indexOf(texto, i);
    if (i !== -1) {
      i++;
      contador++;
    }
  }
  return document.write(`La palabra ${texto}  se repite ${contador} veces`);
};

palabraRepetida(
  "Quise cultivar cultivar cultivar un amor y me he quedado solo",
  "cultivar"
);
