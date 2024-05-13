function pipesInPool(input) {
    let volume = +input[0];
    let P1 = +input[1];
    let P2 = +input[2];
    let hours = +input[3];

    let filled = P1 * hours + P2 * hours;

    if (filled <= volume) {
        let filledPercent = filled / volume * 100;
        let P1Percent = P1 * hours / filled * 100;
        let P2Percent = P2 * hours / filled * 100;

        console.log(`The pool is ${filledPercent.toFixed(2)}% full. Pipe 1: ${P1Percent.toFixed(2)}%. Pipe 2: ${P2Percent.toFixed(2)}%.`);
    } else {
        console.log(`For ${hours} hours the pool overflows with ${(filled - volume).toFixed(2)} liters.`);
    }
}

pipesInPool(["1000", "100", "120", "3"]);
pipesInPool(["100", "100", "100", "2.5"]);