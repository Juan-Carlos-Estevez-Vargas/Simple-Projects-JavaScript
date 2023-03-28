/*
 *Programa una función que dada una fecha válida determine
 *cuantos años han pasado hasta el día de hoy,
 *pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
 */
const tiempoTranscurrido = (fecha = undefined) => {
  if (fecha === undefined) return document.write("NO ingresaste una fecha");
  if (!fecha instanceof Date)
    return document.write(
      "El valor ingresado NO corresponde a una fecha válida"
    );

  let fechaActualMenosFechaIngresada = new Date().getTime() - fecha.getTime();
  let aniosEnMilisegundos = 1000 * 60 * 60 * 24 * 365;
  let resultado = Math.floor(
    fechaActualMenosFechaIngresada / aniosEnMilisegundos
  );
  return Math.sign(resultado) === -1
    ? document.write(
        `Faltan ${Math.abs(
          resultado
        )} años para llegar al ${fecha.getFullYear()},`
      )
    : Math.sign(resultado) === 1
    ? document.write(
        `Han transcurrido ${resultado} desde ${fecha.getFullYear()}`
      )
    : document.write("Estamos en el año actual.");
};

tiempoTranscurrido(2090, 4, 14);
