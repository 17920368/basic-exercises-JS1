/*
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados,
 pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, 
pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/
/* -------------------------------------------------------------------------- */
/*                                Exercise one                                */
/* -------------------------------------------------------------------------- */
function countChart(data) {
  let isString = typeof data;
  if (isString == "string") {
    return data.length;
  } else {
    console.error("It's not string");
  }
}

console.log(countChart("Hola Mundo"));
/* -------------------------------------------------------------------------- */
/*                                Exercise two                                */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                               Exercise three                               */
/* -------------------------------------------------------------------------- */
function splitString(text, charat) {
  let isString = typeof text;
  if (isString == "string") {
    return text.split(charat);
  } else {
    console.error("It's not string");
  }
}
console.log(splitString("hola que tal", " "));
/* -------------------------------------------------------------------------- */
/*                                Exercise four                               */
/* -------------------------------------------------------------------------- */
let textReturn = "";
function textLoop(text, cont) {
  let isString = typeof text;
  if (isString == "string") {
    for (let index = 0; index < cont; index++) {
      textReturn += text + " ";
    }
  } else {
    return console.error("It's not string");
  }
  return textReturn;
}

console.log(textLoop("Hola Mundo", 3));
