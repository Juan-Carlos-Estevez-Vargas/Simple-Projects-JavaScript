/*
    Diseña una función checkCashRegister() que acepte el precio de compra como 
    primer argumento (price), la cantidad pagada como segundo argumento (cash), 
    y el dinero en efectivo que tiene la caja (cid) como tercer argumento.

    cid es un arreglo 2D que enumera las monedas disponibles.

    La función checkCashRegister() siempre debe devolver un objeto con una clave 
    status y una clave change.

    Devuelve {status: "INSUFFICIENT_FUNDS", change: []} si el efectivo en caja es 
    menor que el cambio necesario, o si no puedes devolver el cambio exacto.

    Devuelve {status: "CLOSED", change: [...]} si el efectivo en caja como valor 
    de la clave change es igual al cambio que se debe entregar.

    En cualquier otro caso, devuelve {status: "OPEN", change: [...]}, con el cambio 
    a entregar en monedas y billetes, ordenados de mayor a menor, como valor de la 
    clave change.

    |   Unidad Monetaria	|     Importe           |
    |   Penny	            |   $0.01 (PENNY)       |
    |   Nickel	            |   $0.05 (NICKEL)      |
    |   Dime	            |   $0.1 (DIME)         |
    |   Quarter	            |   $0.25 (QUARTER)     |
    |   Dollar	            |   $1 (ONE)            |
    |   Five Dollars	    |   $5 (FIVE)           |
    |   Ten Dollars	        |   $10 (TEN)           |
    |   Twenty Dollars	    |   $20 (TWENTY)        |
    |   One-hundred Dollars	|   $100 (ONE HUNDRED)  |

A continuación, un ejemplo del efectivo en caja en formato de arreglo:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
*/
function checkCashRegister(price, cash, cid) {
  //all money values are multiplied by 100 to deal with precision errors involved with decimals
  const denomination = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1];

  function transaction(price, cash, cid) {
    let changeNeeded = (cash - price) * 100;
    //money will be pushed to the second value in each array
    let moneyProvided = [
      ["ONE HUNDRED", 0],
      ["TWENTY", 0],
      ["TEN", 0],
      ["FIVE", 0],
      ["ONE", 0],
      ["QUARTER", 0],
      ["DIME", 0],
      ["NICKEL", 0],
      ["PENNY", 0],
    ];
    //take the cid, reverse it (like in Roman Numerals exercise), multiply values by 100
    let availCash = [...cid].reverse().map((el) => [el[0], el[1] * 100]);
    //get the total sum of all cash and divide by 100
    let sumOfCash = availCash.reduce((a, b) => a + b[1], 0) / 100;
    //if sumOfCash is exact change needed return
    if (sumOfCash === changeNeeded / 100) {
      return { status: "CLOSED", change: [...cid] };
    }
    //else, run this function
    else
      for (let i = 0; i < availCash.length; i++) {
        //if denomination values are less than changeNeeded and availableCash values are greater than 0, run the while loop
        while (denomination[i] <= changeNeeded && availCash[i][1] > 0) {
          //1. moneyProvided array is increased by denomination value
          moneyProvided[i][1] += denomination[i];
          //2. changeNeeded is decreased by same denomination value
          changeNeeded -= denomination[i];
          //3. availCash is also decreased by same denomination value
          availCash[i][1] -= denomination[i];
        }
      }

    //clean up the moneyProvided array by
    let change = moneyProvided
      //1. resetting the money values by dividing by 100
      .map((el) => [el[0], el[1] / 100])
      //2. filtering out all non-empty dollar and value arrays
      .filter((el) => el[1] !== 0);
    //calculate the total of the change array
    let changeTotal = change.reduce((a, b) => a + b[1], 0);
    //if the total change is less than the change needed
    if (changeTotal < changeNeeded) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    return { status: "OPEN", change };
  }

  //this is where the transaction function is called
  let answer = transaction(price, cash, cid);
  //here the final answer is provided if the 2 if statements don't catch it first
  return answer;
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
