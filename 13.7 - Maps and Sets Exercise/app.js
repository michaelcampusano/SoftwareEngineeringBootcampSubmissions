// [ PART 1 - "Quick Question #1" ]

    /* What does the following code return? */

    // Code/Return:
        new Set([1,1,2,2,3,4]) // {1,2,3,4}


// [ PART 2 - "Quick Question #2" ]

    /* What does the following code return? */

    // Code/Return:
        /* 
        This is the code included in the exercise instructions/documentation and contains errors:     
            
            [...new Set("referee")].join("")
        
        This is my corrected version:
        */
        const uniqueChars = new Set("referee");
        const result = [...uniqueChars].join("");
        console.log(result); // "ref"


// [ PART 3 - "Quick Question #3" ]

    /* What does the following code return? */

    // Code/Return
        let m = new Map(); 
        m.set([1,2,3], true); // 0: {Array(3) => true}
        m.set([1,2,3], false); // 1: {Array(3) => false}


// [ PART 4 - "hasDuplicate" ]

    /* Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate. */

    // Solution:
        const hasDuplicate = arr => new Set(arr).size !== arr.length

    // Test function calls & return:
        hasDuplicate([1,3,2,1]) // true
        hasDuplicate([1,5,-1,4]) // false


// [ PART 5 - "vowelCount" ]

    /* 
    Write a function called vowelCount.
    It accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string. 
    */

    // Solution:
        function isVowel(char){
            return "aeiou".includes(char);
        } 
        function vowelCount(str){
            const vowelMap = new Map();
            for(let char of str){
            let lowerCaseChar = char.toLowerCase()
            if(isVowel(lowerCaseChar)){
                if(vowelMap.has(lowerCaseChar)){
                vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
                } else {
                vowelMap.set(lowerCaseChar, 1);
                }
            }
            }
            return vowelMap;
        }

    // Test function calls & return:
        vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
        vowelCount('Colt') // Map { 'o' => 1 }