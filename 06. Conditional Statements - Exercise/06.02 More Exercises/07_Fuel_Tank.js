function fuelTank(input) {
    let fuel = input[0];
    let liters = +input[1];

    if (fuel != "Diesel" && fuel != "Gas" && fuel != "Gasoline") {
        console.log("Invalid fuel!");
    } else {
        if (liters < 25) {
            console.log(`Fill your tank with ${fuel.toLowerCase()}!`);
        } else {
            console.log(`You have enough ${fuel.toLowerCase()}.`);
        }
    }
}

fuelTank(["Diesel", "10"]);
fuelTank(["Gasoline", "40"]);
fuelTank(["Gas", "25"]);
fuelTank(["Kerosine", "10"]);
fuelTank(["Diesel", "200"]);