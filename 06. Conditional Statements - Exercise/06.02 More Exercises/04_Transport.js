function transport(input) {
    let distance = +input[0];
    let tariff = input[1];

    let price = 0;

    if (distance < 20) {
        if (tariff == "day") {
            price = 0.7 +  distance * 0.79;
        } else {
            price = 0.7 +  distance * 0.9;
        }
    } else if (20 <= distance && distance < 100) {
        price = distance * 0.09;
    } else if (distance >= 100) {
        price = distance * 0.06;
    }

    console.log(price.toFixed(2));
}

transport(["5", "day"]);
transport(["7", "night"]);
transport(["25", "day"]);
transport(["180", "night"]);