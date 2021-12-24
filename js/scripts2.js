/*
5) Programa una función que invierta las palabras de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, 
pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, 
es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres 
de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

*/

/* -------------------------------------------------------------------------- */
/*                                Exercise five                               */
/* -------------------------------------------------------------------------- */
function reverseWord(word = "") {
  if (word === "") return console.warn("Please write a word");
  if (typeof word != "string")
    return console.warn("Please write a valide word");
  let arrayWord = word.split(" ").reverse();
  word = "";
  arrayWord.forEach((element) => (word += element + " "));
  return word;
}
// console.log(reverseWord("Hola Mundo"));
/* -------------------------------------------------------------------------- */
/*                                Exercise six                                */
/* -------------------------------------------------------------------------- */
function countText(text = "", word = "") {
  if (word === "" || text === "") return console.warn("Please write a word");
  if (typeof word != "string" || typeof text != "string")
    return console.warn("Please write a valide word");
  let arrayWord = text.split(" ");
  let count = 0;
  arrayWord.forEach((element) => {
    if (element === word) {
      count++;
    }
  });
  return count;
}
console.log(countText("hola mundo adios mundo", "mundo"));

/* -------------------------------------------------------------------------- */
/*                               Exercise seven                               */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                               Exercise eight                               */
/* -------------------------------------------------------------------------- */
