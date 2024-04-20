// [ PART 1 - "Object Destructuring 1"]

    // What does the following code return/print?

    // Code:
        let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
        let {numPlanets, yearNeptuneDiscovered} = facts;

    // Print/return:
        console.log(numPlanets); // 8
        console.log(yearNeptuneDiscovered); // 1846


// [ PART 2 - "Object Destructuring 2"]

    // What does the following code return/print?

    // Code:
        let planetFacts = {
            numPlanets: 8,
            yearNeptuneDiscovered: 1846,
            yearMarsDiscovered: 1659
        };  
        let {numPlanetsB, ...discoveryYears} = planetFacts;
    
    // Print/return:
        console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}


// [ PART 3 - "Object Destructuring 3"]

    // What does the following code return/print?

    // Code:
        function getUserData({firstName, favoriteColor="green"}){
            return `Your name is ${firstName} and you like ${favoriteColor}`;
        }
    
    // Print/return:
        getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // Your name is Alejandro and you like purple  
        getUserData({firstName: "Melissa"}) // Your name is Melissa and you like green  
        getUserData({}) // Your name is undefined and you like green


// [ PART 4 - "Array Destructuring 1"]

    // What does the following code return/print?

    // Code:
        let [first, second, third] = ["Maya", "Marisa", "Chi"];

    // Print/return:
        console.log(first); // Maya
        console.log(second); // Marisa
        console.log(third); // Chi


// [PART 5 - "Array Destructuring 2" ]

    // What does the following code return/print?

    // Code:
        let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
            "Raindrops on roses",
            "whiskers on kittens",
            "Bright copper kettles",
            "warm woolen mittens",
            "Brown paper packages tied up with strings"
            ]

    // Print/return:
        console.log(raindrops); // "Raindrops on roses"
        console.log(whiskers); // "whiskers on kittens"
        console.log(aFewOfMyFavoriteThings); // ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]


// [PART 6 - "Array Destructuring 3" ]

    // What does the following code return/print?

    // Code:
        let numbers = [10, 20, 30];
        [numbers[1], numbers[2]] = [numbers[2], numbers[1]]

    // Print/return:
        console.log(numbers) // [10,30,20]


// [ PART 7 - "ES2015 Refactoring" (multiple functions) ]

    /* In this exercise, you’ll refactor some ES5 code into ES2015. */

    // (A) - Assigning Variables to Object Properties

        // ES5 version:
            var obj = {
                numbers: {
                a: 1,
                b: 2
                }
            };
            var a = obj.numbers.a;
            var b = obj.numbers.b;

        // ES2015 version:
            const obj = {
                numbers: {
                a: 1,
                b: 2
                }
            };  
            const {a,b} = obj.numbers


    // (B) - Array Swap

        // ES5 version:
            var arr = [1, 2];
            var temp = arr[0];
            arr[0] = arr[1];
            arr[1] = temp;

        // ES2015 version:
            [arr[0], arr[1]] = [arr[1], arr[0]]


// [ PART 8 - "raceResults()" ]

    /*
    Write a function called raceResults which accepts a single array argument. It should return an object with the keys first, second, third, and rest.
    - first: the first element in the array
    - second: the second element in the array
    - third: the third element in the array
    - rest: all other elements in the array
    */

    // Solution:
        raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre']) // {first: "Tom", second: "Margaret", third: "Allison", rest: ["David", "Pierre"]}

    /*
    Write a one line function to make this work using:
    - An arrow function
    - Destructuring
    - Enhanced object assignment (same key/value shortcut)
    */

    //Solution:
        const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})
