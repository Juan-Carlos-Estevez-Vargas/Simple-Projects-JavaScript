/*
    Convierte el número proporcionado en un número romano.

        | Números romanos	| Números arábigos  |
        |        M	        |       1000        |
        |        CM	        |       900         |
        |        D	        |       500         |
        |        CD	        |       400         |
        |        C	        |       100         |
        |        XC	        |       90          |
        |        L	        |       50          |
        |        XL	        |       40          |
        |        X	        |       10          |
        |        IX	        |       9           |
        |        V	        |       5           |
        |        IV	        |       4           |
        |        I	        |       1           |

    Todas las respuestas de los números romanos deben ser proporcionadas en mayúsculas.
*/
function convertToRoman(num) {
  let millar = Math.floor(num / 1000) * 1000;
  let centenas = Math.floor((num - millar) / 100) * 100;
  let decenas = Math.floor((num - millar - centenas) / 10) * 10;
  let unidades = Math.floor(num - millar - centenas - decenas);

  let romano = "";

  if (millar == 3000) {
    romano += "MMM";
  } else if (millar == 2000) {
    romano += "MM";
  } else if (millar == 1000) {
    romano += "M";
  }

  if (centenas == 100) {
    romano += "C";
  } else if (centenas == 200) {
    romano += "CC";
  } else if (centenas == 300) {
    romano += "CCC";
  } else if (centenas == 400) {
    romano += "CD";
  } else if (centenas == 500) {
    romano += "D";
  } else if (centenas == 600) {
    romano += "DC";
  } else if (centenas == 700) {
    romano += "DCC";
  } else if (centenas == 800) {
    romano += "DCCC";
  } else if (centenas == 900) {
    romano += "CM";
  }

  if (decenas == 10) {
    romano += "X";
  } else if (decenas == 20) {
    romano += "XX";
  } else if (decenas == 30) {
    romano += "XXX";
  } else if (decenas == 40) {
    romano += "XL";
  } else if (decenas == 50) {
    romano += "L";
  } else if (decenas == 60) {
    romano += "LX";
  } else if (decenas == 70) {
    romano += "LXX";
  } else if (decenas == 80) {
    romano += "LXXX";
  } else if (decenas == 90) {
    romano += "XC";
  }

  if (unidades == 1) {
    romano += "I";
  } else if (unidades == 2) {
    romano += "II";
  } else if (unidades == 3) {
    romano += "III";
  } else if (unidades == 4) {
    romano += "IV";
  } else if (unidades == 5) {
    romano += "V";
  } else if (unidades == 6) {
    romano += "VI";
  } else if (unidades == 7) {
    romano += "VII";
  } else if (unidades == 8) {
    romano += "VIII";
  } else if (unidades == 9) {
    romano += "IX";
  }

  console.log(romano);
  return romano;
}

convertToRoman(36);
