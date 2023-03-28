/*
 *Programa una función que valide que un texto sea un email válido,
 *pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
 */
const validarEmail = (email = "") => {
  if (email === "") return document.write("NO ingresaste ningun email");
  if (typeof email !== "string")
    return document.write(
      "El dato ingresado NO pertenece a una cadena de texto"
    );

  let expresion_regular =
    /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(
      email
    );

  return expresion_regular
    ? document.write(`${email} es un email válido`)
    : document.write(`${email} NO es un email válido`);
};

validarEmail("juank2001estevez@gmail.com");
