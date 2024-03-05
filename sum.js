// Write a node program that takes in an unlimited number
// of command line arguments, goes through each and prints
// out the sum of them. If any argument is not a whole number,
// skip it. Do support negative numbers though. If any argument
// is not a number, output an error message. We need at least 2 arguments.

// Read in the command line arguments
const args = process.argv.slice(2);
console.log('args:', args);
// Edge case: We need at least 2 arguments.

// declaring the function
const getTotal = function (list) {
  console.log('List:', list);

  // declare and accumulator to store the sum
  let total = 0;
  // iterate through the command line arguments

  // for let i=0 (c-style loop)
  // for of, for in, forEach

  for (let arg of list) {
    // add them together
    total += Number(arg);
    // console.log('arg:', arg, 'total:', total);
  }

  // Edge case: if any argument is not a whole number, skip it
  // Edge case: If any argument is not a number, output an error message.

  return total;
};

// print it out

console.log('total:', getTotal(args));
