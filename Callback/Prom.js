const add = (a, b) => {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      reject(new Error("input must be numbers"));
    } else {
      resolve(a + b);
    }
  });
};

add(5, a)
  .then((result) => {
    console.log(`Addition result: ${result}`);
  })
  .catch((error) => {
    console.error(error.message);
  });
