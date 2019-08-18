//nested scope
const humus = function (factor) {
    const ingredient = function (amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }

        console.log(`${ingredientAmount} ${unit} ${name}`);
    };

    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
}

//Call stack
function greet(who) {
    console.log(`Hello ${who}`);
}

// greet("Tu chingada madre");
// console.log("Bye");

//Recursion
function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history}) * 3`);
        }
    }

    return find(1, "1");
}

/*

--------------- Exercise MINIMUM ---------------

Write a function min that takes two arguments and returns their minimum.

*/

function min(firstArgument, secondArgument) {
    return Math.min(firstArgument, secondArgument);
}

// console.log(min(0, 10));
// console.log(min(0, -10));

/*
 --------------- RECURSION ------------------------
 We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.
 */

function isEven(number) {
    if (number == 0) return "Is Even";
    else if (number == 1) return "Is Odd";
    else {
        number -= 2;
        return isEven(number);
    }
}

console.log(isEven(15));
console.log(isEven(20));