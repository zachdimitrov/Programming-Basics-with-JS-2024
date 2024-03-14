function weather(input) {
    let command = input[0];

    if (command == "sunny") {
        console.log("It's warm outside!")
    } else {
        console.log("It's cold outside!")
    }
}

weather(["sunny"]);
weather(["clowdy"]);
weather(["hail"]);