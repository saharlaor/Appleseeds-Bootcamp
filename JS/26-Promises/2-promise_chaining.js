function makeAllCaps(arr) {
  return new Promise((res, rej) =>
    arr.every((element) => element.toString() === element)
      ? res(arr.map((str) => str.toUpperCase()))
      : rej("Array contains non string Object")
  );
}

function sortWords(arr) {
  return new Promise((res, rej) =>
    arr.every((element) => element.toString() === element)
      ? res(arr.sort())
      : rej("Array contains non string Object")
  );
}

makeAllCaps(["a", "c", "b", 1])
  .then((res) => sortWords(res))
  .then((res) => console.log(res))
  .catch((err) => {
    console.log(err);
  });
