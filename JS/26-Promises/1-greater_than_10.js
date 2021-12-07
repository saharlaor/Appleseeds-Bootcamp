function checkGreateThan10(number) {
  return new Promise((resolve, reject) => {
    number > 10
      ? resolve(`${number} Greater than 10`)
      : reject(`${number} Lesser than 10`);
  });
}

checkGreateThan10(6)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

checkGreateThan10(12)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
