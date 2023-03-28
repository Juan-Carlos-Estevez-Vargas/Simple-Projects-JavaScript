/*
 *Programa una función para convertir grados Celsius a Fahrenheit y viceversa,
 *pe. miFuncion(0,"C") devolverá 32°F
 */
const grados = (grados = undefined, tipo = "") => {
  if (grados === undefined) return document.write("No ingresaste los grados");
  if (tipo === "") return document.write("NO ingresaste el tipo de conversión");
  if (typeof grados !== "number" || typeof tipo !== "string")
    return document.write("Los datos ingresados son incorrectos");

  return tipo.toLowerCase() === "c"
    ? document.write(
        `${grados} Celcius es equivalente a ${Math.round(
          grados * (9 / 5) + 32
        )} grados Farenheit`
      )
    : tipo.toLowerCase() === "f"
    ? document.write(
        `${grados} Farenheit es equivalente a ${Math.round(
          (grados - 32) * (5 / 9)
        )} grados Farenheit`
      )
    : document.write("Tipo de conversión no contemplada");
};

grados(12, "f");
