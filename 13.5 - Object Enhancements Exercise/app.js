/*

Object Enhancements Exercise

In this exercise, you’ll refactor some ES5 code into ES2015.

*/


    // [ PART 1 - "Same keys and values"]

        //ES5 version:
        function createInstructor(firstName, lastName){
            return {
            firstName: firstName,
            lastName: lastName
            }
        }

        //ES2015 version:
        function createInstructor(firstName, lastName){
            return {
            firstName,
            lastName
            }
        }


    // [ PART 2 - "Computed Property Names" ]

        //ES5 version:
        var favoriteNumber = 42;
        var instructor = {
        firstName: "Colt"
        }
        instructor[favoriteNumber] = "That is my favorite!"

        //ES2015 version:
        let favoriteNumber = 42;
        const instructor = {
        firstName: "Colt",
        [favoriteNumber]: "That is my favorite!"
        }


    // [ PART 3 - "Object Methods" ]

        //ES5 version:
        var instructor = {
            firstName: "Colt",
            sayHi: function(){
            return "Hi!";
            },
            sayBye: function(){
            return this.firstName + ' says "bye!"';
            }
        }

        //ES2015 version:
        const instructor = {
            firstName: "Colt",
            sayHi(){
            return "Hi!";
            },
            sayBye(){
            return this.firstName + ' says "bye!"';
            }
    }


// [ PART 4 - "createAnimal function" ]

/*
Write a function which generates an animal object. The function should accepts 3 arguments:
- species: the species of animal (‘cat’, ‘dog’)
- verb: a string used to name a function (‘bark’, ‘bleet’)
- noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
*/

    // Solution:
        
        function createAnimal(species, verb, noise){
            return {
            species,
            [verb](){
                return noise;
            }
            }
        }
    
    // Test function calls:

        // (A)
        const d = createAnimal("dog", "bark", "Woooof!") // {species: "dog", bark: ƒ}
        d.bark()  //"Woooof!"

        // (B)
        const s = createAnimal("sheep", "bleet", "BAAAAaaaa") // {species: "sheep", bleet: ƒ}
        s.bleet() //"BAAAAaaaa"
        