/*
 *Programa una función que reciba un número y evalúe si es
 *capicúa o no (que se lee igual en un sentido que en otro),
 *pe. miFuncion(2002) devolverá true
 */
const capicua = (numero = 0) => {
  if (!numero) return document.write("NO ingresaste ningún número");
  if (typeof numero != "number")
    return document.write("Debes ingresar un número");

  numero = numero.toString();
  let al_reves = numero.split("").reverse().join("");

  return numero === al_reves
    ? document.write(`El número ${numero} es capicúa`)
    : document.write(`El número ${numero} NO es capicúa`);
};

capicua(2000);
