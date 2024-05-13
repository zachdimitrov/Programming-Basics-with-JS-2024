function pets(input) {
    let days = +input[0];
    let kgFood = +input[1];
    let dogFoodDay = +input[2];
    let catFoodDay = +input[3];
    let turtleFoodDay = +input[4];

    let foodNeeded = days * (dogFoodDay + catFoodDay + turtleFoodDay * 0.001);

    if (foodNeeded <= kgFood) {
        console.log(`${Math.floor(kgFood - foodNeeded)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(foodNeeded - kgFood)} more kilos of food are needed.`);
    }
}

pets(["2", "10", "1", "1", "1200",]);
pets(["5", "10", "2.1", "0.8", "321",]);