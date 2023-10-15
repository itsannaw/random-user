import { faker } from "@faker-js/faker";

const charSets = {
  pl: [
    " ",
    "a",
    "ą",
    "b",
    "c",
    "ć",
    "d",
    "e",
    "ę",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "ł",
    "m",
    "n",
    "ń",
    "o",
    "ó",
    "p",
    "q",
    "r",
    "s",
    "ś",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "ź",
    "ż",
  ],
  en_us: [
    " ",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
  tr: [
    " ",
    "a",
    "b",
    "c",
    "ç",
    "d",
    "e",
    "f",
    "g",
    "ğ",
    "h",
    "ı",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "ö",
    "p",
    "r",
    "s",
    "ş",
    "t",
    "u",
    "ü",
    "v",
    "y",
    "z",
  ],
  num: ["-", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
};

const maxStrLength = 35;
const minStrLength = 5;

export function deleteSymbol(str) {
  let array = str.split("");
  array.splice(
    faker.helpers.arrayElement(
      Array.from({ length: array.length }, (_, i) => i)
    ),
    1
  );
  return array.join("");
}

export function addSymbol(str, region, bool) {
  let array = str.split("");
  if (bool) {
    array.splice(
      faker.helpers.arrayElement(
        Array.from({ length: array.length }, (_, i) => i)
      ),
      0,
      faker.helpers.arrayElement(charSets.num)
    );
  } else {
    array.splice(
      faker.helpers.arrayElement(
        Array.from({ length: array.length }, (_, i) => i)
      ),
      0,
      faker.helpers.arrayElement(charSets[region])
    );
  }
  return array.join("");
}

export function swapSymbol(str) {
  let array = str.split("");
  let random = faker.helpers.arrayElement(
    Array.from({ length: array.length - 1 }, (_, i) => i + 1)
  );
  let elem = array[random];
  array[random] = array[random + 1];
  array[random + 1] = elem;
  return array.join("");
}

export function randomError(str, region, bool) {
  let arrayError = [
    deleteSymbol(str),
    addSymbol(str, region, bool),
    swapSymbol(str),
  ];
  if (str.length < minStrLength)
    arrayError = [addSymbol(str, region, bool), swapSymbol(str)];
  if (str.length > maxStrLength)
    arrayError = [deleteSymbol(str), swapSymbol(str)];
  let randomError = faker.helpers.arrayElement(arrayError);
  return randomError;
}

function makeMistakes(str, region, bool, count, seed) {
  faker.seed(seed);
  let countMistake = Math.trunc(count);
  let prob = count - countMistake;

  for (let i = 0; i < countMistake; i++) {
    str = randomError(str, region, bool);
  }

  faker.helpers.maybe(
    () => {
      str = randomError(str, region, bool);
    },
    { probability: prob }
  );

  return str;
}

export default makeMistakes;
