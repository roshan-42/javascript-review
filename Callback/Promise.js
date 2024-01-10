const add = (a, b) => {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      reject(new Error("Inputs must be numbers"));
    } else {
      resolve(a + b);
    }
  });
};

// Promise-based function to subtract two numbers
const subtract = (a, b) => {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      reject(new Error("Inputs must be numbers"));
    } else {
      resolve(a - b);
    }
  });
};

add(5, 10)
  .then((result) => {
    console.log(`Addition result: ${result}`);
    return subtract(result, 3);
  })
  .then((result) => {
    console.log(`Subtraction result: ${result}`);
  })
  .catch((error) => {
    console.error(error.message);
  });
