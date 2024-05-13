function fuelExpert(input) {
    let typeFuel = input[0];
    let quantity = +input[1];
    let clubCard = input[2];

    let price = 0;

    if (typeFuel == "Gasoline") {
        if (clubCard == "Yes") {
            price = quantity * (2.22 - 0.18);
        } else {
            price = quantity * 2.22;
        }
    } else if (typeFuel == "Diesel") {
        if (clubCard == "Yes") {
            price = quantity * (2.33 - 0.12);
        } else {
            price = quantity * 2.33;
        }
    } else if (typeFuel == "Gas") {
        if (clubCard == "Yes") {
            price = quantity * (0.93 - 0.08);
        } else {
            price = quantity * 0.93;
        }
    }

    if (quantity >= 20 && quantity <= 25) {
        price = price - price * 0.08;
    } else if (quantity > 25) {
        price = price - price * 0.1;
    }

    console.log(`${price.toFixed(2)} lv.`);
}

fuelExpert(["Gas", "30", "Yes"]);
fuelExpert(["Gasoline", "25", "No"]);
fuelExpert(["Diesel", "19", "No"]);