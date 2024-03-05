// Write a node program that takes in an unlimited number
// of command line arguments, goes through each and prints
// out the sum of them. If any argument is not a whole number,
// skip it. Do support negative numbers though. If any argument
// is not a number, output an error message. We need at least 2 arguments.

// Read in the command line arguments
const args = process.argv.slice(2);
console.log('args:', args);
// Edge case: We need at least 2 arguments.
if (args.length < 2) {
  // console.log("Error: please enter at least 2 args");
  process.exit();
  // throw new Error("Error: please enter at least 2 args")
}

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
    // Edge case: if any argument is not a whole number, skip it
    // check if it's not an integer)

    const convertedNum = Number(arg);

    if (Number.isInteger(convertedNum)) {
      total += convertedNum;
    }
    // Edge case: If any argument is not a number, output an error message.
    if (isNaN(convertedNum )) {
      console.log("Error: please, enter only numbers");
      // should be stopping the executiong here
      process.exit()
    }
    // console.log('arg:', arg, 'total:', total);
  }


  return total;
};

// print it out

console.log('total:', getTotal(args));
