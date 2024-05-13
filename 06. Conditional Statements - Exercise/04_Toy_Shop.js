function toyShop(input) {
    let exPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let allIncome = puzzles * 2.6 + dolls * 3 + bears * 4.1 + minions * 8.2 + trucks * 2;
    let allToys = puzzles + dolls + bears + minions + trucks;
    if (allToys >= 50) {
        allIncome = allIncome - allIncome * 0.25;
    }
    allIncome = allIncome - allIncome * 0.1;

    if (exPrice <= allIncome) {
        console.log(`Yes! ${(allIncome - exPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(exPrice - allIncome).toFixed(2)} lv needed.`);
    }
}

toyShop(["40.8",
"20",
"25",
"30",
"50",
"10"]);

toyShop(["320",
"8",
"2",
"5",
"5",
"1"]);

