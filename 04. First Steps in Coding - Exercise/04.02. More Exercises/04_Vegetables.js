function vegetableMarket(input) {
    let vegetablePrice = Number(input[0]);
    let fruitPrice = Number(input[1]);
    let vegetableKg = Number(input[2]);
    let fruitKg = Number(input[3]);

    let allIncome = (vegetableKg * vegetablePrice + fruitKg * fruitPrice) / 1.94;
    console.log(allIncome.toFixed(2));
}

vegetableMarket(["0.194","19.4","10","10"]);