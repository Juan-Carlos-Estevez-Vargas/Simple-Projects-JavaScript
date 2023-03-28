/*
    Uno de los cifrados más simples y conocidos es el cifrado César, también conocido 
    como cifrado por desplazamiento. En un cifrado por desplazamiento los significados
    de las letras se desplazan por una cantidad determinada.

    Un uso moderno común es el cifrado ROT13, donde los valores de las letras son 
    desplazados por 13 lugares. Así que A ↔ N, B ↔ O y así sucesivamente.

    Escribe una función que reciba una cadena codificada en ROT13 como entrada y 
    devuelva una cadena decodificada.

    Todas las letras estarán en mayúsculas. No transformes ningún carácter no 
    alfabético (espacios, puntuación, por ejemplo), pero si transmítelos.
*/
function rot13(str) {
  var arr = [];

  for (var i = 0; i < str.length; i++)
    switch (str[i]) {
      case "!":
        arr.push("!");
        break;
      case " ":
        arr.push(" ");
        break;
      case "?":
        arr.push("?");
        break;
      case ".":
        arr.push(".");
        break;
      case "A":
        arr.push("N");
        break;
      case "B":
        arr.push("O");
        break;
      case "C":
        arr.push("P");
        break;
      case "D":
        arr.push("Q");
        break;
      case "E":
        arr.push("R");
        break;
      case "F":
        arr.push("S");
        break;
      case "G":
        arr.push("T");
        break;
      case "H":
        arr.push("U");
        break;
      case "I":
        arr.push("V");
        break;
      case "J":
        arr.push("W");
        break;
      case "K":
        arr.push("X");
        break;
      case "L":
        arr.push("Y");
        break;
      case "M":
        arr.push("Z");
        break;
      case "N":
        arr.push("A");
        break;
      case "O":
        arr.push("B");
        break;
      case "P":
        arr.push("C");
        break;
      case "Q":
        arr.push("D");
        break;
      case "R":
        arr.push("E");
        break;
      case "S":
        arr.push("F");
        break;
      case "T":
        arr.push("G");
        break;
      case "U":
        arr.push("H");
        break;
      case "V":
        arr.push("I");
        break;
      case "W":
        arr.push("J");
        break;
      case "X":
        arr.push("K");
        break;
      case "Y":
        arr.push("L");
        break;
      case "Z":
        arr.push("M");
    }

  return arr.join("");
}

rot13("SERR CVMMN!");
