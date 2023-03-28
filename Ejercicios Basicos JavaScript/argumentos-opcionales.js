/*
    Crea una función que sume dos argumentos. Si sólo se proporciona un argumento,
    entonces devuelve una función que espera un argumento y devuelve la suma.

    Por ejemplo, addTogether(2, 3) debe devolver 5 y addTogether(2) debe devolver
    una función.

    Si se llama a esta función devuelta con un solo argumento, se obtendrá la suma:

        var sumTwoAnd = addTogether(2);
        sumTwoAnd(3) devuelve 5.

    Si cualquiera de los dos argumentos no es un número válido, devuelve undefined.
*/
function addTogether() {
  const [first, second] = arguments;
  if (typeof first !== "number") return undefined;
  if (arguments.length === 1) return (second) => addTogether(first, second);
  if (typeof second !== "number") return undefined;
  return first + second;
}

addTogether(2, 3);
