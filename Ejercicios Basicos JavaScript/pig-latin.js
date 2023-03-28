/*
    Pig Latin (latin de los cerdos) es una manera de alterar las palabras en inglés. 
    Las normas son las siguientes:

    - Si una palabra comienza con una consonante, toma la primer consonante o grupo 
    de consonantes, muévela al final de la palabra, y añade ay a ella.

    - Si una palabra comienza con una vocal, solo añade way al final.

    Traduce la cadena proporcionada a Pig Latin. Las cadenas de entrada están 
    garantizadas como palabras en inglés en minúsculas.
*/
function translatePigLatin(str) {
  // Create variables to be used
  var pigLatin = "";
  var regex = /[aeiou]/gi;

  // Check if the first character is a vowel
  if (str[0].match(regex)) {
    pigLatin = str + "way";
  } else if (str.match(regex) === null) {
    // Check if the string contains only consonants
    pigLatin = str + "ay";
  } else {
    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);

    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
  }

  return pigLatin;
}

translatePigLatin("consonant");
