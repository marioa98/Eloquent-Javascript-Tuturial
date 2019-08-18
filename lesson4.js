/**
 * =========== Data structures ===========
 * 
 * ----------- Objects -------------------
 * -> Object.assign(<Object name>, {<property1>: <value>, <property2>: <value>}) //Asigna nuevas propiedades o reemplaza valores a objetos ya creados.
 * -> Object.keys(<object>) //Devuelve el nombre de las propiedades del objeto
 * -> delete <object>.<property> //Elimina la propiedad del objeto indicado.
 */

//------------- Further Arrayology --------
let tasks = ["Go to dentist", "Work", "Buy groceries"];

function remember(task) {
    tasks.push(task);
    console.log(tasks);
}

function getTask() {
    tasks.shift(); //shift -> Quita el objeto en la primer posición del array(el de índice 0)
    console.log(tasks)
}

function rememberUrgently(task) {
    tasks.unshift(task); //unshift -> Agrega un objeto a la primera posición del array (obtiene el indice 0)
    console.log(tasks);
}

// remember("Lunch Dowtown");
// getTask();
// rememberUrgently("Office Meeting");

/**
 * Exercices
 * -------------- The Sum of a Range ---------------
 * The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers: 
 * console.log(sum(range(1, 10)));
 * Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
 * 
 * Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.
 * 
 * As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. 
 * If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. 
 * Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
 */

function range(start, end) {
    let numbers = [];
    for (let index = start; index <= end; index++) {
        numbers.push(index);
    }

    return numbers;
}

function sum(arrayNum) {
    let counter = 0;
    for (let index = 0; index < arrayNum.length; index++) {
        counter += arrayNum[index];
    }

    return counter;
}
// let numbersArray = range(1, 10);
// console.log(numbersArray);
// console.log(sum(numbersArray));

/**
 * -------- Array Reverse -----------------
 * Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. 
 * The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. 
 * The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. 
 * Neither may use the standard reverse method.
 * 
 * Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?
 */

function reverseArray(straightArray) {
    let reverseArray = [];
    for (let index = straightArray.length - 1; index >= 0; index--) {
        reverseArray.push(straightArray[index]);
    }
    console.log(reverseArray);
}

reverseArray(["A", "B", "C"]);