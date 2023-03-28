/*
 *Programa una función que dada una cadena de texto cuente el
 *número de vocales y consonantes,
 *pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
 */
const contadorVocalesConsonantes = (cadena = "") => {
  if (cadena === "") return document.write("NO ingresaste ninguna cadena");
  if (typeof cadena !== "string")
    return document.write(
      "El dato ingresado NO pertenece a una cadena de texto"
    );

  let contadorVocales = 0,
    contadorConsonantes = 0;

  for (let letra of cadena) {
    if (/[aeiouAEIOUáéíóúÁÉÍÓÚ]/.test(letra)) contadorVocales++;

    if (/[bcdfghjklmnñpqrstvwxyzBCDFGHJKLMNÑPQRSTVWXYZ]/.test(letra))
      contadorConsonantes++;
  }

  return document.write(
    `Vocales: ${contadorVocales} Consonantes: ${contadorConsonantes}`
  );
};

contadorVocalesConsonantes("Perra re malparida");
