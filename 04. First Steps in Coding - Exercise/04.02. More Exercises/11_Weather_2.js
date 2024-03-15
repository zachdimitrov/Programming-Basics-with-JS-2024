function weather(input) {
    let degrees = Number(input[0]);

    if (26 <= degrees && degrees <= 35) {
            console.log("Hot");
    } else if (20.1 <= degrees && degrees <= 25.9) {
            console.log("Warm");
    } else if (15 <= degrees && degrees <= 20) {
            console.log("Mild");
    } else if (12 <= degrees && degrees <= 14.9) {
            console.log("Cool");
    } else if (5 <= degrees && degrees <= 11.9) {
            console.log("Cold");
    } else console.log("unknown");
}

weather(["16.5"]);
weather(["8"]);
weather(["22.4"]);
weather(["26"]);
weather(["0"]);