function evenOdd(input) {
    let num = +input[0];

    if (num % 2 == 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}

evenOdd(["2"]);
evenOdd(["3"]);
evenOdd(["25"]);
evenOdd(["1024"]);