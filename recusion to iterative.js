// exercise 1
function countingSheep(numSheep) {
    for (let i = numSheep;  i > 0; i--) {
      console.log(`${i}: Another sheep jumps over the fence`);
    }
    console.log('All sheep jumped over the fence');
}

// O(n)

function powerCalculatorRec(integer, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result = result * integer;
  }
  return result;
}

// O(n)

function reverseString(str) {
  let result = '';
  for (let i=0;i<str.length;i++) {
    result += str[str.length-i-1]
  }
  return result;
}

// O(n)

function triangularNumber(n) {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result = result + i;
  }
  return result;
}

// O(n)

function stringSplitter(str, separator) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== separator) {
      result = result + str[i];
    }
  }
  return result;
}

// O(n)

function fibonacci(n) {
  let result = [];
  for (let i = 0; i <= n; i++) {
    if (i===0) { result.push(0) }
    else if (i===1) { result.push(1) }
    else { result.push(result[i-1] + result[i-2]) }   
  }
  return result;
}

// O(n)

function factorial(n) {  
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}

// O(n)

function main() {
  /* exercise 1 */
  // countingSheep(3);
  
  /* exercise 2 */
  // console.log(powerCalculatorRec(10, 2));
  // console.log(powerCalculatorRec(10, 3)); 

  /* exercise 3 */
  // console.log(reverseString('abcd'));

  /* exercise 4 */
  // console.log(triangularNumber(6));
  
  /* exercise 5 */
  // console.log(stringSplitter('02/20/2020', '/'));

  /* exercise 6 */
  // console.log(fibonacci(7));

  /* exercise 7 */
  console.log(factorial(5));

}

main();