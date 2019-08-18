let labels = [];

function repeat(times, action) {
    for (let i = 0; i < times; i++) {
        action(i);
    }
}

// repeat(10, console.log);
// repeat(5, i => labels.push(`Unit ${i}`));
// console.log(labels);

/**
 * --------- High Order Functions -----------------------
 * Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions. 
 * Since we have already seen that functions are regular values, there is nothing particularly remarkable about the fact that such functions exist. 
 * The term comes from mathematics, where the distinction between functions and other values is taken more seriously.
 * 
 * Higher-order functions allow us to abstract over actions, not just values. 
 * They come in several forms. For example, we can have functions that create new functions.
 */

function greaterThan(n) {
    return m => m > n;
}

let greaterThan10 = greaterThan(10);
// console.log(greaterThan10(11));

let horseShoe = "🐴👟";
for (let char of horseShoe) {
    // console.log(char);
}
// console.log(horseShoe.length);

/**
 * ================= Excercises =================================
 * 
 * ----------------- Flattening ---------------------------------
 * Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
 */

let arrays = [
    [1, 2, 3],
    [4, 5],
    [6]
];

// console.log(arrays.reduce((a, b) => a.concat(b)));

/**
 * -------------- Your Own Loop -------------------------------
 * Write a higher-order function loop that provides something like a for loop statement. 
 * It takes a value, a test function, an update function, and a body function. 
 * Each iteration, it first runs the test function on the current loop value and stops if that returns false. 
 * Then it calls the body function, giving it the current value. 
 * Finally, it calls the update function to create a new value and starts from the beginning.
 * 
 * When defining the function, you can use a regular loop to do the actual looping.
 */

function loop(times) {
    if (times > 0) {
        console.log(times);
        return loop(times - 1);
    } else return 0;
}

console.log(loop(3));