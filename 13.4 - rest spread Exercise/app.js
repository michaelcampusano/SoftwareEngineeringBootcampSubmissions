// [ PART 1 - ES5 => ES2015 Refactoring] -----------------------------------------------------------------------------------------------------------------------------------------------

/*
In this exercise, you’ll refactor some ES5 code into ES2015.

ES5 Function that takes a variable number of arguments:

function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}
*/
// Refactor it to use the rest operator & an arrow function (ES2015 version):

const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)


// [ PART 2 - "findMin" Function ] -----------------------------------------------------------------------------------------------------------------------------------------------------

/*
Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
Make sure to do this using the rest and spread operator.
*/

// "findMin" Function in arrow function format, using rest & spread operator:
const findMin = (...args) => Math.min(...args)

// Test function calls:
findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1


// [ PART 3 - "mergeObjects" Function ] ------------------------------------------------------------------------------------------------------------------------------------------------

/*
Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
*/

// "mergeObjects" Function in arrow function format, using rest & spread operator:
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

// Test function calls:
mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}


// [ PART 4 - "doubleAndReturnArgs" Function ] -----------------------------------------------------------------------------------------------------------------------------------------

/*
Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments.
The function should return a new array with the original array values and all of additional arguments doubled.
*/

// "doubleAndReturnArgs" Function in arrow function format, using rest & spread operator:
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)]

// Test function calls:
doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4) // [2, 20, 8]


// [PART 4 - "Slice and Dice" (multiple functions) ] -----------------------------------------------------------------------------------------------------------------------------------

    // (A) - Remove a random element in the items array and return a new array without that item:
    
        const removeRandom = items => {
            let idx = Math.floor(Math.random() * items.length);
            return [...items.slice(0, idx), ...items.slice(idx + 1)];
        }
    
    
    // (B) - Return a new array with every item in array1 and array2:
    
        const extend = (array1, array2) => {
            return [...array1, ...array2];
        }

    
    // (C) - Return a new object with all the keys and values from obj and a new key/value pair:

        const addKeyVal = (obj, key, val) => {
            let newObj = { ...obj }
            newObj[key] = val;
            return newObj;
        }


    // (D) - Return a new object with a key removed:

        const removeKey = (obj, key) => {
            let newObj = { ...obj }
            delete newObj[key]
            return newObj;
        }


    // (E) - Combine two objects and return a new object:

        const combine = (obj1, obj2) => {
            return { ...obj1, ...obj2 };
        }


    // (F) - Return a new object with a modified key and value:

        const update = (obj, key, val) => {
            let newObj = { ...obj }
            newObj[key] = val;
            return newObj;
        }
