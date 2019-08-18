function loopingTriangle(times) {
    let counter = 1;
    let hashes = "#";

    while (counter <= times) {
        console.log(hashes);
        hashes += "#";
        counter++;
    }
}

function fizzBuzz() {
    for (let index = 1; index <= 100; index++) {
        if (index % 3 == 0 && index % 5 != 0) console.log("Fizz");
        else if (index % 5 == 0 && index % 3 != 0) console.log("Buzz");
        else if (index % 5 == 0 && index % 3 == 0) console.log("FizzBuzz");
        else console.log(index);
    }
}

fizzBuzz();